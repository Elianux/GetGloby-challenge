const parseDuration = require('../utils/utils.ts')

test('60 min must return 1 hour', () => {
  expect(parseDuration('202 min')).toBe('3h 22m')
})
