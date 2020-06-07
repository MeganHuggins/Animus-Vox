export const fetchedPlayList = async (id) => {
  const url = `https://openwhyd.org/muggins1265/playlist/${id}?format=json`;

  const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": url
    }
  })
  return await response.json();
}
