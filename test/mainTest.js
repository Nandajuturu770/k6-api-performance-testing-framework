import { callAPI } from '../utils/httpRequest.js';
import { validate } from '../utils/validator.js';
import { folderPath } from '../config/configPath.js';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { getCSVData } from '../utils/csvParse.js';

const apiData = getCSVData(folderPath.APIS_DATA_PATH);
export const options = {

    vus: 1,
    duration: '1s',

};

/**
 * This main function tests the APIs by iterating through the API data obtained from the CSV file
 */
export default function () {

    console.log("API Performance Testing Started...");
    const api = apiData[__ITER % apiData.length];
    console.log(`URL :: ${api.url} \nMethod :: ${api.method}`);
    console.log(`Auth Required: ${api.authRequired} \nPayload :: ${JSON.stringify(api.payload)}`);
    console.log(`Expected Status :: ${api.expectedStatus} \nExpected Response Time: ${api.responseTime}ms`);
    const response = callAPI(api);
    validate(api, response);
    sleep(1);

}
/**
 * This function handles the summary of the test execution and generates an HTML report with a timestamped filename.
 * @param {*} data - The data object containing the results of the test execution.
 * @returns {Object} An object containing the filename and content of the generated HTML report.
 */
export function handleSummary(data) {

    const now = new Date();
    const formattedTime = now.toISOString().replace(/[:.]/g, '-');
    return {
        [`../reports/report_${formattedTime}.html`]: htmlReport(data),
    };

}