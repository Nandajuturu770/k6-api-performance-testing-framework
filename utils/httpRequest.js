import http from 'k6/http';
import { headersWithoutToken, setHeaders } from '../config/headers.js';
import { getToken } from '../config/configPath.js';

const env = __ENV.ENV || 'nprd';

/**
 * This function is used for making API calls based on the provided API configuration.
 * @param {api} api- An object containing the all API details.
 * @returns {Response} response- The response received from the API call.
 * @throws Will throw an error if the HTTP method is unsupported.
 */
export function callAPI(api) {
    
    let response;
    const method = (api.method || '').toLowerCase();
    const reqBody = api.payload ? JSON.stringify(api.payload) : null;
    const params = {
        headers: api.authRequired == true ? JSON.parse(setHeaders(getToken(env))) : JSON.parse(headersWithoutToken),
    };

    switch (method) {
        case 'get':
            response = http.get(api.url, params);
            break;
        case 'post':
            response = http.post(api.url, reqBody, params);
            break;
        case 'put':
            response = http.put(api.url, reqBody, params);
            break;
        case 'delete':
            response = http.del(api.url, reqBody, params);
            break;
        default:
            throw new Error(`Unsupported method: ${api.method}`);
    }
    return response;
}