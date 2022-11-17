import styles from './form.module.css'
import { useState, useEffect } from "react";
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import { usePeopleContext } from '../../context/peopleContext'

function Form({id, name }) {
  const { people, setPeople } = usePeopleContext()

  const inputs = [
    useInput({name: 'name', id: 'name'}),
    useInput({name: 'sum', id: 'sum'})
  ]

  const changeForm = (e) => {
    e.preventDefault()

    if (e.target.id === 'name') {
      people.map((person) => person.id === id ? person.name = e.target.value : person )
    } else if (e.target.id === 'sum') {
      people.map((person) => person.id === id ? person.sum = Number(e.target.value) : person )
    }

  }

  // useEffect(() => {
  //   console.log(people);
  // }, [people])

  return (
    <form onChange={e=>changeForm(e)}
    id={id}
    name={name}
    >
      {inputs.map(el=> <Input
      key={el.attrs.id}
      id={el.attrs.id}
      name={el.attrs.name}
      type={el.attrs.type}
      value={el.attrs.value}
      handleChange={el.handleChange}
      />)}
    </form>
  )
}

export default Form
