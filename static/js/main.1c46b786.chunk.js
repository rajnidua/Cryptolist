(this.webpackJsonpcryptolist=this.webpackJsonpcryptolist||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c,a,s,r,i,o,l=n(0),j=n.n(l),d=n(54),b=n.n(d),u=(n(72),n(18)),h=n.n(u),p=n(15),O=n(5),x=(n(53),n(1)),m=function(e){return Object(x.jsxs)("div",{className:"container-trending",children:[Object(x.jsx)("h1",{children:"Top 7 Trending Cryptos"}),Object(x.jsx)("div",{className:"card-section",children:e.trendingList.coins.map((function(e){return Object(x.jsxs)("div",{className:"show-card",children:[Object(x.jsx)(p.b,{to:{pathname:"/singleCrypto",state:[e.item.id]},children:Object(x.jsx)("img",{src:e.item.thumb})}),Object(x.jsx)("div",{children:e.item.symbol.toUpperCase()}),Object(x.jsx)("div",{children:e.item.name.toUpperCase()}),Object(x.jsx)(p.b,{to:{pathname:"/singleCrypto",state:[e.item.id]},children:Object(x.jsx)("button",{className:"btn-trending",children:"VIEW"})})]},e.item.id)}))})]})},g=n(12),f=n.n(g),v=n(19),y=n(4),k=(n(96),function(e){return h.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=".concat(e,"&sparkline=false"))}),N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return h.a.get("https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t))},w=(n(97),n(25)),_=n.n(w),C=function(e){var t=Object(l.useState)(!0),n=Object(y.a)(t,2),c=n[0],a=n[1],s=Object(l.useState)(),r=Object(y.a)(s,2),i=r[0],o=r[1];return Object(l.useEffect)((function(){var t;(t=e.crypto,h.a.get("https://api.coingecko.com/api/v3/coins/".concat(t))).then((function(e){console.log("Line 38 items data is ---\x3e",e.data),console.log("Assigning the value for setSingleCrypto"),o(e.data),a(!1)}))}),[]),c?Object(x.jsx)("div",{className:"show-loader",children:Object(x.jsx)(_.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}):(console.log("Single Crypto is :---",i),Object(x.jsx)("div",{children:c||Object(x.jsxs)("div",{className:"main-info-container",children:[Object(x.jsx)("div",{className:" title-crypto-container",children:Object(x.jsxs)("div",{className:"title-info",children:[Object(x.jsx)("img",{src:i.image.large}),Object(x.jsx)("span",{className:"title",children:i.name})]})}),Object(x.jsxs)("div",{className:"info-container",children:[Object(x.jsx)("div",{className:"single-crypto-container crypto-table",children:Object(x.jsx)("table",{children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{className:"table-row",children:[Object(x.jsx)("th",{scope:"row",children:"Market Rank"}),Object(x.jsx)("td",{children:i.market_cap_rank})]}),Object(x.jsxs)("tr",{className:"table-row",children:[Object(x.jsx)("th",{scope:"row",children:"Supply"}),Object(x.jsx)("td",{children:i.market_data.total_supply})]}),Object(x.jsxs)("tr",{className:"table-row",children:[Object(x.jsx)("th",{scope:"row",children:"Current Price"}),Object(x.jsx)("td",{children:i.market_data.current_price.usd})]}),Object(x.jsxs)("tr",{className:"table-row",children:[Object(x.jsx)("th",{scope:"row",children:"Market Cap"}),Object(x.jsx)("td",{children:i.market_data.market_cap.usd})]}),Object(x.jsxs)("tr",{className:"table-row",children:[Object(x.jsx)("th",{scope:"row",children:"Volume"}),Object(x.jsxs)("td",{children:[" ",i.market_data.total_volume.usd]})]}),Object(x.jsxs)("tr",{className:"table-row",children:[Object(x.jsx)("th",{scope:"row",children:"High(24h)"}),Object(x.jsx)("td",{children:i.market_data.total_volume.usd})]}),Object(x.jsxs)("tr",{className:"table-row",children:[Object(x.jsx)("th",{scope:"row",children:"Low(24h)"}),Object(x.jsxs)("td",{children:[" ",i.market_data.low_24h.usd]})]}),Object(x.jsxs)("tr",{className:"table-row",children:[Object(x.jsx)("th",{scope:"row",children:"Price Change(24h)"}),Object(x.jsxs)("td",{children:["$",i.market_data.price_change_24h_in_currency.usd," ","(%:"," ",i.market_data.price_change_percentage_24h_in_currency.usd,")"]})]})]})})}),Object(x.jsxs)("div",{className:"single-crypto-container desc",children:[i.description.en," "]})]})]})}))},S=function(e){return Object(x.jsxs)("div",{className:"crypto-container",children:[Object(x.jsxs)("div",{className:"crypto-row first",children:[Object(x.jsx)("h4",{className:"first-col",children:"Name"}),Object(x.jsx)("h4",{children:"Change(24hr)"}),Object(x.jsx)("h4",{children:"Price"}),Object(x.jsx)("h4",{children:"Change%"}),Object(x.jsx)("h4",{children:"Volume"}),Object(x.jsx)("h4",{className:"btn-buy-title",children:"VIEW"})]}),e.filteredList.map((function(e){return Object(x.jsxs)("div",{className:"crypto-row",children:[Object(x.jsxs)("div",{className:"crypto-name",children:[Object(x.jsx)("div",{className:"img-section",children:Object(x.jsx)(p.b,{to:{pathname:"/singleCrypto",state:[e.id]},className:"btn-img",children:Object(x.jsx)("img",{src:e.image,alt:"image"})})}),Object(x.jsxs)("div",{className:"name-section",children:[Object(x.jsx)("div",{className:"title",children:e.name}),Object(x.jsx)("div",{children:e.symbol.toUpperCase()})]})]}),Object(x.jsx)("div",{className:"change-percentage",children:e.market_cap_change_percentage_24h<0?Object(x.jsxs)("p",{className:"red",children:[e.market_cap_change_percentage_24h.toFixed(2),Object(x.jsx)("span",{className:"down-arrow",children:"\u2193"})]}):Object(x.jsxs)("p",{className:"green",children:["+",e.market_cap_change_percentage_24h?e.market_cap_change_percentage_24h.toFixed(2):"",Object(x.jsx)("span",{className:"up-arrow",children:"\u2191"})]})}),Object(x.jsxs)("div",{className:"current-price",children:["$",e.current_price]}),Object(x.jsx)("div",{className:"volume",children:e.price_change_percentage_24h}),Object(x.jsx)("div",{className:"volume",children:e.total_volume}),Object(x.jsx)(p.b,{to:{pathname:"/singleCrypto",state:[e.id]},className:"btn-img",children:Object(x.jsxs)("button",{className:"btn-buy",children:["VIEW ",e.symbol.toUpperCase()]})})]},e.id)}))]})},L=function(){var e=Object(l.useState)([]),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(l.useState)(!0),s=Object(y.a)(a,2),r=s[0],i=s[1],o=Object(l.useState)(!1),j=Object(y.a)(o,2),d=(j[0],j[1]),b=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,h.a.get("https://api.coingecko.com/api/v3/search/trending");case 4:t=e.sent,i(!1),i(!1),c(t.data),200!==t.status&&d(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),u=Object.keys(n).length;return Object(l.useEffect)((function(){b()}),[]),Object(x.jsx)("div",{className:"container-find-trending",children:r||!u?Object(x.jsx)("div",{children:"loading"}):Object(x.jsx)("div",{children:Object(x.jsx)(m,{loading:r,setLoading:i,trendingList:n})})})},F=function(e){return console.log("props from the trending page are",e),Object(x.jsx)("div",{children:Object(x.jsx)(L,{coin:e.location})})},P=n(22),E=n(64),I=n(23),M=I.a.nav(c||(c=Object(P.a)(["\n  background: #0096ff;\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.1rem calc((100vw - 1000px) / 2);\n  z-index: 12;\n"]))),T=Object(I.a)(p.c)(a||(a=Object(P.a)(["\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  font-size: 20px;\n  cursor: pointer;\n  &.active {\n    color: #bea5ae;\n    background-color: #0096ff;\n  }\n"]))),D=Object(I.a)(E.a)(s||(s=Object(P.a)(["\n  display: none;\n  color: #808080;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),R=I.a.div(r||(r=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),z=I.a.nav(i||(i=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),A=Object(I.a)(p.c)(o||(o=Object(P.a)(["\n  border-radius: 4px;\n  background-color: #d6d8da;\n  padding: 10px 22px;\n  color: #000000;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #808080;\n  }\n"]))),B=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(M,{children:[Object(x.jsx)(D,{}),Object(x.jsxs)(R,{children:[Object(x.jsx)(T,{to:"/trendingCrypto",children:"TRENDING"}),Object(x.jsx)(T,{to:"/",children:"SEARCH"}),Object(x.jsx)(T,{to:"/allCryptos",children:"ALL CRYPTOS"})]}),Object(x.jsx)(z,{children:Object(x.jsx)(A,{to:"/signin",children:"Sign In"})})]})})},H=n(8),V=n(35),W=n(133),U=n(136),G=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],J=function(e){var t=e.children,n=e.selected,c=e.onClick,a=Object(W.a)({selectbutton:{border:"2px solid #0096ff",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"Montserrat",cursor:"pointer",backgroundColor:n?"#ffb480":"",color:n?"black":"",fontWeight:n?700:500,"&:hover":{backgroundColor:"#ffb480",color:"black"},width:"22%"}})();return Object(x.jsx)("span",{onClick:c,className:a.selectbutton,children:t})},Y=n(6);Y.d.register(Y.c,Y.i,Y.k,Y.h,Y.o,Y.p,Y.f);var $=function(e){console.log("props from crypto chart ",e);var t=Object(l.useState)(),n=Object(y.a)(t,2),c=n[0],a=n[1],s=Object(l.useState)(1),r=Object(y.a)(s,2),i=r[0],o=r[1],j=Object(W.a)((function(e){return{container:Object(H.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))(),d=function(){var t=Object(v.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(e.crypto,i,"usd");case 3:if(n=t.sent,console.log("chart data is ",n.data),a(n.data.prices),200===n.status){t.next=8;break}throw new console.error("Something went wrong!");case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return console.log(c),Object(l.useEffect)((function(){d()}),[i]),Object(x.jsx)("div",{className:j.container,children:c?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(V.a,{data:{labels:c.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===i?n:t.toLocaleDateString()})),datasets:[{data:c.map((function(e){return e[1]})),label:"Price ( Past ".concat(i," Days ) in ").concat("usd"),borderColor:"#0096ff"}]},options:{elements:{point:{radius:1}}}}),Object(x.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:G.map((function(e){return Object(x.jsx)(J,{onClick:function(){return o(e.value)},selected:e.value===i,children:e.label},e.value)}))})]}):Object(x.jsx)(U.a,{style:{color:"#0096ff"},size:250,thickness:1})})},X=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(C,{crypto:e.location.state[0]}),Object(x.jsx)($,{crypto:e.location.state[0]})]})},q=n(27),K=n.n(q),Q=(n(117),function(e){for(var t=e.itemsCount,n=e.pageSize,c=e.currentPage,a=e.onPageChange,s=[],r=Object(l.useState)(0),i=Object(y.a)(r,2),o=i[0],j=i[1],d=Object(l.useState)(5),b=Object(y.a)(d,1)[0],u=Object(l.useState)(5),h=Object(y.a)(u,2),p=h[0],O=h[1],m=Object(l.useState)(0),g=Object(y.a)(m,2),f=g[0],v=g[1],k=1;k<=Math.ceil(t/n);k++)s.push(k);var N=function(e){j(e)};return Object(x.jsxs)("div",{className:"pagination",children:[Object(x.jsx)("button",{className:"prev-btn",onClick:function(){a(c-1),(c-1)%b===0&&(O(p-b),v(f-b)),N(c-2)},disabled:c===s[0],children:"Prev"}),s.map((function(e,t){return e<=p&&e>f?Object(x.jsx)("button",{onClick:function(){a(e),N(t)},className:"page-link ".concat(o===t?"active":""),children:e},t):null})),Object(x.jsx)("button",{className:"next-btn",onClick:function(){a(c+1),c+1>p&&(O(p+b),v(f+b)),N(c)},disabled:c===s[s.length-1],children:"Next"})]})}),Z=(n(118),function(){var e=Object(l.useState)([]),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(l.useState)(!0),s=Object(y.a)(a,2),r=s[0],i=s[1],o=Object(l.useState)(!1),j=Object(y.a)(o,2),d=(j[0],j[1]),b=Object(l.useState)(1),u=Object(y.a)(b,2),h=u[0],p=u[1],O=Object(l.useState)(1),m=Object(y.a)(O,2),g=m[0],N=m[1],w=Object(l.useState)(10),C=Object(y.a)(w,2),L=C[0],F=(C[1],Object.keys(n).length),P=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,k(h);case 4:t=e.sent,i(!1),i(!1),c(t.data),200!==t.status&&d(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:p(h+1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),E=function(e,t,n){var c=(t-1)*n;return K()(e).slice(c).take(n).value()}(n,g,L);return Object(l.useEffect)((function(){P()}),[]),Object(x.jsxs)("div",{children:[r?Object(x.jsx)("div",{className:"show-loader",children:Object(x.jsx)(_.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}):Object(x.jsxs)("div",{children:[Object(x.jsx)(S,{loading:r,setLoading:i,filteredList:E}),Object(x.jsx)(Q,{itemsCount:F,pageSize:L,currentPage:g,onPageChange:function(e){N(e)}})]}),h<=4?Object(x.jsx)("div",{className:"load-next-records",children:Object(x.jsx)("button",{onClick:P,className:"btn-new-page","data-testid":"next-page",children:Object(x.jsx)("p",{children:1===h?Object(x.jsx)("span",{children:"LOAD FROM BEGINNING"}):Object(x.jsx)("span",{children:"LOAD NEXT 100 RECORDS"})})})}):Object(x.jsx)("div",{children:p(1)})]})}),ee=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(Z,{})})},te=(n(119),n(63)),ne=n(62),ce=function(e){var t=Object(l.useState)(""),n=Object(y.a)(t,2),c=n[0],a=n[1],s=Object(l.useState)([]),r=Object(y.a)(s,2),i=r[0],o=r[1],j=Object(l.useState)(!1),d=Object(y.a)(j,2),b=(d[0],d[1]),u=Object(l.useState)(!0),p=Object(y.a)(u,2),O=p[0],m=p[1],g=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,n=1,h.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=".concat(n,"&sparkline=false"));case 4:t=e.sent,m(!1),m(!1),o(t.data),200!==t.status&&b(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}var n}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),k=i.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())||e.symbol.toLowerCase().includes(c.toLowerCase())}));return Object(l.useEffect)((function(){g()}),[]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"search-container",children:[Object(x.jsx)(ne.a,{icon:te.a}),Object(x.jsx)("input",{name:"searchInput",value:c,onChange:function(e){return a(e.target.value)},type:"text",size:"lg","data-testid":"input-element",placeholder:"Search",className:"search-input"})]}),Object(x.jsx)("div",{className:"result-container",children:O?Object(x.jsx)("div",{className:"show-loader",children:Object(x.jsx)(_.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}):Object(x.jsx)(S,{loading:O,setLoading:m,filteredList:k})})]})},ae=function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(ce,{inputValue:e.location})})};var se=function(){return Object(x.jsx)(p.a,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(B,{}),Object(x.jsxs)(O.c,{children:[Object(x.jsx)(O.a,{exact:!0,path:"/trendingCrypto",component:F}),Object(x.jsx)(O.a,{exact:!0,path:"/singleCrypto",component:X}),Object(x.jsx)(O.a,{exact:!0,path:"/allCryptos",component:ee}),Object(x.jsx)(O.a,{exact:!0,path:"/",component:ae}),Object(x.jsx)(O.a,{render:function(){return Object(x.jsx)("h1",{className:"display-2",children:"Wrong page!"})}})]})]})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};b.a.render(Object(x.jsx)(j.a.StrictMode,{children:Object(x.jsx)(se,{})}),document.getElementById("root")),re()},53:function(e,t,n){},72:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.1c46b786.chunk.js.map