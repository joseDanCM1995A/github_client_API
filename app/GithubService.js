class GithubService {

    constructor(client_id, client_secret) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.count_page = 8;
        this.sort = 'created: asc'
    }

    async fetchUser(user) {
        const userGit = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const userGitRepos = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.count_page}&sort=${this.sort}`);
        const userGitJson = await userGit.json();
        const userRepositories = await userGitRepos.json();
        return {
            userGitJson,
            userRepositories
        };
    }
}

module.exports = GithubService;