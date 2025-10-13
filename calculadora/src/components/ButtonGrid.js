import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const ButtonGrid = ({ onButtonPress, isDarkTheme }) => {
  const styles = createStyles(isDarkTheme);

  // Definição dos botões organizados em linhas
  const buttonRows = [
    // Linha 1: Funções especiais e científicas
    [
      { title: 'C', isSpecial: true },
      { title: 'DEL', isSpecial: true },
      { title: 'π', isScientific: true },
      { title: '÷', isOperation: true }
    ],
    // Linha 2: Números e operações básicas
    [
      { title: 'sin', isScientific: true },
      { title: 'cos', isScientific: true },
      { title: 'tan', isScientific: true },
      { title: '×', isOperation: true }
    ],
    // Linha 3: Números e operações
    [
      { title: 'x²', isScientific: true },
      { title: '√', isScientific: true },
      { title: '%', isScientific: true },
      { title: '-', isOperation: true }
    ],
    // Linha 4: Números
    [
      { title: '7' },
      { title: '8' },
      { title: '9' },
      { title: '+', isOperation: true }
    ],
    // Linha 5: Números
    [
      { title: '4' },
      { title: '5' },
      { title: '6' },
      { title: '±', isScientific: true }
    ],
    // Linha 6: Números e igual
    [
      { title: '1' },
      { title: '2' },
      { title: '3' },
      { title: '=', isOperation: true, rowSpan: 2 }
    ],
    // Linha 7: Zero e decimal
    [
      { title: 'THEME', isScientific: true },
      { title: '0' },
      { title: '.' },
      { title: 'CLEAR', isSpecial: true, hidden: true } // Espaço reservado
    ]
  ];

  return (
    <View style={styles.buttonGrid}>
      {buttonRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.buttonRow}>
          {row.map((button, buttonIndex) => (
            <Button
              key={buttonIndex}
              title={button.title}
              onPress={onButtonPress}
              isDarkTheme={isDarkTheme}
              isSpecial={button.isSpecial}
              isOperation={button.isOperation}
              isScientific={button.isScientific}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const createStyles = (isDark) => StyleSheet.create({
  buttonGrid: {
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ButtonGrid;