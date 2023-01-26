  const form = document.querySelector('#formulario');
  const result = document.querySelector('.result');

  function resultformulario(event) {
  event.preventDefault();
    
  const Peso = document.querySelector('#peso').value;
  const Altura = document.querySelector('#altura').value;

  const imc = (Peso / (Altura * Altura)).toFixed(2);
  
  if (imc >= 0.00 && imc <= 18.49){
    result.innerHTML = `<p> Seu IMC é de:  ${imc} Você é considerado como "Muito Magro"</p>`
  }
  else if (imc >= 18.50 && imc <= 24.99) {
    result.innerHTML = `<p> Seu IMC é de:  ${imc} Seu peso é considerado "Normal"</p>`
  }
  else if (imc >= 25.00 && imc <= 29.99) {
    result.innerHTML = `<p> Seu IMC é de: ${imc} Você está em "Sobrepeso"</p>`
  }
  else if (imc >= 30.00 && imc <= 39.99) {
    result.innerHTML = `<p> Seu IMC é de: ${imc} Você é considerado como "Obeso"</p>`
  } 
  else if (imc >= 40.00) {
    result.innerHTML = `<p> Seu IMC é de: ${imc} Você possui "Obesidade grave"</p>`
  }
  else {
    result.innerHTML = `<p> Falha. Tente Novamente</p>`
  }
} 

form.addEventListener('submit', resultformulario)
