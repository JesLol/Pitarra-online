document.addEventListener("DOMContentLoaded",()=>{
    const infoPitarraBtn = document.getElementById('ver-info-pitarra-btn');
    const jugarOnlineBtn = document.getElementById('jugar-online-btn');
    const jugarOfflineBtn = document.getElementById('jugar-offline-btn');
    const closeSessionBtn = document.getElementById('close-sesion-btn');
    // Revisar si el usuario esta registrado
    const cookies = document.cookie;
    const cookiesObj = cookies.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.trim().split('=');
        acc[name] = value;
        return acc;
    }, {});
    const miCookie = cookiesObj['jwt'];
    if(miCookie){
        document.getElementById('login-btn-li').style.display = "none";
        document.getElementById('register-btn-li').style.display = "none";
        document.getElementById('close-sesion-btn-li').style.display = "block";
        jugarOnlineBtn.addEventListener('click',()=>{
            window.location.href = "online-game/"
        });
        closeSessionBtn.addEventListener('click',()=>{
            document.cookie ='jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.location.href = "/"
        })
    }
    else{
        jugarOnlineBtn.addEventListener('click',()=>{
            Swal.fire({
                icon: "info",
                text: "Para jugar en linea primero necesitas iniciar sesion.",
                confirmButtonColor: '#1f5df1'
            })
        })
    }

    infoPitarraBtn.addEventListener('click',()=>{
        Swal.fire({
            title: `<strong>¿Cómo jugar?</strong>`,
            imageAlt: "Custom image",
            html: `
                <section>
                    <article style="display:grid; gap:15px;">
                        <img src="assets/img/juego-de-la-pitarra.png" style="width:100%;">
                        <div>
                            <h4>Descripcion del juego</h4>
                            <p style="text-align:justify;">Cada jugador cuenta con doce fichas, las cuales se van a ir poniendo alternativamente en el talero, la intención es hacer tercias ya sea de forma horizontal, vertical o diagonal, cuando se forma una tercia se le quita una ficha al oponente, la intención es hacer mayo numero de tercias y que el oponente haga las menos posibles, las fichas rojas son las que empiezan, cuando todos han colocado sus fichas viene la parte dinámica, que es formar tercias moviendo las fichas que ya están en el tablero, solo se pueden mover sobre las líneas, nunca saltando espacios. El ganador se define cuando dejas a tu oponente solo con dos fichas en el tablero, o bien se rinde, dándole la mano de forma caballerosa</p>
                        </div>
                        <div>
                            <h4>Reglas</h4>
                            <ul style="text-align: left;">
                                <li>La apertura se da por sorteo.</li>
                                <li>Las tiradas deben ser alternadas.</li>
                                <li>Cuando se genera una tercia entonces se toma una ficha del contrario, esto se hace a elección propia.</li>
                                <li>Si se forma más de una tercia se seguirá tomando una sola ficha del contrario.</li>
                                <li>El jugador victorioso será aquel capaz de dejar a su adversario con únicamente dos fichas restantes o de inmovilizar todas las fichas del oponente.</li>
                            </ul>
                        </div>
                    </article>
                </section>
            `,
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonText: `¡Listo!`
          });
    });
    jugarOfflineBtn.addEventListener('click',()=>{
        window.location.href = "offline-game/"
    });
})