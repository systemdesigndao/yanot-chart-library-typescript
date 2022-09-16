import './style.css'
import { TChart, ThemeColors } from './chart';
import data from './data.json';

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
<button type="button" class="set-colors">Set dark colors</button>
<div id="charts"></div>
`;

let lightTheme = true;

function onChangeTheme(this: HTMLElement, _: Event) {
  lightTheme = !lightTheme;
  if (lightTheme) {
      this.innerText = 'Switch to Night Mode'
      document.body.classList.remove('dark-theme');
  } else {
      this.innerText = 'Switch to Day Mode'
      document.body.classList.add('dark-theme');
  }
  for (var i in charts) {
      var chart = charts[i];
      chart.setColors(lightTheme ? LIGHT_COLORS : DARK_COLORS);
  }
}

const LIGHT_COLORS: ThemeColors = {
  circleFill: '#ffffff',
  line: '#f2f4f5',
  zeroLine: '#ecf0f3',
  selectLine: '#dfe6eb',
  text: '#96a2aa',
  preview: '#eef2f5',
  previewAlpha: 0.8,
  previewBorder: '#b6cfe1',
  previewBorderAlpha: 0.5
};

const DARK_COLORS: ThemeColors = {
  circleFill: '#242f3e',
  line: '#293544',
  zeroLine: '#313d4d',
  selectLine: '#3b4a5a',
  text: '#546778',
  preview: '#152435',
  previewAlpha: 0.8,
  previewBorder: '#5a7e9f',
  previewBorderAlpha: 0.5
};

const charts: ReturnType<typeof TChart>[]  = [];

data.forEach((slot, i) => {
  const chartContainer = document.createElement('div');
  chartContainer.classList.add('tchart');
  app.appendChild(chartContainer);

  const h1 = document.createElement('h1');
  h1.innerText = 'Chart #' + i;
  chartContainer.appendChild(h1);

  const chart = TChart(chartContainer);
  chart.setColors(LIGHT_COLORS);
  chart.setData(slot);
  charts.push(chart);
})

charts.forEach(chart => chart.run());

document.querySelector('.set-colors')?.addEventListener('click', onChangeTheme)