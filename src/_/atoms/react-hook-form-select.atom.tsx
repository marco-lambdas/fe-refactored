import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { Controller } from 'react-hook-form';

const ReactHookFormSelect: React.FC<any> = ({ name, label, control, defaultValue, children, errors, ...props }) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props} variant='outlined' style={{ width: '100%' }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        as={
          <Select labelId={labelId} label={label} style={{ minWidth: '100%' }}>
            {children}
          </Select>
        }
        name={name}
        control={control}
        defaultValue={defaultValue || 'Australia'}
        rules={{ required: 'Please select a country' }}
        errors={errors.country}
      />
    </FormControl>
  );
};
export default ReactHookFormSelect;
