document.addEventListener('DOMContentLoaded',()=>{
    const host = 'http://jesus.servehttp.com:3000';
    document.getElementById('register-form').addEventListener('submit',async(e)=>{
        e.preventDefault();
        console.log(e.target.username.value)
        const res = await fetch(`${host}/api/register`,{
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
            console.log("Error en el registro"); 
            return
        }
        else{
            Swal.fire({
                title: "Tu cuenta se ha creado correctamente",
                icon: "success",
                confirmButtonColor: '#1f5df1'
              }).then(result=>{
                window.location.href = host;
              });
        }
    })
})