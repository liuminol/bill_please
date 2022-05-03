import Input from "../Input/Input";
import Button from "../Button/Button";
import useInput from "../../hooks/useInput";

function MainPage() {
const inputs = [
  useInput({ name: 'пароль', type: 'password', id: 'password'})
]

  return (
    <>
    <div>
      Добро пожаловать в BillPlease! 
      Нажмите "+", чтобы добавить товарищей
    </div>
    <Button/>
    <Input/>  
    </>
  )


}

export default MainPage
