function validateForm(){
     
    var email = document.getElementByld("email").value;
    var password = document.getElementByld("password").value;


    if(email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}

