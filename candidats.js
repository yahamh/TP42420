fetch("http://localhost:3000/data")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data) {

        // creer une liste deroulante
        var liste_deroulante = document.createElement("select");
        liste_deroulante.setAttribute("id", "liste_deroulante");
        // lui assigner les dates souhaitees par defaut
        var option1 = new Option(data.Elections[0].date);
        var option2 = new Option(data.Elections[2].date);
        liste_deroulante.add(option1);
        liste_deroulante.add(option2);
        // attacher la liste deroulante a son div parent
        document.getElementById("rectangle").appendChild(liste_deroulante);

        
        ///////////////////////////// Partis Federaux /////////////////////////////
        // parcours des partis federaux
        for (let i = 0; i < data.PartisFederaux.length; i++) {

            var div_partiFederal = document.createElement("div");

            if(i == 0) {
                div_partiFederal.setAttribute("id", "premierParti");
            }
            if(i == 1) {
                div_partiFederal.setAttribute("id", "deuxiemeParti");
            }
            if(i == 2) {
                div_partiFederal.setAttribute("id", "troisiemeParti");
            }
            if(i == 3) {
                div_partiFederal.setAttribute("id", "quatriemeParti");
            }
            if(i == 4) {
                div_partiFederal.setAttribute("id", "cinqiemeParti");
            }
            if(i == 5) {
                div_partiFederal.setAttribute("id", "sixiemeParti");
            }

            // ajouter l'abreviation du parti (ex: P.L.C pour Parti Libéral du Canada)
            div_partiFederal.appendChild(creerSpan("span_abreviationParti", data.PartisFederaux[i].abreviation));
            // ajouter le nom complet du parti (ex: Parti Libéral du Canada pour le P.L.C)
            div_partiFederal.appendChild(creerSpan("span_nomCompletParti", data.PartisFederaux[i].fullname));
            
            // attacher le div cree au div du html
            document.getElementById("partisFederaux").appendChild(div_partiFederal);

            // creer le div scrollbar pour chaque parti
            var div_scrollbar = document.createElement("div");
            div_scrollbar.setAttribute("id", "scrollbar_parti");
            // attacher le div cree au div du html
            div_partiFederal.appendChild(div_scrollbar);

            // parcours des candidats d'un parti
            for (let j = 0; j < data.PartisFederaux[i].candidats.length; j++) {

                // creer le rectangle blanc
                var div_candidat = document.createElement("div");
                div_candidat.setAttribute("class", "candidat");

                // attacher le div cree a son div parent
                div_scrollbar.appendChild(div_candidat);

                // attacher la checkbox creee a son div parent
                div_candidat.appendChild(creerCheckBoxFederaux());
    
                // creer et attacher le nom du candidat a son div parent
                div_candidat.appendChild(creerSpan("span_candidat", data.PartisFederaux[i].candidats[j].candidat));  
            } 

        }

        ////////////////////////////// Partis Provinciaux ////////////////////////////////
        // parcours des partis provinciaux
        for (let i = 0; i < data.PartisProvinciaux.length; i++) {

            var div_partiProvincial = document.createElement("div");

            if(i == 0) {
                div_partiProvincial.setAttribute("id", "premierParti");
            }
            if(i == 1) {
                div_partiProvincial.setAttribute("id", "deuxiemeParti");
            }
            if(i == 2) {
                div_partiProvincial.setAttribute("id", "troisiemeParti");
            }
            if(i == 3) {
                div_partiProvincial.setAttribute("id", "quatriemeParti");
            }
            if(i == 4) {
                div_partiProvincial.setAttribute("id", "cinqiemeParti");
            }
            if(i == 5) {
                div_partiProvincial.setAttribute("id", "sixiemeParti");
            }
            if(i == 6) {
                div_partiProvincial.setAttribute("id", "septiemeParti");
            }

            // ajouter l'abreviation du parti (ex: P.L.C pour Parti Libéral du Canada)
            div_partiProvincial.appendChild(creerSpan("span_abreviationParti", data.PartisProvinciaux[i].abreviation));
            // ajouter le nom complet du parti (ex: Parti Libéral du Canada pour le P.L.C)
            div_partiProvincial.appendChild(creerSpan("span_nomCompletParti", data.PartisProvinciaux[i].fullname));
            
            // attacher le div cree a son div parent du html
            document.getElementById("partisProvinciaux").appendChild(div_partiProvincial);

            // creer le div scrollbar pour le parti en question
            var div_scrollbar = document.createElement("div");
            div_scrollbar.setAttribute("id", "scrollbar_parti");
            // attacher le div cree au div du html
            div_partiProvincial.appendChild(div_scrollbar);

            // parcours des candidats d'un parti
            for (let j = 0; j < data.PartisProvinciaux[i].candidats.length; j++) {

                // creer le rectangle blanc
                var div_candidat = document.createElement("div");
                div_candidat.setAttribute("class", "candidat");

                // attacher le div cree a son div parent
                div_scrollbar.appendChild(div_candidat);
    
                // attacher la checkbox creee a son div parent
                div_candidat.appendChild(creerCheckBoxProvinciaux());

                // creer et attacher le nom du candidat a son div parent
                div_candidat.appendChild(creerSpan("span_candidat", data.PartisProvinciaux[i].candidats[j].candidat));
            } 

        }

        
        // creer les 2 boutons bleu/blanc
        var button1 = document.getElementById("button1");
        var button2 = document.getElementById("button2");

        button1.addEventListener("click", function () {

            // #2196F3 est la couleur bleue
            button1.style.backgroundColor = '#2196F3';

            // change le texte de couleur blanc <-> gris
            if (button1.childNodes[1].id == "texte2") {
                button1.childNodes[1].id = "texte1";
                button2.childNodes[1].id = "texte2";
            }

            button2.style.backgroundColor = 'white';

            // change les dates dans la liste déroulante
            liste_deroulante.options[0] = new Option (data.Elections[0].date);
            liste_deroulante.options[1] = new Option (data.Elections[2].date);
            
            ShowHideDiv("partisFederaux");
            disableChecboxProvinciaux();
            activeButton();

        });

        button2.addEventListener("click", function () {

            // #2196F3 est la couleur bleue
            button2.style.backgroundColor = '#2196F3';

            // change le texte de couleur blanc <-> gris
            if (button2.childNodes[1].id == "texte2") {
                button2.childNodes[1].id = "texte1"
                button1.childNodes[1].id = "texte2"
            }

            button1.style.backgroundColor = 'white';
            
            // change les dates dans la liste déroulante
            liste_deroulante.options[0] = new Option (data.Elections[1].date);
            liste_deroulante.options[1] = new Option (data.Elections[3].date);

            ShowHideDiv("partisProvinciaux");
            disableChecboxFederaux();
            activeButton();

        });

        activeButton();
});


