(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),l=(n(0),n(233)),i={},o={id:"1072/Week14",title:"Week14",description:"# Week 14(2019/05/23) - \u81ea\u52d5\u90e8\u7f72\u3001\u81ea\u52d5\u6e2c\u8a66",source:"@site/docs/1072/Week14.md",permalink:"/docs/1072/Week14",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1072/Week14.md",sidebar:"someSidebar",previous:{title:"Week13",permalink:"/docs/1072/Week13"},next:{title:"Week15",permalink:"/docs/1072/Week15"}},c=[{value:"\u5b89\u88dd\u6b65\u9a5f",id:"\u5b89\u88dd\u6b65\u9a5f",children:[]},{value:"\u57f7\u884c",id:"\u57f7\u884c",children:[]},{value:"Playbook",id:"playbook",children:[]},{value:"CI (Continuous Integration)",id:"ci-continuous-integration",children:[]},{value:"CD (Continuous Delivery & Continuous Deployment)",id:"cd-continuous-delivery--continuous-deployment",children:[]},{value:"\u5e38\u898b CI/CD \u5de5\u5177",id:"\u5e38\u898b-cicd-\u5de5\u5177",children:[]},{value:"Drone",id:"drone",children:[]},{value:"Runner(CI Server)",id:"runnerci-server",children:[]},{value:"Drone Cloud",id:"drone-cloud",children:[]}],b={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"week-1420190523---\u81ea\u52d5\u90e8\u7f72\u3001\u81ea\u52d5\u6e2c\u8a66"},"Week 14(2019/05/23) - \u81ea\u52d5\u90e8\u7f72\u3001\u81ea\u52d5\u6e2c\u8a66"),Object(l.b)("p",null,"\u81ea\u52d5\u90e8\u7f72\u672c\u5468\u7c21\u5831 : ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1wJTCemM79a-d8FDMcgH6nDHAyifFsLjQzEL8xYDYnaw/edit?usp=sharing"}),"\u672c\u5468 Slide"),"\n\u81ea\u52d5\u6e2c\u8a66\u7c21\u5831 : ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/17LyztipJfLjisX3Xdi9DuHQwR2gw1hl7tvd9jcSZyqM/edit?usp=sharing"}),"\u7c21\u5831")),Object(l.b)("h1",{id:"ansible"},"Ansible"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7121\u4e2d\u9593\u4ee3\u7406"),Object(l.b)("li",{parentName:"ul"},"\u91cd\u8907\u7684\u6d41\u7a0b\u81ea\u52d5\u5316"),Object(l.b)("li",{parentName:"ul"},"\u6a21\u7d44\u5316"),Object(l.b)("li",{parentName:"ul"},"\u57fa\u790e\u5efa\u8a2d\u5373\u4ee3\u78bc")),Object(l.b)("h3",{id:"\u5b89\u88dd\u6b65\u9a5f"},"\u5b89\u88dd\u6b65\u9a5f"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"+ sudo apt-get install -y python-software-properties software-properties-common\n+ sudo add-apt-repository -y - ppa:ansible/ansible; sudo apt-get update\n+ sudo apt-get install -y ansible\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u88ab\u63a7\u7aef Node")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"+ sudo apt-get install -y openssh-server\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Server")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir ~/Ansible\ncd ~/Asnible\nvim ansible.cfg\nvim hosts\u7528\u65bc\u7de8\u8f2f\u4e3b\u6a5f\u7fa4\nsudo apt-get install -y sshpass\n")),Object(l.b)("h3",{id:"\u57f7\u884c"},"\u57f7\u884c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ansible all -m ping")," \u5617\u8a66 ping \u4e3b\u6a5f"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ansible all -m command -a \u201cecho Hi\u201d"))),Object(l.b)("h3",{id:"playbook"},"Playbook"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7d50\u69cb\u5316 Framework"),Object(l.b)("li",{parentName:"ul"},"\u8b93 Ansible \u6700\u4f73\u5316"),Object(l.b)("li",{parentName:"ul"},"Play (\u70ba\u7279\u5b9a\u76ee\u7684)"),Object(l.b)("li",{parentName:"ul"},"Task (\u57f7\u884c\u6b65\u9a5f)"),Object(l.b)("li",{parentName:"ul"},"Modules(Ansible \u6240\u63d0\u4f9b\u7684\u5404\u7a2e\u64cd\u4f5c\u65b9\u6cd5)"),Object(l.b)("li",{parentName:"ul"},"vim testConnect.yml")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),'---\n- hosts: server\n  tasks:\n    # Task 1: Test connection\n    - name: Test connection\n      ping:\n      register: message\n\n    # task 2\n    - name: Show result\n      debug:\n        msg: "{{ message }}"\n\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sudo apt install ansible-lint")," \u7528\u65bc\u8f14\u52a9"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ansible-playbook {testConnect.yml}"))),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://ithelp.ithome.com.tw/users/20031776/ironman/1022"}),"Ansible \u53c3\u8003")),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://legacy.gitbook.com/download/pdf/book/chusiang/automate-with-ansible"}),"Ansible \u6559\u5b78")),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/11YuRZpVyH1rr00qxe9JsjAipYcB7gGNYOlIMlV3kSYo/edit?fbclid=IwAR0702eNkcDdfi6KCdvWoBnY4Mh8buu7Wa708ZMLwTw1l1ZwgfamewKO3sM#slide=id.p"}),"\u5f37\u8005 Ansible \u6559\u5b78\u7c21\u5831")),Object(l.b)("h1",{id:"cicd"},"CI/CD"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/17LyztipJfLjisX3Xdi9DuHQwR2gw1hl7tvd9jcSZyqM/edit?usp=sharing"}),"\u7c21\u5831")),Object(l.b)("h3",{id:"ci-continuous-integration"},"CI (Continuous Integration)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6301\u7e8c\u6027\u6574\u5408 : \u81ea\u52d5\u9032\u884c\u5efa\u7f6e\uff0c\u6e2c\u8a66\uff0c\u56de\u5831\u932f\u8aa4")),Object(l.b)("h3",{id:"cd-continuous-delivery--continuous-deployment"},"CD (Continuous Delivery & Continuous Deployment)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6301\u7e8c\u6027\u767c\u5e03 : \u6240\u6709\u7684\u8b8a\u66f4\u90fd\u6703\u88ab\u81ea\u52d5\u90e8\u7f72\u5230\u751f\u7522\u74b0\u5883\u4e2d"),Object(l.b)("li",{parentName:"ul"},"\u6301\u7e8c\u6027\u90e8\u7f72 : \u6240\u6709\u7684\u8b8a\u66f4\u90fd\u53ef\u4ee5\u88ab\u90e8\u7f72\u5230\u751f\u7522\u74b0\u5883\u4e2d\uff0c\u4f46\u662f\u51fa\u65bc\u696d\u52d9\u8003\u616e\uff0c\u53ef\u4ee5\u9078\u64c7\u4e0d\u90e8\u7f72")),Object(l.b)("h3",{id:"\u5e38\u898b-cicd-\u5de5\u5177"},"\u5e38\u898b CI/CD \u5de5\u5177"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Jenkins : \u5c08\u6848\u8a2d\u5b9a\u8f03\u8907\u96dc\uff0c\u4e0d\u63a8\u85a6\u521d\u5b78\u8005\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"Travis CI"),Object(l.b)("li",{parentName:"ul"},"Bamboo"),Object(l.b)("li",{parentName:"ul"},"Drone")),Object(l.b)("h3",{id:"drone"},"Drone"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.drone.io/installation"}),"install"),"\n`")),Object(l.b)("h3",{id:"runnerci-server"},"Runner(CI Server)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"version control + Continuous Integration")),Object(l.b)("h3",{id:"drone-cloud"},"Drone Cloud"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.drone.io/"}),"https://cloud.drone.io/"))))}u.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,O=p["".concat(i,".").concat(d)]||p[d]||s[d]||l;return n?a.a.createElement(O,o({ref:t},b,{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);