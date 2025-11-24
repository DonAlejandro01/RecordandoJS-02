function contarArrays(numeros){
    var positivos=0;
    var negativos=0;
    var ceros=0;

    for(var i=0; i<numeros.length;i++){//Para for siempre necesita un valor inicial

     if(numeros[i]===0){
        ceros+=1;
     }else if(numeros[i]>0){
        positivos+=1;
     }else if(numeros[i]<0){
        negativos+=1;

     }
    }

    var resultado = `Dentro del array se encontro ${ceros} cantidad de ceros, ${positivos} cantidad de numeros positivos y ${negativos} cantidad de numeros negativos`
    return resultado;
}


const array=contarArrays([1, -3, 0, 10, -2, 0])

console.log(array)