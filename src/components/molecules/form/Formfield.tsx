/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

import InputBox from '../../atoms/InputBox';
import { type IFormField } from './form.interface';

// import Dropdown from "@atoms/dropdown";

const FormFieldType = {
  DROPDOWN: 'dropdown',
  UPLOAD: 'upload',
  SWITCH: 'switch',
  RADIO: 'radio',
  TITLE: 'title',
  HEADING: 'heading',
  PHONE: 'phone',
  DATE: 'date',
  PASSWORD: 'password',
  CHECKBOX: 'checkbox',
  COMPONENT: 'component',
  MULTILINE: 'multiline',
  ELEMENT: 'element',
};

const styleBox: any = {
  marginTop: 3,
  marginBottom: 0,
};

const FormField: React.FunctionComponent<IFormField> = (props) => {
  const {
    onBlur = () => {},
    value,
    errors,
    touched,
    startIcon,
    endIcon,
    description = '',
    type,
    fieldName,
    label = '',
    options,
    placeholder = '',
    disabled = false,
    required = false,
    setFieldValue,
    handleChange,
    isRow,
    title,
    subtitle,
    heading,
    textAreaMinRows,
    fieldData,
    isdescriptiontooltip,
    component: Component,
    maxdate,
    mindate,
    mixPanelTrackScreenName,
    isMixpanelTrackOn,
    element,
  }: IFormField = props;

  const [showPassword, setShowPassword] = useState(false);
  /** change visibity of text in password fields */
  const handleClickShowPassword = () => { setShowPassword((show) => !show); };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleFieldValue = useCallback(
    (eventValue: any) => {
      setFieldValue(fieldName, eventValue);
      handleChange({ [fieldName]: eventValue }, fieldName);
    },
    [setFieldValue, handleChange, fieldName],
  );

  if (type === FormFieldType.ELEMENT && (element != null)) {
    return React.cloneElement(element);
  }

  if (type === FormFieldType.COMPONENT && (Component != null)) {
    return <Component {...props} />;
  }

  return (
    <Box {...styleBox}>
      <InputBox
        fieldName={fieldName}
        handleChange={(e: any) => { handleFieldValue(e?.target?.value); }}
        label={label}
        onBlur={onBlur}
        errors={errors}
        value={value ?? ''}
        placeholder={placeholder}
        touched={touched}
        description={description}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        required={required}
        type={type}
        isdescriptiontooltip={isdescriptiontooltip}
        {...(type === FormFieldType?.PASSWORD && {
          endIcon: (
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        })}
        {...(type === FormFieldType?.PASSWORD && {
          type: showPassword ? 'text' : 'password',
        })}
        multiline={type === FormFieldType?.MULTILINE}
        textAreaMinRows={textAreaMinRows}
      />
    </Box>
  );
};

export default FormField;
