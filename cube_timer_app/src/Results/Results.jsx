import { useDispatch, useSelector } from 'react-redux'
import styles from './Results.module.scss'
import {
  deleteResult,
  dnfResult,
  favoriteResult,
  plusTwoResult,
  selectResults,
} from '../redux/slices/stopwatchSlice'
import { VscEmptyWindow } from 'react-icons/vsc'
import { MdDeleteOutline } from 'react-icons/md'
import { FaRegStar } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'

const Results = () => {
  const results = useSelector(selectResults)
  const reversedResults = [...results].reverse()
  const dispatch = useDispatch()
  // console.log(reversedResults[0].milliseconds)
  console.log(results)

  const handleDeleteTime = TimeId => {
    dispatch(deleteResult(TimeId))
  }
  const handleFavoriteTime = TimeId => {
    dispatch(favoriteResult(TimeId))
  }
  const handleDnfTime = TimeId => {
    dispatch(dnfResult(TimeId))
  }
  const handlePlusTwo = TimeId => {
    dispatch(plusTwoResult(TimeId))
  }

  const timeJSX = 
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
                  {!result.isDNF || !result.isPlusTwo ? (
                    <td className={styles.resultTime}>
                      {result.minutes > 0
                        ? `${result.minutes}:0${result.seconds}.${
                            result.milliseconds / 10
                          }`
                        : `${result.seconds}.${result.milliseconds / 10}`}{' '}
                    </td>
                  ) : (
                    <td className={styles.resultTime}>DNF</td>
                  )}
                  <td onClick={() => handleDnfTime(result.id)}>DNF</td>
                  <td onClick={() => handlePlusTwo(result.id)}>+2</td>
                  <td>
                    <span onClick={() => handleFavoriteTime(result.id)}>
                      {result.isFavorite ? <FaStar /> : <FaRegStar />}
                    </span>
                  </td>
                  <td>
                    <h3>
                      <MdDeleteOutline
                        className={styles.deleteIcon}
                        onClick={() => handleDeleteTime(result.id)}
                      />
                    </h3>
                  </td>
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
