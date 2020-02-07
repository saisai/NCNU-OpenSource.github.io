(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(1),a=n(9),c=(n(0),n(233)),b={},l={id:"1081/Week2",title:"Week2",description:"# Week 02(2019/09/19)",source:"@site/docs/1081/Week2.md",permalink:"/docs/1081/Week2",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1081/Week2.md",sidebar:"someSidebar",previous:{title:"Week18",permalink:"/docs/1072/Week18"},next:{title:"Week3",permalink:"/docs/1081/Week3"}},p=[{value:"\u6307\u4ee4",id:"\u6307\u4ee4",children:[]}],u={rightToc:p};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"week-0220190919"},"Week 02(2019/09/19)"),Object(c.b)("h2",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5c07\u8edf\u9ad4\u4e0b\u8f09\u6e90\u63db\u6210 ftp.ubuntu-tw.net(\u8a72\u8cc7\u6599\u6e90\u5728\u66a8\u5927)\n",Object(c.b)("img",Object(r.a)({parentName:"li"},{src:"https://i.imgur.com/lzexOHI.png",alt:null})))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6216\u4f7f\u7528\u6307\u4ee4\u65b9\u5f0f\u4f86\u66ff\u63db:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo sed -i 's/tw.archive.ubuntu.com/ftp.ubuntu-tw.net/g' /etc/apt/sources.list\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u66f4\u65b0\u8edf\u9ad4\u8cc7\u6599\u5eab\uff08source list\uff09:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u66f4\u65b0\u6536\u85cf\u904e\u7684\u8edf\u9ad4\u5217\u8868\uff1asudo apt update\napt\uff1a\u8edf\u9ad4\u7ba1\u7406\u5de5\u5177\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8df3\u51fa\u8aaa\u660e\u6587\u4ef6\uff1a\n",Object(c.b)("inlineCode",{parentName:"p"},"<instruction> --help"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u6307\u4ee4\u7684\u8aaa\u660e\u6587\u4ef6:\n",Object(c.b)("inlineCode",{parentName:"p"},"man <instruction>"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"tab")," \u88dc\u5b8c\u6307\u4ee4")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u9700\u8981 root \u6b0a\u9650\u6642\n\u5728\u6307\u4ee4\u524d\u9762\u52a0\u4e0a sudo (super user do)\u4f86\u66ab\u6642\u53d6\u5f97\u6b0a\u9650")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5c07\u76ee\u524d\u6b0a\u9650\u6539\u70ba # (super user):\n",Object(c.b)("inlineCode",{parentName:"p"},"sudo -s"),"\n\u5c07\u6b0a\u9650\u6539\u56de\u4e00\u822c\u4f7f\u7528\u8005$\uff1a\n",Object(c.b)("inlineCode",{parentName:"p"},"exit"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5217\u51fa\u53ef\u66f4\u65b0\u8edf\u9ad4\u5217\u8868\uff1a"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"apt list --upgradable \n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5347\u7d1a\u5957\u4ef6:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo apt dist-upgrade\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u67e5\u8a62\u8edf\u9ad4\u76f8\u95dc\u5167\u5bb9:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"apt search <\u6b32\u67e5\u8a62\u7684\u8edf\u9ad4\u5957\u4ef6>\napt-cache search <\u5957\u4ef6> (\u756b\u9762\u8f03\u6574\u6f54)\napt-cache search xxx | grep xxx\n# grep \u53ef\u904e\u6ffe\u51fa\u6709\u78ba\u5207\u7684\u641c\u5c0b\u8a5e\u5f59\u7684\u7d50\u679c\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"apt install \u5982\u679c\u8df3\u51fa ","[Y/n]"," \u4ee3\u8868\u8a72\u5957\u4ef6\u6709\u5176\u4ed6\u76f8\u4f9d\u5957\u4ef6\uff0c\u5927\u5beb Y \u4ee3\u8868\u9810\u8a2d(\u76f4\u63a5\u6309 Enter \u5c31\u9078\u9810\u8a2d)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u76ee\u9304\u76f8\u95dc\uff1a"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u986f\u793a\u7576\u524d\u76ee\u9304\u8def\u5f91\uff1apwd\n\u5207\u63db\u56de\u5bb6\u76ee\u9304\uff1acd \n\u56de\u4e0a\u4e00\u5c64\u76ee\u9304\uff1acd ..\n\u5207\u63db\u6307\u5b9a\u76ee\u9304\uff1acd /xx/yy/\n\u5370\u51fa\u73fe\u5728\u76ee\u9304\u88e1\u6709\u54ea\u4e9b\u6a94\u6848\uff1als (\u6697\u85cd\u8272\u76ee\u9304 \u6de1\u85cd\u8272\u6a94\u6848 \u7da0\u8272\u7279\u6b8a\u96b1\u85cf\u6a94\u6848)\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"ubuntu \u7248\u672c\u865f\u547d\u540d\u898f\u5247\u70ba:\n\u897f\u5143\u5e74/\u6708\u4efd (ex. 16.04:2016/04, 18.04:2018/04 )\n\u6bcf\u5169\u5e74\u66f4\u65b0\u4e00\u6b21 LTS \u7248\u672c")))}i.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},o=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),o=i(n),m=r,j=o["".concat(b,".").concat(m)]||o[m]||O[m]||c;return n?a.a.createElement(j,l({ref:t},u,{components:n})):a.a.createElement(j,l({ref:t},u))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var u=2;u<c;u++)b[u]=n[u];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);