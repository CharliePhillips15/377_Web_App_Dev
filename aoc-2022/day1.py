file = open('day1.txt', 'r')
lines = file.readlines()

totals = []
total = 0
max = 0
for line in lines:
    line = line.strip()

    if line == '':
        totals.append(total)
        total = 0
    else:
        total += int(line)


totals.append(total)

totals.sort(reverse = True)
print('Max calories ' + str((totals[0]) + (totals[1]) + (totals[2])))