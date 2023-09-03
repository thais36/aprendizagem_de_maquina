import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

export default function ConversorApp() {
  // Definindo os estados para armazenar os valores e resultados
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kmh, setKmh] = useState('');
  const [mph, setMph] = useState('');
  const [decimal, setDecimal] = useState('');
  const [binario, setBinario] = useState('');
  const [palavra, setPalavra] = useState('');
  const [palavraInvertida, setPalavraInvertida] = useState('');

  // Função para converter temperatura de ºC para ºF
  const converterTemperatura = () => {
    const f = (parseFloat(celsius) * 9/5) + 32;
    setFahrenheit(f.toFixed(2));
  };

  // Função para converter velocidade de km/h para mph
  const converterVelocidade = () => {
    const mphValue = parseFloat(kmh) * 0.621371;
    setMph(mphValue.toFixed(2));
  };

  // Função para converter número decimal para binário
  const converterDecimalParaBinario = () => {
    const decimalValue = parseInt(decimal, 10);
    if (!isNaN(decimalValue)) {
      setBinario(decimalValue.toString(2));
    } else {
      setBinario('Valor inválido');
    }
  };

  // Função para inverter uma palavra
  const inverterPalavra = () => {
    const palavraReversa = palavra.split('').reverse().join('');
    setPalavraInvertida(palavraReversa);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>

     <View style={styles.titleContainer}>
        <Text style={styles.title}>Programação para dispositivos móveis II</Text>
      </View>

     
      
      <View style={styles.infoContainer}>
        <Text style={styles.boldCenteredText}>FATEC Zona Leste</Text>
        <Text style={styles.centeredText}>Desenvolvimento de Software Multiplataforma</Text>
         {/* Separador */}
      <View style={styles.divider} />
        
        <Text style={styles.boldCenteredText}>Aluna: Thais Oliveira de Almeida</Text>
    

      {/* Separador */}
      <View style={styles.divider} />

        <Text style={styles.CenteredText}>Atividade Prática 1 - Digite os valores abaixo e clique no botão para converter.</Text>
      </View>

      

      
      {/* Seção para converter temperatura */}
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Temperatura em ºC"
          value={celsius}
          onChangeText={text => setCelsius(text)}
          keyboardType="numeric"
        />
        <Button 
          title="Converter Temperatura" 
          onPress={converterTemperatura} 
          color="green" 
        />
        <Text> Temperatura: {fahrenheit} ºF </Text>
      </View>
      
      {/* Separador */}
      <View style={styles.divider} />

      {/* Seção para converter velocidade */}
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Velocidade em km/h"
          value={kmh}
          onChangeText={text => setKmh(text)}
          keyboardType="numeric"
        />
        <Button
          title="Converter Velocidade"
          onPress={converterVelocidade}
          color="green"
        />
        <Text>Velocidade: {mph} mph</Text>
      </View>

      {/* Separador */}
      <View style={styles.divider} />

      {/* Seção para converter número decimal para binário */}
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Número Decimal"
          value={decimal}
          onChangeText={text => setDecimal(text)}
          keyboardType="numeric"
        />
        <Button 
          title="Converter Decimal para Binário" 
          onPress={converterDecimalParaBinario} 
          color="green" 
        />
        <Text>Binário: {binario}</Text>
      </View>

      {/* Separador */}
      <View style={styles.divider} />

      {/* Seção para inverter uma palavra */}
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma palavra"
          value={palavra}
          onChangeText={text => setPalavra(text)}
        />
        <Button 
          title="Inverter Palavra" 
          onPress={inverterPalavra} 
          color="green" 
        />
        <Text>Palavra Invertida: {palavraInvertida}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  title: {
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#e0e0e0', // Cor de fundo lilás
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: 'mintcream', // Cor de fundo verde menta
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 20,
    width: '80%', // Largura definida para igualar o tamanho dos botões e entradas
  },
   infoContainer: {
    paddingVertical: 16,
  },
  boldCenteredText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  centeredText: {
    textAlign: 'center',
  },
  rightAlignedText: {
    textAlign: 'right',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
  input: {
    width: '100%', // Largura definida para igualar o tamanho dos botões e entradas
    height: 40, // Altura definida para igualar o tamanho dos botões
    padding: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});



