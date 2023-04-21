import FormMaker from 'components/molecules/form';
import { useFormik } from 'formik';
import { signUpSchema } from 'utils/validations/signup.schema';
import classes from './SignUpForm.module.scss';
import { Button } from '@mui/material';
// import { green } from '@mui/material/colors';
export const SignUpFooter = () => {
  return (
    <div className={classes['signup-footer']}>
      <div className={classes.terms}>
        <input type='checkbox' id='terms'/>
        <label htmlFor='terms'>By signup you agree to the <a href="#" className={classes['terms-link']}>Terms and Conditions</a></label>
      </div>
    </div>
  );
};

export const SignUpForm = ( { handleIsCompleted = () => {} }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    validateOnChange: true,
    validationSchema: signUpSchema,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: (values: any) => {
      handleIsCompleted();
      console.log('Submitted', values);
    },
  });

  return (
    <>
      <FormMaker formfields={[
        {
          fieldName: 'firstname',
          label: 'Firstname',
          required: true,
          type: 'text',
        },
        {
          fieldName: 'lastname',
          label: 'Lastname',
          required: true,
          type: 'text',
        },
        {
          fieldName: 'email',
          label: 'Email Address',
          required: true,
          type: 'text',
        },
        {
          fieldName: 'companyName',
          label: 'Company Name',
          required: false,
          type: 'text',
        },
        {
          fieldName: 'fundname',
          label: 'Fund Name',
          required: false,
          type: 'text',
        },
        {
          fieldName: 'password',
          label: 'Create Password',
          required: true,
          type: 'password',
        },
        {
          fieldName: 'confirmPassword',
          label: 'Confirm Password',
          required: true,
          type: 'password',
        },
        {
          fieldName: 'element',
          type: 'element',
          element: <SignUpFooter />,
        },
        {
          fieldName: 'element',
          type: 'element',
          element: <Button onClick={formik.submitForm} className={classes['login-btn']} variant='contained' fullWidth disabled={!formik.isValid}>Login</Button>,
        },
      ]}
      formik={formik}
      onChange={(values, fieldName) => { console.log(values, fieldName); }}/>
    </>
  );
};
