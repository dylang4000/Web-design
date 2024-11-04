from turtle import *

width(5)
s=Screen()
s.setup(1020,1050)
size=int(numinput('Enter an odd number',"Enter an odd number"))
#hideturtle()
boxW=round(1020/size)
boxH=round(1000/size)
positionT=[]
rowcount=0
boxcount=0
rowsCount=0
columnCount=0
input=[]
keys=["1","2","3","4","5","6","7","8","9","r","o","y","g","b","i","v"]

while size % 2 ==0:
    size=numinput('Enter an ODD number',"Enter an ODD number")


def grid():
    global columnCount
    global rowsCount
    penup()
    goto(-510,500)
    pendown()
    rowsCount+=1
    forward(1020)
    for i in range(int(size)):
        
        penup()
        goto(-510,500-(boxW*rowsCount))
        pendown()
        forward(1020)
        rowsCount+=1
    
    right(90)
    penup()
    goto(-510,500)
    pendown()
    columnCount+=1
    forward(1020)
    for i in range(int(size)):
        
        penup()
        goto(-510+((1020/size)*columnCount),500)
        pendown()
        forward(1020)
        columnCount+=1
speed(0) 


width(4)
penup()
grid()
penup()
goto(-510,534)
seth(0)
pendown()
begin_fill()
color('dimgray')
forward(1021)
right(90)
forward(30)
right(90)
forward(1021)
right(90)
forward(30)
end_fill()
penup()
backward(30)
right(90)
forward(10)
hideturtle()
color('white')
write('>>',font=('Arial',17, "normal"))
forward(25)
def r():
    global input
    write('r',font=('Arial',17, "normal"))
    forward(20)
    input.append('r')
def o():
    global input
    write('o',font=('Arial',17, "normal"))
    forward(20)
    input.append('o')
def y():
    global input
    write('y',font=('Arial',17, "normal"))
    forward(20)
    input.append('y')
def g():
    global input
    write('g',font=('Arial',17, "normal"))
    forward(20)
    input.append('g')
def b():
    global input
    write('b',font=('Arial',17, "normal"))
    forward(20)
    input.append('b')
def i():
    global input
    write('i',font=('Arial',17, "normal"))
    forward(20)
    input.append('i')
def v():
    global input
    write('v',font=('Arial',17, "normal"))
    forward(20)
    input.append('v')
def one():
    global input
    write('1',font=('Arial',17, "normal"))
    forward(20)
    input.append('1')
def two():
    global input
    write('2',font=('Arial',17, "normal"))
    forward(20)
    input.append('2')
def three():
    global input
    write('3',font=('Arial',17, "normal"))
    forward(20)
    input.append('3')
def four():
    global input
    write('5',font=('Arial',17, "normal"))
    forward(20)
    input.append('5')
def five():
    global input
    write('5',font=('Arial',17, "normal"))
    forward(20)
    input.append('5')
def six():
    global input
    write('6',font=('Arial',17, "normal"))
    forward(20)
    input.append('6')
def seven():
    global input
    write('7',font=('Arial',17, "normal"))
    forward(20)
    input.append('7')
def eight():
    global input
    write('8',font=('Arial',17, "normal"))
    forward(20)
    input.append('8')
def nine():
    global input
    write('9',font=('Arial',17, "normal"))
    forward(20)
    input.append('9')
def zero():
    global input
    write('0',font=('Arial',17, "normal"))
    forward(20)
    input.append('0')
def enter():
    global input
    goto(-510,534)
    seth(0)
    pendown()
    begin_fill()
    color('dimgray')
    forward(1021)
    right(90)
    forward(30)
    right(90)
    forward(1021)
    right(90)
    forward(30)
    end_fill()
    penup()
    penup()
    backward(30)
    right(90)
    forward(10)
    hideturtle()
    color('white')
    write('>>',font=('Arial',17, "normal"))
    forward(25)
    print(str(input))
    input=[]
    





onkey(enter,'Return ')
onkey(r,"r")
onkey(o,"o")
onkey(y,"y")
onkey(g,"g")
onkey(b,"b")
onkey(i,"i")
onkey(v,"v")
onkey(one,"1")
onkey(two,"2")
onkey(three,"3")
onkey(four,"4")
onkey(five,"5")
onkey(six,"6")
onkey(seven,"7")
onkey(eight,"8")
onkey(nine,"9")
onkey(zero,"0")

listen()
mainloop()
