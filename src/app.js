
const https = require('https')
const start = function () {
  return new Promise((resolve, reject) => {
    https.get('https://www.iwillfearnoevil.com/screen/string.txt', response => {
      const data = []
      response.on('data', function (chunk) {
        data.push(chunk)
      })
      response.on('end', function () {
        try {
          const arr = Array.from(data.toString().split('\n'))
          resolve(getLowestThreeIntegers(arr))
        } catch (err) {
          reject(err)
        }
      })
    })
  })
}
const getLowestThreeIntegers = function (arr) {
  // If file contained hex uncomment code below
  // const intRegx = new RegExp('^[0-9]+$')
  arr = arr.map((item) => parseInt(item))
  arr = arr.filter((item, index) => {
    // If file contained hex uncomment code below
    // return intRegx.test(item) && arr.indexOf(item) === index
    return arr.indexOf(item) === index
  })
  return arr.sort((a, b) => a - b).slice(0, 3)
}

module.exports = start
