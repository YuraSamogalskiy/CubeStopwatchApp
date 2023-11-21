import { useEffect, useState } from 'react'
import useKeyPress from '../hooks/useKeyPress'
import styles from './Stopwatch.modules.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectResults,
  setStopwatchResult,
} from '../redux/slices/stopwatchSlice'

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState({
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  })
  const dispatch = useDispatch()
  const results = useSelector(selectResults)
  const spaceKeyPressed = useKeyPress(' ')

  useEffect(() => {
    let intervalId

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          const newMilliseconds = prevTime.milliseconds + 10
          const newSeconds =
            prevTime.seconds + Math.floor(newMilliseconds / 1000)
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60)
          const newHours = prevTime.hours + Math.floor(newMinutes / 60)

          return {
            milliseconds: newMilliseconds % 1000,
            seconds: newSeconds % 60,
            minutes: newMinutes % 60,
            hours: newHours,
          }
        })
      }, 10)
    }
    if (!isRunning && time.milliseconds > 0) {
      dispatch(setStopwatchResult(time))
    }

    return () => clearInterval(intervalId)
  }, [isRunning, dispatch, time])

  useEffect(() => {
    // Викликається при зміні spaceKeyPressed
    if (spaceKeyPressed.length > 0) {
      setIsRunning(prevIsRunning => !prevIsRunning)
    }
  }, [spaceKeyPressed])

  // console.log(time)
  const reset = () => {
    setTime({
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    })
  }

  return (
    <div className={styles.stopwatchContainer}>
      <h1 className={styles.stopwatchTime}>
        {time.hours}:{time.minutes.toString().padStart(2, '0')}:
        {time.seconds.toString().padStart(2, '0')}.
        {time.milliseconds.toString().padStart(3, '0').slice(0, 2)}
      </h1>

      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Stopwatch
