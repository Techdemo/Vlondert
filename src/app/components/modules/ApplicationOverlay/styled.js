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
  background-color: white;
`;

export const ContentContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  padding-left: 2rem; 
  padding-right: 2rem;
  padding-top: 1.75rem;
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.titleFontFamily};
  font-size: ${props => props.theme.fonts.titleFontSize};
  color: ${props=> props.theme.colors.black};
`;

export const SubTitle = styled.h3`
  font-family: ${props => props.theme.fonts.subtitleFontFamily};
  font-size: ${props => props.theme.fonts.subtitleFontSize};
  color: ${props => props.theme.colors.grey};
  letter-spacing: 0;
  text-align: left;
  margin-top: 0.25rem;
  flex: 1;
`;

export const Header = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; 
`;

export const IconContainer = styled.div`
  display: flex; 
  justify-content: space-around;
  flex-direction: row;
  max-width: 33.33%;
`;

export const Footer = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  align-self: end;
  margin-top: 5rem;
  align-self: center;
  align-items: center;
`;

export const Text = styled.div`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.titleFontFamily};
  font-size: ${props => props.theme.fonts.subtitleFontSize};
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 5px; 
  font-size: 18px;
  margin-top: 1rem;
  background-color: ${props => props.state ? props.theme.colors.darkGreen : props.theme.colors.green};
  color: white;
  font-family: 'Arial-Regular';
  border: none; 
  padding-top: 10px;
  padding-bottom: 10px; 
  padding-left: 60px; 
  padding-right: 60px;
  outline: none;
`;