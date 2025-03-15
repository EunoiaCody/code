def akm(m,n):
    if m == 0:
        return n + 1
    elif (m > 0 and n == 0):
        return akm(m - 1, 1)
    elif (m > 0 and n > 0):
        return akm(m - 1, akm(m, n - 1))

m = int(input("Enter m: "))
n = int(input("Enter n: "))
print("Ackermann Function: ", akm(m, n))