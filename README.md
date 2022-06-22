# React-Learning
React Exercises

##First Exercises: Make a unordered list with react and place it inside a div
- ReactDOM.render will place something on the screen.
- We will make a root div where we can place html items inside.

ReactDOM.render(
    <ul><li>ListItem1</li><li>ListItem2</li><li>ListItem3</li></ul>,
    document.getElementById("root")
)