import "./App.scss";
import { legacy_createStore } from "redux";
import { Provider, connect } from "react-redux";

const countReducer = function (state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBSTRACT":
      return state - 1;
    default:
      return state;
  }
};

const store = legacy_createStore(countReducer);

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispachToProps = (dispach) => {
  return {
    add: () => dispach({ type: "ADD" }),
    substract: () => dispach({ type: "SUBSTRACT" }),
  };
};

const Component = ({ count, add, substract }) => {
  return (
    <div>
      <h1>Count = {count}</h1>
      <div className="d-flex justify-content-between">
        <button onClick={add} className="btn btn-primary">
          ADD
        </button>

        <button onClick={substract} className="btn btn-success">
          SUBSTRACT
        </button>
      </div>
    </div>
  );
};

const Container = connect(mapStateToProps, mapDispachToProps)(Component);

function App() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
      <Provider store={store}>
        <h1>Redux Store Setup</h1>
        <Container />
      </Provider>
    </div>
  );
}

export default App;
