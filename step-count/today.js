const todaySvg = d3.select('svg')

const rectTags = d3.selectAll('rect')

todaySvg
  .selectAll('rect')
  .data(todayData)
  .enter()
  .append('rect')
  .attr('width', 24)
  .attr('y', (d, i) => 112 - d)
  .attr('x', (d, i) => i * 36)
  .attr('height', (d, i) => d)
