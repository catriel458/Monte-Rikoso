// const promesa = new Promise((resolve, reject) => {
//     const x = 42
//     setTimeout(() => {
//         if(x === 42) {
//             resolve("Exito") // La promesa se resuelve exitosamente
//         }

//         else {
//             reject("Fallo") // La promesa falla y se rechaza
//         }
//     } , 2000);
// }) 



// const pedirDatos = () => {
//     fetch('https://rickandmortyapi.com/api/character', options)
//         .then(response => response.json())
//         .then(data => {
//             // Aquí data es el objeto JSON devuelto por la API
//             // Iteramos sobre los resultados para acceder a cada personaje
//             data.results.forEach(personaje => {
//                 // Imprimir en consola el nombre y la imagen de cada personaje
//                 console.log(personaje.name, personaje.image);
//             });
//         })
//         .catch(err => console.error(err));
// }

// pedirDatos()

// Definimos las opciones para la solicitud fetch
const options = {
    method: 'GET',
    headers: { accept: 'application/json' }
};

// Hacemos una solicitud fetch a la API de Rick and Morty para obtener datos de personajes
fetch('https://rickandmortyapi.com/api/character', options)
    .then(response => response.json()) // Convertimos la respuesta en formato JSON
    .then(data => {
        // Cuando la respuesta se convierte en JSON, procesamos los datos
        data.results.forEach(personaje => {
            // Por cada personaje en los resultados, creamos un artículo HTML para mostrar la información
            const article = document.createElement('article'); // Creamos un elemento 'article'
            article.setAttribute('class', 'character'); // Le damos la clase 'character' al artículo
            article.innerHTML = `
                <img src="${personaje.image}" alt="${personaje.name}"> <!-- Mostramos la imagen y el nombre del personaje -->
                <h2>${personaje.name}</h2>
                <div>
                    <p>${personaje.species}</p> <!-- Mostramos la especie del personaje -->
                </div>`;
            container.appendChild(article); // Agregamos el artículo al contenedor
        });
    })
    .catch(err => console.error(err)); // Manejamos errores de la solicitud

// Obtenemos el contenedor donde queremos mostrar los personajes
const container = document.getElementById('personajes');


