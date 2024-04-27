document.addEventListener('DOMContentLoaded',()=>{
    const host = 'http://jesus.servehttp.com:3000';
    document.getElementById('login-form').addEventListener('submit',async (e)=>{
        e.preventDefault();
        console.log(e.target.username.value);
        const res = await fetch(`${host}/api/login`,{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({
                user: e.target.username.value,
                password: e.target.password.value
            })
        });
        if(!res.ok){
            const resJson = await res.json();
            console.log(resJson.mensaje)
            Swal.fire({
                title: "Oops",
                text : resJson.mensaje,
                icon: "error",
                confirmButtonColor: '#1f5df1'
              }); 
            return
        }
        const resJson = await res.json();
        Swal.fire({
            title: "Sesion iniciada correctamente",
            icon: "success",
            timer: 5000,
            timerProgressBar: true,
            confirmButtonColor: '#1f5df1'
        }).then(()=>{
            window.location.href = resJson.redirect;
        });
    })
})