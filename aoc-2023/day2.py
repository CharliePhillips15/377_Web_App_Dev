file = open('day2.txt', 'r')
lines = file.readlines()

game = 1
total = 0
for line in lines:

    valid = True

    for round in line.split(':')[1].split(';'):
        for color_count in [x.strip() for x in round.split(',')]:
            count, color = [entry.strip() for entry in color_count.split(' ')]

            if  (color == 'red' and int(count) > 12) or \
                (color == 'green' and int(count) > 13) or \
                (color == 'blue' and int(count) > 14):
                    valid = False

    if valid:
        print('valid game: ' + str(game))
        total += game

    game += 1

print(total)



        

            