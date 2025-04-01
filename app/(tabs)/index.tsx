// screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Audio } from 'expo-av';

const HomeScreen = () => {
  const [status, setStatus] = useState('等待点击播放');

  const handlePlay = async () => {
    setStatus('已点击，5秒后播放');

    setTimeout(async () => {
      try {
        const { sound } = await Audio.Sound.createAsync({
          uri: 'https://cas.micoe.com/cas-miniprogram/gaga.wav',
        });
        await sound.playAsync();
        setStatus('正在播放...');
      } catch (error) {
        console.error('播放失败:', error);
        setStatus('播放失败');
      }
    }, 5000);
  };

  const buttons = [
    '招标顾问', 
    '合同顾问',
    '设计顾问',
    '运维顾问'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>四季沐歌AI专家顾问</Text>
      
      <View style={styles.buttonContainer}>
        {buttons.map((btn) => (
          <TouchableOpacity 
            key={btn}
            style={styles.button}
            onPress={() => navigation.navigate('Params', { type: btn })}
          >
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="点击开始播放" onPress={handlePlay} />
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5fcff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    color: '#1890ff'
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  button: {
    width: '48%',
    height: 80,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333'
  },
  
  status: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default HomeScreen;