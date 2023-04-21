import FormMaker from 'components/molecules/form';
import { useFormik } from 'formik';
import { loginSchema } from 'utils/validations/login.schema';
import classes from './LoginForm.module.scss';
import { Button } from '@mui/material';

export const LoginFooter = () => {
  return (
    <div className={classes['login-footer']}>
      <div className={classes.remember}>
        <input type="checkbox" />
        <span>Remember me for next 30 days</span>
      </div>
      <a href="#" className={classes['forgot-password-link']}>Forgot Password</a>
    </div>
  );
};

// import classes from './LoginForm.module.scss';
export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phoneNumber: '+91',
    },
    validateOnChange: true,
    validationSchema: loginSchema,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: (values: any) => {
      console.log('Submitted', values);
    },
  });

  return (
    <>
      <FormMaker formfields={[
        {
          fieldName: 'email',
          label: 'Email Address',
          required: true,
          type: 'text',
        },
        {
          fieldName: 'password',
          label: 'Password',
          required: true,
          type: 'password',
        },
        {
          fieldName: 'element',
          type: 'element',
          element: <LoginFooter />,
        },
        {
          fieldName: 'element',
          type: 'element',
          element: <Button className={classes['login-btn']} variant='contained' fullWidth disabled={!formik.isValid}>Login</Button>,
        },
      ]}
      formik={formik}
      onChange={(values, fieldName) => { console.log(values, fieldName); }}/>
    </>
  );
};
