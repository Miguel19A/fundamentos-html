const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const campoNome = document.querySelector('#nome');
    const errNome = document.querySelector('#errNome');

    if(campoNome.value.length < 3) {
        errNome.innerHTML = 'O campo nome precisa ter mais de 3 letras';
        campoNome.focus();
        return;
    } else {
        errNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const errEmail = document.querySelector('#errEmail');

    if(!campoEmail.value.match(emailRegex)) {
        errEmail.innerHTML = 'Digite um email válido';
        campoEmail.focus();
        return;
    } else {
        errEmail.innerHTML = '';
    }

    const campoSuject = document.querySelector('#suject');
    const errSuject = document.querySelector('#errSuject');

    if(campoSuject.value.length < 5) {
        errSuject.innerHTML = 'O campo assunto precisa ter mais de 5 letras';
        campoSuject.focus();
        return;
    } else {
        errSuject.innerHTML = '';
    }

    const campoMensagem = document.querySelector('#mensagem');
    
    window.alert('Formulário Enviado com sucesso!');

    campoNome.value = '';
    campoEmail.value = '';
    campoSuject.value = '';
    campoMensagem.value = '';
    

})