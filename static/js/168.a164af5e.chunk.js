"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{2168:function(t,e,n){n.r(e),n.d(e,{Reviews:function(){return s},default:function(){return p}});var r=n(885),a={item:"Reviews_item__DJKij",text:"Reviews_text__EqLvx",title:"Reviews_title__t265C"},c=n(2791),i=n(7422),u=n(6871),o=n(184),s=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1],p=(0,u.UO)().movieId;return(0,c.useEffect)((function(){(0,i.D$)(p).then(s)}),[p]),console.log(n),(0,o.jsx)(o.Fragment,{children:n.length?n.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h2",{className:a.title,children:"Content"}),(0,o.jsx)("p",{className:a.text,children:t.content}),(0,o.jsx)("img",{src:t.avatar_path&&"https://www.themoviedb.org/review/".concat(t.profile_path),alt:"".concat(t.title," portrait"),className:a.img}),(0,o.jsx)("b",{className:a.title,children:t.author})]},t.id)})):(0,o.jsx)("p",{children:"Reviews not found"})})},p=s},7422:function(t,e,n){n.d(e,{D$:function(){return l},R4:function(){return v},vw:function(){return p},z1:function(){return f},zq:function(){return s}});var r=n(5861),a=n(7757),c=n.n(a),i=n(4569),u=n.n(i);u().defaults.baseURL="https://api.themoviedb.org/3/";var o="3b3b2a52a8d81c1bd80a2943e9f5b0db",s=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return u().get("/trending/movie/day?api_key=".concat(o,"&page=").concat(t))},f=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u().get("/search/movie?api_key=".concat(o),{params:{query:e,per_page:20}}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.a164af5e.chunk.js.map