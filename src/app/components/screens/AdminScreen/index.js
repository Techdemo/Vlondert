import React from 'react';

import { CreateUserForm } from './components';

const AdminScreen = () => {
  return (
    <>
      <h1>Hier kun je als admin users aanmaken</h1>
      <CreateUserForm />
    </>
  )
}

export default AdminScreen