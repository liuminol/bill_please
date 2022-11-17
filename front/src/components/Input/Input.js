import styles from './input.module.css'


function Input({id, name, type, value, handleChange}) {

  return (
  <>
    <div> <label className={styles.input_label_light} htmlFor={id}> {name}:{value}</label>
    <input className={styles.inputfield_light} type={type} onChange={handleChange} id={id} name={name} placeholder={name}/>
    </div>
  </>
  )

}

export default Input 
