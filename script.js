const openModal = () => {
    document.getElementById('modal').classList.add('active');
};

const closeModal = () => {
    document.getElementById('modal').classList.remove('active');
};

document.getElementById('cadastrarUsuario').addEventListener('click', openModal);
document.getElementById('modal-close').addEventListener('click', closeModal);

const createNewUser = () => {
    let listUser = [];
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const cidade = document.getElementById('city').value;
    const id = Math.floor(Math.random() * 100);

    const objUser = {
        nomeUser: nome,
        emailUser: email,
        telUser: tel,
        cityUser: cidade,
        idUser: id
    };

    if (localStorage.getItem('userInfos')) {
        listUser = JSON.parse(localStorage.getItem('userInfos'));
    }

    listUser.push(objUser);

    localStorage.setItem('userInfos', JSON.stringify(listUser));

    closeModal();

    
     window.location.reload();
};

document.getElementById('saveValue').addEventListener('click', createNewUser);

function carregarUsuario() {
    let listUser = [];

    if (localStorage.getItem('userInfos')) {
        listUser = JSON.parse(localStorage.getItem('userInfos'));
    }

    if (listUser.length === 0) {
        let tabela = document.getElementById('corpo-tabela');
        
    }
}


carregarUsuario();

const tabelaInfo = (listUser) => {
    let tabela = document.getElementById('corpo-tabela')

    let template = "";

    listUser.forEach((user) => {
        template +=`
        <tr>
        <td> ${user.nomeUser}</td>
        <td> ${user.emailUser}</td>
        <td> ${user.telUser}</td>
        <td> ${user.cityUser}</td>
        <td>
        <button type="button" class="button green">Editar</button>
        <button type="button" class="button red" onclik="deleteuser(${user.idUser})">Excluir</button
        </td>
        </tr>
        `;
    });

    tabela.innerHTML = template;
}
function delteUser (id) {
alert(id)

let userList = JSON.parse(localStorage.getItem('userInfos')) || []

const findIndex = userList.findIndex((userId) => userId.idUser == id);

if(findIndex !== 1){
userList.splice(findIndex, 1);
}

localStorage.setItem("userInfos", JSON.stringify(userList));

window.location.reload();

carregarUsuario();
}

