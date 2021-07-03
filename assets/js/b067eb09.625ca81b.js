(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4895],{3905:function(e,a,t){"use strict";t.r(a),t.d(a,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return N},useMDXComponents:function(){return i},withMDXComponents:function(){return p}});var n=t(2784);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){return function(a){var t=i(a.components);return n.createElement(e,o({},a,{components:t}))}},i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=i(t),c=r,x=p["".concat(d,".").concat(c)]||p[c]||u[c]||o;return t?n.createElement(x,s(s({ref:a},l),{},{components:t})):n.createElement(x,s({ref:a},l))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,d=new Array(o);d[0]=x;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,d[1]=s;for(var l=2;l<o;l++)d[l]=t[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},1586:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return i}});var n=t(22122),r=t(19756),o=(t(2784),t(3905)),d=["components"],s={title:"useAudioData()",id:"use-audio-data"},m={unversionedId:"use-audio-data",id:"use-audio-data",isDocsHomePage:!1,title:"useAudioData()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/use-audio-data.md",sourceDirName:".",slug:"/use-audio-data",permalink:"/docs/use-audio-data",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/use-audio-data.md",version:"current",frontMatter:{title:"useAudioData()",id:"use-audio-data"},sidebar:"someSidebar",previous:{title:"getWaveformPortion()",permalink:"/docs/get-waveform-portion"},next:{title:"visualizeAudio()",permalink:"/docs/visualize-audio"}},l=[{value:"Arguments",id:"arguments",children:[{value:"<code>src</code>",id:"src",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:l};function i(e){var a=e.components,t=(0,r.default)(e,d);return(0,o.mdx)("wrapper",(0,n.default)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Part of the ",(0,o.mdx)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),(0,o.mdx)("p",null,"This convienience function wraps the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/get-audio-data"},(0,o.mdx)("inlineCode",{parentName:"a"},"getAudioData()"))," function into a hook and does 3 things:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Keeps the audio data in a state"),(0,o.mdx)("li",{parentName:"ul"},"Wraps the function in a ",(0,o.mdx)("a",{parentName:"li",href:"/docs/data-fetching"},(0,o.mdx)("inlineCode",{parentName:"a"},"delayRender()")," / ",(0,o.mdx)("inlineCode",{parentName:"a"},"continueRender()"))," pattern."),(0,o.mdx)("li",{parentName:"ul"},"Handles the case where the component gets unmounted while the fetching is in progress and a React error is thrown.")),(0,o.mdx)("p",null,"Using this function, you can elegantly render a component based on audio properties, for example together with the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/visualize-audio"},(0,o.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()"))," function."),(0,o.mdx)("h2",{id:"arguments"},"Arguments"),(0,o.mdx)("h3",{id:"src"},(0,o.mdx)("inlineCode",{parentName:"h3"},"src")),(0,o.mdx)("p",null,"A string pointing to an audio asset."),(0,o.mdx)("h2",{id:"return-value"},"Return value"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"AudioData | null")," - An object containing audio data (see documentation of ",(0,o.mdx)("a",{parentName:"p",href:"/docs/get-audio-data"},(0,o.mdx)("inlineCode",{parentName:"a"},"getAudioData()")),") or ",(0,o.mdx)("inlineCode",{parentName:"p"},"null")," if the data has not been loaded."),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("undefined",null,(0,o.mdx)("pre",{className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const useAudioData: (src: string) => AudioData | null\nimport useAudioData"},"useAudioData"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'@remotion/media-utils'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'./music.mp3'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const MyComponent: React.FC<{}>"},"MyComponent")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"."),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"type React.FC<P = {}> = React.FunctionComponent<P>"},"FC")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData | null"},"audioData")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useAudioData(src: string): AudioData | null\nimport useAudioData"},"useAudioData")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music"),");")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"if"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ("),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"!"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData | null"},"audioData"),") {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">This file has a {"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData"},"audioData")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},".",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) sampleRate: number"},"sampleRate"),"} sampleRate.</"),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,o.mdx)("pre",{className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const useAudioData: (src: string) => AudioData | null\nimport useAudioData"},"useAudioData"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'@remotion/media-utils'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},";")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./music.mp3'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},";")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const MyComponent: React.FC<{}>"},"MyComponent")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React"),".",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"type React.FC<P = {}> = React.FunctionComponent<P>"},"FC")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData | null"},"audioData")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useAudioData(src: string): AudioData | null\nimport useAudioData"},"useAudioData"),"(",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music"),");")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"if"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ("),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"!"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData | null"},"audioData"),") {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"null"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},";")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  }")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">This file has a {"),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData"},"audioData")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},".",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) sampleRate: number"},"sampleRate"),"} sampleRate.</"),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  );")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/get-audio-data"},(0,o.mdx)("inlineCode",{parentName:"a"},"getAudioData()"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/visualize-audio"},(0,o.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/audio-visualization"},"Audio visualization"))))}i.isMDXComponent=!0}}]);