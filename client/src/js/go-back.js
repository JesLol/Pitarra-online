document.addEventListener("DOMContentLoaded",()=>{
    const goBackBtn = document.getElementById("go-back-btn");
    goBackBtn.addEventListener('click',()=>{
        window.history.back();
    })
})