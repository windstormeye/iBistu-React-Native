import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ProgressViewIOS
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

var NewsListView = require("../News/NewsListView")

var scrollViewData_en = ["zhxw", "tpxw", "rcpy", "jxky", "whhd", "xyrw", "jlhz", "shfw", "mtgz"];
var scrollViewData_cn = ["综合新闻", "图片新闻", "人才培养", "教学科研", "文化活动", "校园人物", "交流合作", "社会服务", "媒体关注"];

class News extends Component {

  render() {
    return (
      <ScrollableTabView tabBarActiveTextColor="black"
                         tabBarUnderlineStyle={{backgroundColor:"black"}}
                         tabBarInactiveTextColor="rgb(120, 120, 120)"
                         tabBarTextStyle={{fontSize: 15, fontWeight:"bold"}}
                         style={{marginTop:64}}
                         renderTabBar={() => <ScrollableTabBar/>}
                         onChangeTab={this.changeTabScrollView}
      >

        {this.renderChildTabView()}

      </ScrollableTabView>

    );
  }

  renderChildTabView() {
    var childTabViews = []
    for (var i = 0; i < scrollViewData_cn.length; i++) {
      childTabViews.push(
        <NewsListView key={i}
                      tabLabel={scrollViewData_cn[i]}
                      title={scrollViewData_en[i]}
        />
      )
    }
    return childTabViews;
  }

  changeTabScrollView(tab) {
    // alert(tab.i)

  }

}

const styles = StyleSheet.create({

  scrollTabViewStyle: {

  }

});

module.exports = News;

