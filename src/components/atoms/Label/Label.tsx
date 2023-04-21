import { Box, InputLabel } from '@mui/material';

import { type ILabel } from './label.interface';

const Label: React.FC<ILabel> = ({
  fieldName,
  label,
  required,
}) => {
  return (
    <InputLabel id={fieldName}>
      {
        <Box display="flex">
          {`${label}${(required ?? false) ? '*' : ''}`}
        </Box>
      }
    </InputLabel>
  );
};

export default Label;
