import * as Papa from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

/**
 * This method is used to safely parse the payload from the csv file.
 * @param {*} payload - the payload to be parsed.
 * @returns Json object if the payload is valid, null otherwise.
 */
function safeParse(payload) {
    try {
        if (!payload) return null;

        if (payload.startsWith('"') && payload.endsWith('"')) {
            payload = payload.slice(1, -1);
        }
        payload = payload.replace(/\\"/g, '"');
        return JSON.parse(payload);
    } catch (e) {
        return null;
    }
}

/**
 * This method is used to read the csv file and return the data in the form of an array of objects.
 * @param {*} filePath - the path of the csv file to be read.
 * @returns array of objects.
 */
export function getCSVData(filePath) {
    const csvData = open(filePath);

    const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
    }).data;

    return parsedData.map(row => {
        let fullPayload = row.payload;

        if (row.__parsed_extra) {
            fullPayload += ',' + row.__parsed_extra.join(',');
        }

        return {
            ...row,
            expectedStatus: Number(row.expectedStatus),
            responseTime: Number(row.responseTime),
            payload: safeParse(fullPayload),
        };
    });
}