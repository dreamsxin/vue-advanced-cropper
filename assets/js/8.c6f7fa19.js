(window.webpackJsonp=window.webpackJsonp||[]).push([[8,12],{142:function(t,e,n){t.exports=n.p+"assets/img/image.1616fde2.jpg"},143:function(t,e,n){"use strict";var o=n(45);n.n(o).a},16:function(t,e,n){},203:function(t,e,n){"use strict";n.r(e);var o=n(11),i=n(56),s={name:"CircleExample",components:{Cropper:o.b},data:function(){return{stencil:i.default}}},r=(n(143),n(1)),c=Object(r.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("Cropper",{attrs:{classname:"circle-example",src:n(142),"stencil-component":this.stencil}})},[],!1,null,null,null);e.default=c.exports},39:function(t,e,n){t.exports=n.p+"assets/img/handler.d2843e4e.svg"},40:function(t,e){function n(t,e,n){var o,i,s,r,c;function a(){var l=Date.now()-r;l<e&&l>=0?o=setTimeout(a,e-l):(o=null,n||(c=t.apply(s,i),s=i=null))}null==e&&(e=100);var l=function(){s=this,i=arguments,r=Date.now();var l=n&&!o;return o||(o=setTimeout(a,e)),l&&(c=t.apply(s,i),s=i=null),c};return l.clear=function(){o&&(clearTimeout(o),o=null)},l.flush=function(){o&&(c=t.apply(s,i),s=i=null,clearTimeout(o),o=null)},l}n.debounce=n,t.exports=n},41:function(t,e,n){"use strict";var o=n(16);n.n(o).a},45:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var o=n(11),i=(n(40),{name:"CircleStencil",components:{PreviewResult:o.e,DraggableArea:o.c,DraggableElement:o.d},props:{img:{type:Object},resultCoordinates:{type:Object},stencilCoordinates:{type:Object}},data:function(){return{ghostCoordinates:{left:0,top:0,right:0,bottom:0}}},computed:{ghostStyle:function(){return{right:"".concat(this.ghostCoordinates.right,"px"),bottom:"".concat(this.ghostCoordinates.bottom,"px"),top:"".concat(this.ghostCoordinates.top,"px"),left:"".concat(this.ghostCoordinates.left,"px")}},style:function(){var t=this.stencilCoordinates,e=t.height,n=t.width,o=t.left,i=t.top;return{width:"".concat(n,"px"),height:"".concat(e,"px"),left:"".concat(o,"px"),top:"".concat(i,"px")}}},mounted:function(){var t=this;this.resize=function(e){t.$emit("resize",e)}},methods:{onMove:function(t){this.$emit("move",t)},onHandlerMove:function(t){var e=t.shift(),n=e.left/2,i=-e.top/2,s=this.resultCoordinates;s.height,s.width,s.left,s.top;console.log(e),this.ghostCoordinates={left:-n,right:-n,top:-i,bottom:-i},this.resize(new o.f(t.nativeEvent,{left:n,right:n,top:i,bottom:i},{compensate:!0}))},aspectRatios:function(){return{minimum:1,maximum:1}}}}),s=(n(41),n(1)),r=Object(s.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"circle-stencil",style:t.style},[o("DraggableElement",{attrs:{classname:"circle-stencil__handler"},on:{drag:t.onHandlerMove}},[o("img",{staticClass:"circle-stencil__icon",attrs:{src:n(39),alt:""}})]),t._v(" "),o("DraggableArea",{on:{move:t.onMove}},[o("PreviewResult",{attrs:{classname:"circle-stencil__preview",img:t.img,"result-coordinates":t.resultCoordinates,"stencil-coordinates":t.stencilCoordinates}})],1),t._v(" "),o("div",{staticClass:"ghost",style:t.ghostStyle})],1)},[],!1,null,null,null);e.default=r.exports}}]);