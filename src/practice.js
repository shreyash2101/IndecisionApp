/*

// babel setup command
babel src / practice.js--out - file=public / scripts / app.js--presets = env, react--watch


const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"],
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var userName = "Shreyash";
var userAge = 21;
var userLocation = "Kolkata";

const user = {
  name: "Shreyash",
  age: 21,
  location: "Kolkata",
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

// Counter App

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();


// Build it

const onShowDetails = () => {
  visibility = !visibility;

  render();
};
const appRoot = document.getElementById("app");
let visibility = false;
const render = () => {
  const template = (
    <div>
      <h1>Visibility Togggle</h1>
      <button onClick={onShowDetails}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      {visibility && (
        <div>
          <p>This is some details for you</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};
render();



// Visibility Toggle Updated

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey, These are some details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));


// Counter App Updated
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem("count"), 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
*/
