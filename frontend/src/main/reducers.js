import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
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
  })
})

export default rootReducer