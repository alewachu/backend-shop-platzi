
const jwt = require('jsonwebtoken');
const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0MzU3MjgyNX0.QFkEY9o1Ak3k-nxj539KjazftGodVvRgU45o8pz0YLI'

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);