//Imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

//Sons
let somTrilha;
let somColisao;
let somPonto;


function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarro4 = loadImage("imagens/carro-4-invertido.png");
  imagemCarro5 = loadImage("imagens/carro-5-invertido.png");
  imagemCarro6 = loadImage("imagens/carro-6-invertido.png");
  imagensCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];

  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}