// Login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import useUserFetch from '../hooks/userFetch';

interface LoginProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { login, error } = useUserFetch();

  const handleLogin = async () => {
    const response = await login(email, password);

    if (response.status) {
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Error', error || 'Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.startButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
