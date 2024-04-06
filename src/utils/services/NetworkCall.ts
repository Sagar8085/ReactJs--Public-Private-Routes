import { ToastOnSuccess } from "../Toast/Toast";

import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

export const HttpCallPost = async (url: any, body: any, token?: any) => {
  return new Promise( function (resolve, reject) {
    let obj = {};
    if (token) {
      obj = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    } else {
      obj = {
        "Content-Type": "application/json",
      };
    }
    axios({
      method: "post",
      url: baseURL + url,
      headers: obj,
      data: body,
    })
      .then((response: any) => {
        if (response?.data?.status == 401) {
          ToastOnSuccess(response?.data?.msg + ", Please login again.");
        }
        return resolve(response);
      })
      .catch((err: any) => {
        return reject(err);
      });
  });
};

export const HttpCallGet = async (endPointURL: any, token?: any) => {
  return new Promise( function (resolve, reject) {
    let obj = {};
    if (token && token.trim() !== "") {
      obj = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    } else {
      obj = {
        "Content-Type": "application/json",
      };
    }
    const url = endPointURL;
    axios({
      method: "GET",
      url: baseURL + url,
      headers: obj,
    })
      .then((response: any) => {
        if (response?.data?.status == 401) {
          ToastOnSuccess(response?.data?.msg + ", Please login again.");
        }

        return resolve(response);
      })
      .catch((err: any) => {
        return reject(err);
      });
  });
};
