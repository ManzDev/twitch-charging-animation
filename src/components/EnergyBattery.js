import waveFront from "@/assets/waves-front.svg?raw";
import waveBack from "@/assets/waves-back.svg?raw";
import { createKeyframes } from "@/modules/createKeyframes.js";

const pop = new Audio("/sounds/pop.mp3");

class EnergyBattery extends HTMLElement {
  connectedCallback() {
    this.render();

    setInterval(() => this.insertBubble(), 500);
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  insertBubble() {
    const pool = this.querySelector(".pool");
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    pool.append(bubble);
    const keyframes = createKeyframes();
    const duration = 4000 + Math.floor(Math.random() * 3000);
    const animation = bubble.animate(keyframes, {
      duration,
      fill: "forwards",
      easing: "linear"
    });
    animation.finished.then(() => {
      bubble.remove();
      pop.currentTime = 0;
      pop.play();
    });
  }

  render() {
    this.innerHTML = /* html */`
    <style>${EnergyBattery.styles}</style>
    <div class="cathode"></div>
    <div class="container">
      <div class="pool"></div>
      <div class="load">
        <div class="front">${waveFront}</div>
        <div class="back">${waveBack}</div>
      </div>
      <div class="shine-left"></div>
      <div class="shine-right"></div>
    </div>`;
  }
}

customElements.define("energy-battery", EnergyBattery);
