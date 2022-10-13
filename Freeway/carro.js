//Carros
let yCarros = [40, 100, 150, 210, 263, 320];
let xCarros = [600, 600, 600, -60, -60, -60];
let velocidadeCarros = [3, 3.7, 4.5];
let comprimentoCarro = 60;
let alturaCarro = 40;

//Variáveis de apoio
let i;
let j;


function mostraCarro(){
  j = 0;
  for (i = 0; i < 3; i++){
    image(imagensCarros[i], xCarros[i], yCarros[j], comprimentoCarro, alturaCarro);
    j++;
  }

  for (i = 3; i < 6; i++){
    image(imagensCarros[i], xCarros[i], yCarros[j], comprimentoCarro, alturaCarro);
    j++; 
  }
}


function movimentaCarro(){
  j = 2;
  for (i = 0; i < 3; i++){
    xCarros[i] -= velocidadeCarros[j];
    j--;
  }

  j = 0;
  for (i = 3; i < 6; i++){
    xCarros[i] += velocidadeCarros[j];
    j++;
  }
}


function voltaInicioCarro(){
  for (i = 0; i < 3; i ++){
    if (passouTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }

  for (i = 3; i < 6; i ++){
    if (passouTelaInvertido(xCarros[i])){
      xCarros[i] = -60;
    }
  }
}


function passouTela(xCarro){
  return xCarro <= -60;
}


function passouTelaInvertido(xCarro){
  return xCarro >= 600;
}