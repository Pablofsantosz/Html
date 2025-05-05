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
    //  document.querySelector(".sobre").textContent = "Sobre mim (editado via JS)";



//Assim nao funcionaria voce term que escolher o elemento da lista
    //document.querySelectorAll(".sobre").textContent ="Toma gap";
//Teria que ser assim:
    //document.querySelectorAll(".sobre")[0].textContent ="Sobre mim:";// Tem que escolher o termo dentro da lista ("mesma logica de vetor ").

// Insere um link no **primeiro** elemento com a classe "projeto"
// IMPORTANTE: o HTML precisa estar dentro de aspas
// Conseegue alterar o html(codigo)(innerHTML )
    /*document.querySelector(".sobre").innerHTML = 
    '<a href="https://www.youtube.com/watch?v=NZeiVjaMEfc&t=10s" target="_blank">Assista no YouTube</a>';
    */

// Se quiser aplicar em **todos os elementos** com a classe "projeto", use o loop abaixo:
    /*document.querySelectorAll('.projeto') 
    el.innerHTML = '<a href="https://www.youtube.com/watch?v=NZeiVjaMEfc&t=10s" target="_blank">Assista no YouTube</a>';*/




//Inline Style
    //document.querySelector(".sobre").style.color ="yellow"; //mechendo no css(dessa forma é inlineStyle)



/*Adicionando e removendo classes com add, remove e toggle
    //ClassList(vai pegar a lista de classes desse elemento e add uma nova )
        document.querySelector(".sobre").classList.add("verde"); // Adicionar uma classe a classe sobre(crei a classe verde no css)
    // para remover a clase
        document.querySelector(".sobre").classList.remove("verde");
    // O toggle é tanto o remove quando o add , se a classe verde estiver no .sobre ele remove , e se a classe verde não estiver ele adiciona
        document.querySelector(".sobre").classList.toggle("verde");
(*/



//const elemSobre= document.querySelector(".sobre");
    /*elemSobre.textContent ="Sobre mim";
    //Alerta clique
        //Tenho um elemento(elemSobre), to add um evento nele (quando clicar no nome), faça a função.
        elemSobre.addEventListener('click',function(){
            console.log("Voce clicou no texto sobre mim");//Pritando no console
            alert("Voce clicou no texto sobre mim")// Alerta na tela

            tirando a classe verde  e add a classe vermelho
                elemSobre.classList.remove("verde"); //shift-alt-seta pra baixo para so copiar para baixo.
                elemSobre.classList.add("vermelho");
            
            // Deixando isso interativo-dinamico(Toggle),
            elemSobre.classList.toggle("verde"); 
            elemSobre.classList.toggle("vermelho");
    
        });
        */
//Outtra forma:
    /*
    function alterarClasse(){
        console.log("Voce clicou no texto sobre mim");//Pritando no console
        alert("Voce clicou no texto sobre mim")// Alerta na tela

        //tirando a classe verde  e add a classe vermelho
            //elemSobre.classList.remove("verde"); //shift-alt-seta pra baixo para so copiar para baixo.
            //elemSobre.classList.add("vermelho");
       
        // Deixando isso interativo-dinamico(Toggle),
        elemSobre.classList.toggle("verde"); 
        elemSobre.classList.toggle("vermelho");

    }
    elemSobre.addEventListener('click',alterarClasse);
    */

const elemButaoInformacoes = document.querySelector(".botao-informacoes");
const elemInformacoes = document.querySelector(".informacoes");

//add um evento de clicue
elemButaoInformacoes.addEventListener('click',function(){
    //testes
        console.log("voce clicou no texto ");
        //alert("Voce clicou no bota de ocultar infos");
        elemInformacoes.classList.toggle("informacoes-visivel");
        
        const aux = elemInformacoes.classList.contains("informacoes-visivel");
        if(aux == true){
            elemButaoInformacoes.textContent ="Ocultar informações";
        }
        else{
            elemButaoInformacoes.textContent="Exibir informações";
        }


})


const elemButaoDark = document.querySelector(".botao-dark");
const elemButaoLight = document.querySelector(".botao-light");
const body = document.querySelector("body");

elemButaoDark.addEventListener('click', function () {
    body.classList.remove("light"); // Remove o modo light → volta pro dark
});

elemButaoLight.addEventListener('click', function () {
    body.classList.add("light"); // Adiciona o modo light
});






    




