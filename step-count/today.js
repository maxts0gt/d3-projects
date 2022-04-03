const todaySvg = d3.select("svg");

const barScale = d3.scaleLinear().domain([0, 10000]).range([1, 112]);

todaySvg
  .selectAll("rect")
  .data(todayData)
  .enter()
  .append("rect")
  .attr("width", 24)
  .attr("y", (d, i) => 112 - barScale(d))
  .attr("x", (d, i) => i * 36)
  .attr("height", (d, i) => barScale(d));

todaySvg
  .selectAll("text")
  .data(todayData)
  .enter()
  .append("text")
  .attr("x", (d, i) => {
    return i * 36 + 12;
  })
  .attr("y", 130)
  .text((d, i) => {
    return i + 1;
  });
