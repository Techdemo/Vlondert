import React from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../../components/modules/Firebase/authcontext';

import { LoginUserForm } from './components';

import * as ROUTES from '../../../../config/routes';

const LoginScreen = () => {
  let history = useHistory();
  const { user } = React.useContext(AuthContext)

  React.useEffect(() => {
    if(user) {
      history.push(ROUTES.MAP)
    } 
  }, [user])

  return (
    <>
      <LoginUserForm />
    </>
  )
}

export default LoginScreen;