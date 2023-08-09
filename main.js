import './style.css';
import updateDate from './counter';

document.querySelector('#app').innerHTML = `
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
`;

window.setInterval(() => updateDate({
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
}), 1000);
