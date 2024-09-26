//funcion para generar un numero aleatorio de 5 digito
function generarnumeroaleatorio (){
    //generar numero aleatorio de 5 digitos 
      for (let i = 0; i < 5; i++) {
        numero +=  Math.floor(Math.random()*10) + 1;
      } 
      return numero;
    }
      const numeroganador = generarnumeroaleatorio();
      console.log(generarnumeroaleatorio());
    
    //funcion para comprobar el premio
    
      let numerojugador = prompt ("ingrese su numero ")
    
    function comprobarelpremio (numerojugador, numeroganador) {
        let premio = 0;
        if (numerojugador.substr(4)=== numeroganador.substr(4)) { 
    }

    }