import axios, { AxiosError } from "axios";

function handleError(error: AxiosError) {
  if (axios.isCancel(error)) {
    console.log("Axios is canceled");
  } else {
    const response = error.response;
    switch (response?.status) {
      case 400:
        console.log({
          message: `${response.status}: Bad request`,
          description: response?.statusText ?? "Unexpected error",
        });
        break;
      case 500:
        console.log({
          message: `${response.status}: Internal server busy`,
          description: response?.statusText ?? "Unexpected error",
        });
        break;
      default:
        console.log({
          message: `Error Code: ${response?.status ?? response?.status}`,
          description: response?.statusText ?? "Unexpected error",
        });
        break;
    }
  }
}

const httpInstance = axios.create({
  timeout: 5000,
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

httpInstance.defaults.headers.common.isLoading = true;
httpInstance.defaults.headers.common.successAlert = false;
httpInstance.defaults.headers.common.errorAlert = true;
Object.setPrototypeOf(httpInstance, axios);

httpInstance.interceptors.request.use(async (config) => {
  config.headers.Authorization = "secret token";
  return config;
});

httpInstance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    handleError(error);
    return Promise.reject(error);
  }
);

export default httpInstance;
