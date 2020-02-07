(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{163:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(1),b=a(9),i=(a(0),a(233)),n={},l={id:"1041/Week-11-Raspberry-pi",title:"Week-11-Raspberry-pi",description:"# Week 11 Raspberry pi",source:"@site/docs/1041/Week-11-Raspberry-pi.md",permalink:"/docs/1041/Week-11-Raspberry-pi",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1041/Week-11-Raspberry-pi.md",sidebar:"someSidebar",previous:{title:"Week-10-VCS",permalink:"/docs/1041/Week-10-VCS"},next:{title:"Week-12-Raspberry-pi",permalink:"/docs/1041/Week-12-Raspberry-pi"}},p=[],c={rightToc:p};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"week-11-raspberry-pi"},"Week 11 Raspberry pi"),Object(i.b)("p",null,"2015/05/21"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53bb\u5e74\u7684LSA - Raspberry pi ssl \u7dda\u6559\u5b78\uff1a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://ncnu-ossg.etherpad.mozilla.org/1?"})),Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://ncnu-ossg.etherpad.mozilla.org/1?"}),"https://ncnu-ossg.etherpad.mozilla.org/1?"))),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.raspberrypi.org/documentation/installation/installing-images/linux.md"})),Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.raspberrypi.org/documentation/installation/installing-images/linux.md"}),"https://www.raspberrypi.org/documentation/installation/installing-images/linux.md")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OS")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4e0b\u8f09 Raspbian OS \u6620\u50cf\u6a94 ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://downloads.raspberrypi.org/raspbian_latest"})),Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://downloads.raspberrypi.org/raspbian_latest"}),"http://downloads.raspberrypi.org/raspbian_latest")),Object(i.b)("li",{parentName:"ul"},"\u78ba\u5b9a SD \u5361\u639b\u8f09\u4f4d\u7f6e",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"df: Display free disk space"),Object(i.b)("li",{parentName:"ul"},"diskutil list: List disks"))),Object(i.b)("li",{parentName:"ul"},"\u5378\u8f09 SD \u5361",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"sudo diskutil unmountDisk /dev/disk","[N]","\xa0"))),Object(i.b)("li",{parentName:"ul"},"\u5c07\u6620\u50cf\u6a94\u71d2\u5165 SD \u5361",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"sudo dd if=","[IMG file location]"," of=/dev/disk","[N]"," bs=4M"),Object(i.b)("li",{parentName:"ul"},"\u82e5\u51fa\u73fe ",Object(i.b)("strong",{parentName:"li"},"dd: bs: illegal numeric value"),"\uff0c\u8acb\u5c07 bs \u503c\u6539\u70ba\u5c0f\u5beb\u3002 ex: bs=4m")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u4f7f\u7528 TTL \u7dda\u9023\u4e0a pi \u4ee5\u64cd\u63a7")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u7bad\u982d\u9760\u5916\uff0c\u63d2\u5165\u3002")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://hackpad-attachments.s3.amazonaws.com/ncnu-opensource.hackpad.com_B8CalmI9bbu_p.350539_1432174100140_thumb_IMG_4875_1024.jpg",alt:null}))),Object(i.b)("p",null,"2","."," TTY \u7dda USB \u7aef\u63a5\u4e0a\u96fb\u8166"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ubuntu:")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"sudo screen /dev/ttyUSB0 115200")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"OS X:\xa0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"screen /dev/cu.usbserial 115200")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Driver: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041"})),Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041"}),"http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041")))),Object(i.b)("p",null,"3","."," \u9023\u4e0a\u5f8c\uff0c\u63d2\u4e0a pi \u7684\u96fb\u6e90\u3001\u767b\u5165"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"username: pi"),Object(i.b)("li",{parentName:"ul"},"password: raspberry")),Object(i.b)("p",null,"\u767b\u5165Pi \u5f8c sudo raspi-config\xa0 \uff08\uff08\u6709\u95dc\u7cfb\u7d71\u7684\u8a2d\u5b9a\uff09\uff09"),Object(i.b)("p",null,"4","."," \u63d2\u4e0a\u7db2\u8def\u7dda\uff0c\u66f4\u65b0\u5957\u4ef6\u4f86\u6e90"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sudo apt-get update")),Object(i.b)("p",null,"5.\xa0 \u5b89\u88dd\u5f8c\u7f6e\u5f0f\u904b\u7b97\u7a0b\u5f0f\u3001vim\u3001SSH"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sudo apt-get install postfix vim openssh-server")),Object(i.b)("p",null,"6","."," \u5bc4\u4fe1"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"sendmail -t ","[\u4e3b\u65e8]"," foo@bar.com")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"-t \u4e3b\u65e8\u7121\u6548\u8036")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8f38\u5165\u5b8c\u5167\u6587\u5f8c\uff0c\u5169\u6b21 Contronl + d \u4ee5\u7d50\u675f\u5bc4\u51fa"))),Object(i.b)("p",null,"7","."," \u53d6\u5f97 pi \u7684 IP \u5f8c\uff0c\u5373\u53ef\u5728\u81ea\u5df1\u7684\u96fb\u8166\u7528 SSH \u9060\u7aef\u767b\u5165"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ifconfig | grep inet | awk \u2019{print $2}\u2019")),Object(i.b)("p",null,"8","."," \u81ea\u52d5\u5bc4\u4fe1 shell"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u6a94\u6848 sendip.sh \u65bc ~ \u76ee\u9304")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://reader.roodo.com/rocksaying/archives/19886844.html"})),Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://reader.roodo.com/rocksaying/archives/19886844.html"}),"http://reader.roodo.com/rocksaying/archives/19886844.html")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://wiki.debian.org/LSBInitScripts"})),Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://wiki.debian.org/LSBInitScripts"}),"https://wiki.debian.org/LSBInitScripts")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"#!/bin/sh")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",Object(r.a)({parentName:"li"},{id:"begin-init-info"}),"BEGIN INIT INFO")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"provides-----------sendip"}),"Provides:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sendip")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"required-start-----all"}),"Required-Start:\xa0\xa0\xa0\xa0 $all")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"required-stop"}),"Required-Stop:\xa0\xa0\xa0\xa0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"default-start------2-3-4-5"}),"Default-Start:\xa0\xa0\xa0\xa0\xa0 2 3 4 5")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"default-stop"}),"Default-Stop:\xa0\xa0\xa0\xa0\xa0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"short-description--run-etcsendip-if-it-exist"}),"Short-Description:\xa0 Run /etc/sendip if it exist")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",Object(r.a)({parentName:"li"},{id:"end-init-info"}),"END INIT INFO")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'echo "Subject: ',"[yourname]",'@rpi says" > /home/pi/rpiip.mail')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'echo "From: Me<3 " >> /home/pi/rpiip.mail')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'echo "To: ',"[youremail add]",'" >> /home/pi/rpiip.mail')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"ifconfig | grep inet | awk \u2019{print $2}\u2019 >> /home/pi/rpiip.mail")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"/usr/sbin/sendmail -t -f ","[foo@bar.com]"," -v -i < /home/pi/rpiip.mail")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u66f4\u6539\u6a94\u6848\u6b0a\u9650")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"sudo chmod 755 sendip.sh")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8907\u88fd\u6a94\u6848\u5230 /etc/init.d")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"sudo cp sendip.sh /etc/init.d")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6c92\u932f\u7684\u8a71\u662f\u66f4\u65b0\u5427\u89aa")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"sudo update-rc.d sendip.sh defaults")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"pi \u91cd\u958b\u6a5f\u8a66\u8a66\u5427\u89aa")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"sudo reboot"))),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://raspberrypihq.com/how-to-add-wifi-to-the-raspberry-pi/"})),Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://raspberrypihq.com/how-to-add-wifi-to-the-raspberry-pi/"}),"http://raspberrypihq.com/how-to-add-wifi-to-the-raspberry-pi/")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.howtogeek.com/167425/how-to-setup-wi-fi-on-your-raspberry-pi-via-the-command-line/"})),Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.howtogeek.com/167425/how-to-setup-wi-fi-on-your-raspberry-pi-via-the-command-line/"}),"http://www.howtogeek.com/167425/how-to-setup-wi-fi-on-your-raspberry-pi-via-the-command-line/")),Object(i.b)("p",null,"apt-get install mailutils"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"#!/bin/sh")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",Object(r.a)({parentName:"li"},{id:"begin-init-info-1"}),"BEGIN INIT INFO")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"provides-------------email_ip_address"}),"Provides:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 email_ip_address")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"required-start-------all"}),"Required-Start:\xa0\xa0\xa0\xa0\xa0\xa0 $all")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"required-stop-1"}),"Required-Stop:")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"default-start--------2-3-4-5"}),"Default-Start:\xa0\xa0\xa0\xa0\xa0\xa0\xa0 2 3 4 5")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h1",Object(r.a)({parentName:"li"},{id:"default-stop-1"}),"Default-Stop:")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",Object(r.a)({parentName:"li"},{id:"end-init-info-1"}),"END INIT INFO")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'ifconfig | awk \u2019/inet addr/ { sub(/addr:/, "", $2); if ($2 != "127.0.0.1") print $2}\u2019 | mail -s "Raspberry Pi IP address" ',Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},Object(i.b)("u",null,"email_address")))))),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://elinux.org/RPi_raspi-config#expand_rootfs_-_Expand_root_partition_to_fill_SD_card"})),Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://elinux.org/RPi_raspi-config#expand_rootfs_-_Expand_root_partition_to_fill_SD_card"}),"http://elinux.org/RPi_raspi-config#expand_rootfs_-_Expand_root_partition_to_fill_SD_card")),Object(i.b)("p",null,"week13"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/prasmussen/gdrive"})),Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/prasmussen/gdrive"}),"https://github.com/prasmussen/gdrive")),Object(i.b)("p",null,"\u8907\u88fd",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://drive.google.com/uc?id=0B3X9GlR6EmbnRDJ1Z2Y4UWpWU00"}),"drive-linux-rpi v1.8.0"),"\u7684\u7db2\u5740"),Object(i.b)("p",null,"\u5728pi\u4e0a\u4f7f\u7528wget\u4e0b\u8f09\u525b\u525b\u7684\u7db2\u5740"),Object(i.b)("p",null,"wget \u2019\u8907\u88fd\u7db2\u5740\u2019"),Object(i.b)("p",null,"\u5c07\u4e0b\u8f09\u7684\u6a94\u6848\u66f4\u540d\u65b9\u4fbf\u57f7\u884c"),Object(i.b)("p",null,"mv \u2019\u4e0b\u8f09\u6a94\u6848\u6a94\u540d\u2019 drive"),Object(i.b)("p",null,"\u66f4\u6539\u6a94\u6848\u6b0a\u9650\u70ba775"),Object(i.b)("p",null,"sudo chmod 775 drive"),Object(i.b)("p",null,"\u57f7\u884c\u6a94\u6848\u53ef\u4ee5\u67e5\u770b\u6307\u4ee4"),Object(i.b)("p",null,"./drive"),Object(i.b)("p",null,"\u628a drive \u79fb\u52d5\u5230 /usr/local/bin"),Object(i.b)("p",null,"\u5c31\u53ef\u4ee5\u76f4\u63a5\u4ee5 drive \u4e0b\u6307\u4ee4\u7684\u65b9\u5f0f\u57f7\u884c"),Object(i.b)("p",null,"\u62ff\u4e0d\u5230 ip \u7684\u53ef\u4ee5\u8a66\u8a66\u770b\u9019\u500b\u65b9\u5f0f\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"~$ sudo vim /etc/rc.local")),Object(i.b)("p",null,"find the following line:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'printf "My IP address is %s\\n" "$_IP"')),Object(i.b)("p",null,"add this line below it"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'printf "My IP address is %s\\n" "$_IP" | sendmail {{mail_address}}')),Object(i.b)("p",null,"ip\u554f\u984c\u662f\u4e0d\u662f\u8cb7\u500b\u9019\u500b\u5c31\u89e3\u6c7a\u4e86(\uff1f"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://goods.ruten.com.tw/item/show?21443540660386"})),Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://goods.ruten.com.tw/item/show?21443540660386"}),"http://goods.ruten.com.tw/item/show?21443540660386")),Object(i.b)("p",null,"\u82e5raspberry pi\u7121\u6cd5\u9023\u7dda"),Object(i.b)("p",null,"sudo nano /etc/network/interfaces"),Object(i.b)("p",null,"(\u628a\u5167\u5bb9\u4fee\u6539\u6210)"),Object(i.b)("p",null,"auto lo"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"iface lo inet loopback")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"auto eth0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"allow-hotplug eth0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"iface eth0 inet dhcp")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"auto wlan0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"allow-hotplug wlan0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"iface wlan0 inet dhcp")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"wireless-essid NCNU")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"wireless-mode managed")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"iface default inet dhcp"))),Object(i.b)("p",null,"\u91cd\u65b0\u555f\u52d5\uff1a"),Object(i.b)("p",null,"sudo /etc/init.d/networking resta"))}o.isMDXComponent=!0},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),b=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var c=b.a.createContext({}),o=function(e){var t=b.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=o(e.components);return b.a.createElement(c.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,n=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(a),s=r,m=u["".concat(n,".").concat(s)]||u[s]||O[s]||i;return a?b.a.createElement(m,l({ref:t},c,{components:a})):b.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var c=2;c<i;c++)n[c]=a[c];return b.a.createElement.apply(null,n)}return b.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);