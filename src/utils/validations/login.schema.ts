import * as Yup from 'yup';

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('invalid email address')
    .required('required field is empty')
    .trim(),
  password: Yup.string()
    .required('Password is required')
    .matches(
      passwordRegex,
      'Your password must be more than 8 characters and have at least one 0-9 digit, one A-Z uppercase character, one a-z lowercase character, one special character.',
    ),
});
