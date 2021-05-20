from mailer import Mailer
from sys import argv
import os

_password_ = os.environ.get('passwordportfolio')

try :
  mail = Mailer(email='sdanieldeveloper@gmail.com', password=_password_)
  mail.send(receiver='accdemo44@gmail.com', subject=argv[1], message=argv[2])
  print("Email Sent")
except:
    print('EMAIL NOT SENT')