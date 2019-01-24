function calculIMC() {
    if (verifTexteImc()) {
        var imcCalc = Math.round((document.getElementById("masse").value / Math.pow((document.getElementById("taille").value), 2))*10)/10;
        if (document.getElementById("Homme").checked) {
            document.getElementById("resultat").innerHTML = ifHomme(imcCalc);
        }
        else {
            document.getElementById("resultat").innerHTML = ifFemme(imcCalc);
        }
    }
}

function clearTexte() {
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("errMasse").innerHTML = "";
    document.getElementById("errTaille").innerHTML = "";
}

function ifHomme(imcCalc) {
    var msg;
    if (imcCalc < 20.7) {
        msg = "IMC : " + imcCalc + ", Maigreur";
    }
    else if (imcCalc < 26.4) {
        msg = "IMC : " + imcCalc + ", Poids idéal";
    }
    else if (imcCalc < 27.8) {
        msg = "IMC : " + imcCalc + ", A la limite du surpoids";
    }
    else if (imcCalc < 31.1) {
        msg = "IMC : " + imcCalc + ", Surpoids";
    }
    else{
        msg = "IMC : " + imcCalc + ", Obésité";
    }
    return msg;
}

function ifFemme(imcCalc) {
    var msg;
    if (imcCalc < 19.1) {
        msg = "IMC : " + imcCalc + ", Maigreur";
    }
    else if (imcCalc < 25.8) {
        msg = "IMC : " + imcCalc + ", Poids idéal";
    }
    else if (imcCalc < 27.3) {
        msg = "IMC : " + imcCalc + ", A la limite du surpoids";
    }
    else if (imcCalc < 32.3) {
        msg = "IMC : " + imcCalc + ", Surpoids";
    }
    else{
        msg = "IMC : " + imcCalc + ", Obésité";
    }
    return msg;
}

function verifTexteImc() {
    document.getElementById("errMasse").innerHTML = "";
    document.getElementById("errTaille").innerHTML = "";
    let masse = document.getElementById("masse").value;
    let taille = document.getElementById("taille").value;
    if (masse === "") {
        document.getElementById("errMasse").innerHTML = "Masse non défini";
        return false;
    }
    else if (isNaN(masse)) {
        document.getElementById("errMasse").innerHTML = "La masse n'est pas un nombre";
        return false;
    }
    else if (masse <= 0 || masse > 300) {
        document.getElementById("errMasse").innerHTML = "La masse n'est pas correct";
        return false;
    }

    if (taille === "") {
        document.getElementById("errTaille").innerHTML = "Taille non défini";
        return false;
    }
    else if (isNaN(taille)) {
        document.getElementById("errTaille").innerHTML = "La taille n'est pas un nombre";
        return false;
    }
    else if (taille <= 0 || taille > 3) {
        document.getElementById("errTaille").innerHTML = "La taille n'est pas valide";
        return false;
    }
    return true;
}

var isCtrl = false;
document.onkeyup = function (e) {
    if (e.which === 17) isCtrl = false;
};
document.onkeydown = function (e) {
    if (e.which === 17) isCtrl = true;
    if (e.which === 67 && isCtrl === true) {
        //exécuter la fonction dont le bouton « Calculer » déclenche;
        calculIMC();
    }
};