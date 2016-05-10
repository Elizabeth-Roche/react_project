'use strict';
var React = require('react-native');
var MapView = require('react-native-maps');
const styles = require('../style.js')

class MapView extends React.Component {
  render() {
    return(
      <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    )
  }
}


module.exports = MapView;
