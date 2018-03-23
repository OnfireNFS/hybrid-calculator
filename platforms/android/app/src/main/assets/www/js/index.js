let expression = "";
let displayExpression = "";

function input(value) {
  expression = expression.concat(value);
  document.getElementById("desktop-expression").innerHTML = parseExpression();
  document.getElementById("mobile-expression").innerHTML = parseExpression();
}

function calculate() {
  document.getElementById("desktop-expression").innerHTML = parseExpression() + " = " + eval(expression);
  document.getElementById("mobile-expression").innerHTML = parseExpression() + " = " + eval(expression);
}

function clearExpression() {
  expression = "";
  document.getElementById("desktop-expression").innerHTML = parseExpression();
  document.getElementById("mobile-expression").innerHTML = parseExpression();
}

function backspace() {
  expression = expression.slice(0, -1);
  document.getElementById("desktop-expression").innerHTML = parseExpression();
  document.getElementById("mobile-expression").innerHTML = parseExpression();
}

function parseExpression() {
  displayExpression = expression.replace(new RegExp("\\*", 'g'), " x ");
  displayExpression = displayExpression.replace(new RegExp("/", 'g'), " ÷ ");
  displayExpression = displayExpression.replace(new RegExp("\\+", 'g'), " + ");
  displayExpression = displayExpression.replace(new RegExp("-", 'g'), " - ");
  return displayExpression;
}

window.addEventListener("keydown", function(event) {
  switch(event.code) {
    case "Digit1":
        input(1);
        break;
    case "Digit2":
        input(2);
        break;
    case "Digit3":
        input(3);
        break;
    case "Digit4":
        input(4);
        break;
    case "Digit5":
        input(5);
        break;
    case "Digit6":
        input(6);
        break;
    case "Digit7":
        input(7);
        break;
    case "Digit8":
        if (event.shiftKey) {
            input("*");
        } 
      
        else {
            input(8);
        }
        
        break;
    case "Digit9":
        input(9);
        break;
    case "Digit0":
        input(0);
        break;
    case "Numpad1":
        input(1);
        break;
    case "Numpad2":
        input(2);
        break;
    case "Numpad3":
        input(3);
        break;
    case "Numpad4":
        input(4);
        break;
    case "Numpad5":
        input(5);
        break;
    case "Numpad6":
        input(6);
        break;
    case "Numpad7":
        input(7);
        break;
    case "Numpad8":
        input(8);
        break;
    case "Numpad9":
        input(9);
        break;
    case "Numpad0":
        input(0);
        break;
    case "Backspace":
        backspace();
        break;
    case "Enter":
        calculate();
        break;
    case "Slash":
        input("/");
        break;
    case "KeyX":
        input("*");
        break;
    case "KeyC":
        clearExpression();
        break;
    case "Equal":
        if (event.shiftKey) {
            input("+");
        } 
      
        else {
            calculate();
        }
        
        break;
    case "Minus":
        input("-");
        break;
    case "Period":
        input(".");
        break;
    case "NumpadDecimal":
        input(".");
        break;
    case "Delete":
        backspace();
        break;
    case "NumpadEnter":
        calculate();
        break;
    case "NumpadAdd":
        input("+");
        break;
    case "NumpadSubtract":
        input("-");
        break;
    case "NumpadMultiply":
        input("*");
        break;
    case "NumpadDivide":
        input("/");
        break;
  } 
}, true);