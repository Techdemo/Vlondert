import React from 'react';
import { Header } from '../../modules/';

import { Container } from './styled';

const testFunction = () => {
  alert("Kansloos")
};

const ApplicationsScreen = () => {
  return (
    <Container>
      <Header 
        title="Aanvragen"
        buttons={[
          {
            label: "Lopende",
            action: () => {
              testFunction()
            }
          },
          {
            label: "Verzonden",
            action: () => {
              testFunction()
            }
          }
        ]}
      />
    </Container>
  )
}

export default ApplicationsScreen;
