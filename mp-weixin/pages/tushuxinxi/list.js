(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tushuxinxi/list"],{"1f01":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,r,s,a){try{var o=t[s](a),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(i,r)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function o(t){s(a,i,r,o,u,"next",t)}function u(t){s(a,i,r,o,u,"throw",t)}o(void 0)}))}}var o={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"图书名称"},{queryName:"作者"},{queryName:"出版社"}],sactiveItem:{padding:"0 28rpx",boxShadow:"0 0 12rpx rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(0,0,0,1)",backgroundColor:"#333",color:"#fff",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"68rpx",fontSize:"28rpx",borderStyle:"solid"},sitem:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(0,0,0,1)",backgroundColor:"#fff",color:"#333",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"68rpx",fontSize:"28rpx",borderStyle:"solid"},queryIndex:0,list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},categoryList:[],categoryName:"全部",CustomBar:"0"}},onShow:function(){var t=a(i.default.mark((function t(){var e;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),t.next=3,this.$api.list("tushufenlei",{page:1,limit:100});case 3:e=t.sent,e.data.list.splice(0,0,{id:0,fenlei:"全部"}),this.categoryList=e.data.list,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onLoad:function(){this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.tushumingcheng="",this.searchForm.zuozhe="",this.searchForm.chubanshe=""},categoryClick:function(t){this.categoryName=t,this.mescroll.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var e=a(i.default.mark((function e(n){var r,s,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={page:n.num,limit:n.size},"全部"!=this.categoryName&&(r.fenlei="%"+this.categoryName+"%"),s=t.getStorageSync("indexQueryCondition"),s&&(r["tushumingcheng"]="%"+s+"%",t.removeStorageSync("indexQueryCondition")),e.next=6,this.$api.list("tushuxinxi",r);case 6:a=e.sent,1==n.num&&(this.list=[]),this.list=this.list.concat(a.data.list),0==a.data.list.length&&(this.hasNext=!1),n.endSuccess(n.size,this.hasNext);case 11:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),onDetailTap:function(t){this.$utils.jump("./detail?id=".concat(t.id))},onUpdateTap:function(t){this.$utils.jump("./add-or-update?id=".concat(t))},onAddTap:function(){this.$utils.jump("./add-or-update")},onDeleteTap:function(e){var n=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=a(i.default.mark((function t(r){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=5;break}return t.next=3,n.$api.del("tushuxinxi",JSON.stringify([e]));case 3:n.hasNext=!0,n.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()})},search:function(){var t=a(i.default.mark((function t(){var e,n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.mescroll.num=1,e={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.tushumingcheng&&(e["tushumingcheng"]="%"+this.searchForm.tushumingcheng+"%"),this.searchForm.zuozhe&&(e["zuozhe"]="%"+this.searchForm.zuozhe+"%"),this.searchForm.chubanshe&&(e["chubanshe"]="%"+this.searchForm.chubanshe+"%"),t.next=7,this.$api.list("tushuxinxi",e);case 7:n=t.sent,1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(n.data.list),0==n.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=o}).call(this,n("543d")["default"])},"2da8":function(t,e,n){},"3eb4":function(t,e,n){"use strict";(function(t){n("2b2c"),n("921b");i(n("66fd"));var e=i(n("d19f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},6213:function(t,e,n){"use strict";var i={"mescroll-uni":function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"6a32"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isAuth("tushuxinxi","修改")),i=t.isAuth("tushuxinxi","删除"),r=t.__map(t.list,(function(e,n){var i=e.tupian.split(",");return{$orig:t.__get_orig(e),g0:i}})),s=t.isAuth("tushuxinxi","新增");t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,l0:r,m2:s}})},s=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},d19f:function(t,e,n){"use strict";n.r(e);var i=n("6213"),r=n("e9d1");for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n("f379");var a,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=u.exports},e9d1:function(t,e,n){"use strict";n.r(e);var i=n("1f01"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=r.a},f379:function(t,e,n){"use strict";var i=n("2da8"),r=n.n(i);r.a}},[["3eb4","common/runtime","common/vendor"]]]);