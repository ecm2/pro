(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1959:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1、切入点表达式的作用"}},[t._v("1、切入点表达式的作用")])]),e("li",[e("a",{attrs:{href:"#_2、语法细节"}},[t._v("2、语法细节")])]),e("li",[e("a",{attrs:{href:"#_3、总结"}},[t._v("3、总结")])])])]),e("p"),t._v(" "),e("h1",{attrs:{id:"实验四-切入点表达式语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实验四-切入点表达式语法"}},[t._v("#")]),t._v(" 实验四 切入点表达式语法")]),t._v(" "),e("h2",{attrs:{id:"_1、切入点表达式的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、切入点表达式的作用"}},[t._v("#")]),t._v(" 1、切入点表达式的作用")]),t._v(" "),e("p",[e("img",{attrs:{src:s(950),alt:"images"}})]),t._v(" "),e("h2",{attrs:{id:"_2、语法细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、语法细节"}},[t._v("#")]),t._v(" 2、语法细节")]),t._v(" "),e("ul",[e("li",[t._v("用*号代替“权限修饰符”和“返回值”部分表示“权限修饰符”和“返回值”不限")]),t._v(" "),e("li",[t._v("在包名的部分，一个“*”号只能代表包的层次结构中的一层，表示这一层是任意的。\n"),e("ul",[e("li",[t._v("例如：*.Hello匹配com.Hello，不匹配com.atguigu.Hello")])])]),t._v(" "),e("li",[t._v("在包名的部分，使用“*..”表示包名任意、包的层次深度任意")]),t._v(" "),e("li",[t._v("在类名的部分，类名部分整体用*号代替，表示类名任意")]),t._v(" "),e("li",[t._v("在类名的部分，可以使用*号代替类名的一部分")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("上面例子表示匹配所有名称以Service结尾的类或接口")]),t._v(" "),e("ul",[e("li",[t._v("在方法名部分，可以使用*号表示方法名任意")]),t._v(" "),e("li",[t._v("在方法名部分，可以使用*号代替方法名的一部分")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Operation")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("上面例子表示匹配所有方法名以Operation结尾的方法")]),t._v(" "),e("ul",[e("li",[t._v("在方法参数列表部分，使用(..)表示参数列表任意")]),t._v(" "),e("li",[t._v("在方法参数列表部分，使用(int,..)表示参数列表以一个int类型的参数开头")]),t._v(" "),e("li",[t._v("在方法参数列表部分，基本数据类型和对应的包装类型是不一样的\n"),e("ul",[e("li",[t._v("切入点表达式中使用 int 和实际方法中 Integer 是不匹配的")])])]),t._v(" "),e("li",[t._v("在方法返回值部分，如果想要明确指定一个返回值类型，那么必须同时写明权限修饰符")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("execution")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("上面例子是对的，下面例子是错的：")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("execution")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("但是public *表示权限修饰符明确，返回值任意是可以的。")]),t._v(" "),e("ul",[e("li",[t._v("对于execution()表达式整体可以使用三个逻辑运算符号\n"),e("ul",[e("li",[t._v("execution() || execution()表示满足两个execution()中的任何一个即可")]),t._v(" "),e("li",[t._v("execution() && execution()表示两个execution()表达式必须都满足")]),t._v(" "),e("li",[t._v("!execution()表示不满足表达式的其他方法")])])])]),t._v(" "),e("h2",{attrs:{id:"_3、总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、总结"}},[t._v("#")]),t._v(" 3、总结")]),t._v(" "),e("p",[e("img",{attrs:{src:s(951),alt:"images"}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("虽然我们上面介绍过的切入点表达式语法细节很多，有很多变化，但是实际上具体在项目中应用时有比较固定的写法。")]),t._v(" "),e("p",[t._v("典型场景：在基于 XML 的声明式事务配置中需要指定切入点表达式。这个切入点表达式通常都会套用到所有 Service 类（接口）的所有方法。那么切入点表达式将如下所示：")]),t._v(" "),e("p",[t._v("execution(* *..*Service.*(..))")])]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pro001-fengJie/pro004-Spring/lecture/chapter02/verse05/experiment03.html"}},[t._v("上一个实验")]),t._v(" "),e("RouterLink",{attrs:{to:"/pro001-fengJie/pro004-Spring/lecture/chapter02/verse05.html"}},[t._v("回目录")]),t._v(" "),e("RouterLink",{attrs:{to:"/pro001-fengJie/pro004-Spring/lecture/chapter02/verse05/experiment05.html"}},[t._v("下一个实验")])],1)])}),[],!1,null,null,null);a.default=n.exports},950:function(t,a,s){t.exports=s.p+"assets/img/img028.cb7f2153.png"},951:function(t,a,s){t.exports=s.p+"assets/img/img011.dde1a79a.png"}}]);