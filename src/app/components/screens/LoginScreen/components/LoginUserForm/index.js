import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import * as ROUTES from '../../../../../../config/routes';
import { AuthContext } from '../../../../modules/Firebase/authcontext';

import { Button, Form, Span, InputText } from './styled';

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputText placeholder="mailadres" name="email" defaultValue="fleuren.marcel@gmail.com" ref={register} />
      <InputText placeholder="password" name="password" ref={register({ required: true})} />
      {errors.password && <Span>password field is required</Span>}
      {errors.email && <Span>password field is required</Span>}
      <Button type="submit">Login</Button> 
    </Form>
  )
}

export default LoginUserForm;