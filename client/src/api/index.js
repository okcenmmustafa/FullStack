const axios = require("axios");
//restApi used in requests
export default async function getValues(method, apiURL, params) {
  const api = process.env.REACT_APP_API_URL;
  console.log(api);
  const response = await axios({
    method: method,
    url: api + apiURL,
    headers: { "Content-type": "application/json" },
    params: params,
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      // Error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the
        // browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  return response;
}
