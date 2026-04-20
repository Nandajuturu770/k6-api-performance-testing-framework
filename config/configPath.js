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
    PROD_AUTH_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwiaWQiOjEsImVtYWlsIjoicmFtdTgxNC5kQGdtYWlsLmNvbSIsInVzZXJSZWZJZCI6MSwiVXNlclJvbGVJRCI6MSwidXNlckN1c3RvbVJvbGVJRCI6bnVsbCwicm9sZU5hbWUiOiJBZG1pbiIsImZpcnN0TmFtZSI6Im50dCIsImxhc3ROYW1lIjoicHJtdXNlciIsInVzZXJOYW1lIjoibnR0cHJtdXNlciIsInBob25lTnVtYmVyIjoiNjIxODY3MzcyMCIsInBhc3N3b3JkIjoiJDJhJDEwJERkNnlYbENOTXBlTUJMLmRDOWkvRU9uTHR2ZDZTbmE0YjRuaXhYMTV6b0xJOVladUU1ai5DIiwibG9naW5TdGF0dXMiOnRydWUsImlzUGFzc3dvcmRFeHBpcmVzIjpmYWxzZSwicHJvZmlsZVBob3RvIjpudWxsLCJwcml2aWxhZ2VzIjpbeyJ1c2VySWQiOjEsInByaXZpbGFnZUlkIjpudWxsLCJkb21haW5OYW1lIjpudWxsLCJkb21haW5JZCI6bnVsbCwiaXNFZGl0YWJsZSI6dHJ1ZSwiaXNWaWV3YWJsZSI6dHJ1ZSwiaXNBcHByb3ZhbCI6dHJ1ZSwiaXNQcmludGFibGUiOnRydWV9XSwiaXNHYXRlU3RhZmYiOmZhbHNlLCJpc1N1cGVyQWRtaW4iOnRydWUsImlzUHJvbW90aW9uSW5Qcm9ncmVzcyI6ZmFsc2UsImlzUHJlc2V0dXBDb21wbGV0ZSI6dHJ1ZSwiaW5zdGl0dXRlSWQiOjM2MiwiYXZhaWxhYmxlTW9kdWxlcyI6WzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDI0LDI2LDI4LDMzLDM2XX0sImlhdCI6MTc3NjcwMDU4MiwiZXhwIjoxNzc5MjkyNTgyfQ.ZKeY4M7rbKb_QKP6wqPvg6xU9bvFfTwk1FGcQmm2JKM',
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