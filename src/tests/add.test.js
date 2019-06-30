const add = (a, b) => a + b

test('should add two number', () => {
  const result = add(4, 5)
  expect(result).toBe(9)
})
