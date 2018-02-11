<<<<<<< HEAD
exports.sendNodeEmail = function(emailBody)
{
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rsingh.nitrr@gmail.com',
    pass: 'Shred@07'
  }
});

var mailOptions = {
  from: 'rsingh.nitrr@gmail.com',
  to:   'rpsingh39@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: emailBody
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('Error Sending in Email: '+error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
=======
exports.sendNodeEmail = function(emailBody)
{
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rsingh.nitrr@gmail.com',
    pass: 'Shred@07'
  }
});

var mailOptions = {
  from: 'rsingh.nitrr@gmail.com',
  to:   'rpsingh39@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: emailBody
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('Error Sending in Email: '+error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
>>>>>>> 4e419fe04f837c18195bbb89c14d7e25cff06b3c
