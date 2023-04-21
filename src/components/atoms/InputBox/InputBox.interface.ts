import { type HTMLInputTypeAttribute } from 'react';

export interface IInputBox {
  label: string
  value: any
  handleChange: (event: unknown, newValue?: unknown) => any
  onBlur: any
  fieldName: string
  placeholder: string
  errors: unknown
  touched: unknown
  type?: HTMLInputTypeAttribute
  startIcon?: any
  endIcon?: any
  required?: boolean
  description?: string
  disabled?: boolean
  isdescriptiontooltip?: boolean
  multiline?: boolean
  textAreaMinRows?: number
}
