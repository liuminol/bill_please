import Input from "../Input/Input";
import useInput from "../../hooks/useInput";

function MainPage() {
const inputs = [
  useInput({ name: 'пароль', type: 'password', id: 'password'})
]

  return (
    <Input/>  
  )


}

export default MainPage
