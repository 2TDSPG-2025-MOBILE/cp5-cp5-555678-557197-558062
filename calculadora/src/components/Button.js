import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

// Calcula o tamanho do botão baseado na largura da tela
const { width } = Dimensions.get('window');
const BUTTON_SIZE = (width - 80) / 4;

const Button = ({ 
  title,
  onPress,
  isDarkTheme,
  isSpecial = false,
  isOperation = false,
  isScientific = false
}) => {

  // Define a cor de fundo do botão conforme o tipo e o tema
  const getButtonBackgroundColor = () => {
    if (isSpecial) return isDarkTheme ? '#d35400' : '#ff6b6b';
    if (isOperation) return isDarkTheme ? '#2980b9' : '#339af0'; 
    if (isScientific) return isDarkTheme ? '#16a085' : '#40c057';
    return isDarkTheme ? '#3d3d3d' : '#f0f0f0';
  };

  // Define a cor do texto do botão
  const getButtonTextColor = () => {
    if (isSpecial || isOperation || isScientific) return '#fff';
    return isDarkTheme ? '#fff' : '#000';
  };

  // Cria os estilos do botão dinamicamente
  const styles = StyleSheet.create({
    button: {
      width: BUTTON_SIZE,
      height: BUTTON_SIZE,
      borderRadius: BUTTON_SIZE / 2,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
      backgroundColor: getButtonBackgroundColor(),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDarkTheme ? 0.5 : 0.1,
      shadowRadius: 3.84,
      elevation: 4,
    },
    buttonText: {
      fontSize: isScientific ? 16 : 20,
      fontWeight: isScientific ? '600' : 'bold',
      color: getButtonTextColor(),
    },
  });

  // Altera o título de alguns botões (ex.: HISTORY → Histórico)
  const getButtonTitle = () => {
    if (title === 'HISTORY') return 'Histórico';
    return title;
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress(title)}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{getButtonTitle()}</Text>
    </TouchableOpacity>
  );
};

export default Button;
