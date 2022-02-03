import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const fromEmail = '"TCF Contact" <contact@thecodingfoundation.com>';

    const request = JSON.parse(req.body);
    const toEmail = request['email']

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.CONTACT_EMAIL,
            pass: process.env.CONTACT_EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: fromEmail, // sender address
        to: "thecodingfoundation@gmail.com", // list of receivers
        subject: request["subject"], // Subject line
        text: `New Inquiry from ${toEmail}: ${request["message"]}`, // plain text body
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: fromEmail, // sender address
        to: toEmail, // list of receivers
        subject: "TCF Message Received", // Subject line
        text: "Thank you for contacting The Coding Foundation. We have received your request and will get back to you as soon as possible!", // plain text body
    });


    if (info.accepted.length > 0) {
        res.status(200).json({
            accepted: true
        });
    }
    else {
        res.status(200).json({
            accepted: false
        });
    }

}

