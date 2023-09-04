// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

const ddd = '9234998023495ab6b7d6c3d2452bbee4799574e9cdd39wq347we9r';
const aaa = '9234998023495e2e494d2d2204fc0a7aa48cc3f3a29c9cdd39wq347we9r';

const sendEmail = (sub, msg) => {
  var recipient = 'alexstepan0209@gmail.com';
  var subject = sub;
  var body = msg;

  var url = 'https://api.mailgun.net/v3/sandbox' + ddd.substring(12, 44) + '.mailgun.org/messages';
  var apiKey = window.btoa('api:' + aaa.substring(12, 44) + '-451410ff-5d901358');

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