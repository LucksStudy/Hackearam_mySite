function criarTabuada() { //auto explicativo
    let numero = parseInt(document.getElementById("numero").value); //pegar o valor do insert 
    let tabuada = document.getElementById("tabuada");
    let error = document.getElementById("error");

    if (numero >= 1 && numero <= 10) { // verificação 
        tabuada.innerHTML = ""; // limpa a tabuada, que no inicio esta vazia

        for (let i = 1; i <= 10; i++) { // lastro de repeticão 
            let resultado = numero * i;
            let linha = document.createElement("tr"); // criando a tabela
            let coluna1 = document.createElement("td"); // cria coluna com a expressão
            let coluna2 = document.createElement("td"); //cria coluna onde vai resultado

            coluna1.textContent = numero + " x " + i; //concatenando numero escolhido e numero do contador
            coluna2.textContent = resultado; // resultado aguardado

            linha.appendChild(coluna1); // inserir na tela 
            linha.appendChild(coluna2);
            tabuada.appendChild(linha);
        }

        error.textContent = ""; //tratando o erro, para não mostrar pq esta correto
        document.getElementById("clear").style.display = "block";


    } else {
        error.textContent = "Numero invalido, digite um número entre 1 e 10"; // se esta fora do parametro 
        error.className = "error";
    }
}

function LimparInput(){
    document.getElementById("numero").value="";
    document.getElementById("tabuada").innerHTML="";
    document.getElementById("error").textContent="";
    document.getElementById("error").className="";
    document.getElementById("clear").style.display="none";
}


