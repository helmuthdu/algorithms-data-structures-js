# JavaScript Questions

* Explain event delegation.
* Explain how `this` works in JavaScript.
  * Can you give an example of one of the ways that working with `this` has changed in ES6?
* Explain how prototypal inheritance works.
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?
* What language constructions do you use for iterating over object properties and array items?
* Can you describe the main difference between the `Array.forEach()` loop and `Array.map()` methods and why you would pick one versus the other?
* What's a typical use case for anonymous functions?
* What's the difference between host objects and native objects?
* Explain the difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
* Can you explain what `Function.call` and `Function.apply` do? What's the notable difference between the two?
* Explain `Function.prototype.bind`.
* What's the difference between feature detection, feature inference, and using the UA string?
* Explain "hoisting".
* Describe event bubbling.
* Describe event capturing.
* What's the difference between an "attribute" and a "property"?
* What are the pros and cons of extending built-in JavaScript objects?
* What is the difference between `==` and `===`?
* Explain the same-origin policy with regards to JavaScript.
* Why is it called a Ternary operator, what does the word "Ternary" indicate?
* What is strict mode? What are some of the advantages/disadvantages of using it?
* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
* What tools and techniques do you use debugging JavaScript code?
* Explain the difference between mutable and immutable objects.
  * What is an example of an immutable object in JavaScript?
  * What are the pros and cons of immutability?
  * How can you achieve immutability in your own code?
* Explain the difference between synchronous and asynchronous functions.
* What is event loop?
  * What is the difference between call stack and task queue?
* What are the differences between variables created using `let`, `var` or `const`?
* What are the differences between ES6 class and ES5 function constructors?
* Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
* What advantage is there for using the arrow syntax for a method in a constructor?
* What is the definition of a higher-order function?
* Can you give an example for destructuring an object or an array?
* Can you give an example of generating a string with ES6 Template Literals?
* Can you give an example of a curry function and why this syntax offers an advantage?
* What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
* How can you share code between files?
* Why you might want to create static class members?
* What is the difference between `while` and `do-while` loops in JavaScript?

## Coding questions
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* What will be returned by each of these?
```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```
* Write an immediately invoked function expression (IIFE)

### Ensure

Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. Otherwise it should return the given value.

```javascript
function ensure(value) {
  if (arguments.length === 0 || value === undefined) {
    throw new Error();
  }
  return value;
}

try {
  console.log(ensure());
} catch (err) {
  console.log(err);
}
```

### Remove Property

Implement the removeProperty function which takes an object and property name, and does the following:

If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.

```javascript
function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  }
  return false;
}
```

### Date

Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

```javascript
function formatDate(userDate) {
  const [month, day, year] = userDate.split('/');
  return `${year}${('0' + month).slice(-2)}${('0' + day).slice(-2)}`;
}

console.log(formatDate('12/1/2014'));
```

### Image Gallery

An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images:

```html
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First" />
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second" />
  <button class="remove">X</button>
</div>
```

Implement the setup function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent <div> element should be removed from the gallery.

For example, after the first image has been removed from the gallery above, it's HTML code should look like this:

```html
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second" />
  <button class="remove">X</button>
</div>
```

```javascript
function setup() {
  const buttons = document.getElementsByTagName('button');

  for (let btn of buttons) {
    btn.addEventListener('click', evt => {
      let parent = evt.target.parentNode;
      parent.parentNode.removeChild(parent);
    });
  }
}

// Example case.
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName('remove')[0].click();
console.log(document.body.innerHTML);
```

### Check Digit

Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. This process should repeat until a single-digit number is calculated.

For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.

```javascript
function createCheckDigit(membershipId) {
  const sum = membershipId.split('').reduce((acc, val) => acc + Number(val), 0);
  return sum >= 10 ? createCheckDigit(sum.toString()) : sum;
}

console.log(createCheckDigit('55555'));
```

### Closures

Fix the bugs in the registerHandlers function. An alert should display anchor's zero-based index within a document instead of following the link.

For example, in the document below, the alert should display "2" when Google anchor is clicked since it is the third anchor element in the document and its zero-based index is 2.

```html
<body>
  In my life, I used the following web search engines:<br />
  <a href="//www.yahoo.com">Yahoo!</a><br />
  <a href="//www.altavista.com">AltaVista</a><br />
  <a href="//www.google.com">Google</a><br />
</body>
```

```javascript
function registerHandlers() {
  const as = document.getElementsByTagName('a');

  const handleClick = i => () => {
    alert(i);
    return false;
  };

  for (let i = 0; i < as.length; i++) {
    as[i].onclick = handleClick(i);
  }
}

/* HTML code for testing purposes (do not submit uncommented):
<body>
  In my life, I used the following web search engines:<br/>
  <a href="//www.yahoo.com">Yahoo!</a><br/>
  <a href="//www.altavista.com">AltaVista</a><br/>
  <a href="//www.google.com">Google</a><br/>
</body>
*/
```

```javascript
function appendChildren(decorateDivFunction) {
  const divs = document.getElementsByTagName('div');

  for (let div of divs) {
    let newDiv = document.createElement('div');
    decorateDivFunction(newDiv);
    div.appendChild(newDiv);
  }
}

// Example case.
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

appendChildren(function(div) {});
console.log(document.body.innerHTML);
```
