import { addExpence, editExpence, removeExpence } from './../expences.js'

test('should setup remove expence action object', () => {
  const action = removeExpence({ id: '132123' })
  expect(action).toEqual({ id: '132123', type: 'REMOVE_EXPENCE' })
})

test('should setup add expence action object', () => {
  const action = addExpence({ id: '132123' })
  expect(action).toEqual({
    expence: {
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
    type: 'ADD_EXPENCE',
  })
})

test('should...', () => {
  expect(1).toBe(1)
})
