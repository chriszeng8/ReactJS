1. create a project
```
npm init
```
create a package.json to manage dependencies.



2. create a react variable that return rendered jsx code (kind of similar to a directive in angular)
```
var ReactVarName = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello React!</h1>
        <p>This is a paragraph in react JS.</p>
      </div>
    );
  }
});
```

Note that only one root level <div></div> is allowed.

3. render the jsx DOM by using ReactDOM.render
```
ReactDOM.render(
  <ReactVarName/>,
  document.getElementById('app')
);
```
