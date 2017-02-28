// create a variable and render a new function
// react's convention: first letter capitalized: e.g. GreeterWord
// render returns a jsx (put jsx part in parenthesis)
var Greeter = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello React!</h1>
        <p>This is a paragraph in react JS.</p>
      </div>
      <div>
        <h1>Hello React2!</h1>
        <p>This is a paragraph in react JS.</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
