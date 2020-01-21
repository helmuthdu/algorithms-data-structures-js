# Performance Questions

* What tools would you use to find a performance bug in your code?
* What are some ways you may improve your website's scrolling performance?
* Explain the difference between layout, painting and compositing.

### What are some ways you may improve your website's scrolling performance?

* Avoid images resize
* Reduce use of expensive styles like `box-shadow`, or css3 selectors like `:nth-child` or descendant selectors `html body ul li a {}` 

### Explain the difference between layout, painting and compositing.

* Layout is responsible for the element geometry, like width or height, or position with left or top.
* Paint is responsible for image, text, shadow, things that does not affect the layout of the page.
* Composition is responsible for arranging the elements

