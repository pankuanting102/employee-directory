(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var a=s(0),l=s(2),c=s(12),r=s.n(c),n=s(13),i=s(14),o=s(15),d=s(18),j=s(17);s(24);var u=function(e){var t=e.results;return Object(a.jsx)("div",{className:"wrapper",children:t?t.map((function(e,t){return Object(a.jsxs)("div",{className:"row pd-btm",children:[Object(a.jsx)("img",{alt:"1",className:"profile-img table-title col-1",src:e.picture.large}),Object(a.jsxs)("div",{className:"table-title col-3",children:[e.name.first," ",e.name.last]}),Object(a.jsx)("div",{className:"table-title col-3",children:e.phone}),Object(a.jsx)("div",{className:"table-title col-3",children:e.email}),Object(a.jsx)("div",{className:"table-title col-2",children:e.dob.date.slice(0,10)})]},t)})):"Loaging..."})};s(25);var h=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"Employee Directory"}),Object(a.jsx)("h2",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})},b=(s(26),s(16)),m=s.n(b),v=function(){return m.a.get("https://randomuser.me/api/?results=100&nat=us")},p=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={allUsers:[],filteredUsers:[],searchName:""},e.handleInputChange=function(t){var s=t.target,a=s.name,l=s.value;e.setState(Object(n.a)({},a,l),(function(){console.log(e.state.searchName),console.log(e.state.allUsers);var t=e.state.allUsers.filter((function(t){return t.name.first.includes(e.state.searchName)}));console.log(t),e.setState({filteredUsers:t})}))},e.handleSubmit=function(t){t.preventDefault();var s=e.state.allUsers.reverse();console.log(s),console.log("clicked"),e.setState({filteredUsers:s})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){console.log(t.data.results),e.setState({allUsers:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{}),Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsx)("form",{children:Object(a.jsx)("input",{value:this.state.searchName,name:"searchName",onChange:this.handleInputChange,type:"text",placeholder:"Search Employee"})})}),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"table-title col-1",children:"Image"}),Object(a.jsx)("div",{className:"table-title click col-3",onClick:this.handleSubmit,children:"Name"}),Object(a.jsx)("div",{className:"table-title col-3",children:"Phone Number"}),Object(a.jsx)("div",{className:"table-title col-3",children:"Email"}),Object(a.jsx)("div",{className:"table-title col-2",children:"DOB"})]}),Object(a.jsx)("hr",{className:"rule"})]}),Object(a.jsx)(u,{results:this.state.filteredUsers})]})}}]),s}(l.Component);var O=function(){return Object(a.jsx)(p,{})};r.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a68eefa7.chunk.js.map