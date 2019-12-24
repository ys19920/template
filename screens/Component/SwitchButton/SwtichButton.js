import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import SwitchButton from 'switch-button-react-native';
import Color from '../../../Config/color';
export default function SwitchButtons(prop) {
  return (
    <View>
      <SwitchButton
        onValueChange={val => prop.switchMode(val)}
        text1='Tap'
        text2='Handsfree'
        switchWidth={180}
        switchHeight={44}
        switchdirection='ltr'
        switchBorderRadius={100}
        switchSpeedChange={500}
        switchBorderColor='#d4d4d4'
        switchBackgroundColor={Color.white}
        btnBorderColor={Color.redOrange}
        btnBackgroundColor={Color.redOrange}
        fontColor={Color.black}
        activeFontColor={Color.white}
      />
    </View>
  );
}
