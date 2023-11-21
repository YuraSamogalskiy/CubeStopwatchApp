import { useSelector } from 'react-redux'
import styles from './Results.module.scss'
import { selectResults } from '../redux/slices/stopwatchSlice'

const Results = () => {
  const results = useSelector(selectResults)
  console.log(results)

  return (
    <div className={styles.result_flex}>
      <div className={styles.result__stats}>
        <h1>statistic</h1>
      </div>
      <div className={styles.result__scroll}>
        <table>
          <caption>solve {`${results.length}/${results.length}`}</caption>
          <tbody>
            <tr>
              <th>id</th>
              <th>time</th>
              <th>ao5</th>
              <th>ao12</th>
            </tr>
            {results.map((result, idx) => (
              <tr key={idx}>
                <td>{++idx}</td>
                <td>
                  {result.minutes > 0
                    ? `${result.minutes}:${result.seconds}.${
                        result.milliseconds / 10
                      }`
                    : `${result.seconds}.${result.milliseconds / 10}`}{' '}
                </td>
                <td>Male</td>
                <td>Male</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
              <td>19</td>
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

export default Results
