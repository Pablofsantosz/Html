// Exibe no console a mensagem "Olá mundo"
// console.log("Olá mundo");

// Seleciona o primeiro elemento com a classe "funcao"
// document.querySelector('.funcao');

// Seleciona o primeiro elemento <h1> da página
// document.querySelector('h1');

// O querySelector seleciona apenas o primeiro elemento com a classe "sobre"
// document.querySelector(".sobre");

// Para selecionar **todos** os elementos com a classe "sobre"
// document.querySelectorAll(".sobre");

// Exemplo de exibição no console
// console.log(10);
// console.log(document.querySelectorAll(".sobre"));

/* ================================
  Manipulação de Conteúdo da Página
   ================================ */

// Altera o texto do primeiro elemento com a classe "sobre"
//Consegue editar apenas o texto(TextContent)
document.querySelector(".sobre").textContent = "Sobre mim (editado via JS)";

// Insere um link no **primeiro** elemento com a classe "projeto"
// IMPORTANTE: o HTML precisa estar dentro de aspas
// Conseegue alterar o html(codigo)(innerHTML )
document.querySelector(".sobre").innerHTML = 
  '<a href="https://www.youtube.com/watch?v=NZeiVjaMEfc&t=10s" target="_blank">Assista no YouTube</a>';

// Se quiser aplicar em **todos os elementos** com a classe "projeto", use o loop abaixo:
    /*document.querySelectorAll('.projeto') 
    el.innerHTML = '<a href="https://www.youtube.com/watch?v=NZeiVjaMEfc&t=10s" target="_blank">Assista no YouTube</a>';*/
