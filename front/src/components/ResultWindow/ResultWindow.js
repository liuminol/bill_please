import styles from './resultwindow.module.css'
import { useState, useEffect } from "react";
import { usePeopleContext } from '../../context/peopleContext'

function ResultWindow() {

  const { result } = usePeopleContext()

  return (
    <>
      <div className={styles.result_window}>
          {result}
      </div>
    </>
  )
}

export default ResultWindow
