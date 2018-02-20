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
  Image,
} from 'react-native';

type Props = {};
export default class NewsListView extends Component<Props> {

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
      <ListView
        dataSource={this.state.listViewDataSource}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow(rowData) {
    console.log(rowData.newsImage)
    return (
      <View>
        <Text>{rowData.newsTitle}</Text>
        <Image
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png', width: 50, height: 50}} />
      </View>
    )
  }

  componentDidMount() {
    this.loadDataFromHttp()
  }

  loadDataFromHttp() {
    fetch("https://api.iflab.org/api/v2/newsapi/newslist?category=zhxw&page=0&api_key=3528bd808dde403b83b456e986ce1632d513f7a06c19f5a582058be87be0d8c2&session_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzYTE4OWM0NDZhOWNlMzQ0M2NjMDQ1YmQyZTM4ZDA4YyIsImlzcyI6Imh0dHBzOi8vYXBpLmlmbGFiLm9yZy9hcGkvdjIvdXNlci9zZXNzaW9uIiwiaWF0IjoxNTE5MTQxMzM2LCJleHAiOjE1MTkyMjc3MzYsIm5iZiI6MTUxOTE0MTMzNiwianRpIjoid2M1cmFxenlsOHpGZDFYcCIsInVzZXJfaWQiOjQyLCJmb3JldmVyIjpmYWxzZX0.VZ3qbkxKUHS3gIbF9xqE_xiMQJOQXqmPl_u7TXrmzxo")
      .then((response) => response.json())
      .then((responseData => {
        this.setState({
          listViewDataSource: this.state.listViewDataSource.cloneWithRows(responseData)
        })
      }))
      .catch((error) => {
        console.log(error)
      })
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