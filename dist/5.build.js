webpackJsonp([5],{100:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detail_list"},[a("div",{staticClass:"list_type"},e._l(e.year,function(t,i){return a("span",{key:i,class:[e.tab===i?"active":""],on:{click:function(t){e.tabs(i)}}},[e._v("\n      "+e._s(t)+"\n    ")])})),e._v(" "),a("div",e._l(e.detail_sort_all,function(t,i,r){return a("section",{key:r},[a("p",[e._v(e._s(i))]),e._v(" "),e._l(t,function(t,i){return a("ul",{key:i},[a("li",[a("p",[e._v(e._s(t.car_name))]),e._v(" "),a("p",[e._v(e._s(t.horse_power)+"马力"+e._s(t.gear_num)+"档")]),e._v(" "),a("p",[a("span",[e._v("指导价"+e._s(t.market_attribute.official_refer_price))]),e._v(" "),a("span",[e._v(e._s(t.market_attribute.dealer_price_min)+"起")])])])])})],2)}))])},r=[],n={render:i,staticRenderFns:r};t.a=n},40:function(e,t,a){"use strict";function i(e){a(98)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(57),n=a(100),l=a(7),o=i,s=l(r.a,n.a,!1,o,"data-v-24bf85ea",null);t.default=s.exports},57:function(e,t,a){"use strict";var i=a(8),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e};t.a={methods:r({},Object(i.b)({carType:"carType/carType"}),Object(i.c)({tabs:"carType/tabs"})),mounted:function(){console.log(this.$route.query),this.carType({SerialID:this.$route.query.SerialID})},computed:r({},Object(i.d)({year:function(e){return e.carType.year},detail_sort_all:function(e){return e.carType.detail_sort_all}}))}},98:function(e,t,a){var i=a(99);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(2)("b2f33bda",i,!0,{})},99:function(e,t,a){t=e.exports=a(1)(!1),t.push([e.i,".list_type[data-v-24bf85ea]{border-top:.15rem solid #f4f4f4;padding:0 .3rem;font-size:.32rem;height:.77rem;line-height:.77rem;background:#fff}.list_type span[data-v-24bf85ea]{padding-right:.46rem}.active[data-v-24bf85ea]{color:#3aacff}.detail_list>div>section[data-v-24bf85ea]:last-child{padding-bottom:1rem}.detail_list>div>section>p[data-v-24bf85ea]{padding:0 .2rem;height:.5rem;line-height:.5rem;font-size:.26rem;color:#999;background:#f4f4f4}.detail_list ul[data-v-24bf85ea]{background:#fff;font-size:0}.detail_list ul li[data-v-24bf85ea]{padding:0 .2rem;border-bottom:.18rem solid #f4f4f4;overflow:hidden}.detail_list ul li p[data-v-24bf85ea]:first-child{padding:.26rem 0 .18rem;font-size:.3rem;line-height:1;color:#3d3d3d}.detail_list ul li p[data-v-24bf85ea]:nth-child(2){color:#bdbdbd;font-size:.26rem}.detail_list ul li p[data-v-24bf85ea]:nth-child(3){text-align:right;padding-bottom:.1rem;font-size:.24rem;color:#818181}.detail_list ul li p:nth-child(3) span[data-v-24bf85ea]:nth-child(2){font-size:.3rem;color:#ff2336;margin-left:.1rem}.detail_list ul li button[data-v-24bf85ea]{border:none;border-top:1px solid #eee;width:110%;height:.8rem;font-size:.32rem;color:#00afff;background:#fff;font-weight:500;margin-left:-.3rem}",""])}});
//# sourceMappingURL=5.build.js.map