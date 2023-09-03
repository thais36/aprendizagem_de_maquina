import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const converter = () => {
    const f = (parseFloat(celsius) * 9/5) + 32;
    setFahrenheit(f.toFixed(2));
  };

  return (
    <View>
      <TextInput
        placeholder="Digite a temperatura em ºC"
        value={celsius}
        onChangeText={text => setCelsius(text)}
        keyboardType="numeric"
      />
      <Button title="Converter" onPress={converter} />
      <Text>{fahrenheit} ºF</Text>
    </View>
  );
}
