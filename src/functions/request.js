export const getProducts = async () => {
  return await (await fetch('http://localhost:3000/productos', {
    method: "get"
  })).json()
}