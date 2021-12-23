function pnCadastrar () {
    // Removendo os elementos 
    const h2pnlogin = document.querySelector('.h2pnlogin')
    const inputpnlogin = document.querySelector('.inputspnlogin')
    const input2pnlogin = document.querySelector('#inputspnlogin')
    const spanpnlogin = document.querySelector('.spanpnlogin')
    const btnpnlogin = document.querySelector('.btnpnlogin')
    const h5bloco2 = document.querySelector('.hbloco2')
    const pbloco2 = document.querySelector('.pbloco2')
    const btnbloco2 = document.querySelector('.btnbloco2')
    const zerotwo = document.querySelector('.zerotwo2')

    h2pnlogin.parentNode.removeChild(h2pnlogin);
    inputpnlogin.parentNode.removeChild(inputpnlogin);
    input2pnlogin.parentNode.removeChild(input2pnlogin);
    spanpnlogin.parentNode.removeChild(spanpnlogin);
    btnpnlogin.parentNode.removeChild(btnpnlogin);
    h5bloco2.parentNode.removeChild(h5bloco2);
    pbloco2.parentNode.removeChild(pbloco2);
    btnbloco2.parentNode.removeChild(btnbloco2);
    zerotwo.parentNode.removeChild(zerotwo)

    // Movendo para direita 
    const pnLogin = document.querySelector('.pnlogineregister'); 
    pnLogin.classList.replace('pnlogineregister', 'pnlogin');

    // Criando elementos
    const painel = document.querySelector('.pnlogin')

    const novoh2 = document.createElement('h2');
    novoh2.classList.add('h2pnlogin');
    novoh2.innerText = 'Cadastro';
    const novoinput = document.createElement('input');
    novoinput.classList.add('inputspnlogin');
    novoinput.placeholder = 'Usuario'; 
    const novoinput2 = document.createElement('input');
    novoinput2.classList.add('inputspnlogin2');
    novoinput2.placeholder = 'Senha'; 
    novoinput2.type = 'password';
    const novoinput3 = document.createElement('input');
    novoinput3.classList.add('inputspnlogin3');
    novoinput3.placeholder = 'Confirmar senha'; 
    novoinput3.type = 'password';
    const novoinput4 = document.createElement('input');
    novoinput4.classList.add('inputspnlogin4');
    novoinput4.placeholder = 'Email';
    novoinput4.type = 'email';
    const novobutton = document.createElement('button');
    novobutton.classList.add('btnpnlogin2')
    novobutton.innerText = 'Cadastro';

    // Adicionando os elementos
    painel.appendChild(novoh2)
    painel.appendChild(novoinput)
    painel.appendChild(novoinput2)
    painel.appendChild(novoinput3)
    painel.appendChild(novoinput4)
    painel.appendChild(novobutton);
}

function pnLogin() {
    document.location.reload(true);
}