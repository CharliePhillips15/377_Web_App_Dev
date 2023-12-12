file = open('day2.txt', 'r')
lines = file.readlines()

total = 0
for line in lines:

    highest_blue = 0
    highest_red= 0
    highest_green = 0

    for round in line.split(':')[1].split(';'):
         
        for color_count in [x.strip() for x in round.split(',')]:
             
            count, color = [entry.strip() for entry in color_count.split(' ')]
            
            if (color =="red" and int(count) > int(highest_red)):
                highest_red = count
            if(color == "blue" and int(count) > int(highest_blue)):
                highest_blue = count
            if(color == "green" and int(count) > int(highest_green)):
                highest_green = count

            game = int(highest_green) * int(highest_blue) * int(highest_red)

    total += game
print(total)      