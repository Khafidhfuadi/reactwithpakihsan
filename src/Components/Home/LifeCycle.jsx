import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return true;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: this.state.count - 1
      });
    }, 1000);
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log(nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      this.setState({
        count: this.state.count - 1
      });
    }, 1000);
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        <h2 className="bg-primary text-center p-5">{this.state.count}</h2>
      </div>
    );
  }
}

export default LifeCycle;
