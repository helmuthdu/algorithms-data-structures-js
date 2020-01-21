# HTML Questions

- What does a `doctype` do?
- How do you serve a page with content in multiple languages?
- What kind of things must you be wary of when designing or developing for multilingual sites?
- What are `data-` attributes good for?
- Consider HTML5 as an open web platform. What are the building blocks of HTML5?
- Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
- Describe the difference between `<script>`, `<script async>` and `<script defer>`.
- Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
- What is progressive rendering?
- Why you would use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
- Have you used different HTML templating languages before?

### What does a `doctype` do?

Doctype stands for Document Type Declaration, inform the web browser about the type version of HTML, usually are required for legacy reasons, a safe guarantee that the browser will render the content right.

### What kind of things must you be wary of when designing or developing for multilingual sites?

Use unicode UTF8
Use language and direction attributes in html tag
Use tools to help with date, plural and currency instead of doing it manually

### What is progressive rendering?

Is a technique to render the content as quickly as possible, one example is lazy loading of images.
