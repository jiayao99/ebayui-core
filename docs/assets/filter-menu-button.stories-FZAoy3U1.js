import{t as E}from"./index-CCz6reEH.js";import{a as W}from"./utils-DWCsNc5l.js";import{t as $,r as z,b as I,d as O,p as j,e as H,c as P}from"./registry-CtNeIPU8.js";import{_ as Y}from"./index-DfQ7uvCK.js";import{_ as h}from"./render-tag-mtfFSHEK.js";import{i as q,r as G,a as y}from"./attr-tag-DphMQldM.js";import{_ as J}from"./of-fallback-C2gEBeKK.js";import{_ as L}from"./dynamic-tag-HMZVE1pc.js";import{_ as Q}from"./index-_RtXOcyC.js";import{s as X}from"./index-DXTRRJTV.js";import{h as Z}from"./index-CbT4wDAv.js";import{M as ee,s as te}from"./index-DnXwn7Kz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B6qYX52F.js";/* empty css             */import"./index-B2XpiCPt.js";/* empty css              */import"./index-BRT_1D3O.js";import"./index-C14PeKAt.js";import"./index-DC55x-1T.js";import"./index-eGtaP7gF.js";import"./index-DSBRYoSW.js";import"./index-DoeQzs2M.js";import"./index-D7GlLQHj.js";import"./index-CxthRfyu.js";const oe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter-menu-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-filter-menu-button)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-filter-menu-button)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter-menu-button/examples)
`;class ae extends ee{onCreate(){te(this)}handleMenuKeydown({originalEvent:e}){Z(e,()=>this._expander.expanded=!1)}handleMenuChange({checkedIndex:e,el:o,originalEvent:t,index:d,currentChecked:m}){e!==void 0&&this.toggleChecked(e),this._emitComponentEvent("change",t,{el:o,index:d,currentChecked:m})}handleFooterButtonClick(){this._emitComponentEvent("footer-click"),this._expander.expanded=!1}handleFormSubmit({originalEvent:e}){this._emitComponentEvent("form-submit",e)}handleExpand({originalEvent:e}){this._emitComponentEvent("expand",e)}handleCollapse({originalEvent:e}){this.getEl("button").focus(),this._emitComponentEvent("collapse",e)}onInput(e){e.items=e.items||[],this.state=this.getInputState(e)}onMount(){this._setupMakeup()}onUpdate(){this._setupMakeup()}onRender(){typeof window<"u"&&this._cleanupMakeup()}onDestroy(){this._cleanupMakeup()}_emitComponentEvent(e,o,t){const{el:d,index:m,currentChecked:c}=t||{};switch(e){case"expand":this.emit(e);break;case"change":case"collapse":case"form-submit":case"footer-click":{const p=this.getCheckedValues();this.emit(e,{el:d,checked:p,originalEvent:o,index:m,currentChecked:c});break}}}_setupMakeup(){this._expander=new X(this.getEl("container"),{hostSelector:".filter-menu-button__button",contentSelector:".filter-menu-button__menu",focusManagement:"interactive",expandOnClick:!0,autoCollapse:!0,alwaysDoFocusManagement:!0})}_cleanupMakeup(){this._expander&&(this._expander.destroy(),this._expander=void 0)}}const f="ubVUzYdk",s=$(f);z.r(f,()=>s);const w=ae;s._=I(function(l,e,o,t,d,m){const{variant:c,class:p,a11yText:T,a11yFooterText:u,text:B,footer:n,footerText:b,disabled:F,formName:S,formAction:V,formMethod:A,items:R,type:N,...D}=l;e.be("span",O(j(D),{class:H(["filter-menu-button",p])}),"@container",t,null,4,{"onexpander-expand":o.d("expander-expand","handleExpand",!1),"onexpander-collapse":o.d("expander-collapse","handleCollapse",!1)}),e.be("button",{type:"button",class:"filter-menu-button__button",disabled:F,"aria-expanded":"false","aria-haspopup":"true","aria-label":T,"aria-pressed":t.getCheckedValues().some(Boolean)&&"true"},"@button",t,null,0,{pa:{"aria-expanded":1}}),e.be("span",{class:"filter-menu-button__button-cell"},"0",t,null,1),e.be("span",{class:"filter-menu-button__button-text"},"1",t,null,1),e.t(B,t),e.ee(),h(Y,{},e,o,"2"),e.ee(),e.ee(),h(Q,q(()=>{let K=0;for(const i of J(R||[])){let U=K++;G("items",{...i,checked:t.isChecked(U)})}b?y("footer",{...n,a11yFooterText:u,renderBody:i=>{i.t(b,t)}}):n&&y("footer",{...n,a11yFooterText:u||n.a11yFooterText,renderBody:i=>{L(i,n.renderBody,null,null,null,null,o,"4")}})},{classPrefix:"filter-menu-button",variant:c,type:N,formName:S,formAction:V,formMethod:A,footerText:b,a11yFooterText:u}),e,o,"3",[["keydown","handleMenuKeydown",!1],["change","handleMenuChange",!1],["form-submit","handleFormSubmit",!1],["footer-click","handleFooterButtonClick",!1]]),e.ee()},{t:f},w);s.Component=P(w,s._);const M=l=>({input:W(l)}),Se={title:"buttons/ebay-filter-menu-button",component:s,parameters:{docs:{description:{component:oe}}},argTypes:{text:{control:{type:"text"},description:"button text"},type:{options:["radio","checkbox"],control:{type:"select"},description:'Can be "radio" / "checkbox"'},a11yText:{control:{type:"text"},description:"a11y text for the button"},pressed:{control:{type:"boolean"},description:"whether button is pressed (default is `false`)",table:{disable:!0}},expanded:{control:{type:"boolean"},description:"whether content is expanded (Note: not supported as initial attribute) ",table:{disable:!0}},disabled:{control:{type:"boolean"},description:"Will disable the entire dropdown (disables the ebay-button label) if set to true"},variant:{control:{type:"text"},description:'"" (default) / "form"'},item:{table:{category:"@attribute tags"}},formName:{control:{type:"text"},description:"forms `name` attribute",table:{category:'when variant="form"'}},formAction:{control:{type:"text"},description:"forms `action` attribute",table:{category:'when variant="form"'}},checked:{control:{type:"boolean"},description:"whether or not the item is checked",table:{category:"@item attributes"}},value:{table:{category:"@item attributes"},control:{type:"text"},description:"the items value (returned in emitted events when checked)"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:"{ checked, originalEvent }"}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onChange:{action:"on-change",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, selected, index, currentChecked, checked }"}}},footerClick:{action:"on-footer-click",description:"Triggered on footer clicked",table:{category:"Events",defaultValue:{summary:"{ checked, originalEvent }"}}},formSubmit:{action:"on-form-submit",description:'when using `variant="form"`, and form is submitted (emits current checked state)',table:{category:"Events",defaultValue:{summary:"{ checked, originalEvent }"}}},footer:{name:"@footer",table:{category:"@attribute tags"}}}},a=M.bind({});a.args={text:"text",items:[{value:"item 1",renderBody:"item 1"},{value:"item 2",renderBody:"item 2"},{value:"item 3",renderBody:"item 3"}],a11yText:"filter menu button a11y text"};a.parameters={docs:{source:{code:E("ebay-filter-menu-button",a.args)}}};const r=M.bind({});r.args={text:"text",items:[{value:"item 1",renderBody:"item 1"},{value:"item 2",renderBody:"item 2"},{value:"item 3",renderBody:"item 3"}],a11yText:"filter menu button a11y text",footer:{renderBody:"Apply",a11yFooterText:"footer button a11y text"}};r.parameters={docs:{source:{code:E("ebay-filter-menu-button",r.args)}}};var x,g,_;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(_=(g=a.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var k,v,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(C=(v=r.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const Ve=["Default","WithFooter"];export{a as Default,r as WithFooter,Ve as __namedExportsOrder,Se as default};