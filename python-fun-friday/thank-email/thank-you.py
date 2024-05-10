import smtplib
from email.message import EmailMessage

file = open('gifts.csv', 'r')
lines = file.readlines()

server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
print('Autnenticating...')
server.login('cwp.wadleigh@gmail.com', 'svzy iini expd cixu')


for line in lines:
    line = line.strip() 
    name, gift, email = line.split(',')

    subject = 'Thank you for the gift'
    message = ('Dear ' + name + ' Thank you for the' + gift + '. It was very thoughtful of you. Happy New Year! From, Charlie')

    msg = EmailMessage()
    msg.set_content(message)
    msg['Subject'] = subject
    msg['From'] = 'cwp.wadleigh@gmail.com'
    msg['To'] = email

    print('Sending email to ' + email + '...')
    server.send_message(msg)
    print('Message sent!')