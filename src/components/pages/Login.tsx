
import { Heading } from '@atoms/Heading';

import { LoginForm } from '../organisms/LoginForm';
import { TwoColumnLayout } from '../templates/TwoColumnLayout/TwoColumnLayout';
import classes from './Login.module.scss';

export const LoginData = () => {
  return (
        <div className={classes['login-container']}>
            <div className={classes['right-container']}>
            <Heading>
                <h1>Welcome to Zive,<br/> Log In to continue</h1>
                <p>Welcome back! Please enter your details</p>
              </Heading>
                <LoginForm></LoginForm>
            </div>
        </div>
  );
};
export const Login = () => {
  return (
        <TwoColumnLayout><LoginData></LoginData></TwoColumnLayout>
  );
};
