export const fetchPlayList = async (id) => {
  const url = `https://openwhyd.org/muggins1265/playlist/${id}?format=json&limit=50`;

  const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": url,
    }
  })
  return await response.json();
}
