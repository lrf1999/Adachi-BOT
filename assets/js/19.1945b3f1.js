(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{404:function(t,a,s){"use strict";s.r(a);var v=s(54),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"网页控制台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网页控制台"}},[t._v("#")]),t._v(" 网页控制台")]),t._v(" "),s("h2",{attrs:{id:"访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[t._v("#")]),t._v(" 访问")]),t._v(" "),s("p",[t._v("要访问网页控制台，首先确保 "),s("code",[t._v("setting.yml")]),t._v(" 中 "),s("code",[t._v("webConsole.enable")]),t._v(" 设置为 "),s("code",[t._v("true")]),t._v(" 。")]),t._v(" "),s("h3",{attrs:{id:"本地部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地部署"}},[t._v("#")]),t._v(" 本地部署")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("webConsole.consolePort")]),t._v(" 设置为 "),s("code",[t._v("80")]),t._v(" 时，直接在浏览器中访问 "),s("code",[t._v("localhost")]),t._v(" 即可。若设置不为 "),s("code",[t._v("80")]),t._v(" ，则访问 "),s("code",[t._v("localhost:对应设置值")]),t._v(" 。")]),t._v(" "),s("h3",{attrs:{id:"云端部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#云端部署"}},[t._v("#")]),t._v(" 云端部署")]),t._v(" "),s("p",[t._v("应用部署在云服务器时，首先需要知道服务器的公网 IP 。当 "),s("code",[t._v("webConsole.consolePort")]),t._v(" 设置为 "),s("code",[t._v("80")]),t._v(" 时，直接在任意设备的浏览器中访问 IP 地址即可。若设置不为 "),s("code",[t._v("80")]),t._v(" ，你需要先在云服务商的控制台处设置防火墙或安全组，再访问 "),s("code",[t._v("IP:对应设置值")]),t._v(" 。下面以阿里云为例，介绍如何设置端口。")]),t._v(" "),s("h4",{attrs:{id:"轻量应用服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#轻量应用服务器"}},[t._v("#")]),t._v(" 轻量应用服务器")]),t._v(" "),s("ol",[s("li",[t._v("进入轻量应用服务器控制面板，选择侧边栏 安全-防火墙")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/console/server-1.png",alt:""}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("点击添加规则，将端口范围改为你所设置的 "),s("code",[t._v("consolePort")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/console/server-2.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"云服务器-ecs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#云服务器-ecs"}},[t._v("#")]),t._v(" 云服务器 ECS")]),t._v(" "),s("ol",[s("li",[t._v("进入 ECS 控制面板，选择安全组，并进入你所设置的安全组")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/console/ecs-1.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/console/ecs-2.png",alt:""}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在 入方向 中，点击手动添加，目的设为 "),s("code",[t._v("consolePort/consolePort")]),t._v(" ，源设为 "),s("code",[t._v("0.0.0.0/0")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/console/ecs-3.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名解析"}},[t._v("#")]),t._v(" 域名解析")]),t._v(" "),s("p",[t._v("在已有域名中设置域名解析（A 记录类型）到服务器公网 IP 即可通过域名访问 "),s("code",[t._v("Web Console")])]),t._v(" "),s("p",[s("s",[t._v("赞助领取 adachi.top 二级域名解析")])]),t._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("h3",{attrs:{id:"登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[t._v("#")]),t._v(" 登录")]),t._v(" "),s("p",[t._v("访问控制台需要使用 "),s("code",[t._v("BOT")]),t._v(" 的账号和密码进行登录验证，该验证的有效期为一天，验证到期后需重新登录。")]),t._v(" "),s("p",[t._v("由于控制台具有"),s("strong",[t._v("最高管理权限")]),t._v("，请务必不要泄露 "),s("code",[t._v("BOT")]),t._v(" 的账号和密码。")]),t._v(" "),s("h3",{attrs:{id:"日志模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志模块"}},[t._v("#")]),t._v(" 日志模块")]),t._v(" "),s("h4",{attrs:{id:"日期选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日期选择"}},[t._v("#")]),t._v(" 日期选择")]),t._v(" "),s("p",[t._v("使用日志模块时需先选择查询的日志的日期，选择后日志将分页打印到窗口中，每页至多显示 750 条日志。如果选择了当天的日志，会额外显示一个「自动置底」的开关，开启时，窗口将会随着日志刷新而自动滚动到最底部。")]),t._v(" "),s("h4",{attrs:{id:"去隐私复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#去隐私复制"}},[t._v("#")]),t._v(" 去隐私复制")]),t._v(" "),s("p",[t._v("当你完整的拖选了若干行日志时，可以选择点击右上角的「去隐私复制」，这会将你拖选的内容复制进你的剪切板中，并将群号、QQ号等隐私信息去除。不过注意，该功能只是简单的进行了正则替换，在进行错误反馈时，最好再对复制内容进行检查，避免隐私信息泄露。")]),t._v(" "),s("h3",{attrs:{id:"用户模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户模块"}},[t._v("#")]),t._v(" 用户模块")]),t._v(" "),s("p",[t._v("该模块用于管理所有使用过 BOT 指令的用户的权限。")]),t._v(" "),s("h3",{attrs:{id:"统计模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计模块"}},[t._v("#")]),t._v(" 统计模块")]),t._v(" "),s("p",[t._v("该模块用于查看用户使用 BOT 指令的情况的统计数据。")]),t._v(" "),s("p",[t._v("点击周统计图上的圆点，日统计图就会切换到对应的日期。鼠标悬停至日统计图上的时间点，就可以看到一小时内所有指令的使用次数。")])])}),[],!1,null,null,null);a.default=_.exports}}]);