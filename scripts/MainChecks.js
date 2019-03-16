
//Para añadir clases
function addClass(allIrons) {
  allIrons.forEach(function (item) {
    document.getElementById(item.name).classList.add('cardBack')
  });


};


//Para Quitar clases
function removeClass(allIrons) {
  allIrons.forEach(function (item) {
    document.getElementById(item.name).classList.remove('cardBack')
  });
};

//Funcion para indicar que tiene propiedad
function yes(){
  document.getElementById('buttonAnimatedYes').classList.remove('normalbutton');
  document.getElementById('buttonAnimatedNo').classList.add('normalbutton');
  document.getElementById('buttonAnimatedNo').classList.remove('no');
  document.getElementById('buttonAnimatedYes').classList.add('yes');
};

//Funcion para indicar que NO tiene propiedad
function no() {
  document.getElementById('buttonAnimatedYes').classList.remove('yes');
  document.getElementById('buttonAnimatedYes').classList.add('normalbutton');
  document.getElementById('buttonAnimatedNo').classList.remove('normalbutton');
  document.getElementById('buttonAnimatedNo').classList.add('no');
};




//funcion para Checkear
function checkProperty(properties, value) {

    if (mystery[properties] == value) {
    console.log("Tienes " + value);

    addClass(allIrons); //Pone Todas las cartas Boca abajo
    
    allIrons = allIrons.filter(function(item) {
        return item[properties].includes(value);
    });

    removeClass(allIrons); //Deja Solo Boca Arriba las cartas que queden en el array

    yes(); //Activacion del Boton Afirmativo
    
  } else {

    addClass(allIrons); //Pone Todas las cartas Boca abajo

    allIrons = allIrons.filter(function(item) {
        return item[properties] !== value;
    });
    
    removeClass(allIrons); //Deja Solo Boca Arriba las cartas que queden en el array
   
    no(); //Activacion del Boton Negativo
    console.log("No tiene " + value);


  }
  winLost();
  console.log(counter)
  return allIrons;

};











//checkPropertyEyes("marron");

// function check(property, value) {
//     return iron3[property] == value
// }

// check("hair", "short")

// function checkCSS(properties, value){
//   for (var i = 0; i < allIrons.length; i++)
//     if (mystery[properties] == value)


// }