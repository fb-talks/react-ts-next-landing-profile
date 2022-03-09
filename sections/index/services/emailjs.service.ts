import React from 'react';


export async function send(
  yourname: string,
  email: string,
  message: string,
) {
    const data = {
      service_id: 'service_h3aq19u',
      template_id: 'template_i583f5c',
      user_id: 'user_cIFUFcsaVXxVhJEAhG2nv',
      template_params: {
        from_name: yourname,
        email: email,
        message: message,
      }
    };

    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
    if (await res.text() === 'OK') {
      return res;
    } else {
      throw new Error('error sending email')
    }

}
