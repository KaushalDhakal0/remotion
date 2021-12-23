"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6971],{57522:function(e,a,n){n.r(a),n.d(a,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return v},useMDXComponents:function(){return i},withMDXComponents:function(){return l}});var t=n(29901);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},d=Object.keys(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=t.createContext({}),l=function(e){return function(a){var n=i(a.components);return t.createElement(e,d({},a,{components:n}))}},i=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=i(e.components);return t.createElement(m.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},x=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=i(n),c=r,x=l["".concat(o,".").concat(c)]||l[c]||N[c]||d;return n?t.createElement(x,s(s({ref:a},m),{},{components:n})):t.createElement(x,s({ref:a},m))}));function v(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=x;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<d;m++)o[m]=n[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}x.displayName="MDXCreateElement"},3594:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return l},default:function(){return c}});var t=n(3920),r=n(50264),d=(n(29901),n(57522)),o=["components"],s={title:"getCompositions()",id:"get-compositions"},p=void 0,m={unversionedId:"get-compositions",id:"get-compositions",isDocsHomePage:!1,title:"getCompositions()",description:"Part of the @remotion/renderer package.",source:"@site/docs/get-compositions.md",sourceDirName:".",slug:"/get-compositions",permalink:"/docs/get-compositions",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/get-compositions.md",tags:[],version:"current",frontMatter:{title:"getCompositions()",id:"get-compositions"},sidebar:"someSidebar",previous:{title:"useVideoTexture()",permalink:"/docs/use-video-texture"},next:{title:"renderFrames()",permalink:"/docs/render-frames"}},l=[{value:"Arguments",id:"arguments",children:[{value:"<code>bundle</code>",id:"bundle",children:[],level:3},{value:"<code>options?</code>",id:"options",children:[{value:"<code>inputProps?</code>",id:"inputprops",children:[],level:4},{value:"<code>browserInstance?</code>",id:"browserinstance",children:[],level:4},{value:"<code>browserExecutable?</code>",id:"browserexecutable",children:[],level:4}],level:3}],level:2},{value:"Return value",id:"return-value",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],i={toc:l};function c(e){var a=e.components,n=(0,r.default)(e,o);return(0,d.mdx)("wrapper",(0,t.default)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Part of the ",(0,d.mdx)("inlineCode",{parentName:"em"},"@remotion/renderer")," package.")),(0,d.mdx)("p",null,"Gets the compositions defined in a Remotion project based on a webpack bundle. Spins up a browser with Puppeteer and evaluates the Remotion root."),(0,d.mdx)("div",{className:"shiki-twoslash-fragment"},(0,d.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,d.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,d.mdx)("div",{parentName:"pre",className:"code-container"},(0,d.mdx)("code",{parentName:"div"},(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"getCompositions"),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," (")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#E36209"}},"bundle"),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"string"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#E36209"}},"options"),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#E36209"}},"inputProps"),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"?:"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"object"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"|"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#E36209"}},"browserInstance"),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"?:"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#E36209"}},"puppeteer"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"."),(0,d.mdx)("span",{parentName:"div",style:{color:"#E36209"}},"Browser"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  }")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#E36209"}},"Promise"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"<"),(0,d.mdx)("span",{parentName:"div",style:{color:"#E36209"}},"TComposition"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"[]>;"))))),(0,d.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,d.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,d.mdx)("div",{parentName:"pre",className:"code-container"},(0,d.mdx)("code",{parentName:"div"},(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},"getCompositions"),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," (")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFA657"}},"bundle"),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"string"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFA657"}},"options"),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFA657"}},"inputProps"),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"?:"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"object"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"|"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFA657"}},"browserInstance"),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"?:"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFA657"}},"puppeteer"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"."),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFA657"}},"Browser"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  }")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},") "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFA657"}},"Promise"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"<"),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFA657"}},"TComposition"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"[]>;")))))),(0,d.mdx)("h2",{id:"arguments"},"Arguments"),(0,d.mdx)("h3",{id:"bundle"},(0,d.mdx)("inlineCode",{parentName:"h3"},"bundle")),(0,d.mdx)("p",null,"A string pointing to a Webpack bundle generated by ",(0,d.mdx)("inlineCode",{parentName:"p"},"@remotion/bundler"),"."),(0,d.mdx)("h3",{id:"options"},(0,d.mdx)("inlineCode",{parentName:"h3"},"options?")),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"optional")),(0,d.mdx)("p",null,"An object containing one or more of the following options:"),(0,d.mdx)("h4",{id:"inputprops"},(0,d.mdx)("inlineCode",{parentName:"h4"},"inputProps?")),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"optional")),(0,d.mdx)("p",null,"Define custom props that can be retrieved using ",(0,d.mdx)("a",{parentName:"p",href:"/docs/get-input-props"},(0,d.mdx)("inlineCode",{parentName:"a"},"getInputProps()"))," at runtime. Useful for ",(0,d.mdx)("a",{parentName:"p",href:"/docs/dynamic-metadata"},"setting a dynamic duration or dimensions")," for your video."),(0,d.mdx)("h4",{id:"browserinstance"},(0,d.mdx)("inlineCode",{parentName:"h4"},"browserInstance?")),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"optional")),(0,d.mdx)("p",null,"An already open Puppeteer ",(0,d.mdx)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=main&show=api-class-browser"},(0,d.mdx)("inlineCode",{parentName:"a"},"Browser"))," instance. Reusing a browser across multiple function calls can speed up the rendering process. You are responsible for opening and closing the browser yourself. If you don't specify this option, a new browser will be opened and closed at the end."),(0,d.mdx)("h4",{id:"browserexecutable"},(0,d.mdx)("inlineCode",{parentName:"h4"},"browserExecutable?")),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"optional, available from v2.3.1")),(0,d.mdx)("p",null,"A string defining the absolute path on disk of the browser executable that should be used. By default Remotion will try to detect it automatically and download one if none is available. If ",(0,d.mdx)("inlineCode",{parentName:"p"},"browserInstance")," is defined, it will take precedence over ",(0,d.mdx)("inlineCode",{parentName:"p"},"browserExecutable"),"."),(0,d.mdx)("h2",{id:"return-value"},"Return value"),(0,d.mdx)("p",null,"Returns a promise that resolves to an array of available compositions. Example value:"),(0,d.mdx)("div",{className:"shiki-twoslash-fragment"},(0,d.mdx)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,d.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,d.mdx)("div",{parentName:"pre",className:"code-container"},(0,d.mdx)("code",{parentName:"div"},(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"[")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) id: string"},"id"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"HelloWorld"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) width: number"},"width"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"1920"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) height: number"},"height"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"1080"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) fps: number"},"fps"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"30"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) defaultProps: {\n    title: string;\n}"},"defaultProps"),": {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) title: string"},"title"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"Hello World"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) id: string"},"id"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"Title"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) width: number"},"width"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"1080"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) height: number"},"height"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"1080"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) fps: number"},"fps"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"30"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) defaultProps: undefined"},"defaultProps"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"var undefined"},"undefined")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"];"))))),(0,d.mdx)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,d.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,d.mdx)("div",{parentName:"pre",className:"code-container"},(0,d.mdx)("code",{parentName:"div"},(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"[")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) id: string"},"id"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"HelloWorld"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) width: number"},"width"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"1920"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) height: number"},"height"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"1080"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) fps: number"},"fps"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"30"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) defaultProps: {\n    title: string;\n}"},"defaultProps"),": {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"      ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) title: string"},"title"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"Hello World"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    },")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  },")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) id: string"},"id"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"Title"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) width: number"},"width"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"1080"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) height: number"},"height"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"1080"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) fps: number"},"fps"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"30"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) defaultProps: undefined"},"defaultProps"),": "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"var undefined"},"undefined")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  },")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"];")))))),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"defaultProps")," only get returned since v2.5.6."),(0,d.mdx)("h2",{id:"see-also"},"See also"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/ssr"},"Server-Side rendering")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/bundle"},"bundle()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/render-frames"},"renderFrames()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/stitch-frames-to-video"},"stitchFramesToVideo()"))))}c.isMDXComponent=!0}}]);