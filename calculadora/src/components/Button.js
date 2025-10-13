import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Dimensions 
} from 'react-native';

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
  const styles = createStyles(isDarkTheme, isSpecial, isOperation, isScientific);

  // Ícone para o botão de histórico
  const getButtonTitle = () => {
    if (title === 'HISTORY') return '📋'; // Ícone para histórico
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

const createStyles = (isDark, isSpecial, isOperation, isScientific) => 
  StyleSheet.create({
    button: {
      width: BUTTON_SIZE,
      height: BUTTON_SIZE,
      borderRadius: BUTTON_SIZE / 2,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
      backgroundColor: 
        isSpecial ? (isDark ? '#e74c3c' : '#ff6b6b') :
        isOperation ? (isDark ? '#2980b9' : '#339af0') :
        isScientific ? (isDark ? '#27ae60' : '#40c057') :
        isDark ? '#3d3d3d' : '#f8f9fa',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: isDark ? 0.5 : 0.1,
      shadowRadius: 3.84,
      elevation: 4,
    },
    buttonText: {
      fontSize: isScientific ? 16 : 20,
      fontWeight: isScientific ? '600' : 'bold',
      color: 
        isSpecial || isOperation || isScientific ? '#ffffff' :
        isDark ? '#ffffff' : '#000000',
    },
  });

export default Button;