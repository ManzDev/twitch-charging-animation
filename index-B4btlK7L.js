(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=`<svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
  <defs>
    <path id="wavepath" d="M 0 2000 0 500 Q 144 315 288 500 t 288 0 288 0 288 0 288 0 288 0 v1000 z" />
    <path id="motionpath" d="M -576 0 0 0" />
  </defs>
  <g>
    <use href="#wavepath" y="150" fill="var(--color)">
      <animateMotion dur="5s" repeatCount="indefinite">
        <mpath href="#motionpath" />
      </animateMotion>
    </use>
  </g>
</svg>
`,c=`<svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
  <defs>
    <path id="wavepath" d="M 0 2000 0 500 Q 144 315 288 500 t 288 0 288 0 288 0 288 0 288 0 v1000 z" />
    <path id="luisllamas" d="M 0 0 -576 0" />
  </defs>
  <g>
    <use href="#wavepath" y="-200" fill="var(--color)">
      <animateMotion dur="2.5s" repeatCount="indefinite">
        <mpath href="#luisllamas" />
      </animateMotion>
    </use>
  </g>
</svg>
`,f=()=>{const r=25+Math.floor(Math.random()*50),o=-15+Math.floor(Math.random()*45),i=-30+Math.floor(Math.random()*45),a=-15+Math.floor(Math.random()*45),e=5+Math.floor(Math.random()*15);return[{top:"100%",left:`${r}%`,width:"2.5px",height:"2.5px"},{top:"75%",left:`${r+o}%`,width:"10px",height:"10px"},{top:"50%",left:`${r+i}%`,width:`${e}px`,height:`${e}px`},{top:"25%",left:`${r+a}%`,width:"10px",height:"10px"},{top:"0%",left:`${r}%`,width:"2.5px",height:"2.5px"}]},d=new Audio("/sounds/pop.mp3");class n extends HTMLElement{connectedCallback(){this.render(),setInterval(()=>this.insertBubble(),500)}static get styles(){return`
      energy-battery {
        --size: 250px;
        --radius: 25px;
      }

      @scope {
        .cathode {
          --height: 25px;
          --offset: 10px;
          --cathode-size: calc(var(--size) / 2.5);

          display: block;
          width: var(--cathode-size);
          height: var(--height);
          border-radius: var(--radius) var(--radius) 0 0;
          margin-bottom: var(--offset);
          background: #fff;
          transform: translateX(calc((var(--size) / 2) - (var(--cathode-size) / 2)));
        }

        .container {
          display: grid;
          justify-content: center;
          align-items: end;
          width: var(--size);
          height: calc(var(--size) * 1.5);
          border: 2px solid #fff;
          border-radius: var(--radius);
          position: relative;
          overflow: hidden;

          & .shine-left {
            width: 20px;
            height: 90px;
            border-radius: var(--radius);
            background: #fff2;
            position: absolute;
            bottom: 20%;
            left: 8%;
          }

          & .shine-right {
            width: 6px;
            height: 50px;
            border-radius: var(--radius);
            background: #fff2;
            position: absolute;
            top: 10%;
            right: 6%;
          }

          & .pool {
            --offset: 0.7rem;

            position: absolute;
            width: calc(100% - calc(var(--offset) * 2));
            height: calc(100% - calc(var(--offset) * 2));
            inset: var(--offset);
            z-index: 1;
            overflow: hidden;

            & .bubble {
              --multiplier: 1;
              --x: 50%;
              --y: 100%;

              width: calc(var(--multiplier) * 2.5px);
              height: calc(var(--multiplier) * 2.5px);
              border-radius: 50%;
              background: linear-gradient(#fd64f5, #5d3afb);
              position: absolute;
              mix-blend-mode: multiply;
              top: var(--y);
              left: var(--x);
            }
          }

          & .load {
            --height: 50%;
            --offset: 0.7rem;

            width: calc(100% - calc(var(--offset) * 2));
            height: var(--height);
            background: linear-gradient(to bottom, #ff68f5 15%, #f04af5 30%, #543afb);
            position: absolute;
            border-radius: 0 0 var(--radius) var(--radius);
            transform: translate(var(--offset), calc(var(--offset) * -1));

            & .front,
            & .back {
              --color: #ff68f5;
              --height: 75px;

              width: 100%;
              height: var(--height);
              position: absolute;
              top: calc((var(--height) * -1) + 1px);
            }

            & .back {
              --duration: 5s;
              --color: color-mix(in srgb, #ff68f5, black 25%);
              z-index: -1;
              top: calc(var(--height) * -1);
            }
          }
        }
      }
    `}insertBubble(){const o=this.querySelector(".pool"),i=document.createElement("div");i.classList.add("bubble"),o.append(i);const a=f(),e=4e3+Math.floor(Math.random()*3e3);i.animate(a,{duration:e,fill:"forwards",easing:"linear"}).finished.then(()=>{i.remove(),d.currentTime=0,d.play()})}render(){this.innerHTML=`
    <style>${n.styles}</style>
    <div class="cathode"></div>
    <div class="container">
      <div class="pool"></div>
      <div class="load">
        <div class="front">${l}</div>
        <div class="back">${c}</div>
      </div>
      <div class="shine-left"></div>
      <div class="shine-right"></div>
    </div>`}}customElements.define("energy-battery",n);
