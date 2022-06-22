//Normal Javascript to create a h1 element with a classname and append it to the document

const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

//When we console log our h1 it returns the following
// <h1 class="header">

//Here we make a new variable with the react code inside and put that element in the REACTDOM.render

const element = <h1 className="header">This is JSX</h1>
console.log(element)

//When we console log that element it shows us an object type

/*
{
    type: "h1",
    key: null,
    ref: null,
    props: {
        className: "header",
        children: "This is JSX"
    },
    _owner: null,
    _store: {}
}
 */

// JSX
ReactDOM.render(element, document.getElementById("root"))