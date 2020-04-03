function myFunction(x) {
    if ((x.id == "star_square_normal1") || (x.id == "star_square_normal2")) {
        x.id = "star_square_replacement";
    } else if ((x.id == "star_square_replacement") && (x.className == "normal1")) {
        x.id = "star_square_normal1";
    } else if ((x.id == "star_square_replacement") && (x.className == "normal2")) {
        x.id = "star_square_normal2";
    }

    if (x.childNodes[1].id == "star_noire") {
        x.childNodes[1].id = "star_jaune";
    } else {
        x.childNodes[1].id = "star_noire";
    }
}

var sujetsCheckbox = document.getElementsByClassName("sujetsCheckbox");
var sujetsBlocs = document.getElementsByClassName("SujetsBlocs");


var jsonSujets = JSON.parse(sessionStorage.getItem("json"));
console.log(Object.keys(jsonSujets).length);
for (let k = 0; k < Object.keys(jsonSujets).length; k++) {
    var indexString = k.toString();
    sujetsCheckbox[k].checked = jsonSujets[indexString]
    
}
initialHideOrShowBloc(sujetsCheckbox, sujetsBlocs)

function initialHideOrShowBloc (sujetsCheckbox, sujetsBlocs) {
    for (let k = 0; k < sujetsCheckbox.length; k++) {
        if (!sujetsCheckbox[k].checked) {
            sujetsBlocs[k].style.display = "none";
        }
    }
}

for (let k = 0; k < sujetsCheckbox.length; k++) {
    sujetsCheckbox[k].addEventListener("change", function() {
        if (sujetsCheckbox[k].checked) {
            console.log("cas1");
            sujetsBlocs[k].style.display = "block";
        }
        else{
            console.log("cas2");
            sujetsBlocs[k].style.display = "none";
        }
    });
}