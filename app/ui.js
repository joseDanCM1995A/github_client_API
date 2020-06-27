class UI {
    constructor() {
        this.profile = document.getElementById('userProfile');
    }

    //pintando la columna del perfil
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card mt-3 animate__animated animate__backInLeft ">
            <img src="${user.avatar_url}" alt="" class = "card-img-top">    
            <div class="card-body">
                <h3 class="card-title">${user.name}/${user.login}</h3>
                <a href="${user.html_url}" class="btn btn-success btn-block" target="_blank ">Ver perfil</a>
                <span class="badge badge-primary m-1 pl-0">
                Seguidores: ${user.followers}
                </span>
                <span class="badge badge-secondary m-1">
                    Siguiendo: ${user.following}
                </span>
                <span class="badge badge-warning m-1">
                    Companía: ${user.company}
                </span>
                <span class="badge badge-info m-1 ">
                    Blog: ${user.blog}
                </span>
            </div>
        </div>     
        `;
        this.clearMessage();
    }

    showMessage(message, colorMessage) {
        const div = document.createElement('div'); // creando el elemento
        div.className = colorMessage; // aignando la clase
        div.appendChild(document.createTextNode(message)); // insertando el mensahe dentro del div
        const content = document.querySelector('.row');
        const profile = document.querySelector('#userProfile');

        content.insertBefore(div, profile); // inserrtar en row, pero antes del userProfile
    }

    clearMessage() {
        const message = document.querySelector('.alert');
        if (message) {
            message.remove()
        }
    }

    showRepositories(repositories) {
        let template = '';
        repositories.forEach(repo => {
            template += `
            <div class="card card-body mt-2 animate__animated animate__backInUp">
                <div class="row">
                    <div class=" col-md-6">
                        <a href="${repo.html_url}">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-warning ">
                            Lenguaje: ${repo.language}
                        </span>
                        <span class="badge badge-success ">
                            Fotks: ${repo.forks}
                        </span>
                    </div>
                </div>
            </div>
        `;
        });
        document.getElementById('repositories').innerHTML = template; // metiendo el template al div
    }
}


module.exports = UI;