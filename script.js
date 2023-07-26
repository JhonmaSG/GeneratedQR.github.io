const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
    //Deshabilita el envio automatico de e : No refresca la Page
    e.preventDefault();
    QR.makeCode(formulario.inputURL.value);
});