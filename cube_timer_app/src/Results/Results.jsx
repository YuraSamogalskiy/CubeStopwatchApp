import { useSelector } from 'react-redux'
import styles from './Results.module.scss'
import { selectResults } from '../redux/slices/stopwatchSlice'
import { VscEmptyWindow } from 'react-icons/vsc'

const Results = () => {
  const results = useSelector(selectResults)
  const reversedResults = [...results].reverse()
  // console.log(reversedResults[0].milliseconds)
  return (
    <div className={styles.result_flex}>
      {reversedResults.length === 0 ? (
        <div className={styles.nonResults}>
          <h1>
            <VscEmptyWindow />
          </h1>
        </div>
      ) : (
        <div className={styles.result__scroll}>
          <table>
            <caption>
              <h3>solve {`${results.length}/${results.length}`}</h3>
              Mean {`${results.length}/${results.length}`}
            </caption>
            <tbody>
              {reversedResults.map((result, idx) => (
                <tr key={idx}>
                  <td>{results.length - idx}.</td>
                  <td className={styles.resultTime}>
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
      )}
    </div>
  )
}

export default Results

//TODO рефактор result__best в BestResult.jsx (вже створено) YES
