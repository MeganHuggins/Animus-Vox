export const fetchedPlayList = async (id) => {
  const url = `https://openwhyd.org/muggins1265/playlist/${id}?format=json`;

  const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": url
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
}
