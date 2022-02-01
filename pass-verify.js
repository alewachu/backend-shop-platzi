const bcrypt = require('bcrypt');

async function verifyPAssword() {
  const myPassword = 'admin  123 .202';

  const myHash = '$2b$10$WXmiIwqfRChQ7buAdUC7SeQco.8zSszgRBkhmnPHar41qQ9FCKfay';
  const isMatch = await bcrypt.compare(myPassword, myHash);
  console.log(isMatch);
}

verifyPAssword();
