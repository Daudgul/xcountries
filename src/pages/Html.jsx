import Accordion from "../components/Accordion";

export default function Html() {
  const data = [
    {
      question: "What are meta tags in HTML?",
      answer: `
Meta tags are HTML tags that provide metadata about a webpage. 
They are placed inside the <head> section and are not visible on the page.

Meta tags help browsers, search engines, and social media platforms 
understand information like page description, character encoding, viewport settings, and SEO data.

Common uses:
- SEO description
- character encoding
- responsive design
- social sharing preview

Example:
<head>
  <meta charset="UTF-8">
  <meta name="description" content="This is a web page">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
`,
    },

    {
      question:
        "What are the differences between semantic and non-semantic HTML tags?",
      answer: `
Semantic tags clearly describe the meaning of the content they contain. 
They make code readable and help search engines and accessibility tools.

Examples: 
<header>, <footer>, <article>, <section>, <nav>

Non-semantic tags do not describe their content. 
They are mostly used for styling or layout.

Examples:
<div>, <span>

Semantic tags improve SEO and accessibility, 
while non-semantic tags are mainly for grouping and styling.
`,
    },

    {
      question: "Discuss inline vs block display values",
      answer: `
Block elements take full width and start on a new line.
They can contain other block and inline elements.

Examples:
<div>, <p>, <section>

Inline elements only take required width 
and stay in the same line.

Examples:
<span>, <a>, <strong>

Use block elements for layout structure 
and inline elements for styling text inside content.
`,
    },

    {
      question: "Explain features of HTML5",
      answer: `
HTML5 introduced many new features that improved web development.

Key features:
- Semantic tags like <header>, <article>
- Audio and video support without plugins
- Canvas for graphics
- Local storage and session storage
- Drag and drop support
- Better form controls
- Responsive design support

Example:
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
`,
    },

    {
      question: "Web storage and its description",
      answer: `
Web storage allows storing data in the browser.

There are two types:
localStorage → persists even after browser closes
sessionStorage → cleared when tab closes

It stores key-value pairs and is useful for saving user preferences, tokens, etc.

Example:
localStorage.setItem("name", "Ali");
const value = localStorage.getItem("name");
`,
    },

    {
      question: "Can HTML support drag-and-drop functionality?",
      answer: `
Yes, HTML5 supports drag and drop functionality using the draggable attribute 
and drag events like dragstart, dragover, and drop.

It allows users to drag elements and drop them in another place.

Example:
<div draggable="true">Drag me</div>
`,
    },

    {
      question: "Can we use a span inside block elements in HTML? Why?",
      answer: `
Yes, we can use a <span> inside block elements.

<span> is an inline element used for styling text inside block elements.
Block elements like <div> and <p> can contain inline elements.

Example:
<p>This is a <span style="color:red">highlighted</span> word.</p>
`,
    },

    {
      question: "Difference between <datalist> and <select>",
      answer: `
<select> provides predefined dropdown options 
and users must choose from them.

<datalist> provides suggestions but allows users 
to type their own value as well.

Example:
<input list="cities">
<datalist id="cities">
  <option value="Delhi">
  <option value="Mumbai">
</datalist>
`,
    },

    {
      question: "What is a picture tag?",
      answer: `
The <picture> tag is used for responsive images.
It allows loading different images based on screen size or device.

It contains multiple <source> tags and one <img> fallback.

Example:
<picture>
  <source media="(max-width:600px)" srcset="small.jpg">
  <img src="large.jpg" alt="image">
</picture>
`,
    },

    {
      question: "Key practices for structuring HTML for SEO",
      answer: `
Use semantic tags like header, nav, main, article.
Use proper heading hierarchy (h1 → h6).
Add meta tags for description and keywords.
Use alt attributes in images.
Keep clean and readable structure.
Use meaningful URLs and title tags.

These practices help search engines understand content better.
`,
    },

    {
      question: "Explain defer and async in script tag",
      answer: `
Both are used to load JavaScript without blocking HTML parsing.

async:
Script loads and executes immediately when ready.
Execution order is not guaranteed.

defer:
Script loads in background but executes after HTML parsing is complete.
Execution order is preserved.

Example:
<script src="app.js" defer></script>
`,
    },

    {
      question: "What is the structure of HTML?",
      answer: `
HTML has a basic structure that includes doctype, html, head, and body.

Example:
<!DOCTYPE html>
<html>
<head>
  <title>Page</title>
</head>
<body>
  Content here
</body>
</html>
`,
    },

    {
      question: "Purpose of doctype declaration",
      answer: `
The doctype declaration tells the browser which version of HTML is being used.
It ensures the browser renders the page in standards mode.

Example:
<!DOCTYPE html>
`,
    },

    {
      question: "Difference between HTML element and tags",
      answer: `
An HTML tag is the opening or closing part like <p>.
An HTML element includes the opening tag, content, and closing tag.

Example:
<p>Hello</p>
Here <p> is a tag and the whole line is an element.
`,
    },

    {
      question: "Write code with 3 rows and 3 columns in HTML",
      answer: `
<table border="1">
<tr>
<td>1</td><td>2</td><td>3</td>
</tr>
<tr>
<td>4</td><td>5</td><td>6</td>
</tr>
<tr>
<td>7</td><td>8</td><td>9</td>
</tr>
</table>
`,
    },

    {
      question: "How do you combine rows in an HTML table?",
      answer: `
We combine rows using the rowspan attribute.

Example:
<td rowspan="2">A</td>
`,
    },

    {
      question: "Difference between script tag loading and async attributes",
      answer: `
Normal script blocks HTML parsing.
async loads and executes immediately.
defer loads in background and executes after HTML parsing.
`,
    },

    {
      question: "Difference between div and span",
      answer: `
<div> is a block element used for layout.
<span> is an inline element used for styling text.

Example:
<div>Block</div>
<span>Inline</span>
`,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">HTML Questions</h1>
      <Accordion data={data} />
    </div>
  );
}
