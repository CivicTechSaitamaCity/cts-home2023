import{e as o,p,J as h,D as g,K as f,i as u}from"./entry.2cf4ed1a.js";const m=o({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:a,attrs:n}){const i=p(!1);return h(()=>{i.value=!0}),l=>{var r;if(i.value)return(r=a.default)==null?void 0:r.call(a);const e=a.fallback||a.placeholder;if(e)return e();const s=l.fallback||l.placeholder||"",d=l.fallbackTag||l.placeholderTag||"span";return g(d,n,s)}}}),c=new WeakMap;function k(t){if(c.has(t))return c.get(t);const a={...t};return a.render?a.render=(n,...i)=>{var l;if(n.mounted$){const e=t.render(n,...i);return e.children===null||typeof e.children=="string"?f(e.type,e.props,e.children,e.patchFlag,e.dynamicProps,e.shapeFlag):u(e)}else return u("div",(l=n.$attrs)!=null?l:n._.attrs)}:a.template&&(a.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),a.setup=(n,i)=>{var e;const l=p(!1);return h(()=>{l.value=!0}),Promise.resolve(((e=t.setup)==null?void 0:e.call(t,n,i))||{}).then(s=>typeof s!="function"?{...s,mounted$:l}:(...d)=>{if(l.value){const r=s(...d);return r.children===null||typeof r.children=="string"?f(r.type,r.props,r.children,r.patchFlag,r.dynamicProps,r.shapeFlag):u(r)}else return u("div",i.attrs)})},c.set(t,a),a}export{k as createClientOnly,m as default};
