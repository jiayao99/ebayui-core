import{b as j,a as B}from"./utils-44f5c40b.js";import{t as M}from"./index-a17a703b.js";import{C as m,t as P}from"./index-86a03489.js";import{r as D,_ as V,a as E,t as I}from"./registry-08dff688.js";import{_ as L}from"./render-tag-73fdbff3.js";import"./index-0b00b731.js";import"./index-3f14fa50.js";/* empty css             */import"./index-4d4607bc.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-bb62150b.js";import"./_commonjsHelpers-725317a4.js";import"./index-dbe5ade1.js";import"./index-ad737ebd.js";import"./_commonjs-dynamic-modules-302442b1.js";const N=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-calendar
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

Calendar component, used for displaying dates and date ranges.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-date-textbox)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-date-textbox)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-date-textbox/examples)
`;function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?y(Object(a),!0).forEach(function(r){R(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function R(e,t,a){return t=F(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function F(e){var t=K(e,"string");return typeof t=="symbol"?t:String(t)}function K(e,t){if(typeof e!="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const u="CqDUkq7F",s=I(u);D.r(u,()=>s);const C={};s._=V(function(e,t,a,r,n,W){L(m,b(b({},e),{},{linkBuilder:d=>"https://www.ebay.com/sch/i.html?_nkw=".concat(d)}),t,a,"0",[["select","emit",!1,["select"]],["month-change","emit",!1,["month"]],["focus","emit",!1,["focus"]]])},{t:u,i:!0},C);s.Component=E(C,s._);const q=`<ebay-calendar
    ...input
    linkBuilder=(iso) => {
        return \`https://www.ebay.com/sch/i.html?_nkw=\${iso}\`;
    }
    on-select("emit", "select")
    on-month-change("emit", "month")
    on-focus("emit", "focus")
    />
`;function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?f(Object(a),!0).forEach(function(r){A(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function A(e,t,a){return t=z(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function z(e){var t=U(e,"string");return typeof t=="symbol"?t:String(t)}function U(e,t){if(typeof e!="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const p="VCfNMhRN",i=I(p),G=P(new Date(Date.now()-24*60*60*1e3)),H=P(new Date(Date.now()+24*60*60*1e3)),J={[G]:"https://www.ebay.com/sch/i.html?_nkw=yesterday",[H]:"https://www.ebay.com/sch/i.html?_nkw=tomorrow"};D.r(p,()=>i);const $={};i._=V(function(e,t,a,r,n,W){L(m,h(h({},e),{},{linkBuilder:d=>J[d]}),t,a,"0",[["select","emit",!1,["select"]],["month-change","emit",!1,["month"]],["focus","emit",!1,["focus"]]])},{t:p,i:!0},$);i.Component=E($,i._);const Q=`import { toISO } from "../date-utils";
static const yesterdayISO = toISO(new Date(Date.now() - 24 * 60 * 60 * 1000));
static const tomorrowISO = toISO(new Date(Date.now() + 24 * 60 * 60 * 1000));
static const linkMap = {
    [yesterdayISO]: "https://www.ebay.com/sch/i.html?_nkw=yesterday",
    [tomorrowISO]: "https://www.ebay.com/sch/i.html?_nkw=tomorrow"
};

<ebay-calendar
    ...input
    linkBuilder=(iso) => {
        return linkMap[iso];
    }
    on-select("emit", "select")
    on-month-change("emit", "month")
    on-focus("emit", "focus")
    />
`,X=e=>({input:B(e)}),be={title:"building blocks/ebay-calendar",component:m,parameters:{docs:{description:{component:N}}},argTypes:{navigable:{type:"boolean",control:{type:"boolean"},description:"If true, a header is included that allows for navigation between months",table:{defaultValue:{summary:"false"}}},interactive:{type:"boolean",control:{type:"boolean"},description:"Date cells are contained in buttons for interactive calendars, and spans otherwise",table:{defaultValue:{summary:"false"}}},numMonths:{type:"number",control:{type:"number"},description:"Number of months to be displayed at once",table:{defaultValue:{summary:"false"}}},range:{type:"boolean",control:{type:"boolean"},description:"True if selecting a range, false if a single value",table:{defaultValue:{summary:"false"}}},selected:{type:"text|array",control:{type:"object"},description:"Date or list of dates that are selected, represented as an ISO string or an array of ISO strings",table:{defaultValue:{summary:"undefined"}}},locale:{type:"text",control:{type:"text"},description:"Locale of the date picker",table:{defaultValue:{summary:"navigator.language"}}},disableBefore:{type:"date",control:{type:"date"},description:"First date that may be selected",table:{defaultValue:{summary:"undefined"}}},disableAfter:{type:"date",control:{type:"date"},description:"Last date that may be selected",table:{defaultValue:{summary:"undefined"}}},disableWeekdays:{type:"array",control:{type:"array"},description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",table:{defaultValue:{summary:"undefined"}}},disableList:{type:"array",control:{type:"array"},description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",table:{defaultValue:{summary:"undefined"}}},linkBuilder:{type:"callback",control:{type:"callback"},description:"Function used to build the href for each date. The function is passed the date as a `Date` object, and should return a url string. For dates that don't have a link, the function should return a falsy value",table:{defaultValue:{summary:"undefined"}}},getA11yShowMonthText:{type:"callback",control:{type:"callback"},description:"Function used to get the text for showing previous and next months",table:{defaultValue:{summary:"(monthName) => `Show ${monthName}`"}}},a11ySelectedText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is selected",table:{defaultValue:{summary:"selected"}}},a11yRangeStartText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the start of a range",table:{defaultValue:{summary:"start of range"}}},a11yInRangeText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is in a range",table:{defaultValue:{summary:"in range"}}},a11yRangeEndText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the end of a range",table:{defaultValue:{summary:"end of range"}}},a11yTodayText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the current date",table:{defaultValue:{summary:"today"}}},a11yDisabledText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is disabled",table:{defaultValue:{summary:"inactive"}}},a11ySeparator:{type:"text",control:{type:"text"},description:"Text to be read by screen readers to separate properties",table:{defaultValue:{summary:" - "}}},onSelect:{action:"on-select",description:"Triggered when a date is selected",table:{category:"Events",defaultValue:{summary:"{ iso }"}}},"onMonth-change":{action:"on-month-change",description:"Triggered during month navigation",table:{category:"Events",defaultValue:{summary:"{ iso }"}}},onFocus:{action:"on-focus",description:"Triggered when a day is focused on, typically via keyboard events",table:{category:"Events",defaultValue:{summary:"{ iso }"}}}}},o=X.bind({});o.parameters={docs:{source:{code:M("ebay-calendar",{})}}};const c=j(s,q),l=j(i,Q);var g,w,O;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(O=(w=o.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var x,S,_;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"buildExtensionTemplate(WithLinksTemplate, WithLinksTemplateCode)",...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var k,v,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:"buildExtensionTemplate(WithSpecificLinksTemplate, WithSpecificLinksTemplateCode)",...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const fe=["Default","WithLinks","WithSpecificLinks"];export{o as Default,c as WithLinks,l as WithSpecificLinks,fe as __namedExportsOrder,be as default};
//# sourceMappingURL=calendar.stories-3686fc61.js.map