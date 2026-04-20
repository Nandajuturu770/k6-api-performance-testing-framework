import { headerConfig,} from './env.js';

const origin = headerConfig.ORIGIN;
const referer = headerConfig.REFERER;
const xTenantId = headerConfig.X_TENANT_ID;

/**
 * Configuration file for API headers, including a function to set headers with an optional token.
 */
export const headersWithoutToken = JSON.stringify({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0',
    'Origin': origin,
    'Referer': referer,
    'X-Tenant-Id': xTenantId
});

/**
 * This function sets the headers for API requests, including the Authorization header if a token is provided.
 * @param {String} token - The authentication token to be included in the headers.
 * @returns {JSON.stringifytring} - A JSON stringified object containing the headers for the API request.
 */
export function setHeaders(token) {
    return JSON.stringify({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        'Origin': origin,
        'Referer': referer,
        'X-Tenant-Id': xTenantId,
        'Authorization': `Bearer ${token}`
    });
}