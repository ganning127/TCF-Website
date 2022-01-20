import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    console.log(process.env.CONTACT_EMAIL)
    const fromEmail = '"TCF Contact" <contact@thecodingfoundation.com>';
    const toEmail = 'ganningxu@gmail.com'
    const request = JSON.parse(req.body);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.CONTACT_EMAIL,
            pass: process.env.CONTACT_EMAIL_PASS
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: fromEmail, // sender address
        to: toEmail, // list of receivers
        subject: request["subject"], // Subject line
        text: request["message"], // plain text body
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

