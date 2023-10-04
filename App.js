import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [contador, setContador] = useState(0);

  function contarIslotes() {
    let contador = 0;
    for (let i = 1; i<texto.length; i++) {
      if (texto[i - 1] === texto[i + 1]) {
        contador++;
      }
    }
    setContador(contador);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setTexto}
        value={texto}
        placeholder="Ingresa la palabra"
        style={styles.separacion}
      />
      <Button
        title="Contar"
        onPress={contarIslotes}
        style={styles.separacion}  
      />
      <Text style={styles.separacion}>"Islotes totales": {contador}</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separacion: 
  {
    marginTop: 25,
    marginBottom: 25,
  }
}
);