function ShowHideDiv(x) {

    if (x == "partisFederaux") {
        document.getElementById("partisFederaux").style.display = "block";
        document.getElementById("partisProvinciaux").style.display = "none";
    } else {
        document.getElementById("partisFederaux").style.display = "none";
        document.getElementById("partisProvinciaux").style.display = "block";
    }

}


function creerCheckBoxProvinciaux() {
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "myCheckBox");
    checkbox.setAttribute("class", "candidatsCheckboxProvinciaux");
    checkbox.setAttribute("name", "checkboxCandidat");
    return checkbox;
}

function creerCheckBoxFederaux() {
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "myCheckBox");
    checkbox.setAttribute("class", "candidatsCheckboxFederaux");
    checkbox.setAttribute("name", "checkboxCandidat");
    return checkbox;
}


function creerSpan(class_span, texte) {
    var abreviation_Parti = document.createElement("span");
    abreviation_Parti.setAttribute("class", class_span);
    abreviation_Parti.innerHTML = texte;
    return abreviation_Parti;
}


// Partie qui permet de sélectionner/ déselectionner toutes les checkbox d'un coup.
var checkboxAllSujets = document.getElementById("SelectDeselectAllSujets");
//console.log(checkboxAllSujets.checked);
var sujetsCheckbox = document.getElementsByClassName("sujetsCheckbox");
checkboxAllSujets.addEventListener("change", function () {
    console.log(checkboxAllSujets);

    if (checkboxAllSujets.checked) {
        console.log("Cas n°1");
        for (let k = 0; k < sujetsCheckbox.length; k++) {
            sujetsCheckbox[k].checked = true;
        }
    }
    else {
        console.log("Cas n°2");
        for (let k = 0; k < sujetsCheckbox.length; k++) {
            sujetsCheckbox[k].checked = false;
        }
    }
    console.log("testListener");
    activeButton();

    for(let k = 0; k < sujetsCheckbox.length; k++) {
        sujetsCheckbox[k].addEventListener("change", function(){
          activeButton();
        });
      }
    
});


