import React from 'react';

import { Container, Form, Field } from './styles';
import { Button } from '../../Components/Button/styles';

function Login() {
  return (
    <>
      <Container>
        <Form action="/login">
          <Field>
            <input
              placeholder=" "
            />
            <label for="email" class="label">Email</label>
          </Field>
          <Field>
            <input
              placeholder=" "
            />
            <label for="password" class="label">Senha</label>
          </Field>

          <Button type="submit">Entrar</Button>
        </Form>

      </Container>
    </>
  );
}

export default Login;