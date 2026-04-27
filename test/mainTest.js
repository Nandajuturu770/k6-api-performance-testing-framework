import { callAPI } from '../utils/httpRequest.js';
import { validate } from '../utils/validator.js';
import { sleep } from 'k6';
import { getCSVData } from '../utils/csvParse.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import {SET_FILE_PATH} from '../env.js';

const csvPath = __ENV.CSV_PATH || SET_FILE_PATH;

console.log(`Using CSV file path: ${csvPath}`);

const apiData = getCSVData(csvPath);
export const options = {

    vus: apiData.length,
    iterations: apiData.length*2,
    duration: '30s',

};

/**
 * This main function tests the APIs by iterating through the API data obtained from the CSV file
 */
export default function () {

    console.log("API Performance Testing Started...");
    console.log(`Total number of APIs is ${apiData.length}`);
    for (let i = 0; i < apiData.length; i++) {
        const api = apiData[i];
        console.log(`URL :: ${api.url} \nMethod :: ${api.method}`);
        console.log(`Auth Required: ${api.authRequired}`);
        console.log(`Expected Status :: ${api.expectedStatus} \nExpected Response Time: ${api.responseTime}ms`);
        const response = callAPI(api);
        validate(api, response);
        sleep(1);
    }

}

/**
 * This function handles the summary of the test execution and generates an HTML report with a timestamped filename.
 * @param {*} data - The data object containing the results of the test execution.
 * @returns {Object} An object containing the filename and content of the generated HTML report.
 */
export function handleSummary(data) {
    
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;

    return {
        [`./reports/report_${formattedTime}.html`]: htmlReport(data),
    };
}