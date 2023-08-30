// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

const mailgunDomain = '';
const mailgunApiKey = '';

const sendEmail = (sub, msg) => {
    var recipient = 'web3dev0209@gmail.com';
    var subject = sub;
    var body = msg;

    var url = 'https://api.mailgun.net/v3/' + mailgunDomain + '/messages';
    var apiKey = window.btoa('api:' + mailgunApiKey);

    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      headers: {
        'Authorization': 'Basic ' + apiKey
      },
      data: {
        from: 'sender@example.com',
        to: recipient,
        subject: subject,
        text: body
      },
      success: function(response) {
        console.log('Email sent successfully', response);
        alert('Email sent successfully');
      },
      error: function(xhr, status, error) {
        console.error('Error sending email:', error);
      }
    });
  }
const testFunc = () => {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  let sub = name + "  " + email;
  let msg = message + "\n" + "From: " + name + "\n" + email;
  sendEmail(sub, msg);

  document.querySelector("#name").value = '';
  document.querySelector("#email").value = '';
  document.querySelector("#message").value = '';
}