export const calculateResult = (num1, num2, operation) => {
  const firstNum = parseFloat(num1);
  const secondNum = parseFloat(num2);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    return { error: true, value: 'Erro: Entrada inválida' };
  }

  try {
    let result;
    
    switch (operation) {
      case '+':
        result = firstNum + secondNum;
        break;
      case '-':
        result = firstNum - secondNum;
        break;
      case '×':
        result = firstNum * secondNum;
        break;
      case '÷':
        if (secondNum === 0) {
          return { error: true, value: 'Erro: Divisão por zero' };
        }
        result = firstNum / secondNum;
        break;
      default:
        return { error: true, value: 'Erro: Operação inválida' };
    }

    if (Number.isInteger(result)) {
      return { error: false, value: result };
    } else {
      return { error: false, value: parseFloat(result.toFixed(8)) };
    }
    
  } catch (error) {
    return { error: true, value: 'Erro no cálculo' };
  }
};

export const validateOperation = (currentNumber, operation) => {
  if (!currentNumber || currentNumber === '0') {
    return false;
  }
  
  const validOperations = ['+', '-', '×', '÷'];
  return validOperations.includes(operation);
};

export const formatNumber = (number) => {
  if (typeof number !== 'number') return number;
  
  if (number > 1e15 || (number < 1e-6 && number > 0)) {
    return number.toExponential(6);
  }
  
  return number.toString();
};