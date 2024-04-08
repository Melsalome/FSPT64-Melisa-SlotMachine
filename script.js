
const IMAGES_WHEEL_LIST = ['./images/goulash.png', './images/japanese.png', './images/mexican.png'];
let state = ['','',''];

const turnWheel = () => {
  const firstWheel = getFirstWheel();
  const secondWheel = getSecondWheel();
  const thirdWheel= getThirdWheel();
  setState(firstWheel,secondWheel,thirdWheel);                                                                                                                                                                                
}

const getRandomWheel = () => {                              
  const randomIndex = Math.floor(Math.random() * IMAGES_WHEEL_LIST.length);
  return IMAGES_WHEEL_LIST[randomIndex];
};

const getFirstWheel = () => {
  return getRandomWheel();
}

const getSecondWheel = () => {
  return getRandomWheel();
}

const getThirdWheel = () => {
  return getRandomWheel();
}

const newState = (clase,state) => {
  document.querySelector(`.${clase}`).setAttribute("src", `${state}`);
}

const setState = (firstWheel,secondWheel,thirdWheel) => {
  state = [firstWheel,secondWheel,thirdWheel];
  newState("ruedauno", state[0]);
  newState("ruedados", state[1]);
  newState("ruedatres", state[2]);


if(state[0] === state[1] && state[1] === state[2]){
  resultado.innerHTML = `<div id="alerta" class="alerta-contenido ganador">
        <div id="alerta-contenido" class="alerta-contenido">
          <p id="mensaje-alerta">¡Ganaste!</p>
          
        </div>
      </div>`;
      return ;
}  

  resultado.innerHTML = `<div id="alerta" class="alerta-contenido sigueIntentando">
<div id="alerta-contenido" class="alerta-contenido">
  <p id="mensaje-alerta">¡Intentalo de nuevo!</p>
  
</div>
</div>`;

}


