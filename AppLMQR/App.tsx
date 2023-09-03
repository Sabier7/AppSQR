import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ordenDeTrabajo, setOrdenDeTrabajo] = useState('');
  const [mecanico, setMecanico] = useState(false);
  const [electrico, setElectrico] = useState(false);

  const agregarCliente = async () => {
    try {
      const response = await axios.post('http://localhost:3000/cliente', {
        nombre,
        telefono,
        ordenDeTrabajo: parseInt(ordenDeTrabajo),
        mecanico,
        electrico,
      });
  
      console.log('Cliente agregado con éxito:', response.data);
    } catch (error) {
      console.error('Error al agregar cliente:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />

      <Text>Teléfono:</Text>
      <TextInput
        style={styles.input}
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
        keyboardType="numeric"
      />

      <Text>Orden de Trabajo:</Text>
      <TextInput
        style={styles.input}
        value={ordenDeTrabajo}
        onChangeText={(text) => setOrdenDeTrabajo(text)}
        keyboardType="numeric"
      />

      <Text>Mecánico:</Text>
      <CheckBox
        value={mecanico}
        onValueChange={(newValue) => setMecanico(newValue)}
      />

      <Text>Eléctrico:</Text>
      <CheckBox
        value={electrico}
        onValueChange={(newValue) => setElectrico(newValue)}
      />

      <Button title="Agregar Cliente" onPress={agregarCliente} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default App;
