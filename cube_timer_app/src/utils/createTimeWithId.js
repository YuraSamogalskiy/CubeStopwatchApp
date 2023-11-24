import { v4 as uuidv4 } from 'uuid'

const createTimeWithId = time => {
  return {
    ...time,
    isFavorite: false,
    id: uuidv4(),
  }
}

export default createTimeWithId
