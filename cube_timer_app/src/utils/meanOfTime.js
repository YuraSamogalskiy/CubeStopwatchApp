// const results = useSelector(selectResults)

export const meanOfAll = () => {}
export const meanOf3 = array => {
  if (array.length === 0) return 0
  array = array.slice(0, 3)
  let milliseconds = 0
  let seconds = 0
  let minutes = 0
  let hours = 0
  for (let i = 0; i < array.length; i++) {
    milliseconds += array[i].milliseconds
    seconds += array[i].seconds
    minutes += array[i].minutes
    hours += array[i].hours
  }
  return {
    milliseconds: milliseconds / 3,
    seconds: seconds / 3,
    minutes: minutes / 3,
    hours: hours / 3,
  }
}
export const ao5 = () => {}
export const ao12 = () => {}
export const ao100 = () => {}
