// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//
// } from 'react-native';
//
// import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
//
// var screenWidth = require("Dimensions").get("window").width
//
// var scrollViewData_en = ["zhxw", "tpxw", "rcpy", "jxky", "whhd", "xyrw", "jlhz", "shfw", "mtgz"];
// var scrollViewData_cn = ["综合新闻", "图片新闻", "人才培养", "教学科研", "文化活动", "校园人物", "交流合作", "社会服务", "媒体关注"];
//
// type Props = {};
// export default class News extends Component<Props> {
//   render() {
//     return (
//       <ScrollableTabView
//         renderTabBar={() => <DefaultTabBar/>}>
//         <View tabLabel="测试"></View>
//         <View tabLabel="测试"></View>
//         <View tabLabel="测试"></View>
//       </ScrollableTabView>
//     );
//   }
//
//   renderScrollTabView() {
//     var childViews = [];
//     for (var i = 0; i < scrollViewData_cn.length; i++) {
//       childViews.push(
//         <View key={i} style={{height: 50}}>
//           <Text style={{width: 30, height: 50}}>2333</Text>
//         </View>
//       )
//     }
//     return childViews;
//   }
//
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e8e8e8",
//   },
//
// });
//
// module.exports = News;


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ProgressViewIOS
} from 'react-native';


import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
class TabBarView extends Component {
  render() {
    return (
      <ScrollableTabView tabBarUnderlineColor="rgb(23,102,171)" tabBarActiveTextColor="black"  style={{marginTop:64}}>
        <View tabLabel='测试1'>
          <Text style={styles.phoneContainer}>
            城市工资排行
          </Text>

        </View>

        <View tabLabel='测试1'>
          <Text style={styles.phoneContainer}>
            行业工资排行
          </Text>

        </View>

        <View tabLabel='测试1'>
          <Text style={styles.phoneContainer}>
            职业工资排行
          </Text>

        </View>

      </ScrollableTabView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  progressView: {
    marginTop: 20,
    marginLeft:10,
    marginRight:10,

  },
  phoneContainer :{
    borderColor:"rgb(241,241,241)",
    backgroundColor:"rgb(255,255,255)",
    flex:1,
    borderStyle:"solid",
    borderWidth:1,
    margin:10,
    borderRadius:3,
    shadowColor: "rgb(229,229,229)",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 3
    }
  }
});

// AppRegistry.registerComponent('TabBarView', () => TabBarView);
module.exports = TabBarView;

