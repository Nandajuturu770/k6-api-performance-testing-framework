
# PROJECT OVERVIEW
----------------------------------------------------------------------------
Purpose:
----------------------------------------------------------------------------
This framework is designed for performance and load testing of REST APIs using k6 (open-source load testing tool). It supports data-driven testing with CSV files, real-time monitoring with Prometheus/Grafana, and generates HTML reports.

KEY FEATURES:
------------
1. Data-driven testing using CSV files
2. Prometheus + Grafana integration for real-time metrics
3. Support Multiple executor types for different test scenarios
4. Automatic HTML report generation

TECHNOLOGY STACK:
----------------
- k6 (v0.40+) -    Load testing tool
- JavaScript  - Test scripting
- Prometheus  - Metrics storage
- Grafana     - Visualization
- Docker      - Containerization (optional)

----------------------------------------------------------------------------
# !-- Docker Commands to execute the apis -- !
----------------------------------------------------------------------------
Stop Ports : docker-compose down
Start Ports : docker-compose up -d
Remove stopped containers : docker container prune -f
Remove unused images : docker image prune -a -f
Remove unused volumes : docker volume prune -f
clean EVERYTHING : docker system prune -a --volumes -f

----------------------------------------------------------------------------
# Step to run the k6 tool using Prometheus Database
----------------------------------------------------------------------------
- Start Ports : docker-compose up -d
1. Build connection between K6 to Prometheus Database : set K6_PROMETHEUS_RW_SERVER_URL=http://localhost:9090/api/v1/write
2. Save History : set K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true
3. Run Apis : k6 run --out experimental-prometheus-rw test/mainTest.js

----------------------------------------------------------------------------
# K6 - Executors
----------------------------------------------------------------------------
1. constant-vus - Fixed users for a fixed time
   export const options = {
     scenarios: {
     test: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
        },
      },
     };
- 10 users run continuously for 30 seconds
- Each user loops your script

2. ramping-vus - Increase/decrease users gradually
    stages: [
       { duration: '30s', target: 10 },
       { duration: '1m', target: 50 },
       { duration: '30s', target: 0 },
    ]
- Simulates real traffic growth
- Users ramp up/down

3. shared-iterations - Fixed number of total iterations shared by all users
   export const options = {
         scenarios: {
         test: {
          executor: 'shared-iterations',
          vus: 5,
          iterations: 50,
         }
        }
   }
- 5 users together complete 50 iterations
- Fast users do more work

4. per-vu-iterations - Each user runs fixed iterations
    export const options = {
         scenarios: {
         test: {
          executor: 'per-vu-iterations',
          vus: 5,
          iterations: 10,
         }
        }
   }
- Each user runs 10 times
- Total = 5 × 10 = 50

5. constant-arrival-rate - Requests per second (RPS-based)
 export const options = {
         scenarios: {
         test: {
          executor: 'constant-arrival-rate',
          rate: 10,
          timeUnit: '1s',
          duration: '30s',
          preAllocatedVUs: 20,
         }
        }
   }
- 10 requests per second
- k6 automatically adds VUs if needed

----------------------------------------------------------------------------
# HOW TO RUN TESTS
----------------------------------------------------------------------------
TEST TYPES AND COMMANDS:
------------------------

1. SMOKE TEST (Quick validation)
   --------------------------------
   Command: k6 run --vus 1 --iterations 1 test/mainTest.js
   Purpose: Verify script works, no syntax errors
   Duration: < 10 seconds
   When to use: After any script changes

2. LOAD TEST (Normal expected load)
   ---------------------------------
   Command: k6 run --vus 50 --duration 5m test/mainTest.js
   Purpose: Test performance under expected load
   Duration: 5-15 minutes
   When to use: Before releases, after major changes

3. STRESS TEST (Find breaking points)
   -----------------------------------
   Command: k6 run --stage 2m:20 --stage 5m:100 --stage 2m:0 test/mainTest.js
   Purpose: Find system limits and breaking points
   Duration: 10-30 minutes
   When to use: Capacity planning, finding bottlenecks

