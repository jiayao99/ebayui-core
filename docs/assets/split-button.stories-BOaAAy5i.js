import{t as v}from"./index-CCz6reEH.js";import{a as E}from"./utils-DWCsNc5l.js";import{t as V,r as S,b as C,c as w}from"./registry-CtNeIPU8.js";import{_ as O}from"./dynamic-tag-HMZVE1pc.js";import{_ as z}from"./index-C241jnEo.js";import{_ as m}from"./render-tag-mtfFSHEK.js";import{_ as D}from"./index-CvDNsAAq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css               */import"./index-BL5tj0GS.js";import"./index-DW9U_Ppe.js";import"./index-B6qYX52F.js";/* empty css             */import"./index-DN2d98YU.js";import"./index-CbT4wDAv.js";/* empty css                    */import"./index-CX_T96nQ.js";/* empty css                    *//* empty css             */import"./index-BwvkvsZu.js";import"./index-CGVSLK7z.js";import"./index-DfQ7uvCK.js";import"./attr-tag-DphMQldM.js";import"./of-fallback-C2gEBeKK.js";import"./index-CNrqrpGn.js";/* empty css             */import"./index-B1-_MGqD.js";import"./index-eGtaP7gF.js";import"./index-DSBRYoSW.js";import"./index-DoeQzs2M.js";import"./index-D7GlLQHj.js";import"./index-D52eSIAE.js";import"./index-DnXwn7Kz.js";import"./index-DXTRRJTV.js";import"./index-CxthRfyu.js";class M extends Marko.Component{}const s="znm_gUjm",o=V(s);S.r(s,()=>o);const g=M;o._=C(function(a,r,n,i,$,L){const{a11yButtonLoadingText:f,a11yMenuText:h,a11yText:A,bodyState:x,disabled:l,href:k,partiallyDisabled:p,priority:c,renderBody:_,size:d,transparent:T,variant:F,...B}=a;r.be("span",{class:"split-button"},"0",i,null,1),m(z,{split:"start",type:"button",size:d,disabled:l,priority:c,bodyState:x,href:k,a11yText:f,partiallyDisabled:p,renderBody:t=>{t.be("span",{class:"btn__cell"},"2",i,null,1),t.be("span",{class:"btn__text"},"3",i,null,1),O(t,_,null,null,null,null,n,"4"),t.ee(),t.ee()}},r,n,"1",[["click","emit",!1,["click"]],["escape","emit",!1,["escape"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]]]),m(D,{a11yText:h,split:"end",size:d,disabled:l,priority:c,transparent:T,reverse:!0,variant:"button",partiallyDisabled:p,...B},r,n,"5",[["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]]),r.ee()},{t:s},g);o.Component=w(g,o._);const j=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-split-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-split-button)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-split-button)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-split-button/examples)
`,R=a=>({input:E(a)}),Te={title:"buttons/ebay-split-button",component:o,parameters:{docs:{description:{component:j}}},argTypes:{renderBody:"Button",href:{description:"url for link behaviour (switches to anchor tag)",control:{type:"text"}},size:{options:["large","regular"],description:"",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},priority:{options:["primary","secondary","tertiary","none"],description:"",table:{defaultValue:{summary:"secondary"}},type:{category:"Options"}},bodyState:{description:"when state is loading, adds progress spinner. when user interacts with button, reset should be called to reset aria-live state. default is none",options:["none","loading","reset"],control:{type:"select"},table:{defaultValue:{summary:"none"}},type:{category:"Options"}},a11yButtonLoadingText:{description:"aria label for button when bodyState === loading",table:{defaultValue:""},control:{type:"text"},type:{category:"Options"}},a11yMenuText:{description:"aria label for menu button part",table:{defaultValue:""},control:{type:"text"},type:{category:"Options"}},type:{control:{type:"select"},options:["none","radio","checkbox"],description:'Can be "radio" / "checkbox"'},disabled:{description:"",control:{type:"boolean"},table:{category:"Toggles",defaultValue:{summary:"false"}}},partiallyDisabled:{description:"programmatically disabled, but remains keyboard focusable",control:{type:"boolean"},table:{defaultValue:{summary:"false"},category:"Toggles"}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onEscape:{action:"on-escape",description:"Triggered on escape key",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onChange:{action:"on-change",description:"Triggered on item checked change, (checkbox/radio type only)",table:{category:"Events",defaultValue:{summary:"radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},e=R.bind({});e.args={renderBody:"Button",a11yMenuText:"Menu",items:[{renderBody:"item 1 that has very long text"},{renderBody:"item 2"},{renderBody:"item 3"}]};e.parameters={docs:{source:{code:v("ebay-split-button",e.args,{items:"item"})}}};var u,y,b;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
  // input: {
  //     ...args,
  //     spread: null,
  //     ...args.spread,
  //     renderBody(out) {
  //         out.html(args.renderBody);
  //     },
  // },
})`,...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const Be=["Standard"];export{e as Standard,Be as __namedExportsOrder,Te as default};