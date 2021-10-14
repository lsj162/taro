export default {
  pages: ["pages/bar1/index", "pages/bar2/index", "pages/bar3/index"],

  tabBar: {
    list: [
      {
        pagePath: "pages/bar1/index",
        text: "菜单1",
      },
      {
        pagePath: "pages/bar2/index",
        text: "菜单2",
      },
      {
        pagePath: "pages/bar3/index",
        text: "菜单3",
      },
    ],
  },

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
