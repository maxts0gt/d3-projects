const todayData = [
  50, 120, 73, 10, 5, 22, 31, 40, 50, 9, 31, 6, 55, 20, 73, 60, 50, 42, 71, 60,
  15, 50, 11, 41, 20
]

const todaySvg = d3.select('svg')

const rectTags = d3.selectAll('rect')

todaySvg
  .selectAll('rect')
  .data(todayData)
  .enter()
  .append('rect')
  .attr('width', (d, i) => {
    return d
  })
  .attr('y', (d, i) => {
    return 20 * i
  })
  .attr('x', 0)
  .attr('height', 16)
