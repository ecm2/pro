(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{2020:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1、springmvc-配置文件的默认位置"}},[t._v("1、SpringMVC 配置文件的默认位置")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1配置要求"}},[t._v("①配置要求")])]),a("li",[a("a",{attrs:{href:"#_2为什么不建议"}},[t._v("②为什么不建议")])])])]),a("li",[a("a",{attrs:{href:"#_2、请求映射其他方式"}},[t._v("2、请求映射其他方式")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1根据请求参数情况映射"}},[t._v("①根据请求参数情况映射")])]),a("li",[a("a",{attrs:{href:"#_2根据请求消息头内容映射"}},[t._v("②根据请求消息头内容映射")])]),a("li",[a("a",{attrs:{href:"#_3ant-风格通配符"}},[t._v("③Ant 风格通配符")])])])]),a("li",[a("a",{attrs:{href:"#_3、-modelattribute-注解"}},[t._v("3、@ModelAttribute 注解")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"第八节-其他不重要内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第八节-其他不重要内容"}},[t._v("#")]),t._v(" 第八节 其他不重要内容")]),t._v(" "),a("h2",{attrs:{id:"_1、springmvc-配置文件的默认位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、springmvc-配置文件的默认位置"}},[t._v("#")]),t._v(" 1、SpringMVC 配置文件的默认位置")]),t._v(" "),a("h3",{attrs:{id:"_1配置要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1配置要求"}},[t._v("#")]),t._v(" ①配置要求")]),t._v(" "),a("ul",[a("li",[t._v("配置文件存放目录：/WEB-INF 目录")]),t._v(" "),a("li",[t._v("文件名格式：[servlet-name]-servlet.xml\n"),a("ul",[a("li",[t._v("servlet-name 部分是在 web.xml 中配置 DispatcherServlet 时，servlet-name 标签的值")])])]),t._v(" "),a("li",[t._v("省略原理的 init-param")])]),t._v(" "),a("h3",{attrs:{id:"_2为什么不建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2为什么不建议"}},[t._v("#")]),t._v(" ②为什么不建议")]),t._v(" "),a("p",[t._v("除 web.xml 是 Tomcat 要求放在 WEB-INF 下，其他配置文件习惯上是放在类路径下。")]),t._v(" "),a("h2",{attrs:{id:"_2、请求映射其他方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、请求映射其他方式"}},[t._v("#")]),t._v(" 2、请求映射其他方式")]),t._v(" "),a("h3",{attrs:{id:"_1根据请求参数情况映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1根据请求参数情况映射"}},[t._v("#")]),t._v(" ①根据请求参数情况映射")]),t._v(" "),a("p",[t._v("使用 @RequestMapping 注解的 params 参数实现，表达式语法参见下面的例子：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("需求")]),t._v(" "),a("th",[t._v("映射方式")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("请求参数中必须包含userName")]),t._v(" "),a("td",[t._v('@RequestMapping(value = "/xxx", '),a("br"),t._v('params="userName")')])]),t._v(" "),a("tr",[a("td",[t._v("请求参数中不能包含userName")]),t._v(" "),a("td",[t._v('@RequestMapping(value = "/xxx", '),a("br"),t._v('params="!userName")')])]),t._v(" "),a("tr",[a("td",[t._v("请求参数中必须包含userName"),a("br"),t._v("且值必须为Tom2015")]),t._v(" "),a("td",[t._v('@RequestMapping(value = "/xxx", '),a("br"),t._v('params="userName=Tom2015")')])]),t._v(" "),a("tr",[a("td",[t._v("请求参数中必须包含userName"),a("br"),t._v("但值不能为Tom2015")]),t._v(" "),a("td",[t._v('@RequestMapping(value = "/xxx", '),a("br"),t._v('params="userName=!Tom2015")')])]),t._v(" "),a("tr",[a("td",[t._v("请求参数中必须包含userName"),a("br"),t._v("且值为Tom2015，"),a("br"),t._v("同时必须包含userPwd但值不限")]),t._v(" "),a("td",[t._v('@RequestMapping(value = "/xxx", '),a("br"),t._v('params={"userName=Tom2015","userPwd"} )')])])])]),t._v(" "),a("h3",{attrs:{id:"_2根据请求消息头内容映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2根据请求消息头内容映射"}},[t._v("#")]),t._v(" ②根据请求消息头内容映射")]),t._v(" "),a("p",[t._v("使用 @RequestMapping 注解的 headers 参数实现，表达式语法参见下面的例子：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("需求")]),t._v(" "),a("th",[t._v("映射方式")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("根据 Accept-Language:zh-CN,zh;q=0.8 映射")]),t._v(" "),a("td",[t._v("@RequestMapping ("),a("br"),t._v('value="/xxx",'),a("br"),t._v('headers= "Accept-Language=zh-CN,en;q=0.8" )')])])])]),t._v(" "),a("h3",{attrs:{id:"_3ant-风格通配符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3ant-风格通配符"}},[t._v("#")]),t._v(" ③Ant 风格通配符")]),t._v(" "),a("ul",[a("li",[t._v("英文问号：匹配一个字符")]),t._v(" "),a("li",[t._v("一个星号：匹配路径中的一层")]),t._v(" "),a("li",[t._v("两个连续星号：匹配路径中的多层")])]),t._v(" "),a("h2",{attrs:{id:"_3、-modelattribute-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、-modelattribute-注解"}},[t._v("#")]),t._v(" 3、@ModelAttribute 注解")]),t._v(" "),a("p",[t._v("handler 类中，选定一个方法标记 @ModelAttribute 注解。")]),t._v(" "),a("ul",[a("li",[t._v("效果1：在每个 handler 方法前执行")]),t._v(" "),a("li",[t._v("效果2：可以将某些数据提前存入请求域")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Controller")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAttrHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ModelAttribute")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSthBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initAttr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initValue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test/model/attr/one"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testModelAttrOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" modelAttribute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initAttr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"modelAttribute = "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" modelAttribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test/model/attr/two"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testModelAttrTwo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" modelAttribute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initAttr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"modelAttribute = "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" modelAttribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test/model/attr/three"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testModelAttrThree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" modelAttribute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initAttr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"modelAttribute = "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" modelAttribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br")])]),a("p",[a("RouterLink",{attrs:{to:"/pro001-fengJie/pro005-SpringMVC/lecture/chapter04/verse07.html"}},[t._v("上一节")]),t._v(" "),a("RouterLink",{attrs:{to:"/pro001-fengJie/pro005-SpringMVC/lecture/chapter04/index.html"}},[t._v("回目录")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);