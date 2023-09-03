import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function ConversorVelocidade() {
  const [kmh, setKmh] = useState('');
  const [mph, setMph] = useState('');

  const converter = () => {
    const mphValue = parseFloat(kmh) * 0.621371;
    setMph(mphValue.toFixed(2));
  };

  return (
    <View>
      <TextInput
        placeholder="Digite a velocidade em km/h"
        value={kmh}
        onChangeText={text => setKmh(text)}
        keyboardType="numeric"
      />
      <Button title="Converter" onPress={converter} />
      <Text>{mph} mph</Text>
    </View>
  );
}
