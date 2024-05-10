file = open('day15.txt', 'r')
lines = file.readlines()
total = 0

for line in lines:
    curvalue = 0

    part = line.split(',')

    for element in part:
        curvalue+= curvalue
        for letter in element:
            curvalue = curvalue + ord(letter)
            curvalue = curvalue * 17
            curvalue = curvalue%256
            curvalue+= curvalue
        total += curvalue

print(' ')
print("total = " + str(total))

