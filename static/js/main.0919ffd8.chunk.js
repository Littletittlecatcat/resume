(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/artemis.9c3037cc.jpg"},function(e,a,t){e.exports=t.p+"static/media/book thief.cfc5737c.jpg"},function(e,a,t){e.exports=t.p+"static/media/flipped.80607fd2.jpg"},function(e,a,t){e.exports=t.p+"static/media/oneday.116b6857.jpg"},function(e,a,t){e.exports=t.p+"static/media/the time machine.5befb086.jpg"},,,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(6),r=t.n(c),s=(t(22),t(7)),i=t(8),m=t(16),o=t(15),u=t(9),d=t.n(u),p=(t(23),t(1)),E=t(2),h=t(3),f=t(4),v=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.description,t=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),l.a.createElement("h3",null,a),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},t))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component),N=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2017 Tim Baker"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),g=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.phone,c=this.props.data.email,r=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Michael Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n),l.a.createElement("br",null),l.a.createElement("span",null,c))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:r,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),b=t(10),w=t.n(b),y=t(11),j=t.n(y),k=t(12),O=t.n(k),C=t(13),D=t.n(C),x=t(14),S=t.n(x),M=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("h3",null,e.school2),l.a.createElement("p",{className:"info"},e.degree,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("li",{className:"description"},e.description1),l.a.createElement("li",{className:"description"},e.description2),l.a.createElement("li",{className:"description"},e.description3),l.a.createElement("li",{className:"description"},e.description4),l.a.createElement("div",null,l.a.createElement("img",{className:"pic",src:w.a,alt:""}),l.a.createElement("img",{className:"pic",src:j.a,alt:""}),l.a.createElement("img",{className:"pic",src:O.a,alt:""}),l.a.createElement("img",{className:"pic",src:D.a,alt:""}),l.a.createElement("img",{className:"pic",src:S.a,alt:""})))})),n=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))}));return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),W=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.phone,n=(this.props.data.email,this.props.data.contactmessage);return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},n))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email"," ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message"," ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),a," ",l.a.createElement("br",null),l.a.createElement("span",null,t))),l.a.createElement("div",{className:"widget widget_tweets"},l.a.createElement("h4",{className:"widget-title"},"Latest Tweets"),l.a.createElement("ul",{id:"twitter"})))))}}]),t}(n.Component),F=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(n.Component),A=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},n}return Object(i.a)(t,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(g,{data:this.state.resumeData.main}),l.a.createElement(M,{data:this.state.resumeData.resume}),l.a.createElement(F,{data:this.state.resumeData.portfolio}),l.a.createElement(W,{data:this.state.resumeData.main}),l.a.createElement(N,{data:this.state.resumeData.main}))}}]),t}(n.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(l.a.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/resume",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/resume","/service-worker.js");R?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):T(e)}))}}()}],[[17,1,2]]]);
//# sourceMappingURL=main.0919ffd8.chunk.js.map