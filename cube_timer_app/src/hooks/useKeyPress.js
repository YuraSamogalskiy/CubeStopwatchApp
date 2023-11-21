import { useState, useEffect } from 'react'

const useKeyPress = () => {
  // Стан для збереження натисканих клавіш у вигляді рядка
  const [pressedKeys, setPressedKeys] = useState('')

  // Функція, яка буде викликана при натисканні клавіші
  const handleKeyDown = ({ key }) => {
    if (!pressedKeys.includes(key)) {
      setPressedKeys(prevKeys => prevKeys + key)
    }
  }

  // Функція, яка буде викликана при відпусканні клавіші
  const handleKeyUp = () => {
    setPressedKeys('')
  }

  // Ефект для встановлення слухачів подій при монтажі компоненту
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    // Функція вибирається при розмонтажі компоненту, щоб видалити слухачів подій
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, []) // Пустий масив означає, що ефект буде викликаний тільки при монтажі та розмонтажі компоненту

  return pressedKeys
}

export default useKeyPress
