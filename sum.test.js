const sum = require('./sum')

test('properly add two numbers', () => {
   expect(sum(1 ,2)).toBe(3)
   expect(sum(0.9, 4)).not.toBe(5)
})