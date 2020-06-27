// requiriendo los js
const UI = require('./ui');
const Github = require('./GithubService');
const { client_ID, client_Secret } = require('./config.json'); // llamando las variables que nos interesan


const user = new Github(client_ID, client_Secret); // pasandle las credenciales
const ui = new UI();

// capturando el evento del formulario del search
const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', (e) => {
    const textSearch = document.getElementById('textSearch').value;
    if (textSearch !== '') { // solo cuando tenga valor la variable
        user.fetchUser(textSearch).then(data => {
            if (data.userGitJson.message === 'Not Found') {
                ui.showMessage('Usuario no encontrado', 'alert alert-danger col-md-12 mt-3');
            } else {
                ui.showProfile(data.userGitJson);
                ui.showRepositories(data.userRepositories);
            }
        });
    }
    e.preventDefault(); // evitando la recarga de la página cuando se envía e form
});