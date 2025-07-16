import React from 'react';
import { TextInput } from 'react-native';

const InputField = ({...props}) => {
  return (
    <TextInput {...props} className='p-2 rounded-md'/>
  )
}

export default InputField;
