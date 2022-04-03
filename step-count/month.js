const monthSvg = d3.select("svg.month");

const radiusScale = d3.scaleSqrt().domain([0, 30000]).range([0, 50]);

const colorScale = d3.scaleSqrt().domain([0, 30000]).range(["blue", "red"]);

monthSvg
  .selectAll("circle")
  .data(monthData)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => {
    return (i % 7) * 130 + 60;
  })
  .attr("cy", (d, i) => {
    return Math.floor(i / 7) * 130 + 60;
  })
  .attr("r", 0)
  .transition()
  .duration(1000)
  .attr("r", (d, i) => {
    return radiusScale(d);
  });

// monthSvg
//   .selectAll("text")
//   .data(todayData)
//   .enter()
//   .append("text")
//   .attr("cx", (d, i) => {
//     return i + 340;
//   })
//   .attr("cy", (d, i) => {
//     return Math.floor(i / 7) * 130 + 400;
//   })
//   .text((d, i) => i + 1);
