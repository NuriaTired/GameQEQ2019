//Genero mi array de objetos
var allIrons = [];
allIrons.push(iron1, iron2, iron3, iron4, iron5, iron6,iron7,iron8,iron9,iron10,iron11,iron12,iron13,iron14,iron15,iron16,iron17,iron18,iron19,iron20,iron21,iron22,iron23,iron24);

//console.log(allIrons);
//console.log(allIrons.length);

var mystery = [];

//funcion para crear el misterio
function randomSelector(allIrons) {
  console.log("entro aleatorio");
  var i = allIrons.length;
  var aleatorio = Math.floor(Math.random() * i);
  mystery = allIrons[aleatorio];
  console.log(mystery);

  return mystery;
};
randomSelector(allIrons)


function win(){
    addClass(allIrons);
    document.getElementById('iron9').classList.add('y');
    document.getElementById('iron10').classList.add('o');
    document.getElementById('iron11').classList.add('u');
    document.getElementById('iron13').classList.add('w');
    document.getElementById('iron14').classList.add('i');
    document.getElementById('iron15').classList.add('n');
    document.getElementById('iron16').classList.add('adm');
    document.getElementById('iron24').classList.remove("iron24");
    document.getElementById('iron24').classList.remove("cardBack");
    document.getElementById('iron24').classList.add(mystery.name);
    yes();
};

function lost(){
    addClass(allIrons);
    document.getElementById('iron9').classList.add('y');
    document.getElementById('iron10').classList.add('o');
    document.getElementById('iron11').classList.add('u');
    document.getElementById('iron13').classList.add('l');
    document.getElementById('iron14').classList.add('o');
    document.getElementById('iron15').classList.add('s');
    document.getElementById('iron16').classList.add('t');
    document.getElementById('iron24').classList.remove("iron24");
    document.getElementById('iron24').classList.remove("cardBack");
    document.getElementById('iron24').classList.add(mystery.name);
    no();
};


//funcion para Verificar que puedes seguir Jugando
var counter=5;
document.getElementById('rondas').innerHTML = counter;

function winLost(){
    if (counter >= 2){
        counter--;
        document.getElementById('rondas').innerHTML = counter;
        if(allIrons.length == 1){
            console.log("You Win")
            win();
        }
        console.log("Go on");
        return counter;
       
    }else{
        console.log("You Lost!")
        counter=0;
        document.getElementById('rondas').innerHTML = counter;
        lost();
    }
};


//funcion para Boton Adivinar
function adivinar(event){
    console.log(event.currentTarget.id);
    if (event.currentTarget.id == mystery.name){
         win();
         console.log("you win");
    }else{
        lost();
        console.log("you lost");
    }
};


// funcion para activar Clicks
function enableClicks() {
    var cont = document.getElementById('centerBox');
    cont.style.pointerEvents = "auto";
    cont.style.cursor = "pointer";
}


//checkPropertyEyes("marron");

// function check(property, value) {
//     return iron3[property] == value
// }

// check("hair", "short")
