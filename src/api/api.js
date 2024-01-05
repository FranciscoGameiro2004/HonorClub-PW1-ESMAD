/**
 * GET utility function
 * @param {string} apiBaseUrl - this is the base URL from the API
 * @param {string} endPoint - this is endpoint of the API
 * @returns a promise object with the response
 */
export async function get(apiBaseUrl, endPoint){
    try {
        const response = await fetch(`${apiBaseUrl}/${endPoint}`)
        return handleResponse(response)
    } catch (error) {
        throw error
    }
}

/**
 * POST utility function
 * @param {string} apiBaseUrl - this is the base URL from the API
 * @param {string} endPoint - this is endpoint of the API
 * @param {string} data - this is the data that will be sent to the server
 * @returns a promise object with the response
 */
export async function post(apiBaseUrl, endPoint, data){
    try {
        const response = await fetch(`${apiBaseUrl}/${endPoint}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return handleResponse(response)
    } catch (error) {
        throw error
    }
}

/**
 * Response handling
 * @param {string} response - a promise object with the response of the server
 * @returns the response of the server
 */
async function handleResponse(response){
    if (!response.ok){
        const errorMessage = await response.text()
        throw new Error(`API request failed with status ${response.status}: ${errorMessage}`)
    }
    const data = await response.json()
    return data
}