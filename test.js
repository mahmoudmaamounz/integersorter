const getLowestThreeIntegers = require('./src/app')
describe('Testing getting lowest three integers from remote text file', () => {
  it('Should return lowest three integers', async () => {
    const res = await getLowestThreeIntegers()
    expect(res).toEqual([0, 2, 5])
  })
})
