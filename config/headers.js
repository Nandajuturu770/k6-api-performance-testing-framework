import {HEADER_CONFIG_ORIGIN, HEADER_CONFIG_REFERER, HEADER_CONFIG_X_TENANT_ID, AUTH_TOKEN} from '../env.js';

/**
 * The values for origin, referer, xTenantId, and token are imported from the environment variables defined in the env.js file.
 */
const origin = __ENV.HEADER_ORIGIN || HEADER_CONFIG_ORIGIN;
const referer = __ENV.HEADER_REFERER || HEADER_CONFIG_REFERER;
const xTenantId = __ENV.X_TENANT_ID || HEADER_CONFIG_X_TENANT_ID;
const token = __ENV.AUTH_TOKEN || AUTH_TOKEN;

/**
 * Configuration file for API headers, including a function to set headers with an optional token.
 */
export const setHeadersWithoutToken = JSON.stringify({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0',
    'Origin': origin,
    'Referer': referer,
    'X-Tenant-Id': xTenantId
});

/**
 * Configuration for headers when an authentication token is required, including the Authorization header with the Bearer token.
 */
export const setHeadersWithToken = JSON.stringify({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        'Origin': origin,
        'Referer': referer,
        'X-Tenant-Id': xTenantId,
        'Authorization': `Bearer ${token}`
    });