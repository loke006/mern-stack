(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(e,a,t){e.exports={shadowed:"About_shadowed__qycFA",terminal:"About_terminal__1FszD",topRow:"About_topRow__hDdE1",red:"About_red__3rPe9",amber:"About_amber__148FQ",green:"About_green__21wCl",window:"About_window__16mjn",emoji:"About_emoji__1gAYL"}},,,,,,,function(e,a,t){e.exports={shadowed:"Home_shadowed__Lv4pJ",firstName:"Home_firstName__BS-EW",emoji:"Home_emoji__3d6jG",avatar:"Home_avatar__23mjw",mainImg:"Home_mainImg__v5IGL",socials:"Home_socials__3Jz0X"}},,function(e,a,t){e.exports={shadowed:"Portfolio_shadowed__1bWvY",projectsGrid:"Portfolio_projectsGrid__2UtkP",block:"Portfolio_block__2XiVJ",image:"Portfolio_image__2WipH",source:"Portfolio_source__3BZuy"}},function(e,a,t){e.exports={shadowed:"BaseLayout_shadowed__1g7o7",light:"BaseLayout_light__1z66x",dark:"BaseLayout_dark__2BUQc",container:"BaseLayout_container__2hXED"}},function(e,a,t){e.exports={shadowed:"Navbar_shadowed__3WL2c",navList:"Navbar_navList__RwM-9",logo:"Navbar_logo__3TDue",dark:"Navbar_dark__1Fw6d",topRow:"Navbar_topRow__3z73h"}},,,,,,,function(e,a,t){e.exports={shadowed:"App_shadowed__3jrTB"}},function(e,a,t){e.exports={toggler:"Toggler_toggler__19B26"}},function(e,a,t){e.exports=t.p+"static/media/self.aa1917bd.png"},,function(e,a,t){e.exports=t.p+"static/media/mock1.456d27d3.png"},function(e,a,t){e.exports=t.p+"static/media/mock2.37e11540.png"},function(e,a,t){e.exports=t.p+"static/media/mock3.6a736fcd.png"},function(e,a,t){e.exports=t.p+"static/media/mock4.bd6a383d.png"},,function(e,a,t){e.exports=t(40)},,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),o=t.n(l),i=t(21),c=t.n(i),s=t(29),m=t(13),u=t.n(m),d=t(4),p=t.n(d),_=t(8),E=t(14),f=t.n(E),h=t(22),b=t.n(h);function g(e){var a=e.darkMode,t=e.handleClick;return r.a.createElement("div",{className:b.a.toggler,onClick:t},a?r.a.createElement("span",{"aria-label":"Full Moon",role:"img"},"\ud83c\udf15"):r.a.createElement("span",{"aria-label":"New Moon",role:"img"},"\ud83c\udf11"))}var v=t(23),N=["rgb(185, 85, 211)","rgb(247, 10, 7)"],k={firstName:"John",lastName:"Smith",initials:"js",position:"Full Stack Developer",selfPortrait:t.n(v).a,gradient:"linear-gradient(135deg, ".concat(N,")"),miniBio:[["\u2615\ufe0f","Fueled by coffee"],["\ud83c\uddfa\ud83c\uddf8","Based in the US"],["\ud83d\udcbc","Systems Engineer at Google"],["\u2709\ufe0f","johnsmith@gmail.com"]],socials:[["https://facebook.com/",r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"})],["https://instagram.com/",r.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"})],["https://linkedin.com",r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"})],["https://medium.com",r.a.createElement("i",{className:"fa fa-medium","aria-hidden":"true"})],["https://twitter.com",r.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"})]],bio:"Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",hobbies:[["\ud83d\udcd6","reading"],["\ud83c\udfad","theater"],["\ud83c\udfa5","movies"],["\ud83c\udf36","spicy food"]],portfolio:[{title:"Project 1",liveLink:"#",sourceLink:"#"},{title:"Project 2",liveLink:"#",sourceLink:"#"},{title:"Project 3",liveLink:"#",sourceLink:"#"},{title:"Project 4",liveLink:"#",sourceLink:"#"}]};function w(e){var a=e.darkMode,t=e.handleClick;return r.a.createElement("nav",null,r.a.createElement("ul",{className:p()(f.a.navList,a?f.a.dark:null)},r.a.createElement("li",null,r.a.createElement(_.b,{exact:!0,activeClassName:"current",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(_.b,{exact:!0,activeClassName:"current",to:"/about"},"About Me")),r.a.createElement("li",null,r.a.createElement(_.b,{exact:!0,activeClassName:"none",to:"/"},r.a.createElement("span",{className:f.a.logo},k.initials))),r.a.createElement("li",null,r.a.createElement(_.b,{exact:!0,activeClassName:"current",to:"/portfolio"},"Portfolio")),r.a.createElement(g,{darkMode:a,handleClick:t})))}var L=t(1),j=t(10),x=t.n(j);function y(){var e={background:k.gradient,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},a=k.miniBio;var t=k.socials;return r.a.createElement("main",null,r.a.createElement("div",{className:p()(x.a.avatar,x.a.shadowed),style:{background:k.gradient}},r.a.createElement("img",{src:k.selfPortrait,alt:"self",className:x.a.mainImg})),r.a.createElement("div",{className:x.a.mainText},r.a.createElement("h1",null,"Hi, I'm ",r.a.createElement("span",{style:e},k.firstName)," \ud83d\udc4b\ud83c\udffb"),r.a.createElement("h2",null,"I'm a ",k.position,"."),r.a.createElement("ul",null,function(){for(var e=[],t=0;t<a.length;t++){var n=a[t];e.push(r.a.createElement("li",null,r.a.createElement("span",{"aria-label":"emoji",role:"img",className:x.a.emoji},n[0])," ",n[1]))}return e}()),r.a.createElement("div",{className:x.a.socials},function(){for(var e=[],a=0;a<t.length;a++){var n=t[a];e.push(r.a.createElement("a",{href:n[0]},n[1]))}return e}())))}var C=t(3),P=t.n(C);function B(){var e="fa fa-circle",a=k.hobbies;return r.a.createElement("div",{className:P.a.about},r.a.createElement("div",{className:p()(P.a.terminal,P.a.shadowed)},r.a.createElement("div",{className:P.a.topRow},r.a.createElement("i",{className:p()(e,P.a.red)}),r.a.createElement("i",{className:p()(e,P.a.amber)}),r.a.createElement("i",{className:p()(e,P.a.green)})),r.a.createElement("div",{className:P.a.window},r.a.createElement("p",null,r.a.createElement("span",{style:{color:N[1]}},k.firstName.toLowerCase(),k.lastName.toLowerCase()," $")," cat about",k.firstName.toLowerCase()," "),r.a.createElement("p",null,r.a.createElement("span",{style:{color:N[1]}},"about",k.firstName.toLowerCase()," ",r.a.createElement("span",{className:P.a.green},"(master)")," $ "),k.bio))),r.a.createElement("div",{id:"bot",className:p()(P.a.terminal,P.a.shadowed)},r.a.createElement("div",{className:P.a.topRow},r.a.createElement("i",{className:p()(e,P.a.red)}),r.a.createElement("i",{className:p()(e,P.a.amber)}),r.a.createElement("i",{className:p()(e,P.a.green)})),r.a.createElement("div",{className:P.a.window},r.a.createElement("p",null,r.a.createElement("span",{style:{color:N[1]}},k.firstName.toLowerCase(),k.lastName.toLowerCase()," $")," cd hobbies/interests"),r.a.createElement("p",null,r.a.createElement("span",{style:{color:N[1]}},"hobbies/interests ",r.a.createElement("span",{className:P.a.green},"(master)")," $")," ls"),r.a.createElement("ul",null,function(){for(var e=[],t=0;t<a.length;t++){var n=a[t];e.push(r.a.createElement("li",null,r.a.createElement("span",{"aria-label":"emoji",role:"img",className:P.a.emoji},n[0])," ",n[1]))}return e}()))))}var A=t(12),I=t.n(A),H=t(25),M=t.n(H),S=t(26),F=t.n(S),J=t(27),G=t.n(J),R=t(28),T=t.n(R);function W(){var e=k.portfolio,a=[M.a,F.a,G.a,T.a];return r.a.createElement("main",null,r.a.createElement("div",{className:I.a.projectsGrid},function(){for(var t=[],n=0,l=0;l<e.length;l++)t.push(r.a.createElement("div",{className:I.a.block},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:k.portfolio[l].liveLink},r.a.createElement("img",{className:I.a.image,src:a[n++]})),r.a.createElement("h1",null,k.portfolio[l].title),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:k.portfolio[l].sourceLink,style:{backgroundColor:N[1]},className:I.a.source},"Source Code")));return t}()))}function D(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:p()(u.a.container,t?u.a.dark:u.a.light)},r.a.createElement(w,{darkMode:t,handleClick:function(){l(!t),console.log(t)}}),r.a.createElement(z,null),r.a.createElement("footer",null,r.a.createElement("p",null," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://paytonjewell.github.io/"},"Template made with \u2665 by PJ")),r.a.createElement("p",null,"\xa9 2020")))}var z=function(){return r.a.createElement(L.c,null,r.a.createElement(L.a,{exact:!0,path:"/",component:y}),r.a.createElement(L.a,{exact:!0,path:"/about",component:B}),r.a.createElement(L.a,{exact:!0,path:"/portfolio",component:W}))};var $=function(){return r.a.createElement(_.a,null,r.a.createElement("div",{className:c.a.app},r.a.createElement(D,null,r.a.createElement(y,null))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.dfc87282.chunk.js.map