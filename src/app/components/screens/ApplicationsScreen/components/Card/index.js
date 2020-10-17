import React from 'react';
import { CardContainer, CardTitle, CardDate } from './styled';

const Card = ({ title, date }) => {
  return (
    <CardContainer
      initial={{
        opacity: 0, 
        y: "-10px"
      }}
      animate={{
        opacity: 1,
        y: "0"
      }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <CardTitle>{title}</CardTitle>
      <CardDate>{date}</CardDate>
    </CardContainer>
  )
}
export default Card;