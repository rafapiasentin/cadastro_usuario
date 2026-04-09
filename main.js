// Cria função para validar preenchimento da tela de login

function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // Estrutura que verifica se os campos foram preenchidos
    if (!loginEmail || !loginSenha) {
        alert("Favor, preencher todos os campos.");
    } else {
        window.location.href = 'cadastro.html';
    }
}

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);//mostra no console o arrey
        criaLista();
        document.getElementById('nomeUser').value = "";
    } else{
        alert("Usuario, favor preencher o campo nome");
    }
}

//Função para criar lista do arrey

function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuario</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length -1); i++){
        tabela += "<tr><td> "+dadosLista[i]+" </td><td> <button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'> Editar </button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'> Excluir </button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

//Função para editar nomes da lista
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice((i - 1), 1);
}

//Função para excluir nomes da lista
function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}