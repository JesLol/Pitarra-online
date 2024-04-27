const botones = document.querySelectorAll('.ficha-button');
botones.forEach(boton =>{
    const id = boton.id;
    boton.innerHTML=
    `<img src="../assets/img/ficha-roja.png" alt="ficha-roja" class="ficha-roja ficha-roja${id}">
    <img src="../assets/img/ficha-amarilla.png" alt="ficha-amarilla" class="ficha-amarilla ficha-amarilla${id}">`
})