//1-Loop de pares:
function loopDePares(numero){
    for(var i = 0;i<=100;i++){
        var aux = i+numero;
        if(aux%2==0){
            console.log("El numero " + aux + " es par!")
        }
    }
}

//2-Loop de impares con palabra
function loopDeImpares(numero,palabra){
    for(var i = 0;i<=100;i++){
        if(!((numero+i)%2==0)){
            console.log(palabra);
        }
    }
}

//3- Sumatoria
function sumattion(numero){
    console.log( (numero*(numero+1))/2);
}

//4- Nuevo Arreglo
function nuevoArreglo(numero){
    var vectorNumerico = []
    while(numero>0){
        vectorNumerico.unshift(numero);
        numero--;
    }
    console.log(vectorNumerico);
}

//5- Similar Split
function split(palabra){
    var vector = []
    for(var i=0;i<palabra.length;i++){
        vector[i] = palabra[i];
    }
    console.log(vector);
}

//6- Caracter del medio
function middleCharacter(palabra){
    var resultado = ""
    var longitudPalabra = palabra.length
    if(longitudPalabra %2 == 0){
        resultado = palabra[longitudPalabra/2-1]+palabra[longitudPalabra/2];
    }
    else{
        resultado = palabra[Math.trunc(longitudPalabra/2)];
    }

    console.log(resultado)
}

//7- Mover ceros a lo ultimo
function moveZeros(vector){
    var longitudVector = vector.length;
    for(var i = 0;i<longitudVector;i++){
        if(vector[i]===0){
            vector.splice(i,1);
            vector.push(0);
        }
    }
    console.log(vector);
}

//8- Manejando dos arreglos
function arrayHandler(arregloUno,arregloDos){
    if(arregloDos.length != arregloUno.length){
        alert("La longitud debe ser igual en ambos arreglos");
    }
    else{
        for(var i = 0;i<arregloUno.length;i++){
            console.log("Soy "+ arregloUno[i] + " y yo soy " + arregloDos[i]);
        }
    }
}

//9- Mezclando arreglos I
function mezclarArreglos(arregloUno,arregloDos){
    var arreglo = []
    if(arregloDos.length != arregloUno.length){
        alert("La longitud debe ser igual en ambos arreglos");
    }
    else{
        var contadorUno = 0;
        var contadorDos = 0;
       for(var i = 0;i<arregloUno.length*2;i++){
            if(i%2==0){
                arreglo[i] = arregloUno[contadorUno];
                contadorUno++;
            }
            else{
                arreglo[i] = arregloDos[contadorDos];
                contadorDos++;
            }
       }
    }

    console.log(arreglo);
}

//10- Mínima Suma
function minSum(arreglo){
    var vectorResultado = [];
    arreglo = ordenarVector(arreglo);
    vectorResultado.push(arreglo[0]);
    vectorResultado.push(arreglo[1]);

    console.log(vectorResultado[0]+vectorResultado[1])
}

function ordenarVector(arreglo){
    var aux;
    for(var i = 0;i<arreglo.length;i++){
        for(var k=0;k<arreglo.length;k++){
            if(arreglo[k]>arreglo[k+1]){
                aux = arreglo[k];
                arreglo[k]=arreglo[k+1];
                arreglo[k+1] = aux;
            }
        }
    }

    return arreglo;
}

//11- Arreglo de objetos
function arregloDeObjetos(numero){
  var arregloDeObjetos = [];

  for(var i = 0; i<numero ; i++){
     var objeto = new Object()
     objeto["valor"] = i+1;
     arregloDeObjetos.push(objeto);
  }

  console.log(arregloDeObjetos)
}

//12- Arreglo de objetos
function arregloDeObjetos(numero,palabra){
    var arregloDeObjetos = [];
    for(var i = 0; i<numero ; i++){
       var objeto = new Object()
       objeto[palabra] = i+1;
       arregloDeObjetos.push(objeto);
    }
  
    console.log(arregloDeObjetos)
}

//13- Unica propiedad
function oneProperty(arregloObjetos,palabra){
var vectorResultado = [];
//Verifico que la propiedad exista en todos los objetos
var requisito = chequearPropiedad(arregloObjetos,palabra)

    if(requisito){
        for(var i = 0;i<arregloObjetos.length;i++){
            var nuevoObjeto = new Object();
            nuevoObjeto[palabra] = arregloObjetos[i][palabra];
            vectorResultado.push(nuevoObjeto);
        }
    }
    else{
        alert("Alguno de los objetos no contiene esa propiedad");
    }

    console.log(vectorResultado)
}

function chequearPropiedad(arreglo,palabra){
    var auxVector = []
    for(var i = 0;i<arreglo.length;i++){
        if(arreglo[i].hasOwnProperty(palabra)){
            auxVector[i] = true;
        }
        else{
            auxVector[i] = false;
        }
    }

    var check = auxVector.includes(false);

    return !check
}

//14- Guerra de palabras
function warWords(palabraUno,palabraDos){
    var pesoPalabraUno = analizarPeso(palabraUno);
    var pesoPalabraDos = analizarPeso(palabraDos);
    (pesoPalabraUno>pesoPalabraDos)?console.log(palabraUno):console.log(palabraDos); //notacion ternaria
}

function analizarPeso(palabra){
    var abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var acumulador = 0;

    for(var i = 0;i<palabra.length;i++){
        if(abecedario.includes(palabra[i])){
            acumulador += abecedario.indexOf(palabra[i])+1;
        }
        else{
            alert("Usted ingreso una palabra que no pertenece al alfabeto español!");
        }
    }

    return acumulador;
}

//15- Prefijos telefonicos
function validarPrefijo(numero){
 var prefijos = new Object();
 //Seteo los valores del objeto
 prefijos["54"] = "Argentina";
 prefijos["55"] = "Brazil";
 prefijos["56"] = "Ecuador";
 prefijos["57"] = "Bolivia";
 
 var prefijoNumero = numero.slice(0,2);
 if(prefijos.hasOwnProperty(prefijoNumero)){
    console.log("El numero "+ numero + " pertenece a: "+ prefijos[prefijoNumero]);
 }
 else{
     alert("Ese prefijo no se encuentra en nuestra base de datos")
 }

}