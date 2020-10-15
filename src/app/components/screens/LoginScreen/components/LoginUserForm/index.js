import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import * as ROUTES from '../../../../../../config/routes';
import { AuthContext } from '../../../../modules/Firebase/authcontext';

const LoginUserForm = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const { handleLogin } = React.useContext(AuthContext)
  
  const onSubmit = async data => {
    let login = await handleLogin(data)

    if(login) {
      history.push(ROUTES.MAP)
    } else {
      alert('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" defaultValue="test" ref={register} />
      <input name="password" ref={register({ required: true})} />
      {errors.password && <span>password field is required</span>}
      {errors.email && <span>password field is required</span>}
      <input type="submit" /> 
    </form>
  )
}

export default LoginUserForm;