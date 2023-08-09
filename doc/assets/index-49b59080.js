(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=new Date(2023,7,18,20).getTime(),l=1e3,d=l*60,c=d*60,u=c*24;function v(s){const i=new Date().getTime(),o=a-i,r=Math.floor(o/u),e=Math.floor(o%u/c),t=Math.floor(o%c/d),n=Math.floor(o%d/l);s.days.innerHTML=r.toString(),s.hours.innerHTML=e.toString(),s.minutes.innerHTML=t.toString(),s.seconds.innerHTML=n.toString()}document.querySelector("#app").innerHTML=`
  <div class="content">
    <div>
      <div class="row">
        <div id="days"></div>
        <div class="ml">Days</div>
      </div>
      <div class="row">
        <div id="hours"></div>
        <div class="ml">Hours</div>
      </div>
      <div class="row">
        <div id="minutes"></div>
        <div class="ml">Minutes</div>
      </div>
      <div class="row">
        <div id="seconds"></div>
        <div class="ml">Seconds</div>
      </div>
      <div>Before Laurence is back</div>
    </div>
  </div>
`;window.setInterval(()=>v({days:document.getElementById("days"),hours:document.getElementById("hours"),minutes:document.getElementById("minutes"),seconds:document.getElementById("seconds")}),1e3);
