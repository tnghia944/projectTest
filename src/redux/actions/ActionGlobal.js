import ActionsType from '../../constants/ActionsType'

export function requesting () {
  return {
    type: ActionsType.REQUESTING
  }
}

export function finishedRequest () {
  return {
    type: ActionsType.FINISHED_REQUEST
  }
}

