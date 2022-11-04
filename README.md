# Pizza Parlor
### A JavaScript Application

##### By Aitana Shough

## Technologies Used

* JavaScript
* HTML / CSS
* Bootstrap
* Git

## Setup/Installation Requirements

This application may be played online in your browser via the corresponding [**GitHub pages site**](https://github.com/aitanas/pizza-parlor).

Alternatively, you may clone this project to your local machine by using the following command:
```
git clone https://github.com/aitanas/pizza-parlor.git
```
Directions after cloning are as follows:
1. Open the **pizza-parlor** directory.
2. Open the file named **index.html** with an internet browser (i.e. Google Chrome) of your choice.
3. Enjoy!

## Tests
```
Describe Pizza()

Test: It will return a Pizza object with two properties, 'toppings' and 'size'.
Code: let pizza = new Pizza(["artichoke", "olives"], "large");
Expected Output: pizza { toppings: ["artichoke", "olives"], size: "large" }

Describe Pizza.prototype.getCost()

Test: It will return the price of a small, medium, or large Pizza with no toppings.
Code: pizza.getCost(pizza);
Expected Output: 25.00
```

## Known Bugs

* None at this time

## License

**MIT License**

Copyright (c) 2022 Aitana Shough

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.