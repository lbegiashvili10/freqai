import{f as m,u as v,ay as N,cg as E,n as u,o as l,s as r,H as h,A as t,B as V,g as z,bC as S,ch as $,C as H,v as o,b as F,x as i,aG as G,z as k,y as B,d as f,M as c,ci as R}from"./index-y-IgYf6E.js";const j=m({__name:"BImg",props:{blank:{type:Boolean,default:!1},blankColor:{default:"transparent"},block:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fluidGrow:{type:Boolean,default:!1},height:{default:void 0},tag:{default:"img"},lazy:{type:Boolean,default:!1},sizes:{default:void 0},src:{default:void 0},srcset:{default:void 0},thumbnail:{type:Boolean,default:!1},width:{default:void 0},placement:{default:void 0},rounded:{type:[Boolean,String,Number],default:!1},roundedTop:{type:[Boolean,String,Number],default:void 0},roundedBottom:{type:[Boolean,String,Number],default:void 0},roundedStart:{type:[Boolean,String,Number],default:void 0},roundedEnd:{type:[Boolean,String,Number],default:void 0}},setup(d){const e=v(d,"BImg"),a=N(()=>e.height??NaN),s=N(()=>e.width??NaN),y=E(()=>({rounded:e.rounded,roundedTop:e.roundedTop,roundedBottom:e.roundedBottom,roundedStart:e.roundedStart,roundedEnd:e.roundedEnd})),x=u(()=>typeof e.srcset=="string"?e.srcset.split(",").filter(n=>n).join(","):Array.isArray(e.srcset)?e.srcset.filter(n=>n).join(","):void 0),T=u(()=>typeof e.sizes=="string"?e.sizes.split(",").filter(n=>n).join(","):Array.isArray(e.sizes)?e.sizes.filter(n=>n).join(","):void 0),p=u(()=>{const n=Number.isNaN(s.value)?void 0:s.value,g=Number.isNaN(a.value)?void 0:a.value;if(e.blank){if(n!==void 0&&g===void 0)return{height:n,width:n};if(n===void 0&&g!==void 0)return{height:g,width:g};if(n===void 0&&g===void 0)return{height:1,width:1}}return{width:n,height:g}}),C=u(()=>P(p.value.width,p.value.height,e.blankColor)),_=u(()=>({"float-start":e.placement==="start","float-end":e.placement==="end","mx-auto":e.placement==="center"})),w=u(()=>[y.value,_.value,{"img-thumbnail":e.thumbnail,"img-fluid":e.fluid||e.fluidGrow,"w-100":e.fluidGrow,"d-block":e.block||e.placement==="center"}]),P=(n,g,I)=>`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="${n}" height="${g}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${g}" preserveAspectRatio="none">
    <rect width="100%" height="100%" style="fill:${I};"></rect>
    </svg>`)}`;return(n,g)=>(l(),r(V(t(e).tag),{class:h([w.value,"b-img"]),src:t(e).blank?C.value:t(e).src,width:p.value.width||void 0,height:p.value.height||void 0,srcset:t(e).blank?void 0:x.value,sizes:t(e).blank?void 0:T.value,loading:t(e).lazy?"lazy":"eager"},null,8,["class","src","width","height","srcset","sizes","loading"]))}}),D=m({__name:"BCardImg",props:{placement:{default:"top"},blank:{type:Boolean,default:void 0},blankColor:{default:void 0},block:{type:Boolean,default:void 0},fluid:{type:Boolean,default:void 0},fluidGrow:{type:Boolean,default:void 0},height:{default:void 0},tag:{},lazy:{type:Boolean,default:void 0},sizes:{default:void 0},src:{default:void 0},srcset:{default:void 0},thumbnail:{type:Boolean,default:void 0},width:{default:void 0},rounded:{type:[Boolean,String,Number],default:void 0},roundedTop:{type:[Boolean,String,Number],default:void 0},roundedBottom:{type:[Boolean,String,Number],default:void 0},roundedStart:{type:[Boolean,String,Number],default:void 0},roundedEnd:{type:[Boolean,String,Number],default:void 0}},setup(d){const e=v(d,"BCardImg"),a=u(()=>({"card-img-top":e.placement==="top","card-img-end":e.placement==="end","card-img-bottom":e.placement==="bottom","card-img-start":e.placement==="start","card-img":e.placement==="overlay"})),s=u(()=>R(e,["placement"]));return(y,x)=>(l(),r(j,k(s.value,{class:a.value}),null,16,["class"]))}}),A=m({__name:"BCardHeadFoot",props:{borderVariant:{default:null},tag:{default:"div"},text:{default:void 0},variant:{default:null},bgVariant:{default:null},textVariant:{default:null}},setup(d){const e=$(d);return(a,s)=>(l(),r(V(a.tag),{class:h(t(e))},{default:o(()=>[i(a.$slots,"default",{},()=>[f(c(a.text),1)])]),_:3},8,["class"]))}}),U=m({__name:"BCardHeader",props:{borderVariant:{default:void 0},tag:{default:"div"},text:{default:void 0},variant:{default:void 0},bgVariant:{default:void 0},textVariant:{default:void 0}},setup(d){const e=v(d,"BCardHeader");return(a,s)=>(l(),r(A,k({class:"card-header"},t(e)),{default:o(()=>[i(a.$slots,"default")]),_:3},16))}}),W=m({__name:"BCardTitle",props:{tag:{default:"h4"},text:{default:void 0}},setup(d){const e=v(d,"BCardTitle");return(a,s)=>(l(),r(V(t(e).tag),{class:"card-title"},{default:o(()=>[i(a.$slots,"default",{},()=>[f(c(t(e).text),1)])]),_:3}))}}),M=m({__name:"BCardSubtitle",props:{text:{default:void 0},tag:{default:"h6"},textVariant:{default:"body-secondary"}},setup(d){const e=v(d,"BCardSubtitle"),a=$(e);return(s,y)=>(l(),r(V(t(e).tag),{class:h(["card-subtitle mb-2",t(a)])},{default:o(()=>[i(s.$slots,"default",{},()=>[f(c(t(e).text),1)])]),_:3},8,["class"]))}}),q=m({__name:"BCardBody",props:{overlay:{type:Boolean,default:!1},subtitle:{default:void 0},subtitleTag:{default:"h4"},subtitleTextVariant:{default:void 0},tag:{default:"div"},text:{default:void 0},title:{default:void 0},titleTag:{default:"h4"},variant:{default:null},bgVariant:{default:null},textVariant:{default:null}},setup(d){const e=v(d,"BCardBody"),a=z(),s=u(()=>!S(a.title)),y=u(()=>!S(a.subtitle)),x=$(e),T=u(()=>[x.value,e.overlay?"card-img-overlay":"card-body"]);return(p,C)=>(l(),r(V(t(e).tag),{class:h(T.value)},{default:o(()=>[t(e).title||s.value?(l(),r(W,{key:0,tag:t(e).titleTag},{default:o(()=>[i(p.$slots,"title",{},()=>[f(c(t(e).title),1)])]),_:3},8,["tag"])):B("",!0),t(e).subtitle||y.value?(l(),r(M,{key:1,tag:t(e).subtitleTag,"text-variant":t(e).subtitleTextVariant},{default:o(()=>[i(p.$slots,"subtitle",{},()=>[f(c(t(e).subtitle),1)])]),_:3},8,["tag","text-variant"])):B("",!0),i(p.$slots,"default",{},()=>[f(c(t(e).text),1)])]),_:3},8,["class"]))}}),J=m({__name:"BCardFooter",props:{borderVariant:{default:void 0},tag:{default:"div"},text:{default:void 0},variant:{default:void 0},bgVariant:{default:void 0},textVariant:{default:void 0}},setup(d){const e=v(d,"BCardFooter");return(a,s)=>(l(),r(A,k({class:"card-footer"},t(e)),{default:o(()=>[i(a.$slots,"default",{},()=>[f(c(t(e).text),1)])]),_:3},16))}}),L=m({__name:"BCard",props:{align:{default:void 0},bodyBgVariant:{default:void 0},bodyClass:{default:void 0},bodyTag:{default:"div"},bodyText:{default:""},bodyTextVariant:{default:void 0},borderVariant:{default:null},footer:{default:void 0},footerBgVariant:{default:void 0},footerBorderVariant:{default:void 0},footerClass:{default:void 0},footerTag:{default:"div"},footerTextVariant:{default:void 0},footerVariant:{default:null},header:{default:void 0},headerBgVariant:{default:void 0},headerBorderVariant:{default:void 0},headerClass:{default:void 0},headerTag:{default:"div"},headerTextVariant:{default:void 0},headerVariant:{default:null},imgAlt:{default:void 0},imgPlacement:{default:"top"},imgHeight:{default:void 0},imgSrc:{default:void 0},imgWidth:{default:void 0},noBody:{type:Boolean,default:!1},subtitle:{default:void 0},subtitleTag:{default:"h6"},subtitleTextVariant:{default:"body-secondary"},tag:{default:"div"},title:{default:void 0},titleTag:{default:"h4"},variant:{default:null},bgVariant:{default:null},textVariant:{default:null}},setup(d){const e=v(d,"BCard"),a=z(),s=u(()=>!S(a.header)),y=u(()=>!S(a.footer)),x=$(e),T=u(()=>[x.value,{[`text-${e.align}`]:e.align!==void 0,"flex-row":e.imgPlacement==="start","flex-row-reverse":e.imgPlacement==="end"}]),p=u(()=>({src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth,placement:e.imgPlacement})),C=H();return(_,w)=>(l(),r(V(t(e).tag),{class:h(["card",T.value])},{default:o(()=>[F(t(C).define,null,{default:o(()=>[i(_.$slots,"img",{},()=>[t(e).imgSrc?(l(),r(D,G(k({key:0},p.value)),null,16)):B("",!0)])]),_:3}),t(e).imgPlacement!=="bottom"?(l(),r(t(C).reuse,{key:0})):B("",!0),t(e).header||s.value?(l(),r(U,{key:1,"bg-variant":t(e).headerBgVariant,variant:t(e).headerVariant,"border-variant":t(e).headerBorderVariant,tag:t(e).headerTag,"text-variant":t(e).headerTextVariant,class:h(t(e).headerClass)},{default:o(()=>[i(_.$slots,"header",{},()=>[f(c(t(e).header),1)])]),_:3},8,["bg-variant","variant","border-variant","tag","text-variant","class"])):B("",!0),t(e).noBody?i(_.$slots,"default",{key:3},()=>[f(c(t(e).bodyText),1)]):(l(),r(q,{key:2,overlay:t(e).imgPlacement==="overlay","bg-variant":t(e).bodyBgVariant,tag:t(e).bodyTag,"text-variant":t(e).bodyTextVariant,subtitle:t(e).subtitle,"subtitle-tag":t(e).subtitleTag,"subtitle-text-variant":t(e).subtitleTextVariant,title:t(e).title,"title-tag":t(e).titleTag,class:h(t(e).bodyClass)},{default:o(()=>[i(_.$slots,"default",{},()=>[f(c(t(e).bodyText),1)])]),_:3},8,["overlay","bg-variant","tag","text-variant","subtitle","subtitle-tag","subtitle-text-variant","title","title-tag","class"])),t(e).footer||y.value?(l(),r(J,{key:4,"bg-variant":t(e).footerBgVariant,"border-variant":t(e).footerBorderVariant,variant:t(e).footerVariant,tag:t(e).footerTag,"text-variant":t(e).footerTextVariant,class:h(t(e).footerClass)},{default:o(()=>[i(_.$slots,"footer",{},()=>[f(c(t(e).footer),1)])]),_:3},8,["bg-variant","border-variant","variant","tag","text-variant","class"])):B("",!0),t(e).imgPlacement==="bottom"?(l(),r(t(C).reuse,{key:5})):B("",!0)]),_:3},8,["class"]))}});export{L as _,q as a};
//# sourceMappingURL=BCard.vue_vue_type_script_setup_true_lang-DoeLCt4a-D7uvpCbJ.js.map
