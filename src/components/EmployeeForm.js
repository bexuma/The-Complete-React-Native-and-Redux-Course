import React, {Component} from 'react';
import {Picker, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {CardSection, Input} from './common';
import {employeeUpdate} from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            onChangeText={this.onPhoneChange}
            onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
            value={this.props.phone}
          />
        </CardSection>

        <CardSection style={{flexDirection: 'column', height: 70}}>
          <Text style={styles.pickerTextStyle} >
            Shift
          </Text>

          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
            style={{flex: 1, marginLeft: 15}}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default connect(null, {employeeUpdate})(EmployeeForm);
