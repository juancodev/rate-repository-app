import {
  StatusBar
} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => Alert.alert('Hello World!')}
      >
        <Text>Hello World!</Text>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});