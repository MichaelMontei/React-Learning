

// reactDOM.render = place something on the screen
// we take the reactDOM.render and we insert 2 paramaters (first a <h1> html element, second we get the div by id)
// ReactDOM.render(<h1>Hello Everyone!</h1>, document.getElementById("root"))

//Exercise 1
ReactDOM.render(
    <ul><li>ListItem1</li><li>ListItem2</li><li>ListItem3</li></ul>,
    document.getElementById("root")
)