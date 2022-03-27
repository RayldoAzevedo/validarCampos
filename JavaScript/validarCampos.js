/* CRIADO POR RAYLDO AZEVEDO */

document.addEventListener("DOMContentLoaded", function(){

    var formularioHtml = document.getElementById("formulario");

    formularioHtml.addEventListener("submit", function(e){
        alert("Cadastro realizado com sucesso!")
    })

})

/**
 * MASCARAS PARA CAMPOS 
 * MATRICULA 
 * DATA DE NASCIMENTO
 */
 function formatar(mascara, documento) {
    var i = documento.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i);

    if (texto.substring(0, 1) != saida) {
      documento.value += texto.substring(0, 1);
    }
}

/**
 * VALIDAÇÃO DA MATRICULA
 */
function validar(){
    valor = document.getElementById("matricula").value;
    re = /^[0-9]{4}.[0-9]{1}.[0-9]{4}.[0-9]{4}-[0-9]{1}$/;

    // validacao de matricula-------------------------------
    if (valor == "") {
        alert("campo MATRÍCULA deve ser preenchido");
        document.getElementById("matricula").focus();
        return false;
    }
    else if(re.test(!valor)){
        alert('Numero de MATRÍCULA incorreto!');
        document.getElementById("matricula").focus();
        return false;
    }
    //chama metodo de validação do proximo campo
    validarNome();
}

/**
 * VALIDAÇÃO DO CAMPO NOME
 */
function validarNome(){
    valor = document.getElementById("nome").value;
    re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s][ ]+ $/;
    
    if (valor == "") {
        alert("campo NOME deve ser preenchido");
        document.getElementById("nome").focus();
        return false;
    }
    else if(valor.length  < 3){
        alert("NOME inválido, muito pequeno");
        document.getElementById("nome").focus();
        return false;
    }
    else if(re.test(!valor)){
        alert("Nome inválido, não use números ou caracteres especiais.");
        document.getElementById("nome").focus();
        return false;
    }
    //chama metodo de validação do proximo campo
    validarSexo();    
}

/**
 * VALIDAÇÃO DO CAMPO SEXO
 */
function validarSexo(){
    valor = document.getElementById("sexo").value;

    if (valor == "") {
        alert("O SEXO deve ser informado!")
        document.getElementById("sexo").focus();
        return false;
    }
    validarDataNascimento();
}

/**
 * VALIDAÇÃO DA DATA DE NASCIMENTO
 */
function validarDataNascimento(){
    valor = document.getElementById("dataNascimento").value;

    re = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    if (re.test(valor)) {
        //chama metodo de validação do proximo campo
        validarCurso();
    } else {
      alert('Data de NASCIMENTO Inválida');
      document.getElementById("dataNascimento").focus();
      return false;
    }
}

/**
 * VALIDAÇÃO DO CURSO
 */
function validarCurso() {
    valor = document.getElementById("cursos").value;    

    if(valor == ""){
        alert('Um CURSO deve ser selecionado!')
        document.getElementById("cursos").focus();
        return false;
    }
    validarNaoCursaria(valor);
}

/**
 * VALIDAÇÃO DO CAMPO NÃO CURSARIA
 */
 function validarNaoCursaria(curso){
    valor = document.getElementById("naoCursaria").value;

    if(valor == curso){
        alert('Item selecionado no campo CURSOS não pode ser igual ao campo NÃO-CURSARIA');
        document.getElementById("email").focus();
        return false;
    }
    validarEmail();
 }

 /**
  * VALIDAÇÃO DO CAMPO E-MAIL
  */
  function validarEmail(){
      valor = document.getElementById("email").value;

      if(valor == ""){
          alert('campo E-MAIL deve ser preenchido!');
          document.getElementById("email").focus();
          return false;
      }
      else if(valor.indexOf("@") <=1 || valor.indexOf(".") <= 2 || valor.indexOf("@") > valor.indexOf(".")){
        alert('E-MAIL não é inválido!');
        document.getElementById("email").focus();
        return false;
      }
      validarSenha();     
  }

  /**
   * VALIDAÇAO DO CAMPO SENHA
   */
  function validarSenha(){
    reLetraMin = /[a-zéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ]/;
    resLetraMax = /[A-Z]/;
    reNumeros = /[0-9]/;
    reCaractere = /[@#$%¨&*!]/;
    valor = document.getElementById("senha").value;

    // variaveis pra teste debugger
    validar = reLetraMin.test(valor);
    validar = reNumeros.test(valor) ;
    validar = resLetraMax.test(valor);
    validar = reCaractere.test(valor);

    if (valor == "") {
        alert('Campo SENHA deve ser preenchido!');
        document.getElementById("senha").focus();
        return false;
    }
    else if(valor.length <6 ) {
        alert('Campo SENHA deve no mínimo 6 caracteres');
        document.getElementById("senha").focus();
        return false;
    }
    else if(
    reLetraMin.test(valor) && 
    reNumeros.test(valor) && 
    resLetraMax.test(valor) && 
    reCaractere.test(valor)
    ) {
        validarConfirmarSenhar(valor);
    }
    else {
        alert('SENHA deve conter mínimo 1 maiúsculo, 1 letra, 1 número e 1 especial');
        document.getElementById("senha").focus();
        return false;
    }
    
    /**
     * VALIDAÇÃO DO CAMPO CONFIRMAR SENHA
     */
    function validarConfirmarSenhar(senha) {
        valor = document.getElementById("confirmarSenha").value;

        if (valor != senha){
            alert('As senhas não conferem');
            document.getElementById("confirmarSenha").focus();
            return false;
        }
        else {
            alert('Todos os campos ok! ');
            document.getElementById("btnSubmit").focus();
            return true;
        }
    }    
  }


    
