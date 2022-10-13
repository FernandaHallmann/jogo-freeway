//Ator
let xAtor = 235;
let yAtor = 369;
let colisao = false;
let pontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

  
function movimentaAtor(){
  if (keyIsDown(UP_ARROW) || keyIsDown(87)){
    yAtor -= 4;
  }
  
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
    if (podeMovimentar()){
      yAtor += 4;
    }
  }
}


function verificaColisao(){
  for (let i = 0; i < imagensCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      colidiu();
    }
  }
}


function colidiu(){
  yAtor = 368;
  somColisao.play();
  if (pontos > 0){
    pontos -= 1;
  }
}


function incluiPontos(){
  fill(color(255, 240, 60));
  text(pontos, 250, 25);
  textAlign(CENTER);
  textSize(22);
}


function marcaPonto(){
  if (yAtor <= 15){
    pontos += 1;
    somPonto.play();
    yAtor = 369;
  }
}


function podeMovimentar(){
  return yAtor <= 370;
}