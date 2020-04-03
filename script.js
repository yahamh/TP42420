fetch("https://log2420-serve.herokuapp.com/JSON/output.json")
  .then(function(resp){
        return resp.json();
      })
      .then(function(data){
        
        document.getElementById("election").innerHTML = ` <h3>Elections</h3> `
        document.getElementById("titre").innerHTML = ` <h3 align="left">Partis politiques fédéreaux</h3> `
        document.getElementById("titre2").innerHTML = ` <h3 align="left">Partis politiques Provinciaux</h3> `


        
        for(let i = 0; i<data.Elections.length; i++){
        
            var div_button = document.createElement("DIV");          // Create a <DIV> node
            div_button.setAttribute("id", `divPrincipal${i}`);
            document.getElementById("infoCard1").appendChild(div_button); //attacher le div au body

            var button = document.createElement("input");   // Create a radio button
            button.setAttribute("type", "radio");
            button.setAttribute("name", "election_button");
            button.setAttribute("id", `chk${i+1}`)
            button.setAttribute("class", data.Elections[i].name);
            div_button.appendChild(button);                         //attacher le bouton au div

            document.getElementById(`chk${i+1}`).addEventListener("click",function(){
            ShowHideDiv();
        });


        document.getElementById("chk1").checked = true; 


        var buttonChoix = document.createElement("span");        // Create a <span> node
        buttonChoix.innerText = data.Elections[i].name;          //donner le contenu du span
        buttonChoix.setAttribute("class", "nomChoix");

        var buttonDetails= document.createElement("span");        // Create a second <span> node
        buttonDetails.innerText = data.Elections[i].date;         //donner le contenu du span2
        buttonDetails.setAttribute("class", "nomDetails");

        var divQuiContient = document.createElement("DIVA");          // Create a <DIV> node
        divQuiContient.setAttribute("id", "diva");
        document.getElementById(`divPrincipal${i}`).setAttribute("class", "divPrincipal"); //attacher le diva au div

        document.getElementById(`divPrincipal${i}`).appendChild(divQuiContient); //attacher le diva au div
  
        divQuiContient.appendChild(buttonChoix);                         //attacher le span au diva
  
        divQuiContient.appendChild(buttonDetails);   
    }




        ////////////////////////////////CARD 2////////////////////////////////////////////
        for (let i = 0; i < data.PartisFederaux.length; i++) {


          ////////////////////////////cration checkbox partis federaux /////////////////////////

          var div_button2 = document.createElement("DIV2");          // Create a <DIV> node
          div_button2.setAttribute("id", `divPrincipalb${i}`);

          document.getElementById("dvFederaux").appendChild(div_button2); //attacher le div au body


          var button2 = document.createElement("input");   // Create a radio button
          button2.setAttribute("type", "checkbox");
          button2.setAttribute("name", "Partis_button");
          //button.setAttribute("text", data.Elections[i].name);
          button2.setAttribute("id", `connaitre${i + 1}`)
          button2.setAttribute("class", data.PartisFederaux[i].abreviation);
          div_button2.appendChild(button2);                         //attacher le bouton au div

          document.getElementById(`connaitre${i + 1}`).addEventListener("click", function () {
            comparerBouttons(data.PartisFederaux.length, data.PartisProvinciaux.length);
          });


          var buttonChoix2 = document.createElement("span");        // Create a <span> node
          buttonChoix2.innerText = data.PartisFederaux[i].abreviation;          //donner le contenu du span
          buttonChoix2.setAttribute("class", "nomChoix");
          div_button2.appendChild(buttonChoix2);                         //attacher le span au div

          var buttonDetails2 = document.createElement("span");        // Create a second <span> node
          buttonDetails2.innerText = data.PartisFederaux[i].fullname;         //donner le contenu du span2
          buttonDetails2.setAttribute("class", "nomDetails");
          div_button2.appendChild(buttonDetails2);                         //attacher le span2 au div




          var divQuiContientb = document.createElement("DIVB");          // Create a <DIV> node
          divQuiContientb.setAttribute("id", "diva");

          document.getElementById(`divPrincipalb${i}`).setAttribute("class", "divPrincipal");

          document.getElementById(`divPrincipalb${i}`).appendChild(divQuiContientb); //attacher le diva au div


          divQuiContientb.appendChild(buttonChoix2);                         //attacher le span au diva

          divQuiContientb.appendChild(buttonDetails2);

        }


        for (let i = 0; i < data.PartisProvinciaux.length; i++) {

          var div_button3 = document.createElement("DIV3");          // Create a <DIV> node
          div_button3.setAttribute("id", `divPrincipalc${i}`);
          document.getElementById("dvProvinciaux").appendChild(div_button3); //attacher le div au body


          ////////////////////////////cration checkbox partis provinciaux/////////////////////////

          var button2 = document.createElement("input");   // Create a radio button
          button2.setAttribute("type", "checkbox");
          button2.setAttribute("name", "Partis_button");
          //button.setAttribute("text", data.Elections[i].name);
          button2.setAttribute("id", `comparer${i + 1}`)
          button2.setAttribute("class", data.PartisProvinciaux[i].abreviation);
          div_button3.appendChild(button2);                         //attacher le bouton au div

          document.getElementById(`comparer${i + 1}`).addEventListener("click", function () {
            comparerBouttons(data.PartisFederaux.length, data.PartisProvinciaux.length);
          });

          var buttonChoix2 = document.createElement("span");        // Create a <span> node
          buttonChoix2.innerText = data.PartisProvinciaux[i].abreviation;          //donner le contenu du span
          buttonChoix2.setAttribute("class", "nomChoix");
          div_button3.appendChild(buttonChoix2);                         //attacher le span au div

          var buttonDetails2 = document.createElement("span");        // Create a second <span> node
          buttonDetails2.innerText = data.PartisProvinciaux[i].fullname;         //donner le contenu du span2
          buttonDetails2.setAttribute("class", "nomDetails");
          div_button3.appendChild(buttonDetails2);                         //attacher le span2 au div



          var divQuiContientc = document.createElement("DIVB");          // Create a <DIV> node
          divQuiContientc.setAttribute("id", "diva");

          document.getElementById(`divPrincipalc${i}`).setAttribute("class", "divPrincipal");

          document.getElementById(`divPrincipalc${i}`).appendChild(divQuiContientc); //attacher le diva au div


          divQuiContientc.appendChild(buttonChoix2);                         //attacher le span au diva

          divQuiContientc.appendChild(buttonDetails2);





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
          comparerBouttons(0, 0);
        });

        for(let k = 0; k < sujetsCheckbox.length; k++) {
          sujetsCheckbox[k].addEventListener("change", function(){
            comparerBouttons(0, 0);
          });
        }

});



