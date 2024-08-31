// export const endPoint = "https://cert.pprtrl.app/v1/api"
export const endPoint = "http://localhost:4000/api"

const signUp = endPoint + '/signUp';
const login = endPoint + '/login';
const getRecording = endPoint + '/getRecording'
const addDomain=endPoint+ '/addDomain';
const createAccount=endPoint+ '/createAccount';
const getDomains=endPoint+'/getDomain';
const getDomainToken=endPoint+'/getDomainToken';
const updateUser=endPoint+'/updateUser';
const getRecordingToken=endPoint+'/getRecordingToken';
const getSharedRecording=endPoint+'/getSharedRecording';

export const endPoints = {
    signUp,
    login,
    getRecording,
    addDomain,
    createAccount,
    getDomains,
    getDomainToken,
    updateUser,
    getRecordingToken,
    getSharedRecording,
}
