import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
});

axiosInstance.interceptors.response.use(undefined, (err) => {
  const expectedError =
    err.response && err.response.status >= 400 && err.response;

  if (expectedError) {
    // Loggear mensaje de error a un servicio como Sentry
    // Mostrar error genérico al usuario
    console.log("hubo un error");
    return Promise.reject(err);
  }
});

export const api_get = (url, headers = {}) => {
  return new Promise((res, rej) => {
    axiosInstance
      .get(url, headers)
      .then(({ data }) => {
        res(data);
      })
      .catch((err) => {
        return rej(err);
      });
  });
};
export const api_post = (url, body, headers = {}) => {
  return new Promise((res, rej) => {
    axiosInstance
      .post(url, body, headers)
      .then(({ data }) => {
        res(data);
      })
      .catch((err) => {
        return rej(err);
      });
  });
};
export const api_put = (url, body, headers = {}) => {
  return new Promise((res, rej) => {
    axiosInstance
      .put(url, body, headers)
      .then(({ data }) => {
        res(data);
      })
      .catch((err) => {
        return rej(err);
      });
  });
};
export const api_delete = (url, body, headers = {}) => {
  return new Promise((res, rej) => {
    axiosInstance
      .delete(url, { ...headers, data: body })
      .then(({ data }) => {
        res(data);
      })
      .catch((err) => {
        return rej(err);
      });
  });
};
