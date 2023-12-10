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
              <div className={styles.caption__flex}>
                <span>solve {`${results.length}/${results.length}`}</span>
                <span>Mean {`${results.length}/${results.length}`}</span>
              </div>
            </caption>
            <tbody>
              {reversedResults.map((result, idx) => (
                <tr key={idx}>
                  <td>{results.length - idx}.</td>
                  {result.isDNF ? (
                    <td className={styles.resultTime}>DNF</td>
                  ) : (
                    <>
                      {!result.isPlusTwo ? (
                        <td className={styles.resultTime}>
                          {result.minutes > 0
                            ? `${result.minutes}:${result.seconds
                                .toString()
                                .padStart(2, '0')}.${result.milliseconds / 10}`
                            : `${result.seconds}.${result.milliseconds / 10}`}
                        </td>
                      ) : (
                        <td className={styles.resultTime}>
                          {result.minutes > 0
                            ? `${result.minutes}:0${result.seconds + 2}.${
                                result.milliseconds / 10
                              }+`
                            : `${result.seconds + 2}.${
                                result.milliseconds / 10
                              }+`}
                        </td>
                      )}
                    </>
                  )}

                  <td onClick={() => handleDnfTime(result.id)}>
                    <span
                      className={
                        result.isDNF ? styles.dnfFalse : styles.dnfTrue
                      }
                    >
                      DNF
                    </span>
                  </td>
                  <td onClick={() => handlePlusTwo(result.id)}>
                    <span
                      className={
                        result.isPlusTwo
                          ? styles.plusTwoFalse
                          : styles.plusTwoTrue
                      }
                    >
                      +2
                    </span>
                  </td>
                  <td>
                    <span
                      className={styles.favoriteIcon}
                      onClick={() => handleFavoriteTime(result.id)}
                    >
                      {result.isFavorite ? (
                        <FaStar style={{ color: 'yellow' }} />
                      ) : (
                        <FaRegStar />
                      )}
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
