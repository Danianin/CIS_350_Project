/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
//FIRE
function fireFunction() {
  document.getElementById("fireDropdown").classList.toggle("show");
}
function charizardFunction() {
  document.getElementById("charizardDropdown").classList.toggle("show");
}

//GRASS
function grassFunction() {
  document.getElementById("grassDropdown").classList.toggle("show");
}
function venusaurFunction() {
  document.getElementById("venusaurDropdown").classList.toggle("show");
}

//WATER
function waterFunction() {
  document.getElementById("waterDropdown").classList.toggle("show");
}
function blastoiseFunction() {
  document.getElementById("blastoiseDropdown").classList.toggle("show");
}

//NORMAL
function normalFunction() {
  document.getElementById("normalDropdown").classList.toggle("show");
}
function eeveeFunction() {
  document.getElementById("eeveeDropdown").classList.toggle("show");
}

//BUG
function bugFunction() {
  document.getElementById("bugDropdown").classList.toggle("show");
}
function beedrillFunction() {
  document.getElementById("beedrillDropdown").classList.toggle("show");
}

//ELECTRIC
function electricFunction() {
  document.getElementById("electricDropdown").classList.toggle("show");
}
function pikachuFunction() {
  document.getElementById("pikachuDropdown").classList.toggle("show");
}

//ROCK
function rockFunction() {
  document.getElementById("rockDropdown").classList.toggle("show");
}
function onixFunction() {
  document.getElementById("onixDropdown").classList.toggle("show");
}

//GROUND
function groundFunction() {
  document.getElementById("groundDropdown").classList.toggle("show");
}
function golemFunction() {
  document.getElementById("golemDropdown").classList.toggle("show");
}

//FLYING
function flyingFunction() {
  document.getElementById("flyingDropdown").classList.toggle("show");
}
function pidgeotFunction() {
  document.getElementById("pidgeotDropdown").classList.toggle("show");
}

//GHOST
function ghostFunction() {
  document.getElementById("ghostDropdown").classList.toggle("show");
}
function gengarFunction() {
  document.getElementById("gengarDropdown").classList.toggle("show");
}

//DARK
function darkFunction() {
  document.getElementById("darkDropdown").classList.toggle("show");
}
function noneFunction() {
  document.getElementById("noneDropdown").classList.toggle("show");
}

//POISON
function poisonFunction() {
  document.getElementById("poisonDropdown").classList.toggle("show");
}
function nidokingFunction() {
  document.getElementById("nidokingDropdown").classList.toggle("show");
}

//PSYCHIC
function psychicFunction() {
  document.getElementById("psychicDropdown").classList.toggle("show");
}
function alakazamFunction() {
  document.getElementById("alakazamDropdown").classList.toggle("show");
}

//FAIRY
function fairyFunction() {
  document.getElementById("fairyDropdown").classList.toggle("show");
}
function clefableFunction() {
  document.getElementById("clefableDropdown").classList.toggle("show");
}

//STEEL
function steelFunction() {
  document.getElementById("steelDropdown").classList.toggle("show");
}
function magnetonFunction() {
  document.getElementById("magnetonDropdown").classList.toggle("show");
}

//FIGHTING
function fightingFunction() {
  document.getElementById("fightingDropdown").classList.toggle("show");
}
function machampFunction() {
  document.getElementById("machampDropdown").classList.toggle("show");
}

//ICE
function iceFunction() {
  document.getElementById("iceDropdown").classList.toggle("show");
}
function laprasFunction() {
  document.getElementById("laprasDropdown").classList.toggle("show");
}

//DRAGON
function dragonFunction() {
  document.getElementById("dragonDropdown").classList.toggle("show");
}
function dragoniteFunction() {
  document.getElementById("dragoniteDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}