import React from 'react';
import Keys from './Keys';
import keys from '../keys.json';

export default React.createClass({
  filterList: function (event) {
    let filteredKeys = {};
    Object.keys(keys).forEach(function(item){
      if (item.toLowerCase().search(event.target.value.toLowerCase()) !== -1){
        filteredKeys[item] = keys[item];
      }
    });
    this.setState({keys: filteredKeys});
  },
  getInitialState: function () {
    return {
      initialKeys: keys,
      keys: []
    }
  },
  componentWillMount: function () {
    this.setState({keys: this.state.initialKeys})
  },
  render() {
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <Keys keys={this.state.keys}/>
      </div>
    )
  }
});
