"use strict";(self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[]).push([[2311],{2311:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var l=o(7723),n=o(6087),a=o(6427),i=o(5573),s=o(790);const d=(0,s.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(i.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})}),r=(0,s.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(i.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})}),u=(0,s.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(i.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})}),g=(0,n.memo)((({attributes:e,setAttributes:t,device:o,advancedControl:n})=>{const{GkitTabs:i,GkitPanelBody:g,GkitSwitcher:k,GkitChoose:c,GkitSlider:b,GkitRangeUnit:h,GkitText:_,GkitBoxShadow:x,GkitColor:p,GkitTypography:v,GkitResponsive:j,GkitBackgrounGroup:C,GkitControlRow:T,GkitAdvancedUrl:m,GkitBoxControl:B,GkitBorderControl:w,GkitMedia:S,GkitSelect:f}=window.gutenkit.components,{gkitResponsiveValue:y,useFontFamilyinBlock:H,responsiveHelper:M}=window.gutenkit.helpers;return H([e?.titleTypography,e?.focusedTitleTypography,e?.subtitleTypography,e?.descriptionTypography,e?.shadowTextTypography]),(0,s.jsx)(i,{type:"top-level",tabs:[{name:"content",title:(0,l.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,l.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,l.__)("Advanced","gutenkit-blocks-addon")}],children:i=>{switch(i.name){case"content":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(g,{title:(0,l.__)("Title","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,s.jsx)(f,{label:(0,l.__)("HTML Tag","gutenkit-blocks-addon"),value:e?.htmlTag,options:[{label:(0,l.__)("H1","gutenkit-blocks-addon"),value:"h1"},{label:(0,l.__)("H2","gutenkit-blocks-addon"),value:"h2"},{label:(0,l.__)("H3","gutenkit-blocks-addon"),value:"h3"},{label:(0,l.__)("H4","gutenkit-blocks-addon"),value:"h4"},{label:(0,l.__)("H5","gutenkit-blocks-addon"),value:"h5"},{label:(0,l.__)("H6","gutenkit-blocks-addon"),value:"h6"},{label:(0,l.__)("div","gutenkit-blocks-addon"),value:"div"},{label:(0,l.__)("span","gutenkit-blocks-addon"),value:"span"},{label:(0,l.__)("p","gutenkit-blocks-addon"),value:"p"}],onChange:e=>t({htmlTag:e}),__nextHasNoMarginBottom:!0}),(0,s.jsx)(k,{label:(0,l.__)("Add Url","gutenkit-blocks-addon"),value:e?.linkSwitch,onChange:e=>t({linkSwitch:e})}),e?.linkSwitch&&(0,s.jsx)(m,{value:e?.link,onChange:e=>t({link:e})}),(0,s.jsx)(k,{label:(0,l.__)("Show Border","gutenkit-blocks-addon"),value:e?.showBorder,onChange:e=>t({showBorder:e})}),e?.showBorder&&(0,s.jsx)(c,{label:(0,l.__)("Border Position","gutenkit-blocks-addon"),options:[{label:(0,l.__)("Left","gutenkit-blocks-addon"),value:"start"},{label:(0,l.__)("Right","gutenkit-blocks-addon"),value:"end"}],onChange:e=>t({borderPosition:e}),value:e?.borderPosition})]}),(0,s.jsxs)(g,{title:(0,l.__)("Sub Title","gutenkit-blocks-addon"),children:[(0,s.jsx)(k,{label:(0,l.__)("Show Subtitle","gutenkit-blocks-addon"),value:e?.showSubtitle,onChange:e=>t({showSubtitle:e})}),e?.showSubtitle&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k,{label:(0,l.__)("Border Sub Title","gutenkit-blocks-addon"),value:e?.borderSubtitle,onChange:e=>t({borderSubtitle:e})}),!e?.borderSubtitle&&(0,s.jsx)(k,{label:(0,l.__)("Show Outline","gutenkit-blocks-addon"),value:e?.showOutline,onChange:e=>t({showOutline:e})}),(0,s.jsx)(_,{label:(0,l.__)("Heading Sub Title","gutenkit-blocks-addon"),labelBlock:"block",value:e?.subtitleContent,onChange:e=>t({subtitleContent:e})}),(0,s.jsx)(c,{label:(0,l.__)("subtitlePosition","gutenkit-blocks-addon"),options:[{label:(0,l.__)("After title","gutenkit-blocks-addon"),value:"after-title"},{label:(0,l.__)("Before title","gutenkit-blocks-addon"),value:"before-title"}],onChange:e=>t({subtitlePosition:e}),value:e?.subtitlePosition}),(0,s.jsx)(f,{label:(0,l.__)("Subtitle HTML Tag","gutenkit-blocks-addon"),value:e?.subtitleHtmlTag,options:[{label:(0,l.__)("H1","gutenkit-blocks-addon"),value:"h1"},{label:(0,l.__)("H2","gutenkit-blocks-addon"),value:"h2"},{label:(0,l.__)("H3","gutenkit-blocks-addon"),value:"h3"},{label:(0,l.__)("H4","gutenkit-blocks-addon"),value:"h4"},{label:(0,l.__)("H5","gutenkit-blocks-addon"),value:"h5"},{label:(0,l.__)("H6","gutenkit-blocks-addon"),value:"h6"},{label:(0,l.__)("div","gutenkit-blocks-addon"),value:"div"},{label:(0,l.__)("span","gutenkit-blocks-addon"),value:"span"},{label:(0,l.__)("p","gutenkit-blocks-addon"),value:"p"}],onChange:e=>t({subtitleHtmlTag:e}),__nextHasNoMarginBottom:!0})]})]}),(0,s.jsxs)(g,{title:(0,l.__)("Title Description","gutenkit-blocks-addon"),children:[(0,s.jsx)(k,{label:(0,l.__)("Show Description","gutenkit-blocks-addon"),value:e?.showDescription,onChange:e=>t({showDescription:e})}),e?.showDescription&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{label:(0,l.__)("Heading Description","gutenkit-blocks-addon"),value:e?.descriptionContent,type:"textarea",labelBlock:"block",onChange:e=>t({descriptionContent:e})}),(0,s.jsx)(j,{children:(0,s.jsx)(h,{label:(0,l.__)("Maximum Width","gutenkit-blocks-addon"),value:y(e,"descriptionMaxWidth",o),onChange:e=>M("descriptionMaxWidth",e,o,t),units:{px:{min:0,max:1200,step:1},"%":{min:0,max:100,step:1},em:{min:0,max:100,step:1}}})})]})]}),(0,s.jsxs)(g,{title:(0,l.__)("Shadow Text","gutenkit-blocks-addon"),children:[(0,s.jsx)(k,{label:(0,l.__)("Show Shadow Text","gutenkit-blocks-addon"),value:e?.showShadowText,onChange:e=>t({showShadowText:e})}),e?.showShadowText&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(_,{value:e?.shadowTextContent,label:(0,l.__)("Content","gutenkit-blocks-addon"),onChange:e=>t({shadowTextContent:e}),labelBlock:"block"})})]}),(0,s.jsxs)(g,{title:(0,l.__)("Separator","gutenkit-blocks-addon"),children:[(0,s.jsx)(k,{label:(0,l.__)("Show Separator","gutenkit-blocks-addon"),value:e?.showSeparator,onChange:e=>t({showSeparator:e})}),e?.showSeparator&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{label:(0,l.__)("Separator Type","gutenkit-blocks-addon"),value:e?.separatorStyle,options:[{label:(0,l.__)("Dotted","gutenkit-blocks-addon"),value:"dotted"},{label:(0,l.__)("Solid","gutenkit-blocks-addon"),value:"solid"},{label:(0,l.__)("Solid With Star","gutenkit-blocks-addon"),value:"solid-star"},{label:(0,l.__)("Solid With Bullet","gutenkit-blocks-addon"),value:"solid-bullet"},{label:(0,l.__)("Custom","gutenkit-blocks-addon"),value:"custom"}],onChange:e=>t({separatorStyle:e}),__nextHasNoMarginBottom:!0}),(0,s.jsx)(f,{label:(0,l.__)("Separator Position","gutenkit-blocks-addon"),value:e?.separatorPosition,options:[{label:(0,l.__)("Top","gutenkit-blocks-addon"),value:"top"},{label:(0,l.__)("Before Title","gutenkit-blocks-addon"),value:"before-title"},{label:(0,l.__)("After Title","gutenkit-blocks-addon"),value:"after-title"},{label:(0,l.__)("Bottom","gutenkit-blocks-addon"),value:"bottom"}],onChange:e=>t({separatorPosition:e}),__nextHasNoMarginBottom:!0}),"custom"===e?.separatorStyle&&(0,s.jsx)(S,{label:(0,l.__)("Choose Image","gutenkit-blocks-addon"),labelBlock:"block",value:e?.separatorImage,onChange:e=>t({separatorImage:e}),mediaTypes:["image"],imageSize:!0})]})]})]});case"style":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{title:(0,l.__)("General","gutenkit-blocks-addon"),initialOpen:!0,children:(0,s.jsx)(j,{children:(0,s.jsx)(c,{label:(0,l.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,l.__)("Left","gutenkit-blocks-addon"),value:"left",icon:d},{label:(0,l.__)("Center","gutenkit-blocks-addon"),value:"center",icon:r},{label:(0,l.__)("Right","gutenkit-blocks-addon"),value:"right",icon:u}],value:y(e,"generalTextAlignment",o),onChange:e=>M("generalTextAlignment",e,o,t)})})}),(0,s.jsxs)(g,{title:(0,l.__)("Title","gutenkit-blocks-addon"),children:[(0,s.jsx)(p,{label:(0,l.__)("Color","gutenkit-blocks-addon"),value:e?.titleColor,onChange:e=>t({titleColor:e})}),(0,s.jsx)(p,{label:(0,l.__)("Hover Color","gutenkit-blocks-addon"),value:e?.titleHoverColor,onChange:e=>t({titleHoverColor:e})}),(0,s.jsx)(x,{label:(0,l.__)("Text Shadow","gutenkit-blocks-addon"),value:e?.titleTextShadow,onChange:e=>t({titleTextShadow:e}),exclude:{position:!0,spread:!0}}),(0,s.jsx)(B,{label:(0,l.__)("Margin","gutenkit-blocks-addon"),values:y(e,"titleMargin",o),onChange:e=>M("titleMargin",e,o,t)}),(0,s.jsx)(v,{label:(0,l.__)("Typography","gutenkit-blocks-addon"),value:e?.titleTypography,onChange:e=>t({titleTypography:e})}),e?.showBorder&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{label:(0,l.__)("Border Width","gutenkit-blocks-addon"),value:e?.titleBorderWidth,onChange:e=>t({titleBorderWidth:e}),sizeUnits:["px","em"]}),(0,s.jsx)(b,{label:(0,l.__)("Border Height","gutenkit-blocks-addon"),value:e?.titleBorderHeight,onChange:e=>t({titleBorderHeight:e}),sizeUnits:["px","%"]}),(0,s.jsx)(h,{label:(0,l.__)("Vertical Position","gutenkit-blocks-addon"),value:e?.titleBorderVerticalPosition,onChange:e=>t({titleBorderVerticalPosition:e}),units:{px:{min:-100,max:100,step:1},"%":{min:-100,max:100,step:1}}}),"start"===e?.borderPosition&&(0,s.jsx)(h,{label:(0,l.__)("Right Gap","gutenkit-blocks-addon"),value:e?.titleBorderRightGap,onChange:e=>t({titleBorderRightGap:e}),units:{px:{min:0,max:100,step:1},"%":{min:0,max:100,step:1}}}),"end"===e?.borderPosition&&(0,s.jsx)(h,{label:(0,l.__)("Left Gap","gutenkit-blocks-addon"),value:e?.titleBorderLeftGap,onChange:e=>t({titleBorderLeftGap:e}),units:{px:{min:0,max:100,step:1},"%":{min:0,max:100,step:1}}}),(0,s.jsx)(T,{label:(0,l.__)("Border Color","gutenkit-blocks-addon"),labelBlock:"block",type:"gradient",children:(0,s.jsx)(a.GradientPicker,{__nextHasNoMargin:!0,value:e?.titleBorderBackground,onChange:e=>t({titleBorderBackground:e}),gradients:[]})})]})]}),(0,s.jsxs)(g,{title:(0,l.__)("Focused Title","gutenkit-blocks-addon"),children:[(0,s.jsx)(p,{label:(0,l.__)("Color","gutenkit-blocks-addon"),value:e?.focusedTitleColor,onChange:e=>t({focusedTitleColor:e})}),(0,s.jsx)(p,{label:(0,l.__)("Hover Color","gutenkit-blocks-addon"),value:e?.focusedTitleHoverColor,onChange:e=>t({focusedTitleHoverColor:e})}),(0,s.jsx)(v,{label:(0,l.__)("Typography","gutenkit-blocks-addon"),value:e?.focusedTitleTypography,onChange:e=>t({focusedTitleTypography:e})}),(0,s.jsx)(p,{label:(0,l.__)("Text Decoration Color","gutenkit-blocks-addon"),value:e?.focusedTitleTextDecorationColor,onChange:e=>t({focusedTitleTextDecorationColor:e})}),(0,s.jsx)(x,{label:(0,l.__)("Text Shadow","gutenkit-blocks-addon"),value:e?.focusedTitleTextShadow,onChange:e=>t({focusedTitleTextShadow:e}),exclude:{position:!0,spread:!0}}),(0,s.jsx)(j,{children:(0,s.jsx)(B,{label:(0,l.__)("Padding","gutenkit-blocks-addon"),values:y(e,"focusedTitlePadding",o),onChange:e=>M("focusedTitlePadding",e,o,t)})}),!e?.focusedTitleUseTextFill&&(0,s.jsx)(k,{label:(0,l.__)("Use background on text","gutenkit-blocks-addon"),value:e?.focusedTitleUseBackground,onChange:e=>t({focusedTitleUseBackground:e})}),e?.focusedTitleUseBackground&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C,{label:(0,l.__)("Background","gutenkit-blocks-addon"),value:e?.focusedTitleBackgroundColor,onChange:e=>t({focusedTitleBackgroundColor:e}),exclude:{video:!0}}),(0,s.jsx)(B,{label:(0,l.__)("Border Radius","gutenkit-blocks-addon"),values:e?.focusedTitleBorderRadius,onChange:e=>t({focusedTitleBorderRadius:e})})]}),!e?.focusedTitleUseBackground&&(0,s.jsx)(k,{label:(0,l.__)("Use Text Fill","gutenkit-blocks-addon"),value:e?.focusedTitleUseTextFill,onChange:e=>t({focusedTitleUseTextFill:e})}),e?.focusedTitleUseTextFill&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(C,{label:(0,l.__)("Background","gutenkit-blocks-addon"),value:e?.focusedTitleTextFillBackground,onChange:e=>t({focusedTitleTextFillBackground:e}),exclude:{video:!0,classic:!0}})}),(0,s.jsx)(k,{label:(0,l.__)("Use Stroke","gutenkit-blocks-addon"),value:e?.focusedTitleUseStroke,onChange:e=>t({focusedTitleUseStroke:e})}),e?.focusedTitleUseStroke&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{label:(0,l.__)("Stroke Width","gutenkit-blocks-addon"),value:e?.focusedTitleStrokeWidth,onChange:e=>t({focusedTitleStrokeWidth:e}),sizeUnits:["px"]}),(0,s.jsx)(p,{label:(0,l.__)("Stroke Color","gutenkit-blocks-addon"),value:e?.focusedTitleStrokeColor,onChange:e=>t({focusedTitleStrokeColor:e})})]})]}),e?.showSubtitle&&(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(g,{title:(0,l.__)("Subtitle","gutenkit-blocks-addon"),children:[(0,s.jsx)(p,{label:(0,l.__)("Color","gutenkit-blocks-addon"),value:e?.subtitleColor,onChange:e=>t({subtitleColor:e})}),(0,s.jsx)(v,{label:(0,l.__)("Typography","gutenkit-blocks-addon"),value:e?.subtitleTypography,onChange:e=>t({subtitleTypography:e})}),(0,s.jsx)(j,{children:(0,s.jsx)(B,{label:(0,l.__)("Margin","gutenkit-blocks-addon"),values:y(e,"subtitleMargin",o),onChange:e=>M("subtitleMargin",e,o,t)})}),e?.showOutline&&(0,s.jsx)(j,{children:(0,s.jsx)(B,{label:(0,l.__)("Padding","gutenkit-blocks-addon"),values:y(e,"subtitlePadding",o),onChange:e=>M("subtitlePadding",e,o,t)})}),(0,s.jsx)(k,{label:(0,l.__)("Use Text Fill","gutenkit-blocks-addon"),value:e?.subtitleUseTextFill,onChange:e=>t({subtitleUseTextFill:e})}),e?.subtitleUseTextFill&&(0,s.jsx)(C,{label:(0,l.__)("Background","gutenkit-blocks-addon"),value:e?.subtitleTextFillBackground,onChange:e=>t({subtitleTextFillBackground:e}),exclude:{video:!0,classic:!0}}),e?.borderSubtitle&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.__experimentalDivider,{}),(0,s.jsx)(a.__experimentalHeading,{children:(0,l.__)("Subtitle Border Left","gutenkit-blocks-addon")}),(0,s.jsx)(C,{label:(0,l.__)("Background","gutenkit-blocks-addon"),value:e?.subtitleBorderLeftBackground,onChange:e=>t({subtitleBorderLeftBackground:e}),exclude:{video:!0,image:!0}}),(0,s.jsx)(j,{children:(0,s.jsx)(h,{label:(0,l.__)("Width","gutenkit-blocks-addon"),value:y(e,"subtitleBorderLeftWidth",o),onChange:e=>M("subtitleBorderLeftWidth",e,o,t),units:{px:{min:0,max:1e3,step:1},"%":{min:0,max:100,step:1}}})}),(0,s.jsx)(j,{children:(0,s.jsx)(B,{label:(0,l.__)("Margin","gutenkit-blocks-addon"),values:y(e,"subtitleBorderLeftMargin",o),onChange:e=>M("subtitleBorderLeftMargin",e,o,t)})}),(0,s.jsx)(a.__experimentalDivider,{}),(0,s.jsx)(a.__experimentalHeading,{children:(0,l.__)("Subtitle Border Right","gutenkit-blocks-addon")}),(0,s.jsx)(C,{label:(0,l.__)("Background","gutenkit-blocks-addon"),value:e?.subtitleBorderRightBackground,onChange:e=>t({subtitleBorderRightBackground:e}),exclude:{video:!0,image:!0}}),(0,s.jsx)(j,{children:(0,s.jsx)(h,{label:(0,l.__)("Width","gutenkit-blocks-addon"),value:y(e,"subtitleBorderRightWidth",o),onChange:e=>M("subtitleBorderRightWidth",e,o,t),units:{px:{min:0,max:1e3,step:1},"%":{min:0,max:100,step:1}}})}),(0,s.jsx)(j,{children:(0,s.jsx)(B,{label:(0,l.__)("Margin","gutenkit-blocks-addon"),values:y(e,"subtitleBorderRightMargin",o),onChange:e=>M("subtitleBorderRightMargin",e,o,t)})}),(0,s.jsx)(a.__experimentalDivider,{}),(0,s.jsx)(j,{children:(0,s.jsx)(h,{label:(0,l.__)("Height","gutenkit-blocks-addon"),value:y(e,"subtitleBorderRightHeight",o),onChange:e=>M("subtitleBorderRightHeight",e,o,t),units:{px:{min:0,max:1e3,step:1},"%":{min:0,max:100,step:1}}})}),(0,s.jsx)(j,{children:(0,s.jsx)(h,{label:(0,l.__)("Vertical Position","gutenkit-blocks-addon"),value:y(e,"subtitleBorderRightVerticalPosition",o),onChange:e=>M("subtitleBorderRightVerticalPosition",e,o,t),units:{px:{min:-20,max:20,step:1},"%":{min:0,max:100,step:1}}})})]}),e?.showOutline&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.__experimentalDivider,{}),(0,s.jsx)(w,{isBox:!1,label:(0,l.__)("Outline","gutenkit-blocks-addon"),onChange:e=>t({subtitleOutlineBorder:e}),value:e?.subtitleOutlineBorder,withSlider:!0,isCompact:!0}),(0,s.jsx)(j,{children:(0,s.jsx)(B,{label:(0,l.__)("Outline Radius","gutenkit-blocks-addon"),values:y(e,"subtitleOutlineBorderRadius",o),onChange:e=>M("subtitleOutlineBorderRadius",e,o,t)})})]})]})}),e?.showDescription&&(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(g,{title:(0,l.__)("Title Description","gutenkit-blocks-addon"),children:[(0,s.jsx)(p,{label:(0,l.__)("Color","gutenkit-blocks-addon"),value:e?.descriptionColor,onChange:e=>t({descriptionColor:e})}),(0,s.jsx)(v,{label:(0,l.__)("Typography","gutenkit-blocks-addon"),value:e?.descriptionTypography,onChange:e=>t({descriptionTypography:e})}),(0,s.jsx)(j,{children:(0,s.jsx)(B,{label:(0,l.__)("Margin","gutenkit-blocks-addon"),values:y(e,"descriptionMargin",o),onChange:e=>M("descriptionMargin",e,o,t)})})]})}),e?.showSeparator&&(0,s.jsxs)(g,{title:(0,l.__)("Separator","gutenkit-blocks-addon"),children:[e?.showSeparator&&"custom"!==e?.separatorStyle&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j,{children:(0,s.jsx)(h,{label:(0,l.__)("Width","gutenkit-blocks-addon"),value:y(e,"separatorWidth",o),onChange:e=>M("separatorWidth",e,o,t),units:{px:{min:0,max:1e3,step:1},"%":{min:0,max:100,step:1}}})}),(0,s.jsx)(j,{children:(0,s.jsx)(h,{label:(0,l.__)("Height","gutenkit-blocks-addon"),value:y(e,"separatorHeight",o),onChange:e=>M("separatorHeight",e,o,t),units:{px:{min:0,max:50,step:1},"%":{min:0,max:100,step:1}}})}),(0,s.jsx)(p,{label:(0,l.__)("Separator color","gutenkit-blocks-addon"),value:e?.separatorColor,onChange:e=>t({separatorColor:e})})]}),(0,s.jsx)(j,{children:(0,s.jsx)(B,{label:(0,l.__)("Margin","gutenkit-blocks-addon"),values:y(e,"separatorMargin",o),onChange:e=>M("separatorMargin",e,o,t)})})]}),e?.showShadowText&&(0,s.jsxs)(g,{title:(0,l.__)("Shadow Text","gutenkit-blocks-addon"),children:[(0,s.jsx)(j,{children:(0,s.jsx)(B,{label:(0,l.__)("Position","gutenkit-blocks-addon"),values:y(e,"shadowTextPosition",o),onChange:e=>M("shadowTextPosition",e,o,t),sides:["top","left"],inputProps:{min:-100,step:1}})}),(0,s.jsx)(v,{label:(0,l.__)("Typography","gutenkit-blocks-addon"),value:e?.shadowTextTypography,onChange:e=>t({shadowTextTypography:e})}),(0,s.jsx)(p,{label:(0,l.__)("Text Color","gutenkit-blocks-addon"),value:e?.shadowTextColor,onChange:e=>t({shadowTextColor:e})}),(0,s.jsx)(a.__experimentalHeading,{children:(0,l.__)("Border","gutenkit-blocks-addon")}),(0,s.jsx)(b,{label:(0,l.__)("Stroke Width","gutenkit-blocks-addon"),value:e?.shadowTextStrokeWidth,onChange:e=>t({shadowTextStrokeWidth:e}),sizeUnits:["px"]}),(0,s.jsx)(p,{label:(0,l.__)("Stroke Color","gutenkit-blocks-addon"),value:e?.shadowTextStrokeColor,onChange:e=>t({shadowTextStrokeColor:e})})]})]});case"advanced":return(0,s.jsx)(s.Fragment,{children:n})}}})}))}}]);