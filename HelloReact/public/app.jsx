// create a variable and render a new function
// react's convention: first letter capitalized: e.g. GreeterWord
// render returns a jsx (put jsx part in parenthesis)
var Greeter = React.createClass({

  // set default property name in case user does not specify properties
  // in DOM properties.
  getDefaultProps: function (){
    return {
      name: 'React User',
      msg: 'This is a paragraph in react JS.'
    }
  },
  render: function(){
    // pass the component property from DOM to jsx
    var name = this.props.name;
    var msg = this.props.msg;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{msg +"!!"}</p>
      </div>
    );
  }
});


//inject javascript by wrapping with single curly brackets
var name = 'Chris';
var msg = 'A random message'

ReactDOM.render(
  // <Greeter name="Chris Z"/>,
  <Greeter name={name} msg={msg}/>,
  document.getElementById('app')
);


//Component properties
// Pass prop into jsx
//<VarName prop1={jsVar1} prop2={jsVar2}/>,

// ReactDOM.render(
//   <Greeter name={name} msg={msg}/>,
//   document.getElementById('app')
// );
