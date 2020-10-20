import React from 'react';
import { useHistory } from 'react-router-dom';

import { CardContainer, CardTitle, CardDate, CardIconContainer, CardFooter } from './styled';
import { PersonGreenIcon, PersonGreyIcon } from '../../../../../components/icons/index';

const Card = ({ title, date }) => {
  let history = useHistory();

  const redirect = (title, date) => {
    history.push('/detailview', { params: {title: title, date: date }})
  }
  
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
      title
      date
      onClick={() => redirect(title, date)}
    >
      <CardTitle>{title}</CardTitle>
      <CardFooter>
        <CardDate>{date}</CardDate>
        <CardIconContainer>
          <PersonGreenIcon />
          <PersonGreenIcon />
          <PersonGreyIcon />
          <PersonGreyIcon />
        </CardIconContainer>
      </CardFooter>
    </CardContainer>
  )
}
export default Card;