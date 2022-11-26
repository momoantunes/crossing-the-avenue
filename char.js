let xChar = 100;
let yChar = 366;
let colisao = false;
let pontos = 0;

function mostraChar(){
  image(char, xChar, yChar, 40, 40);
}

function movimentaChar(){
   if (keyIsDown (87)){ 
  yChar -= 10;
  }
  if (keyIsDown (83)){ 
  yChar += 10;
    print (yChar);
}}

function  verColisao(){
  for (let i = 0; i < carros.length; i ++){ 
 colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros,xChar, yChar, 30 )
    if (colisao) {
      resetChar();
        
    }
  }  
}

function resetChar(){
yChar = 366;
}

function incluiPontos(){
  text(pontos, width/2.2, 22);
  textStyle (BOLD);
  textSize (22);
  fill (255,215,0)
}

function marcaPonto(){
if (yChar < 10){
  pontos += 1;
  resetChar();
}
}

