const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog'); //se corrige la llamada al elemento con clase "blog", utilizando . en lugar de #
const $l = document.querySelector('.location');

async function displayUser(username) { //se está trabajando con una función asíncrona, se corrige la declaración de la función con async funtion
  $n.textContent = 'cargando...';
  try { //Se implementa el manejo de errores utilizando try/catch
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); //Faltaba declarar una constante data que esperara una respuesta en formato JSON
    console.log(data);
    $n.textContent = data.name; //Se corrige el formato 
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (err) { //aquí se implementa el manejo de errores
    handleError(err);
  }
  
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);