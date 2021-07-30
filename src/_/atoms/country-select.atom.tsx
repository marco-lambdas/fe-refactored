import { ErrorMessage } from '@hookform/error-message';
import { MenuItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactHookFormSelect from './react-hook-form-select.atom';

interface Props {
  control: any;
  errors: any;
}

const CountrySelect: React.FC<Props> = ({ control, errors }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch(`https://restcountries.eu/rest/v2/all`);
      const dataJson = await data.json();
      setCountriesData(dataJson);
    };
    fetchCountries();
  }, []);

  return (
    <>
      <ReactHookFormSelect
        id='country-select'
        name='country'
        label='Choose your country'
        control={control}
        errors={errors}
      >
        {countriesData.map((countryData: any, index) => {
          return (
            <MenuItem value={countryData.name} key={index}>
              {countryData.name}
            </MenuItem>
          );
        })}
      </ReactHookFormSelect>
      <ErrorMessage errors={errors} name='country' as='p' className='error-message' />
    </>
  );
};

export default CountrySelect;
