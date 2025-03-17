// screens/ParamsScreen.tsx
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const ParamsScreen = () => {
  const [params, setParams] = useState(Array(5).fill(''));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>方案顾问</Text>
      
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index} style={styles.inputGroup}>
          <Text style={styles.label}>方案参数 {index + 1}</Text>
          <TextInput
            style={styles.input}
            placeholder={`请输入参数`}
            value={params[index]}
            onChangeText={(text) => {
              const newParams = [...params];
              newParams[index] = text;
              setParams(newParams);
            }}
          />
        </View>
      ))}

      <TouchableOpacity 
        style={styles.generateButton}
        onPress={() => console.log('生成建议', params)}
      >
        <Text style={styles.generateText}>生成建议方案</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5fcff'
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 25,
    color: '#1890ff'
  },
  inputGroup: {
    marginBottom: 20
  },
  label: {
    marginBottom: 8,
    color: '#666'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 12
  },
  generateButton: {
    backgroundColor: '#1890ff',
    borderRadius: 6,
    paddingVertical: 14,
    marginTop: 20
  },
  generateText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  }
});

export default ParamsScreen;