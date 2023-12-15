import { useDispatch, useSelector } from 'react-redux'
import styles from './BestResults.module.scss'
import { meanOf3 } from '../utils/meanOfTime.js'
import {
  selectMaxResult,
  selectMinResult,
  selectResults,
} from '../redux/slices/stopwatchSlice.js'
import { selectAverage, setMo3 } from '../redux/slices/averageSlice.js'
import { useEffect } from 'react'
import formatTime from '../utils/formatTime.js'

const BestResults = () => {
  const results = useSelector(selectResults)
  const max = useSelector(selectMaxResult)
  const min = useSelector(selectMinResult)
  const reverseResults = [...results].reverse()
  const dispatch = useDispatch()
  const lastResults =
    results[results.length - 1] === undefined
      ? '-'
      : results[results.length - 1]

  const sortedResult = [...results].sort((a, b) => {
    const timeA =
      a.hours * 3600000 + a.minutes * 60000 + a.seconds * 1000 + a.milliseconds
    const timeB =
      b.hours * 3600000 + b.minutes * 60000 + b.seconds * 1000 + b.milliseconds

    return timeB - timeA
  })

  const worstResult = sortedResult[0]
  const bestResult = sortedResult[sortedResult.length - 1]
  const mo3 = meanOf3(reverseResults)

  useEffect(() => {
    const mo3 = meanOf3(reverseResults)

    if (results.length > 0) {
      dispatch(setMo3(mo3))
    }
  }, [dispatch, results])

  return (
    <div className={styles.result_flex}>
      <div className={styles.result__best}>
        <table>
          <tbody>
            <tr>
              <th />
              <th>Current</th>
              <th>Best</th>
              <th>Worst</th>
            </tr>

            <tr>
              <th>Time</th>
              <td className={styles.currentResult}>
                {formatTime(lastResults)}
              </td>
              <td className={styles.bestResult}>{formatTime(min)}</td>
              <td className={styles.worstResult}>{formatTime(max)}</td>
            </tr>

            <tr>
              <th>mo3</th>
              <td className={styles.currentResult}>{formatTime(mo3)}</td>
              <td>Female</td>
              <td>Female</td>
            </tr>
            <tr>
              <th>ao5</th>
              <td>19</td>
              <td>Female</td>
              <td>Female</td>
            </tr>
            <tr>
              <th>ao12</th>
              <td>19</td>
              <td>Female</td>
              <td>Female</td>
            </tr>
            <tr>
              <th>ao100</th>
              <td>19</td>
              <td>Female</td>
              <td>Female</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BestResults

//TODO: винести форматування часу в окрему функцію
//FIXME: можна зарефакторити ao5 / ao12 /mo3 і передвати пропси +
