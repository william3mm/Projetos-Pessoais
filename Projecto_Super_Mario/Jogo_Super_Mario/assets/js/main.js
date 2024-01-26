
//Primeiramente pegamos a class mário e a classe pipe
const mario =document.querySelector('.mario');

const pipe = document.querySelector('.pipe');



const jump = () => {

    /* A seguir criamos uma função que adiciona à classe mario a classe criada 

em css, onde contém a animação do jump do mário




É interessante que, o salto do mario está configurado para 500ms e, neste mesmo intervalo

de tempo, a função jump adiciona a classe jump à classe mário e logo após ele chegar ao chão

remove a classe jump para que ela possa ser utilizada novamente



*/

    mario.classList.add('jump');

    setTimeout(function(){

        mario.classList.remove('jump')
    }, 500);
}


const loop = setInterval(()=> {

    /*

    Esta função executa um loop que checa se a posição do mario e a posição da pipe são iguais

    caso a posição da pipe seja inferior a posição do mario, isto significa que ele tocou ela

    */

    // pipe.offsetLeft obtém a posição actual pipe quando ela está se deslocando da direita para a esquerda

    
    const pipePosition = pipe.offsetLeft;

    /*Utilizamos getComputedStyle para obter os estilos ou as propriedades utilizadas no elemento do DOM, no caso

    obtemos a propriedade bottom de marioPosition

    */

    //Adicionar + em frente de window, converte o resultado apresentado como string, para Number

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80  ){

        //Caso a pipe encontre ou atravesse o mario, a animação pára

        //Utilizamos style para poder acessar diretamente as propriedades css da classe

        pipe.style.animation = 'none';
        
        pipe.style.left =  `${pipePosition}px`; 

        //Agora vamos fazer com que o mario pare no lugar que ele encostou no tubo

        mario.style.animation = 'none';
        
        mario.style.bottom =  `${marioPosition}px`; 

        /*Podemos adicionar a imagem do mario de quando ele perde:

        Visto que o elemento mario é uma imagem, temos acesso ao atributo src 

        logo:
        
        */

       mario.src= './assets/img/game-over.png';

       //Podemos mudar o tamanho do mario a partir do css

       mario.style.width = '75px';

       mario.style.marginLeft ='50px';

       //Após acabar o jogo, o loop continua executando, para isso, podemos aplicar um clearInterval

       clearInterval(loop);

    }


}, 10);

//Checamos se alguma tecla foi pressionada e caso seja, executamos a função jump
document.addEventListener('keydown', jump);