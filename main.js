fetch('https://my-json-server.typicode.com/Anthonyrc03/server_twitter/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener la respuesta de la solicitud.');
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos obtenidos:', data);
  })
  .catch(error => {
    console.error('Ocurrió un error:', error);
  });