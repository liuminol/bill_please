import styles from './input.module.css'


function Input({id, name, type, value, handleChange}) {

  return (
  <form  className={styles.inputForm} id={id}>
    <div> <label className={styles.input_label_light} htmlFor={id}> Имя</label></div>
    <input className={styles.inputfield_light} type={type} onChange={handleChange} id={id} name={name} placeholder={name}/>
    <div> <label className={styles.input_label_light} htmlFor={id}> сумма </label></div>
    <input/>
  </form>
  )

}

export default Input 
