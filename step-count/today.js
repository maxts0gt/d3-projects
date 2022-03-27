const todaySvg = d3.select('svg')

const barScale = d3.scaleLinear().domain([0, 10000]).range([1, 112])

todaySvg
  .selectAll('rect')
  .data(todayData)
  .enter()
  .append('rect')
  .attr('width', 24)
  .attr('y', (d, i) => 112 - barScale(d))
  .attr('x', (d, i) => i * 36)
  .attr('height', (d, i) => barScale(d))
