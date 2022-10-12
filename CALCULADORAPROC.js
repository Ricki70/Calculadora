
    var n1 = "0";
    var n2 = "0";
    var operando;

window.onload = function () {
    var nums = document.getElementsByName("num");
    for (var i = 0; i < nums.length; i++) {
        nums[i].onclick = pulsarNumero;
        }

    document.getElementById("coma").onclick = pulsarComa;
    document.getElementById("negativo").onclick = pulsarNegativo;
    
    
    document.getElementById("del").onclick = pulsarDEL;
    document.getElementById("c").onclick = pulsarC;
    document.getElementById("igual").onclick = pulsarIgual;
}


function pulsarNumero() {
    if (n1 == "0" && n1 !== '0.') {
        n1 = document.getElementById(this.id).value;
    } else if (n1 == "-0"){
        n1 = "-";
        n1 += document.getElementById(this.id).value;
    }else{
        n1 += document.getElementById(this.id).value;
    }
    mostrar();
}

function pulsarComa(){
    if(n1 == 0) {
        n1 = '0.';
    } else if(n1.indexOf('.') == -1) {
        n1 += '.';
    }
    mostrar();
}

function pulsarNegativo() {
    if(n1.indexOf('-') == -1) {
        n1 = "-" + n1;
    }else{
        n1 = n1.replace('-', '');
    }
    mostrar();
}

function pulsarDEL(){
    if (n1.length == 1) {
        n1 = "0";
    } else if (n1.length == 2 && n1.indexOf('-') == 0) {
        n1 = "0";
    } else {
        n1 = n1.slice(0, -1);
    }
    mostrar();
}

function pulsarC(){
    n1 = "0";
    n2 = "0";
    operando = undefined;
    mostrar();
}

function pulsarIgual() {

}

function mostrar() {
    document.getElementById("input").value = n1;
}