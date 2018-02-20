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
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';

var News = require("../component/News/News")
var YellowPage = require("../component/YellowPage/YellowPage")
var Map = require("../component/Map")
var LostAndFound = require("../component/LostAndFound")
var Mine = require("../component/Mine")

type Props = {};
export default class Main extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      tabBarSelectedTag: "NEWS"
    };
  }

  render() {
    return (
      <TabBarIOS
        tintColor="black"
      >
        <TabBarIOS.Item
        icon={require('../img/news.png')}
        title="新闻"
        selected={this.state.tabBarSelectedTag === "NEWS"}
        onPress={() => {this.setState({tabBarSelectedTag: "NEWS"})}}
       >

          <NavigatorIOS
            tintColor="black"
            initialRoute={
              {
                component: News,
                title: "新闻",
              }
            }
            style={{flex: 1}}
          />

        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('../img/yellowPages.png')}
          title="黄页"
          selected={this.state.tabBarSelectedTag === "YELLOWPAGES"}
          onPress={() => {this.setState({tabBarSelectedTag: "YELLOWPAGES"})}}
        >

          <NavigatorIOS
            style={{flex: 1}}
            tintColor="black"
            initialRoute={
              {
                component: YellowPage,
                title: "黄页"
              }
            }
          />

        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('../img/LostFound.png')}
          title="失物"
          selected={this.state.tabBarSelectedTag === "LOSTANDFOUND"}
          onPress={() => {this.setState({tabBarSelectedTag: "LOSTANDFOUND"})}}
        >

          <NavigatorIOS
            style={{flex: 1}}
            tintColor="black"
            initialRoute={
              {
                component: LostAndFound,
                title: "失物"
              }
            }
          />

        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('../img/map.png')}
          title="地图"
          selected={this.state.tabBarSelectedTag === "MAP"}
          onPress={() => {this.setState({tabBarSelectedTag: "MAP"})}}
        >

          <NavigatorIOS
            style={{flex: 1}}
            tintColor="black"
            initialRoute={
              {
                component: Map,
                title: "地图"
              }
            }
          />

        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('../img/userCenter.png')}
          title="我"
          selected={this.state.tabBarSelectedTag === "MINE"}
          onPress={() => {this.setState({tabBarSelectedTag: "MINE"})}}
        >

          <NavigatorIOS
            style={{flex: 1}}
            initialRoute={
              {
                component: Mine,
                title: "我的"
              }
            }
          />

        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = Main;
