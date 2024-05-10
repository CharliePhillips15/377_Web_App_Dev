import random

word_lookup = {}

file = open('diceware-wordlist.txt', 'r')
lines = file.readlines()

for line in lines:
    if line[0].isdigit():
        code, word = line.split()
        word_lookup[code] = word

password = ''
num_words = int(input('Enter number of words: '))
for j in range(num_words):
    code = ''

    for i in range(5):
        digit = random.randint(1, 6)
        code += str(digit)

    # print(word_lookup[code])
    password += word_lookup[code] + ' '


print(password)







