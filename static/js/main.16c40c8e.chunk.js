(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__3jR26",btn:"ContactListItem_btn__1jinN",margin:"ContactListItem_margin__1juFy"}},13:function(t,e,n){t.exports=n(22)},18:function(t,e,n){},19:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),l=n.n(r),o=(n(18),n(12)),i=n(2),u=n(3),s=n(5),m=n(4),f=(n(19),n(10)),h=n(1),d=n.n(h),b=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name",c.a.createElement("br",null),c.a.createElement("input",{type:"text",value:e,name:"name",onChange:this.handleChange,required:!0})),c.a.createElement("br",null),c.a.createElement("label",null,"Number",c.a.createElement("br",null),c.a.createElement("input",{className:d.a.margin,type:"tel",value:n,name:"number",onChange:this.handleChange})),c.a.createElement("br",null),c.a.createElement("button",{className:d.a.btn,type:"submit"},"Add contact"))}}]),n}(a.Component),p=function(t){var e=t.el,n=t.delCont;return c.a.createElement("li",{className:d.a.listItem},e.name,": ",e.number,c.a.createElement("button",{className:d.a.btn,onClick:n},"Delete"))},C=function(t){var e=t.contacts,n=t.deleteContact;return c.a.createElement("section",null,c.a.createElement("ul",null,e.map((function(t){return c.a.createElement(p,{key:t.id,el:t,delCont:function(){return n(t.id)}})}))))},v=function(t){var e=t.handleChangeFilter,n=t.filter;return c.a.createElement("section",null,c.a.createElement("label",null,"Find contacts by name",c.a.createElement("input",{onChange:e,value:n,name:"filter",type:"text"})))},E=n(11),g=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return e===t.name})))alert(e+" is already in contacts");else{var a={id:Object(E.v4)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[a])}}))}},t.handleChangeFilter=function(e){e.persist(),t.setState((function(){return{filter:e.target.value}}))},t.filteredContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(){return{contacts:t.state.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(b,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),this.state.contacts.length>1&&c.a.createElement(v,{handleChangeFilter:this.handleChangeFilter,filter:this.state.filter}),c.a.createElement(C,{contacts:this.filteredContact(),deleteContact:this.deleteContact}))}}]),n}(a.Component);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.16c40c8e.chunk.js.map