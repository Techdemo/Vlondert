import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
  background-color: white; 
  margin-bottom: 7.5%;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 4em;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`;

export const CardTitle = styled.h2`
  color: black;
  font-size: 20px;
  font-family: 'Lato-Regular';
  margin-bottom: 0.25em;
`;

export const CardDate = styled.h3`
  font-family: 'Arial-Regular';
  font-size: 16px;
  color: ${props => props.theme.colors.grey};
  align-self: flex-start;
`;

export const CardIconContainer = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: space-evenly;
  max-width: 25%;
`

export const CardFooter = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
`;