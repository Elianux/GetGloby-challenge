const parsePoster = require('../utils/utils.ts')

test('N/A must return path to image "no poster"', () => {
  expect(parsePoster('N/A')).toBe('/../public/no-poster.png')
})
