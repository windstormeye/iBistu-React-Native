/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// type Props = {};
// export default class News extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={{fontSize: 25}}>失物</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e8e8e8",
//     alignItems: "center",
//     justifyContent: "center",
//   }
// });
//
// module.exports = News;


import React, {Component} from "react"
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Linking,
} from "react-native"

export default class YellowPageDetails extends Component {

  constructor(props) {
    super(props)
    this.state={
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }

  renderRow(rowData) {
    return(
      <TouchableOpacity onPress={() => this.cellClick(rowData)}>
        <View style={styles.listViewCellStyle}>
          <Text style={styles.listViewCellTextStyle}>{rowData.name}</Text>
          <Text style={styles.listViewCellTextStyle}>{rowData.telephone}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  cellClick(rowData) {
    Linking.canOpenURL(rowData.telephone).then(supported => {
      if (!supported) {
        alert("当前设备不支持拨打电话")
      } else {
        return Linking.openURL(rowData.telephone);
      }

    }).catch(err => console.error('An error occurred', err));
  }

  componentDidMount() {
    this.loadDataFromHttp()
  }

  loadDataFromHttp() {
    fetch("https://api.iflab.org/api/v2/ibistu/_table/module_yellowpage?offset=1&filter=department=" + this.props.rowData.department + "&api_key=3528bd808dde403b83b456e986ce1632d513f7a06c19f5a582058be87be0d8c2&session_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzYTE4OWM0NDZhOWNlMzQ0M2NjMDQ1YmQyZTM4ZDA4YyIsImlzcyI6Imh0dHBzOi8vYXBpLmlmbGFiLm9yZy9hcGkvdjIvdXNlci9zZXNzaW9uIiwiaWF0IjoxNTE5MDA5MDY3LCJleHAiOjE1MTkwOTU0NjcsIm5iZiI6MTUxOTAwOTA2NywianRpIjoiZDlEblpoUDNHUDFtZVhlZCIsInVzZXJfaWQiOjQyLCJmb3JldmVyIjpmYWxzZX0.XL9MLkjot457yOCHabEq5eHfaowsePzta8e_Ta_yQkM")
      .then((responser) => responser.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.resource)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

}

const  styles = StyleSheet.create({
  listViewCellStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
  },

  listViewCellTextStyle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  }
})

module.exports = YellowPageDetails