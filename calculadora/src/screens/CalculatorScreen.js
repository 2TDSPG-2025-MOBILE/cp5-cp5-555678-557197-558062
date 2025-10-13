import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Dimensions,
  SafeAreaView 
} from 'react-native';
import Display from '../components/Display';
import ButtonGrid from '../components/ButtonGrid';
import HistoryList from '../components/HistoryList';
import { 
  calculateResult, 
  validateOperation 
} from '../utils/calculations';

const CalculatorScreen = () => {
  // Estados principais da calculadora
  const [currentNumber, setCurrentNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Função para lidar com pressionamento de botões
  const handleButtonPress = (buttonValue) => {
    switch (buttonValue) {
      case 'C':
        // Limpar tudo
        setCurrentNumber('0');
        setPreviousNumber('');
        setOperation('');
        setResult('');
        break;

      case 'DEL':
        // Apagar último dígito
        if (currentNumber.length > 1) {
          setCurrentNumber(currentNumber.slice(0, -1));
        } else {
          setCurrentNumber('0');
        }
        break;

      case '=':
        // Calcular resultado
        if (previousNumber && operation && currentNumber) {
          const calculationResult = calculateResult(
            previousNumber,
            currentNumber,
            operation
          );
          
          if (calculationResult.error) {
            setResult('Erro');
            setCurrentNumber('0');
          } else {
            const calculationString = `${previousNumber} ${operation} ${currentNumber} = ${calculationResult.value}`;
            setResult(calculationResult.value);
            setCurrentNumber(calculationResult.value.toString());
            setPreviousNumber('');
            setOperation('');
            
            // Adicionar ao histórico (mantém apenas últimos 5)
            setHistory(prev => {
              const newHistory = [calculationString, ...prev];
              return newHistory.slice(0, 5);
            });
          }
        }
        break;

      case '+':
      case '-':
      case '×':
      case '÷':
        // Operações básicas
        if (currentNumber && currentNumber !== '0') {
          setOperation(buttonValue);
          setPreviousNumber(currentNumber);
          setCurrentNumber('0');
          setResult('');
        }
        break;

      case 'x²':
        // Potência ao quadrado
        if (currentNumber && currentNumber !== '0') {
          const squared = Math.pow(parseFloat(currentNumber), 2);
          const calculationString = `(${currentNumber})² = ${squared}`;
          setCurrentNumber(squared.toString());
          setHistory(prev => [calculationString, ...prev.slice(0, 4)]);
        }
        break;

      case '√':
        // Raiz quadrada
        if (currentNumber && parseFloat(currentNumber) >= 0) {
          const sqrt = Math.sqrt(parseFloat(currentNumber));
          const calculationString = `√${currentNumber} = ${sqrt}`;
          setCurrentNumber(sqrt.toString());
          setHistory(prev => [calculationString, ...prev.slice(0, 4)]);
        } else {
          setResult('Erro');
          setCurrentNumber('0');
        }
        break;

      case 'sin':
      case 'cos':
      case 'tan':
        // Funções trigonométricas (convertendo para radianos)
        if (currentNumber && currentNumber !== '0') {
          const radians = parseFloat(currentNumber) * (Math.PI / 180);
          let trigResult;
          
          switch (buttonValue) {
            case 'sin': trigResult = Math.sin(radians); break;
            case 'cos': trigResult = Math.cos(radians); break;
            case 'tan': trigResult = Math.tan(radians); break;
          }
          
          const calculationString = `${buttonValue}(${currentNumber}°) = ${trigResult.toFixed(6)}`;
          setCurrentNumber(trigResult.toFixed(6).toString());
          setHistory(prev => [calculationString, ...prev.slice(0, 4)]);
        }
        break;

      case '%':
        // Porcentagem
        if (currentNumber && currentNumber !== '0') {
          const percentage = parseFloat(currentNumber) / 100;
          setCurrentNumber(percentage.toString());
        }
        break;

      case 'π':
        // Número Pi
        setCurrentNumber(Math.PI.toString());
        break;

      case '±':
        // Trocar sinal
        if (currentNumber && currentNumber !== '0') {
          setCurrentNumber((parseFloat(currentNumber) * -1).toString());
        }
        break;

      case '.':
        // Adicionar ponto decimal
        if (!currentNumber.includes('.')) {
          setCurrentNumber(currentNumber + '.');
        }
        break;

      case 'THEME':
        // Alternar tema
        setIsDarkTheme(!isDarkTheme);
        break;

      case 'CLEAR':
        // Limpar histórico
        setHistory([]);
        break;

      default:
        // Números
        if (currentNumber === '0') {
          setCurrentNumber(buttonValue);
        } else {
          setCurrentNumber(currentNumber + buttonValue);
        }
        break;
    }
  };

  // Estilos baseados no tema
  const styles = createStyles(isDarkTheme);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculator}>
        {/* Display principal */}
        <Display 
          currentNumber={currentNumber}
          previousNumber={previousNumber}
          operation={operation}
          result={result}
          isDarkTheme={isDarkTheme}
        />
        
        {/* Histórico de cálculos */}
        <HistoryList 
          history={history}
          isDarkTheme={isDarkTheme}
        />
        
        {/* Grade de botões */}
        <ButtonGrid 
          onButtonPress={handleButtonPress}
          isDarkTheme={isDarkTheme}
        />
      </View>
    </SafeAreaView>
  );
};

// Função para criar estilos dinâmicos baseados no tema
const createStyles = (isDark) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDark ? '#1a1a1a' : '#f0f0f0',
  },
  calculator: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
});

export default CalculatorScreen;