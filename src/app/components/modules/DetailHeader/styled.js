import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.green};
  height: 25vh;
  text-align: center;
  padding-bottom: 5vh;
  padding-left: 5%;
  padding-right: 5%;
`;

export const HeaderTitle = styled(motion.h1)`
  color: white;
  font-size: 26px;  
  font-family: 'Lato-Regular';
  text-align: center;
`;

export const HeaderSubTitle = styled(motion.h2)`
  font-family: 'Arial-Regular';
  font-size: 14px; 
  color: white;
  text-align: center;
`;

export const HeaderTitleContainer = styled(motion.div)`
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start;
  padding-left: 5px;
`;

export const HeaderButtonDivider = styled(motion.div)`
  display: grid;
  grid-template-columns: 0.4fr 1.6fr 0.4fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  margin-top: 5vh;
  justify-content: center;

  svg {
    margin-top: 10px;
  }
`;

export const SVGContainer = styled.div`
  padding: 0;  
`;