// const results = useSelector(selectResults)

export const meanOfAll = () => {}
export const meanOf3 = array => {
  // if (array.length === 0) return 0
  array = array.slice(0, 3)

  // console.log('------')

  let totalMilliseconds = 0

  for (let i = 0; i < array.length; i++) {
    totalMilliseconds += array[i].milliseconds
    totalMilliseconds += array[i].seconds * 1000
    totalMilliseconds += array[i].minutes * 60 * 1000
    totalMilliseconds += array[i].hours * 60 * 60 * 1000
  }

  let resultMilli = totalMilliseconds / 3
  let resultHours = Math.floor(resultMilli / (60 * 60 * 1000))
  resultMilli %= 60 * 60 * 1000

  let resultMinutes = Math.floor(resultMilli / (60 * 1000))
  resultMilli %= 60 * 1000

  let resultSeconds = Math.floor(resultMilli / 1000)
  resultMilli %= 1000

  // console.log(Math.floor(resultMilli))

  return {
    milliseconds: Math.floor(resultMilli),
    seconds: resultSeconds,
    minutes: resultMinutes,
    hours: resultHours,
  }
}
export const ao5 = () => {}
export const ao12 = () => {}
export const ao100 = () => {}
