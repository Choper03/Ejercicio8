function validarNumero(event) {
    // Obtenemos el valor ingresado en el input
    var inputElement = event.target;
    var valor = inputElement.value;
    inputElement.value = valor.replace(/[^\d.]/g, '');
  }
  
var valor1 =0;

  function calcular(){
    var sueldo = document.getElementById("xd").value;

    if((sueldo > 3499) && (sueldo < 6001)){
      document.getElementById("aumento").textContent ="El aumento a aplicar es del 3% :";
      var total = sueldo * 0.03;
      valor1 = total;
      document.getElementById("valor").textContent ="Valor del aumento: " + total;
    } else if((sueldo > 6001) && (sueldo < 10000)){
      document.getElementById("aumento").textContent ="El aumento a aplicar es del 7% :";
      var total = sueldo * 0.07;
      valor1 = total;
      document.getElementById("valor").textContent ="Valor del aumento: " + total;
    } else if((sueldo > 10000) && (sueldo < 15001)){
      document.getElementById("aumento").textContent ="El aumento a aplicar es del 9% :";
      var total = sueldo * 0.09;
      valor1 = total;
      document.getElementById("valor").textContent ="Valor del aumento: " + total;
    } else{
      document.getElementById("aumento").textContent ="No aplica Aumento";
      document.getElementById("valor").textContent ="Valor del aumento: 0" ;
      valor1 = 0;
    }
  }

  function aceptar(){
    
    var sueldos = document.getElementById("xd").value;
    var nuevos = parseFloat(sueldos) + parseFloat(valor1);
    
    document.getElementById("sueldo").textContent = nuevos;
  }