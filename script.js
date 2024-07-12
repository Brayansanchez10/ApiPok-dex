document.addEventListener("DOMContentLoaded", () => {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=10') //Realizamos la petición get a la api para obtener los primeros 10 pokémones

        .then(response => response.json())
        .then(data => {
            const app = document.getElementById('app');
            data.results.forEach(pokemon => {
                // Dentro del bucle obtendremos la información detallada de los pokémones
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokemonInfo => {

                        const card = document.createElement('div');
                        card.className = 'card'; //Representa la carta para el pokémon

                        const img = document.createElement('img');
                        img.src = pokemonInfo.sprites.front_default || 'https://via.placeholder.com/150'; //Busca obtener la URL de la imagen disponible de no encontrar se pondrá en blanco

                        const cardBody = document.createElement('div');
                        cardBody.className = 'card-body'; //Se obtiene todo el contenido textual

                        const cardTitle = document.createElement('h2');
                        cardTitle.className = 'card-title';
                        cardTitle.textContent = pokemonInfo.name; //Establece el nombre del pokémon
                       
                        cardBody.appendChild(cardTitle); // Se añade el nombre del pokémon al carBody
                        card.appendChild(img); //Se añade la imagen al cardBody
                        card.appendChild(cardBody); //Se añade todo su información al Card

                        app.appendChild(card); //Se añade toda la información de la tarjeta al div con el id de app
                    })
                    .catch(error => console.error('Error al obtener datos de Pokémon:', error)); //Manejan los errores que pueden surgir mediante la petición HTTP Get Registrandolo en la consola del navegador
            });
        })
        .catch(error => console.error('Error al obtener datos de Pokémon:', error));
});
