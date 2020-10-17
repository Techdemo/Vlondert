import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  border-radius: 5px; 
  font-size: 18px;
  background-color: ${props => props.state ? props.theme.colors.darkGreen : props.theme.colors.green};
  color: white;
  font-family: 'Arial-Regular';
  border: none; 
  padding-top: 10px;
  padding-bottom: 10px; 
  padding-left: 20px; 
  padding-right: 20px;
  outline: none;
`;