from mailer import Mailer
from sys import argv
from passwords import *

user = {
  'email' : argv[1][0] ,
  'message' : argv[2][0] ,
  'name' : argv[3][0]
}

msg = f"{user.name}\n{user.message}"

try :
  mail = Mailer(email=DEV_EMAIL, password = PASSWORD)
  mail.send(receiver=RECEIVER_EMAIL, subject = user.email, message=msg)
  print("Email Sent")
except:
    print('EMAIL NOT SENT')