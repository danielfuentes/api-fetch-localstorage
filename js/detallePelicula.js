window.addEventListener('load', function(){
    let detalle = document.getElementById('detalle');
    let peliculaDetalle = location.search;
    let peliculaDetalleObjeto = new URLSearchParams(peliculaDetalle);
    console.log(peliculaDetalleObjeto);
    let idPelicula = peliculaDetalleObjeto.get('id');
    let tituloPelicula =peliculaDetalleObjeto.get('titulo');
    detalle.innerHTML += `<h2>${idPelicula}</h2>`
    detalle.innerHTML += `<h2>${tituloPelicula}</h2>`

})