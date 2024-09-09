fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        const usersContainer = document.getElementById('UserConteiner');

        users.forEach(user => {
            let div = document.createElement('div');
            let usrInfo = document.createElement('p');
            const details = document.createElement('a');




            usrInfo.textContent = `Id: ${user.id}, name: ${user.name}`;
            div.appendChild(usrInfo);


            details.textContent = 'Details';
            details.href = `user-details.html?userId=${user.id}`;
            div.appendChild(details);

            usersContainer.appendChild(div);
        });
    })

