 
import { Box } from '@mui/material';

import classes from './error-field.module.scss';

export const ErrorField = ({
  errors,
  fieldName,
  touched,
}: {
  errors: any
  fieldName: string
  touched: any
}) => {
  return (
    <Box marginTop={1}>
      {errors?.[fieldName] && touched?.[fieldName] && (
        <div className={`${classes.error_text} Body_Smallest ms-1 d-flex `}>
          <span className="icon-info icon_15px" style={{ marginTop: '1px' }} />
          <span className="ms-1"> {errors?.[fieldName]}</span>
        </div>
      )}
    </Box>
  );
};
