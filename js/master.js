window.addEventListener('load', function(){
    let peliculas = document.querySelector('.peliculas');
    //console.log(peliculas);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=17c89d9fa3c16b97f05929af9001eb2d&language=es-ES&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(populares){
        
        console.log(populares);
        //Esta es una forma de poder recorrer los datos recibidos de la API
        //Usando el forEach

        //populares.results.forEach(pelicula => {
            //let articulo = document.createElement('article')
            //articulo.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt = '${pelicula.title}' />`
            //peliculas.append(articulo)
        //})

        //Esta es otra forma, usando el ciclo for 

            /*for(let i = 0; i < populares.results.length; i++){
                //console.log(populares.results[i].poster_path);
                let articulo = document.createElement('article')
                articulo.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${populares.results[i].poster_path}' alt = '${populares.results[i].title}' />`
                peliculas.append(articulo)
            }*/

            //Otra forma de recorrer un array usando el for of
            //for (let i of populares.results) {
            //    console.log(i.poster_path);
            //}
            
            for(let i = 0; i < populares.results.length; i++){
                //console.log(populares.results[i].poster_path);
                let articulo = document.createElement('article')
                articulo.classList.add('articulo')
                articulo.innerHTML += `<a href='detallePelicula.html?id=${populares.results[i].id}&titulo=${populares.results[i].title}'>  <img src='https://image.tmdb.org/t/p/w500${populares.results[i].poster_path}' alt = '${populares.results[i].title}' /> </a> 
                <div> 
                    <a  id= '${JSON.stringify(populares.results[i])}' href= '#' class='btn btn-success btn-block botonMiLsta' >Agregar a mi lista </a>
                </div>
                `
                peliculas.append(articulo)
            }
            //Agregar a mi Lista
            let botonMiLista = document.querySelectorAll('.botonMiLsta')
            let arrayMiListaDeFavoritas;
            //console.log(botonMiLista)
            botonMiLista.forEach(pelicula => {
                pelicula.addEventListener('click', function(e){
                    e.preventDefault()
                    let miListadePeliculas = localStorage.getItem('miLista')
                    if(miListadePeliculas == null){
                        arrayMiListaDeFavoritas = [];
                    }else{
                        arrayMiListaDeFavoritas = JSON.parse(miListadePeliculas)
                    }
                    arrayMiListaDeFavoritas.push(JSON.parse(this.id))
                    localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))

                } )

            });

            
    })
    .catch(function(error){
        console.log(error)
    })

    




})