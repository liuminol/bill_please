import Input from "../Input/Input";
import Button from "../Button/Button";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";


function MainPage() {
  const [people, setPeople] = useState([])


useEffect(() => {
  console.log(people);
}, [people])

function addPeople(e) {
e.preventDefault()
  let person = {
    id: Math.random().toString(36).substr(2, 5),
    name: '',
    sum: 0,
    isDebtor: false
  }
  setPeople(prev => [...prev, person])

}

function handleChange() {
  console.log("change");
}

  return (
    <>
    <div>
      Добро пожаловать в BillPlease! 
      Нажмите "+", чтобы добавить товарищей
    </div>
    <form onClick={(e) => addPeople(e)}>
    <Button />
    </form>
    {people.map((el) => (
      <Input 
      key={el.id} 
      id={el.id}
      name={el.name}
      handleChange={handleChange}
       />  
    ))}
    <Input/>
 
    </>
  )


}

export default MainPage
