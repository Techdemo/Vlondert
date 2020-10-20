import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled.div`
  background-color: white; 
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  height: 10em;
  margin-bottom: 1em;
`;

export const Container = styled(motion.div)`
  padding-left: 2em;
  padding-right: 2em; 
  margin-top: -2.25em;
`