import axios from "axios";

interface CreateApiParams {
  baseURL: string;
  mock?: boolean;
}

export const createApi = ({ baseURL, mock: mockService }: CreateApiParams) => {
  const api = axios.create();

  const getUrl = (url: string, mock?: boolean) => {
    const isMock = mockService || mock;
    const apiBaseUrl = isMock ? '' : baseURL;
    
    return apiBaseUrl + url;
  };

  return {
    get: (url: string, mock = false) => {
      const apiUrl = getUrl(url, mock);
      return api.get(apiUrl)
    },
    post: <T>(url: string, data: T, mock?: boolean) => {
      const apiUrl = getUrl(url, mock);
      return api.post(apiUrl, data)
    },
    put: <T>(url: string, data: T, mock?: boolean) => {
      const apiUrl = getUrl(url, mock);
      return api.put(apiUrl, data)
    },
    delete: (url: string, mock?: boolean) => [
      api.delete(getUrl(url, mock))
    ],
  };
};
