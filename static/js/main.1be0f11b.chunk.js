(this.webpackJsonpformulariowo=this.webpackJsonpformulariowo||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(8),c=a.n(i),o=(a(14),a(15),a(9)),s=a(3),u=a(5),d=a(7),j=a(0),l={id:null,usuario:"",apodo:"",contrasenia:""},b=function(t){var e=t.agregarRegistro,a=t.actualizarRegistro,r=t.datoEditar,i=t.setDatoEditar,c=Object(n.useState)(l),o=Object(s.a)(c,2),b=o[0],O=o[1];Object(n.useEffect)((function(){O(r||l)}),[r]);var h=function(t){O(Object(d.a)(Object(d.a)({},b),{},Object(u.a)({},t.target.name,t.target.value)))},p=function(t){O(l),i(null)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{class:"segundo",children:"\xa0\xa0\xa0Agregar"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b.usuario&&b.apodo&&b.contrasenia?(null===b.id?e(b):a(b),p()):alert("Datos incompletos")},children:[Object(j.jsx)("input",{type:"text",name:"usuario",placeholder:"@Usuario",onChange:h,value:b.usuario}),Object(j.jsx)("input",{type:"text",name:"apodo",placeholder:"Apodo",onChange:h,value:b.apodo}),Object(j.jsx)("input",{type:"text",name:"contrasenia",placeholder:"Contrasenia",onChange:h,value:b.contrasenia}),Object(j.jsx)("input",{type:"submit",value:"Enviar"}),Object(j.jsx)("input",{type:"reset",value:"Limpiar",onClick:p})]})]})},O=function(t){var e=t.el,a=t.setDatoEditar,n=t.borrarRegistro,r=e.id,i=e.usuario,c=e.apodo;e.contrasenia;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:i}),Object(j.jsx)("td",{children:c}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{onClick:function(){return a(e)},children:"Editar"}),Object(j.jsx)("button",{onClick:function(){return n(r)},children:"Eliminar"})]})]})},h=function(t){var e=t.data,a=t.setDatoEditar,n=t.borrarRegistro;return Object(j.jsxs)("div",{class:"tercer",children:[Object(j.jsx)("h3",{class:"segundo",children:"Tabla de Datos"}),Object(j.jsx)("table",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Usuario"}),Object(j.jsx)("th",{children:"Apodo"}),Object(j.jsx)("th",{children:"Opciones"})]}),e.length>0?e.map((function(t){return Object(j.jsx)(O,{el:t,setDatoEditar:a,borrarRegistro:n},t.id)})):Object(j.jsx)("tr",{children:Object(j.jsx)("td",{colSpan:"3",children:"Sin Datos"})})]})})]})},p=[{id:1,usuario:"@user_01",apodo:"Manolo",contrasenia:"pass01"},{id:2,usuario:"@user_02",apodo:"Ariana",contrasenia:"pass02"},{id:3,usuario:"@user_03",apodo:"Paolo",contrasenia:"pass03"},{id:4,usuario:"@user_04",apodo:"Hachi",contrasenia:"pass04"},{id:5,usuario:"@user_05",apodo:"Filanito",contrasenia:"pass05"}],x=function(){var t=Object(n.useState)(p),e=Object(s.a)(t,2),a=e[0],r=e[1],i=Object(n.useState)(null),c=Object(s.a)(i,2),u=c[0],d=c[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{id:"titulo",children:"\xa0\xa0\xa0\xa0\xa0\xa0\u25d0Administraci\xf3n de usuarios\u25d1"}),Object(j.jsx)(b,{agregarRegistro:function(t){t.id=Date.now(),console.log(t),r([].concat(Object(o.a)(a),[t])),p.push(r)},actualizarRegistro:function(t){var e=a.map((function(e){return e.id===t.id?t:e}));r(e)},datoEditar:u,setDatoEditar:d}),Object(j.jsx)(h,{data:a,setDatoEditar:d,borrarRegistro:function(t){if(window.confirm("Estas seguro de eliminar el registro?")){var e=a.filter((function(e){return e.id!==t}));r(e)}}}),Object(j.jsx)("table",{})]})},g=a.p+"static/media/banner.ec22b2b8.png",f=a.p+"static/media/gidCod.9f81416c.gif";var m=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"container",children:[Object(j.jsx)("img",{src:f,class:"gif"}),Object(j.jsx)("header",{id:"encabezado",children:Object(j.jsx)("img",{src:g,class:"banner"})}),Object(j.jsx)(x,{})]})})},v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),i(t),c(t)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.1be0f11b.chunk.js.map