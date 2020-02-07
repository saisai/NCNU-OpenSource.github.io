(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return o}));var r=n(1),a=n(9),l=(n(0),n(233)),c={},b={id:"1081/Week10",title:"Week10",description:"# Week 10",source:"@site/docs/1081/Week10.md",permalink:"/docs/1081/Week10",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1081/Week10.md",sidebar:"someSidebar",previous:{title:"Week9",permalink:"/docs/1081/Week9"},next:{title:"Week11",permalink:"/docs/1081/Week11"}},p=[{value:"nat table",id:"nat-table",children:[]},{value:"\u8981\u8b93 student \u900f\u904e firewall \u9001\u5c01\u5305\u51fa\u53bb",id:"\u8981\u8b93-student-\u900f\u904e-firewall-\u9001\u5c01\u5305\u51fa\u53bb",children:[]},{value:"\u8a2d\u597dgateway\uff0c\u4f46firewall\u4e0d\u77e5\u9053\u600e\u9ebc\u628a\u5c01\u5305\u9001\u51fa\u53bb",id:"\u8a2d\u597dgateway\uff0c\u4f46firewall\u4e0d\u77e5\u9053\u600e\u9ebc\u628a\u5c01\u5305\u9001\u51fa\u53bb",children:[]},{value:"\u89e3\u6c7afirewall\u53ef\u4ee5ping 8.8.8.8 \u4f46\u662f\u6c92\u8fa6\u6cd5ping\u5176\u4ed6\u7db2\u5740",id:"\u89e3\u6c7afirewall\u53ef\u4ee5ping-8888-\u4f46\u662f\u6c92\u8fa6\u6cd5ping\u5176\u4ed6\u7db2\u5740",children:[]},{value:"\u9060\u7aef\u5099\u4efd (rsync)",id:"\u9060\u7aef\u5099\u4efd-rsync",children:[]}],i={rightToc:p};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"week-10"},"Week 10"),Object(l.b)("h3",{id:"nat-table"},"nat table"),Object(l.b)("p",null,Object(l.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/PW4kY6f.png",alt:null}))),Object(l.b)("p",null,"prerouting\npostrouting"),Object(l.b)("p",null,"firewall \u8a2d\u5b9a\u7db2\u8def\u4ecb\u9762\u5361\u958b\u555f bridge\nip a \u5f8c ip \u70ba10.105\u958b\u982d\nfirewall \u6e2c\u8a66\u5c0d\u5916\u7db2\u8def"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"ping 8.8.8.8\n")),Object(l.b)("p",null,"student \u56e0\u70ba\u548c firwall \u5728\u540c\u7db2\u6bb5\u4e0b\uff0c\u6e2c\u8a66\u5169\u8005\u9023\u7dda"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"ping 192.168.xx.xx\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"\u8981\u8b93-student-\u900f\u904e-firewall-\u9001\u5c01\u5305\u51fa\u53bb"},"\u8981\u8b93 student \u900f\u904e firewall \u9001\u5c01\u5305\u51fa\u53bb"),Object(l.b)("p",null,"(\u539f\u672c\u96fb\u8166\u662f\u4e0d\u63d0\u4f9b\u8f49\u9001\u5c01\u5305\u7684\u529f\u80fd\uff0c\u90a3\u662f\u8def\u7531\u5668\u7684\u8cac\u4efb)"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo cat /proc/sys/net/ipv4/ip_forward\n")),Object(l.b)("p",null,"default \u662f 0 \u4ee3\u8868\u6c92\u6709\u8f49\u9001\u529f\u80fd > \u6539\u6210 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo vim /etc/sysctl.conf\n")),Object(l.b)("p",null,"\u4fee\u6539 ",Object(l.b)("inlineCode",{parentName:"p"},"net.ipv4.ip_forward=0")," \u9019\u884c\uff0c\u62ff\u6389\u8a72\u884c\u8a3b\u89e3\u4e26\u5c07 0 \u4fee\u6539\u6210 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo sysctl -p\n")),Object(l.b)("p",null,"\u986f\u793a\u70ba ",Object(l.b)("inlineCode",{parentName:"p"},"net.ipv4.ip_forward = 1")," \u4ee3\u8868\u5b8c\u6210"),Object(l.b)("p",null,"\u4e5f\u958b\u555f student "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"route -n                          \n#-n \u53c3\u6578\u70ba\u62d2\u7d55\u53cd\u89e3\uff0c\u6e1b\u5c11\u986f\u793a\u4e0d\u5fc5\u8981\u7684\u8cc7\u6599\n")),Object(l.b)("p",null,"gateway : \u6c7a\u5b9a\u5c01\u5305\u600e\u9ebc\u4e1f"),Object(l.b)("p",null,"\u8981\u66f4\u6539 gateway \uff0c\u56e0\u70ba\u8981\u5c07\u5c01\u5305\u6539\u9001\u7d66 firewall \uff0c\u4e26\u7531 firewall \u4ee3\u70ba\u5411\u5916\u7db2\u9001\u51fa\nstudent\u4e0a\u9762:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),'sudo route add default gw "gatewayID" (\u5230 firewall \u4e0a\u9762\u770b)\n')),Object(l.b)("p",null,"\u4e0a\u5217\u6307\u4ee4\u8a2d\u5b9a\u7684gatewayID\u70bafirewall IP\uff0c\u4f46firewall\u7db2\u5361\u6709\u4e09\u5f35\u56e0\u6b64\u6709\u4e09\u500bIP\uff0c\u5247\u9078\u64c7\u8207\u8a72\u6a5f\u5668\uff08student\uff09\u540c\u7db2\u6bb5\u4e0b\u7684IP\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u540c\u7db2\u6bb5\uff1a\u770bIP slash ",Object(l.b)("inlineCode",{parentName:"p"},"/")," \u5f8c\u7684\u6578\u5b57\uff0c\u4ee5192.168.3.1/24\u70ba\u4f8b\uff0c24\u4ee3\u8868\u6709IP 32bits\u524d\u9762\u768424 bits\u88ab\u8986\u84cb\uff0c\u56e0\u6b64\u53ea\u8981\u524d\u976224bits\uff08IP\u524d\u4e09\u6578\u5b57\uff09\u76f8\u540c\u5373\u70ba\u5728\u76f8\u540c\u7db2\u6bb5\u4e0b\u3002")),Object(l.b)("p",null,"\u5982\u679c\u8a2d\u5b9a\u932f\u8aa4:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),'sudo route delete default gw "gatewayID"\n')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"\u8a2d\u597dgateway\uff0c\u4f46firewall\u4e0d\u77e5\u9053\u600e\u9ebc\u628a\u5c01\u5305\u9001\u51fa\u53bb"},"\u8a2d\u597dgateway\uff0c\u4f46firewall\u4e0d\u77e5\u9053\u600e\u9ebc\u628a\u5c01\u5305\u9001\u51fa\u53bb"),Object(l.b)("p",null,"firewall:\n\u628a\u5225\u7684\u4f86\u6e90\u6771\u897f\u8f49\u767c\u51fa\u53bb"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo iptables -t nat -A POSTROUTING -o ([\u5c0d\u5916]\u7db2\u5361\u540d\u7a31) -s student\u4e0a\u7684ip -j MASQUERADE \n")),Object(l.b)("blockquote",null,Object(l.b)("h2",Object(r.a)({parentName:"blockquote"},{id:"masquerade-\u865b\u507d\uff1a\u56e0firewall\u628a\u5c01\u5305\u5411\u5916\u7db2\u50b3\u9001\u6642\uff0c\u5728\u5167\u7db2\u5167student\u7684\u662f\u865b\u64ecipprivate-ip\u7121\u6cd5\u88ab\u5916\u7db2\u8fa8\u8a8d\uff0c\u56e0\u6b64\u5fc5\u9808\u5c07ip\u8f49\u63db\u70bafirewall\u81ea\u8eab\u7684\u5c0d\u5916ippublic-ip\u3002"}),"MASQUERADE \u865b\u507d\uff1a\u56e0firewall\u628a\u5c01\u5305\u5411\u5916\u7db2\u50b3\u9001\u6642\uff0c\u5728\u5167\u7db2\u5167student\u7684\u662f\u865b\u64ecip(Private IP)\u7121\u6cd5\u88ab\u5916\u7db2\u8fa8\u8a8d\uff0c\u56e0\u6b64\u5fc5\u9808\u5c07IP\u8f49\u63db\u70bafirewall\u81ea\u8eab\u7684\u5c0d\u5916IP(Public IP)\u3002"),Object(l.b)("p",{parentName:"blockquote"},"tcpdump\u6307\u4ee4\u53ef\u64f7\u53d6\u67d0\u500binterface\u7684\u5c01\u5305\uff0c\u985e\u4f3cwireshark\uff0c\u53ef\u7528\u4f86\u6e2c\u8a66\u96fb\u8166\u662f\u5426\u6709\u6536\u5230\u5c0d\u65b9\u5c01\u5305\uff0c\u9019\u88e1\u7528\u4f86\u78ba\u8a8dgateway\u662f\u5426\u6709\u8a2d\u5b9a\u932f\u8aa4\u3002"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo tcpdump -i \u5c0d\u5167\u7db2\u5361\u540d\u7a31(ex:enp0s3) 'src 192.168.x.x(ip)'\n")),Object(l.b)("p",{parentName:"blockquote"},"\u7136\u5f8cstudent\u53bbping\uff0c\u5c31\u6703\u6536\u5230\u5c01\u5305")),Object(l.b)("hr",null),Object(l.b)("p",null,"\u8a2d\u5b9a\u8b93\u51fa\u7684\u53bb\u7684\u5c01\u5305\uff0c\u56de\u4f86\u7684\u6642\u5019\u5c31\u4e0d\u6703\u88ab\u64cb:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"ESTABLISHED\uff1aUPD\u5feb\u3001TCP\u7a69\u3002TCP\u6703\u4ee5\u4e09\u5411\u4ea4\u63e1\u5efa\u7acb\u9023\u5f8c\u624d\u50b3\u9001\u8cc7\u6599\uff0cFirewall\u5c0d\u5916\u958b\u555f\u9023\u7dda\u5f8c\u958b\u555f\u4e00\u500b\u7279\u5b9a\u7684port\u8207\u5c0d\u65b9\u901a\u8a0a\uff0cfirewall \u5f9e\u5916\u7db2\u63a5\u6536\u5230\u8cc7\u6599\u5f8c\u50b3\u9001\u5230student\u63a5\u6536\u8cc7\u6599\u7684port\u3002ESTABLISHED\u53ea\u958b\u653e\u5df2\u7d93\u5efa\u7acb\u9023\u7dda\u7684\u5c01\u5305\u7d93\u904e\u3002")),Object(l.b)("blockquote",null,Object(l.b)("h2",Object(r.a)({parentName:"blockquote"},{id:"related\uff1a\u53ea\u63a5\u53d7\u8207\u81ea\u5df1\u4e3b\u6a5f\u9001\u51fa\u7684\u5c01\u5305\u6709\u95dc\u7684\u5c01\u5305"}),"RELATED\uff1a\u53ea\u63a5\u53d7\u8207\u81ea\u5df1\u4e3b\u6a5f\u9001\u51fa\u7684\u5c01\u5305\u6709\u95dc\u7684\u5c01\u5305"),Object(l.b)("p",{parentName:"blockquote"},"\u5230/etc/resolv.conf"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo vim /etc/resolv.conf\n")),Object(l.b)("p",{parentName:"blockquote"},"\u65b0\u589e",Object(l.b)("inlineCode",{parentName:"p"},"nameserver 8.8.8.8"),"\uff08Google\u7684DNS\uff09")),Object(l.b)("p",null,"HWaddr xxxxxxxx : \u5361\u865f\uff0c\u7368\u4e00\u7121\u4e8c\nARP\u67e5\u8a62\ngenmask : \u7db2\u6bb5\u5927\u5c0f"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"\u89e3\u6c7afirewall\u53ef\u4ee5ping-8888-\u4f46\u662f\u6c92\u8fa6\u6cd5ping\u5176\u4ed6\u7db2\u5740"},"\u89e3\u6c7afirewall\u53ef\u4ee5ping 8.8.8.8 \u4f46\u662f\u6c92\u8fa6\u6cd5ping\u5176\u4ed6\u7db2\u5740"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cat /proc/sys/net/ipv6/conf/all/disable_ipv6\n")),Object(l.b)("p",null,"\u770b\u662f\u4e0d\u662f0\n\u5982\u679c\u662f\u5c31\u6253"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"echo 1|sudo tee /proc/sys/net/ipv6/conf/all/disable_ipv6\n")),Object(l.b)("p",null,"\u628a1\u5beb\u9032\u53bb\u5c07ipv6\u95dc\u6389"),Object(l.b)("p",null,"\u539f\u56e0\uff1a\u8001\u5e2b\u8aaa\u5b78\u6821\u7db2\u8def\u8d70ipv6\u4e0d\u592a\u7a69\u5b9a\u6240\u4ee5\u6709\u53ef\u80fdping\u4e0d\u5230"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"\u9060\u7aef\u5099\u4efd-rsync"},"\u9060\u7aef\u5099\u4efd (rsync)"),Object(l.b)("p",null,"Ubuntu\u74b0\u5883\u4e0b\u5b89\u88ddrsync"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo apt install rsync -y\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"rsync -avhz \u6a94\u6848\u540d\u7a31 \u9060\u7aef\u4f4d\u7f6e(ssh\u683c\u5f0f\u4e00\u6a23):\nexample: rsysc -avhz filename username@ip: //or @ipaddress\n//filename: \u6b32\u5099\u4efd\u6a94\u6848\n//username@....: \u5099\u4efd\u76ee\u7684\u5730\n")),Object(l.b)("p",null,"\u5192\u865f\u6307\u7684\u662f\u5f9e\u9060\u7aef\u5bb6\u76ee\u9304\u958b\u59cb\u7b97\uff0c\u5f8c\u9762\u53ef\u518d\u52a0\u8def\u5f91\u6307\u5b9a\u8cc7\u6599\u4f4d\u7f6e"),Object(l.b)("h4",{id:"\u53c3\u6578"},"\u53c3\u6578"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"a : \u5c01\u88dd\u65b9\u5f0f\u5099\u4efd\uff0c\u6574\u500b\u8cc7\u6599\u593e"),Object(l.b)("li",{parentName:"ul"},"v : \u5099\u4efd\u904e\u7a0b\u4e4b\u7d30\u7bc0"),Object(l.b)("li",{parentName:"ul"},"h : human readable"),Object(l.b)("li",{parentName:"ul"},"z : \u58d3\u7e2e\u5099\u4efd\u5167\u5bb9\uff0c"),Object(l.b)("li",{parentName:"ul"},"--delete : \u5c07\u591a\u51fa\u4f86\u7684\u6a94\u6848\uff0c\u7dad\u6301\u540c\u6b65"),Object(l.b)("li",{parentName:"ul"},"--delete-after : "),Object(l.b)("li",{parentName:"ul"},"--progress\uff1a\u986f\u793a\u9032\u5ea6\u689d"),Object(l.b)("li",{parentName:"ul"},"--bwlimit=300\uff1a\u9650\u5236\u7db2\u8def\u983b\u5bec")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"cp -r a a2")," \u53ef\u62f7\u8c9d\u8cc7\u6599\u593e"),Object(l.b)("p",null,"rsync \u8a2d\u5b9a\u6a94:\n/etc/rsyncd.conf "),Object(l.b)("p",null,"\u53ef\u4ee5\u8a2d\u5b9a\u7d66\u5225\u4eba\u5099\u4efd:\n/etc/default/rsync"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/20244585/how-does-scp-differ-from-rsync"}),"rsync vs scp")),Object(l.b)("hr",null),Object(l.b)("p",null,"crontab \u5de5\u4f5c\u6392\u7a0b"))}o.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},u=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=o(n),j=r,s=u["".concat(c,".").concat(j)]||u[j]||O[j]||l;return n?a.a.createElement(s,b({ref:t},i,{components:n})):a.a.createElement(s,b({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=j;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);