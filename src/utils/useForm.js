import React, {useState} from 'react';

const useForm = () => {

  const [state, setState] = useState(false);

  const handleChange = (event) => {
    event.persist();
    console.log(state);

    setState((state) => (
        {
          ...state,
          [event.target.name]: event.target.value
        }
      )
    )
  }

  return [state, setState, handleChange]

}

export default useForm;
