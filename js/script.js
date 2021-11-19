const formulario = document.getElementsById('formulario');
const inputs = document.querySelectorAll('#formulario inputs');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\{7,14}$/
}
const validarFormulario = () => {
    
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario)
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});