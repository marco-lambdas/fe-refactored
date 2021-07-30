import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  errorMessageStyle: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
}));

export interface ErrorMessageProps {
  message: string;
  showError: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, showError }) => {
  const classes = useStyles();
  if (showError)
    return (
      <Alert severity='error' className={classes.errorMessageStyle}>
        {message}
      </Alert>
    );
  return null;
};

export default ErrorMessage;
