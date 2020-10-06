console.log('Coladera de Eratostenes v1.0')
const n = 1000
const elementos = Array(n)
const limite = Math.sqrt(n)
let elementoActual;
elementos[0] = false
elementos[1] = 2
for(let i = 2; i < elementos.length; i++){
  if(i%2 == 0){
    elementos[i] = i + 1
  }else {
    elementos[i] = false
  }
}
for(let i = 2; i< limite; i++){
  for(let e = i;e < elementos.length; e++){
    if(elementos[e]%i === 0){
      elementos[e] = false
    }
  }
}
console.log('Los que tienen numero son primos')
console.log(elementos)
