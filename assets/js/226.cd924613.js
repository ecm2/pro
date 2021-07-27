(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1944:function(a,s,n){"use strict";n.r(s);var t=n(44),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1、简介"}},[a._v("1、简介")])]),t("li",[t("a",{attrs:{href:"#_2、实现factorybean接口"}},[a._v("2、实现FactoryBean接口")])]),t("li",[t("a",{attrs:{href:"#_3、配置bean"}},[a._v("3、配置bean")])]),t("li",[t("a",{attrs:{href:"#_4、测试获取bean"}},[a._v("4、测试获取bean")])])])]),t("p"),a._v(" "),t("h1",{attrs:{id:"实验十四-factorybean-机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验十四-factorybean-机制"}},[a._v("#")]),a._v(" 实验十四 FactoryBean 机制")]),a._v(" "),t("h2",{attrs:{id:"_1、简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、简介"}},[a._v("#")]),a._v(" 1、简介")]),a._v(" "),t("p",[a._v("FactoryBean 是 Spring 提供的一种"),t("span",{staticStyle:{color:"blue","font-weight":"bold"}},[a._v("整合第三方框架")]),a._v("的常用机制。和普通的 bean 不同，配置一个 FactoryBean 类型的 bean，在获取 bean 的时候得到的并不是 class 属性中配置的这个类的对象，而是 getObject() 方法的返回值。通过这种机制，Spring 可以帮我们把复杂组件创建的详细过程和繁琐细节都屏蔽起来，只把最简洁的使用界面展示给我们。")]),a._v(" "),t("p",[a._v("将来我们整合 Mybatis 时，Spring 就是通过 FactoryBean 机制来帮我们创建 SqlSessionFactory 对象的。")]),a._v(" "),t("p",[t("img",{attrs:{src:n(933),alt:"images"}})]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/*\n * Copyright 2002-2020 the original author or authors.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      https://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("beans"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("factory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Nullable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Interface to be implemented by objects used within a {@link BeanFactory} which\n * are themselves factories for individual objects. If a bean implements this\n * interface, it is used as a factory for an object to expose, not directly as a\n * bean instance that will be exposed itself.\n *\n * <p><b>NB: A bean that implements this interface cannot be used as a normal bean.</b>\n * A FactoryBean is defined in a bean style, but the object exposed for bean\n * references ({@link #getObject()}) is always the object that it creates.\n *\n * <p>FactoryBeans can support singletons and prototypes, and can either create\n * objects lazily on demand or eagerly on startup. The {@link SmartFactoryBean}\n * interface allows for exposing more fine-grained behavioral metadata.\n *\n * <p>This interface is heavily used within the framework itself, for example for\n * the AOP {@link org.springframework.aop.framework.ProxyFactoryBean} or the\n * {@link org.springframework.jndi.JndiObjectFactoryBean}. It can be used for\n * custom components as well; however, this is only common for infrastructure code.\n *\n * <p><b>{@code FactoryBean} is a programmatic contract. Implementations are not\n * supposed to rely on annotation-driven injection or other reflective facilities.</b>\n * {@link #getObjectType()} {@link #getObject()} invocations may arrive early in the\n * bootstrap process, even ahead of any post-processor setup. If you need access to\n * other beans, implement {@link BeanFactoryAware} and obtain them programmatically.\n *\n * <p><b>The container is only responsible for managing the lifecycle of the FactoryBean\n * instance, not the lifecycle of the objects created by the FactoryBean.</b> Therefore,\n * a destroy method on an exposed bean object (such as {@link java.io.Closeable#close()}\n * will <i>not</i> be called automatically. Instead, a FactoryBean should implement\n * {@link DisposableBean} and delegate any such close call to the underlying object.\n *\n * <p>Finally, FactoryBean objects participate in the containing BeanFactory's\n * synchronization of bean creation. There is usually no need for internal\n * synchronization other than for purposes of lazy initialization within the\n * FactoryBean itself (or the like).\n *\n * @author Rod Johnson\n * @author Juergen Hoeller\n * @since 08.03.2003\n * @param <T> the bean type\n * @see org.springframework.beans.factory.BeanFactory\n * @see org.springframework.aop.framework.ProxyFactoryBean\n * @see org.springframework.jndi.JndiObjectFactoryBean\n */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FactoryBean")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n\t * The name of an attribute that can be\n\t * {@link org.springframework.core.AttributeAccessor#setAttribute set} on a\n\t * {@link org.springframework.beans.factory.config.BeanDefinition} so that\n\t * factory beans can signal their object type when it can't be deduced from\n\t * the factory bean class.\n\t * @since 5.2\n\t */")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" OBJECT_TYPE_ATTRIBUTE "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"factoryBeanObjectType"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n\t * Return an instance (possibly shared or independent) of the object\n\t * managed by this factory.\n\t * <p>As with a {@link BeanFactory}, this allows support for both the\n\t * Singleton and Prototype design pattern.\n\t * <p>If this FactoryBean is not fully initialized yet at the time of\n\t * the call (for example because it is involved in a circular reference),\n\t * throw a corresponding {@link FactoryBeanNotInitializedException}.\n\t * <p>As of Spring 2.0, FactoryBeans are allowed to return {@code null}\n\t * objects. The factory will consider this as normal value to be used; it\n\t * will not throw a FactoryBeanNotInitializedException in this case anymore.\n\t * FactoryBean implementations are encouraged to throw\n\t * FactoryBeanNotInitializedException themselves now, as appropriate.\n\t * @return an instance of the bean (can be {@code null})\n\t * @throws Exception in case of creation errors\n\t * @see FactoryBeanNotInitializedException\n\t */")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Nullable")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n\t * Return the type of object that this FactoryBean creates,\n\t * or {@code null} if not known in advance.\n\t * <p>This allows one to check for specific types of beans without\n\t * instantiating objects, for example on autowiring.\n\t * <p>In the case of implementations that are creating a singleton object,\n\t * this method should try to avoid singleton creation as far as possible;\n\t * it should rather estimate the type in advance.\n\t * For prototypes, returning a meaningful type here is advisable too.\n\t * <p>This method can be called <i>before</i> this FactoryBean has\n\t * been fully initialized. It must not rely on state created during\n\t * initialization; of course, it can still use such state if available.\n\t * <p><b>NOTE:</b> Autowiring will simply ignore FactoryBeans that return\n\t * {@code null} here. Therefore it is highly recommended to implement\n\t * this method properly, using the current state of the FactoryBean.\n\t * @return the type of object that this FactoryBean creates,\n\t * or {@code null} if not known at the time of the call\n\t * @see ListableBeanFactory#getBeansOfType\n\t */")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Nullable")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getObjectType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n\t * Is the object managed by this factory a singleton? That is,\n\t * will {@link #getObject()} always return the same object\n\t * (a reference that can be cached)?\n\t * <p><b>NOTE:</b> If a FactoryBean indicates to hold a singleton object,\n\t * the object returned from {@code getObject()} might get cached\n\t * by the owning BeanFactory. Hence, do not return {@code true}\n\t * unless the FactoryBean always exposes the same reference.\n\t * <p>The singleton status of the FactoryBean itself will generally\n\t * be provided by the owning BeanFactory; usually, it has to be\n\t * defined as singleton there.\n\t * <p><b>NOTE:</b> This method returning {@code false} does not\n\t * necessarily indicate that returned objects are independent instances.\n\t * An implementation of the extended {@link SmartFactoryBean} interface\n\t * may explicitly indicate independent instances through its\n\t * {@link SmartFactoryBean#isPrototype()} method. Plain {@link FactoryBean}\n\t * implementations which do not implement this extended interface are\n\t * simply assumed to always return independent instances if the\n\t * {@code isSingleton()} implementation returns {@code false}.\n\t * <p>The default implementation returns {@code true}, since a\n\t * {@code FactoryBean} typically manages a singleton instance.\n\t * @return whether the exposed object is a singleton\n\t * @see #getObject()\n\t * @see SmartFactoryBean#isPrototype()\n\t */")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isSingleton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br"),t("span",{staticClass:"line-number"},[a._v("40")]),t("br"),t("span",{staticClass:"line-number"},[a._v("41")]),t("br"),t("span",{staticClass:"line-number"},[a._v("42")]),t("br"),t("span",{staticClass:"line-number"},[a._v("43")]),t("br"),t("span",{staticClass:"line-number"},[a._v("44")]),t("br"),t("span",{staticClass:"line-number"},[a._v("45")]),t("br"),t("span",{staticClass:"line-number"},[a._v("46")]),t("br"),t("span",{staticClass:"line-number"},[a._v("47")]),t("br"),t("span",{staticClass:"line-number"},[a._v("48")]),t("br"),t("span",{staticClass:"line-number"},[a._v("49")]),t("br"),t("span",{staticClass:"line-number"},[a._v("50")]),t("br"),t("span",{staticClass:"line-number"},[a._v("51")]),t("br"),t("span",{staticClass:"line-number"},[a._v("52")]),t("br"),t("span",{staticClass:"line-number"},[a._v("53")]),t("br"),t("span",{staticClass:"line-number"},[a._v("54")]),t("br"),t("span",{staticClass:"line-number"},[a._v("55")]),t("br"),t("span",{staticClass:"line-number"},[a._v("56")]),t("br"),t("span",{staticClass:"line-number"},[a._v("57")]),t("br"),t("span",{staticClass:"line-number"},[a._v("58")]),t("br"),t("span",{staticClass:"line-number"},[a._v("59")]),t("br"),t("span",{staticClass:"line-number"},[a._v("60")]),t("br"),t("span",{staticClass:"line-number"},[a._v("61")]),t("br"),t("span",{staticClass:"line-number"},[a._v("62")]),t("br"),t("span",{staticClass:"line-number"},[a._v("63")]),t("br"),t("span",{staticClass:"line-number"},[a._v("64")]),t("br"),t("span",{staticClass:"line-number"},[a._v("65")]),t("br"),t("span",{staticClass:"line-number"},[a._v("66")]),t("br"),t("span",{staticClass:"line-number"},[a._v("67")]),t("br"),t("span",{staticClass:"line-number"},[a._v("68")]),t("br"),t("span",{staticClass:"line-number"},[a._v("69")]),t("br"),t("span",{staticClass:"line-number"},[a._v("70")]),t("br"),t("span",{staticClass:"line-number"},[a._v("71")]),t("br"),t("span",{staticClass:"line-number"},[a._v("72")]),t("br"),t("span",{staticClass:"line-number"},[a._v("73")]),t("br"),t("span",{staticClass:"line-number"},[a._v("74")]),t("br"),t("span",{staticClass:"line-number"},[a._v("75")]),t("br"),t("span",{staticClass:"line-number"},[a._v("76")]),t("br"),t("span",{staticClass:"line-number"},[a._v("77")]),t("br"),t("span",{staticClass:"line-number"},[a._v("78")]),t("br"),t("span",{staticClass:"line-number"},[a._v("79")]),t("br"),t("span",{staticClass:"line-number"},[a._v("80")]),t("br"),t("span",{staticClass:"line-number"},[a._v("81")]),t("br"),t("span",{staticClass:"line-number"},[a._v("82")]),t("br"),t("span",{staticClass:"line-number"},[a._v("83")]),t("br"),t("span",{staticClass:"line-number"},[a._v("84")]),t("br"),t("span",{staticClass:"line-number"},[a._v("85")]),t("br"),t("span",{staticClass:"line-number"},[a._v("86")]),t("br"),t("span",{staticClass:"line-number"},[a._v("87")]),t("br"),t("span",{staticClass:"line-number"},[a._v("88")]),t("br"),t("span",{staticClass:"line-number"},[a._v("89")]),t("br"),t("span",{staticClass:"line-number"},[a._v("90")]),t("br"),t("span",{staticClass:"line-number"},[a._v("91")]),t("br"),t("span",{staticClass:"line-number"},[a._v("92")]),t("br"),t("span",{staticClass:"line-number"},[a._v("93")]),t("br"),t("span",{staticClass:"line-number"},[a._v("94")]),t("br"),t("span",{staticClass:"line-number"},[a._v("95")]),t("br"),t("span",{staticClass:"line-number"},[a._v("96")]),t("br"),t("span",{staticClass:"line-number"},[a._v("97")]),t("br"),t("span",{staticClass:"line-number"},[a._v("98")]),t("br"),t("span",{staticClass:"line-number"},[a._v("99")]),t("br"),t("span",{staticClass:"line-number"},[a._v("100")]),t("br"),t("span",{staticClass:"line-number"},[a._v("101")]),t("br"),t("span",{staticClass:"line-number"},[a._v("102")]),t("br"),t("span",{staticClass:"line-number"},[a._v("103")]),t("br"),t("span",{staticClass:"line-number"},[a._v("104")]),t("br"),t("span",{staticClass:"line-number"},[a._v("105")]),t("br"),t("span",{staticClass:"line-number"},[a._v("106")]),t("br"),t("span",{staticClass:"line-number"},[a._v("107")]),t("br"),t("span",{staticClass:"line-number"},[a._v("108")]),t("br"),t("span",{staticClass:"line-number"},[a._v("109")]),t("br"),t("span",{staticClass:"line-number"},[a._v("110")]),t("br"),t("span",{staticClass:"line-number"},[a._v("111")]),t("br"),t("span",{staticClass:"line-number"},[a._v("112")]),t("br"),t("span",{staticClass:"line-number"},[a._v("113")]),t("br"),t("span",{staticClass:"line-number"},[a._v("114")]),t("br"),t("span",{staticClass:"line-number"},[a._v("115")]),t("br"),t("span",{staticClass:"line-number"},[a._v("116")]),t("br"),t("span",{staticClass:"line-number"},[a._v("117")]),t("br"),t("span",{staticClass:"line-number"},[a._v("118")]),t("br"),t("span",{staticClass:"line-number"},[a._v("119")]),t("br"),t("span",{staticClass:"line-number"},[a._v("120")]),t("br"),t("span",{staticClass:"line-number"},[a._v("121")]),t("br"),t("span",{staticClass:"line-number"},[a._v("122")]),t("br"),t("span",{staticClass:"line-number"},[a._v("123")]),t("br"),t("span",{staticClass:"line-number"},[a._v("124")]),t("br"),t("span",{staticClass:"line-number"},[a._v("125")]),t("br"),t("span",{staticClass:"line-number"},[a._v("126")]),t("br"),t("span",{staticClass:"line-number"},[a._v("127")]),t("br"),t("span",{staticClass:"line-number"},[a._v("128")]),t("br"),t("span",{staticClass:"line-number"},[a._v("129")]),t("br"),t("span",{staticClass:"line-number"},[a._v("130")]),t("br"),t("span",{staticClass:"line-number"},[a._v("131")]),t("br"),t("span",{staticClass:"line-number"},[a._v("132")]),t("br"),t("span",{staticClass:"line-number"},[a._v("133")]),t("br"),t("span",{staticClass:"line-number"},[a._v("134")]),t("br"),t("span",{staticClass:"line-number"},[a._v("135")]),t("br"),t("span",{staticClass:"line-number"},[a._v("136")]),t("br"),t("span",{staticClass:"line-number"},[a._v("137")]),t("br"),t("span",{staticClass:"line-number"},[a._v("138")]),t("br"),t("span",{staticClass:"line-number"},[a._v("139")]),t("br"),t("span",{staticClass:"line-number"},[a._v("140")]),t("br"),t("span",{staticClass:"line-number"},[a._v("141")]),t("br"),t("span",{staticClass:"line-number"},[a._v("142")]),t("br"),t("span",{staticClass:"line-number"},[a._v("143")]),t("br"),t("span",{staticClass:"line-number"},[a._v("144")]),t("br"),t("span",{staticClass:"line-number"},[a._v("145")]),t("br"),t("span",{staticClass:"line-number"},[a._v("146")]),t("br"),t("span",{staticClass:"line-number"},[a._v("147")]),t("br"),t("span",{staticClass:"line-number"},[a._v("148")]),t("br"),t("span",{staticClass:"line-number"},[a._v("149")]),t("br")])]),t("h2",{attrs:{id:"_2、实现factorybean接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、实现factorybean接口"}},[a._v("#")]),a._v(" 2、实现FactoryBean接口")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 实现FactoryBean接口时需要指定泛型")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 泛型类型就是当前工厂要生产的对象的类型")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HappyFactoryBean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FactoryBean")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HappyMachine")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" machineName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMachineName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" machineName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setMachineName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" machineName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("machineName "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" machineName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HappyMachine")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 方法内部模拟创建、设置一个对象的复杂过程")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HappyMachine")]),a._v(" happyMachine "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HappyMachine")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n        happyMachine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setMachineName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("machineName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" happyMachine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getObjectType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 返回要生产的对象的类型")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HappyMachine")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br")])]),t("h2",{attrs:{id:"_3、配置bean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置bean"}},[a._v("#")]),a._v(" 3、配置bean")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 实验十四 FactoryBean机制 --\x3e")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 这个bean标签中class属性指定的是HappyFactoryBean，但是将来从这里获取的bean是HappyMachine对象 --\x3e")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("happyMachine3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("com.atguigu.ioc.factory.HappyFactoryBean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- property标签仍然可以用来通过setXxx()方法给属性赋值 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("machineName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("value")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("iceCreamMachine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("bean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h2",{attrs:{id:"_4、测试获取bean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、测试获取bean"}},[a._v("#")]),a._v(" 4、测试获取bean")]),a._v(" "),t("ul",[t("li",[a._v("配置的bean：HappyFactoryBean")]),a._v(" "),t("li",[a._v("获取bean后得到的bean：HappyMachine")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Test")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("testExperiment14")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HappyMachine")]),a._v(" happyMachine3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HappyMachine")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" iocContainer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"happyMachine3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" machineName "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" happyMachine3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMachineName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"machineName = "')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" machineName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[t("RouterLink",{attrs:{to:"/pro001-fengJie/pro004-Spring/lecture/chapter01/verse03/experiment13.html"}},[a._v("上一个实验")]),a._v(" "),t("RouterLink",{attrs:{to:"/pro001-fengJie/pro004-Spring/lecture/chapter01/verse03.html"}},[a._v("回目录")]),a._v(" "),t("RouterLink",{attrs:{to:"/pro001-fengJie/pro004-Spring/lecture/chapter01/verse03/experiment15.html"}},[a._v("下一个实验")])],1)])}),[],!1,null,null,null);s.default=e.exports},933:function(a,s,n){a.exports=n.p+"assets/img/img020.11bf6653.png"}}]);