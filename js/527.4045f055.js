(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[527],{527:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var s=t(641),i=t(33),o=t(953),a=t(220),r=(0,s.Lk)("div",{class:"result-header"},"Результаты теста",-1),c={class:"result-card"},l={class:"test-header"},u={class:"test-results"},d={class:"test-result"},f=(0,s.Lk)("div",{class:"result-aspect"},"Результат: ",-1),p={class:"result"},_=(0,s.pM)({__name:"ResultsView",setup:function(n){var e=(0,a.lq)(),_=(0,o.Kh)({title:"Loading...",questions:[],interpretation:[]}),m=e.params.data.split("-"),v=m[0],g=m[1],j=parseInt(g),k=(0,o.KR)("loading...");function y(){var n,e;console.log(_.interpretation.filter((function(n){return"default"!==n.condition})));var t=(null===(n=_.interpretation.filter((function(n){return"default"!==n.condition})).find((function(n){return console.log(n.condition.from),(void 0===n.condition.from||j>=n.condition.from)&&(void 0===n.condition.to||j<n.condition.to)})))||void 0===n?void 0:n.text)||(null===(e=_.interpretation.find((function(n){return"default"===n.condition})))||void 0===e?void 0:e.text)||"Cannot parse result";return console.log(j),t}return t(29)("./"+v).then((function(n){Object.assign(_,n),k.value=y()||""})),function(n,e){return(0,s.uX)(),(0,s.CE)(s.FK,null,[r,(0,s.Lk)("div",c,[(0,s.Lk)("div",l,(0,i.v_)((0,o.R1)(_).title),1),(0,s.Lk)("div",u,[(0,s.Lk)("div",d,[f,(0,s.Lk)("div",p,(0,i.v_)(k.value),1)])])]),(0,s.Lk)("button",{class:"main-menu-button",onClick:e[0]||(e[0]=function(e){return n.$router.push("/")})},"Главное меню")],64)}}});const m=_;var v=m},29:function(n,e,t){var s={"./adaptation":[85,85],"./adaptation.json":[85,85],"./adaptation_assessment":[496,496],"./adaptation_assessment.json":[496,496],"./adaptation_assessment_2":[985,985],"./adaptation_assessment_2.json":[985,985],"./aggresion_Bass_Darky":[89,89],"./aggresion_Bass_Darky.json":[89,89],"./agresion diagnosis":[873,873],"./agresion diagnosis.json":[873,873],"./anxiety_Hanin":[683,683],"./anxiety_Hanin.json":[683,683],"./avoidance_motivation":[591,591],"./avoidance_motivation.json":[591,591],"./bipolar management efficiency":[867,867],"./bipolar management efficiency.json":[867,867],"./bug":[690,690],"./bug.json":[690,690],"./compensation_incentives":[273,273],"./compensation_incentives.json":[273,273],"./conflict level":[208,208],"./conflict level.json":[208,208],"./creation":[105,105],"./creation.json":[105,105],"./decision_making":[834,834],"./decision_making.json":[834,834],"./delegation":[110,110],"./delegation.json":[110,110],"./express stress diagnosis":[277,277],"./express stress diagnosis.json":[277,277],"./leadership_abilities":[18,18],"./leadership_abilities.json":[18,18],"./lie":[534,534],"./lie.json":[534,534],"./management type":[201,201],"./management type.json":[201,201],"./motivation_Rean":[483,483],"./motivation_Rean.json":[483,483],"./personality_factors":[927,927],"./personality_factors.json":[927,927],"./strengths_and_weaknesses":[874,874],"./strengths_and_weaknesses.json":[874,874],"./success_motivation":[224,224],"./success_motivation.json":[224,224],"./system_compliance":[973,973],"./system_compliance.json":[973,973],"./system_efficiency":[467,467],"./system_efficiency.json":[467,467],"./team_performance_assessment":[599,599],"./team_performance_assessment.json":[599,599],"./will potential diagnosis":[551,551],"./will potential diagnosis.json":[551,551]};function i(n){if(!t.o(s,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=s[n],i=e[0];return t.e(e[1]).then((function(){return t.t(i,19)}))}i.keys=function(){return Object.keys(s)},i.id=29,n.exports=i}}]);
//# sourceMappingURL=527.4045f055.js.map