//Function that actives a button in the "Actions" div if the requirements are respected 
function activeButton() {
    const buttons_propositions = document.getElementsByName("checkboxCandidat");
    const parti_buttons = document.getElementsByClassName("partiButtons")
    var sujetsCheckbox = document.getElementsByClassName("sujetsCheckbox");
    var numberChecked = 0;
    for (i = 0; i < parti_buttons.length; i++) {
        parti_buttons[i].addEventListener("click", function () {
            document.getElementById("submit1_button").disabled = true;
            document.getElementById("submit2_button").disabled = true;
        });
    }
    for (j = 0; j < buttons_propositions.length; j++) {
        buttons_propositions[j].addEventListener("change", function () {
            if (this.checked) {
                numberChecked++;
            }
            else {
                numberChecked--;
            }
            console.log("number checked : ");
            console.log(numberChecked);
            if (numberChecked == 1) {
                document.getElementById("submit1_button").disabled = false;
                document.getElementById("submit2_button").disabled = true;
            }

            else if (numberChecked == 2) {
                document.getElementById("submit1_button").disabled = true;
                document.getElementById("submit2_button").disabled = false;
            }

            else {
                document.getElementById("submit1_button").disabled = true;
                document.getElementById("submit2_button").disabled = true;
            }
        });
    }
}

function disableChecboxProvinciaux () {
    var checkbox = document.getElementsByClassName("candidatsCheckboxProvinciaux");
    for (let k = 0; k < checkbox.length; k++) {
        checkbox[k].checked = false;
    }
}

function disableChecboxFederaux () {
    var checkbox = document.getElementsByClassName("candidatsCheckboxFederaux");
    for (let k = 0; k < checkbox.length; k++) {
        checkbox[k].checked = false;
    }
}


var buttonConnaitre = document.getElementById("submit1_button");
buttonConnaitre.addEventListener("click", function () {
    var sujetsCheckbox = document.getElementsByClassName("sujetsCheckbox");
    var jsonSujets = {

    }
    for (let k = 0; k < sujetsCheckbox.length; k++) {
        jsonSujets[k] = sujetsCheckbox[k].checked;
    }
    var jsonSujets2 = JSON.stringify(jsonSujets);
    console.log(jsonSujets2);
    sessionStorage.setItem("json", jsonSujets2);
    window.location.href = "connaitre_candidat.html";
});



var buttonComparer = document.getElementById("submit2_button");
buttonComparer.addEventListener("click", function () {
    var sujetsCheckbox = document.getElementsByClassName("sujetsCheckbox");
    var jsonSujets = {

    }
    for (let k = 0; k < sujetsCheckbox.length; k++) {
        jsonSujets[k] = sujetsCheckbox[k].checked;
    }
    var jsonSujets2 = JSON.stringify(jsonSujets);
    console.log(jsonSujets2);
    sessionStorage.setItem("json", jsonSujets2);
    window.location.href = "comparer_candidat.html";
});