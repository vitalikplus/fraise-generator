(this["webpackJsonpfraise-generator"]=this["webpackJsonpfraise-generator"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),o=n.n(i),s=(n(13),n(14),n(15),n(3)),c=n(4),u=n(6),f=n(5),l=n(7),m="pronoun",d="location",g=[{forms:{first:"love",secord:"loved",third:"loved"},objectType:m},{forms:{first:"live",secord:"lived",third:"lived"},objectType:d}],v=[{text:"me",form:1,single:!0,type:m},{text:"her",form:3,gender:"women",single:!0,type:m},{text:"in Kyiv",type:d}],h=[{text:"I",form:1,single:!0},{text:"you",form:2,single:!0},{text:"he",form:3,single:!0},{text:"she",form:3,single:!0},{text:"we",form:1,single:!1},{text:"you",form:2,single:!1},{text:"they",form:3,single:!1}],p=["positiveStatement","generalQuestion","negativeStatement","negativeQuestion"];function x(e,t,n){return 3===e.form&&e.single?"".concat(e.text," ").concat(t.forms.first,"s ").concat(n.text):"".concat(e.text," ").concat(t.forms.first," ").concat(n.text)}function E(e,t,n){return 3===e.form&&e.single?"Does ".concat(e.text," ").concat(t.forms.first," ").concat(n.text,"?"):"Do ".concat(e.text," ").concat(t.forms.first," ").concat(n.text,"?")}function y(e,t,n){return 3===e.form&&e.single?"".concat(e.text," does not ").concat(t.forms.first," ").concat(n.text):"".concat(e.text," do not ").concat(t.forms.first," ").concat(n.text)}var S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={fraises:[],currentFraise:{},semiStep:!1,firstLanguage:"Russian",secondLanguage:"English"},n.handleForward=function(){var e=!n.state.semiStep;e?n.setState({semiStep:e}):n.nextQuestion()},n.nextQuestion=function(){var e=n.state,t=e.fraises,a=e.currentFraise,r=t.findIndex((function(e){return e.id===a.id}));r!==t.length-1&&n.setState({currentFraise:t[r+1],semiStep:!1})},n.prevQuestion=function(){var e=n.state,t=e.fraises,a=e.currentFraise,r=t.findIndex((function(e){return e.id===a.id}));0!==r&&n.setState({currentFraise:t[r-1],semiStep:!0})},n.handleBack=function(){var e=!n.state.semiStep;e?n.prevQuestion():n.setState({semiStep:e})},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=function(){var e=[],t=p[1],n=0;return g.forEach((function(a){h.forEach((function(r){v.filter((function(e){return e.type===a.objectType})).forEach((function(i){var o={id:n++,sentenceType:t,tenseType:"simple",tenseTime:"present",English:"",Russian:""};"positiveStatement"===t?(o.English=x(r,a,i),o.Russian="toRussian: "+x(r,a,i)):"generalQuestion"===t?(o.English=E(r,a,i),o.Russian="toRussian: "+E(r,a,i)):"negativeStatement"===t&&(o.English=y(r,a,i),o.Russian="toRussian: "+y(r,a,i)),e.push(o)}))}))})),e}();e.forEach((function(e){return console.log("fraise=",e.English)}));var t=e[0];this.setState({fraises:e,currentFraise:t})}},{key:"render",value:function(){var e=this.state,t=e.semiStep,n=e.currentFraise,a=e.firstLanguage,i=e.secondLanguage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"fraise"},n[a]),t&&r.a.createElement("div",{className:"fraise"},n[i])),r.a.createElement("div",{className:"navigation"},r.a.createElement("button",{onClick:this.handleBack},"back"),r.a.createElement("button",{onClick:this.handleForward},"forward")))}}]),t}(r.a.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2ed52dd0.chunk.js.map