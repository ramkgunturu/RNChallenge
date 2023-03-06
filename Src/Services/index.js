// A function for making API requests using the fetch API,
// with JSON as the request content type and error handling.

const Services = (api, requestType) => {
  const requestOptions = {
    method: requestType,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // console.log(api, requestOptions);
  return fetch(api, requestOptions)
    .then(response =>
      response.json().then(response => {
        return Promise.resolve(response);
      }),
    )
    .catch(error => {
      // console.log("error for api", error);
      alert('Sorry something went wrong');
    });
};
export default Services;
