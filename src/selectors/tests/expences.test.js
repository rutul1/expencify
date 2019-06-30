import getVisibleExpence from '../expences'
const expense = [
  { id: 111, description: 'test1', note: '', amount: 111, createdAt: 0 },
  { id: 222, description: 'test123', note: 'asd', amount: 222, createdAt: 2 },
]

test('should be get visible expense', () => {
  const filter = {
    text: '123',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  }
  const result = getVisibleExpence(expense, filter)
  expect(result).toEqual([expense[1]])
})
