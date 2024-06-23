import{a as h,i as n,S as A}from"./assets/vendor-ba070a68.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const b="44415395-401c6f4260d8ec1c7de985af5",v="https://pixabay.com/api/";async function y(t,o=1){const s={key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o};try{return(await h.get(v,{params:s})).data}catch(a){throw console.error("Error fetching images:",a),a}}const w=document.getElementById("gallery");function m(t){if(t.length===0){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const o=t.map(s=>`
      <div class="gallery-box">
        <div class="gallery-image">
          <a href="${s.largeImageURL}">
            <img src="${s.webformatURL}" alt="${s.tags}" width="400" height="280">
          </a>
        </div>
        <div class="image-info">
          <div class="info-box">
            <p class="info-label">Likes:</p>
            <p class="info-value">${s.likes}</p>
          </div>
          <div class="info-box">
            <p class="info-label">Views:</p>
            <p class="info-value">${s.views}</p>
          </div>
          <div class="info-box">
            <p class="info-label">Comments:</p>
            <p class="info-value">${s.comments}</p>
          </div>
          <div class="info-box">
            <p class="info-label">Downloads:</p>
            <p class="info-value">${s.downloads}</p>
          </div>
        </div>
      </div>
    `).join("");w.innerHTML+=o}const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",g=document.getElementById("search-form"),E=document.getElementById("search-input"),i=document.getElementById("loader"),I=document.getElementById("gallery"),l=document.getElementById("show-more-button");i.classList.add("loader");i.style.display="none";const u=new A(".gallery a",{captionsData:"alt",captionsDelay:250});let d=1,c="";g.addEventListener("submit",async function(t){if(t.preventDefault(),I.innerHTML="",d=1,c=E.value.trim(),c===""){n.error({title:"Error",message:"Please enter a search term.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:f,theme:"dark"});return}i.style.display="inline-block";try{const o=await y(c,d);i.style.display="none",m(o.hits),u.refresh(),l.style.display=o.hits.length===15?"block":"none"}catch{i.style.display="none",n.error({title:"Error",message:"Failed to fetch images. Please try again.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:f,theme:"dark"})}g.reset()});l.addEventListener("click",async()=>{d++,i.style.display="inline-block",l.style.display="none";try{const t=await y(c,d);i.style.display="none",m(t.hits),u.refresh(),t.hits.length<15?n.info({title:"Info",message:"No more images to load.",position:"topRight"}):l.style.display="block"}catch{i.style.display="none",l.style.display="block",n.error({title:"Error",message:"Failed to fetch images. Please try again.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:f,theme:"dark"})}});
//# sourceMappingURL=commonHelpers.js.map
