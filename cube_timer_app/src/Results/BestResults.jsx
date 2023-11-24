import { useSelector } from 'react-redux'
import { selectResults } from '../redux/slices/stopwatchSlice.js'
import styles from './BestResults.module.scss'

const BestResults = () => {
  const results = useSelector(selectResults)
  const lastResults =
    results[results.length - 1] === undefined
      ? '-'
      : results[results.length - 1]

  return (
    <div className={styles.result_flex}>
      <div className={styles.result__best}>
        <table>
          <tbody>
            <tr>
              <th />
              <th>Current</th>
              <th>Best</th>
            </tr>

            <tr>
              <th>Time</th>
              <td>
                {lastResults.milliseconds === undefined
                  ? '-'
                  : lastResults.seconds + ':' + lastResults.milliseconds / 10}
              </td>
              <td>Male</td>
            </tr>
            <tr>
              <th>mo3</th>
              <td>19</td>
              <td>Female</td>
            </tr>
            <tr>
              <th>ao5</th>
              <td>19</td>
              <td>Female</td>
            </tr>
            <tr>
              <th>ao12</th>
              <td>19</td>
              <td>Female</td>
            </tr>
            <tr>
              <th>ao100</th>
              <td>19</td>
              <td>Female</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BestResults
