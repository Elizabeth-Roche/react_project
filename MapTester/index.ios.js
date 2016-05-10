var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
} = ReactNative;

var App = require('./App');

var MapTester = React.createClass({
  render() {
    return <App />
  },
});



AppRegistry.registerComponent('MapTester', () => MapTester);
