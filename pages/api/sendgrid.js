import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: req.body.to, // Your email where you'll receive emails
      from: req.body.from, // your website email address here
      subject: `[Contact de site dentaire Ennasr]`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
        
          <title>The HTML5 Herald</title>
          <meta name="description" content="Contact me">
          <meta name="author" content="wbLoki">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
        </head>
        
        <body>
          <table class="top-panel center" width="602" border="0" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
            <td class="title" width="300">Cabinet dentaire Ennasr</td>
            <td class="subject" width="300"><a class="strong" href="#" target="_blank">www.ennasr.com</a></td>
        </tr>
        <tr>
            <td class="border" colspan="2">&nbsp;</td>
        </tr>
        </tbody>
    </table>

    <div class="spacer">&nbsp;</div>

    <table class="main center" width="602" border="0" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
            <td class="column">
                <div class="column-top">&nbsp;</div>
                <table class="content" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr>
                        <td class="padded">
                          <h1>Nouveau message</h1>
                 
                          
                          <table style="width:100%">
                          <tr>
                            <td><strong>Nom et Prenom</strong></td>
                            <td>${req.body.fullname}</td>
                          </tr>
                          <tr>
                            <td><strong>Numero de Telephone<strong></td>
                            <td>${req.body.number}</td>
                          </tr>
                          <tr>
                            <td><strong>Email</strong></td>
                            <td>${req.body.email}</td>
                          </tr>
                          <tr>
                            <td><strong>Service</strong></td>
                            <td>${req.body.service}</td>
                          </tr>
                        </table><br>
                          <p>Message: </p>
                          <p class="caption">${req.body.message}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="column-bottom">&nbsp;</div>
            </td>
        </tr>
        </tbody>
    </table>
        </tr>
      </tbody>
    </table>
        </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    console.log();
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
