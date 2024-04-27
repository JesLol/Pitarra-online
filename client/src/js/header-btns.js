document.addEventListener('DOMContentLoaded',()=>{
    const host = 'http://jesus.servehttp.com:3000'
    document.getElementById('login-btn').addEventListener('click',()=>{
        window.location.href = `${host}/login/`;
    })
    document.getElementById('register-btn').addEventListener('click',()=>{
        window.location.href = `${host}/register/`;
    })
})