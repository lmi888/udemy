/*
function sayHi()
{
    console.log("Hello");
    console.log("Goodbye");
}

for(i = 1; i < 5; i++)
    {    
    sayHi();
    }
*/


/*
var number = prompt("type a number");
console.log(number);

function square(number)
{
    console.log("Your number squared is: " + number * number);
}

square(number);


function sayHello(name)
{
    console.log("hello there " + name + "!");
}

==================================

var sayHi = function()
{
    console.log("Hello");
}

sayHi();

============================

function blah(x,y)
    {
        return y - x;
    }

blah(10, 40);

==============================
function test(x)
    {
        return x * 2; //40 * 2 = 80 AFTER ***RETURN*** NOTHING ELSE GETS LOOKED AT/DONE!
        console.log(x); 
        return x/2; 
    }
    test(40);
==============================

function isEven(number)
{
    if(number % 2 === 0)
    {
        console.log("Number is even: " + number);
    }
else
    {
        console.log("Odd number");
    }
    
}
isEven(17);
==============================

*/

// function isEven, which takes a single numeric agrument and returns true if even otherwise false

function isEven(number)
{
    if(number % 2 === 0)
    {
        return number;
    }
    else
        {
            console.log("Odd number");
        }
}
isEven(20);

//factorial() (4! 4x2x3x1) 

function factorial(number)
    {
        for(i = 1; i <= number; i+1)
            {
                return(i * number);
            }
    }
factorial(3);

// kebabToSnake() replace - with _ (underscore)