function ShowHideDiv() {
  var chk1 = document.getElementById("chk1");
  var chk2 = document.getElementById("chk2");
  var chk3 = document.getElementById("chk3");
  var chk4 = document.getElementById("chk4");
  
    if (chk1.checked || chk3.checked) {
        dvFederaux.style.display = "block";
        dvProvinciaux.style.display = "none";
        console.log("cond1");
        chk1=false;
   } 
   
   if (chk2.checked || chk4.checked) {
        dvProvinciaux.style.display = "block";
        dvFederaux.style.display = "none";
        chk2=false;
        console.log("cond2");
    }
}


/*
function activateDesactivateButtons() {
  console.log("Activate desactivate function called");
  var sujetsCheckbox = document.getElementsByClassName("sujetsCheckbox");
  var desactivateButtons = true;
  for (let k = 0; k < sujetsCheckbox.length; k++) {
    if (sujetsCheckbox[k].checked) {
      desactivateButtons = false;
      console.log("test");
    }
  }

  if(desactivateButtons) {
    document.getElementById("submit1_button").disabled = true;
    document.getElementById("submit2_button").disabled = true;
  }
}
*/

function comparerBouttons(i, j){
  console.log("Activate desactivate function called");
  var sujetsCheckbox = document.getElementsByClassName("sujetsCheckbox");
  var desactivateButtons = true;
  for (let k = 0; k < sujetsCheckbox.length; k++) {
    if (sujetsCheckbox[k].checked) {
      desactivateButtons = false;
      console.log("test");
    }
  }
  if(desactivateButtons) {
    document.getElementById("submit1_button").disabled = true;
    document.getElementById("submit2_button").disabled = true;
  }
  else {
    var checked = 0;
    if (connaitre1.checked) { checked++; }
    if (connaitre2.checked) { checked++; }
    if (connaitre3.checked) { checked++; }
    if (connaitre4.checked) { checked++; }
    if (connaitre5.checked) { checked++; }
    if (connaitre6.checked) { checked++; }

    if (comparer1.checked) { checked++; }
    if (comparer2.checked) { checked++; }
    if (comparer3.checked) { checked++; }
    if (comparer4.checked) { checked++; }
    if (comparer5.checked) { checked++; }
    if (comparer6.checked) { checked++; }
    if (comparer7.checked) { checked++; }
    console.log(checked);

    if (checked == 1) {
      document.getElementById("submit1_button").disabled = false;
      document.getElementById("submit2_button").disabled = true;
    } else if (checked == 2) {
      document.getElementById("submit1_button").disabled = true;
      document.getElementById("submit2_button").disabled = false;
    } else {
      document.getElementById("submit1_button").disabled = true;
      document.getElementById("submit2_button").disabled = true;
    }
  }
}

function connaitre() { 
    var url= document.getElementById("url").value; 
    document.write("Redirecting to the url in 3 seconds..."); 
    setTimeout(function(){window.location = "https://www.geeksforgeeks.org/html-frame-frameborder-attribute/";}, 3000); 
}


var buttonConnaitre = document.getElementById("submit1_button");
buttonConnaitre.addEventListener("click", function() {
       var sujetsCheckbox = document.getElementsByClassName("sujetsCheckbox");
       var jsonSujets = {

       }
       for (let k = 0; k < sujetsCheckbox.length; k++) {
         jsonSujets[k] = sujetsCheckbox[k].checked;
       }
       var jsonSujets2 = JSON.stringify(jsonSujets);
       console.log(jsonSujets2);
       sessionStorage.setItem("json", jsonSujets2);
       window.location.href = "connaitre.html";
});



var buttonComparer = document.getElementById("submit2_button");
buttonComparer.addEventListener("click", function() {
       var sujetsCheckbox = document.getElementsByClassName("sujetsCheckbox");
       var jsonSujets = {

       }
       for (let k = 0; k < sujetsCheckbox.length; k++) {
         jsonSujets[k] = sujetsCheckbox[k].checked;
       }
       var jsonSujets2 = JSON.stringify(jsonSujets);
       console.log(jsonSujets2);
       sessionStorage.setItem("json", jsonSujets2);
       window.location.href = "comparer.html";
});
