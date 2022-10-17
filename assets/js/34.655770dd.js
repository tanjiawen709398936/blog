(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{433:function(t,s,a){t.exports=a.p+"assets/img/prerender.7af12b58.png"},571:function(t,s,a){"use strict";a.r(s);var e=a(54),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"搭建一个自己的前端项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建一个自己的前端项目"}},[t._v("#")]),t._v(" 搭建一个自己的前端项目")]),t._v(" "),e("p",[t._v("项目相关")]),t._v(" "),e("h3",{attrs:{id:"搭建脚手架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建脚手架"}},[t._v("#")]),t._v(" 搭建脚手架")]),t._v(" "),e("p",[t._v("案例："),e("a",{attrs:{href:"https://www.npmjs.com/package/create-fv-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/create-fv-cli"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("脚手架重点：")]),t._v(" "),e("ol",[e("li",[t._v("脚手架名称不能有冲突（可以在 npm 官网查询）")]),t._v(" "),e("li",[t._v("脚手架入口 "),e("code",[t._v("package.json")]),t._v(" -> "),e("code",[t._v("bin")])]),t._v(" "),e("li",[t._v("脚手架如果名称为 "),e("code",[t._v("create-fv-cli")]),t._v(" 那么 "),e("code",[t._v("npm init fv-cli")]),t._v(" 可以指到 "),e("code",[t._v("create-fv-cli")]),t._v(" 地址。")]),t._v(" "),e("li",[t._v("脚手架的依赖包要放在 "),e("code",[t._v("dependencies")]),t._v(" 中（否则会提示没有module）")])]),t._v(" "),e("p",[t._v("脚手架的几种思路：")]),t._v(" "),e("ol",[e("li",[t._v("最好的当然是 yyx 的利用 "),e("code",[t._v("fs-extra")]),t._v(" 估计目录执行 "),e("code",[t._v("copy")])]),t._v(" "),e("li",[t._v("也可以使用 commander 通过 git clone 安装")])]),t._v(" "),e("h3",{attrs:{id:"prerenderspaplugin-启动预渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerenderspaplugin-启动预渲染"}},[t._v("#")]),t._v(" PrerenderSPAPlugin 启动预渲染")]),t._v(" "),e("p",[t._v("预渲染采用 vue 推荐的 "),e("code",[t._v("PrerenderSPAPlugin")]),t._v(" 插件，放入 "),e("code",[t._v("webpack")]),t._v(" 就可以使用")]),t._v(" "),e("p",[t._v("PrerenderSPAPlugin 使用")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrerenderSPAPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    staticDir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    routes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    renderer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrerenderSPAPlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PuppeteerRenderer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      renderAfterDocumentEvent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'render-event'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// renderAfterTime: 5000")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("在 vue 文件中通过 "),e("code",[t._v("renderAfterDocumentEvent")]),t._v(" 告知 "),e("code",[t._v("PrerenderSPAPlugin")]),t._v(" render 时间点，当然多个 route 需要弄多个 event")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'render-active'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("工作流程")]),t._v(" "),e("p",[e("img",{attrs:{src:a(433),alt:"prerender"}})]),t._v(" "),e("h3",{attrs:{id:"nuxt-js-搭建-ssr-或-预渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-js-搭建-ssr-或-预渲染"}},[t._v("#")]),t._v(" nuxt.js 搭建 ssr 或 预渲染")]),t._v(" "),e("p",[t._v("直接通过 "),e("img",{attrs:{src:"https://www.nuxtjs.cn/",alt:"https://www.nuxtjs.cn/"}}),t._v(" 官网就可以使用了。")]),t._v(" "),e("h3",{attrs:{id:"微服务基础-single-spa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微服务基础-single-spa"}},[t._v("#")]),t._v(" 微服务基础 single-spa")]),t._v(" "),e("p",[t._v("子项目：")]),t._v(" "),e("ul",[e("li",[t._v("在开发或者单独部署时，按照各自风格编写。")]),t._v(" "),e("li",[t._v("如果要集成微服务架构，需要再设置单独的打包方式，以引入"),e("code",[t._v("single-spa-vue")]),t._v("或者其他单页面插件的js文件作为入口。")]),t._v(" "),e("li",[t._v("需要打包为 "),e("code",[t._v("library")]),t._v("，target可以是umd或者其他方式。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  libraryTarget: 'umd',\n\tlibrary: 'app1'\n")])])]),e("p",[t._v("根项目：")]),t._v(" "),e("ul",[e("li",[t._v("引入"),e("code",[t._v("single-spa")])]),t._v(" "),e("li",[t._v("通过"),e("code",[t._v("spa.registerApplication")]),t._v("的方式，在遇到特定"),e("code",[t._v("href")]),t._v("时加载不同的打包子项目入口文件")]),t._v(" "),e("li",[t._v("在开发环境，通过代理来实现不同的遇到特定"),e("code",[t._v("href")]),t._v("代理不同的子项目。")])]),t._v(" "),e("h3",{attrs:{id:"阿里-qiankun-实现微服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阿里-qiankun-实现微服务"}},[t._v("#")]),t._v(" 阿里 qiankun 实现微服务")]),t._v(" "),e("p",[t._v("qiankun 是基于 single-spa 的微服务框架。实现了几乎包含所有构建微前端系统时所需要的基本能力，如 样式隔离、js 沙箱、预加载等。")]),t._v(" "),e("p",[t._v("使用 自带的 example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  $ git clone https://github.com/umijs/qiankun.git\n  $ cd qiankun\n  $ yarn install\n  $ yarn examples:install\n  $ yarn examples:start\n")])])]),e("p",[t._v("使用 qiankun 可以无缝兼容已有的项目...真棒呢")])])}),[],!1,null,null,null);s.default=n.exports}}]);