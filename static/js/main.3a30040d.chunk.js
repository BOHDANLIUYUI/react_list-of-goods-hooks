(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(6),l=n(8),r=n(1),a=(n(13),n(14),n(4)),u=n.n(a),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.None="",t.Alphabetically="alphabetically",t.Length="length"}(c||(c={}));var j=function(){var t=Object(r.useState)(c.None),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(r.useState)(!1),a=Object(i.a)(o,2),j=a[0],d=a[1],g=function(t,e){var n=e.sortMethod,s=e.isReversed,o=Object(l.a)(t);switch(n){case c.Alphabetically:o=o.sort((function(t,e){return t.localeCompare(e)}));break;case c.Length:o=o.sort((function(t,e){return t.length-e.length}))}return s&&(o=o.reverse()),o}(h,{sortMethod:n,isReversed:j});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return s(c.Alphabetically)},type:"button",className:u()("button is-info",{"is-light":n!==c.Alphabetically}),children:"Sort alphabetically"}),Object(b.jsx)("button",{onClick:function(){return s(c.Length)},type:"button",className:u()("button is-success",{"is-light":n!==c.Length}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){return d(!j)},type:"button",className:u()("button is-warning",{"is-light":!j}),children:"Reverse"}),(n||j)&&Object(b.jsx)("button",{onClick:function(){s(c.None),d(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3a30040d.chunk.js.map