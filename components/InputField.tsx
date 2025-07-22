import React from 'react';
import { TextInput } from 'react-native';

const InputField = ({...props}) => {
  return (
    <TextInput {...props} className='p-3 rounded-md h-[50px] bg-white'/>
  )
}

export default InputField;
