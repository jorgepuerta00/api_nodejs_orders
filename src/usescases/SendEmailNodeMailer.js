'use strict';

const nodemailer = require("nodemailer");

class SendEmail {
    constructor() {
    }

    setEmailData(emailData) {
        this.emailData = emailData;
    }

    async execute() {

        // async..await is not allowed in global scope, must use a wrapper

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true, // true for 465, false for other ports
            auth: {
                user: "pidenosapp@gmail.com", // generated ethereal user
                pass: "Temporal01$", // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Pidenos 🛒🛒🛒" <pidenosl@gmail.com>', // sender address
            to: this.emailData.info.to, // list of receivers
            subject: this.emailData.info.subject, // Subject line
            text: this.emailData.info.text, // plain text body
            html: this.emailData.info.htmlBody, // html body
        });

        //console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        return info.messageId;

    }
}

module.exports = SendEmail;





