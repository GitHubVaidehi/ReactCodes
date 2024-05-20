 // Render the component to the DOM
 const heading = React.createElement("h1", {id : "heading"}, "Hello World from react!")
//  {} < -- this as an empty object to give attributes to class 
//  <h1 id="heading">Hello World from react!</h1>  <-- got this id to the heading. can be checked in Elements in Inspect
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);