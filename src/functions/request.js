const API_URL = "http://localhost:3000/productos/";

export const getProducts = async (filter, id = null) => {
  if(filter) {
    return await (await fetch(API_URL + `?gender=${filter}`, {
      method: "get"
    })).json()
  } else if (id){
    return await (await fetch(API_URL + id, {
      method: "get"
    })).json()
  }
  return await (await fetch(API_URL, {
    method: "get"
  })).json()
}
