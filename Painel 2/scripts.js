/* 
    Função que ao clicar em registrar irá mudar:
    1- O Painel de login para um de registrar. {
        1- Título OK
        2- A foto e a opção de move-lás
        3- Um novo input de confirmação de senha OK
        4- O botão de entrar OK
        5- O parágrafo no final OK
        6- Remover "Lembrar de mim?" OK
    }
*/

function pnCadastrar() {
    const h1 = document.querySelector('.tituloSAN');
    const foto = document.querySelector('.ftperfilSAN');
    const fotosregistrar = document.querySelector('.ftsregistrar');
    const novadiv = document.querySelector('.agrcomicones');
    const localizacao = document.querySelector('.localizacao')
    const inputsenha = document.querySelector('.inputpassword');
    const inputcheck = document.querySelector('.inputcheck');
    const osinput = document.querySelector('.osinput');
    const spancheck = document.querySelector('.spancheck');
    const btnentrar = document.querySelector('.btnentrar'); 
    const pfinal = document.querySelector('.pesquerdo'); 

    /* Título */
    h1.innerText = 'Se registrar';

    /* Fotos & Btn's ao lado */
        /* 
            COmo?: 
            1- Remover a foto de perfil tradicional que está na de login OK
            2- Adicionar uma nova div com o display flex e outras propriedades para as setas ficarem igual a do vídeo
            3- Fazer script que faz slide deles...
            4- Adicionar por aqui mesmo os "i", "imgs" com várias imagens OK
        */

        const atual = 0;

        const btnesquerdo = document.createElement('img');
        btnesquerdo.src = ("caret-left-fill.svg");
        btnesquerdo.classList.add("icone1");

        const btndireito = document.createElement('img');
        btndireito.src = ("caret-right-fill.svg");
        btndireito.classList.add("icone2");
        
        btnesquerdo.addEventListener('click', () => {
            atual--
        })

        btndireito.addEventListener('click', () => {
            atual++
        })
        


        foto.parentNode.removeChild(foto);
        const trevor = document.createElement('img');
        trevor.src = ("trevor.jpg");
        trevor.classList.add("ftpersonagens");

        novadiv.insertBefore(trevor, localizacao);
        novadiv.insertBefore(btnesquerdo, trevor)
        novadiv.insertBefore(btndireito, localizacao)

        const michael = document.createElement('img');
        michael.src = ("michael.jpg");
        michael.classList.add("ftpersonagens");
        
        const franklin = document.createElement('img');
        franklin.src = ("franklin.jpg");
        franklin.classList.add("ftpersonagens");

        const CJ = document.createElement('img');
        CJ.src = ("CJ.png");
        CJ.classList.add("ftpersonagens");


    /* Adicionando o novo input senha */
    const cloneinputsenha = inputsenha.cloneNode(true);
    osinput.appendChild(cloneinputsenha);

    /* Removendo o checkbox e o span do lado */
    inputcheck.parentNode.removeChild(inputcheck);
    spancheck.parentNode.removeChild(spancheck);

    /* Botão de entrar */
    btnentrar.innerText =  'Cadastrar';

    /* Parágro no final */
    pfinal.innerHTML = ' <p class="pesquerdo">Já tem uma conta? <a onclick="pnRelogar()" class="aesquerdo">Fazer Login</a></p>'

}

function pnRelogar() {
    document.location.reload(true);
}

/* 
    O que eu vou usar:

    1- innerHTML
    2- innerText 
    3- appendChild = colocar após
    4- .parentNode.removeChild(elemento);
*/