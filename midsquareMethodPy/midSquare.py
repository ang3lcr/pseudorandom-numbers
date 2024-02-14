currentNumber = int(input("Enter a number: "))
iterations = int(input("How much numbers you want to generate? "))

randoms = []



for i in range(iterations):
    sqrNumber = currentNumber * currentNumber
    cnLength = len(str())
    num2string = str(sqrNumber)
    middleNumber = int(num2string[len(num2string)//2 - 2: len(num2string)//2 + 2])
    randoms.append(middleNumber)
    currentNumber = middleNumber

print("[+] Generated numbers: ")
print(randoms)