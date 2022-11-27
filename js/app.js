function iniciarApp() {


    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria)

    obtenerCategorias();

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then( resultado => msotrarCategorias(resultado.categories))
    }

    function msotrarCategorias(categorias = []) {
        categorias.forEach( categoria => {
            const { strCategory } = categoria;
            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategorias.appendChild(option);     
        })
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp)




























