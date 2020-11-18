//Aquí es donde coloco todas mis funciones que requiero en mi aplicación
let misPeliculasFavoritas =  JSON.parse( localStorage.getItem('miLista'))
function sacarDeMiLista(idEliminar){
    let miListaDeFavoritas = []
    
    /*for (let favorita of misPeliculasFavoritas) {
        if(favorita.id != idEliminar){
            miListaDeFavoritas.push(favorita)
        }
    }
    */

    //Otra forma de hacer esto pero con el filter
    miListaDeFavoritas = misPeliculasFavoritas.filter(function(favorita){
        return favorita.id != idEliminar
    })

    localStorage.setItem('miLista', JSON.stringify(miListaDeFavoritas))
    location.href = 'miLista.html'
}