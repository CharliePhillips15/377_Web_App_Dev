sum = 0
a = 1
b = 2
totalsum = 1

while sum < 4000000:
    sum =  a + b
    if (sum % 2 == 0):
        totalsum += sum

    a = b
    b = sum
print(totalsum)
