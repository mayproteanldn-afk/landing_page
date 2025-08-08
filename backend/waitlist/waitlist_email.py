from django.core.mail import EmailMessage
from django.conf import settings



def send_waitlist_email(email_address):
    subject = 'Welcome to Superfanbase! You’ve Successfully Joined the Waitlist!'
    
    html_message = '''
    <html>
    <body>
        <p>Hi!</p>
        <p>Thank you for joining the Superfanbase waitlist. We're excited to have you on board and will keep you updated with the latest news and opportunities.</p>
        <p>If you have any questions, please contact us at <a href="mailto:hello@superfanbase.com">hello@superfanbase.com</a>.</p>
        <p>Best,<br>Team Superfanbase</p>
    </body>
    </html>
    '''
    
    from_email = settings.EMAIL_HOST_USER

    try:
        email = EmailMessage(subject, html_message, from_email, [email_address])
        email.content_subtype = "html"  # Para que se envíe como HTML
        email.send()
        return True
    except Exception as e:
        print(f'Error sending email: {e}')
        return False
