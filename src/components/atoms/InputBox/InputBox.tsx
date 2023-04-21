import { useState } from 'react';

import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

import { ErrorField } from '../../atoms/ErrorField';
import Label from '../../atoms/Label';
import { type IInputBox } from './InputBox.interface';

const InputBox: React.FunctionComponent<IInputBox> = ({
  label,
  value,
  handleChange = () => {},
  onBlur = () => {},
  fieldName,
  placeholder,
  errors,
  touched,
  type = 'text',
  required = false,
  disabled = false,
  startIcon,
  endIcon,
  multiline = false,
  textAreaMinRows,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focus, setFocus] = useState(false);
  return (
    <Box>
      <FormControl
        fullWidth
        margin="dense"
        disabled={disabled}
        sx={{
          '&:hover .MuiInputLabel-root': {
            borderColor: '#134A17',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: ' #DEE4EB',
          },
          '&:hover  .MuiOutlinedInput-notchedOutline': {
            borderColor: '#134A17',
            zIndex: -1,
          },

          '& label.Mui-focused': {
            position: 'absolute',
            top: -18,
            left: -14,
          },
          '& .MuiInputLabel-root': {
            position: 'absolute',
            top: -10,
          },
          ...((Boolean(value)) && {
            '& .MuiInputLabel-root': {
              position: 'absolute',
              top: -18,
              left: -14,
            },
          }),
          ...(!disabled
            ? {
              '& legend': {
                position: 'absolute',
                top: -10,
                left: -14,
              },
            }
            : {
              '& .MuiInputLabel-root': {
                position: 'absolute',
                top: -5,
              },
            }),
        }}
      >
        <Label
          fieldName={fieldName}
          label={label ?? ''}
          required={required}
        />
        <OutlinedInput
          size="small"
          fullWidth
          disabled={disabled}
          required={required}
          autoComplete="off"
          label={label}
          value={value ?? ''}
          multiline={multiline}
          {...((textAreaMinRows != null) && { rows: textAreaMinRows })}
          placeholder={placeholder ?? label ?? ''}
          name={fieldName}
          type={type}
          onChange={handleChange}
          onBlur={(e) => {
            onBlur(e);
            setFocus(false);
          }}
          onFocus={() => { setFocus(true); }}
          inputProps={{
            autoComplete: 'new-password',
            form: {
              autoComplete: 'off',
            },
          }}
          {...((Boolean(endIcon)) && {
            endAdornment: (
              <InputAdornment position="end">{endIcon}</InputAdornment>
            ),
          })}
          {...((Boolean(startIcon)) && {
            startAdornment: (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ),
          })}
        />
        <ErrorField errors={errors} touched={touched} fieldName={fieldName} />
      </FormControl>
    </Box>
  );
};

export default InputBox;
