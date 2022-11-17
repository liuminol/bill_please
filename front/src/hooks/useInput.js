import { useState, } from 'react'

function useInput({ defaultValue = '', type = 'text', name = '', id = 'input' }) {
  const [value, setValue] = useState(defaultValue)

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleClear() {
    setValue('')
  }

  function getValue() {
    return value
  }

  return ({
    handleChange,
    handleClear,
    getValue,
    attrs: {
      value,
      type,
      name,
      id
    }
  })
}

export default useInput;
