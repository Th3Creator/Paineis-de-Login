/* 
    1 Transição do pn1 pro lado direito e o pn2 pro lado esquerdo
    2 Estilo do pn2 {
        Novo título 
        Novo parágrafo em baixo do título 
        Novo btn
    }
    3 Estilo do pn1 {
        Novo título 
        Novo parágrafo em baixo do título 
        4 novos inputs
        Novo btn
    }
*/

function newPns(){
    // Removendo os elementos 
    const h1pn1 = document.querySelector('.h1pn1')
    const ppn1 = document.querySelector('.ppn1')
    const inputpn1 = document.querySelector('.inputpn1')
    const inputpn2 = document.querySelector('.inputpn2')
    const p2pn1 = document.querySelector('.p2pn1')
    const btnpn1 = document.querySelector('.btnpn1')
    const h1pn2 = document.querySelector('.h1pn2')
    const ppn2 = document.querySelector('.ppn2')
    const btnpn2 = document.querySelector('.btnpn2')

    h1pn1.parentNode.removeChild(h1pn1);
    ppn1.parentNode.removeChild(ppn1);
    inputpn1.parentNode.removeChild(inputpn1);
    inputpn2.parentNode.removeChild(inputpn2);
    p2pn1.parentNode.removeChild(p2pn1);
    btnpn1.parentNode.removeChild(btnpn1);
    h1pn2.parentNode.removeChild(h1pn2);
    ppn2.parentNode.removeChild(ppn2);
    btnpn2.parentNode.removeChild(btnpn2);

    // Colocando os pns nos seus devidos lugares
    const pn2 = document.querySelector('.pn2')
    const pn1 = document.querySelector('.pn1')

    pn2.classList.replace('pn2', 'pn2atl')
    pn1.classList.replace('pn1', 'pn1atl')

    // Criando elementos para os novos painéis
    const h1 = document.createElement('h1');
    h1.classList.add('h1');
    h1.innerText= 'Welcome Back!';
    const p = document.createElement('p');
    p.classList.add('p');
    p.innerText= 'To keep connected with us please login with your personal info';
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText ='SING IN';



    const h1form = document.createElement('h1');
    h1form.classList.add('h1form');
    h1form.innerText = 'Create Account';
    const pform = document.createElement('p');
    pform.classList.add('pform');
    pform.innerText = 'Use your email for registration';
    const inputform1 = document.createElement('input');
    inputform1.classList.add('inputform1');
    inputform1.placeholder = 'Username';
    const inputform2 = document.createElement('input');
    inputform2.classList.add('inputform2');
    inputform2.placeholder= 'Email';
    const inputform3 = document.createElement('input');
    inputform3.classList.add('inputform3');
    inputform3.placeholder ='Password';
    const inputform4 = document.createElement('input');
    inputform4.classList.add('inputform4');
    inputform4.placeholder = 'Confirm password';
    const btn2 = document.createElement('button');
    btn2.classList.add('btn2');
    btn2.innerText = 'SING UP' ;

    // Adicionando os elementos
    const pn2atl = document.querySelector('.pn2atl');

    pn2atl.appendChild(h1);
    pn2atl.appendChild(p);
    pn2atl.appendChild(btn); 


    const pn1atl = document.querySelector('.pn1atl');

    pn1atl.appendChild(h1form);
    pn1atl.appendChild(pform);
    pn1atl.appendChild(inputform1);
    pn1atl.appendChild(inputform2);
    pn1atl.appendChild(inputform3);
    pn1atl.appendChild(inputform4);
    pn1atl.appendChild(btn2);
}