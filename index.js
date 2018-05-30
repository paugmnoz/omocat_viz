var width = 960,
    height = 500,
    active = d3.select(null);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

    var g = svg.append("g");