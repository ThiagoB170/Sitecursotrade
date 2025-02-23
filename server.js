// Configure o Firebase com sua chave
var firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    databaseURL: "SEU_DATABASE_URL",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function register() {
    var regEmail = document.getElementById("reg-email").value;
    var regPassword = document.getElementById("reg-password").value;

    if (regEmail && regPassword) {
        // Verificar se o e-mail já foi registrado
        var usersRef = firebase.database().ref('usuarios');
        usersRef.orderByChild('email').equalTo(regEmail).once('value', function(snapshot) {
            if (snapshot.exists()) {
                document.getElementById("register-error-message").textContent = "Este e-mail já está registrado.";
            } else {
                // Adicionar o novo usuário
                usersRef.push({
                    email: regEmail,
                    senha: regPassword
                });
                alert("Cadastro realizado com sucesso!");
                showLogin();
            }
        });
    } else {
        document.getElementById("register-error-message").textContent = "Por favor, preencha todos os campos.";
    }
}
