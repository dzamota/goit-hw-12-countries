(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("x3Br"),t("D/wG");var a=t("9va6"),r=t.n(a),s=t("dIfx"),c=(t("JBxO"),t("FdtR"),{fetchCountries:function(n){return fetch("https://restcountries.eu/rest/v2/"+("name/"+n)).then((function(n){return n.json()}))}}),i=(document.querySelector(".search_input").addEventListener("input",r.a.debounce((function(n){var e=n.target.value;c.fetchCountries(e).then((function(n){return n.length>1&&n.length<=10?n.reduce((function(n,e){return n=n+"<li>"+e.name+"</li>",i.innerHTML=n}),""):1===n.length?n.reduce((function(n,e){return n+="<h2>"+e.name+'</h2>\n          <div class="body">\n          <div class="info">\n          <p><span class="span">Столица: </span>'+e.capital+'</p>\n          <p><span class="span">Население: </span>'+e.population+' человек</p>\n          <p><span class="span">Площадь: </span>'+e.area+' кв. км.</p>\n          </div>\n          <img src="'+e.flag+'" alt="Flag">\n          </div>',i.innerHTML=n}),""):(s.a.alert({title:"Запрос не найден!",text:"Пожалуйста, введите более точный запрос."}),i.innerHTML="")})).catch((function(n){return console.log(n)}))}),500)),document.querySelector(".country_items"));t("L1EO")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a0d45534a23dd3a9de9e.js.map