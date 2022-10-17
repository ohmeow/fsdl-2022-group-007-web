"use strict";(globalThis["webpackChunkcourse_copilot_web"]=globalThis["webpackChunkcourse_copilot_web"]||[]).push([[57],{2057:(e,l,a)=>{a.r(l),a.d(l,{default:()=>R});var t=a(9835),s=a(499),o=a(6970),i=a(1446),d=a(9981),n=a.n(d),c=a(9192),u=a.n(c);a(1569);const r={class:"q-pt-md"},p={class:"row q-pb-sm"},m={class:"col-5 q-pr-xs"},v={class:"col"},g={class:"row q-gutter-sm"},h={class:"col-5"},w=(0,t._)("div",{class:"text-h5"},"Video",-1),y={class:"col q-pr-lg"},b=(0,t._)("div",{class:"text-h5"},"Topics",-1),_=["onClick"],q={class:"row q-pt-md q-gutter-sm"},k={class:"col"},x={class:"row q-pt-md q-gutter-sm"},f={class:"col"},C=(0,t._)("div",{class:"text-h5"},"Topic Summaries",-1),V={class:"text-weight-bolder float-left"},W=["onClick"],U={class:"q-ml-sm"},H={__name:"IndexPage",setup(e){const l=(0,i.Z)(),a=(0,s.iH)(null),d=(0,s.iH)(null),c=(0,s.iH)(null),H="/api/v0",Q=(0,s.iH)({}),Z=(0,s.iH)(!1),D=(0,s.iH)([]),P=(0,s.iH)(null),T=e=>"completed"===e?"done":"failed"===e?"error":"processing"===e?"directions_run":"start",z=e=>"completed"===e?"green":"failed"===e?"red":"processing"===e?"yellow":"primary",S=()=>{let e=d.value.match(/v=([^&]*)/);null!==e&&(c.value=e[1],a.value.loadVideoById({videoId:c.value,startSeconds:0}),a.value.stopVideo())},Y=e=>{a.value.seekTo(e,!0)},$=()=>{""!==a.value.$el.src&&console.log("here")},I=async()=>{l.loading.show();try{const e={url:d.value},{data:a}=await n().post(`${H}/videos/`,e);l.notify({type:"positive",message:"Video is being processed ..."})}catch(e){Z.value=!1,l.notify({type:"negative",message:e.message||"Could not process video"})}l.loading.hide()},B=async()=>{l.loading.show();try{const{data:e}=await n().get(`${H}/tasks/?limit=20&order=desc`);D.value=e,Z.value=!0,console.log(D.value)}catch(e){Z.value=!1,l.notify({type:"negative",message:e.message||"Could not get tasks"})}l.loading.hide()},K=async e=>{Q.value=[],P.value=e,d.value=e.video.url,l.loading.show();try{const{data:e}=await n().get(`${H}/results/${P.value.id}`);S(),Q.value=e,Z.value=!1}catch(a){P.value=null,l.notify({type:"negative",message:a.message||"Could not get prediction"})}l.loading.hide()},R=async()=>{l.loading.show(),l.notify({type:"positive",message:"Predictions updated"}),l.loading.hide()},A=async()=>{l.loading.show(),l.notify({type:"positive",message:"Chapter markers downloaded"}),l.loading.hide()},E=async()=>{l.loading.show(),l.notify({type:"positive",message:"Quarto file downloaded"}),l.loading.hide()};return(e,l)=>{const i=(0,t.up)("q-input"),n=(0,t.up)("q-btn"),c=(0,t.up)("q-scroll-area"),H=(0,t.up)("q-page"),j=(0,t.up)("q-tooltip"),G=(0,t.up)("q-avatar"),L=(0,t.up)("q-card-section"),M=(0,t.up)("q-card"),O=(0,t.up)("q-dialog");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(H,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",r,[(0,t._)("div",p,[(0,t._)("div",m,[(0,t.Wm)(i,{outlined:"",dense:"",modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value=e),label:"YouTube Video URL"},null,8,["modelValue"])]),(0,t._)("div",v,[(0,t.Wm)(n,{class:"q-mr-xs",outline:"",style:{height:"100%"},color:"white","text-color":"black",label:"Open Video",disable:!d.value,onClick:S},null,8,["disable"]),(0,t.Wm)(n,{class:"q-mr-xs",style:{height:"100%"},outline:"",color:"white","text-color":"black",label:"Process",disable:null===d.value,onClick:I},null,8,["disable"]),(0,t.Wm)(n,{style:{height:"100%"},outline:"",color:"white","text-color":"black",label:"Get Predictions",onClick:B})])]),(0,t._)("div",g,[(0,t._)("div",h,[w,(0,t.Wm)((0,s.SU)(u()),{id:"player",ref_key:"player",ref:a,width:"100%",src:"",onReady:$},null,512)]),(0,t._)("div",y,[b,(0,t.Wm)(c,{style:{height:"80%",width:"75%"}},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Q.value.topics,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.order,class:"q-py-xs",style:{display:"flex","align-items":"center",width:"98%"}},[(0,t._)("div",{class:"text-primary",style:{cursor:"pointer"},onClick:l=>Y(e.start_seconds)},(0,o.zw)(e.start),9,_),(0,t.Wm)(i,{class:"q-pl-sm",style:{width:"100%"},square:"",outlined:"",dense:"",modelValue:e.headline,"onUpdate:modelValue":l=>e.headline=l},null,8,["modelValue","onUpdate:modelValue"])])))),128))])),_:1})])]),(0,t._)("div",q,[(0,t._)("div",k,[(0,t.Wm)(n,{class:"q-mr-xs",style:{height:"100%"},color:"primary",icon:"save","text-color":"white",label:"Update Predictions",disable:null===P.value,onClick:R},null,8,["disable"]),(0,t.Wm)(n,{class:"q-mr-xs",style:{height:"100%"},color:"red",icon:"undo","text-color":"white",label:"Undo Changes",disable:null===P.value,onClick:l[1]||(l[1]=e=>K(P.value))},null,8,["disable"]),(0,t.Wm)(n,{class:"q-ml-lg",style:{height:"100%"},color:"secondary","text-color":"white",icon:"file_download",label:"Export Chapter Markers",disable:null===P.value,onClick:A},null,8,["disable"]),(0,t.Wm)(n,{class:"q-ml-sm",style:{height:"100%"},color:"secondary",icon:"file_download","text-color":"white",label:"Export Quarto Blog Post",disable:null===P.value,onClick:E},null,8,["disable"])])]),(0,t._)("div",x,[(0,t._)("div",f,[C,(0,t.Wm)(c,{style:{height:"375px",width:"85%"}},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Q.value.topics,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.order,class:"q-py-xs",style:{"align-items":"center",width:"98%"}},[(0,t._)("div",V,(0,o.zw)(e.headline),1),(0,t._)("div",{class:"float-left q-pl-sm text-primary",style:{cursor:"pointer"},onClick:l=>Y(e.start_seconds)},(0,o.zw)(e.start),9,W),(0,t.Wm)(i,{class:"q-pl-sm",style:{width:"100%",padding:"0"},square:"",outlined:"",dense:"",type:"textarea",modelValue:e.summary,"onUpdate:modelValue":l=>e.summary=l},null,8,["modelValue","onUpdate:modelValue"])])))),128))])),_:1})])])])])),_:1}),(0,t.Wm)(O,{modelValue:Z.value,"onUpdate:modelValue":l[2]||(l[2]=e=>Z.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{style:{"max-width":"1500px",width:"1000px"}},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(D.value,(e=>((0,t.wg)(),(0,t.j4)(L,{class:"row items-center",key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(G,{icon:T(e.status),color:z(e.status),alt:e.status,tooltip:e.status,"text-color":"white"},{default:(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.status),1)])),_:2},1024)])),_:2},1032,["icon","color","alt","tooltip"]),(0,t._)("span",U,[(0,t.Uk)((0,o.zw)(e.video.url)+" ",1),(0,t.Wm)(n,{class:"q-ml-sm",style:{height:"100%"},color:"green",icon:"visibility","text-color":"white",label:"View Results",disable:"completed"!==e.status,onClick:l=>K(e)},null,8,["disable","onClick"])])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])],64)}}};var Q=a(9885),Z=a(4925),D=a(8556),P=a(1717),T=a(5553),z=a(4458),S=a(3190),Y=a(1357),$=a(7048),I=a(9984),B=a.n(I);const K=H,R=K;B()(H,"components",{QPage:Q.Z,QInput:Z.Z,QBtn:D.Z,QScrollArea:P.Z,QDialog:T.Z,QCard:z.Z,QCardSection:S.Z,QAvatar:Y.Z,QTooltip:$.Z})}}]);