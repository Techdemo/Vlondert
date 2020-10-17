import React from 'react';
import { Header } from '../../modules/';

import { Container, CardList, Card } from './styled';

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
          <h2>ja is goed</h2>
        </Card>
        <Card
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
          <h2>Ja is goed</h2>
        </Card>
      </CardList>
    </Container>
  )
}

export default ApplicationsScreen;
