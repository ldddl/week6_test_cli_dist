"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[284],{284:function(t,s,c){c.r(s),c.d(s,{default:function(){return k}});var r=c(252),l=c(577);const o=(0,r._)("h2",null,"產品列表",-1),a={class:"container"},d={class:"row row-cols-1 row-cols-lg-3 g-3"},i={class:"card-group"},e={class:"card"},u=["src"],n={class:"card-body"},p={class:"card-title"},h={class:"card-text"},g=(0,r.Uk)("查看更多");function w(t,s,c,w,v,m){const _=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r._)("div",a,[(0,r._)("div",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(v.products,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"col",key:t.id},[(0,r._)("div",i,[(0,r._)("div",e,[(0,r._)("img",{src:t.imageUrl,class:"card-img-top img-fluid img-thumbnail",alt:"..."},null,8,u),(0,r._)("div",n,[(0,r._)("h5",p,(0,l.zw)(t.title),1),(0,r._)("p",h,(0,l.zw)(t.description),1),(0,r.Wm)(_,{to:`/product/${t.id}`,class:"btn btn-primary"},{default:(0,r.w5)((()=>[g])),_:2},1032,["to"])])])])])))),128))])])],64)}var v={data(){return{products:[]}},methods:{getProducts(){this.$http("https://vue3-course-api.hexschool.io/v2/api/ldddl/products/all").then((t=>{this.products=t.data.products})).catch((t=>{console.log(t)}))}},mounted(){this.getProducts()}},m=c(744);const _=(0,m.Z)(v,[["render",w]]);var k=_}}]);
//# sourceMappingURL=284.0ce4c021.js.map