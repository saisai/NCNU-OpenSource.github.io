(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return o}));var r=n(1),b=n(9),i=(n(0),n(233)),c={},a={id:"1071/Week3",title:"Week3",description:"# Week3, 10/4 LSA",source:"@site/docs/1071/Week3.md",permalink:"/docs/1071/Week3",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1071/Week3.md",sidebar:"someSidebar",previous:{title:"Week2",permalink:"/docs/1071/Week2"},next:{title:"Week4",permalink:"/docs/1071/Week4"}},l=[{value:"\u786c\u789f\u77e5\u8b58",id:"\u786c\u789f\u77e5\u8b58",children:[]},{value:"\u786c\u789f\u5206\u5272\u5340",id:"\u786c\u789f\u5206\u5272\u5340",children:[]},{value:"\u6a94\u6848\u5c6c\u6027",id:"\u6a94\u6848\u5c6c\u6027",children:[]}],p={rightToc:l};function o(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"week3-104-lsa"},"Week3, 10/4 LSA"),Object(i.b)("p",null,"104321002 \u4f55\u5efa\u5b8f\n105213007 \u738b \u5a01\n107213517 \u694a\u5b9c\u660e\n104321059 \u9322\u8a60\u6069 \u8cc7\u5de5\u56db\n106213014 \u6b50\u82b7\u6b23 \u8cc7\u7ba1\u4e8c\n106213019 \u8607\u7f8e\u5a77 \u8cc7\u7ba1\u4e8c\n106213017 \u8521\u4f73\u8ed2 \u8cc7\u7ba1\u4e8c\n106213022 \u838a\u8a60\u5a77 \u8cc7\u7ba1\u4e8c\n104321003 \u8b1d\u842c\u9716 \u8cc7\u5de5\u56db"),Object(i.b)("h1",{id:""}),Object(i.b)("h3",{id:"\u786c\u789f\u77e5\u8b58"},"\u786c\u789f\u77e5\u8b58"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://zh.wikipedia.org/zh-tw/%E7%A1%AC%E7%9B%98"}),"wiki")),Object(i.b)("li",{parentName:"ul"},"\u5c0dI/O\u7684request\u4e00\u6b21\u4e00\u5b9a\u662f\u4e00\u500bsector(512bytes \u6216\u662f 4k)"),Object(i.b)("li",{parentName:"ul"},"sector alignment \u6247\u533a\u5bf9\u9f50"),Object(i.b)("li",{parentName:"ul"},"\u5149\u5b78\u7684\u90fd\u6703\u6709\u81ea\u5df1\u7684\u4fdd\u5b58\u671f\u9650\uff08\u5305\u62ec\uff24\uff36\uff24\uff09"),Object(i.b)("li",{parentName:"ul"},"\u786c\u789f\u8b80\u5beb\u7531\u5916\u5708\u7db2\u5185"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://linux.vbird.org/linux_basic/0105computers.php#pc_hd"}),"\u786c\u789f\u8207\u5132\u5b58\u8a2d\u5099"))),Object(i.b)("p",null,"\u5217\u51fa\u786c\u789f\u78c1\u5340\u8cc7\u8a0a:\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo fdisk -l")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://wiki.archlinux.org/index.php/EFI_System_Partition_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)"}),"EFI system")),Object(i.b)("p",null,"\u5b8c\u6574\u5099\u4efd\u786c\u789f\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo dd if=/dev/sda of=/dev/sdb")),Object(i.b)("p",null,"swap \u7f6e\u63db\u7a7a\u9593\n\u8f03\u5c11\u7528\u7684\u7a0b\u5f0f\u6703\u88ab\u653e\u5230swap"),Object(i.b)("p",null,":::info\n",Object(i.b)("strong",{parentName:"p"},"\u78c1\u789f\u5206\u5272\u5340\u53ef\u4ee5\u6709\u5e7e\u500b\uff1f")),Object(i.b)("p",null,"\u5206\u5272\u78c1\u789f\u7684\u9650\u52364P (4\u500b\u4e3b\u5206\u5272)or3P+1E (3\u500b\u4e3b\u5206\u5272+1\u500b\u5ef6\u4f38\u5206\u5272)\u5982\u9700\u5efa\u7acb5\u500b\u4ee5\u4e0a\u7684\u5206\u5272\u5c31\u5fc5\u9808\u5efa\u7acb3P+1E\u4f8b\u5982:1P = C: , 2P = D: , 3P = E:\u800cF: & G:\u90fd\u5fc5\u9808\u5efa\u7acb\u5728\u5ef6\u4f38\u5206\u5272\u4e86\u53e6\u5916DOS\u53caWindows\u7cfb\u5217\u7684\u5206\u5272\u5de5\u5177\u90fd\u53ea\u652f\u63f4\u4e00\u500b\u4e3b\u5206\u5272\u8981\u5efa\u7acb\u591a\u500b\u4e3b\u5206\u500b\u5fc5\u9700\u4f7f\u7528\u5176\u4ed6\u5206\u5272\u5de5\u5177\u624d\u884c (\u4f8b\u5982:SPFDISK)\n:::"),Object(i.b)("h3",{id:"\u786c\u789f\u5206\u5272\u5340"},"\u786c\u789f\u5206\u5272\u5340"),Object(i.b)("p",null,"Primary+Extended\uff0cPrimary\u6709\u4e09\u500b(\u5be6\u9ad4\u5206\u5272\u5340)\u3002\nExtended\u53ef\u4ee5\u5728\u53e6\u5916\u505a\u51fa\u4e09\u500b\u5ef6\u4f38(sda5, sda6, sda7)\n\u6240\u4ee5\u7e3d\u5171\u52a0\u8d77\u4f86\u67097\u500b\uff0c\u4f46\u662f\u5be6\u9ad4\u7684\u53ea\u67094\u500b\u3002"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sudo blkid /dev/sda*"),"\n\u5217\u51fa\u6240\u6709block\u7684UUID,TYPE"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cat /etc/fstab"),"\nfstab = filesystem\n\u8a18\u9304\u8457\u7cfb\u7d71\u958b\u6a5f\u6709\u54ea\u4e9b\u5206\u5272\u5340\uff0c\u4e26\u4e14\u4ee5\u88ab\u54ea\u4e00\u500b\u76ee\u9304\u4f7f\u7528"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sudo blkid /dev/sda1")," => block id (uuid)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mount")," => \u8a73\u7d30\u639b\u8f09\u8cc7\u8a0a\uff08\u5305\u542btype, permission\u7b49\u7b49\uff09"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/bin")," => \u88e1\u9762\u90fd\u662fbinary\u7684\u53ef\u57f7\u884c\u6a94"),Object(i.b)("h3",{id:"\u6a94\u6848\u5c6c\u6027"},"\u6a94\u6848\u5c6c\u6027"),Object(i.b)("h4",{id:"\u8a73\u7d30\u5c6c\u6027"},"\u8a73\u7d30\u5c6c\u6027"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/EOA2RGt.png",alt:null}))),Object(i.b)("h1",{id:"-1"}),Object(i.b)("h4",{id:"\u6a94\u6848\u6b0a\u9650"},"\u6a94\u6848\u6b0a\u9650"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/OlUKGri.png",alt:null}))),Object(i.b)("h1",{id:"-2"}),Object(i.b)("h4",{id:"\u6a94\u6848\u985e\u578b"},"\u6a94\u6848\u985e\u578b"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u7576\u70ba[ d ]\u5247\u662f\u76ee\u9304\n\u7576\u70ba[ - ]\u5247\u662f\u6a94\u6848\n\u82e5\u662f[ l ]\u5247\u8868\u793a\u70ba\u9023\u7d50\u6a94(link file)\uff1b\n\u82e5\u662f[ b ]\u5247\u8868\u793a\u70ba\u88dd\u7f6e\u6a94\u88e1\u9762\u7684\u53ef\u4f9b\u5132\u5b58\u7684\u5468\u908a\u8a2d\u5099(\u53ef\u96a8\u6a5f\u5b58\u53d6\u88dd\u7f6e)\uff1b\n\u82e5\u662f[ c ]\u5247\u8868\u793a\u70ba\u88dd\u7f6e\u6a94\u88e1\u9762\u7684\u5e8f\u5217\u57e0\u8a2d\u5099\uff0c\u4f8b\u5982\u9375\u76e4\u3001\u6ed1\u9f20(\u4e00\u6b21\u6027\u8b80\u53d6\u88dd\u7f6e)\u3002\n")),Object(i.b)("p",null,"\u53c3\u8003\u81ea:",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://linux.vbird.org/linux_basic/0210filepermission.php"}),"http://linux.vbird.org/linux_basic/0210filepermission.php")),Object(i.b)("p",null,':::warning\n\u5982\u679c\u8def\u5f91\u7576\u4e2d\u6709" ( "\u9700\u8981\u4ee5" \\ "\u505a\u8df3\u812b\n:::'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/sbin")," => \u5b58\u653e\u5fc5\u8981\u7684system binary \u6a94\u6848"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/boot")," => \u76e1\u91cf\u4e0d\u8981\u522a\u9664\u9019\u88cf\u7684\u6a94\u6848"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/boot/grub/grub.cfg")," => \u958b\u6a5f\u8a2d\u5b9a\u6a94"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/dev")," => \u786c\u9ad4\u76f8\u95dc"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"..")," => \u4e0a\u4e00\u5c64\u76ee\u9304"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'echo "hello" > dest'),' => "hello" \u8986\u84cb dest \u5167\u5bb9'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'echo "hello" >> dest'),' => "hello" \u52a0\u5728 dest \u5167\u5bb9\u4e4b\u5f8c,\u53c3\u6578 -n \u628a\u63db\u884c\u62ff\u6389'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/etc")," => \u5b58\u653e\u8a2d\u5b9a\u6a94"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/etc/fstab")," => \u786c\u789f\u8cc7\u8a0a\u8a2d\u5b9a\u6a94"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/etc/passwd")," => \u5b58\u653e\u4f7f\u7528\u8005\u6a94\u6848\uff0c\u4f46\u662f\u6c92\u5bc6\u78bc"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cat /etc/passwd | grep bluet")," => \u5f9e /etc/passwd \u6293\u53d6 bluet \u7684\u8cc7\u8a0a"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"id"),"\u5370\u51fa user \u7684 group \u548c user \u7684 id "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/etc/shadow")," => \u5b58\u653epassword(\u5217\u51fa\u7684\u8cc7\u8a0a\u90fd\u662f\u52a0\u5bc6\u904e\u7684)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/etc/group")," => \u5b58\u653egroup\u8cc7\u8a0a"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sudo")," superuser permission"))}o.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),b=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,b=function(e,t){if(null==e)return{};var n,r,b={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var p=b.a.createContext({}),o=function(e){var t=b.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},u=function(e){var t=o(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(n),O=r,s=u["".concat(c,".").concat(O)]||u[O]||d[O]||i;return n?b.a.createElement(s,a({ref:t},p,{components:n})):b.a.createElement(s,a({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=O;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);