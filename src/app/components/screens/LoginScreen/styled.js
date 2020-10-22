import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: ${props => props.theme.colors.green};
  justify-content: center;
  align-items: center;
`;


