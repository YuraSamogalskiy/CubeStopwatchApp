import { useSelector } from 'react-redux'
import { selectResults } from '../redux/slices/stopwatchSlice.js'
import styles from './BestResults.module.scss'

const BestResults = () => {
  const results = useSelector(selectResults)
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
  console.log(sortedResult)
  console.log(worstResult)
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
                {lastResults.milliseconds === undefined
                  ? '-'
                  : lastResults.seconds + ':' + lastResults.milliseconds / 10}
              </td>
              <td className={styles.bestResult}>
                {sortedResult.length === 0 ? (
                  <span>-</span>
                ) : bestResult.minutes > 0 ? (
                  `${bestResult.minutes}:0${bestResult.seconds}.${
                    bestResult.milliseconds / 10
                  }`
                ) : (
                  `${bestResult.seconds}.${bestResult.milliseconds / 10}`
                )}
              </td>
              <td className={styles.worstResult}>
                {' '}
                {sortedResult.length === 0 ? (
                  <span>-</span>
                ) : worstResult.minutes > 0 ? (
                  `${worstResult.minutes}:0${worstResult.seconds}.${
                    worstResult.milliseconds / 10
                  }`
                ) : (
                  `${worstResult.seconds}.${worstResult.milliseconds / 10}`
                )}
              </td>
            </tr>

            <tr>
              <th>mo3</th>
              <td>19</td>
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
