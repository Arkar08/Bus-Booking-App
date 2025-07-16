import React from 'react';
import { TextInput } from 'react-native';

const InputField = ({...props}) => {
  return (
    <TextInput {...props} className='p-3 rounded-md border-[0.5px]' />
  )
}

export default InputField;
