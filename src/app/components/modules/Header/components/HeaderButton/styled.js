import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 5px; 
  font-size: 18px;
  background-color: ${props => props.theme.colors.darkGreen};
  color: white;
  font-family: 'Arial-Regular';
  border: none; 
  padding-top: 10px;
  padding-bottom: 10px; 
  padding-left: 20px; 
  padding-right: 20px;
`;