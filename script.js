function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Adicione validações adicionais aqui, se necessário
    return true;
}