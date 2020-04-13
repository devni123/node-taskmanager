const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
    to: 'test@example.com',
    from: 'devniheraliyawala314@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'devniheraliyawala314@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'devniheraliyawala314@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Good bye ${name}. Is there anything we could have done to kept you onboard `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}