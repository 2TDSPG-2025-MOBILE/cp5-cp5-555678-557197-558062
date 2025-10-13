import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Display = ({ 
  currentNumber, 
  previousNumber, 
  operation, 
  result, 
  isDarkTheme 
}) => {
  const styles = createStyles(isDarkTheme);

  return (
    <View style={styles.displayContainer}>
      <Text style={styles.previousOperation}>
        {previousNumber} {operation}
      </Text>

      <Text style={styles.currentNumber} numberOfLines={1} adjustsFontSizeToFit>
        {currentNumber}
      </Text>
      
      {result ? (
        <Text style={styles.resultText}>
          = {result}
        </Text>
      ) : null}
    </View>
  );
};

const createStyles = (isDark) => StyleSheet.create({
  displayContainer: {
    backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    minHeight: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: isDark ? 0.3 : 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  previousOperation: {
    fontSize: 18,
    color: isDark ? '#888' : '#666',
    marginBottom: 5,
  },
  currentNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: isDark ? '#ffffff' : '#000000',
    includeFontPadding: false,
  },
  resultText: {
    fontSize: 24,
    color: isDark ? '#4dabf7' : '#1971c2',
    marginTop: 5,
    fontWeight: '600',
  },
});

export default Display;