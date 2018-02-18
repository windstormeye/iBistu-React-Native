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

  constructor(props) {
    super(props)
    this.state={
      listViewDataSource: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25}}>失物</Text>
      </View>
    );
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