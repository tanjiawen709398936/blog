(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{595:function(t,e,o){"use strict";o.r(e);var n=o(54),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"移动端touch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#移动端touch"}},[t._v("#")]),t._v(" 移动端touch")]),t._v(" "),o("p",[t._v("touch\ntouchstart\ntouchmove\ntouchend")]),t._v(" "),o("p",[t._v("手势难点")]),t._v(" "),o("ol",[o("li",[t._v("手势识别\n缩放，旋转")]),t._v(" "),o("li",[t._v("方向锁定")]),t._v(" "),o("li")]),t._v(" "),o("p",[t._v("touch的事件有，event.targetTouchs，数组，目标dom的触摸数。\n如果是多指代表最中间点\n拖拽时要在touchstart事件中 e.preventDefault()来阻止页面的滚动效果，\n每个touch都有 identifier表示ID")]),t._v(" "),o("p",[t._v("单点触摸，使用 event.targetTouchs[0]")]),t._v(" "),o("p",[t._v("多点触摸：\n目标dom的event.targetTouchs表示目标的触摸手指数组\n多点触摸有在touchend触发时当前dom的所有touch事件都remove掉\n需要使用event.changedTouches来寻找离开的手指的 identifier来判断是否离开")]),t._v(" "),o("p",[t._v("原生的额touch 和 websocket很难用\n分别用 iscroll 、 hammer  和 socketio")]),t._v(" "),o("p",[t._v("拖拽方向锁定\n。上下拖的时候阻止左右拖，左右同理")]),t._v(" "),o("p",[t._v("获取transform属性基本上不能，因为通过js获取到的是矩阵，\n但是获得一个矩阵的transform可以有多个，比如scale+skew可以等于rotate")]),t._v(" "),o("p",[t._v("调试手机端可以用 browser-sync完成多端同步（利用socket.io完成的）")]),t._v(" "),o("p",[t._v("在if里面放函数是很不好的行为，因为在不同的浏览器执行的结果可能不一样，\n在严格模式还会报错")])])}),[],!1,null,null,null);e.default=v.exports}}]);