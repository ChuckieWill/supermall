module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,  //视窗宽度，对应设计稿的宽度 ，单位变换以此为基础
      viewportHeight: 667, //视窗高度，对应设计稿的高度
      unitPrecision: 5, // 指定'px'--->'vw'时保留小数位数 
      viewportUnit: 'vw', //希望使用的视口单位(vw或vh),建议vw
      minPixelValue: 1, //设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false, //
      selectorBlackList: ['tab-bar', 'tab-bar-item'],//需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
    }
  }
}