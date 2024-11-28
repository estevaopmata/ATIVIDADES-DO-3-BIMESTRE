var setadireita = window.document.getElementById("setadireita");

var setaesquerda = window.document.getElementById('setaesquerda');

var leonardo = window.document.getElementById('leonardo');

var bruna = window.document.getElementById('bruna');

var samantha = window.document.getElementById('samantha');

function deslizarparadireita() {
    leonardo.style="display:none";
    bruna.style ="display:flex";
    setadireita.style="display:none";
    setaesquerda.style="display:flex, margin-top: 50px"; 
}

function deslizarparaesquerda() {
    bruna.style="display:none";
    leonardo.style="display:flex";
    setaesquerda.style="display:none";
    setadireita.style="display:flex, margin-top: 50px"; 
}