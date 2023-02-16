const display = document.querySelector("#display"); // recebe o conteúdo da tela da calculadora
const buttons = document.querySelectorAll("button"); // recebe todos os botões

buttons.forEach((item) => { // cria um laço de repetição para cada botão
  item.onclick = () => { // função para quando botão receber clique
    if (item.id == "limpar") { // configura as ações para quando clicar em limpar
      display.innerText = ""; // limpa o conteúdo da tela
    } else if (item.id == "equal") { // configura as ações para quando clicar em igual
      if (display.innerText.includes("^")) { // verifica se a ação é de exponenciação
        let base = display.innerText.split("^")[0]; // divide o conteúdo da tela em dois e recebe o primeiro número
        let expo = display.innerText.split("^")[1]; // recebe o segundo número
        display.innerText = Math.pow(base, expo); // usa-se a biblioteca "Math" para calcular exponencial
      } else {
        display.innerText = eval(display.innerText); // usa-se a função "eval", que interpreta o que a string contém e realiza uma ação com base nisso
      }
    } else { // clique em botão de número ou operador
      display.innerText += item.id; // adiciona o conteúdo na tela
    }
  }
})

