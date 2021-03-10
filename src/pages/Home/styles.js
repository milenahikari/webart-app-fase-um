import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;
export const Title = styled.Text`
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const WrapperInputValue = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputValue = styled.TextInput`
  width: 80%;
  height: 45px;
  padding: 10px;
  border-radius: 5px;
  border: 1px;
  border-color: lightgray;
`;

export const ButtonInputValue = styled.TouchableOpacity`
  width: 15%;
  height: 45px;
  background: lightgray;
  border-radius:5px;
  justify-content: center;
  align-items:center;
`;

export const ButtonInputValueText = styled.Text`
  font-size: 15px;
`;

export const ListValues = styled.FlatList`
  padding: 20px;
`;

export const ListValuesText = styled.Text`
  font-size: 15px;
`;

export const ButtonCalculate = styled.TouchableOpacity`
  height: 45px;
  background: lightgray;
  border-radius:5px;
  justify-content: center;
  align-items:center;
`;

export const ButtonCalculateText = styled.Text`
font-size: 15px;
`;
