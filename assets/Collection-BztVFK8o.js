import{u as f,a as b,b as C,r as t,f as E,c as N,A as w,j as s,L as R,P as S}from"./index-DBB1XAzQ.js";const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAGASURBVEhLrZa7cYQwFEX5RiRbwpawLoEEhtAVeN2BOzCuxHYFJMzwSWjBJVCCIzLA74KQWRAgBGcG0GOGw9WHERrIsizM8/y9Kw6iJ0lyN03zk9Wh53kfrK2EQbywNgjxAtZWwqiq6pmuP32paUh7RKrjFEXRxXGcgpo31KCu69cgCL5YKU0nBGdJuRBQV6/UZUiv/Z390gchEEnbtn3yfZ+P8xoGu3IoTUmpXGqW/Z1OWNBa5UOxxizhwDRp0zS/uq67W0kXhUBFuioEe6WbQiCSYqIw3qjHzCZFxHSi6HO90FHgRajHSCUcmCallCWldcdJdwnBlnS3EKxJlYQgjuObZVkFxhP1IJWaFBG2bWu0fFj1j5IQXSZZRMdDOqUunzoppy4bGRmQEk5lJFr8njeFe2RgVbhXBhaFKjIgFKrKwEw4lQGaUbVNCnuzQHaXlQEuHG30U9k3K6Xouiz6a1CRAf1MGTDOlAGDlgR/mDaityMyDi2VME3TE36JNe0PEvQ33QXCa5oAAAAASUVORK5CYII=",y=()=>{const l=f(),{products:n,loading:m,error:o}=b(e=>e.products),{t:A}=C(),[d,h]=t.useState([]),[a,p]=t.useState([]),[r,g]=t.useState(!1),u=async()=>{try{const e=await N.get(w.Category,{headers:{Accept:"application/json"}});h(e.data.data)}catch(e){console.error("Error fetching categories:",e)}},i=a.length>0?n.filter(e=>a.includes(e.Categore_id)):n,x=e=>{p(c=>c.includes(e)?c.filter(j=>j!==e):[...c,e])};return t.useEffect(()=>{l(E())},[l]),t.useEffect(()=>{u()},[]),m?s.jsx("p",{children:s.jsx(R,{})}):o?s.jsxs("p",{children:["Error: ",o.message]}):s.jsxs("div",{className:"flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t",children:[s.jsxs("div",{className:"min-w-60",children:[s.jsxs("p",{onClick:()=>g(!r),className:"my-2 text-xl flex items-center cursor-pointer gap-2",children:["FILTERS",s.jsx("img",{className:`h-3 sm:hidden ${r?"rotate-90":""}`,src:Q,alt:"dropdown"})]}),s.jsxs("div",{className:`border border-gray-300 pl-5 py-3 mt-6 ${r?"":"hidden"} sm:block`,children:[s.jsx("p",{className:"mb-3 text-sm font-medium",children:"CATEGORY"}),s.jsx("div",{className:"flex flex-col gap-2 text-sm font-light text-gray-700",children:d.length>0?d.map(e=>s.jsxs("p",{className:"flex gap-2 cursor-pointer",onClick:()=>x(e.id),children:[s.jsx("input",{className:"w-3",type:"checkbox",value:e.slug,id:`category-${e.id}`,checked:a.includes(e.id),onChange:()=>x(e.id)}),s.jsx("label",{htmlFor:`category-${e.id}`,children:e.name})]},e.id)):s.jsx("p",{children:"No categories available"})})]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"flex justify-between text-base sm:text-2xl mb-4",children:s.jsx("h2",{className:"text-2xl text-center font-semibold mb-6",children:A("products")})}),s.jsx("div",{className:"grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6",children:i&&i.length>0?i.map(e=>s.jsxs("div",{children:[s.jsx(S,{id:e.id,image:e.images,name:e.name,price:e.price}),s.jsx("div",{className:"flex justify-center my-4",children:s.jsx("button",{className:"uppercase bg-secondary cursor-pointer text-white font-semibold rounded-md border-2 border-primary px-6 py-2",children:"Add To Cart"})})]},e.id)):s.jsx("p",{className:"text-center text-gray-500",children:"No products available"})})]})]})},G=()=>s.jsx(s.Fragment,{children:s.jsx(y,{})});export{G as default};