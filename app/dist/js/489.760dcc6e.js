(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[489],{489:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return L}});var o=e(641),i=e(33),s=e(953),u=e(751),a=e(220),l={class:"test-header"},c={class:"questions"},r={class:"question-card"},d={class:"question-text"},f=(0,o.Lk)("div",{class:"choose"},"Выберите один ответ",-1),p={class:"options"},v={class:"option"},k=["id","value","onUpdate:modelValue"],h=["for"],g=(0,o.pM)({__name:"TestView",setup:function(n){var t=(0,a.rd)(),g=(0,a.lq)(),b=(0,s.Kh)({title:"Loading...",questions:[],interpretation:[]}),L=(0,s.KR)([]);function m(){if(L.value.length<b.questions.length||L.value.length!=Object.keys(L.value).length)_();else{var n=0;L.value.forEach((function(t,e){n+=b.questions[e].options[t].value,void 0===b.questions[e].options[t].value&&console.log("bad")})),t.push("/results/".concat(g.params.file,"-").concat(n))}}function _(){alert("Пожалуйста, ответьте на все вопросы теста")}return e(29)("./"+g.params.file).then((function(n){Object.assign(b,n)})),function(n,t){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",l,(0,i.v_)((0,s.R1)(b).title),1),(0,o.Lk)("div",c,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,s.R1)(b).questions,(function(n,t){return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("div",d,(0,i.v_)(n.text),1),f,(0,o.Lk)("fieldset",p,[(0,o.Lk)("div",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.options,(function(n,e){return(0,o.uX)(),(0,o.CE)("div",v,[(0,o.bo)((0,o.Lk)("input",{type:"radio",id:"option-".concat(t,"-").concat(e),value:e,"onUpdate:modelValue":function(n){return(0,s.R1)(L)[t]=n}},null,8,k),[[u.XL,(0,s.R1)(L)[t]]]),(0,o.Lk)("label",{for:"option-".concat(t,"-").concat(e)},(0,i.v_)(n.text),9,h)])})),256))])])])})),256))]),(0,o.Lk)("button",{class:"commit-results-button",onClick:m}," Завершить тест ")],64)}}});const b=g;var L=b},29:function(n,t,e){var o={"./bug":[690,690],"./bug.json":[690,690],"./decision_making":[834,834],"./decision_making.json":[834,834],"./delegation":[110,110],"./delegation.json":[110,110],"./lie":[534,534],"./lie.json":[534,534],"./personality_factors":[927,927],"./personality_factors.json":[927,927]};function i(n){if(!e.o(o,n))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[n],i=t[0];return e.e(t[1]).then((function(){return e.t(i,19)}))}i.keys=function(){return Object.keys(o)},i.id=29,n.exports=i}}]);
//# sourceMappingURL=489.760dcc6e.js.map