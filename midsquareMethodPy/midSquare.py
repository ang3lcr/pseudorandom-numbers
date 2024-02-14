seed = int(input("Enter a number (seed): "))
iterations = int(input("How much numbers you want to generate?: "))

randomNumbers = []

for i in range(iterations):
    sqrSeed = seed * seed
    strSeed = str(sqrSeed)
    while len(strSeed) < len(str(seed) * 2):
        strSeed = '0' + strSeed
    midIndex = len(strSeed) // 2
    seed = int(strSeed[midIndex-2:midIndex+2])
    randomNumbers.append(seed / 10000)


print(randomNumbers)



