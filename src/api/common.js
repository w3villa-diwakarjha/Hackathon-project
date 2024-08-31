import { endPoints } from "./endPoint";
import { httpRequest } from "./httpRequest";

export const _signup = async (data) => {
    return await httpRequest({
        method: 'POST',
        url: endPoints.signUp,
        data: data,
    });
};

export const _login = async (data) => {
    return await httpRequest({
        method: 'POST',
        url: endPoints.login,
        data: data,
    });
};
export const _getrecording = async (token, buttonId,domainId) => {
    try {
        let url = endPoints.getRecording;
        if (buttonId) {
            url += `?recording_id=${buttonId}`; // Include buttonId in the URL query string if it's provided
        }
        if(domainId)
        {
            url += `?domain_id=${domainId}`;
        }

        const response = await httpRequest({
            method: 'GET',
            url: url,
            sendToken: true,
            token: token
        });
        return response;
    } catch (error) {
        console.error('Error fetching recording:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
};
export const _addDomain = async (token,data) => {
    try {
        const response = await httpRequest({
            method: 'POST',
            url: endPoints.addDomain,
            token: token,
            data:data,
            sendToken: true,
        });
        return response;
    } catch (error) {
        console.error('Error while fetching the data', error);
        throw error;
    }
};
export const _createAccount=async (token,data)=>{
    try {
        const response = await httpRequest({
            method: 'POST',
            url: endPoints.createAccount,
            data: data,
            token:token,
            sendToken: true,
        });
        return response;
    } catch (error) {
        console.error('Error while fetching the data', error);
        throw error;
    }
};
export const _getDomains=async (token,accountId)=>{
    try{
        let url=endPoints.getDomains+`?account_id=${accountId}`;
        
        const response = await httpRequest({
            method: 'GET',
            url: url,
            token:token,
            sendToken: true,
        });
        return response;
    } catch (error) {
        console.error('Error while fetching the data', error);
        throw error;
    }
};
export const _updateUser=async (token,current_domain_id)=>{
    try{
        
        const response = await httpRequest({
            method: 'PUT',
            url: endPoints.updateUser,
            data: {current_domain_id},
            token:token,
            sendToken: true,
        });
        return response;
    } catch (error) {
        console.error('Error while fetching the data', error);
        throw error;
    }
};
export const _getDomainToken = async (token,domainId) => {
    try {
        let url = endPoints.getDomainToken;
        if(domainId)
        {
            url += `?domain_id=${domainId}`;
        }

        const response = await httpRequest({
            method: 'GET',
            url: url,
            sendToken: true,
            token: token
        });
        return response;
    } catch (error) {
        console.error('Error fetching recording:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
};
export const _getRecordingToken=async (token,recordingId)=>{
    try {
        let url = endPoints.getRecordingToken;
        if(recordingId)
        {
            url += `?recording_id=${recordingId}`;
        }

        const response = await httpRequest({
            method: 'GET',
            url: url,
            sendToken: true,
            token: token
        });
        return response;
    } catch (error) {
        console.error('Error fetching recording:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
};
export const _getSharedRecording=async (sharedToken)=>{
    try {
        let url = endPoints.getSharedRecording;
        if(sharedToken)
        {
            url += `?token=${sharedToken}`;
        }

        const response = await httpRequest({
            method: 'GET',
            url: url
        });
        return response;
    } catch (error) {
        console.error('Error fetching recording:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
};