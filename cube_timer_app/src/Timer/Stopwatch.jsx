import { useEffect, useState } from 'react'
import useKeyPress from '../hooks/useKeyPress'
import styles from './Stopwatch.module.scss'
import { useDispatch } from 'react-redux'
import { setStopwatchResult } from '../redux/slices/stopwatchSlice'
import createTimeWithId from '../utils/createTimeWithId'

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState({
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  })
  const dispatch = useDispatch()
  const spaceKeyPressed = useKeyPress()

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
      const timeForId = createTimeWithId(time)
      dispatch(setStopwatchResult(timeForId))
    }
    return () => clearInterval(intervalId)
  }, [isRunning, dispatch, time])

  useEffect(() => {
    if (spaceKeyPressed) {
      setIsRunning(prevIsRunning => {
        if (!prevIsRunning) {
          setTime({
            milliseconds: 0,
            seconds: 0,
            minutes: 0,
            hours: 0,
          })
        }
        return !prevIsRunning
      })
    }
  }, [spaceKeyPressed])

  return (
    <div className={styles.stopwatchContainer}>
      <h1 className={styles.stopwatchTime}>
        {time.hours}:{time.minutes.toString().padStart(2, '0')}:
        {time.seconds.toString().padStart(2, '0')}.
        {time.milliseconds.toString().padStart(3, '0').slice(0, 2)}
      </h1>
    </div>
  )
}

export default Stopwatch
