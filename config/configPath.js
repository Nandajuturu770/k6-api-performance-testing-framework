/**
 * Configuration file for folder paths and tokens
 */
export const folderPath = {
    TOP_SCHOOLS_APIS_PATH : '../data/topschoolapis.csv',
    APIS_DATA_PATH: '../data/apis.csv',
}

/**
 * Tokens for different environments.
 */
export const tokens = {
    UAT_AUTH_TOKEN: '',
    PROD_AUTH_TOKEN: '',
    NPRD_AUTH_TOKEN: '',
}

/**
 * This function returns the appropriate token based on the provided environment variable.
 * @param {String} env - The environment for which the token is required.
 * @returns {String} token - The authentication token for the specified environment.
 * @throws Will throw an error if the environment is unsupported.
 */
export const getToken = (env) => {
    switch (env.toLowerCase()) {
        case 'prod':
            return tokens.PROD_AUTH_TOKEN;
        case 'nprd':
            return tokens.NPRD_AUTH_TOKEN;
        case 'uat':
            return tokens.UAT_AUTH_TOKEN;
        default:
            throw new Error(`Unsupported environment: ${env}`);
    }
}