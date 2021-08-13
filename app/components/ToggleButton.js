import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, Image, TouchableOpacity} from 'react-native';



export default class ToggleButton extends Component {
  state = {
    toggle:true
  }

  _onPress(){
  const newState = !this.state.toggle;
  this.setState({toggle:newState})
}

  render() {
    const {toggle} = this.state;
    const textValue = toggle? "On" : "off" ;
    const buttonBg = toggle? "dodgerblue":'white';
    const textColor = toggle?"white":'black';
    return(
        <View style ={{flexDirection: 'row'}}> 
          <TouchableOpacity 
          onPress={() => this._onPress()}
          style = {{margin: 10, flex: 1, height: 60, backgroundColor: buttonBg, justifyContent: 'center', borderColor:'dodgerblue', borderWidth: 2}}> 
            <Text style={{color: textColor, textAlign: 'center', fontSize: 16}}> {textValue} </Text>
          </TouchableOpacity>
        </View>
    )
  }
}
