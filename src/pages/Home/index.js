import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';

import * as S from './styles';

const Home = () => {
  const [value, setValue] = useState(null);
  const [listValues, setListValues] = useState([]);

  const handleAddValue = useCallback(() => {
    if (!value) {
      Alert.alert('O número adicionado não é válido');
      return;
    }

    setListValues([...listValues, parseFloat(value)]);
    setValue(null);
  }, [listValues, value]);

  const handleCalculate = useCallback(() => {
    if (!listValues.length) {
      Alert.alert('Primeiro adicione os valores para calcular a média');
      return;
    }

    const sum = listValues.reduce((acumulador, atual) => acumulador + atual);

    const result = parseFloat(sum / listValues.length).toFixed(2);

    Alert.alert(`A média final é ${result}`);
  }, [listValues]);

  return (
    <S.Container>
      <S.Title>Idades</S.Title>

      <S.WrapperInputValue>
        <S.InputValue
          keyboardType='numeric'
          onChangeText={value => setValue(value)}
          value={value}
        />

        <S.ButtonInputValue onPress={handleAddValue}>
          <S.ButtonInputValueText>+</S.ButtonInputValueText>
        </S.ButtonInputValue>
      </S.WrapperInputValue>

      <S.ListValues
        data={listValues}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <S.ListValuesText>{item}</S.ListValuesText>
        )}
      />

      <S.ButtonCalculate onPress={handleCalculate}>
        <S.ButtonCalculateText>Calcular Média</S.ButtonCalculateText>
      </S.ButtonCalculate>
    </S.Container>
  );
}

export default Home;