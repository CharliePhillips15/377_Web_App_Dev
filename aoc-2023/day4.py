file = open('day4.txt', 'r')
lines = file.readlines()
total = 0

for line in lines:
    round = line.split(':')[1]
    for game in round:
        winning_numbers, possible_numbers = [entry.strip() for entry in round.split('|')]
        winning_numbers = winning_numbers.split()
        possible_numbers = possible_numbers.split()
        points = 0

        for number in winning_numbers:

            if (number in possible_numbers):
                if(points == 0):
                    points = 1
                else:
                    points *= 2

    total += points
print(total)        