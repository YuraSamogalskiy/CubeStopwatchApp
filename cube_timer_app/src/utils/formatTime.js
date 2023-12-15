const formatTime = timeObject => {
  if (!timeObject || typeof timeObject !== 'object') {
    return timeObject === '-' ? '-' : timeObject.toString().padEnd(4, '0')
  }

  const { hours, minutes, seconds, milliseconds } = timeObject

  if (hours > 0) {
    return `${hours}:${minutes}:${seconds.toString().padStart(2, '0')}.${(
      milliseconds / 10
    )
      .toString()
      .padStart(2, '0')}`
  } else if (minutes > 0) {
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${(
      milliseconds / 10
    )
      .toString()
      .padStart(2, '0')}`
  } else {
    return `${seconds}.${(milliseconds / 10)
      .toString()
      .slice(0, 2)
      .padStart(2, '0')}`
  }
}

export default formatTime
