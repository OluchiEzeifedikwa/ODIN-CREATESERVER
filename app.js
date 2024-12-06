const {createServer} = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'text/plain');
  res.end(JSON.stringify({
  data: 'Hello World',
}));
});
//   res.end =('Hello World');
// });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}`)

})


// To POST Request
const https = require('https');

const data = JSON.stringify({
  userId: 20,
  todos:'buy the milk',
})

const options = {
  hostname: 'fakestoreapi.com',
  // id: 2995104339,
  port: 443,
  path: '/carts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Length': 'data.length',
  },

}

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`)
  console.log(`Status Message: ${res.statusMessage}`)

  res.on('data', d => {
    process.stdout.write(d);
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  
  });
});

req.on('error', error => {
  console.error('Request Error:', error);
});

req.write(data);
req.end();

// Asynchronous code
const fs = require('fs');

fs.writeFile('file.txt', 'Hello World', err => {
  if (err) {
    console.error(err);
  } else{
    console.log('File Created Successfully');
  }

  fs.appendFile('file.txt', 'Unity', err => {
    if (err) {
      console.error(err); 
    } else {
      console.log('file appended succesfully');
    }

    fs.readFile('file.txt','utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    })



  })

})


const fs1 = require('fs').promises;
async function writeFile() {
  try {
    await fs1.writeFile('book.txt', 'HI people');
    console.log('File written successfully');
  } catch (err) {
    console.error(err);
  }
}
writeFile();

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

function helloListener(name) {
  console.log(name)
}

eventEmitter.on('Hello', (helloListener) => {
   console.log(`Hello, ${helloListener}`)
})
eventEmitter.emit('Hello', 'John');

eventEmitter.off('Hello', (helloListener));
eventEmitter.emit('Hello', 'Jane');




// const myURL = new URL('/foo', 'https://example.org/');
// https://example.org/foo

console.log(URL === require('node:url').URL); // Prints 'true'.
// const myURL = new URL('/foo', 'https://example.org/');
// https://example.org/foo
const myURL = new URL({ toString: () => 'https://example.org/' });
// https://example.org/

  



// const fs = require('node:fs/promises');

// async function example() {
//   try {
//     const data = await fs.readFile('/Users/OluchiEze/repos/ODIN-CREATESERVER/styles.css.txt', { encoding: 'utf8' });
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// example();
