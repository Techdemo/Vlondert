import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  height: 0;
  box-shadow: 0 5px 27px 5px rgba(0,0,0,0.50);
  z-index: 50;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Header = styled(motion.div)`
  height: 0;
  z-index: 50;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 1.5rem;
`;

export const Title = styled.h1`
  font-family: Lato-Bold;
  font-size: 24px;
  color: #008833;
  letter-spacing: 0;
  text-align: center;
`;

export const Text = styled.p`
  font-family: Lato-Regular;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;

export const Subtitle = styled.h2`
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #008833;
  letter-spacing: 0;
  text-align: center;
`;

export const ContentContainer = styled.div`
  background-color: white; 
  height: 50%; 
  z-index: 49;
  padding: 1rem;
`;

export const ContentTitle = styled.h1`
  font-family: Lato-Bold;
  font-size: 24px;
  color: #008833;
  letter-spacing: 0;
  text-align: left;
  margin-top: 1.5rem;
`;

export const Close = styled.button`
  border-radius: 5px; 
  font-size: 12px;
  color: ${props => props.theme.colors.green};
  font-family: 'Arial-Regular';
  border: none; 
  outline: none;
`