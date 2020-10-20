import React from 'react';
import { 
  HeaderContainer, 
  HeaderTitle, 
  HeaderSubTitle, 
  HeaderButtonDivider, 
  HeaderTitleContainer,
  SVGContainer 
} from './styled';

import { BackArrowIcon } from '../../icons/index';
import { useHistory } from 'react-router-dom';

const DetailHeader = ({title, date}) => {
  let history = useHistory();

  const redirect = (title, date) => {
    history.push('/applications', { params: {title: title, date: date }})
  }

  return (
    <HeaderContainer>
      <HeaderButtonDivider>
        <SVGContainer
          onClick={() => redirect(title, date)}
        >
          <BackArrowIcon />
        </SVGContainer>
        <HeaderTitleContainer>
          <HeaderTitle
            initial={{
              opacity: 0, 
              y: "-10px"
            }}
            animate={{
              opacity: 1,
              y: "0"
            }}
            transition={{ duration: 0.2 }}
          >{title}</HeaderTitle>
          <HeaderSubTitle
            initial={{
              opacity: 0, 
              y: "-10px"
            }}
            animate={{
              opacity: 1,
              y: "0"
            }}
            transition={{ duration: 0.2 }}
          >aangemaakt op {date}
          </HeaderSubTitle>
        </HeaderTitleContainer>
      </HeaderButtonDivider>
    </HeaderContainer>
  )
}

export default DetailHeader;