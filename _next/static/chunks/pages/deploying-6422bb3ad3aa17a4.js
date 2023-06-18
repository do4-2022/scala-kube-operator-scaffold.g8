(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{743:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deploying",function(){return i(5437)}])},979:function(e,s,i){"use strict";var n=i(5893);s.Z={logo:(0,n.jsx)("strong",{children:"Kubernetes Operator Scaffold"}),docsRepositoryBase:"https://github.com/do4-2022/scala-kube-operator-scaffold/blob/main/docs",project:{link:"https://github.com/do4-2022/scala-kube-operator-scaffold"}}},5437:function(e,s,i){"use strict";i.r(s);var n=i(5893),r=i(2673),t=i(1712),l=i(979);i(9966);var o=i(1151);i(5675);var a=i(1149);let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/deploying.mdx",route:"/deploying",headings:[{depth:1,value:"Deploying the chart",id:"deploying-the-chart"},{depth:2,value:"Prerequisites",id:"prerequisites"},{depth:2,value:"Deploying the chart on a local cluster (minikube, kind or k3d)",id:"deploying-the-chart-on-a-local-cluster-minikube-kind-or-k3d"},{depth:3,value:"1. Build the operator image",id:"1-build-the-operator-image"},{depth:3,value:"2. Load the image into the cluster",id:"2-load-the-image-into-the-cluster"},{depth:4,value:"Minikube",id:"minikube"},{depth:4,value:"k3d",id:"k3d"},{depth:4,value:"kind",id:"kind"},{depth:3,value:"3. Deploy the chart",id:"3-deploy-the-chart"}],pageMap:[{kind:"Meta",data:{"-- Getting Started --":{type:"separator",title:"Getting Started"},index:"Introduction",quickstart:"Quickstart",deploying:"Deploying","understanding-template":"Understanding the template","-- Configuration --":{type:"separator",title:"Configuration"},"template-properties":"Template Properties"}},{kind:"MdxPage",name:"deploying",route:"/deploying"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"template-properties",route:"/template-properties"},{kind:"MdxPage",name:"understanding-template",route:"/understanding-template"}],flexsearch:{codeblocks:!0},title:"Deploying the chart"},pageNextRoute:"/deploying",nextraLayout:t.ZP,themeConfig:l.Z};function h(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",span:"span",h4:"h4"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Deploying the chart"}),"\n",(0,n.jsx)(s.p,{children:"This guide will guide you through the process of deploying the operator."}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"A Kubernetes cluster with version >= 1.16"}),"\n",(0,n.jsx)(s.li,{children:"Helm 3"}),"\n",(0,n.jsx)(s.li,{children:"Docker or a container registry"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"deploying-the-chart-on-a-local-cluster-minikube-kind-or-k3d",children:"Deploying the chart on a local cluster (minikube, kind or k3d)"}),"\n",(0,n.jsx)(s.h3,{id:"1-build-the-operator-image",children:"1. Build the operator image"}),"\n",(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sbt"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"docker:publishLocal"})]})})}),"\n",(0,n.jsx)(s.h3,{id:"2-load-the-image-into-the-cluster",children:"2. Load the image into the cluster"}),"\n",(0,n.jsx)(s.h4,{id:"minikube",children:"Minikube"}),"\n",(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"minikube"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"image"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"load"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nam"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"versio"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"n"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})})}),"\n",(0,n.jsx)(a.UW,{type:"info",children:(0,n.jsxs)(s.p,{children:["Replace ",(0,n.jsx)(s.code,{children:"<name>"})," and ",(0,n.jsx)(s.code,{children:"<version>"})," with the name you provided when generating the project and the current version of your application (default: 0.0.1)."]})}),"\n",(0,n.jsx)(s.h4,{id:"k3d",children:"k3d"}),"\n",(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"k3d"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"image"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nam"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"versio"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"n"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})})}),"\n",(0,n.jsx)(s.h4,{id:"kind",children:"kind"}),"\n",(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"kind"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"load"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"docker-image"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nam"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"versio"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"n"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})})}),"\n",(0,n.jsx)(s.h3,{id:"3-deploy-the-chart",children:"3. Deploy the chart"}),"\n",(0,n.jsxs)(s.p,{children:["Start by changing the image deployed in the ",(0,n.jsx)(s.code,{children:"chart/values.yaml"})," file."]}),"\n",(0,n.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"image"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"repository"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<name>"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"tag"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<version>"})]})]})}),"\n",(0,n.jsx)(s.p,{children:"Then, deploy the chart."}),"\n",(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"helm"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nam"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"./chart"})]})})})]})}s.default=(0,r.j)(c)}},function(e){e.O(0,[774,568,888,179],function(){return e(e.s=743)}),_N_E=e.O()}]);