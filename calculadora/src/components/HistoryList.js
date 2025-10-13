import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';

const HistoryList = ({ history, isDarkTheme, onClearHistory }) => {
  const styles = createStyles(isDarkTheme);

  if (history.length === 0) {
    return null;
  }

  return (
    <View style={styles.historyContainer}>
      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>Histórico</Text>
        <TouchableOpacity onPress={() => onClearHistory?.('CLEAR_HISTORY')}>
          <Text style={styles.clearButton}>Limpar</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        style={styles.historyList}
        showsVerticalScrollIndicator={false}
      >
        {history.map((item, index) => (
          <Text key={index} style={styles.historyItem}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const createStyles = (isDark) => StyleSheet.create({
  historyContainer: {
    backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    maxHeight: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: isDark ? 0.3 : 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: isDark ? '#444' : '#e0e0e0',
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: isDark ? '#ffffff' : '#000000',
  },
  clearButton: {
    fontSize: 14,
    color: isDark ? '#e74c3c' : '#ff6b6b',
    fontWeight: '600',
  },
  historyList: {
    flexGrow: 0,
  },
  historyItem: {
    fontSize: 14,
    color: isDark ? '#cccccc' : '#666666',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: isDark ? '#3d3d3d' : '#f0f0f0',
  },
});

export default HistoryList;