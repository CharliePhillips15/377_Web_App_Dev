import random

SPECIALS = '!@#$%^&*(_)+`-={|}?/''"";:,.'
password = []

length = int(input('Enter password length: '))

include_digit = input('Inlcude digit [y/n]: ')
if include_digit == 'Y':
    password.append(chr(ord('A') + random.randint(0,25)))
    length -= 1

include_upper = input('Inlcude uppercase letter [y/n]: ')
if include_upper == 'Y':
    password.append(chr(ord('A') + random.randint(0,25)))
    length -= 1

include_lower = input('Inlcude lowercase letter [y/n]: ')
if include_lower == 'Y':
    password.append(chr(ord('a') + random.randint(0,25)))
    length -= 1

include_special = input('Inlcude special character [y/n]: ')
if include_special == 'Y':
    password.append(SPECIALS[random.randint(0, len(SPECIALS) - 1)])
    length -= 1



for i in range(length):
    character = random.randint(0,3)

    if character == 0:
        special = SPECIALS[random.randint(0, len(SPECIALS) - 1)]
        password.append(str(special))

    elif character == 1:
        letter = chr(ord('a') + random.randint(0,25))
        password.append(str(letter))
    
    elif character == 2:
        Cletter = chr(ord('A') + random.randint(0,25))
        password.append(str(Cletter))
    
    else:
        digit = random.randint(1,9)
        password.append(str(digit))


random.shuffle(password)
print(''.join(password))





    


