(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{598:function(v,_,e){"use strict";e.r(_);var n=e(54),a=Object(n.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"npm-机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-机制"}},[v._v("#")]),v._v(" NPM 机制")]),v._v(" "),e("p",[v._v("使用NPM安装的时候会经常出现包冲突（比如多个主模块的子模块版本不一致等），导致在开发过程中会遇到各种或大或小的问题。所有在这会介绍以下内容：")]),v._v(" "),e("ol",[e("li",[v._v("NPM 主要安装方式")]),v._v(" "),e("li",[v._v("NPM 包信息查询")]),v._v(" "),e("li",[v._v("NPM 安装机制（主要）")])]),v._v(" "),e("hr"),v._v(" "),e("h2",{attrs:{id:"安装-查询命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-查询命令"}},[v._v("#")]),v._v(" 安装&查询命令")]),v._v(" "),e("p",[e("strong",[v._v("NPM 各种安装方式")])]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("npm install packageName[@next | @versionNumber]")])]),v._v(" "),e("ul",[e("li",[v._v("在 node_modules 中没有指定模块时安装，（不检查~/.npm目录）")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("npm install packageName --f | -- force")])]),v._v(" "),e("ul",[e("li",[v._v("一个模块不管是否安装过，npm都要 "),e("strong",[v._v("强制重新安装")])])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("npm update packageName")])]),v._v(" "),e("ul",[e("li",[v._v("如果远程版本较新、或者本地版本不存在时安装")])])])]),v._v(" "),e("p",[e("strong",[v._v("NPM 查询服务")])]),v._v(" "),e("ul",[e("li",[v._v("NPM通过registry的查询服务，从而知道每个模块的最新版本。")]),v._v(" "),e("li",[v._v("可以通过 "),e("code",[v._v("npm view packageName [version]")]),v._v(" 查询对映模块的信息")])]),v._v(" "),e("hr"),v._v(" "),e("h2",{attrs:{id:"npm-安装机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-安装机制"}},[v._v("#")]),v._v(" NPM 安装机制")]),v._v(" "),e("p",[v._v("输入 npm install 命令并敲下回车后，会经历如下几个阶段（以 npm 5.5.1 为例）：")]),v._v(" "),e("p",[e("strong",[v._v("1. 执行工程自身 preinstall")])]),v._v(" "),e("p",[v._v("当前 npm 工程如果定义了 preinstall 钩子此时会被执行。")]),v._v(" "),e("p",[e("strong",[v._v("2. 确定首层依赖模块")])]),v._v(" "),e("p",[v._v("首先需要做的是确定工程中的首层依赖，也就是 "),e("code",[v._v("dependencies")]),v._v(" 和 "),e("code",[v._v("devDependencies")]),v._v(" 属性中直接指定的模块（假设此时没有添加 npm install 参数）。")]),v._v(" "),e("p",[v._v("工程本身是整棵"),e("strong",[v._v("依赖树")]),v._v("的根节点，每个首层依赖模块都是根节点下面的一棵子树，npm 会开启多进程从每个首层依赖模块开始逐步寻找更深层级的节点。")]),v._v(" "),e("blockquote",[e("p",[v._v("如果查询node_modules目录之中已经存在指定模块，那么不再重新安装")])]),v._v(" "),e("p",[e("strong",[v._v("3. 获取模块")])]),v._v(" "),e("p",[v._v("获取模块是一个"),e("strong",[v._v("递归")]),v._v("的过程，分为以下几步：")]),v._v(" "),e("ul",[e("li",[v._v("获取模块信息\n"),e("ul",[e("li",[v._v("在下载一个模块之前，首先要确定其版本，这是因为 package.json 中往往是 semantic version（semver，语义化版本）")]),v._v(" "),e("li",[v._v("此时如果版本描述文件（npm-shrinkwrap.json 或 package-lock.json）中有该模块信息直接拿即可")]),v._v(" "),e("li",[v._v("如果没有则从仓库获取（向registry查询）。如 packaeg.json 中某个包的版本是 ^1.1.0，npm 就会去仓库中获取符合 1.x.x 形式的最新版本。")])])]),v._v(" "),e("li",[v._v("获取模块实体。\n"),e("ul",[e("li",[v._v("上一步会获取到模块的压缩包地址（resolved 字段），npm 会用此地址检查本地缓存，缓存中有就直接拿，如果没有则从仓库下载。")])])]),v._v(" "),e("li",[v._v("查找该模块依赖\n"),e("ul",[e("li",[v._v("如果有依赖则回到第1步，如果没有则停止。")])])])]),v._v(" "),e("p",[e("strong",[v._v("4. 模块扁平化（deduce）")])]),v._v(" "),e("p",[v._v("Semver 是 Github 起草的一个具有指导意义的，统一的版本号表示规则，")]),v._v(" "),e("p",[v._v("版本格式的定义：主版本号.次版本号.修订号，版本号递增规则如下：")]),v._v(" "),e("ul",[e("li",[v._v("主版本号(major)：有不兼容的 API 修改，")]),v._v(" "),e("li",[v._v("次版本号(minor)：向下兼容的功能性新增")]),v._v(" "),e("li",[v._v("修订号(patch)：向下兼容的BUG修复")])]),v._v(" "),e("p",[v._v("一步获取到的是一棵完整的依赖树，其中可能包含大量重复模块。比如 A 模块依赖于 loadsh，B 模块同样依赖于 lodash。在 npm3 以前会严格按照依赖树的结构进行安装，因此会造成模块冗余。")]),v._v(" "),e("p",[v._v("从 "),e("code",[v._v("npm3 版本")]),v._v(" 开始默认加入了一个 deduce 的过程。它会遍历所有节点，逐个将模块放在根节点下面，也就是 node-modules 的第一层。当发现有重复模块时，则将其丢弃。")]),v._v(" "),e("p",[v._v("这里需要对重复模块进行一个定义，它指的是"),e("strong",[v._v("模块名相同且 semver 兼容")]),v._v("。每个 semver 都对应一段版本允许范围，如果两个模块的版本允许范围存在交集，那么就可以得到一个兼容版本，而不必版本号完全一致，这可以使更多冗余模块在 deduce 过程中被去掉。")]),v._v(" "),e("p",[v._v("比如")]),v._v(" "),e("ul",[e("li",[v._v("node-modules 下 foo 模块依赖 lodash@^1.0.0，bar 模块依赖 lodash@^1.1.0，则 ^1.1.0 为兼容版本。")]),v._v(" "),e("li",[v._v("而当 foo 依赖 lodash@^2.0.0，bar 依赖 lodash@^1.1.0，则依据 semver 的规则，二者不存在兼容版本。会将一个版本放在 node_modules 中，另一个仍保留在依赖树里。")])]),v._v(" "),e("p",[e("strong",[v._v("5. 安装模块")])]),v._v(" "),e("p",[v._v("这一步将会更新工程中的 node_modules，并执行模块中的生命周期函数（按照 preinstall、install、postinstall 的顺序）。")]),v._v(" "),e("p",[e("strong",[v._v("6. 执行工程自身生命周期")])]),v._v(" "),e("p",[v._v("当前 npm 工程如果定义了钩子此时会被执行（按照 install、postinstall、prepublish、prepare 的顺序）。")]),v._v(" "),e("p",[v._v("最后一步是生成或更新版本描述文件，npm install 过程完成。")]),v._v(" "),e("p",[v._v("参考")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/01/npm-install.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("阮一峰的个人博客"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://www.zhihu.com/question/66629910",target:"_blank",rel:"noopener noreferrer"}},[v._v("npm实现原理"),e("OutboundLink")],1)])]),v._v(" "),e("h3",{attrs:{id:"版本控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[v._v("#")]),v._v(" 版本控制")]),v._v(" "),e("p",[v._v("在package.json文件中")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v('  "x": "1.0.1", // 安装 指定版本（1.0.1）\n  "x": "~1.0.1", // 安装 1.0.X 中最新的版本\n  "x": "^1.0.1", // 安装 1.X.X 中最新的版本\n')])])]),e("p",[v._v("默认的npm版本使用"),e("code",[v._v("^x.x.x")]),v._v("。如果包版本不向下兼容，再次安装时出现版本BUG。")]),v._v(" "),e("p",[v._v("不过："),e("code",[v._v("npm 5.x")]),v._v("版本后默认会添加"),e("code",[v._v("package-lock.json")]),v._v("文件，类似于 "),e("code",[v._v("yarn")]),v._v("的"),e("code",[v._v("yarn.lock")]),v._v("。在安装时"),e("code",[v._v(".lock")]),v._v("文件会先被读取，这样能实现每处都使用相同版本的 packages，")]),v._v(" "),e("h3",{attrs:{id:"npm-插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-插件"}},[v._v("#")]),v._v(" NPM 插件")]),v._v(" "),e("p",[v._v("运行"),e("code",[v._v("npm init")]),v._v("生成"),e("code",[v._v("package.json")])]),v._v(" "),e("p",[e("code",[v._v("package.json")]),v._v("将作为插件的配置文件")]),v._v(" "),e("ul",[e("li",[e("p",[v._v('"name": 表示插件的名称')])]),v._v(" "),e("li",[e("p",[v._v('"private": 必须为 true')])]),v._v(" "),e("li",[e("p",[v._v('"main": 作为插件的入口文件')])]),v._v(" "),e("li",[e("p",[v._v("如果，那么webpack的alias在插件中会不能使用")])]),v._v(" "),e("li",[e("p",[v._v("根目录下的 "),e("code",[v._v(".npmignore")]),v._v("文件的中可设置在npm发布时的忽略项。")])]),v._v(" "),e("li",[e("p",[v._v("如果，那么webpack的alias在插件中会不能使用")])]),v._v(" "),e("li",[e("p",[v._v("可以通过使用 "),e("code",[v._v("npm-link")]),v._v("来联调插件")])])]),v._v(" "),e("h3",{attrs:{id:"npm私有库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm私有库"}},[v._v("#")]),v._v(" NPM私有库")]),v._v(" "),e("ul",[e("li",[v._v("使用"),e("code",[v._v("verdaccio")]),v._v("搭建服务 "),e("code",[v._v("npm install –global verdaccio")])]),v._v(" "),e("li",[v._v("然后就运行"),e("code",[v._v("verdaccio")]),v._v("再设置账户和密码")]),v._v(" "),e("li",[v._v("然后就可以cd到需要作为插件的目录"),e("code",[v._v("npm publish")])]),v._v(" "),e("li",[v._v("私有库可链接 "),e("code",[v._v("cnpm")]),v._v(" 镜像")])]),v._v(" "),e("h3",{attrs:{id:"私有库的管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#私有库的管理"}},[v._v("#")]),v._v(" 私有库的管理")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://docs.npmjs.com/misc/scope#publishing-public-scoped-packages-to-the-public-npm-registry",target:"_blank",rel:"noopener noreferrer"}},[v._v("npm-scoped"),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("最简单的操作：")]),v._v(" "),e("ol",[e("li",[v._v("组件库命名使用 "),e("code",[v._v("@myco/名称")]),v._v(" （其中："),e("code",[v._v("@myco")]),v._v(" 表示作用域）")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("npm config")]),v._v(" 将作用域与注册表关联：\n"),e("ul",[e("li",[v._v("运行："),e("code",[v._v("npm config set @myco:registry http://reg.example.com")])]),v._v(" "),e("li",[e("code",[v._v("npm config")]),v._v(" 修改的是 "),e("code",[v._v(".npmrc")]),v._v(" 文件，就是npm的配置文件所在位置。")])])])]),v._v(" "),e("h3",{attrs:{id:"npm-和-yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-和-yarn"}},[v._v("#")]),v._v(" NPM 和 yarn")]),v._v(" "),e("p",[v._v("yarn产生的原因：")]),v._v(" "),e("ol",[e("li",[v._v("解决NPM的包管理问题（"),e("code",[v._v("yarn.lock")]),v._v("），npm 5.0后也有了.lock文件")]),v._v(" "),e("li",[v._v("解决npm install 安装速度过慢的问题（同步执行所有任务）")])]),v._v(" "),e("p",[v._v("npm 5.x 的改进")]),v._v(" "),e("ol",[e("li",[v._v("包管理方面：npm也会自动生成"),e("code",[v._v("package-lock.json")]),v._v("文件")]),v._v(" "),e("li",[v._v("5.2.x版本后：产生了"),e("code",[v._v("symlink")]),v._v("（符号链接），项目的包可以通过"),e("code",[v._v("npm link")]),v._v("链接到全局文件包中。")])]),v._v(" "),e("p",[v._v("npm link的使用：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("  // cd 到需要使用的目录\n  \n  // 运行\n  npm link ../app1\n  \n  // app1 表示package.json的name\n\n  // 然后 对app1的更改都会映射到该目录的 node_modules/app1 中\n")])])]),e("p",[v._v("npm link在调试npm插件的时候非常好用，可以避免每次都"),e("code",[v._v("publish")]),v._v("插件")])])}),[],!1,null,null,null);_.default=a.exports}}]);