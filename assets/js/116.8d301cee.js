(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1850:function(a,t,r){"use strict";r.r(t);var A=r(44),v=Object(A.a)({},(function(){var a=this,t=a.$createElement,A=a._self._c||t;return A("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[A("p"),A("div",{staticClass:"table-of-contents"},[A("ul",[A("li",[A("a",{attrs:{href:"#_1、文件校验工具"}},[a._v("1、文件校验工具")])]),A("li",[A("a",{attrs:{href:"#_2、用法"}},[a._v("2、用法")])]),A("li",[A("a",{attrs:{href:"#_3、原理"}},[a._v("3、原理")])]),A("li",[A("a",{attrs:{href:"#_4、找到有嫌疑的jar包"}},[a._v("4、找到有嫌疑的jar包")])]),A("li",[A("a",{attrs:{href:"#_5、为什么不建议删整个库"}},[a._v("5、为什么不建议删整个库")])])])]),A("p"),a._v(" "),A("h1",{attrs:{id:"第四节-下载失败的第二种情况"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#第四节-下载失败的第二种情况"}},[a._v("#")]),a._v(" 第四节 下载失败的第二种情况")]),a._v(" "),A("h2",{attrs:{id:"_1、文件校验工具"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#_1、文件校验工具"}},[a._v("#")]),a._v(" 1、文件校验工具")]),a._v(" "),A("p",[a._v("jar包表面上看起来是下载完的状态，结尾并没有“.lastUpdated”扩展名。但是程序运行时找不到这个jar包中的类。例如：针对jar包中的类出现ClassNotFoundException。")]),a._v(" "),A("p",[A("img",{attrs:{src:r(796),alt:"./images"}})]),a._v(" "),A("p",[a._v("遇到类似问题需要先确认一下“有嫌疑”的jar包是否存在内部损坏问题。此时可以使用上面的文件校验工具。")]),a._v(" "),A("p",[A("img",{attrs:{src:r(797),alt:"./images"}})]),a._v(" "),A("h2",{attrs:{id:"_2、用法"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#_2、用法"}},[a._v("#")]),a._v(" 2、用法")]),a._v(" "),A("ul",[A("li",[a._v("打开文件校验工具")]),a._v(" "),A("li",[a._v("将待校验的jar包拖拽到文件校验工具窗口内")]),a._v(" "),A("li",[a._v("将待校验的jar包旁边的*.sha1文件打开")]),a._v(" "),A("li",[a._v("比较两个SHA1值")]),a._v(" "),A("li",[a._v("一致：jar包完好")]),a._v(" "),A("li",[a._v("不一致：jar包损坏")])]),a._v(" "),A("h2",{attrs:{id:"_3、原理"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#_3、原理"}},[a._v("#")]),a._v(" 3、原理")]),a._v(" "),A("p",[a._v("HASH加密包括很多具体加密算法，但是所有HASH算法都满足下面特征：")]),a._v(" "),A("ul",[A("li",[a._v("只要输入数据不变，任何时候执行加密，输出不变")]),a._v(" "),A("li",[a._v("输入数据有细微变化，输出数据跟着变化")]),a._v(" "),A("li",[a._v("不可逆，不能通过密文反推回明文")]),a._v(" "),A("li",[a._v("每一种具体的HASH加密算法加密后长度固定")])]),a._v(" "),A("h2",{attrs:{id:"_4、找到有嫌疑的jar包"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#_4、找到有嫌疑的jar包"}},[a._v("#")]),a._v(" 4、找到有嫌疑的jar包")]),a._v(" "),A("p",[a._v("假设现在出现了一个ClassNotFoundException，提示找不到类：org.springframework.expression.Expression。此时我们怀疑这个类所在的jar包下载失败。"),A("br")]),a._v(" "),A("ul",[A("li",[a._v("窍门1：类所在的package命名往往和jar包坐标的groupId部分类似。")]),a._v(" "),A("li",[a._v("窍门2：在IDEA中按两下Shift键，使用全类名搜索")])]),a._v(" "),A("p",[A("img",{attrs:{src:r(798),alt:"./images"}})]),a._v(" "),A("p",[a._v("找到jar包后，点右键→Show in Explorer")]),a._v(" "),A("ul",[A("li",[a._v("窍门3：如果前面的办法都没法定位，只能根据这个类看上去的特征和可能的功能找有可能有关的jar包")])]),a._v(" "),A("h2",{attrs:{id:"_5、为什么不建议删整个库"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#_5、为什么不建议删整个库"}},[a._v("#")]),a._v(" 5、为什么不建议删整个库")]),a._v(" "),A("ul",[A("li",[a._v("整个库删除后，需要重新下载整个库。此时东边的jar包没有失败，可能西边的jar包会失败。")]),a._v(" "),A("li",[a._v("整个库整体重新下载时，会有很多jar包并行下载的，相对来说并行下载本身就容易丢失数据。")])]),a._v(" "),A("p",[A("RouterLink",{attrs:{to:"/pro001-fengJie/pro002-maven/lecture/chapter06/verse03.html"}},[a._v("上一节")]),a._v(" "),A("RouterLink",{attrs:{to:"/pro001-fengJie/pro002-maven/lecture/chapter06/index.html"}},[a._v("回目录")])],1)])}),[],!1,null,null,null);t.default=v.exports},796:function(a,t){a.exports="data:image/jpeg;base64,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"},797:function(a,t,r){a.exports=r.p+"assets/img/img039.e552558a.jpg"},798:function(a,t,r){a.exports=r.p+"assets/img/img040.5b85a2b0.jpg"}}]);