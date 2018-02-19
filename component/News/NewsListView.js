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
  ListView
} from 'react-native';

type Props = {};
export default class NewsListView extends Component<Props> {

  static props = {
    title: '',
    data: ''
  }

  constructor(props) {
    super(props)
    this.state={
      listViewDataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 28}}>{this.props.title}</Text>
      </View>
    );
  }

  componentDidMount() {
    this.loadDataFromHttp()
  }

  loadDataFromHttp() {
    // fetch("https://api.iflab.org/api/v2/ibistu/_table/module_yellowpage?filter=isDisplay%3D1&offset=1&group=department&api_key=3528bd808dde403b83b456e986ce1632d513f7a06c19f5a582058be87be0d8c2&session_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzYTE4OWM0NDZhOWNlMzQ0M2NjMDQ1YmQyZTM4ZDA4YyIsImlzcyI6Imh0dHBzOi8vYXBpLmlmbGFiLm9yZy9hcGkvdjIvdXNlci9zZXNzaW9uIiwiaWF0IjoxNTE5MDA5MDY3LCJleHAiOjE1MTkwOTU0NjcsIm5iZiI6MTUxOTAwOTA2NywianRpIjoiZDlEblpoUDNHUDFtZVhlZCIsInVzZXJfaWQiOjQyLCJmb3JldmVyIjpmYWxzZX0.XL9MLkjot457yOCHabEq5eHfaowsePzta8e_Ta_yQkM")
    //   .then((response) => response.json())
    //   .then((responseData => {
    //     console.log(responseData)
    //   }))
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    justifyContent: "center",
  }
});

module.exports = NewsListView;