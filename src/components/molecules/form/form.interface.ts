import { type FormikProps, type FormikValues } from 'formik';
import { type HTMLInputTypeAttribute } from 'react';
import type React from 'react';
import type * as Yup from 'yup';

export interface IOptions {
  label: string
  value: any
}

type Type =
  | HTMLInputTypeAttribute
  | 'upload'
  | 'switch'
  | 'dropdown'
  | 'title'
  | 'heading'
  | 'phone'
  | 'multiline'
  | 'component'
  | 'element';

export interface IFormField {
  fieldName: string
  type: Type
  label?: string
  placeholder?: string
  errors?: any
  touched?: any
  value?: any
  startIcon?: unknown
  endIcon?: unknown
  options?: IOptions[]
  buttonText?: string
  onChange?: any
  onBlur?: any
  description?: string
  disabled?: boolean
  required?: boolean
  isRow?: boolean // radio group in row
  title?: string
  subtitle?: string
  heading?: string
  fieldData?: object
  isdescriptiontooltip?: boolean
  component?: React.FunctionComponent<any>
  element?: React.ReactElement
  mindate?: Date
  maxdate?: Date
  allFieldValues?: object
  textAreaMinRows?: number
  isMixpanelTrackOn?: boolean
  mixPanelTrackScreenName?: string
  readonly isSubmitting?: boolean
  readonly isValidating?: boolean
  readonly isSubmitExecuting?: boolean
  readonly setFieldValue?: any
  readonly handleChange?: any
}

export interface IFormMaker {
  formfields: IFormField[]
  onSubmit?: any
  validationSchema?: Yup.Schema<any>
  initialValues?: FormikValues
  buttonText?: string
  isSubmitting?: boolean
  onChange?: (e: any, updatedFieldName?: string) => any
  onBlur?: any
  isValidateOnBlur?: boolean
  isValidateOnChange?: boolean
  onValidate?: any
  formik?: FormikProps<any>
  isValidateOnMount?: boolean
  fieldData?: object
  isMixpanelTrackOn?: boolean
  mixPanelTrackScreenName?: string
}
