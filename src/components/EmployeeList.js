import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {employeesFetch} from '../actions/EmployeeActions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.employees}
        extraData={this.props}
        renderItem={({item}) => (
          <ListItem employee={item} />
        )}
        keyExtractor={item => item.uid}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
