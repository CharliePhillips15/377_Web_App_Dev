file = open('day3.txt', 'r')
lines = file.readlines()

total= 0
for line in lines:
    line=line.strip()

    length=len(line)

    compartment_1=line[:length//2]
    compartment_2=line[length//2:]

    for letter in compartment_1:
        if letter in compartment_2:
            print("Found Duplicate: " + letter)
            value = ord(letter) - 96
            if(value <0):
                value += 58
            total +=value
            break

print(total)
    

    