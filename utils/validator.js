import { check } from 'k6';

/**
 * This function validates the API response against the expected status and response time defined in the API data.
 * @param {Object} api - The API data object containing the expected status and response time for validation.
 * @param {Response} response - The response object received from the API call to be validated.
 */
export function validate(api, response) {

    check(response, {
        [`${api.name} - status ${api.expectedStatus}`]: (r) =>
            r.status === Number(api.expectedStatus),
        [`${api.name} - response time < ${api.threshold}`]: (r) =>
            r.timings.duration < Number(api.threshold),
    });
    
}