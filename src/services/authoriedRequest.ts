import DefaultAxios from "./defaultAxios";

const API_URL = process.env.REACT_APP_API_URL || '';

const authorizedRequest = new DefaultAxios(API_URL);
authorizedRequest.setToken();

export default authorizedRequest;
