let cart = JSON.parse(localStorage.getItem("pathivaraCart") || "[]");
function updateCartCount(){ const el=document.getElementById("cartCount"); if(el) el.textContent=cart.reduce((s,x)=>s+x.qty,0); }
document.getElementById("menuToggle")?.addEventListener("click",()=>document.getElementById("mainNav")?.classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav")?.classList.remove("open")));
document.getElementById("themeToggle")?.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("pathivaraTheme",document.body.classList.contains("dark")?"dark":"light");});
if(localStorage.getItem("pathivaraTheme")==="dark") document.body.classList.add("dark");
document.querySelectorAll(".lang-btn").forEach(b=>b.addEventListener("click",()=>{
  const lang=b.dataset.lang; localStorage.setItem("pathivaraLang",lang);
  document.querySelectorAll(".lang-btn").forEach(x=>x.classList.toggle("active",x.dataset.lang===lang));
  document.querySelectorAll("[data-en]").forEach(el=>el.textContent=lang==="ne"?el.dataset.ne:el.dataset.en);
}));
function addToCart(id){let c=JSON.parse(localStorage.getItem("pathivaraCart")||"[]");const e=c.find(x=>x.id===id&&!x.size&&!x.color);if(e)e.qty++;else c.push({id,qty:1});localStorage.setItem("pathivaraCart",JSON.stringify(c));cart=c;updateCartCount();alert("Product added to cart.");}
updateCartCount();
