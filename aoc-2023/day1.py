file = open('day1.txt', 'r')
lines = file.readlines()

total = 0

for line in lines:
    line = line.strip()
    reverse = line[::-1]
    first_digit = ''
    last_digit = ''

    for element in line:
        if element.isdigit():
            first_digit = element
            break

    for element in reverse:
        if element.isdigit():
            last_digit = element
            break
    total += int(first_digit + last_digit)
    
print(total)    
    

    

        


    


