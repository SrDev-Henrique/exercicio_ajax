const username = 'SrDev-Henrique';

fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Não foi possível carregar os dados do usuário.');
        }
        return response.json();
    })
    .then((user) => {
        document.querySelector('.profile-avatar').src = user.avatar_url;
        document.querySelector('.profile-avatar').alt = user.name || user.login;
        document.querySelector('.profile-name').textContent = user.name || user.login;
        document.querySelector('.profile-username').textContent = `@${user.login}`;

        const [reposItem, followersItem, followingItem] = document.querySelectorAll('.numbers-item span');

        reposItem.textContent = user.public_repos;
        followersItem.textContent = user.followers;
        followingItem.textContent = user.following;

        const profileLink = document.querySelector('.profile-link');
        profileLink.href = user.html_url;
        profileLink.target = '_blank';
    })
    .catch((error) => {
        document.querySelector('.profile-name').textContent = 'Erro ao carregar perfil';
        console.error(error);
    });
