
      function fib() {
        // Hay una variable count que está asignada a la función
    let siguiente = 1;
    let anterior = 0;
    let count = 0;
            // Hay una función interna que incrementa los recuentos (count) y luego los ingresa con console.logs
    function nacci() {

        count = siguiente + anterior;      
        console.log(count);
        anterior = siguiente;
        siguiente = count;
    }
        // ¡regresa la función interna! ¡Podemos devolver una función!
    return nacci
  }
  // el counter es ahora la función devuelta de Outer
  let fibCounter = fib();
                // si invocamos la función de recuento
fibCounter()     // esto hará un ingreso de console.log "1"
fibCounter()     // esto hará un ingreso de console.log "1"
fibCounter()     // esto hará un ingreso de console.log "2"
fibCounter()     // esto hará un ingreso de console.log "3"
fibCounter()     // esto hará un ingreso de console.log "5"
fibCounter()     // esto hará un ingreso de console.log "8"
fibCounter()     // esto hará un ingreso de console.log "13"
fibCounter()     // esto hará un ingreso de console.log "21"
fibCounter()     // esto hará un ingreso de console.log "34"
fibCounter()     // esto hará un ingreso de console.log "55"
fibCounter()     // esto hará un ingreso de console.log "89"
fibCounter()     // esto hará un ingreso de console.log "144"
