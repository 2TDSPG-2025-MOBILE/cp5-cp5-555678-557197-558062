import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

const { height } = Dimensions.get('window');

const HistoryModal = ({ 
  visible, 
  history, 
  isDarkTheme, 
  onClose, 
  onClearHistory 
}) => {
  const styles = createStyles(isDarkTheme);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header do modal */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Histórico de Cálculos</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Lista de histórico */}
          <ScrollView style={styles.historyList}>
            {history.length === 0 ? (
              <Text style={styles.emptyHistory}>
                Nenhum cálculo no histórico
              </Text>
            ) : (
              history.map((item, index) => (
                <View key={index} style={styles.historyItem}>
                  <Text style={styles.historyText}>{item}</Text>
                </View>
              ))
            )}
          </ScrollView>

          {/* Botão limpar histórico */}
          {history.length > 0 && (
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={onClearHistory}
            >
              <Text style={styles.clearButtonText}>Limpar Histórico</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (isDark) => StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: isDark ? '#444' : '#e0e0e0',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: isDark ? '#ffffff' : '#000000',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    color: isDark ? '#ffffff' : '#000000',
    fontWeight: 'bold',
  },
  historyList: {
    maxHeight: height * 0.5,
    marginBottom: 20,
  },
  emptyHistory: {
    textAlign: 'center',
    fontSize: 16,
    color: isDark ? '#888' : '#666',
    fontStyle: 'italic',
    paddingVertical: 40,
  },
  historyItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: isDark ? '#3d3d3d' : '#f0f0f0',
  },
  historyText: {
    fontSize: 16,
    color: isDark ? '#cccccc' : '#333333',
    fontFamily: 'monospace',
  },
  clearButton: {
    backgroundColor: isDark ? '#e74c3c' : '#ff6b6b',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HistoryModal;