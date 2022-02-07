const INITIAL_STATE = {
  description: 'Ler livro',
  list: [{
    _id: 1,
    description: 'aaaaaaaaaaaaaaaaaaaaaaa',
    done: true
  }, {
    _id: 2,
    description: 'bbbbbbbbbbbbbbbbbbbb',
    done: false
  },
  {
    _id: 3,
    description: 'ccccccccccccccccc',
    done: true
  }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGE":
      return { ...state, description: action.payload }
    case "TODO_SEARCHED":
      return { ...state, list: action.payload.data }
    default:
      return state
  }
}