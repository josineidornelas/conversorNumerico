function validate() {
  const field = document.getElementById('bin').value;
  const selectInValidation = document.getElementById("select1").value;

  if(selectInValidation === "Binário") {

    if(field.match(/^[0-1]+$/g) === null) {

      if(field === "") {
  
        alert('Digiete um valor para conversão.');
        throw '';
  
      } else {
          
        alert('Números binários contém apenas 0 ou 1. Digite novamente.');
        throw '';
  
      }
    }
  } else if (selectInValidation === "Decimal") {

    if(field.match(/^[0-9]+$/g) === null) {
      if(field === "") {

        alert('Digiete um valor para conversão.');
        throw '';
      
      } else {
          
        alert('Números decimais contém valores de 0 a 9. Digite novamente.');
        throw '';
      
      }
    }
  }
}
  
  function binarioDecimal(binario) {
    let binary = document.getElementById("bin").value;
    let decimal = 0,
      i = 0,
      resto;
  
    while (binary !== 0) {
      resto = binary % 10;
      binary = Number.parseInt(binary / 10);
      decimal = decimal + resto * Math.pow(2, i);
      ++i;
    }
    return decimal;
  }
  
  function decimalBinario(number) {
    let num = document.getElementById("onlyNumber").value;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
      num = parseInt(num / 2);
      binary = (num % 2) + binary;
    }
    return binary;
  }

  function creatP (param) {
    result = param;
    const resusltDiv = document.getElementById("result");
    const pResult = document.createElement("p");
    pResult.setAttribute("class", "pResult");
    resusltDiv.appendChild(pResult);
    pResult.setAttribute("value", "");
    pResult.innerHTML = result;
  }
  
  function toConvert() {
    validate();

    const selectIn = document.getElementById("select1");
    const selectOut = document.getElementById("select2");
  
    const typeOfIn = selectIn.options[selectIn.selectedIndex].text;
    const typeOfOut = selectOut.options[selectOut.selectedIndex].text;
  
    if (typeOfIn === 'O que você deseja converter?') {
      alert("Por favor, escolha o tipo de número para conversão.");
    } else if (typeOfOut === 'Qual será a saída?') {
        alert("Por favor, escolha o tipo de número para o resultado da conversão.");
    } else if (typeOfIn === typeOfOut) {
        const num = document.querySelector("input");
        let result = num.value; //ver se posso colocar essa parte na função;
        
        creatP(result);
    }
  }