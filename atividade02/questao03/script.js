function myFunction(){

   var elemento = document.getElementById("paragrafo01").innerHTML;
   document.getElementById("paragrafo03").innerHTML = elemento.toUpperCase();

   var elemento = document.getElementById("paragrafo02").innerHTML;
   document.getElementById("paragrafo04").innerHTML = elemento.toUpperCase();

   document.getElementById("paragrafo01").style.display = "none";
   document.getElementById("paragrafo02").style.display = "none";

   

}