//Calcul l'imc et fait appele aux fonctions de categorisation
function calculIMC() {
    if (verifTexteImc()) {
        var imcCalc = Math.round((document.getElementById("masse").value / Math.pow((document.getElementById("taille").value), 2)) * 10) / 10;
        if (document.getElementById("Homme").checked) {
            document.getElementById("resultat").innerHTML = ifHomme(imcCalc);
        }
        else {
            document.getElementById("resultat").innerHTML = ifFemme(imcCalc);
        }
    }
}

//Donne imc les catégories en fonction de l'imc
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
    else {
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
    else {
        msg = "IMC : " + imcCalc + ", Obésité";
    }
    return msg;
}

//Supprime toutes les valeurs
function clearTexte() {
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("errMasse").innerHTML = "";
    document.getElementById("errTaille").innerHTML = "";
}

//Verification des entrées
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

//Affiche les différents outils
function showIMC() {
    document.getElementById("imcShow").style.display = "block";
    document.getElementById("factoShow").style.display = "none";
    document.getElementById("fiboShow").style.display = "none";
    document.getElementById("convShow").style.display = "none";
    document.getElementById("descShow").style.display = "none";
    document.getElementById("contShow").style.display = "none";
}

function showFacto() {
    document.getElementById("factoShow").style.display = "block";
    document.getElementById("imcShow").style.display = "none";
    document.getElementById("fiboShow").style.display = "none";
    document.getElementById("convShow").style.display = "none";
    document.getElementById("descShow").style.display = "none";
    document.getElementById("contShow").style.display = "none";
}

function showFibo() {
    document.getElementById("fiboShow").style.display = "block";
    document.getElementById("imcShow").style.display = "none";
    document.getElementById("factoShow").style.display = "none";
    document.getElementById("convShow").style.display = "none";
    document.getElementById("descShow").style.display = "none";
    document.getElementById("contShow").style.display = "none";
}

function showConv() {
    document.getElementById("convShow").style.display = "block";
    document.getElementById("imcShow").style.display = "none";
    document.getElementById("factoShow").style.display = "none";
    document.getElementById("fiboShow").style.display = "none";
    document.getElementById("descShow").style.display = "none";
    document.getElementById("contShow").style.display = "none";
}

function showDesc() {
    document.getElementById("descShow").style.display = "block";
    document.getElementById("imcShow").style.display = "none";
    document.getElementById("factoShow").style.display = "none";
    document.getElementById("fiboShow").style.display = "none";
    document.getElementById("convShow").style.display = "none";
    document.getElementById("contShow").style.display = "none";
}

function showCont() {
    document.getElementById("contShow").style.display = "block";
    document.getElementById("imcShow").style.display = "none";
    document.getElementById("factoShow").style.display = "none";
    document.getElementById("fiboShow").style.display = "none";
    document.getElementById("convShow").style.display = "none";
    document.getElementById("descShow").style.display = "none";
}

//Change la langue
function langue(lg) {
    if (lg === "En") {
        document.getElementById("menuFr").style.display = "none";
        document.getElementById("menuEn").style.display = "Block";
    }
    else {
        document.getElementById("menuFr").style.display = "Block";
        document.getElementById("menuEn").style.display = "none";
    }
}

//Raccourci clavier
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