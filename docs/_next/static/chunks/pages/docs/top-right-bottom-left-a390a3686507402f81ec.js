_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[150],{"6xmZ":function(a,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var e=t("wx14"),s=t("Ff2n"),p=t("q1tI"),c=t.n(p),o=t("7ljp"),l=t("YFqc"),i=t.n(l),r=t("tc9R"),u=t("pOT7"),d=t("vRWG"),m=t("I6Nb"),b=t("lbhK"),g=t.n(b),k=t("8C7G"),j=t("wH44"),O=t("cOG/"),h=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g.a,sort:O.a},meta:{title:"Top / Right / Bottom / Left",description:"Utilities for controlling the placement of positioned elements."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Top / Right / Bottom / Left scale",slug:"top-right-bottom-left-scale"},{title:"Negative values",slug:"negative-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),N=m.ContentsLayout;function v(a){var n=a.components,t=Object(s.a)(a,["components"]);return Object(o.a)(N,Object(e.a)({},h,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"{top|right|bottom|left|inset}-0")," utilities to anchor absolutely positioned elements against any of the edges of the nearest positioned parent."),Object(o.a)("p",null,"Combined with Tailwind's padding and margin utilities, you'll probably find that these are all you need to precisely control absolutely positioned elements.")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">\n    <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">\n      <div class="absolute inset-x-0 top-0 h-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">1</div>\n    </div>\n    <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">\n      <div class="absolute inset-y-0 right-0 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">2</div>\n    </div>\n    <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">\n      <div class="absolute inset-x-0 bottom-0 h-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">3</div>\n    </div>\n    <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">\n      <div class="absolute inset-y-0 left-0 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">4</div>\n    </div>\n    <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">\n      <div class="absolute inset-0 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">5</div>\n    </div>\n    <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">\n      <div class="absolute left-0 top-0 h-16 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">6</div>\n    </div>\n    <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">\n      <div class="absolute top-0 right-0 h-16 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">7</div>\n    </div>\n    <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">\n      <div class="absolute right-0 bottom-0 h-16 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">8</div>\n    </div>\n    <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">\n      <div class="absolute bottom-0 left-0 h-16 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">9</div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token comment">&lt;!-- Span top edge --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-32 w-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute <span class="code-highlight bg-code-highlight">inset-x-0 top-0</span> h-16 w-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Span right edge --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-32 w-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute <span class="code-highlight bg-code-highlight">inset-y-0 right-0</span> w-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Span bottom edge --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-32 w-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute <span class="code-highlight bg-code-highlight">inset-x-0 bottom-0</span> h-16 w-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Span left edge --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-32 w-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute <span class="code-highlight bg-code-highlight">inset-y-0 left-0</span> w-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Fill entire parent --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-32 w-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute <span class="code-highlight bg-code-highlight">inset-0</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Pin to top left corner --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-32 w-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute <span class="code-highlight bg-code-highlight">left-0 top-0</span> h-16 w-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Pin to top right corner --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-32 w-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute <span class="code-highlight bg-code-highlight">top-0 right-0</span> h-16 w-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Pin to bottom right corner --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-32 w-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute <span class="code-highlight bg-code-highlight">bottom-0 right-0</span> h-16 w-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Pin to bottom left corner --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-32 w-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute <span class="code-highlight bg-code-highlight">bottom-0 left-0</span> h-16 w-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To position an element only at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing positioning utility. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:inset-y-0")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"inset-y-0")," utility at medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(e.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"relative h-32 ...",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"absolute inset-0 ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:inset-y-0")," ...",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"top-right-bottom-left-scale",toc:!0},"Top / Right / Bottom / Left scale"),Object(o.a)("p",null,"By default Tailwind only provides ",Object(o.a)("inlineCode",{parentName:"p"},"0")," and ",Object(o.a)("inlineCode",{parentName:"p"},"auto")," top/right/bottom/left/inset utilities. You can change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.inset")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(e.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     inset",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token number"}),"0"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       auto",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token string"}),"'auto'"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token string"}),"'1/2'"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token string"}),"'50%'"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(r.a,{level:3,id:"negative-values",toc:!0},"Negative values"),Object(o.a)("p",null,"If you'd like to add any negative top/right/bottom/left classes that take the same form as Tailwind's ",Object(o.a)(i.a,{href:"/docs/margin#negative-margins",passHref:!0},Object(o.a)("a",null,"negative margin"))," classes, prefix the keys in your config file with a dash:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(e.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       inset",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token string"}),"'-16'"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token string"}),"'-4rem'"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Tailwind is smart enough to generate classes like ",Object(o.a)("inlineCode",{parentName:"p"},"-top-16")," when it sees the leading dash, not ",Object(o.a)("inlineCode",{parentName:"p"},"top--16")," like you might expect."),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(k.a,{plugin:"inset",name:"top, right, bottom, left, and inset",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(j.a,{plugin:"inset",name:"top, right, bottom, left, and inset",mdxType:"Disabling"}))}v.isMDXComponent=!0,v.layoutProps=h},"8C7G":function(a,n,t){"use strict";t.d(n,"a",(function(){return r}));var e=t("rePB"),s=t("q1tI"),p=t.n(s),c=t("98BF"),o=t("Zb5r"),l=t("AOjV"),i=p.a.createElement;function r(a){var n=a.plugin,t=a.name,s=c.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(a,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),r="By default, ".concat(s.length?"only ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:r}}),i("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",i("code",null,n)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(p)," variants:"),i(l.a,{path:"variants.extend",before:"...",add:Object(e.a)({},n,p)}))}},C4b9:function(a,n){a.exports=function(a,n){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!==typeof n)throw new Error("expected a function for second argument");for(var t={},e=0;e<a.length;e++){var s=a[e],p=n(s),c=t[p];Array.isArray(c)?t[p].push(s):t[p]=[s]}return t}},"VxD/":function(a,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/top-right-bottom-left",function(){return t("6xmZ")}])},"cOG/":function(a,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return o}));var e=t("KQm4"),s=t("C4b9"),p=t.n(s);function c(a){return Object(e.a)(a).sort((function(a,n){var t=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);t=null===t?NaN:parseFloat(t[1]);var e=n.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return e=null===e?NaN:parseFloat(e[1]),isNaN(t)&&isNaN(e)?0:isNaN(t)?1:isNaN(e)?-1:t-e}))}function o(a){return Object.values(p()(a,(function(a){return a.match(/^(.*?)[^-]+$/)[1]}))).flatMap(c)}},lbhK:function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,theme:n,variants:t}){const p=[(a,n)=>({[(0,s.default)("inset",n)]:{top:""+a,right:""+a,bottom:""+a,left:""+a}}),(a,n)=>({[(0,s.default)("inset-y",n)]:{top:""+a,bottom:""+a},[(0,s.default)("inset-x",n)]:{right:""+a,left:""+a}}),(a,n)=>({[(0,s.default)("top",n)]:{top:""+a},[(0,s.default)("right",n)]:{right:""+a},[(0,s.default)("bottom",n)]:{bottom:""+a},[(0,s.default)("left",n)]:{left:""+a}})];a(e.default.flatMap(p,a=>e.default.flatMap(n("inset"),a)),t("inset"))}};var e=p(t("LvDl")),s=p(t("dzuX"));function p(a){return a&&a.__esModule?a:{default:a}}},pOT7:function(a,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return k}));var e=t("wx14"),s=t("q1tI"),p=t.n(s),c=t("iuhU"),o=t("ZMKu"),l=p.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(a){var n=Object(s.useRef)(),t=Object(s.useState)(!1),p=t[0],c=t[1],o=Object(s.useState)({}),i=o[0],r=o[1];return Object(s.useEffect)((function(){if(p){var a=new window.ResizeObserver(t);return t(),a.observe(n.current.contentDocument.body),function(){a.disconnect()}}function t(){r({height:n.current.contentDocument.body.scrollHeight})}}),[p]),l("iframe",Object(e.a)({},a,{ref:n,onLoad:function(){return c(!0)},style:i}))}function b(a){var n=a.color,t=a.snippet;return l("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",i[n],{"bg-gray-800":!i[n]})},l("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[n]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g(a){var n=a.preview,t=a.src,e=a.snippet,s=a.previewClassName,p=a.color,o=void 0===p?"gray":p;return l("div",{className:"relative overflow-hidden mb-8"},n?l("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",r[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}):l(m,{src:t,className:Object(c.a)("w-full rounded-t-xl",r[o])}),l(b,{color:o,snippet:e}))}function k(a){var n=a.preview,t=a.src,e=a.previewClassName,p=a.snippet,i=a.color,g=void 0===i?"gray":i,k=a.min,j=void 0!==k&&k,O=Object(s.useRef)(),h=Object(o.h)(0),N=Object(s.useRef)(),v=Object(s.useState)(!1),f=v[0],x=v[1];return Object(s.useEffect)((function(){var a=new window.ResizeObserver((function(){h.set(0)}));return a.observe(O.current),function(){a.disconnect()}}),[]),l("div",{className:"relative mb-8"},l("div",{ref:O,className:"relative rounded-t-xl ".concat(u[g])},l("div",{className:j?"md:w-88":void 0},l(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(h,(function(a){return-a}))}},n?l("div",{className:Object(c.a)("rounded-t-xl",e,r[g],{"p-10":!e}),dangerouslySetInnerHTML:{__html:n}}):l(m,{src:t,className:Object(c.a)("w-full rounded-t-xl",r[g],{"pointer-events-none":f})}))),l("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(o.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(j?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),x(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[g]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(b,{color:g,snippet:p}))}}},[["VxD/",0,2,6,10,1,3,4,5,7,8]]]);