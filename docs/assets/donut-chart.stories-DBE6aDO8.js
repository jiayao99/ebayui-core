import{t as D}from"./index-CCz6reEH.js";import{a as ce}from"./utils-DWCsNc5l.js";import{r as k,b as T,c as S,t as L,d as le,e as de,p as he}from"./registry-CtNeIPU8.js";/* empty css                */import{_ as V}from"./dynamic-tag-HMZVE1pc.js";import{_ as pe}from"./preserve-tag-BhjIElGR.js";import{_ as w}from"./render-tag-mtfFSHEK.js";import{_ as ue}from"./of-fallback-C2gEBeKK.js";import{C as me}from"./index-Marf191J.js";import{s as ge,b as be,c as ye}from"./shared-CFliv6Xx.js";import{_ as ee}from"./const-element-D4l_3TxL.js";import{i as fe,a as _e}from"./attr-tag-DphMQldM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const ve=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-line-chart
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v3.7.0
    </span>
</h1>

The donut chart displays one to five series of data points as an interactive donut chart.

It also allows for a title and a metric value to be displayed.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/docs/charts-ebay-donut-chart)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/charts-ebay-donut-chart)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-donut-chart/examples)
`;class De extends Marko.Component{}const $="cUdWpSei",_=L($);k.r($,()=>_);const te=De;_._=T(function(r,e,a,t,o,c){e.be("div",{class:"chart-legend"},"0",t,null,1),e.be("dl",{class:"chart-legend__list"},"1",t,null,1);{let i=0;for(const s of ue(r.items)){const n=`[${i++}]`;e.be("div",{class:"chart-legend__item"},"2"+n,t,null,1),e.be("dt",{class:"chart-legend__label"},"3"+n,t,null,1),e.t(s.name,t),e.ee(),e.be("dd",{class:"chart-legend__value"},"4"+n,t,null,1),e.t(s.value,t),e.ee(),e.ee()}}e.ee(),e.ee()},{t:$},te);_.Component=S(te,_._);function Ce(r){r.seriesTypes.pie.prototype.ebayDonut||r.wrap(r.seriesTypes.pie.prototype,"translate",function(e){if(r.seriesTypes.pie.prototype.ebayDonut=!0,e.call(this),this.points.length===1)return;const a=this.center[2],o=2*Math.asin(5/a);this.points.forEach(c=>{c.shapeArgs.start+=o/2,c.shapeArgs.end-=o/2})})}class ke extends Marko.Component{}const x="GDsDspdn",C=L(x),Te=ee("br",null,0);k.r(x,()=>ke);const re={};C._=T(function(r,e,a,t,o,c){e.be("div",{class:"donut-tooltip tooltip__overlay",role:"tooltip"},"0",t,null,0),e.be("div",{class:"tooltip__mask"},"1",t,null,1),e.be("div",{class:"tooltip__cell"},"2",t,null,1),e.be("div",{class:"tooltip__content"},"3",t,null,1),e.be("b",null,"4",t,null,0),e.t(r.name,t),e.ee(),e.n(Te,t),r.tooltip?e.t(r.tooltip,t):e.t(r.value,t),e.ee(),e.ee(),e.ee(),e.ee()},{t:x,s:!0},re);C.Component=S(re,C._);class Se extends Marko.Component{onCreate(){this.cdnLoader=new me(this,{stagger:!0,key:"highcharts",types:["src","src"],files:["highcharts.js","accessibility.js","pattern-fill.js"],setLoading:()=>{},handleError:this.handleError.bind(this),handleSuccess:this.handleSuccess.bind(this)})}handleError(e){this.emit("load-error",e)}handleSuccess(){this._initializeHighchartsExtensions(),this._setupChart()}onMount(){this.cdnLoader.setOverrides([this.input.cdnHighcharts,this.input.cdnHighchartsAccessibility,this.input.cdnHighchartsPatternFill],this.input.version??"11.4.0").mount()}getContainerId(){return`ebay-donut-graph-${this.id}`}_initializeHighchartsExtensions(){Ce(Highcharts)}_setupChart(){const e=this.input.series.map(s=>({...s,type:s.type||"pie"}));e.length>1&&console.warn("Donut chart only supports one series");const a=ge(e[0]),t=this.getChartConfig(),o=this.getPlotOptions(),c=this.getTooltipConfig(),i={chart:t,colors:a,title:{text:void 0},plotOptions:o,series:e,tooltip:c,credits:{enabled:!1}};this.chartRef=Highcharts.chart(this.getContainerId(),i)}getChartConfig(){return{type:"pie",spacing:[0,0,0,0],margin:[0,0,0,0],backgroundColor:be,style:{fontFamily:ye}}}getPlotOptions(){return{pie:{description:this.input.highchartsDescription,size:"100%",thickness:10,allowPointSelect:!1,cursor:"pointer",borderRadius:"30%",dataLabels:{enabled:!1},states:{hover:{halo:{size:0}}}}}}getTooltipConfig(){return{formatter:function(e){return C.renderToString({name:this.point.name,value:`${this.point.y}`})},hideDelay:250,useHTML:!0,backgroundColor:"transparent",padding:0,borderWidth:0,borderRadius:0,outside:!0,shadow:!1,shared:!0,style:{fontSize:"12px"}}}getLegendItems(){const{series:e}=this.input;return e[0].data.map(a=>({name:a.name,value:a.y}))}}const A="LBmpsvtc",b=L(A);k.r(A,()=>b);const ae=Se;b._=T(function(r,e,a,t,o,c){const{title:i,metricValue:s,metricLabel:n,class:ie,series:we,highchartsDescription:$e,...ne}=r;e.be("div",le({class:de([ie,"donut-chart"])},he(ne)),"0",t,null,4),e.be("div",{class:"donut-chart__grid"},"1",t,null,1),i&&(e.be("div",{class:"donut-chart__title"},"2",t,null,1),typeof i=="string"?e.t(i,t):V(e,i,null,null,null,null,a,"3"),e.ee()),(n||s)&&(e.be("div",{class:"donut-chart__metric"},"4",t,null,1),s&&(e.be("div",{class:"donut-chart__metric-value"},"5",t,null,1),typeof s=="string"?e.t(s,t):V(e,s,null,null,null,null,a,"6"),e.ee()),n&&(e.be("div",{class:"donut-chart__metric-label"},"7",t,null,1),typeof n=="string"?e.t(n,t):V(e,n,null,null,null,null,a,"8"),e.ee()),e.ee()),w(pe,{n:!0,renderBody:oe=>{oe.e("div",{id:t.getContainerId(),class:"donut-chart__graph"},"9",t,0,1)}},e,a,"9"),e.be("div",{class:"donut-chart__legend"},"10",t,null,1),w(_,{items:t.getLegendItems()},e,a,"11"),e.ee(),e.ee(),e.ee()},{t:A},ae);b.Component=S(ae,b._);const m=[{name:"Portion 1",y:20},{name:"Portion 2",y:40},{name:"Portion 3",y:50},{name:"Portion 4",y:30},{name:"Portion 5",y:10}],B="RTBOlcWj",v=L(B),Le=ee("h1",null,1).e("i",null,1).t("Donut Chart");k.r(B,()=>v);const se={};v._=T(function(r,e,a,t,o,c){w(b,fe(()=>{_e("title",{renderBody:i=>{i.n(Le,t)}})},{series:[{data:m}]}),e,a,"0")},{t:B,i:!0},se);v.Component=S(se,v._);const Ve=`import { data } from "./data.json";

