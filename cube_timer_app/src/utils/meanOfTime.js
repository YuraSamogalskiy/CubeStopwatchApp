// const results = useSelector(selectResults)

export const meanOfAll = () => {}
export const meanOf3 = array => {
  if (array.length < 3) {
    return {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    }
  }

  const slicedArray = array.slice(0, 3)

  const totalMilliseconds = slicedArray.reduce((acc, item) => {
    return (
      acc +
      item.hours * 3600000 +
      item.minutes * 60000 +
      item.seconds * 1000 +
      item.milliseconds
    )
  }, 0)

  const averageMilliseconds = totalMilliseconds / 3

  return {
    milliseconds: averageMilliseconds % 1000,
    seconds: Math.floor(averageMilliseconds / 1000) % 60,
    minutes: Math.floor(averageMilliseconds / (60 * 1000)) % 60,
    hours: Math.floor(averageMilliseconds / (60 * 60 * 1000)),
  }
}
export const ao5 = () => {}
export const ao12 = () => {}
export const ao100 = () => {}
