/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';

var YellowPageDetails = require("../YellowPage/YellowPageDetails")

type Props = {};
export default class NewsListView extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity onPress={() => {this.pushYellowPageDetails(rowData)}}>
        <View style={styles.listViewCellStyle}>
          <Text style={styles.listViewCellTextStyle}>{rowData.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  pushYellowPageDetails(rowData) {
    this.props.navigator.push({
      component: YellowPageDetails,
      title: rowData.name,
      passProps: {rowData}
    })
  }

  componentDidMount() {
    this.loadDataFromHttp()
  }

  loadDataFromHttp() {
    fetch("https://api.iflab.org/api/v2/ibistu/_table/module_yellowpage?filter=isDisplay%3D1&offset=1&group=department&api_key=3528bd808dde403b83b456e986ce1632d513f7a06c19f5a582058be87be0d8c2&session_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzYTE4OWM0NDZhOWNlMzQ0M2NjMDQ1YmQyZTM4ZDA4YyIsImlzcyI6Imh0dHBzOi8vYXBpLmlmbGFiLm9yZy9hcGkvdjIvdXNlci9zZXNzaW9uIiwiaWF0IjoxNTE5MDA5MDY3LCJleHAiOjE1MTkwOTU0NjcsIm5iZiI6MTUxOTAwOTA2NywianRpIjoiZDlEblpoUDNHUDFtZVhlZCIsInVzZXJfaWQiOjQyLCJmb3JldmVyIjpmYWxzZX0.XL9MLkjot457yOCHabEq5eHfaowsePzta8e_Ta_yQkM")
      .then((response) => response.json())
      .then((responseData => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.resource)
        })
      }))
      .catch((error) => {
        console.log(error)
      })
  }

}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 35,
    position: "absolute",
    backgroundColor: "red",
  },

  listViewCellStyle: {
    height: 60,
    justifyContent: "center",
    padding: 15,
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
  },

  listViewCellTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
  }
});

module.exports = NewsListView;