import React from 'react';
import { useForm } from "react-hook-form";

const CreateUserForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" defaultValue="test" ref={register} />
      <input name="password" ref={register({ required: true })} />
      {errors.password && <span>password field is required</span>}
      {errors.email && <span>email field is required</span>}
      <input type="submit" />
    </form>
  )
}

export default CreateUserForm;