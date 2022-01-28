import React from 'react';
import {
    LoginContainer,
    LoginArea,
    Name,
    Cadastrar,
    BarraEmail,
    InputEmail,
    BarraSenha,
    InputSenha,
    ForgetPass,
    Entrar
} from "./styles"

export default function Login() {
  return (
      <LoginContainer>
          <LoginArea>
              <Name>Login</Name>
              <BarraEmail>
                <InputEmail placeholder='E-mail'/>
              </BarraEmail>
              <BarraSenha>
                <InputSenha placeholder='Senha' type={"password"}/>
              </BarraSenha>
              <ForgetPass>Esqueci minha senha</ForgetPass>
              <Entrar>Entrar</Entrar>
              <Cadastrar>Ainda não possui uma conta? Cadastre-se!</Cadastrar>

          </LoginArea>
      </LoginContainer>
  );
}
