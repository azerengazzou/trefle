(()=>{var i,e,t,o={8353:(i,e,t)=>{"use strict";const o=window.wp.blocks;t(7723);var a=t(6087),r=t(6942),n=t.n(r);const l=window.wp.blockEditor;var c=t(790);const s=({attributes:i})=>{const{GkitIcon:e}=window.gutenkit.components,{linkGenerator:t}=window.gutenkit.helpers,{gkitSocialmediaIcons:o,gkitSocialmediaStyleIconPosition:a,gkitSocialmediaStyle:r}=i;return(0,c.jsx)(c.Fragment,{children:o&&(0,c.jsx)("ul",{className:n()({"gkit-social-media-menu":!0,[`gkit-social-media-icon-position-${a}`]:"both"===r,[`gkit-social-media-icon-style-${r}`]:r}),children:o.map(((i,o)=>{const a={...t(i?.gkitSocialmediaLink),onClick:window?.gutenkit?i=>i.preventDefault():null},l=n()("gkit-social-media-menu-item",`gkit-social-media-menu-item-${Number(o)}`);return(0,c.jsx)("li",{className:l,children:(0,c.jsxs)("a",{...a,className:"gkit-social-media-menu-item-link","aria-label":i?.gkitSocialmediaLabel,children:["icon"!==r&&(0,c.jsx)("span",{className:"gkit-social-media-menu-item-name",children:i?.gkitSocialmediaLabel}),"text"!==r&&(0,c.jsx)(e,{icon:i?.gkitSocialmediaIcon})]})},o)}))})})},d=(0,a.lazy)((()=>t.e(3834).then(t.bind(t,3834)))),m=JSON.parse('{"UU":"gutenkit/social-icons"}'),{socialIcons:g}=window.gutenkit.editorIcon;(0,o.registerBlockType)(m.UU,{edit:function({attributes:i,setAttributes:e,advancedControl:t,item:o,isSelected:a}){const{GkitStyle:r,GkitSuspense:m}=window.gutenkit.components,{useDeviceType:g,useBlockStyles:u,useDeviceList:k}=window.gutenkit.helpers,p=k(),S=g(),h=(0,l.useBlockProps)({className:n()({"gkit-social-media":!0})});return u(i,e,"blocksCSS",((i,e)=>{const{parseCSS:t,getBoxShadowValue:o,getBoxValue:a,getBorderValue:r,getTypographyValue:n,getSliderValue:l,backgroundGenerator:c,getColor:s}=window.gutenkit.helpers,d=i?.blockClass;return t([[{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item .gkit-social-media-menu-item-link`,...r(i?.gkitSocialmediaBorder),"box-shadow":o(i?.gkitSocialmediaBoxShadow),background:c(i?.gkitSocialIconNomalBackgroundColor).background,fill:s(i?.gkitSocialIconNomalColor),color:s(i?.gkitSocialIconNomalColor)},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item:hover .gkit-social-media-menu-item-link`,"box-shadow":o(i?.gkitSocialmediaBoxShadowHover),background:c(i?.gkitSocialIconHoverBackgroundColor).background,...r(i?.gkitSocialmediaBorderHover),fill:s(i?.gkitSocialIconHoverColor),color:s(i?.gkitSocialIconHoverColor)},{selector:`.${d} .gkit-social-media-icon-style-both .gkit-social-media-menu-item .gkit-social-media-menu-item-link,\n\t\t\t\t.${d} .gkit-social-media-icon-style-text .gkit-social-media-menu-item .gkit-social-media-menu-item-link`,"text-shadow":o(i?.gkitSocialmediaTextShadow)},{selector:`.${d} .gkit-social-media-icon-style-both .gkit-social-media-menu-item:hover .gkit-social-media-menu-item-link,\n\t\t\t\t.${d} .gkit-social-media-icon-style-text .gkit-social-media-menu-item:hover .gkit-social-media-menu-item-link`,"text-shadow":o(i?.gkitSocialmediaTextShadowHover)},...(i=>{const e=i.map(((i,e)=>[{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item-${e} .gkit-social-media-menu-item-link`,color:s(i.gkitSocialmediaIconColor),fill:s(i.gkitSocialmediaIconColor),"background-color":i.gkitSocialmediaIconBgColor,"border-color":i.gkitSocialmediaBorderColor,"box-shadow":o(i.gkitSocialmediaBoxShadow)},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item-${e}:hover .gkit-social-media-menu-item-link`,color:s(i.gkitSocialmediaIconHoverColor),fill:s(i.gkitSocialmediaIconHoverColor),"background-color":i.gkitSocialmediaIconHoverBgColor,"border-color":i.gkitSocialmediaBorderHoverColor,"box-shadow":o(i.gkitSocialmediaBoxShadowHover)},{selector:`.${d} .gkit-social-media-icon-style-both .gkit-social-media-menu-item-${e} .gkit-social-media-menu-item-link,\n\t\t\t\t\t.gkit-social-media-icon-style-text .gkit-social-media-menu-item-${e} .gkit-social-media-menu-item-link`,"text-shadow":o(i.gkitSocialmediaTextShadow)},{selector:`.${d} .gkit-social-media-icon-style-both .gkit-social-media-menu-item-${e}:hover .gkit-social-media-menu-item-link,\n\t\t\t\t\t.gkit-social-media-icon-style-text .gkit-social-media-menu-item-${e}:hover .gkit-social-media-menu-item-link`,"text-shadow":o(i.gkitSocialmediaTextShadowHover)}]));let t=[];return e.forEach((i=>{t=[...t,...i]})),t})(i?.gkitSocialmediaIcons)],e=>[{selector:`.${d} .gkit-social-media-menu`,"justify-content":"row"===i[`gkitSocialmediaListDisplay${e}`]?i[`gkitSocialmediaListAlign${e}`]:"flex-start","align-items":"column"===i[`gkitSocialmediaListDisplay${e}`]?i[`gkitSocialmediaListAlign${e}`]:"center",gap:l(i[`gkitSocialmediaElementSpacing${e}`]),"flex-direction":i[`gkitSocialmediaListDisplay${e}`]},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item`,...a(i[`gkitSocialmediaListBorderRadius${e}`],"border-radius")},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item .gkit-social-media-menu-item-link`,...a(i[`gkitSocialmediaListBorderRadius${e}`],"border-radius"),width:!0===i?.useHeightAndWidth&&"icon"===i?.gkitSocialmediaStyle?l(i[`gkitSocialmediaListWidth${e}`]):void 0,height:!0===i?.useHeightAndWidth&&"icon"===i?.gkitSocialmediaStyle?l(i[`gkitSocialmediaListHeight${e}`]):void 0,gap:l(i[`gkitSocialmediaIconSpacing${e}`]),...a("icon"!==i?.gkitSocialmediaStyle&&i[`gkitSocialmediaListPadding${e}`],"padding")},{selector:`.${d} .gkit-social-media-icon-style-icon .gkit-social-media-menu-item .gkit-social-media-menu-item-link`,...a(!1===i?.useHeightAndWidth&&"icon"===i?.gkitSocialmediaStyle&&i[`gkitSocialmediaIconPadding${e}`],"padding")},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item .gkit-social-media-menu-item-link svg`,"font-size":l(i[`gkitSocialmediaListIconSize${e}`])},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item`,width:"column"===i[`gkitSocialmediaListDisplay${e}`]&&"100%"},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item:hover .gkit-social-media-menu-item-link`,...a(i[`gkitSocialmediaListBorderRadiusHover${e}`],"border-radius")},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item .gkit-social-media-menu-item-link`,...n(i.gkitSocialmediaListTypography,e)}]],e)})(i,p)),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{blocksCSS:i?.blocksCSS}),a&&(0,c.jsx)(m,{children:(0,c.jsx)(d,{attributes:i,setAttributes:e,device:S,advancedControl:t})}),(0,c.jsx)("div",{...h,children:(0,c.jsx)(s,{attributes:i,item:o})})]})},icon:{src:g},save:function({attributes:i,item:e}){const t=l.useBlockProps.save({className:"gkit-social-media"});return(0,c.jsx)("div",{...t,children:(0,c.jsx)(s,{attributes:i,item:e})})}})},790:i=>{"use strict";i.exports=window.ReactJSXRuntime},6427:i=>{"use strict";i.exports=window.wp.components},6087:i=>{"use strict";i.exports=window.wp.element},7723:i=>{"use strict";i.exports=window.wp.i18n},5573:i=>{"use strict";i.exports=window.wp.primitives},6942:(i,e)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var i="",e=0;e<arguments.length;e++){var t=arguments[e];t&&(i=n(i,r(t)))}return i}function r(i){if("string"==typeof i||"number"==typeof i)return i;if("object"!=typeof i)return"";if(Array.isArray(i))return a.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var e="";for(var t in i)o.call(i,t)&&i[t]&&(e=n(e,t));return e}function n(i,e){return e?i?i+" "+e:i+e:i}i.exports?(a.default=a,i.exports=a):void 0===(t=function(){return a}.apply(e,[]))||(i.exports=t)}()}},a={};function r(i){var e=a[i];if(void 0!==e)return e.exports;var t=a[i]={exports:{}};return o[i](t,t.exports,r),t.exports}r.m=o,i=[],r.O=(e,t,o,a)=>{if(!t){var n=1/0;for(d=0;d<i.length;d++){t=i[d][0],o=i[d][1],a=i[d][2];for(var l=!0,c=0;c<t.length;c++)(!1&a||n>=a)&&Object.keys(r.O).every((i=>r.O[i](t[c])))?t.splice(c--,1):(l=!1,a<n&&(n=a));if(l){i.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var d=i.length;d>0&&i[d-1][2]>a;d--)i[d]=i[d-1];i[d]=[t,o,a]},r.n=i=>{var e=i&&i.__esModule?()=>i.default:()=>i;return r.d(e,{a:e}),e},r.d=(i,e)=>{for(var t in e)r.o(e,t)&&!r.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},r.f={},r.e=i=>Promise.all(Object.keys(r.f).reduce(((e,t)=>(r.f[t](i,e),e)),[])),r.u=i=>i+".js",r.miniCssF=i=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"==typeof window)return window}}(),r.o=(i,e)=>Object.prototype.hasOwnProperty.call(i,e),e={},t="gutenkit-blocks-addon:",r.l=(i,o,a,n)=>{if(e[i])e[i].push(o);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var m=s[d];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==t+a){l=m;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=i),e[i]=[o];var g=(t,o)=>{l.onerror=l.onload=null,clearTimeout(u);var a=e[i];if(delete e[i],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((i=>i(o))),t)return t(o)},u=setTimeout(g.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=g.bind(null,l.onerror),l.onload=g.bind(null,l.onload),c&&document.head.appendChild(l)}},r.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{var i;r.g.importScripts&&(i=r.g.location+"");var e=r.g.document;if(!i&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(i=e.currentScript.src),!i)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!i||!/^http(s?):/.test(i));)i=t[o--].src}if(!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=i+"../../"})(),(()=>{var i={2913:0,6133:0};r.f.j=(e,t)=>{var o=r.o(i,e)?i[e]:void 0;if(0!==o)if(o)t.push(o[2]);else if(6133!=e){var a=new Promise(((t,a)=>o=i[e]=[t,a]));t.push(o[2]=a);var n=r.p+r.u(e),l=new Error;r.l(n,(t=>{if(r.o(i,e)&&(0!==(o=i[e])&&(i[e]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,o[1](l)}}),"chunk-"+e,e)}else i[e]=0},r.O.j=e=>0===i[e];var e=(e,t)=>{var o,a,n=t[0],l=t[1],c=t[2],s=0;if(n.some((e=>0!==i[e]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(c)var d=c(r)}for(e&&e(t);s<n.length;s++)a=n[s],r.o(i,a)&&i[a]&&i[a][0](),i[a]=0;return r.O(d)},t=self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var n=r.O(void 0,[6133],(()=>r(8353)));n=r.O(n)})();