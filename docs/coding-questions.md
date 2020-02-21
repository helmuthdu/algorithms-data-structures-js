# Coding Questions

Question: What is the value of `foo`?

```javascript
let foo = 10 + '20';
```

Question: What will be the output of the code below?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Question: How would you make this work?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Question: What value is returned from the following statement?

```javascript
"i'm a lasagna hog"
  .split('')
  .reverse()
  .join('');
```

Question: What is the value of `window.foo`?

```javascript
window.foo || (window.foo = 'bar');
```

Question: What is the outcome of the two alerts below?

```javascript
var foo = 'Hello';
(function() {
  var bar = ' World';
  alert(foo + bar);
})();
alert(foo + bar);
```

Question: What is the value of `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Question: What is the value of `foo.x`?

```javascript
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };
```

Question: What does the following code print?

```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
});
console.log('four');
```

Question: What is the difference between these four promises?

```javascript
doSomething().then(function() {
  return doSomethingElse();
});

doSomething().then(function() {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

Question: What will the code below output to the console and why?

```javascript
(function() {
  var a = (b = 3);
})();

console.log('a defined? ' + (typeof a !== 'undefined'));
console.log('b defined? ' + (typeof b !== 'undefined'));
```

Question: Consider the two functions below. Will they both return the same thing? Why or why not?

```javascript
function foo1() {
  return {
    bar: 'hello',
  };
}

function foo2() {
  return
  {
    bar: 'hello';
  }
}
```

Question: Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. Otherwise it should return the given value.

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

Question: Implement the removeProperty function which takes an object and property name, and if the object obj has a
property prop, the function removes the property from the object and returns true; in all other cases it returns false.

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

Question: Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API
(YYYYMMDD). The parameter "userDate" and the return value are strings.

```javascript
function formatDate(userDate) {
  const [month, day, year] = userDate.split('/');
  return `${year}${('0' + month).slice(-2)}${('0' + day).slice(-2)}`;
}

console.log(formatDate('12/1/2014'));
```


## Challenges
### Image

An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery
with two images:

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
```
