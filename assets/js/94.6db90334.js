(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{531:function(t,s,a){"use strict";a.r(s);var e=a(54),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"写在前面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[t._v("#")]),t._v(" 写在前面")]),t._v(" "),a("p",[t._v("谈到node断点调试，目前主要有三种方式，通过"),a("code",[t._v("node内置调试工具")]),t._v("、"),a("code",[t._v("通过IDE（如vscode）")]),t._v("、"),a("code",[t._v("通过node-inspector")]),t._v("，三者本质上差不多。本文着重点在于介绍 "),a("strong",[t._v("如何在本地通过node-inspector 调试远程服务器上的node代码")]),t._v("。")]),t._v(" "),a("p",[t._v("在进入主题之前，首先会对三种调试方式进行入门讲解，方便新手理解后面的内容。至于老司机们，可以直接跳到主题去。")]),t._v(" "),a("h2",{attrs:{id:"方式一-内置debug功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一-内置debug功能"}},[t._v("#")]),t._v(" 方式一：内置debug功能")]),t._v(" "),a("h4",{attrs:{id:"进入调试模式-在第1行断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入调试模式-在第1行断点"}},[t._v("#")]),t._v(" 进入调试模式（在第1行断点）")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("node debug app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNET",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"进入调试模式-在第n行断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入调试模式-在第n行断点"}},[t._v("#")]),t._v(" 进入调试模式（在第n行断点）")]),t._v(" "),a("p",[t._v("比如要在第3行断点。")]),t._v(" "),a("p",[t._v("方式一：通过"),a("code",[t._v("debugger")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNE6",alt:"clipboard.png"}})]),t._v(" "),a("p",[t._v("方式二：通过"),a("code",[t._v("sb(line)")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNE7",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"执行下一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行下一步"}},[t._v("#")]),t._v(" 执行下一步")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("next")]),t._v("命令。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNE9",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"跳到下一个断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳到下一个断点"}},[t._v("#")]),t._v(" 跳到下一个断点")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("cont")]),t._v("命令。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFa",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"查看某个变量的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看某个变量的值"}},[t._v("#")]),t._v(" 查看某个变量的值")]),t._v(" "),a("p",[t._v("输入"),a("code",[t._v("repl")]),t._v("命令后，再次输入变量名，就可以看到变量对应的值。如果想继续执行代码，可以按"),a("code",[t._v("ctrl+c")]),t._v("退出。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFb",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"添加-删除watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-删除watch"}},[t._v("#")]),t._v(" 添加/删除watch")]),t._v(" "),a("ul",[a("li",[t._v("通过"),a("code",[t._v("watch(expr)")]),t._v("来添加监视对象。")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("watchers")]),t._v("查看当前所有的监视对象。")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("unwatch(expr)")]),t._v("来删除监视对象。")])]),t._v(" "),a("p",[t._v("添加watch：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFc",alt:"clipboard.png"}})]),t._v(" "),a("p",[t._v("删除watch：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFd",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"进入-跳出函数-step-in、step-out"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入-跳出函数-step-in、step-out"}},[t._v("#")]),t._v(" 进入/跳出函数（step in、step out）")]),t._v(" "),a("ul",[a("li",[t._v("进入函数：通过"),a("code",[t._v("step")]),t._v("或者"),a("code",[t._v("s")]),t._v("。")]),t._v(" "),a("li",[t._v("跳出函数：通过"),a("code",[t._v("out")]),t._v("或者"),a("code",[t._v("o")]),t._v("。")])]),t._v(" "),a("p",[t._v("示例代码如下，假设代码运行到"),a("code",[t._v("logger(str);")]),t._v("这一行，首先跳进函数内部，再跳出函数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var nick = 'chyingp';\nvar country = 'China';\n\nvar str = nick + ' live in ' + country;\n\nvar logger = function(msg){\n    console.log(msg); // 这里\n    console.log('这行会跳过'); // 跳过这行\n};\n\nlogger(str);  // 假设运行到这里，想要进入logger方法\n\nconsole.log(str);\n")])])]),a("p",[t._v("示例截图如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFh",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"多个文件断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个文件断点"}},[t._v("#")]),t._v(" 多个文件断点")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("setBreakpoint('script.js', 1), sb(...)")]),t._v("，在某个文件某一行添加断点。反正我是没成功过。。。怎么看都是bug。。。")]),t._v(" "),a("h4",{attrs:{id:"重新运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新运行"}},[t._v("#")]),t._v(" 重新运行")]),t._v(" "),a("p",[t._v("每次都退出然后"),a("code",[t._v("node debug app.js")]),t._v("相当烦。直接用"),a("code",[t._v("restart")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFi",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"远程调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程调试"}},[t._v("#")]),t._v(" 远程调试")]),t._v(" "),a("p",[t._v("比如远程机器ip是"),a("code",[t._v("192.168.1.126")]),t._v("，在远程机器上进入调试模式")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ex]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node --debug-brk app.js")]),t._v("\nDebugger listening on port 5858\n")])])]),a("p",[t._v("然后，在本地机器通过"),a("code",[t._v("node debug 192.168.1.126:5858")]),t._v("连接远程机器进行调试。")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("node debug 192"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("168"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("126:5858\n")])])]),a("p",[t._v("如下：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("➜  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp node debug 192"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("168"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("126:5858\nconnecting to 192"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("168"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("126:5858 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" ok\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js:1\n> 1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Logger = require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./logger'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  2 \n  3 Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndebug> n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js:3\n  1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Logger = require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./logger'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  2 \n> 3 Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  4 \n  5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当然，还可以通过pid进行远程调试，这里就不举例。")]),t._v(" "),a("p",[t._v("参考：https://nodejs.org/api/debugger.html#debugger_advanced_usage")]),t._v(" "),a("h2",{attrs:{id:"方式二-通过ide-vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二-通过ide-vscode"}},[t._v("#")]),t._v(" 方式二：通过IDE(vscode)")]),t._v(" "),a("p",[t._v("首先，在vscode里打开项目")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFl",alt:"clipboard.png"}})]),t._v(" "),a("p",[t._v("然后，添加调试配置。主要需要修改的是可执行文件的路径。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFm",alt:"clipboard.png"}})]),t._v(" "),a("p",[t._v("点击代码左侧添加断点。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFp",alt:"clipboard.png"}})]),t._v(" "),a("p",[t._v("开始调试")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFr",alt:"clipboard.png"}})]),t._v(" "),a("p",[t._v("顺利断点，左侧的变量、监视对象，右侧的调试工具栏，用过"),a("code",[t._v("chrome dev tool")]),t._v("的同学应该很熟悉，不赘述。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFs",alt:"clipboard.png"}})]),t._v(" "),a("h2",{attrs:{id:"方式三-通过node-inspector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式三-通过node-inspector"}},[t._v("#")]),t._v(" 方式三：通过node-inspector")]),t._v(" "),a("p",[t._v("首先，安装"),a("code",[t._v("node-inspector")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("inspector\n")])])]),a("h4",{attrs:{id:"方式一-通过node-debug启动调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一-通过node-debug启动调试"}},[t._v("#")]),t._v(" 方式一：通过"),a("code",[t._v("node-debug")]),t._v("启动调试")]),t._v(" "),a("p",[t._v("启动调试，它会自动帮你在浏览器里打开调试界面。")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("➜  debugger git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ✗ node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("debug app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\nNode Inspector v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("8\nVisit http:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("127"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1:8080"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("?port=5858 to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" debugging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nDebugging `app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js`\n\nDebugger listening on port 5858\n")])])]),a("p",[t._v("调试界面如下，简直不能更亲切。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFt",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"方式二-更加灵活的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二-更加灵活的方式"}},[t._v("#")]),t._v(" 方式二：更加灵活的方式")]),t._v(" "),a("p",[t._v("步骤1：通过"),a("code",[t._v("node-inspector")]),t._v("启动Node Inspector Server")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("➜  debugger git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ✗ node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("inspector \nNode Inspector v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("8\nVisit http:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("127"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1:8080"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("?port=5858 to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" debugging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("步骤2：通过传统方式启动调试。加入"),a("code",[t._v("--debug-brk")]),t._v("，好让代码在第一行断住。")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("➜  debugger git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ✗ node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug-brk")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\nDebugger listening on port 5858\n")])])]),a("p",[t._v("步骤3：在浏览器里打开调试UI界面。就是步骤1里打印出来的地址 http://127.0.0.1:8080/?port=5858。成功")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFu",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理")]),t._v(" "),a("p",[t._v("从上面的例子不难猜想到。（不负责任猜想）")]),t._v(" "),a("ul",[a("li",[t._v("通过"),a("code",[t._v("node --debug-brk")]),t._v("启动调试，监听"),a("code",[t._v("5858")]),t._v("端口。")]),t._v(" "),a("li",[a("code",[t._v("node-inspector")]),t._v("启动服务，监听8080端口。")]),t._v(" "),a("li",[t._v("在浏览器里访问"),a("code",[t._v("http://127.0.0.1:8080/?port=5858")]),t._v("。可以看到"),a("code",[t._v("port=5858")]),t._v("这个参数。结合之前讲到的node内置远程调试的功能，可以猜想，在返回UI调试界面的同时，服务内部通过"),a("code",[t._v("5858")]),t._v("端口开始了断点调试。")])]),t._v(" "),a("p",[t._v("另外，从下面截图可以看出，UI调试工具（其实是个网页）跟 "),a("code",[t._v("inspector服务")]),t._v(" 之间通过"),a("code",[t._v("websocket")]),t._v("进行通信。")]),t._v(" "),a("p",[t._v("用户在界面上操作时，比如设置断点，就向 "),a("code",[t._v("inspector服务")]),t._v(" 发送一条消息，"),a("code",[t._v("inspector服务")]),t._v(" 在内部通过v8调试器来实现代码的断点。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFC",alt:"clipboard.png"}})]),t._v(" "),a("p",[t._v("可以看到，用到了"),a("code",[t._v("v8-debug")]),t._v("，这个就待深挖了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFD",alt:"clipboard.png"}})]),t._v(" "),a("h2",{attrs:{id:"通过node-inspector调试远程代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过node-inspector调试远程代码"}},[t._v("#")]),t._v(" 通过node-inspector调试远程代码")]),t._v(" "),a("p",[t._v("细心的同学可能会发现，node远程调试其实在上面"),a("code",[t._v("node-inspector")]),t._v("章节的讲解里已经覆盖到了。这里还是来个实际的例子。")]),t._v(" "),a("p",[t._v("假设我们的node代码"),a("code",[t._v("app.js")]),t._v("运行在阿里云的服务器上，服务器ip是"),a("code",[t._v("xxx.xxx.xxx.xxx")]),t._v("。")]),t._v(" "),a("p",[t._v("首先，服务器上启动node-inspector服务")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@iZ94wb7tioqZ ~]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node-inspector ")]),t._v("\nNode Inspector v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("8\nVisit http:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("127"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1:8080"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("?port=5858 to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" debugging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("其次，通过"),a("code",[t._v("--debug-brk")]),t._v("参数，进入调试模式")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@iZ94wb7tioqZ ex]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node --debug-brk app.js")]),t._v("\nDebugger listening on port 5858\n")])])]),a("p",[t._v("最后，在本地通过ip地址愉快的访问调试界面。是不是很简单捏。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNFF",alt:"clipboard.png"}})]),t._v(" "),a("h4",{attrs:{id:"常见问题-安全限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题-安全限制"}},[t._v("#")]),t._v(" 常见问题：安全限制")]),t._v(" "),a("p",[t._v("远程调试常见的问题就是请求被拒绝。这是服务器安全策略的限制。遇到这种情况，开放端口就完事了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNHD",alt:"clipboard.png"}})]),t._v(" "),a("p",[t._v("在我们的云主机上，默认安装了"),a("code",[t._v("firewall-cmd")]),t._v("，可以通过"),a("code",[t._v("--add-port")]),t._v("选项来开放"),a("code",[t._v("8080")]),t._v("端口的开放。如果本机没有安装"),a("code",[t._v("firewall-cmd")]),t._v("，也可以通过"),a("code",[t._v("iptables")]),t._v("来实现同样的功能。")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@iZ94wb7tioqZ ex]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# firewall-cmd --add-port=8080/tcp")]),t._v("\nsuccess\n")])])]),a("p",[t._v("然后，就可以愉快的远程调试了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVCNHE",alt:"clipboard.png"}})]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://nodejs.org/api/debugger.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node Debugger"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://blog.0x972.info/?d=2014/11/13/10/40/50-how-does-a-debugger-work",target:"_blank",rel:"noopener noreferrer"}},[t._v("How Does a C Debugger Work?"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://eli.thegreenplace.net/2011/01/27/how-debuggers-work-part-2-breakpoints/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How debuggers work: Part 2 - Breakpoints"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);