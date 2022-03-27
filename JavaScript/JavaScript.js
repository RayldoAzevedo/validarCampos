function validar() {
    let matricula = document.formulario.matricula.value;
    let nome = document.formulario.nome.value;
    let tamanhoNome = document.formulario.nome.value.length;
    let dataFormulario = document.formulario.dataNascimento.value;
    let dia;
    let mes;
    let ano;
    let curso = document.formulario.curso.value;
    let naoCursaria = document.formulario.naoCursaria.value;
    let email = document.formulario.email.value;
    let arroba;
    let ponto;
    let pontoArroba;
    let pontoFinal;
    let acheiPonto;
    let tamanhoSenha = document.formulario.senha.value.length;
    let senha = document.formulario.senha.value;
    let confirmarSenha = document.formulario.confirmarSenha.value;
    let regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

    // validacao de matricula-------------------------------
    if (matricula == "") {
        alert("Ops, matricula não pode ficar em branco...");
        document.formulario.matricula.focus();
        return false;
    }
    //-------------------------------------------------------
    // validacao de nome-------------------------------------
    if (nome == "") {
        alert("Ops, o nome nao pode estar vazio, tente de novo aii");
        document.formulario.nome.focus();
        return false;
    }

    if (tamanhoNome < 3) {
        alert("Opss.. O nome deve ter no minino 3 caracteres...");
        document.formulario.nome.focus();
        return false;
    }
    //-------------------------------------------------------
    // validacao de data de nascimento-----------------------
    dia = dataFormulario.substring(0, 2);
    mes = dataFormulario.substring(3, 5);
    ano = dataFormulario.substring(6, 10);

    switch (mes) {
        case "01":
        case "03":
        case "05":
        case "07":
        case "08":
        case "10":
        case "12":
            if (dia > 31 || dia < 1) {
                alert("Opa, a data está com algum erro aii, confere ai para mim...");
                document.formulario.dataNascimento.focus();
                return false;
            }
            break;
        case "02":
            if (ano % 100 != 0 && ano % 4 == 0 || ano % 400 == 0) {
                alert("Eai, passando aqui para lembrar que essa data é uma" +
                    " data de ano bisexto ;)")

            } else {
                alert("Opa, a data está com algum erro aii, confere ai para mim...");
                document.formulario.dataNascimento.focus();
                return false;
            }
            break;
        case "04":
        case "06":
        case "09":
        case "11":
            if (dia > 30 || dia < 1) {
                alert("Opa, a data está com algum erro aii, confere ai para mim...");
                document.formulario.dataNascimento.focus();
                return false;
            }
            break;
        default:
            alert("Opa.. vi aqui que você está tentando colocar número maior que 12 ou letras aqui neh hahaha" +
                "\nAqui só pode no formato data 'dd/mm/aaaa', confere ai para mim..." +
                "\nE vamos tentar de novo...");
            document.formulario.dataNascimento.focus();
            return false;
    }
    let diaFormulario = parseInt(dia);
    let mesFormulario = parseInt(mes);
    let anoFormulario = parseInt(ano);
    let dataF = new Date(anoFormulario, (mesFormulario - 1), diaFormulario);
    let miliqq = dataF.getTime();
    let dataHoje = new Date()
    let mili = dataHoje.getTime();
    diaFormulario = parseInt(dataF.getDate());
    mesFormulario = parseInt(dataF.getMonth()) + 1;

    if (miliqq > mili) {
        alert("Opa... To vendo aqui, que essa Data é uma data futura, confere ai para mim ;)");
        document.formulario.dataNascimento.focus();
        return false;
    }
    //-------------------------------------------------------
    // validacao de curso------------------------------------
    if (curso == naoCursaria) {
        alert("Vish... Os cursos não pode ser iguais" +
            "\nConfere ai para mim...");
        document.formulario.naoCursaria.focus();
        return false;
    }
    //-------------------------------------------------------
    // validacao de email------------------------------------
    arroba = email.indexOf('@');
    ponto = email.indexOf('.com');
    if (!(arroba != -1 && ponto != -1)) {
        alert("Vish... Vi aqui que seu email é invalido" +
            "\nConfere ai para mim ");
        document.formulario.email.focus();
        return false;
    }

    pontoArroba = email.indexOf('@.');
    if (pontoArroba != -1) {
        alert("Ops.. O ponto nao pode está na frente do @");
        document.formulario.email.focus();
        return false;
    }

    pontoArroba = email.indexOf('.@');
    if (pontoArroba != -1) {
        alert("Ops.. O ponto nao pode está atrás do @");
        document.formulario.email.focus();
        return false;
    }

    if (arroba == 0) {
        alert("Ops... E-mail não pode começar com @" +
            "\nConfere ai para mim");
        document.formulario.email.focus();
        return false;
    }

    pontoFinal = email.length - 1;
    acheiPonto = email.substring(pontoFinal);
    if (acheiPonto == ".") {
        alert("Vish... Vi aqui que no final do seu email tem um '.'" +
            "\nConfere ai para mim ");
        document.formulario.email.focus();
        return false;
    }
    //-------------------------------------------------------
    // validacao de senha------------------------------------
    if (tamanhoSenha < 6 || tamanhoSenha > 8) {
        alert("Opss.. A senha tem que ter no minimo 6 a 8 caracteres..." +
            "\nTente de novo aii...");
        document.formulario.senha.focus();
        return false;
    }

    if (!regex.exec(senha)) {
        alert("Hmmm... Vi aqui que sua senha não segue os padrões....." +
            "\nVamos tentar de novo... ;)");
        document.formulario.senha.focus();
        return false;
    }

    if (confirmarSenha != senha) {
        alert("Ou a senha ta errada..." +
            "\nPrecisamos que confirme a senha em baixo para proceseguirmos! ;)");
        document.formulario.confirmarSenha.focus();
        return false;
    }
    //-------------------------------------------------------
    alert("Fomulário enviado com successo!!!" +
        "\nAgorinha nossa equipe irá mandar um email confimando se deu tudo certo.. ok? ;)");
}

function barraNascimento() {
    if (document.formulario.dataNascimento.value.length == 2) {
        document.formulario.dataNascimento.value += "/";
    }
    if (document.formulario.dataNascimento.value.length == 5) {
        document.formulario.dataNascimento.value += "/";
    }
}