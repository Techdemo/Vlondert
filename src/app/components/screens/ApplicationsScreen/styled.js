import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardList = styled.div`
  margin-top: -1.25em;
  display: flex;
  padding-left: 2em;
  padding-right: 2em;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Card = styled(motion.div)`
  background-color: white; 
  width: 100%;
  height: 33.33%;
  border: 2px solid red;
  margin-bottom: 15%;
`;