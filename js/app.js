function iniciarApp() {

    obtenerCategorias();

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then( resultado => console.log(resultado.categories))
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp)




























