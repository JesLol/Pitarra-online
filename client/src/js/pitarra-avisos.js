document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        Swal.fire({
            position: "top-end",
            text: "Turno del jugador 1",
            showConfirmButton: false,
            timer: 1500
          });
    }, 500)
})