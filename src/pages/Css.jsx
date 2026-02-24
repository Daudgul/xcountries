import React from "react";
import Accordion from "../components/Accordion";

function Css() {
  const data = [
    {
      question: "Explain different positions in CSS and their types",
      answer: `
CSS position property defines how an element is positioned in a document.

Types:
static → default position
relative → positioned relative to itself
absolute → positioned relative to nearest positioned parent
fixed → fixed to viewport
sticky → sticks when scrolling

Example:
.box{
  position: absolute;
  top: 20px;
  left: 20px;
}
`,
    },

    {
      question: "Discuss how to use media queries for different devices in CSS",
      answer: `
Media queries allow applying styles based on screen size or device type.

They are used for responsive design.

Example:
@media (max-width: 768px){
  body{
    background: red;
  }
}

This applies styles only on small screens.
`,
    },

    {
      question: "What is CSS Box Model",
      answer: `
Box model consists of:
content → actual text
padding → space inside border
border → surrounding line
margin → outer space

It defines total size of element.

Example:
div{
  width:200px;
  padding:10px;
  border:5px solid black;
  margin:20px;
}
`,
    },

    {
      question: "Explain flex vs grid",
      answer: `
Flexbox is one-dimensional layout system.
Used for rows OR columns.

Grid is two-dimensional layout system.
Used for rows AND columns.

Flex example:
.container{
 display:flex;
}

Grid example:
.container{
 display:grid;
 grid-template-columns:1fr 1fr;
}
`,
    },

    {
      question: "Explain CSS specificity",
      answer: `
Specificity decides which CSS rule applies.

Priority order:
inline style > id > class > element

Example:
#id {color:red}
.class {color:blue}

ID wins due to higher specificity.
`,
    },

    {
      question: "What is z-index in CSS?",
      answer: `
z-index controls stacking order of elements.
Higher value appears on top.

Works only with positioned elements.

Example:
.box{
 position:absolute;
 z-index:10;
}
`,
    },

    {
      question: "How to center a div using CSS?",
      answer: `
We can center using flexbox.

Example:
.container{
 display:flex;
 justify-content:center;
 align-items:center;
 height:100vh;
}
`,
    },

    {
      question: "Difference between em and rem",
      answer: `
em is relative to parent font-size.
rem is relative to root html font-size.

Example:
html{font-size:16px}
div{font-size:2rem} → 32px
`,
    },

    {
      question: "What is pixel and percentage in CSS?",
      answer: `
Pixel is fixed unit.
Percentage is relative to parent size.

Example:
width:50% → half of parent width
`,
    },

    {
      question: "Why is !important used?",
      answer: `
!important overrides all other CSS rules.

Used when we must force a style.

Example:
color:red !important;
`,
    },

    {
      question: "What are CSS display properties",
      answer: `
display defines how element behaves.

block → full width
inline → content width
inline-block → inline but width allowed
flex → flex layout
grid → grid layout
none → hidden
`,
    },

    {
      question: "Explain CSS selectors",
      answer: `
Selectors target HTML elements.

Types:
element → p
class → .box
id → #box
attribute → input[type=text]
pseudo → :hover
`,
    },

    {
      question: "CSS transitions and transformations",
      answer: `
Transitions create smooth animation.
Transform changes shape or position.

Example:
.box{
 transition:0.3s;
 transform:scale(1.2);
}
`,
    },

    {
      question: "Responsive design using CSS3",
      answer: `
Use media queries, flexbox, grid, percentage units.

Example:
@media(max-width:600px){
 .container{
  flex-direction:column;
 }
}
`,
    },

    {
      question: "Purpose of keyframes in CSS",
      answer: `
Keyframes define animation steps.

Example:
@keyframes move{
 from{left:0}
 to{left:100px}
}
`,
    },

    {
      question: "Media queries importance",
      answer: `
Media queries make site responsive.
They adapt layout for mobile, tablet, desktop.
`,
    },

    {
      question: "Rotate element 45 degrees",
      answer: `
transform: rotate(45deg);
`,
    },

    {
      question: "What does box-sizing border-box do?",
      answer: `
It includes padding and border inside width/height.

Example:
*{
 box-sizing:border-box;
}
`,
    },

    {
      question: "Build table from JSON",
      answer: `
Use HTML table and map data with JS.

Example:
<table>
<tr><td>Name</td></tr>
</table>
`,
    },

    {
      question: "Create circular ring using CSS",
      answer: `
.circle{
 width:100px;
 height:100px;
 border-radius:50%;
 border:5px solid blue;
}
`,
    },

    {
      question: "CSS3 modules",
      answer: `
CSS3 is divided into modules like:
flexbox
grid
animation
backgrounds
fonts
`,
    },

    {
      question: "Align div bottom-right using flexbox",
      answer: `
.container{
 display:flex;
 justify-content:flex-end;
 align-items:flex-end;
 height:100vh;
}
`,
    },

    {
      question: "Handle overflow styling",
      answer: `
overflow:hidden;
overflow:auto;
overflow:scroll;
`,
    },

    {
      question: "Sticky navbar using CSS",
      answer: `
.nav{
 position:sticky;
 top:0;
}
`,
    },

    {
      question: "Pseudo classes in CSS",
      answer: `
Pseudo classes define element state.

Examples:
:hover
:active
:first-child
`,
    },

    {
      question: "What is flexbox?",
      answer: `
Flexbox is layout system for aligning items 
in row or column with spacing control.
`,
    },

    {
      question: "What is CSS grid?",
      answer: `
Grid is two-dimensional layout system 
for rows and columns.
`,
    },
  ];
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">CSS Questions</h1>
      <Accordion data={data} />
    </div>
  );
}

export default Css;
