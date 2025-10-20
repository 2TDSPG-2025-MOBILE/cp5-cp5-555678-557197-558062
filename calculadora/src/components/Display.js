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
      {/* Número e operação anterior */}
      {previousNumber !== '' && operation !== '' && (
        <Text style={styles.previousOperation}>
          {previousNumber} {operation}
        </Text>
      )}

      {/* Número atual */}
      <Text
        style={styles.currentNumber}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        minimumFontScale={0.5}
      >
        {currentNumber}
      </Text>
      
      {/* Resultado */}
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 20,
    minHeight: 120,
    maxHeight: 150,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexShrink: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
