import { useSelector } from 'react-redux'
import styles from './Results.module.scss'
import { selectResults } from '../redux/slices/stopwatchSlice'

const Results = () => {
  const results = useSelector(selectResults)
  const reversedResults = [...results].reverse()
  console.log(reversedResults[0].milliseconds)
  return (
    <div className={styles.result_flex}>
      <div className={styles.result__scroll}>
        <table>
          <caption>
            <h3>solve {`${results.length}/${results.length}`}</h3>
            Mean {`${results.length}/${results.length}`}
          </caption>
          <tbody>
            <tr>
              <th>id</th>
              <th>time</th>
              <th>ao5</th>
              <th>ao12</th>
            </tr>
            {reversedResults.map((result, idx) => (
              <tr key={idx}>
                <td>{results.length - idx}</td>
                <td>
                  {result.minutes > 0
                    ? `${result.minutes}:0${result.seconds}.${
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
    </div>
  )
}

export default Results

//TODO рефактор result__best в BestResult.jsx (вже створено) YES
