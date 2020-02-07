(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(1),l=n(9),i=(n(0),n(233)),r={},b={id:"1061/Week-5",title:"Week-5",description:"# 1061 LSA Week 5 - \u5957\u4ef6\u7ba1\u7406 / \u9060\u7aef\u767b\u5165 / Web Server",source:"@site/docs/1061/Week-5.md",permalink:"/docs/1061/Week-5",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1061/Week-5.md",sidebar:"someSidebar",previous:{title:"Week-4",permalink:"/docs/1061/Week-4"},next:{title:"Week-7",permalink:"/docs/1061/Week-7"}},p=[{value:"\u5957\u4ef6\u7ba1\u7406",id:"\u5957\u4ef6\u7ba1\u7406",children:[{value:"apt",id:"apt",children:[]},{value:"perl",id:"perl",children:[]},{value:"aptitude",id:"aptitude",children:[]},{value:"\u67e5\u770b network interface \u8cc7\u8a0a",id:"\u67e5\u770b-network-interface-\u8cc7\u8a0a",children:[]},{value:"SSH",id:"ssh",children:[]},{value:"\u4e09\u7a2e\u5e38\u898b http server",id:"\u4e09\u7a2e\u5e38\u898b-http-server",children:[]},{value:"\u5b89\u88dd drupal7",id:"\u5b89\u88dd-drupal7",children:[]},{value:"dpkg \u4ecb\u7d39",id:"dpkg-\u4ecb\u7d39",children:[]}]},{value:"\u4f5c\u696d\u7b46\u8a18\u5340",id:"\u4f5c\u696d\u7b46\u8a18\u5340",children:[{value:"lighttpd",id:"lighttpd",children:[]},{value:"nginx",id:"nginx",children:[]}]}],c={rightToc:p};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"1061-lsa-week-5---\u5957\u4ef6\u7ba1\u7406--\u9060\u7aef\u767b\u5165--web-server"},"1061 LSA Week 5 - \u5957\u4ef6\u7ba1\u7406 / \u9060\u7aef\u767b\u5165 / Web Server"),Object(i.b)("h2",{id:"\u5957\u4ef6\u7ba1\u7406"},"\u5957\u4ef6\u7ba1\u7406"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Rpm_(software)"}),"RPM")," \u5957\u4ef6\u7ba1\u7406\u529f\u80fd\u8f03\u5dee\uff0c\u4f7f\u7528\u4e45\u4e86\u5bb9\u6613\uff1f\uff1f(\u5b89\u5168\u6027\u4f4e\uff0c\u9577\u671f\u4f7f\u7528\u96e3\u4ee5\u7ba1\u7406?)"),Object(i.b)("h3",{id:"apt"},"apt"),Object(i.b)("p",null,"=> Ubuntu \u548c Debian \u6240\u7528\u7684\u5957\u4ef6\u7ba1\u7406\u7a0b\u5f0f"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"$/var/lib/apt/lists")," \u5e38\u8b8a\u7684\u76ee\u9304"),Object(i.b)("p",null,"\u53ef\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"cat")," or ",Object(i.b)("inlineCode",{parentName:"p"},"less")," \u770b\u770b ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/apt/sources.list")," \uff08\u8edf\u9ad4\u7684\u8f09\u9ede\u6e05\u55ae\uff09"),Object(i.b)("p",null,"sudo apt update\nsudo apt install ","[name]","\nsudo apt search ","[name]"),Object(i.b)("h4",{id:"\u5957\u4ef6\u4f86\u6e90\u6e05\u55ae\uff08sourcelist\uff09"},"\u5957\u4ef6\u4f86\u6e90\u6e05\u55ae\uff08source.list\uff09"),Object(i.b)("p",null,"\u6240\u5728\u4f4d\u7f6e\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"/etc/apt/sources.list")),Object(i.b)("p",null,"\u5efa\u8b70\u5c07\u4f86\u6e90\u6539\u70ba\u5728 NCNU \u7684 mirror \u7ad9\uff1a ",Object(i.b)("inlineCode",{parentName:"p"},"ftp.ubuntu-tw.net")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GUI \u4ecb\u9762\u4fee\u6539\u6b65\u9a5f\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7cfb\u7d71\u8a2d\u5b9a => \u8edf\u9ad4\u8207\u66f4\u65b0 => \u300cUbuntu \u8edf\u9ad4\u300d\u5206\u9801"),Object(i.b)("li",{parentName:"ul"},"\u5c07\u300c\u4e0b\u8f09\u81ea\u300d\u9078\u64c7\u300c\u5176\u4ed6\u300d"),Object(i.b)("li",{parentName:"ul"},"\u9078\u64c7 hftp://ftp.ubuntu-tw.net/mirror/ubuntu/"),Object(i.b)("li",{parentName:"ul"},"\u9ede\u9078\u300c\u9078\u64c7\u4f3a\u670d\u5668\u300d"),Object(i.b)("li",{parentName:"ul"},"\u53d6\u6d88\u9ede\u9078\u300c\u6e90\u78bc\u300d"))),Object(i.b)("li",{parentName:"ul"},"CLI \u4ecb\u9762\u4fee\u6539\u6b65\u9a5f\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 perl ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5c07 ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/apt/sources.list")," \u505a\u6587\u5b57\u53d6\u4ee3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$ sudo perl -pi.bak -e 's/tw.archive.ubuntu.com/ftp.ubuntu-tw.net/' /etc/apt/sources.list")),Object(i.b)("li",{parentName:"ul"},"\u6307\u4ee4\u8aaa\u660e\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-p")," \u70ba\u4e00\u884c\u4e00\u884c\u9032\u884c\u8655\u7406 "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-i")," \u5c0d\u6a94\u6848\u9032\u884c\u5099\u4efd"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-e")," \u8655\u7406\u65b9\u6cd5 's/\u76ee\u6a19\u5b57\u4e32/\u8981\u66ff\u63db\u6210\u7684\u5b57\u4e32/'"))))),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 vim",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"__"))),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 sed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo sed -i 's/tw.archive.ubuntu.com/ftp.ubuntu-tw.net/g' /etc/apt/sources.list"))))))),Object(i.b)("h3",{id:"perl"},"perl"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5f88\u4e45\u5f88\u4e45\u4ee5\u524d\u5c31\u5b58\u5728\u4e00\u628a\u5f88\u53b2\u5bb3\u745e\u58eb\u5200\u53eb\u505a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Perl"}),"Perl")," "),Object(i.b)("li",{parentName:"ul"},"\u6240\u6709 Linux \u7cfb\u7d71\u9810\u8a2d\u5b89\u88dd")),Object(i.b)("p",null,"\u53ef\u5728 CLI \u76f4\u63a5\u57f7\u884c\u55ae\u884c\u7a0b\u5f0f\uff1a\n",Object(i.b)("inlineCode",{parentName:"p"},"perl -E 'say 345*4567'"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"perl -e 'print 123*123'")),Object(i.b)("h3",{id:"aptitude"},"aptitude"),Object(i.b)("p",null,"sudo aptitude\ncrtl t - \u5217\u8868\nq \u9000\u51fa\u3001\u4e0a\u4e00\u5c64\n/ \u641c\u5c0b\uff08\u53ef\u4ee5\u4f7f\u7528\u6b63\u898f\u8868\u9054\u5f0f\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u641c\u5c0b ",Object(i.b)("inlineCode",{parentName:"li"},"^lib")," \u4ee5lib\u958b\u982d,\u914d\u5408 n \u5f80\u4e0b\u641c\u5c0b"),Object(i.b)("li",{parentName:"ul"},"\u641c\u5c0b ",Object(i.b)("inlineCode",{parentName:"li"},"-per$")," \u4ee5per\u7d50\u5c3e"),Object(i.b)("li",{parentName:"ul"},"\u6309 ",Object(i.b)("inlineCode",{parentName:"li"},"+")," \u5169\u6b21",Object(i.b)("inlineCode",{parentName:"li"},"g")," \u5373\u53ef\u5b89\u88dd\u9078\u53d6\u5957\u4ef6  "),Object(i.b)("li",{parentName:"ul"},"(\u53d6\u6d88\u9078\u53d6--\x3ectrl+",Object(i.b)("inlineCode",{parentName:"li"},"-"),")")),Object(i.b)("p",null,"pi - purge install, \u5f9e\u6c92\u5b89\u88dd\u904e\u7684\u4e7e\u6de8\u5b89\u88dd\n\u53c3\u8003\u6587\u4ef6\uff1a\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://wiki.ubuntu-tw.org/index.php?title=Aptitude"}),"https://wiki.ubuntu-tw.org/index.php?title=Aptitude")),Object(i.b)("h3",{id:"\u67e5\u770b-network-interface-\u8cc7\u8a0a"},"\u67e5\u770b network interface \u8cc7\u8a0a"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ifconfig")," "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"eth? \u8868\u793a\u6709\u7dda\u7db2\u8def"),Object(i.b)("li",{parentName:"ul"},"w??? \u8868\u793a\u7121\u7dda\u7db2\u8def (ex wls1)")),Object(i.b)("h3",{id:"ssh"},"SSH"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ssh user@ip_addr_or_domain_name -p port"),"\n-X  \u4ee3\u8868 X11 forwarding\uff0c\u6709\u6a5f\u6703\u4f7f\u7528\u5716\u5f62\u5316\u754c\u9762\u8edf\u9ad4\n-v  \u5075\u932f\u6a21\u5f0f\uff0c\u6703\u986f\u793a\u8a73\u7d30\u72c0\u614b\u8a0a\u606f\n\u5982\u679c\u672c\u6a5f\u7528\u6236\u540d\u8ddf\u9060\u7aef\u4e00\u6a23\uff0c\u53ef\u4ee5\u4e0d\u7528 user@\n\u5982\u679c\u4f7f\u7528\u9810\u8a2d 22 port\uff0c\u53ef\u4ee5\u4e0d\u7528 -p port\n\u4e0d\u60f3\u8f38\u5165\u5bc6\u78bc\u6216\u5bc6\u78bc\u592a\u591a\u4e0d\u4fbf\u7ba1\u7406\uff0c\u53ef\u4ee5\u4f7f\u7528\u91d1\u9470\u767b\u5165 ",Object(i.b)("inlineCode",{parentName:"p"},"ssh-copy-id {{user}}@{{host}}"),"\n\u7522\u751f ssh key ",Object(i.b)("inlineCode",{parentName:"p"},"ssh-keygen -t rsa")),Object(i.b)("h3",{id:"\u4e09\u7a2e\u5e38\u898b-http-server"},"\u4e09\u7a2e\u5e38\u898b http server"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Apache    8080"),Object(i.b)("li",{parentName:"ul"},"lighttpd  8081"),Object(i.b)("li",{parentName:"ul"},"Nginx     80\n:::info\n\u5b89\u88dd\u6642\u5efa\u8b70\u53ef\u4ee5\u6539\u5b8cport\u518d\u5b89\u88dd\u4e0b\u4e00\u500b, \u907f\u514dport\u885d\u7a81\n:::")),Object(i.b)("p",null,"\u82e5\u60f3\u540c\u6642\u4f7f\u7528\u591a\u500b http server\u53ef\u4ee5\u4f7f\u7528 proxy\n\u82e5\u60f3\u591a\u500b\u57df\u540d\u5c0d\u61c9\u5230\u540c\u4e00\u500bIP\u53ef\u4ee5\u4f7f\u7528 name base \u7684 virtual host"),Object(i.b)("h3",{id:"\u5b89\u88dd-drupal7"},"\u5b89\u88dd drupal7"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"POSTFIX \u70ba\u90f5\u4ef6\u4f3a\u670d\u5668"),Object(i.b)("li",{parentName:"ul"},"\u8a2d\u5b9a\u6a94\u653e\u5728 available\u88e1\u9762"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$ln -s /etc/apache2/sites-available/default-ssl.conf /etc/apache2/sites-enabled/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo service apache2 restart")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo a2ensite your_site")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo netstat -nutpl|grep apache")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo vim /etc/apache2/ports.conf")," \u6539\u6210 8080 port,\u907f\u514d\u5f85\u6703\u5b89\u88dd\u5176\u4ed6 http server\u6703\u9020\u6210\u885d\u7a81"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo service apache2 restart")," \u91cd\u65b0\u555f\u52d5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo netstat -nutpl|grep apache")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo apt install lighttpd nginx-full"))),Object(i.b)("h3",{id:"dpkg-\u4ecb\u7d39"},"dpkg \u4ecb\u7d39"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dpkg -la")," \u5217\u51fa\u5df2\u5b89\u88dd\u5957\u4ef6 "),Object(i.b)("li",{parentName:"ul"},"-l list"),Object(i.b)("li",{parentName:"ul"},"-a all")),Object(i.b)("h4",{id:"\u6b63\u898f\u8868\u9054\u5f0f"},"\u6b63\u898f\u8868\u9054\u5f0f"),Object(i.b)("p",null,"/a/\t\u542b\u5b57\u6bcd \u201ca\u201d \u7684\u5b57\u4e32\uff0c\u4f8b\u5982 \u201cab\u201d, \u201cbac\u201d, \u201ccba\u201d\t\u201cxyz\u201d\n/a./\t\u542b\u5b57\u6bcd \u201ca\u201d \u4ee5\u53ca\u5176\u5f8c\u4efb\u4e00\u500b\u5b57\u5143\u7684\u5b57\u4e32\uff0c\u4f8b\u5982 \u201cab\u201d, \u201cbac\u201d\uff08\u82e5\u8981\u6bd4\u5c0d.\uff0c\u8acb\u4f7f\u7528 ",".",")\n/^xy/\t\u4ee5 \u201cxy\u201d \u958b\u59cb\u7684\u5b57\u4e32\uff0c\u4f8b\u5982 \u201cxyz\u201d, \u201cxyab\u201d\uff08\u82e5\u8981\u6bd4\u5c0d ^\uff0c\u8acb\u4f7f\u7528 \\^\uff09\n/xy$/\t\u4ee5 \u201cxy\u201d \u7d50\u5c3e\u7684\u5b57\u4e32\uff0c\u4f8b\u5982 \u201caxy\u201d, \u201cabxy\u201d\u4ee5 \u201cxy\u201d \u7d50\u5c3e\u7684\u5b57\u4e32\uff0c\u4f8b\u5982 \u201caxy\u201d, \u201cabxy\u201d \uff08\u82e5\u8981\u6bd4\u5c0d $\uff0c\u8acb\u4f7f\u7528 $\uff09\n","[13579]","\t\u5305\u542b \u201c1\u201d \u6216 \u201c3\u201d \u6216 \u201c5\u201d \u6216 \u201c7\u201d \u6216 \u201c9\u201d \u7684\u5b57\u4e32\uff0c\u4f8b\u5982\uff1a\u201da3b\u201d, \u201c1xy\u201d\t\u201cy2k\u201d\n","[0-9]","\t\u542b\u6578\u5b57\u4e4b\u5b57\u4e32\n","[a-z0-9]","\t\u542b\u6578\u5b57\u6216\u5c0f\u5beb\u5b57\u6bcd\u4e4b\u5b57\u4e32\n","[a-zA-Z0-9]","\t\u542b\u6578\u5b57\u6216\u5b57\u6bcd\u4e4b\u5b57\u4e32\nb","[aeiou]","t\t\u201cbat\u201d, \u201cbet\u201d, \u201cbit\u201d, \u201cbot\u201d, \u201cbut\u201d\n",Object(i.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-0-9"}),Object(i.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-0-9",className:"footnote-ref"}),"0-9")),"\t\u4e0d\u542b\u6578\u5b57\u4e4b\u5b57\u4e32\uff08\u82e5\u8981\u6bd4\u5c0d ^\uff0c\u8acb\u4f7f\u7528 \\^\uff09\n",Object(i.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-aeiouaeiou"}),Object(i.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-aeiouaeiou",className:"footnote-ref"}),"aeiouAEIOU")),"\t\u4e0d\u542b\u6bcd\u97f3\u4e4b\u5b57\u4e32\uff08\u82e5\u8981\u6bd4\u5c0d ^\uff0c\u8acb\u4f7f\u7528 \\^\uff09\n",Object(i.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-\\^"}),Object(i.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-\\^",className:"footnote-ref"}),"\\^")),"\t\u4e0d\u542b \u201c^\u201d \u4e4b\u5b57\u4e32\uff0c\u4f8b\u5982 \u201cxyz\u201d, \u201cabc\u201d"),Object(i.b)("blockquote",null),Object(i.b)("h2",{id:"\u4f5c\u696d\u7b46\u8a18\u5340"},"\u4f5c\u696d\u7b46\u8a18\u5340"),Object(i.b)("p",null,":::warning\n\u8a18\u5f97\u5148\u4fee\u6539apache port to 8080\n:::"),Object(i.b)("h3",{id:"lighttpd"},"lighttpd"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo aptitude"),": \u958b\u555f\u5716\u5f62\u5316\u5957\u4ef6\u7ba1\u7406\u9801\u9762"),Object(i.b)("li",{parentName:"ul"},"\u6309\u4e0b",Object(i.b)("inlineCode",{parentName:"li"},"/"),"\u8f38\u5165",Object(i.b)("inlineCode",{parentName:"li"},"^lighttpd$"),": \u641c\u5c0blighttpd"),Object(i.b)("li",{parentName:"ul"},"\u5c0d",Object(i.b)("inlineCode",{parentName:"li"},"lighttpd"),"\u6309+: \u9078\u53d6\u5b89\u88dd"),Object(i.b)("li",{parentName:"ul"},"\u6309",Object(i.b)("inlineCode",{parentName:"li"},"GG"),": \u5b89\u88dd"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo vim /etc/lighttpd/lighttpd.conf")),Object(i.b)("li",{parentName:"ul"},"\u66f4\u6539",Object(i.b)("inlineCode",{parentName:"li"},"server.port = 8081")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo /etc/init.d/lighttpd start"),": \u555f\u52d5\u670d\u52d9"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$sudo netstat -ntupl | grep lighttpd"),": \u67e5\u770b\u670d\u52d9\u662f\u5426\u958b\u555f ")),Object(i.b)("h3",{id:"nginx"},"nginx"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo apt-get install nginx-full"))),Object(i.b)("p",null,"\u5b89\u88dd\u5b8c\u61c9\u8a72\u5c31\u9810\u8a2d\u8dd1\u572880 port"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo netstat -ntupl | grep 'nginx\\|apache\\|lighttpd'"),": \u67e5\u770bnginx\u3001apache\u3001lighttpd\u5206\u5225run\u5728\u54ea\u500bport")))}u.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),u=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},o=function(e){var t=u(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=u(n),d=a,j=o["".concat(r,".").concat(d)]||o[d]||O[d]||i;return n?l.a.createElement(j,b({ref:t},c,{components:n})):l.a.createElement(j,b({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var c=2;c<i;c++)r[c]=n[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);