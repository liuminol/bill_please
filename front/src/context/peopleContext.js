import { createContext, useState, useContext, useEffect } from 'react'


const peopleContext = createContext()

export function PeopleContextProvider({children}) {
  const [people, setPeople ] = useState([])
  const [ result, setResult ] = useState('')

  return (
    <peopleContext.Provider value={{people, setPeople, result, setResult}}>
      {children}
    </peopleContext.Provider>
  )
}

export const usePeopleContext = () => useContext(peopleContext)
