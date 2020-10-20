import React from 'react';
import { Header } from '../../modules/';

import { Container, CardList } from './styled';
import { Card } from './components/index';

const ApplicationsScreen = () => {
  const [lopende, setLopende] = React.useState(true)
  const [verzonden, setVerzonden] = React.useState(false)

  return (
    <Container>
      <Header 
        title="Aanvragen"
        buttons={[
          {
            label: "Lopende",
            state: {lopende},
            action: () => {
              setLopende(true)
              setVerzonden(false)
            }
          },
          {
            label: "Verzonden",
            state: {verzonden},
            action: () => {
              setLopende(false)
              setVerzonden(true)
            }
          }
        ]}
      />
      <CardList>
        <Card 
          title="Mathenesserdijk" 
          date="09-09-2020"
        />
        <Card 
          title="Bergweg" 
          date="01-08-2020"
        />
      </CardList>
    </Container>
  )
}

export default ApplicationsScreen;
