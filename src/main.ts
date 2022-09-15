import './style.css'
import { TChart } from './chart';
import data from './data.json';

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
<div id="charts"></div>
`;

var LIGHT_COLORS = {
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