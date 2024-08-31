import axios from 'axios';

export const httpRequest = async ({ method, url, params, data='',sendToken,token }) => {
    try {
        
        const options = {
            method: method,
            url: url,
            params: params,
            data: data,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        if(sendToken){
            options.headers.token = token;
        }
        const response = await axios(options);
        return response;
    } catch (error) {
        console.error('Error:', error);
        if (error.response) {
            console.log("error response :", error.response)
        } else {
            console.log('An error occurred while processing your request.');
        }
        throw error;
    }
};
