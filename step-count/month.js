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

monthGroups
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", radiusScale(15000))
  .attr("class", "ring");

monthGroups
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", radiusScale(30000))
  .attr("class", "ring");

monthGroups
  .append("text")
  .attr("class", "day")
  .attr("x", 0)
  .attr("y", 70)
  .text((d, i) => {
    return i + 1;
  });

monthGroups
  .append("text")
  .attr("class", "steps")
  .attr("x", 0)
  .attr("y", 70)
  .text((d, i) => {
    return `${d} steps`;
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
