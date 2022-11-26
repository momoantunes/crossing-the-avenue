let xCarros = [600, 600, 600 , 600];
let yCarros = [50, 125, 210, 290];
let velCarros = [2.6, 3.2, 2.5, 2.8];
let comprimentoCarros = 90;
let alturaCarros = 60;


function mostraCarro(){
  for ( let i = 0; i < carros.length; i ++ ){
  image (carros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro(){
  for ( let i = 0; i < xCarros.length; i ++){
  xCarros[i]  -= velCarros[i];
}
}

function resetarPosCar(){
  for ( let i = 0; i < xCarros.length; i ++){
  if (passouATela(xCarros[i])){
    xCarros[i] = 600;
  } } }
    
function passouATela(xCarro){
      return xCarro < -120;
 }
 
