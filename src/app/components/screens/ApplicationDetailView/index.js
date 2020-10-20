import React from 'react';
import { DetailHeader } from '../../modules/index';
import { useLocation } from "react-router-dom";

import { Container } from './styled';
import { MapCard, TimelineContainer } from './components';

const ApplicationDetailView = () => {
  const location = useLocation();
  const param = location.state.params;

  return (
  <Container>
    {param ? (
      <>
        <DetailHeader title={param.title} date={param.date} />
        <MapCard />
        <TimelineContainer />
      </>
    ): null }
  </Container>

  )
}

export default ApplicationDetailView