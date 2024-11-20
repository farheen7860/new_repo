"use strict";(self.webpackChunkrecon_UI=self.webpackChunkrecon_UI||[]).push([[99],{6654:(P,l,n)=>{n.d(l,{D:()=>t});var a=n(7705),u=n(6554);let t=(()=>{class d{constructor(p){this.spinner=p}show(){this.spinner.show()}hide(){this.spinner.hide()}static{this.\u0275fac=function(g){return new(g||d)(a.KVO(u.ex))}}static{this.\u0275prov=a.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}}return d})()},9099:(P,l,n)=>{n.r(l),n.d(l,{ProductsModule:()=>E});var a=n(177),u=n(8498),t=n(7705),d=n(6554),f=n(6850),p=n(467),g=n(8908),C=n(8059),b=n(4006),v=n(5416),M=n(7222),w=n(6654),h=n(5596),y=n(9814),m=n(9417),x=n(2920);function F(r,I){if(1&r){const o=t.RV6();t.j41(0,"div",3)(1,"mat-card",4)(2,"div",5)(3,"div",6),t.nrm(4,"img",7),t.k0s(),t.j41(5,"div",8)(6,"mat-card-title",9),t.EFF(7),t.k0s(),t.j41(8,"p",10),t.EFF(9),t.k0s(),t.j41(10,"ng-switchery",11),t.bIt("ngModelChange",function(){const c=t.eBV(o).$implicit,i=t.XpG();return t.Njj(i.toggleSelection(c.product_id))}),t.k0s()()()()()}if(2&r){const o=I.$implicit,e=t.XpG();t.R7$(4),t.Y8G("src",o.product_icon,t.B4B),t.R7$(3),t.JRh(o.product_name),t.R7$(2),t.JRh(o.product_description),t.R7$(1),t.Y8G("ngModel",e.isProductAdded(o.product_id))("onLabel",e.getSwitcheryLabel(o.product_id))}}let S=(()=>{class r{constructor(o,e,s,c,i,T){this.productService=o,this.dialog=e,this._snackBar=s,this.cdr=c,this.notify=i,this.spinnerService=T,this.selectedProducts=new Set}ngOnInit(){var o=this;return(0,p.A)(function*(){o.userId=localStorage.getItem("userId"),o.spinnerService.show(),console.log("ngOnInit called in home page");try{yield Promise.all([o.getAllProduct(),o.getAllMyProduct()])}catch(e){console.error("Error while fetching data",e)}finally{setTimeout(()=>{o.spinnerService.hide()},1e3)}})()}getAllProduct(){this.productService.getAllProduct().then(o=>{console.log("getAllProduct Data",o),o&&200===o.statusCode?(this.products=o.data,this.loadSelectedProducts()):this.notify.showSuccessToast(`${o.errorMessage} with code ${o.statusCode}`,"Close")}).catch(o=>{console.log("Error",o)})}loadSelectedProducts(){const o=localStorage.getItem("selectedProducts");this.selectedProducts=o?new Set(JSON.parse(o)):new Set}getAllMyProduct(){this.productService.getAllMyProduct().then(o=>{200===o.statusCode?(this.myproducts=o.data,console.log("getAllMyProduct Data listed==>",this.myproducts),this.extractProductIds(),this.loadSelectedProducts()):this.notify.showSuccessToast(`${o.errorMessage} with code ${o.statusCode}`,"Close")}).catch(o=>{console.error("Error fetching my products",o)})}extractProductIds(){this.myproducts&&Array.isArray(this.myproducts)?(this.myproductsIds=this.myproducts.map(o=>o.product_id),console.log("Id1:",this.myproductsIds)):console.log("myproducts is not an array:",this.myproducts)}getSwitcheryLabel(o){return this.myproductsIds&&this.myproductsIds.includes(o)?"Added":"Add"}isProductAdded(o){return this.myproductsIds&&this.myproductsIds.includes(o)}toggleSelection(o){console.log("toggleSelection productId",o),this.isProductAdded(o)?(this.getAllProduct(),this.notify.showSuccessToast("Cannot remove product from product page!","Close")):(this.selectedProducts.add(o),this.addToMyProduct(o))}addToMyProduct(o){const e=this.dialog.open(g.T,{height:"55vh",width:"35%"});console.log("Called function from all-products"),console.log(o);const s=this.products.find(c=>c.product_id===o);console.log(s),s.user_id=this.userId,this.productService.addToMyProduct(s).then(c=>{console.log("addToMyProduct response =>",c),c&&201===c.statusCode||200===c.statusCode?(this.notify.showSuccessToast("Product added successfully!","Close"),this.getAllMyProduct(),e.close()):(this.notify.showSuccessToast("Product added successfully!","Close"),e.close())}).catch(c=>{console.log("Error while adding product =>",c),e.close()})}static{this.\u0275fac=function(e){return new(e||r)(t.rXU(C.w),t.rXU(b.bZ),t.rXU(v.UG),t.rXU(t.gRc),t.rXU(M.J),t.rXU(w.D))}}static{this.\u0275cmp=t.VBU({type:r,selectors:[["app-all-products"]],decls:3,vars:1,consts:[[1,"product-content"],["fxLayout","row wrap",1,"card-container"],["fxFlex","30%",4,"ngFor","ngForOf"],["fxFlex","30%"],[1,"product-card"],[1,"product-imgheader"],[1,"product-imgheader-background"],["mat-card-image","",1,"product-card-img",3,"src"],[1,"product-namedesc"],[1,"product-name"],[1,"product-desc"],["size","switchery-xs",1,"product-add",3,"ngModel","onLabel","ngModelChange"]],template:function(e,s){1&e&&(t.j41(0,"div",0)(1,"div",1),t.DNE(2,F,11,5,"div",2),t.k0s()()),2&e&&(t.R7$(2),t.Y8G("ngForOf",s.products))},dependencies:[a.Sq,h.RN,h.kF,h.dh,y.f,m.BC,m.vS,x.DJ,x.UI],styles:[".product-content[_ngcontent-%COMP%]{padding-top:1.5%;width:100em;overflow:hidden}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:5%;margin-bottom:20px}.product-card[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;box-shadow:none;width:96%;height:93%}.product-imgheader[_ngcontent-%COMP%]{display:flex;gap:4px;margin-bottom:25px}.product-imgheader-background[_ngcontent-%COMP%]{display:flex;width:7%;height:35%;padding:20px;justify-content:center;align-items:center;border-radius:4px;background:#F3ECFF}.product-card-img[_ngcontent-%COMP%]{width:45px;height:45px}.product-namedesc[_ngcontent-%COMP%]{margin-left:1%;display:flex;flex-direction:column}.product-name[_ngcontent-%COMP%]{font-family:Roboto;font-size:20px;font-weight:500}.product-desc[_ngcontent-%COMP%]{margin:unset;font-size:15px;margin-top:2%}.product-add[_ngcontent-%COMP%]{font-size:15px;margin-top:2px}  input+.switchery{background-color:#d2d1d2!important;border-color:#f5f4f5!important}  input:checked+.switchery{background-color:#9e7bff;border-color:#4a198a!important;box-shadow:#9e7bff 0 0 0 12px inset!important}  .switchery.switchery-xs{margin-top:-1px!important}.custom-toast-error[_ngcontent-%COMP%]{background-color:#ff4d4f;color:#fff;font-weight:700}"]})}}return r})();const O=[{path:"all-products",component:(()=>{class r{constructor(o){this.spinner=o,this.selectedProducts=new Set}showSpinner(){this.spinner.show()}hideSpinner(){this.spinner.hide()}static{this.\u0275fac=function(e){return new(e||r)(t.rXU(d.ex))}}static{this.\u0275cmp=t.VBU({type:r,selectors:[["app-products"]],decls:22,vars:1,consts:[["bdColor","rgba(0, 0, 0, 0.6)","size","medium","color","#fff","type","timer",3,"fullScreen"],[2,"color","white"],[1,"product-header"],[1,"product-header-name"],[1,"product-header-desc"],[1,"all-product-container"],["animationDuration","0ms","mat-stretch-tabs","false","mat-align-tabs","start",1,"all-product-ngdeep"],["label","All"],["label","Accounting"],["label","Sales"],["label","Inventory"],["label","Services"],["label","Marketing"]],template:function(e,s){1&e&&(t.j41(0,"ngx-spinner",0)(1,"p",1),t.EFF(2,"Loading..."),t.k0s()(),t.j41(3,"div",2)(4,"p",3),t.EFF(5,"Products"),t.k0s(),t.j41(6,"p",4),t.EFF(7,"Solutions crafted to elevate your experience"),t.k0s()(),t.j41(8,"div",5)(9,"mat-tab-group",6)(10,"mat-tab",7),t.nrm(11,"app-all-products"),t.k0s(),t.j41(12,"mat-tab",8),t.EFF(13,"dss"),t.k0s(),t.j41(14,"mat-tab",9),t.EFF(15,"dsfas"),t.k0s(),t.j41(16,"mat-tab",10),t.EFF(17,"sadf"),t.k0s(),t.j41(18,"mat-tab",11),t.EFF(19,"asas"),t.k0s(),t.j41(20,"mat-tab",12),t.EFF(21,"dhj"),t.k0s()()()),2&e&&t.Y8G("fullScreen",!0)},dependencies:[f.mq,f.T8,d.et,S],styles:[".product-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;border-bottom:1px solid #EAECF0;height:8%;margin-left:3%;margin-top:3.2%;margin-right:5%}.product-header-name[_ngcontent-%COMP%]{font-size:25px;margin:unset;font-weight:500;margin-top:1%}.product-header-desc[_ngcontent-%COMP%]{margin:unset;font-size:14px;margin-top:.3%}.all-product-container[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;align-items:flex-start;height:80%;margin-left:3%;margin-top:3.2%;margin-right:10%}  .all-product-ngdeep .mat-mdc-tab-labels{font-weight:500}  .all-product-ngdeep .mat-mdc-tab .mdc-tab__text-label{color:#475467!important}  .all-product-ngdeep .mat-mdc-tab-header{--mat-tab-header-label-text-size: 14px}  .all-product-ngdeep .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{border-radius:16px;width:auto;height:26px;color:#000!important;background:#F6F5F8}  .all-product-ngdeep .mdc-tab-indicator__content--underline{border-top-style:none!important}.product-content[_ngcontent-%COMP%]{padding-top:1.5%}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:5%;margin-bottom:20px}.product-card[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;box-shadow:none;width:96%;height:93%}.product-imgheader[_ngcontent-%COMP%]{display:flex;gap:4px;margin-bottom:25px}.product-imgheader-background[_ngcontent-%COMP%]{display:flex;width:7%;height:35%;padding:20px;justify-content:center;align-items:center;border-radius:4px;background:#F3ECFF}.product-card-img[_ngcontent-%COMP%]{width:45px;height:45px}.product-namedesc[_ngcontent-%COMP%]{margin-left:1%;display:flex;flex-direction:column}.product-name[_ngcontent-%COMP%]{font-family:Roboto;font-size:20px;font-weight:500}.product-desc[_ngcontent-%COMP%]{margin:unset;font-size:15px;margin-top:2%}.product-add[_ngcontent-%COMP%]{font-size:15px;margin-top:2px}  input+.switchery{background-color:#d2d1d2!important;border-color:#f5f4f5!important}  input:checked+.switchery{background-color:#9e7bff;border-color:#4a198a!important;box-shadow:#9e7bff 0 0 0 12px inset!important}  .switchery.switchery-xs{margin-top:-1px!important}"]})}}return r})()}];let A=(()=>{class r{static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275mod=t.$C({type:r})}static{this.\u0275inj=t.G2t({imports:[u.iI.forChild(O),u.iI]})}}return r})();var j=n(8962);let E=(()=>{class r{static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275mod=t.$C({type:r})}static{this.\u0275inj=t.G2t({imports:[a.MD,A,j.G,y.G,m.YN]})}}return r})()}}]);