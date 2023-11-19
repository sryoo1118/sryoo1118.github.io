"use strict";(self.webpackChunkigaworks=self.webpackChunkigaworks||[]).push([[670],{4670:(n,t,e)=>{e.r(t),e.d(t,{default:()=>H});var o=e(168),r=e(2791),c=e(3457),i=e.n(c);const a=e(5294).Z.create({baseURL:"https://static.adbrix.io/front/coding-test"});a.interceptors.request.use((function(n){return n}),(function(n){return Promise.reject(n)})),a.interceptors.response.use((function(n){return n}),(function(n){return Promise.reject(n)}));const s=a,l={getInfoList:()=>s({url:"/event_1.json",method:"GET"}),getChartList:()=>s({url:"/event_3.json",method:"GET"}),getCountryList:()=>s({url:"event_4.json",method:"GET"})};var d,p,h,u,f,g=e(2554),Z=e(4702);const x=n=>{let{data:t}=n;return(0,Z.BX)("div",{css:(0,g.iv)(d||(d=(0,o.Z)(["\n              display: flex;\n              flex-direction: column;\n              justify-content: space-between;\n              height: 100%;\n              padding: 10px 15px;\n              background-color: #fff;\n              text-align: left;\n            "]))),children:[(0,Z.tZ)("p",{css:(0,g.iv)(p||(p=(0,o.Z)(["\n            color: #66ADE5;\n            font-weight: 600;\n            "]))),children:"\uc811\uc18d\uc720\uc800"}),(0,Z.BX)("p",{children:[(0,Z.tZ)("span",{css:(0,g.iv)(h||(h=(0,o.Z)(["\n                    font-size: 12px;\n                    color: #999;\n                    background-color: #e6e6e6;\n                    padding: 4px;\n                    border-radius: 3px;\n                  "]))),children:"SUM"}),(0,Z.tZ)("span",{css:(0,g.iv)(u||(u=(0,o.Z)(["\n                    color: #999;\n                    padding-left: 10px;\n                  "]))),children:"Unique Event Count"})]}),(0,Z.tZ)("p",{css:(0,g.iv)(f||(f=(0,o.Z)(["\n              font-size: 26px;\n              font-weight: 600;\n            "]))),children:t.length&&(()=>{let n=0;return t.forEach((t=>{n+=parseInt(t[1],10)})),n})()}),(0,Z.tZ)("p",{children:t.length&&(n=>{const t=[...n].sort(((n,t)=>new Date(t[0])-new Date(n[0]))),e=t[0];return parseInt(e[1],10)-(t.length>1?parseInt(t[1][1],10):0)})(t)})]})};var v,w,y,m,b;const F=n=>{let{data:t}=n;return(0,Z.BX)("div",{css:(0,g.iv)(v||(v=(0,o.Z)(["\n              display: flex;\n              flex-direction: column;\n              justify-content: space-between;\n              height: 100%;\n              padding: 10px 15px;\n              background-color: #fff;\n              text-align: left;\n            "]))),children:[(0,Z.tZ)("p",{css:(0,g.iv)(w||(w=(0,o.Z)(["\n            color: #66ADE5;\n            font-weight: 600;\n            "]))),children:"\uc811\uc18d\ud69f\uc218"}),(0,Z.BX)("p",{children:[(0,Z.tZ)("span",{css:(0,g.iv)(y||(y=(0,o.Z)(["\n                    font-size: 12px;\n                    color: #999;\n                    background-color: #e6e6e6;\n                    padding: 4px;\n                    border-radius: 3px;\n                  "]))),children:"SUM"}),(0,Z.tZ)("span",{css:(0,g.iv)(m||(m=(0,o.Z)(["\n                    color: #999;\n                    padding-left: 10px;\n                  "]))),children:"Total Event Count"})]}),(0,Z.tZ)("p",{css:(0,g.iv)(b||(b=(0,o.Z)(["\n              font-size: 26px;\n              font-weight: 600;\n            "]))),children:t.length&&(n=>{let t=0;return n.forEach((n=>{t+=parseInt(n[2],10)})),t})(t)}),(0,Z.tZ)("p",{children:t.length&&(n=>{const t=[...n].sort(((n,t)=>new Date(t[0])-new Date(n[0]))),e=t[0];return parseInt(e[2],10)-(t.length>1?parseInt(t[2][2],10):0)})(t)})]})};var k,D,E=e(4706),B=e(2839),j=e(466),I=e(2891),C=e(5667),X=e(7281),A=e(3782),T=e(3142);const L=n=>{let{data:t}=n;const e=t.sort(((n,t)=>new Date(n[0])-new Date(t[0])));return(0,Z.BX)("div",{css:(0,g.iv)(k||(k=(0,o.Z)(["\n              display: flex;\n              flex-direction: column;\n              justify-content: space-between;\n              height: 100%;\n              padding: 10px 15px;\n              background-color: #fff;\n              text-align: left;\n            "]))),children:[(0,Z.tZ)("p",{css:(0,g.iv)(D||(D=(0,o.Z)(["\n            color: #66ADE5;\n            font-weight: 600;\n            "]))),children:"DAU"}),(0,Z.BX)(E.c,{width:800,height:400,data:e,children:[(0,Z.tZ)(B.q,{strokeDasharray:"3 3"}),(0,Z.tZ)(j.K,{dataKey:(n,t)=>t}),(0,Z.tZ)(I.B,{tickFormatter:n=>"".concat(n/1e3,"k")}),(0,Z.tZ)(C.u,{}),(0,Z.tZ)(X.D,{}),(0,Z.tZ)(A.$,{dataKey:n=>parseInt(n[1]),fill:"#8884d8",name:"Unique Event Count"}),(0,Z.tZ)(T.x,{type:"monotone",dataKey:n=>parseInt(n[2]),stroke:"#82ca9d",name:"Total Event Count"})]})]})};var U,K,q=e(3909),z=e(1041),R=e(1048);const S=()=>{const[n,t]=(0,r.useState)([]);(0,r.useEffect)((()=>{e()}),[]);const e=()=>{l.getChartList().then((n=>{"ok"===n.data.message&&t(n.data.data.rows)}))},c=n.map((n=>{const[t,e]=n;return[!["www.google.com","adbrix.io","console.dfinery.io","www.dfinery.io"].includes(t)?"etc":t,parseInt(e)]})),i=Object.values(c.reduce(((n,t)=>{let[e,o]=t;return n[e]=n[e]||{category:e,value:0},n[e].value+=o,n}),{})),a=["#0088FE","#00C49F","#FFBB28","#FF8042","#AF19FF","#4D4D4D","#FF7F7F","#7FBFFF","#4DFFE0","#FFD700"];return(0,Z.BX)("div",{css:(0,g.iv)(U||(U=(0,o.Z)(["\n              display: flex;\n              flex-direction: column;\n              justify-content: space-between;\n              height: 100%;\n              padding: 10px 15px;\n              background-color: #fff;\n              text-align: left;\n            "]))),children:[(0,Z.tZ)("p",{css:(0,g.iv)(K||(K=(0,o.Z)(["\n            color: #66ADE5;\n            font-weight: 600;\n            "]))),children:"Top Referral"}),(0,Z.BX)(q.u,{width:400,height:400,children:[(0,Z.tZ)(z.b,{data:i,dataKey:"value",cx:200,cy:200,outerRadius:80,fill:"#8884d8",label:n=>"etc"===n.payload.category?"etc":n.payload.category,children:i.map(((n,t)=>(0,Z.tZ)(R.b,{fill:a[t%a.length]},"cell-".concat(t))))}),(0,Z.tZ)(C.u,{})]})]})};var G,_;const M=()=>(0,Z.tZ)("div",{css:(0,g.iv)(G||(G=(0,o.Z)(["\n              display: flex;\n              flex-direction: column;\n              justify-content: space-between;\n              height: 100%;\n              padding: 10px 15px;\n              background-color: #fff;\n              text-align: left;\n            "]))),children:(0,Z.tZ)("p",{css:(0,g.iv)(_||(_=(0,o.Z)(["\n            color: #66ADE5;\n            font-weight: 600;\n            "]))),children:"Top Referral"})});var P;const H=()=>{const[n,t]=(0,r.useState)([]),e=[{i:"a",x:0,y:0,w:2,h:5,component:x},{i:"b",x:2,y:0,w:2,h:5,component:F},{i:"c",x:0,y:1,w:6,h:12,component:L},{i:"d",x:0,y:2,w:2,h:10,component:S},{i:"e",x:2,y:2,w:2,h:10,component:M}];(0,r.useEffect)((()=>{c()}),[]);const c=()=>{l.getInfoList().then((n=>{"ok"===n.data.message&&t(n.data.data.rows)}))};return(0,Z.tZ)(i(),{className:"layout",layout:e,cols:5,rowHeight:30,width:1e3,css:(0,g.iv)(P||(P=(0,o.Z)(["\n        background-color: #d9d9d9;\n      "]))),children:e.map((t=>(0,Z.tZ)("div",{children:t.component?(0,Z.tZ)(t.component,{data:n}):null},t.i)))})}}}]);
//# sourceMappingURL=670.d270aa5f.chunk.js.map