4. SOAK TEST (Long-term stability)
   --------------------------------
   Command: k6 run --vus 100 --duration 8h test/mainTest.js
   Purpose: Detect memory leaks, stability issues
   Duration: 8-24 hours
   When to use: Before major releases, after architecture changes

5. SPIKE TEST (Sudden traffic surge)
   ----------------------------------
   Command: k6 run --stage 10s:0 --stage 30s:500 --stage 30s:0 test/mainTest.js
   Purpose: Test handling of sudden traffic spikes
   Duration: 5-10 minutes
   When to use: For auto-scaling validation

----------------------------------------------------------------------------
# PROMETHEUS METRICS:
----------------------------------------------------------------------------
When running with --out experimental-prometheus-rw, these additional metrics are available:

- k6_http_req_duration_seconds
- k6_http_req_failed_total
- k6_vus
- k6_iterations_total
- Custom metrics with k6_ prefix

----------------------------------------------------------------------------
# GRAFANA DASHBOARD:
----------------------------------------------------------------------------
1. Import dashboard ID: 19665
2. Or use: https://grafana.com/grafana/dashboards/19665
3. Dashboard includes:
   - Request rate over time
   - Response time percentiles
   - Error rates
   - VU count over time
   - Throughput metrics

----------------------------------------------------------------------------
#  COMMANDS
----------------------------------------------------------------------------
# K6 Tool CMDS
----------------------
# Run test with default options
k6 run script.js

# Run with specific VUs and duration
k6 run --vus 10 --duration 30s script.js

# Run with iterations
k6 run --vus 5 --iterations 100 script.js

# Run with environment variable
k6 run -e BASE_URL=https://api.com script.js

# Run with stage (ramping)
k6 run --stage 2m:10 --stage 5m:50 --stage 2m:0 script.js

# Docker CMDS
----------------------
# Start all services (Prometheus + Grafana)
docker-compose up -d

# Start with verbose output (see logs in real-time)
docker-compose up

# Start specific service only
docker-compose up -d prometheus
docker-compose up -d grafana

# Start with custom compose file name
docker-compose -f docker-compose.yml up -d

# Stop all services
docker-compose down

# Stop and remove volumes (deletes all data)
docker-compose down -v

# Stop specific service
docker-compose stop prometheus

# Stop all running containers
docker-compose stop

# Clean everything
docker-compose down -v

----------------------------------------------------------------------------
# QUICK REFERENCE - ALL IN ONE LINE (Copy-Paste Ready)
----------------------------------------------------------------------------

# Shared Iterations
set K6_PROMETHEUS_RW_SERVER_URL=http://localhost:9090/api/v1/write && .\k6.exe run -o xk6-prometheus-rw -u 10 -i 100 --max-duration 30s script.js

# Per-VU Iterations
set K6_PROMETHEUS_RW_SERVER_URL=http://localhost:9090/api/v1/write && .\k6.exe run -o xk6-prometheus-rw -u 10 -i 20 --max-duration 5m script.js

# Constant VUs
set K6_PROMETHEUS_RW_SERVER_URL=http://localhost:9090/api/v1/write && .\k6.exe run -o xk6-prometheus-rw -u 50 -d 10m script.js

# Ramping VUs
set K6_PROMETHEUS_RW_SERVER_URL=http://localhost:9090/api/v1/write && .\k6.exe run -o xk6-prometheus-rw --stage 2m:20 --stage 5m:100 --stage 2m:0 script.js

# Constant Arrival Rate
set K6_PROMETHEUS_RW_SERVER_URL=http://localhost:9090/api/v1/write && .\k6.exe run -o xk6-prometheus-rw --rps 200 -d 5m -u 20 --max-vus 100 script.js

# Ramping Arrival Rate
set K6_PROMETHEUS_RW_SERVER_URL=http://localhost:9090/api/v1/write && .\k6.exe run -o xk6-prometheus-rw --stage 1m:100 --stage 3m:500 --stage 1m:0 --rps-start 10 --max-vus 200 script.js