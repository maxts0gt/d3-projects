const monthSvg = d3.select("svg.month");

const radiusScale = d3.scaleSqrt().domain([0, 30000]).range([0, 50]);

// const colorScale = d3.scaleSqrt().domain([0, 30000]).range(["blue", "red"]);

const monthGroups = monthSvg
  .selectAll("g")
  .data(monthData)
  .enter()
  .append("g")
  .attr("transform", (d, i) => {
    const x = (i % 7) * 130 + 60;
    const y = Math.floor(i / 7) * 150 + 60;
    return `translate(${x}, ${y})`;
  });

monthGroups
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 10)
  .transition()
  .duration(250)
  .delay((d, i) => {
    return i * 20 + 500;
  })
  .ease(d3.easeCubic)
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
