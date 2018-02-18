import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ProgressViewIOS
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

var NewsListView = require("../component/News/NewsListView")

var scrollViewData_en = ["zhxw", "tpxw", "rcpy", "jxky", "whhd", "xyrw", "jlhz", "shfw", "mtgz"];
var scrollViewData_cn = ["综合新闻", "图片新闻", "人才培养", "教学科研", "文化活动", "校园人物", "交流合作", "社会服务", "媒体关注"];

class TabBarView extends Component {
  render() {
    return (
      <ScrollableTabView tabBarActiveTextColor="black"
                         tabBarUnderlineStyle={{backgroundColor:"black"}}
                         tabBarInactiveTextColor="rgb(120, 120, 120)"
                         tabBarTextStyle={{fontSize: 15, fontWeight:"bold"}}
                         style={{marginTop:64}}
                         renderTabBar={() => <ScrollableTabBar/>}
      >

        {this.renderChildTabView()}

      </ScrollableTabView>

    );
  }

  renderChildTabView() {
    var childTabViews = []
    for (var i = 0; i < scrollViewData_cn.length; i++) {
      childTabViews.push(
        <NewsListView key={i} tabLabel={scrollViewData_cn[i]} />
      )
    }
    return childTabViews;
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
  },

  scrollTabViewStyle: {

  }

});

// AppRegistry.registerComponent('TabBarView', () => TabBarView);
module.exports = TabBarView;

