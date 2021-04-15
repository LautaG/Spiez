function imgdetalle1() {
    document.getElementById("img-detalle-1").style.display = "block";
    document.getElementById("img-detalle-2").style.display = "none";
     document.getElementById("img-detalle-3").style.display = "none";
      var element = document.getElementById("botondetalle-1");
   element.classList.add("is-active");
    var element = document.getElementById("botondetalle-2");
   element.classList.remove("is-active");
    var element = document.getElementById("botondetalle-3");
   element.classList.remove("is-active");
};

function imgdetalle2() {
    document.getElementById("img-detalle-1").style.display = "none";
    document.getElementById("img-detalle-2").style.display = "block";
     document.getElementById("img-detalle-3").style.display = "none";
     var element = document.getElementById("botondetalle-2");
   element.classList.add("is-active");
    var element = document.getElementById("botondetalle-1");
   element.classList.remove("is-active");
    var element = document.getElementById("botondetalle-3");
   element.classList.remove("is-active");
    };

function imgdetalle3() {
    document.getElementById("img-detalle-1").style.display = "none";
    document.getElementById("img-detalle-2").style.display = "none";
     document.getElementById("img-detalle-3").style.display = "block";
   var element = document.getElementById("botondetalle-3");
   element.classList.add("is-active");
    var element = document.getElementById("botondetalle-1");
   element.classList.remove("is-active");
    var element = document.getElementById("botondetalle-2");
   element.classList.remove("is-active");
    };