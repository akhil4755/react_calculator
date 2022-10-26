# input
a = input("Enter 1st number: ")
b = input("Enter 2nd number: ")

operation = input("Enter operation: +, -, *, /")
if(operation == '/'):
  if(b == 0):
    print("Invalid")
    quit()

if(operation!='+' or operation!='-' or operation!='*' or operation!='/'):
  print("Invlaid input")
  quit()

print("Output")
