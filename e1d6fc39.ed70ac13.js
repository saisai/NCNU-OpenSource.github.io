(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{217:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(9),c=(r(0),r(233)),i={},p={id:"1072/Week12",title:"Week12",description:"# Week 12(2019/05/09) - \u8cc7\u8a0a\u5b89\u5168",source:"@site/docs/1072/Week12.md",permalink:"/docs/1072/Week12",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1072/Week12.md",sidebar:"someSidebar",previous:{title:"Week11",permalink:"/docs/1072/Week11"},next:{title:"Week13",permalink:"/docs/1072/Week13"}},b=[{value:"\u5e38\u898b Web \u8cc7\u5b89 CTF \u7df4\u7fd2\u7ad9",id:"\u5e38\u898b-web-\u8cc7\u5b89-ctf-\u7df4\u7fd2\u7ad9",children:[]},{value:"SSRF",id:"ssrf",children:[]},{value:"XSS & CSRF (Web \u6f0f\u6d1e)",id:"xss--csrf-web-\u6f0f\u6d1e",children:[]}],o={rightToc:b};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"week-1220190509---\u8cc7\u8a0a\u5b89\u5168"},"Week 12(2019/05/09) - \u8cc7\u8a0a\u5b89\u5168"),Object(c.b)("p",null,":::danger\n\u672c\u6b21\u5171\u7b46\u8acb\u52ff\u8a18\u8f09\u6f0f\u6d1e\u76f8\u95dc\u5167\u5bb9\uff0c\u50c5\u8a18\u8f09\u5de5\u5177\u3001\u65b9\u6cd5\u8207\u88dc\u5145\u77e5\u8b58\n:::"),Object(c.b)("h2",{id:"\u5e38\u898b-web-\u8cc7\u5b89-ctf-\u7df4\u7fd2\u7ad9"},"\u5e38\u898b Web \u8cc7\u5b89 CTF \u7df4\u7fd2\u7ad9"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://ctf.bluet.org:3000"}),"CTF Bluet.org \u8001\u5e2b\u7684\u7ad9"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://portswigger.net/burp"}),"Burp Suite"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Firefox")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://pentestmonkey.net/category/cheat-sheet/sql-injection"}),"Pentest Monkey cheat sheetss"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.owasp.org/index.php/Main_Page"}),"OWASP"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/sqlmapproject/sqlmap"}),"sqlmap-github"),"\n-",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://sqlmap.org/"}),"sqlmap official website"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5927\u99ac\u3001\u5c0f\u99ac WebShell \u4e00\u53e5\u8a71\u6728\u99ac"))),Object(c.b)("h2",{id:"ssrf"},"SSRF"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.netsparker.com/blog/web-security/server-side-request-forgery-vulnerability-ssrf/"}),"what is ssrf")),Object(c.b)("h2",{id:"xss--csrf-web-\u6f0f\u6d1e"},"XSS & CSRF (Web \u6f0f\u6d1e)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://zh.wikipedia.org/zh-tw/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC"}),"XSS")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://zh.wikipedia.org/zh-tw/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0"}),"CSRF"))))}l.isMDXComponent=!0},233:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},u=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=l(r),O=n,f=u["".concat(i,".").concat(O)]||u[O]||s[O]||c;return r?a.a.createElement(f,p({ref:t},o,{components:r})):a.a.createElement(f,p({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=O;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<c;o++)i[o]=r[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);