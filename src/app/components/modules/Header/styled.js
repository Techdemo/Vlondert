import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.green};
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column; 
  justify-content: space-evenly;
  padding-bottom: 5vh;
`;

export const HeaderTitle = styled(motion.h1)`
  color: white;
  font-size: 24px; 
  font-family: 'Lato-Regular';
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-evenly;
`;
