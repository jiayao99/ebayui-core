import{t as N,r as q,b as G,e as Q,p as X,f as Y,g as Z,d as D}from"./registry-B-klnak9.js";/* empty css                    */import{_ as ee}from"./index-PNIKNjCK.js";import{_ as te}from"./index-bGaHMw5M.js";import{_ as ae}from"./index-BARrylD0.js";import{_ as u}from"./render-tag-BBOJ9dEX.js";import{_ as k}from"./dynamic-tag-DQCvkDdb.js";import{_ as se}from"./index-BtGuR4yg.js";import{i as ne,r as le}from"./attr-tag-DphMQldM.js";import{C as ie}from"./index-B56TBsyv.js";import{s as re}from"./index-D7B88Psz.js";import{a as oe,h as de}from"./index-blmbJU0z.js";import{M as pe,s as he}from"./index-DYoOQ_vw.js";class ue extends pe{onCreate(){he(this)}toggleItemChecked(t,e,a){const n=this.isRadio()&&t!==this.state.checkedIndex;this.toggleChecked(t),n?(this.input.collapseOnSelect&&(this.expander.expanded=!1),this.emitComponentEvent({index:t,eventType:"change",el:e,originalEvent:a})):this.type!=="radio"&&(this.input.collapseOnSelect&&(this.expander.expanded=!1),this.emitComponentEvent({index:t,eventType:this.type?"change":"select",el:e,originalEvent:a}))}handleItemClick(t,e,a){this.toggleItemChecked(t,a,e)}handleMenuKeydown({el:t,originalEvent:e,index:a}){e!==void 0&&(oe(e,()=>{this.handleItemClick(a??0,e,t)}),de(e,()=>{this.expander.expanded=!1,this.focus()}))}focus(){this.getComponent("button").el.focus()}handleButtonEscape(){this.expander.expanded=!1}handleExpand(){this.input.disabled||this.emitComponentEvent({eventType:"expand"})}handleCollapse(){this.input.disabled||this.emitComponentEvent({eventType:"collapse"})}handleMenuChange({el:t,originalEvent:e,index:a}){this.toggleItemChecked(a??0,t,e)}handleMenuSelect({el:t,originalEvent:e,index:a}){this.input.collapseOnSelect&&(this.expander.expanded=!1),this.emitComponentEvent({eventType:"select",el:t,originalEvent:e,index:a})}handleMousedown(t,e){this.emitComponentEvent({eventType:"mousedown",el:e,originalEvent:t})}emitComponentEvent({eventType:t,el:e,originalEvent:a,index:n}){const c=this.getCheckedIndexes(),r=this.type==="checkbox",l={el:e,originalEvent:a};r&&c&&c.length>1?Object.assign(l,{indexes:this.getCheckedIndexes(),checked:this.getCheckedIndexes(),checkedValues:this.getCheckedValues()}):r||this.isRadio()?Object.assign(l,{index:n,checked:this.getCheckedIndexes(),checkedValues:this.getCheckedValues()}):t!=="expand"&&t!=="collapse"&&Object.assign(l,{index:n,checked:[n]}),this.emit(`${t}`,l)}onInput(t){this.state=this.getInputState(t)}onRender(){typeof window<"u"&&this._cleanupMakeup()}onMount(){this._setupMakeup()}onUpdate(){this._setupMakeup()}onDestroy(){this._cleanupMakeup()}_setupMakeup(){this.expander=new re(this.el,{hostSelector:".menu-button__button",contentSelector:".menu-button__menu",focusManagement:"focusable",expandOnClick:!0,autoCollapse:!0,alwaysDoFocusManagement:!0})}_cleanupMakeup(){this.expander&&this.expander.destroy()}}const b="puReAHJk",i=N(b),Ee=i;q.r(b,()=>i);const V=ue;i._=G(function(x,t,e,a,n,c){const{class:r,style:l,type:T,text:_,icon:y,a11yText:$,noToggleIcon:R,reverse:j,fixWidth:K,borderless:g,size:A,partiallyDisabled:H,priority:L,disabled:z,variant:m,items:F,label:f,prefixLabel:C,prefixId:v,split:P,collapseOnSelect:ce,transparent:U,...W}=x;var o=v&&a.getElId("label"),M=m==="form",I,d=m==="overflow",p=!1,w=null;g&&(d=!1,M=!1);var E=m==="icon"||d;h=te;var h;E?h=ee:M?(I="form",p=!0):(p=!0,w=L);var O=0;t.be("span",Q(X(W),{class:Y(["menu-button",r]),style:Z(l)}),"0",a,null,4,{"onexpander-expand":e.d("expander-expand","handleExpand",!1),"onexpander-collapse":e.d("expander-collapse","handleCollapse",!1),onmousedown:e.d("mousedown","handleMousedown",!1)});{const B=s=>{d?u(ae,{},s,e,"1"):(f?C?(s.be("span",{class:"menu-button-prefix-label"},"2",a,null,1),s.t(C,a),s.ee(),k(s,f.renderBody,null,null,null,null,e,"3")):(s.be("span",{id:o},"4",a,null,1),k(s,f.renderBody,null,null,null,null,e,"5"),s.ee()):(y&&k(s,y,null,null,null,null,e,"6"),_&&(s.be("span",{id:o},"7",a,null,1),s.t(_,a),s.ee())),p&&!R&&u(se,{},s,e,"8"))};h?u(h,{class:["menu-button__button"],size:A,priority:w,borderless:g,variant:I,ariaExpanded:"false",ariaHaspopup:"true",transparent:E&&U,ariaLabel:$,ariaLabelledby:o&&`${v} ${o}`,split:p?P:void 0,disabled:z,partiallyDisabled:H,renderBody:B},t,e,"@button",[["escape","handleButtonEscape",!1]]):B(t),u(ie,ne(()=>{let s=0;for(const S of F||[]){let J=s++;S.separator&&O++,le("items",{...S,checked:a.isChecked(J-O)})}},{classPrefix:"menu-button",type:T,reverse:d!==!!j,fixWidth:K,tabindex:-1}),t,e,"@content",[["keydown","handleMenuKeydown",!1],["change","handleMenuChange",!1],["select","handleMenuSelect",!1]])}t.ee()},{t:b},V);i.Component=D(V,i._);export{Ee as _};