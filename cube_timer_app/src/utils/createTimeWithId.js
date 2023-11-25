import { v4 as uuidv4 } from 'uuid'

const createTimeWithId = time => {
  return {
    ...time,
    isFavorite: false,
    isDNF: false,
    isPlusTwo: false,
    id: uuidv4(),
  }
}

export default createTimeWithId
