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
  display: flex;
  align-items: center;
`;