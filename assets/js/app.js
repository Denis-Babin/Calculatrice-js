/* jshint esversion: 6 */

(function () {
    "use strict";

    window.addEventListener("DOMContentLoaded", function () {

        let numbers = document.querySelectorAll(".number"),
            operator = document.querySelectorAll(".operator"),
            screen = document.getElementById("screen"),
            btnCancel = document.getElementById("cancel"),
            btnEgal = document.getElementById("egal"),
            btnClear = document.getElementById("clear"),
            theNum = "",
            oldNum = "",
            op,
            result;

        //récupère la valeur du bouton et la stock dans une variable
        function setNum() {
            if (result) {
                theNum = this.getAttribute("value");
                result = "";
            } else {
                theNum += this.getAttribute("value");
                console.log(theNum);
            }
            screen.innerHTML = theNum;
        }
        //ajoute la valeur actuel dans une autre variable des qu'un operateur est cliquer
        function moveNum() {
            oldNum = theNum;
            theNum = "";
            op = this.getAttribute("value");

            btnEgal.setAttribute("data-result", "");
        }

        function clear() {
            oldNum = "";
            theNum = "";
            screen.innerHTML = "";
        }

        let calcul = function () {
            //converti les strings en nombres
            oldNum = parseFloat(oldNum);
            theNum = parseFloat(theNum);
            //effectue les opérations
            switch (op) {

                case "+":
                    result = oldNum + theNum;
                    console.log('yo');
                    break;

                case "-":
                    result = oldNum - theNum;
                    break;

                case "*":
                    result = oldNum * theNum;
                    break;

                case "/":
                    result = oldNum / theNum;
                    break;

                case "%":
                    result = oldNum % theNum;
                    break;

                default:
                    result = theNum;
            }
            //XD
            if (isNaN(result)) {
                result = "LoL isNaN !";
            }
            //affiche le résultat
            screen.innerHTML = result;
            btnEgal.setAttribute("data-result", result);
            //garde le résultat en memoire
            oldNum = 0;
            theNum = result;

        };
        //évenement onclick
        //nombres
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].onclick = setNum;
        }
        //opérateurs
        for (let i = 0; i < operator.length; i++) {
            operator[i].onclick = moveNum;
        }
        //les boutons spéciaux
        btnEgal.onclick = calcul;
        btnClear.onclick = clear;
    });

}());