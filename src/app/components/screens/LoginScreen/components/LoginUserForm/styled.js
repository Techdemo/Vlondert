import styled from 'styled-components';

export const InputText = styled.input.attrs(props => ({
  type: "text",
}))`
  background-color: ${props => props.theme.colors.green};
  font-size: 18px;
  color: white;
  border: 1px solid white;
  font-weight: bold;
  padding: 16px 30px 16px 30px;
  height: 25%;
  border-radius: 3px;
  font-family: 'Arial-regular';

  ::placeholder {
    color: ${props => props.theme.colors.darkGreen};
  }
  `;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.darkGreen};
  font-weight: bold;
  padding: 16px 30px 16px 30px;
  font-family: 'Arial-regular';
  border-radius: 8px;
  color: white;
  font-size: 18px;
  border: none;
  display: block;
  margin: auto;
  width: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 75%;
`;

export const Span = styled.span`
  margin-top: 1em;
  color: white; 
  font-family: 'Arial-regular';
  font-size: 18px;
  font-style: italic;
  height: 20px;
  margin-bottom: 1em;
`;