import axios from "axios";
import { APP_STORAGE } from "../ultis/constants";

export default class DefaultAxios {
  api;

  constructor(baseURL: string, contentType?: string) {
    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": contentType ? contentType : "application/json",
      },
    });
  }

  setToken = () => {
    const token = localStorage.getItem(APP_STORAGE.ACCESS_TOKEN);
    if (token) {
      this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  };

  get = (url = "", config = {}) => {
    this.setToken();
    const getRequest = this.api.get(url, config);
    return getRequest;
  };

  post = (url = "", body = {}, config = {}) => {
    this.setToken();
    const postRequest = this.api.post(url, body, config);
    return postRequest;
  };

  patch = (url = "", body = {}, config = {}) => {
    this.setToken();
    const patchRequest = this.api.patch(url, body, config);
    return patchRequest;
  };

  put = (url = "", body = {}, config = {}) => {
    this.setToken();
    const putRequest = this.api.put(url, body, config);
    return putRequest;
  };

  delete = (url = "", config = {}) => {
    this.setToken();
    const deleteRequest = this.api.delete(url, config);
    return deleteRequest;
  };
}
