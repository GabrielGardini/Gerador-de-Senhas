const pass = document.querySelector('#pass');
const newPassword = document.querySelector('#newPassword');

function generatePass(){

    newPassword.innerHTML = '';

    if(pass.value === ''){
        alert('Digite o tamanho da sua senha!');
        return;    
    }
    if(pass.value >30){
        alert('Senhas podem ter no maximo 30 digitos.');
        return;    
    }

    let charset = "!@#$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    if(pass.value <= 30){
        for(var i =0, n = charset.length; i< pass.value; ++i){
            password += charset.charAt( Math.floor(Math.random()*n));


        }}
        let result =document.createTextNode(password);
        return newPassword.appendChild(result);




};