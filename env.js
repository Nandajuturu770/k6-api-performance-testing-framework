/**
 * Header configuration for API requests for particular school.
 * Note: The values for origin, referer, xTenantId, and token should be updated according to the specific school and environment being tested.
 */
export const HEADER_CONFIG_ORIGIN = 'https://vidyapradhanp6.thetopschool.com';
export const HEADER_CONFIG_REFERER = 'https://vidyapradhanp6.thetopschool.com/';
export const HEADER_CONFIG_X_TENANT_ID = '19g6wlsyr9p1z';

/**
 * Authentication token for API requests for particular school.
 * Note: This token will expire after a certain period of time (30days), and should be updated accordingly to ensure successful API requests.
 */
export const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwiaWQiOjEsImVtYWlsIjoicmFtdTgxNC5kQGdtYWlsLmNvbSIsInVzZXJSZWZJZCI6MSwiVXNlclJvbGVJRCI6MSwidXNlckN1c3RvbVJvbGVJRCI6bnVsbCwicm9sZU5hbWUiOiJBZG1pbiIsImZpcnN0TmFtZSI6Im50dCIsImxhc3ROYW1lIjoicHJtdXNlciIsInVzZXJOYW1lIjoibnR0cHJtdXNlciIsInBob25lTnVtYmVyIjoiNjIxODY3MzcyMCIsInBhc3N3b3JkIjoiJDJhJDEwJERkNnlYbENOTXBlTUJMLmRDOWkvRU9uTHR2ZDZTbmE0YjRuaXhYMTV6b0xJOVladUU1ai5DIiwibG9naW5TdGF0dXMiOnRydWUsImlzUGFzc3dvcmRFeHBpcmVzIjpmYWxzZSwicHJvZmlsZVBob3RvIjpudWxsLCJwcml2aWxhZ2VzIjpbeyJ1c2VySWQiOjEsInByaXZpbGFnZUlkIjpudWxsLCJkb21haW5OYW1lIjpudWxsLCJkb21haW5JZCI6bnVsbCwiaXNFZGl0YWJsZSI6dHJ1ZSwiaXNWaWV3YWJsZSI6dHJ1ZSwiaXNBcHByb3ZhbCI6dHJ1ZSwiaXNQcmludGFibGUiOnRydWV9XSwiaXNHYXRlU3RhZmYiOmZhbHNlLCJpc1N1cGVyQWRtaW4iOnRydWUsImlzUHJvbW90aW9uSW5Qcm9ncmVzcyI6ZmFsc2UsImlzUHJlc2V0dXBDb21wbGV0ZSI6dHJ1ZSwiaW5zdGl0dXRlSWQiOjM2MiwiYXZhaWxhYmxlTW9kdWxlcyI6WzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDI0LDI2LDI4LDMzLDM2XX0sImlhdCI6MTc3NzE4Mzg2OSwiZXhwIjoxNzc5Nzc1ODY5fQ.uIMztcb58pu5dMuDye_8Ggl9VFR5ruelCSIRZoN9icc';

/**
 * File paths for API data and top schools APIs data.
 * Note: The file paths should be updated according to the location of the CSV files..
 */
export const FILE_PATHS = {
    TOP_SCHOOLS_APIS_PATH: '../data/topschoolapis.csv',
    APIS_DATA_PATH: '../data/apis.csv',
}

/**
 * File path for API data for testing.
 * Note: The file path should be updated according to the location of the CSV file containing the API data for testing.
 */
export const SET_FILE_PATH = FILE_PATHS.TOP_SCHOOLS_APIS_PATH;
