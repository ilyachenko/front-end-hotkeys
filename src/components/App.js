import React from 'react';
import { Link }  from 'react-router';
import Content from './Content';

export default React.createClass({
  returnSomething(something) {
    //this is only for testing purposes. Check /test/components/App-test.js
    return something;
  },
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <section>
          {this.props.children || <Content></Content>}
        </section>
      </div>
    )
  }
});
