import React from 'react';

export default React.createClass({
  render() {
    var keys = this.props.keys;
    return (
      <ul>
        {
          Object.keys(keys).map(function(key){
            return <li key={key}>{key} <span className="key">{keys[key].ws}</span></li>
          })
        }
      </ul>
    );
  }
});
