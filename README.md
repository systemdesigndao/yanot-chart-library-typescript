# Yanot Charts

# tchart.js

The main code is written as a library that can be used in other projects.

This is ES5 code without dependencies. No build tools are needed.

## FEATURES

* Pixel Perfect: sizes, colors & animations as close as possible to the reference.

* Small Size: 8KB after minification, 4KB after gzip

* Fast rendering: instant initialization, smooth animations.
  Only modified regions are drawn. Most operations are O(1).
  It's OK even with million of items in a dataset.
  
* Cross-browser: works in all browsers where basic canvas is supported (98% global - https://caniuse.com/#search=canvas).
  
* Retina support: the chart is drawn in the maximum available quality.

* Adapts to any size. The chart can be resized in runtime.

* Dataset can be replaced in runtime

* Stylization: chart can be completely restyle without changing the code.

* Nice number formatting: big numbers, floats, negative numbers.

## USAGE

`new TChart(container)` - create a chart in this html container.

## SET DATASET 

`TChart.setData(data)`

## CHANGE STYLE

Use `TChart.setColors(colorsMap)` to change the colors of the chart.

Use CSS to change the style of the tooltip and checkboxes.

## RESIZE

To resize a chart just change width and height of '.tchart canvas'.

The chart is automatically redrawn in the new size.

The number of labels (X/Y axes) is automatically calculated from the new width/height.

## DESTROY

`TChart.destroy()` - remove all chart's elements and listeners from page.

<img width="1431" alt="image" src="https://github.com/user-attachments/assets/519a3986-d1c1-4776-8f9b-92aad849ec00">
