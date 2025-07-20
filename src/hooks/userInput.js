import { useState } from 'react';

export const useUserInput = (initialValue) => {
   const [values, setValues] = useState(initialValue);

    const [isEditted, setIsEditted] = useState(false);
  
    function handleIsblur(e) {
      const name = e.target.name;
      setIsEditted(true);
    }
  
    function handleInputChange(e) {
     setValues(e.target.value);
     setIsEditted(false);

    } return {
      values,
      setValues,
      isEditted,
      setIsEditted,
      handleIsblur,
      handleInputChange
      
    }}