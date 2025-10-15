
const httpClient = require('http')
const t = new Date
const postData = JSON.stringify ({timestamp: t.getUTCHours() + ":" + t.getUTCMinutes() + ":" + t.getUTCSeconds()})

console.log(postData)
const options = {
  //hostname: 'mockbin.com',
  //port: 80,
  hostname: '40.76.26.60',
  //hostname: 'localhost',
  port: 3000,
  path: '/timestamp',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
}
req = httpClient.request(options, (response) => {
  response.on ('data', (chunk) => {
    console.log(`BODY: ${chunk}`)
  })
  response.on ('end', () => {
  console.log(`No more data`)
  })
}).on ('error', (error) => {
    console.error('Got error: ${error.message}')
})

req.write(postData)
req.end()
