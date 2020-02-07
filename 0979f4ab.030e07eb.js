(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(233)),c={},i={id:"1062/Week-09",title:"Week-09",description:"###### tags: `ncnu` `1062` `lsa`",source:"@site/docs/1062/Week-09.md",permalink:"/docs/1062/Week-09",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1062/Week-09.md",sidebar:"someSidebar",previous:{title:"Week-08",permalink:"/docs/1062/Week-08"},next:{title:"Week-10",permalink:"/docs/1062/Week-10"}},l=[{value:"\u5e38\u898b Web Framework",id:"\u5e38\u898b-web-framework",children:[{value:"\u597d\u8655",id:"\u597d\u8655",children:[]},{value:"\u8ab0\u5728\u7528",id:"\u8ab0\u5728\u7528",children:[]},{value:"\u5feb\u901f\u6e05\u9664cookie",id:"\u5feb\u901f\u6e05\u9664cookie",children:[]},{value:"Build a simple SDN network",id:"build-a-simple-sdn-network",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h6",{id:"tags-ncnu-1062-lsa"},"tags: ",Object(o.b)("inlineCode",{parentName:"h6"},"ncnu")," ",Object(o.b)("inlineCode",{parentName:"h6"},"1062")," ",Object(o.b)("inlineCode",{parentName:"h6"},"lsa")),Object(o.b)("h1",{id:"week-0920180510"},"Week 09(2018/05/10)"),Object(o.b)("h1",{id:"web-framework"},"Web Framework"),Object(o.b)("h2",{id:"\u5e38\u898b-web-framework"},"\u5e38\u898b Web Framework"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"PHP Laravel"),Object(o.b)("li",{parentName:"ol"},"Ruby on Rails"),Object(o.b)("li",{parentName:"ol"},"Python Django"),Object(o.b)("li",{parentName:"ol"},"Node.js Express "),Object(o.b)("li",{parentName:"ol"},"Java JSP")),Object(o.b)("h3",{id:"\u597d\u8655"},"\u597d\u8655"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u6a21\u7d44\u5316\u8a2d\u8a08\u7d71\u4e00 coding style\uff0c\u4e5f\u65b9\u4fbf\u65e5\u5f8c\u7dad\u8b77"),Object(o.b)("li",{parentName:"ol"},"\u524d\u5f8c\u7aef\u5206\u96e2"),Object(o.b)("li",{parentName:"ol"},"\u5206\u96e2\u5546\u696d\u908f\u8f2f\u3001\u8def\u7531\u3001\u8cc7\u6599\u5eab\u5b58\u53d6\u3001\u5448\u73fe\u65b9\u5f0f"),Object(o.b)("li",{parentName:"ol"},"\u8846\u591a\u5957\u4ef6\u5eab"),Object(o.b)("li",{parentName:"ol"},"\u9632\u5404\u7a2e\u653b\u64ca (SQL injection, XSS, CSRF\u2026)")),Object(o.b)("h3",{id:"\u8ab0\u5728\u7528"},"\u8ab0\u5728\u7528"),Object(o.b)("h4",{id:"laravel"},"Laravel"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"9GAG")),Object(o.b)("h4",{id:"django"},"Django"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Instagram"),Object(o.b)("li",{parentName:"ol"},"Mozilla Firefox, MDN"),Object(o.b)("li",{parentName:"ol"},"OpenStack Horizon")),Object(o.b)("h4",{id:"ruby-on-rails"},"Ruby on Rails"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Airbnb"),Object(o.b)("li",{parentName:"ol"},"Github"),Object(o.b)("li",{parentName:"ol"},"Twitter")),Object(o.b)("h4",{id:"express"},"Express"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"IBM"),Object(o.b)("li",{parentName:"ol"},"FOX SPORTS"),Object(o.b)("li",{parentName:"ol"},"Yandex\nDemo time")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/jackkuo/django_security_demo/"}),"Docker\u9023\u7d50"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"$ docker pull jackkuo/django_security_demo"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"$ docker run -it -p 8001:8001 jackkuo/django_security_demo"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"$ docker ps -a"),"\u770b\u54ea\u4e9b\u5728run"),Object(o.b)("h4",{id:"csrf"},"CSRF"),Object(o.b)("p",null,"\u4ee5\u4e0b\u6a94\u6848\u5168\u90e8\u653e\u5728 localhost \u53ef\u4ee5\u88ab\u81ea\u5df1 WebServer(Apache, lighttpd) \u8b80\u53d6\u7684\u8def\u5f91\n",Object(o.b)("inlineCode",{parentName:"p"},"cd /var/www/[WebServer]")),Object(o.b)("p",null,"setcookie.php"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'    <?php\n    $value = \'Cookie is LSA\';\n    \n    setcookie("TestCookie", $value);\n    setcookie("TestCookie", $value, time()+3600);  /* expire in 1 hour */\n    ?>\n')),Object(o.b)("p",null,"send.html"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'    <html>\n    <head>\n    <meta charset="utf-8"/>\n    </head>\n    <form id="form1" action="http://localhost:8001/" method="POST">\n    <input  type="hidden" value="csrf la" name="name">\n    <input type="submit">\n    </form>\n    <script type="text/javascript">\n    function send(){\n      form1.submit();\n    }\n    setTimeout(send, 3500);\n    <\/script>\n    </html>\n')),Object(o.b)("p",null,"receive.php"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'    <?php\n    \n    if(!empty($_POST["name"]))\n        echo $_POST["name"]."<br>";\n    else\n        echo "nothing<br>";\n    \n    if(isset($_COOKIE[\'TestCookie\']))\n        echo $_COOKIE[\'TestCookie\'];\n    \n    ?>\n')),Object(o.b)("h3",{id:"\u5feb\u901f\u6e05\u9664cookie"},"\u5feb\u901f\u6e05\u9664cookie"),Object(o.b)("p",null,"\u6c92\u4e8b\u5225\u9ede\u64ca\u4ee5\u4e0b\u9023\u7d50 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://superlogout.com/"}),"https://superlogout.com/"),"\n(\u6e05\u9664\u767b\u5165\u72c0\u614b)"),Object(o.b)("h1",{id:"sdn-introduction"},"SDN Introduction"),Object(o.b)("h3",{id:"build-a-simple-sdn-network"},"Build a simple SDN network"),Object(o.b)("p",null,"1) ",Object(o.b)("inlineCode",{parentName:"p"},"sudo apt install mininet"),"\n2) ",Object(o.b)("inlineCode",{parentName:"p"},"sudo mn --controller...")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://sites.google.com/site/sdnruantidingyiwanglu/vmware-xia-zai-yu-an-zhuang/mininet"}),"mininet\u5b89\u88dd\u53ca\u4f7f\u7528\u65b9\u6cd5")))}p.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,O=u["".concat(c,".").concat(s)]||u[s]||m[s]||o;return n?a.a.createElement(O,i({ref:t},b,{components:n})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);