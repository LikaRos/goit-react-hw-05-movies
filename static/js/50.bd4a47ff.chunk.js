"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{9659:function(e,t,n){n.d(t,{s:function(){return o}});var r=n(501),a=n(6871),c="MoviesGallery_list__aM+SO",u=n(184),o=function(e){var t=e.movies,n=(0,a.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:c,children:null===t?(0,u.jsx)("p",{children:"Movie is not found"}):t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/goit-react-hw-05-movies/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})})}},7422:function(e,t,n){n.d(t,{D$:function(){return v},R4:function(){return p},vw:function(){return f},z1:function(){return l},zq:function(){return s}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u);o().defaults.baseURL="https://api.themoviedb.org/3/";var i="3b3b2a52a8d81c1bd80a2943e9f5b0db",s=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o().get("/trending/movie/day?api_key=".concat(i,"&page=").concat(e))},l=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o().get("/search/movie?api_key=".concat(i),{params:{query:t,per_page:20}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5050:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(885),a=n(2791),c=n(501),u=n(7422),o=n(9659),i={},s=n(184);function f(e){var t=e.onSubmit,n=(0,a.useState)(""),c=(0,r.Z)(n,2),u=c[0],o=c[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("header",{className:"searchbar",children:(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(u),o("")},className:i.form,children:[(0,s.jsx)("button",{type:"submit",className:"button",children:(0,s.jsx)("span",{className:"button-label",children:"Search"})}),(0,s.jsx)("input",{className:i.input,value:u,type:"text",placeholder:"Search movies",onChange:function(e){o(e.target.value)}})]})})})}var l="idle",p="error";function v(){var e=(0,a.useState)(l),t=(0,r.Z)(e,2),n=t[0],i=t[1],v=(0,a.useState)([]),d=(0,r.Z)(v,2),h=d[0],m=d[1],b=(0,c.lr)(),x=(0,r.Z)(b,2),g=x[0],y=x[1],k=g.get("query");if((0,a.useEffect)((function(){console.log(k),k&&(0,u.z1)(k).then((function(e){var t=e.data;return m(t.results)})).catch((function(){i(p)}))}),[k]),console.log(h),n)return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{onSubmit:function(e){y({query:e})}}),(0,s.jsx)(o.s,{movies:h})]})}}}]);
//# sourceMappingURL=50.bd4a47ff.chunk.js.map