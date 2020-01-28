# Network Questions

- Traditionally, why has it been better to serve site assets from multiple domains?
- Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
- What are the differences between Long-Polling, Websockets and Server-Sent Events?
- Explain the following request and response headers:
  - Diff. between Expires, Date, Age and If-Modified-...
  - Do Not Track
  - Cache-Control
  - Transfer-Encoding
  - ETag
  - X-Frame-Options
- What are HTTP methods? List all HTTP methods that you know, and explain them.
- What is domain pre-fetching and how does it help with performance?

- What is a CDN and what is the benefit of using one?

A content delivery network (CDN) is a system of distributed servers (network) that deliver pages and other web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server.

```javascript
function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener('load', reqListener);
req.open('GET', 'http://www.example.org/example.txt');
req.send();
```
