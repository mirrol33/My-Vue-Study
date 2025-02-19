(function(){"use strict";var n={4454:function(n,e,t){var o=t(5130),i=t(6768);const r={class:"header"};function s(n,e){const t=(0,i.g2)("router-link"),o=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("header",null,[(0,i.Lk)("div",r,[(0,i.Lk)("nav",null,[(0,i.bF)(t,{to:"/"},{default:(0,i.k6)((()=>e[0]||(e[0]=[(0,i.eW)("Home")]))),_:1}),(0,i.bF)(t,{to:"/about"},{default:(0,i.k6)((()=>e[1]||(e[1]=[(0,i.eW)("About")]))),_:1})])])]),(0,i.Lk)("main",null,[(0,i.bF)(o)]),e[2]||(e[2]=(0,i.Lk)("footer",null,[(0,i.Lk)("div",{class:"inner"},[(0,i.Lk)("p",null,"@2025 All Rights Reserved."),(0,i.Lk)("p",null,"freelife11@nate.com")])],-1))])}var a=t(1241);const l={},u=(0,a.A)(l,[["render",s]]);var c=u,d=t(1387),v=t(4232),p=t.p+"media/1.67189926.mp4";const f={class:"main-wrap"},h={class:"main-visual"},b={class:"video-area"},k={class:"video",ref:"video",autoplay:"",muted:"",loop:"",playsinline:""},m={class:"grid"};function g(n,e,t,o,r,s){return(0,i.uX)(),(0,i.CE)("div",f,[(0,i.Lk)("section",h,[(0,i.Lk)("div",b,[(0,i.Lk)("video",k,e[0]||(e[0]=[(0,i.Lk)("source",{src:p,type:"video/mp4"},null,-1),(0,i.eW)(" Your browser does not support the video tag. ")]),512)]),(0,i.Lk)("div",m,[((0,i.uX)(),(0,i.CE)(i.FK,null,(0,i.pI)(15,(n=>(0,i.Lk)("div",{key:n,class:(0,v.C4)("box n"+n)},e[1]||(e[1]=[(0,i.Lk)("span",null,null,-1),(0,i.Lk)("p",null,null,-1)]),2))),64))])]),e[2]||(e[2]=(0,i.Fv)('<section class="intro-info"><div class="inner"><div class="intro-01"><p>다양한 경험을 바탕으로 사용자 중심의 웹 디자인을 완성하는 <b>웹 프론트엔드 개발자</b>입니다. <b>React, Vue, Node.js, SCSS(SASS), JavaScript, TypeScript, PHP</b> 등을 활용하여 고도화된 웹 애플리케이션 및 쇼핑몰을 개발했으며, <b>그누보드, 워드프레스, 카페24 스마트 스토어</b> 등에서 사용자 경험을 최우선으로 고려한 사이트 제작에 능숙합니다. 또한, 미디어쿼리와 트랜지션 효과를 활용하여 <b>반응형 웹 최적화</b> 및 <b>사용자 경험</b>을 향상시키는 데 주력하고 있습니다.</p></div><div class="intro-02"><h2>어쩌구 저쩌구구</h2></div></div></section><section class="work-history"><div class="inner"><div class="work-history-wrap"><ul class="list"><li><div class="data">2022.5-2023.11 (1년5개월)</div><div class="name">(주)팀스완</div><div class="details"><p class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</p><p class="job">주요직무 : 웹퍼블리셔</p><p class="area">근무지역 : 서울</p><p class="reason">퇴사사유 : 경영악화</p></div></li></ul></div></div></section><section class="portfolio-site"><div class="inner"><ul></ul></div></section><section class="portfolio-design"><div class="inner"></div></section><section class="edu-history"><div class="inner"></div></section><section class="main-skills"><div class="inner"></div></section>',6))])}t(8992),t(3949);var y={name:"MainPage",data(){return{mainText:["web Design","Front-End Develop","OF THE YEAR","2025"],targetIdx:[5,8,11,14]}},mounted(){this.addText()},methods:{addText(){this.targetIdx.forEach(((n,e)=>{const t=document.querySelector(`.n${n} p`);t&&(t.textContent=this.mainText[e])}))}}};const L=(0,a.A)(y,[["render",g]]);var w=L;function x(n,e,t,o,r,s){return(0,i.uX)(),(0,i.CE)("div",null,e[0]||(e[0]=[(0,i.Lk)("h1",null,"About Page",-1),(0,i.Lk)("p",null,"Learn more about us on this page.",-1)]))}var E={name:"AboutPage"};const P=(0,a.A)(E,[["render",x]]);var O=P;function A(n,e,t,o,r,s){return(0,i.uX)(),(0,i.CE)("div",null,e[0]||(e[0]=[(0,i.Lk)("h1",null,"404 - Page Not Found",-1),(0,i.Lk)("p",null,"The page you are looking for does not exist.",-1)]))}var C={name:"NotFoundPage"};const F=(0,a.A)(C,[["render",A]]);var S=F;const T=[{path:"/",component:w},{path:"/about",component:O},{path:"/:pathMatch(.*)*",component:S}],j=(0,d.aE)({history:(0,d.LA)("/MY-VUE-PJ/My-Portfolio/"),routes:T});var M=j;const _=(0,o.Ef)(c);_.use(M),_.mount("#app")}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return n[o].call(r.exports,r,r.exports,t),r.exports}t.m=n,function(){var n=[];t.O=function(e,o,i,r){if(!o){var s=1/0;for(c=0;c<n.length;c++){o=n[c][0],i=n[c][1],r=n[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(t.O).every((function(n){return t.O[n](o[l])}))?o.splice(l--,1):(a=!1,r<s&&(s=r));if(a){n.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=n.length;c>0&&n[c-1][2]>r;c--)n[c]=n[c-1];n[c]=[o,i,r]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/MY-VUE-PJ/"}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var i,r,s=o[0],a=o[1],l=o[2],u=0;if(s.some((function(e){return 0!==n[e]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(l)var c=l(t)}for(e&&e(o);u<s.length;u++)r=s[u],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(c)},o=self["webpackChunkMy_Portfolio"]=self["webpackChunkMy_Portfolio"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(4454)}));o=t.O(o)})();
//# sourceMappingURL=app.0a6015be.js.map