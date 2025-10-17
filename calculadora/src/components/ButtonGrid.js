import { View, StyleSheet } from 'react-native';
import Button from './Button';

const ButtonGrid = ({ onButtonPress, isDarkTheme }) => {

  // Define os botões em linhas, incluindo tipos especiais e operação
  const buttonRows = [
    [{ title: 'C', isSpecial: true }, { title: 'DEL', isSpecial: true }, { title: 'π', isScientific: true }, { title: '÷', isOperation: true }],
    [{ title: 'sin', isScientific: true }, { title: 'cos', isScientific: true }, { title: 'tan', isScientific: true }, { title: '×', isOperation: true }],
    [{ title: 'x²', isScientific: true }, { title: '√', isScientific: true }, { title: '%', isScientific: true }, { title: '-', isOperation: true }],
    [{ title: '7' }, { title: '8' }, { title: '9' }, { title: '+', isOperation: true }],
    [{ title: '4' }, { title: '5' }, { title: '6' }, { title: '±', isScientific: true }],
    [{ title: '1' }, { title: '2' }, { title: '3' }, { title: '=', isOperation: true }],
    // Última linha: histórico, zero, ponto e tema
    [{ title: 'HISTORY', isScientific: true }, { title: '0' }, { title: '.' }, { title: 'THEME', isSpecial: true }]
  ];

  return (
    <View style={styles.buttonGrid}>
      {buttonRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.buttonRow}>
          {row.map((button, buttonIndex) => (
            // Renderiza apenas se o botão não estiver marcado como hidden
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

// Estilos do grid de botões
const styles = StyleSheet.create({
  buttonGrid: {
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ButtonGrid;