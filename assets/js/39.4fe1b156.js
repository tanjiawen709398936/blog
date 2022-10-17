(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{449:function(e,t,r){e.exports=r.p+"assets/img/bounding.72490735.png"},597:function(e,t,r){"use strict";r.r(t);var o=r(54),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"好用的新特性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#好用的新特性"}},[e._v("#")]),e._v(" 好用的新特性")]),e._v(" "),o("h3",{attrs:{id:"offsetparent-各种偏移系列"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#offsetparent-各种偏移系列"}},[e._v("#")]),e._v(" offsetParent 各种偏移系列")]),e._v(" "),o("blockquote",[o("p",[e._v("能获取到定位父元素，也很方便的获取到偏移值")])]),e._v(" "),o("p",[e._v("PS: PC端兼容不错，获取偏移很方便")]),e._v(" "),o("p",[o("code",[e._v("HTMLElement.offsetParent")]),e._v(" 是一个只读属性，返回一个指向最近的（指包含层级上的最近）"),o("code",[e._v("包含该元素的定位元素")]),e._v("或者最近的 table,td,th,body元素。")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("offsetParent")]),e._v(" 是要有定位的父元素 (position不等于static)，或者 table/td/th/body。")]),e._v(" "),o("li",[o("code",[e._v("offsetParent")]),e._v(" 如果自身是 "),o("code",[e._v("display: fixed;")]),e._v(" 那么其定位父元素为视窗")]),e._v(" "),o("li",[e._v("当元素的 "),o("code",[e._v("style.display")]),e._v(" 设置为 "),o("code",[e._v("none")]),e._v(" 时，offsetParent 返回 "),o("code",[e._v("null")])]),e._v(" "),o("li",[o("code",[e._v("offsetTop")]),e._v(" 和 "),o("code",[e._v("offsetLeft")]),e._v(" 都是相对于其内边距边界的。")])]),e._v(" "),o("h3",{attrs:{id:"getboundingclientrect-获取边界框客户矩形"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getboundingclientrect-获取边界框客户矩形"}},[e._v("#")]),e._v(" getBoundingClientRect: 获取边界框客户矩形")]),e._v(" "),o("blockquote",[o("p",[e._v("Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。")])]),e._v(" "),o("p",[e._v("PS: PC端兼容不错，获取相对视口位置很方便")]),e._v(" "),o("p",[e._v("left、top、right、bottom，单位为像素，位置都是"),o("strong",[e._v("相对于视口的左上角")]),e._v("位置而言的")]),e._v(" "),o("p",[o("img",{attrs:{src:r(449),alt:"bounding"}})]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考 MDN"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"getcomputedstyle-获取元素样式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getcomputedstyle-获取元素样式"}},[e._v("#")]),e._v(" getComputedStyle: 获取元素样式")]),e._v(" "),o("blockquote",[o("p",[e._v("方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。（能获取伪元素的值）")])]),e._v(" "),o("p",[e._v("PC端兼容不错，优势：可以获取到伪元素。")]),e._v(" "),o("p",[o("code",[e._v("let style = window.getComputedStyle(element, [pseudoElt]);")]),e._v(" pseudoElt指：伪元素")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考 MDN"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"intersectionobserverentry-交叉点监听条目"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#intersectionobserverentry-交叉点监听条目"}},[e._v("#")]),e._v(" IntersectionObserverEntry：交叉点监听条目")]),e._v(" "),o("blockquote",[o("p",[e._v("描述了 目标元素 与其 根元素容器 在某一特定过渡时刻的交叉状态.")])]),e._v(" "),o("p",[e._v("PS: 兼容性堪忧")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考1 MDN"),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考2 阮一峰大佬"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"window-requestidlecallback-请求懒回调"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#window-requestidlecallback-请求懒回调"}},[e._v("#")]),e._v(" window.requestIdleCallback()  请求懒回调")]),e._v(" "),o("blockquote",[o("p",[e._v("将在浏览器的空闲时段内调用的函数排队.")])]),e._v(" "),o("p",[e._v("PS: 兼容性堪忧")]),e._v(" "),o("p",[e._v("这使开发人员能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间timeout，则有可能为了在超时前执行函数而打乱执行顺序。")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考 MDN"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"css-属性-scroll-snap-align"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#css-属性-scroll-snap-align"}},[e._v("#")]),e._v(" css 属性 scroll-snap-align")]),e._v(" "),o("p",[e._v("PS：PC端兼容性一般，移动端兼容性很差")]),e._v(" "),o("p",[e._v("滚动的对齐方式，对做轮播图什么的很方便")]),e._v(" "),o("h3",{attrs:{id:"mutationobserver"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mutationobserver"}},[e._v("#")]),e._v(" MutationObserver")]),e._v(" "),o("p",[e._v("监听DOM的变化，（是个微任务）")]),e._v(" "),o("p",[e._v("ps: 大部分浏览器都能用，包括IE11。。。")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"shadow-dom"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#shadow-dom"}},[e._v("#")]),e._v(" shadow DOM")]),e._v(" "),o("blockquote",[o("p",[e._v("一个可以隔离样式的 DOM 元素，可以配合 Web Components 使用")])]),e._v(" "),o("p",[e._v("原生 input 使用了该属性。")]),e._v(" "),o("p",[e._v("ps: 兼容性就这样吧")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"customelements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customelements"}},[e._v("#")]),e._v(" customElements")]),e._v(" "),o("blockquote",[o("p",[e._v("Web Components 标准非常重要的一个特性是，它使开发者能够将HTML页面的功能封装为 custom elements")])]),e._v(" "),o("p",[e._v("ps: 兼容性就这样吧")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);