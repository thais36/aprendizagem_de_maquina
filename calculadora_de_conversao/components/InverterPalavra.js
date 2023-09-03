import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function InverterPalavra() {
  const [palavra, setPalavra] = useState('');
  const [palavraInvertida, setPalavraInvertida] = useState('');

  const inverter = () => {
    const palavraReversa = palavra.split('').reverse().join('');
    setPalavraInvertida(palavraReversa);
  };

  return (
    <View>
      <TextInput
        placeholder="Digite uma palavra"
        value={palavra}
        onChangeText={text => setPalavra(text)}
      />
      <Button title="Inverter" onPress={inverter} />
      <Text>Palavra Invertida: {palavraInvertida}</Text>
    </View>
  );
}
