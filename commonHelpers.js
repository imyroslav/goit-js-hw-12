import{a as T,S as M,i as c}from"./assets/vendor-03da8548.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const C="43111947-de2162102976d485b612f31fc",S="https://pixabay.com/api/";async function g(t,e,s){try{return(await T.get(S,{params:{key:C,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:s}})).data}catch(n){throw console.error("Error fetching images:",n),n}}const a=document.querySelector(".gallery"),L=new M(".gallery a",{captionsData:"alt",captionDelay:250});L.refresh();function E(t){t.forEach(e=>{const s=`
      <li class="card">
        <a href="${e.largeImageURL}" class="link">
          <img src="${e.webformatURL}" alt="${e.tags}">
          <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${e.likes}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${e.views}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${e.comments}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${e.downloads}</p></li>
        </ul>
        </a>
        
      </li>
    `;a.insertAdjacentHTML("beforeend",s)}),L.refresh()}function w(){const t=document.createElement("p");t.classList.add("end-message"),t.textContent="We're sorry, but you've reached the end of search results.",a.insertAdjacentElement("afterend",t)}const h=document.querySelector(".scroll-to-top"),q=document.querySelector(".form"),y=document.querySelector(".search-input"),b=document.querySelector(".loader"),u=document.querySelector(".load-more-btn");p();let l="",i=1;const f=15;q.addEventListener("submit",H);async function H(t){if(t.preventDefault(),l=y.value.trim(),i=1,a.innerHTML="",l===""){c.error({title:"Error",message:"Please enter a search term.",position:"topCenter"}),d();return}$(),v();try{const e=await g(l,i,f),s=e.totalHits;if(e.hits.length===0){a.innerHTML="",c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),d();return}else E(e.hits),y.value="",P();f*i>=s&&(d(),w())}catch(e){console.error("Error fetching images:",e),c.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topCenter"})}finally{p()}}u.addEventListener("click",async()=>{try{u&&(i+=1);const t=await g(l,i,f),e=t.totalHits;E(t.hits),v(),f*i>=e&&(d(),w());const s=a.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*3,behavior:"smooth"})}catch(t){console.error("Error fetching more images:",t),c.error({title:"Error",message:`Error fetching more images: ${t}`})}finally{p()}});function v(){b.classList.remove("hidden")}function p(){b.classList.add("hidden")}function P(){u.style.display="block"}function d(){u.style.display="none"}function $(){const t=document.querySelector(".end-message");t&&t.remove()}window.addEventListener("scroll",()=>{document.body.scrollTop>30||document.documentElement.scrollTop>30?h.style.display="flex":h.style.display="none"});function O(){window.scrollTo({top:0,behavior:"smooth"})}h.addEventListener("click",O);
//# sourceMappingURL=commonHelpers.js.map
