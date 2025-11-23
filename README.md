# RecordandoJS-02
En el siguiente ejercicio debo realizar lo siguiente:

Escribe una funcion en la cual reciba un arregle de numeros y retorne:
- La **Cantidad de numeros negativos**
- La **Cantidad de nuemeros positivos**
- La **La cantidad de ceros**

### ¿Como resolverlo?

Primero debemos contar tanto cantidades positivas, como negativas, como cantidad de ceros hay en un arreglo de numeros. Osea tenemos que ir numero por numero del array con un for(), identificar si es negativo ¿Como hacer eso?, sumar el valor original que tengo y con ello presentarlo

### Notas del ejercicio

1. En mi primera versión usé comparaciones que no tenían sentido:
   - `numeros[i] === numeros[i] * 1` (siempre verdadero)
   - `numeros[i] === numeros[i] * -1` (siempre falso)

2. No apliqué la lógica matemática simple:
   - Positivo → `> 0`
   - Negativo → `< 0`
   - Cero → `=== 0`

3. Mi estructura general (for + contadores) estaba correcta, solo fallaba la condición.

4. Aprendí a no sobrecomplicar cuando la solución es directa.
