import { useState, useEffect } from 'react'

const useKeyPress = () => {
  // Стан для збереження натисканих клавіш
  const [pressedKeys, setPressedKeys] = useState([])

  // Функція, яка буде викликана при натисканні клавіші
  const handleKeyDown = ({ key }) => {
    setPressedKeys(prevKeys => {
      if (!prevKeys.includes(key)) {
        return [...prevKeys, key]
      }
      return prevKeys
    })
  }

  // Функція, яка буде викликана при відпусканні клавіші
  const handleKeyUp = ({ key }) => {
    // Видаляємо клавішу з масиву
    setPressedKeys(prevKeys => [...prevKeys, key])
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
  }, [])

  return pressedKeys
}

export default useKeyPress
