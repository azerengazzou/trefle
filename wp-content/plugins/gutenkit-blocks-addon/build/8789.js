"use strict";(self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[]).push([[8789],{8789:(e,n,o)=>{o.r(n),o.d(n,{default:()=>h});var t=o(7723),a=o(6087),l=o(6427),i=o(5573),d=o(790);const s=(0,d.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(i.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})}),r=(0,d.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(i.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})}),c=(0,d.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(i.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})}),h=(0,a.memo)((({attributes:e,setAttributes:n,device:o,advancedControl:a})=>{const{GkitBoxShadow:i,GkitColor:h,GkitIconPicker:k,GkitPanelBody:b,GkitResponsive:g,GkitSwitcher:u,GkitTabs:x,GkitTypography:v,GkitBackgrounGroup:_,GkitChoose:m,GkitAdvancedUrl:j,GkitRangeUnit:p,GkitText:C,GkitBoxControl:w,GkitBorderControl:B,GkitSelect:G}=window.gutenkit.components,{gkitResponsiveValue:S,useFontFamilyinBlock:y,responsiveHelper:H,boxControlUnit:V}=window.gutenkit.helpers;return y([e?.typography]),(0,d.jsx)(x,{type:"top-level",tabs:[{name:"content",title:(0,t.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,t.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,t.__)("Advanced","gutenkit-blocks-addon")}],children:y=>"content"===y.name?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(b,{title:(0,t.__)("Content","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,d.jsx)(C,{value:e?.btnText,label:(0,t.__)("Label","gutenkit-blocks-addon"),onChange:e=>n({btnText:e}),labelBlock:"block"}),(0,d.jsx)(j,{value:e?.url,onChange:e=>n({url:e})}),(0,d.jsx)(l.__experimentalDivider,{}),(0,d.jsx)(u,{label:(0,t.__)("Add Icon","gutenkit-blocks-addon"),value:e?.iconsSwitch,onChange:e=>n({iconsSwitch:e})}),e?.iconsSwitch&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(k,{label:(0,t.__)("Icon","gutenkit-blocks-addon"),onChange:e=>n({icons:e}),value:e?.icons}),(0,d.jsx)(G,{label:(0,t.__)("Icon Position","gutenkit-blocks-addon"),options:[{label:(0,t.__)("After","gutenkit-blocks-addon"),value:"right"},{label:(0,t.__)("Before","gutenkit-blocks-addon"),value:"left"}],value:e?.iconAlign,onChange:e=>n({iconAlign:e})})]}),(0,d.jsx)(g,{children:(0,d.jsx)(m,{label:(0,t.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,t.__)("Left","gutenkit-blocks-addon"),value:"left",icon:s},{label:(0,t.__)("Center","gutenkit-blocks-addon"),value:"center",icon:r},{label:(0,t.__)("Right","gutenkit-blocks-addon"),value:"right",icon:c}],value:S(e,"align",o),onChange:e=>H("align",e,o,n)})}),(0,d.jsx)(C,{value:e?.btnClass,label:(0,t.__)("Class","gutenkit-blocks-addon"),onChange:e=>n({btnClass:e}),labelBlock:"block"}),(0,d.jsx)(C,{value:e?.btnID,label:(0,t.__)("ID","gutenkit-blocks-addon"),onChange:e=>n({btnID:e}),labelBlock:"block"})]})}):"style"===y.name?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(b,{title:(0,t.__)("Button","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,d.jsx)(g,{children:(0,d.jsx)(p,{label:(0,t.__)("Width","gutenkit-blocks-addon"),value:S(e,"width",o),onChange:e=>H("width",e,o,n),units:{px:{min:0,max:500,step:1},"%":{min:0,max:100,step:1}}})}),(0,d.jsx)(g,{children:(0,d.jsx)(w,{label:(0,t.__)("Padding","gutenkit-blocks-addon"),values:S(e,"textPadding",o),onChange:e=>H("textPadding",e,o,n)})}),(0,d.jsx)(v,{label:(0,t.__)("Typography","gutenkit-blocks-addon"),value:e?.typography,onChange:e=>n({typography:e})}),(0,d.jsx)(i,{label:(0,t.__)("Text Shadow","gutenkit-blocks-addon"),value:e?.shadow,onChange:e=>n({shadow:e}),exclude:{spread:!0,position:!0}}),(0,d.jsx)(x,{type:"normal",tabs:[{name:"normal-tab",title:(0,t.__)("Normal","gutenkit-blocks-addon")},{name:"hover-tab",title:(0,t.__)("Hover","gutenkit-blocks-addon")}],children:o=>"normal-tab"===o.name?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{label:(0,t.__)("Color","gutenkit-blocks-addon"),onChange:e=>n({textColor:e}),value:e?.textColor}),(0,d.jsx)(_,{onChange:e=>n({bgColor:e}),value:e?.bgColor,exclude:{video:!0,image:!0}})]}):"hover-tab"===o.name?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{label:(0,t.__)("Color","gutenkit-blocks-addon"),onChange:e=>n({hoverColor:e}),value:e?.hoverColor}),(0,d.jsx)(_,{onChange:e=>n({bgHoverColor:e}),value:e?.bgHoverColor,exclude:{video:!0,image:!0}}),(0,d.jsx)(p,{label:(0,t.__)("Transform Y","gutenkit-blocks-addon"),value:e?.backgroundHoverTransformY,onChange:e=>n({backgroundHoverTransformY:e}),units:{px:{min:-50,max:100,step:1}}})]}):void 0})]}),(0,d.jsx)(b,{title:(0,t.__)("Border","gutenkit-blocks-addon"),children:(0,d.jsx)(x,{type:"normal",tabs:[{name:"normal-tab",title:(0,t.__)("Normal","gutenkit-blocks-addon")},{name:"hover-tab",title:(0,t.__)("Hover","gutenkit-blocks-addon")}],children:a=>"normal-tab"===a.name?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{children:(0,d.jsx)(B,{label:(0,t.__)("Border","gutenkit-blocks-addon"),value:S(e,"border",o),onChange:e=>H("border",e,o,n)})}),(0,d.jsx)(g,{children:(0,d.jsx)(w,{label:(0,t.__)("Border Radius","gutenkit-blocks-addon"),units:V,values:S(e,"borderRadius",o),onChange:e=>H("borderRadius",e,o,n)})})]}):"hover-tab"===a.name?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{children:(0,d.jsx)(B,{label:(0,t.__)("Border","gutenkit-blocks-addon"),value:S(e,"hoverBorder",o),onChange:e=>H("hoverBorder",e,o,n)})}),(0,d.jsx)(g,{children:(0,d.jsx)(w,{label:(0,t.__)("Border Radius","gutenkit-blocks-addon"),units:V,values:S(e,"hoverBorderRadius",o),onChange:e=>H("hoverBorderRadius",e,o,n)})})]}):void 0})}),(0,d.jsx)(b,{title:(0,t.__)("Shadow","gutenkit-blocks-addon"),children:(0,d.jsx)(x,{type:"normal",tabs:[{name:"shadow-normal-tab",title:(0,t.__)("Normal","gutenkit-blocks-addon")},{name:"shadow-hover-tab",title:(0,t.__)("Hover","gutenkit-blocks-addon")}],children:o=>"shadow-normal-tab"===o.name?(0,d.jsx)(i,{value:e?.boxShadowGroup,onChange:e=>n({boxShadowGroup:e})}):"shadow-hover-tab"===o.name?(0,d.jsx)(i,{value:e?.boxShadowGroupHover,onChange:e=>n({boxShadowGroupHover:e})}):void 0})}),e?.iconsSwitch&&(0,d.jsxs)(b,{title:(0,t.__)("Icon","gutenkit-blocks-addon"),children:[(0,d.jsx)(g,{children:(0,d.jsx)(p,{label:(0,t.__)("Font Size","gutenkit-blocks-addon"),value:S(e,"iconFontSize",o),onChange:e=>H("iconFontSize",e,o,n),units:{px:{min:0,max:100,step:1},em:{min:0,max:10,step:.1},rem:{min:0,max:10,step:.1}}})}),(0,d.jsx)(g,{children:(0,d.jsx)(p,{label:(0,t.__)("Space Between","gutenkit-blocks-addon"),value:S(e,"normalIconPadding",o),onChange:e=>H("normalIconPadding",e,o,n),units:{px:{min:0,max:500,step:1}}})}),(0,d.jsx)(g,{children:(0,d.jsx)(p,{label:(0,t.__)("Move icon Vertically","gutenkit-blocks-addon"),value:S(e,"normalIconVerticalAlign",o),onChange:e=>H("normalIconVerticalAlign",e,o,n),units:{px:{min:-20,max:20,step:1}}})})]})]}):"advanced"===y.name?a:void 0})}))}}]);