<ebay-donut-chart series=[{ data }]>
    <@title>
        <h1><i>Donut Chart</i></h1>
    </@title>
</ebay-donut-chart>
`,y=r=>({input:ce(r)}),We={title:"charts/ebay-donut-chart",component:b,parameters:{docs:{description:{component:ve}},layout:"fullscreen"},argTypes:{title:{type:"string|@title",description:"A title displayed above the graph"},metricValue:{type:"string|@metricValue",description:"A primary metric value that summarizes the chart"},metricLabel:{type:"string|@metricLabel",description:"A supporting label for the primary metric value"},class:{type:{name:"string",require:!1},description:"A class name that will be added to the main chart container"},cdnHighcharts:{type:{name:"string",require:!1},description:"CDN url override for loading highcharts"},cdnHighchartsAccessibility:{type:{name:"string",require:!1},description:"CDN url override for loading highcharts accessibility module"},cdnHighchartsPatternFill:{type:{name:"string",require:!1},description:"CDN url override for loading highcharts pattern-fill module"},version:{type:{name:"string",require:!1},description:"Highcharts version to load from CDN"},series:{type:{name:"array",require:!0},description:"Highcharts series data for the chart. Only one series is supported for donut chart."},highchartsDescription:{type:{name:"string",require:!1},description:"Highcharts description, not visible on the chart"}}},l=y.bind({});l.args={series:[{data:m.slice(0,3)}],title:"Donut chart title",metricValue:"174 Total",metricLabel:"3.78% return rate",highchartsDescription:"Donut chart description"};l.parameters={docs:{source:{code:D("ebay-donut-chart",l.args)}}};const d=y.bind({});d.args={series:[{data:m.slice(0,2)}],title:"Donut chart with two values",metricValue:"174 Total",metricLabel:"3.78% return rate",highchartsDescription:"Donut chart description"};d.parameters={docs:{source:{code:D("ebay-donut-chart",d.args)}}};const h=y.bind({});h.args={series:[{data:m.slice(0,3)}],title:"Donut chart with three values",metricValue:"174 Total",metricLabel:"3.78% return rate",highchartsDescription:"Donut chart description"};h.parameters={docs:{source:{code:D("ebay-donut-chart",h.args)}}};const p=y.bind({});p.args={series:[{data:m.slice(0,4)}],title:"Donut chart with four values",metricValue:"174 Total",metricLabel:"3.78% return rate",highchartsDescription:"Donut chart description"};p.parameters={docs:{source:{code:D("ebay-donut-chart",p.args)}}};const u=y.bind({});u.args={series:[{data:m}],title:"Donut chart with five values",metricValue:"174 Total",metricLabel:"3.78% return rate",highchartsDescription:"Donut chart description"};u.parameters={docs:{source:{code:D("ebay-donut-chart",u.args)}}};const f=y.bind({});f.args={series:[{data:m.slice(0,4)}],title:"Donut chart title, no metrics",highchartsDescription:"Donut chart description"};const g=r=>({input:r,component:v});g.args={};g.parameters={docs:{source:{code:Ve}}};var H,R,E;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(E=(R=l.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var P,F,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var q,z,I;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(I=(z=h.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var N,O,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var j,G,U;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(U=(G=u.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  input: args,
  component: WithAttrTagsTemplate
})`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const je=["Standard","TwoValues","ThreeValues","FourValues","FiveValues","NoMetrics","WithAttributeTags"];export{u as FiveValues,p as FourValues,f as NoMetrics,l as Standard,h as ThreeValues,d as TwoValues,g as WithAttributeTags,je as __namedExportsOrder,We as default};