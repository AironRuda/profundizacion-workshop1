const API_URL = "http://localhost:3000/productos/";

const handleError = (error) => {
  console.log(error);
};

const GetInfo = async (id, browser) => {
  let response;
  browser
    ? (response = await fetch(API_URL + `?gender=${browser}`))
    : (response = await fetch(API_URL + id));
  try {
    let data = await response.json();
    return data;
  } catch (error) {
    handleError(error);
  }
};

export default GetInfo;
