(this["webpackJsonpapps-combo-react"]=this["webpackJsonpapps-combo-react"]||[]).push([[0],{28:function(e,t,a){e.exports=a(47)},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),s=a(11),o=a(10),i=a(8),u={number:0,lastCalc:null,isMax:!1,isMin:!0,lastCalcTime:null};var m=Object(o.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,a=0,n=9;switch(t.type){case"counter/INCREMENT":return Object(i.a)({},e,{number:e.isMax?n:e.number+1,lastCalc:"increment",isMax:e.number>=n-1,isMin:!1,lastCalcTime:(new Date).getTime()});case"counter/DECREMENT":return Object(i.a)({},e,{number:e.isMin?a:e.number-1,lastCalc:"decrement",isMax:!1,isMin:e.number<=a+1,lastCalcTime:(new Date).getTime()});default:return e}}}),d=a(17),h=(a(37),a(2)),p=a(1);a(38);var b=function(e){var t=e.apps;return c.a.createElement("nav",{className:"Navigation"},c.a.createElement("ul",{className:"Navigation__container"},t.map((function(e,t){var a=e.name;return c.a.createElement("li",{key:t,className:"Navigation__link--container"},c.a.createElement(s.b,{to:"/".concat(a),className:"Navigation__link"},a))}))))},_=a(13),f=a(5),v=a(6),E=a(7),y=(a(40),function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={todo:[]},n}return Object(f.a)(a,[{key:"addTodo",value:function(e){e.preventDefault();var t=e.target.querySelector('input[type="text"]');this.validate(t.value)&&(this.setState({todo:[].concat(Object(_.a)(this.state.todo),[new N(t.value)])}),t.value="",t.focus())}},{key:"validate",value:function(e){return e.length>0&&e.length<=32}},{key:"deleteTodo",value:function(e){this.setState({todo:this.state.todo.filter((function(t){return t.regTime!==+e}))})}},{key:"render",value:function(){var e=this,t=this.state.todo;return c.a.createElement("div",{className:"Todo"},t.length<1?null:c.a.createElement("ul",{className:"Todo__item-list"},t.map((function(t){var a=t.regTime,n=t.text;return c.a.createElement("li",{key:a,className:"Todo-item"},n,c.a.createElement("button",{className:"Todo-item__delete-button",onClick:function(){e.deleteTodo(a)}},"-"))}))),t.length<5?c.a.createElement("form",{className:"Todo__input-container",onSubmit:function(t){return e.addTodo(t)}},c.a.createElement("input",{type:"text",className:"Todo__input",minLength:"1",maxLength:"32",placeholder:"What needs to be done?"}),c.a.createElement("button",{className:"Todo__input--add-button"},"+")):c.a.createElement("p",{className:"Todo__list-full-message"},"The list is full."))}}]),a}(c.a.Component)),N=function e(t){Object(h.a)(this,e),this.regTime=(new Date).getTime(),this.text=t},g=y,O=(a(41),["name","age","weight"]),C=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={categories:O.map((function(e){return new w(e)})),data:[new k("jack",20,70),new k("lee",30,88),new k("chuck",17,75),new k("ralph",41,69),new k("mark",25,80)]},n}return Object(f.a)(a,[{key:"sortData",value:function(){var e=this,t=this.state,a=t.categories,n=t.data;a.forEach((function(t){var a=t.category,c=t.sortOrder;t.selected&&e.setState({data:Object(_.a)(n).sort((function(e,t){return e[a]<t[a]?"desc"===c?1:-1:e[a]>t[a]?"desc"===c?-1:1:0}))})}))}},{key:"filterData",value:function(e){this.setState({data:Object(_.a)(this.state.data).map((function(t){for(var a in t)if("".concat(t[a]).includes(e))return Object(i.a)({},t,{visible:!0});return Object(i.a)({},t,{visible:!1})}))})}},{key:"handleSort",value:function(e){var t=this;this.setState({categories:this.state.categories.map((function(t){return t.category===e?{category:e,sortOrder:"desc"===t.sortOrder?"asc":"desc",selected:!0}:Object(i.a)({},t,{selected:!1})}))}),setTimeout((function(){t.sortData()}),0)}},{key:"render",value:function(){var e=this,t=this.state,a=t.categories,n=t.data;return c.a.createElement("div",{className:"Grid"},c.a.createElement("input",{className:"Grid__keyword-input",type:"text",placeholder:"Please enter keywords",onKeyUp:function(t){e.filterData(t.target.value)}}),c.a.createElement("table",{className:"Grid__data-table"},c.a.createElement("thead",{className:"data-table__table-head"},c.a.createElement("tr",{className:"table-head__row"},a.map((function(t,a){var n=t.category,r=t.sortOrder,l=t.selected;return c.a.createElement("th",{key:a,className:"table-head__column".concat(l?" selected":"")},n,c.a.createElement("span",{role:"img",className:"table-head__asc-desc-button","aria-label":"Expand",onClick:function(){return e.handleSort(n)}},"desc"===r?"\u25bc":"\u25b2"))})))),c.a.createElement("tbody",{className:"data-table__table-body"},n.map((function(e,t){return c.a.createElement("tr",{key:t,className:"table-body__row".concat(e.visible?"":" hidden")},a.map((function(t,a){var n=t.category,r=t.selected;return c.a.createElement("td",{key:a,className:"table-body__column ".concat(n,"-column").concat(r?" selected":"")},e[n])})))})))))}}]),a}(c.a.Component),w=function e(t){Object(h.a)(this,e),this.category=t,this.sortOrder=null,this.selected=!1},k=function e(){var t=this;Object(h.a)(this,e),Array.prototype.slice.call(arguments).forEach((function(e,a){var n=O[a];t[n]=e,t.visible=!0}))},j=C,T=a(16),M=(a(42),function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={openModal:!1,isClosing:!1},n.handleOnOff=n.handleOnOff.bind(Object(T.a)(n)),n}return Object(f.a)(a,[{key:"handleOnOff",value:function(){var e=this,t=this.state.openModal?400:0;this.state.openModal&&this.setState({isClosing:!0}),setTimeout((function(){e.setState({openModal:!e.state.openModal,isClosing:!1})}),t)}},{key:"render",value:function(){var e=this.state,t=e.openModal,a=e.isClosing;return c.a.createElement("div",{className:"Modal"},c.a.createElement("button",{className:"Modal__open-button",onClick:this.handleOnOff},"Show Modal"),t?c.a.createElement("div",{className:"Modal__overlay".concat(a?" closing":"")},c.a.createElement("div",{className:"Modal__container".concat(a?" closing":"")},c.a.createElement("h2",{className:"Modal__header"},"Modal Header"),c.a.createElement("p",{className:"Modal__body"},"Modal Body"),c.a.createElement("button",{className:"Modal__close-button",onClick:this.handleOnOff},"OK"))):null)}}]),a}(c.a.Component)),D=a(23),x=a.n(D),S=a(27),A=(a(44),["Seoul","Tokyo","Beijing","Toronto"]),I=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,selectedCity:null,weather:null},n}return Object(f.a)(a,[{key:"getWeather",value:function(){var e=Object(S.a)(x.a.mark((function e(t){var a,n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://abnormal-weather-api.herokuapp.com/cities/search?city=".concat(t),this.setState({isLoading:!0}),e.prev=2,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:c=e.sent,this.setState({isLoading:!1,selectedCity:t,weatherData:c}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getWeather(A[0])}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.selectedCity,r=t.weatherData;return c.a.createElement("div",{className:"Async"},c.a.createElement("div",{className:"Async__cities--container"},A.map((function(t,a){return c.a.createElement("button",{key:a,className:"cities__select-button".concat(n===t?" selected":""),onClick:function(){return e.getWeather(t)}},t)}))),a?c.a.createElement("p",{className:"Async__loading-message"},"Loading..."):c.a.createElement("div",{className:"Async__weather-data"},c.a.createElement("p",{className:"weather-data__city--label"},"City:",c.a.createElement("span",{className:"weather-data__city"},r.city)),c.a.createElement("p",{className:"weather-data__weather--label"},"Weather:",c.a.createElement("span",{className:"weather-data__weather"},r.current.weather)),c.a.createElement("p",{className:"weather-data__date--label"},"Date:",c.a.createElement("span",{className:"weather-data__date"},r.current.date.split("T")[0])),c.a.createElement("figure",{className:"weather-data__city-img--container"},c.a.createElement("img",{src:r.image_url,className:"weather-data__city-img",alt:"The city of ".concat(r.city)}))))}}]),a}(c.a.Component);a(45);var L=function(e){var t=e.number,a=e.lastCalc,n=e.isMax,r=e.isMin,l=e.onIncrement,s=e.onDecrement,o=n?c.a.createElement("div",{className:"Counter__button--hidden"}):c.a.createElement("button",{className:"Counter__increment-button",onClick:l},"+"),i=r?c.a.createElement("div",{className:"Counter__button--hidden"}):c.a.createElement("button",{className:"Counter__decrement-button",onClick:s},"-");return c.a.createElement("div",{className:"Counter"},c.a.createElement("div",{className:"Counter__container"},o,c.a.createElement("h2",{className:"Counter__number"},t),i),c.a.createElement("p",{className:"Counter__description"},"Count title:",c.a.createElement("span",{className:"Counter__last-calculation"}," ",a)))},R=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.isProperFrequency()&&e.props.increment()},e.handleDecrement=function(){e.isProperFrequency()&&e.props.decrement()},e.isProperFrequency=function(){var t=(new Date).getTime()-e.props.lastCalcTime>=1e3;return t||console.log("You clicked too fast! Click is ignored."),t},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.number,a=e.lastCalc,n=e.isMax,r=e.isMin;return c.a.createElement(L,{number:t,lastCalc:a,isMax:n,isMin:r,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement})}}]),a}(c.a.Component),W=Object(d.b)((function(e){var t=e.counter;return{number:t.number,lastCalc:t.lastCalc,isMax:t.isMax,isMin:t.isMin,lastCalcTime:t.lastCalcTime}}),(function(e){return{increment:function(){return e({type:"counter/INCREMENT"})},decrement:function(){return e({type:"counter/DECREMENT"})}}}))(R),q=(a(46),function e(t,a){Object(h.a)(this,e),this.name=t,this.component=a});function P(){var e=Object(p.g)().appName;return c.a.createElement("h1",{className:"App__main--title"},e)}var X=function(){var e=[new q("todo",c.a.createElement(g,null)),new q("grid",c.a.createElement(j,null)),new q("modals",c.a.createElement(M,null)),new q("counter",c.a.createElement(W,null)),new q("async",c.a.createElement(I,null))];return c.a.createElement("div",{className:"App"},c.a.createElement(b,{apps:e}),c.a.createElement("main",{className:"App__main"},c.a.createElement(p.b,{path:"/:appName"},c.a.createElement(P,null)),c.a.createElement(p.b,{exact:!0,path:"/"},c.a.createElement(p.a,{to:"/".concat(e[0].name)})),c.a.createElement(p.d,null,e.map((function(e,t){var a=e.name,n=e.component;return c.a.createElement(p.b,{path:"/".concat(a),key:t},n)})))))},B=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),F=Object(o.c)(m,B);l.a.render(c.a.createElement(d.a,{store:F},c.a.createElement(s.a,null,c.a.createElement(X,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.9e4a1e91.chunk.js.map