import axios, { AxiosRequestConfig } from "axios";
import { USERBASEURL } from "../../config/config";

const apiConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'Application/json',
    },
  };
  
  export const baseAxiosInstance = axios.create(apiConfig);

  export async function Authenticate(payload: any) {
    try {
      const response = await baseAxiosInstance.post(`${USERBASEURL}/user/auth`, payload);
      return response;
    } catch (err) {
      console.log(err);
      throw err; // Rethrow the error to handle it outside
    }
  }

  export async function createUser(payload: any) {
    try {
      const response = await baseAxiosInstance.post(`${USERBASEURL}/users`, payload);
      return response;
    } catch (err) {
      console.log(err);
      throw err; // Rethrow the error to handle it outside
    }
  }
  