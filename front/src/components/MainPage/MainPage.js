import Input from "../Input/Input";
import Button from "../Button/Button";
import ResultWindow from '../ResultWindow/ResultWindow'
import useInput from "../../hooks/useInput";
import Form from '../Form/Form'
import { useState, useEffect } from "react";
import styles from './mainPage.module.css'
import { usePeopleContext } from '../../context/peopleContext'
import  CalcPeople  from '../../calculateFoo'

function MainPage() {
  const { people, setPeople, result, setResult } = usePeopleContext()
// const [people, setPeople] = useState([])
// useEffect(() => {
//   console.log(people);
// }, [people])

function addPeople(e) {
e.preventDefault()
setResult('')
  let person = {
    id: Math.random().toString(36).substr(2, 5),
    name:'',
    sum: e.target.value,
    isDebtor: false
  }
  setPeople(prev => [...prev, person])
}
function calculate(e) {
  e.preventDefault()
  let message = CalcPeople(people)
  setPeople([])
  setResult(message)
}
  return (
    <>
      <div className={styles.header}>
        Добро пожаловать в BillPlease! 
        Нажмите "+", чтобы добавить товарищей
        И "ГО", чтобы рассчитать результат
      </div>
      <div className={styles.buttonBlock}>
        <form onClick={(e) => addPeople(e)}>
          <Button name='+'/>
        </form>
        <form onClick={(e) => calculate(e)}>
          <Button name='ГО'/>
        </form>
      </div>
      <div className={styles.peopleBlock}>
        {people.map((el)=>(
          <Form
          key={el.id}
          id={el.id}
          name={el.name}
          />
        ))}
      </div>
      <ResultWindow/>
    </>
  )


}

export default MainPage
