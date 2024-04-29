// Step 1: Loading data
var jsonData = d3.json("anscombe.json");

Promise.all([jsonData])
.then(function(data){
    console.log(data);

    // Step 2: Creating a chart
    function scatterPlot(inputDataset){
        var svg = d3.select("body")
           .append("svg")
           .attr("width", 400)
           .attr("height", 400);

        var xScale = d3.scaleLinear()
           .domain([0, 20])
           .range([0, 300]);

        var yScale = d3.scaleLinear()
           .domain([0, 20])
           .range([300, 0]);

        svg.selectAll("circle")
           .data(inputDataset)
           .enter()
           .append("circle")
           .attr("r", 5)
           .attr("cx", function(d){
               return xScale(d.x);
           })
           .attr("cy", function(d){
               return yScale(d.y);
           })
           .attr("transform", "translate(30,30)");

        var xAxis = d3.axisBottom().scale(xScale);
        var yAxis = d3.axisLeft().scale(yScale);

        svg.append("g").call(xAxis).attr("transform", "translate(30,330)");
        svg.append("g").call(yAxis).attr("transform", "translate(30,30)");
        svg.append("text").text("x").attr("x", 160).attr("y", 360);
        svg.append("text").text("y").attr("x", 0).attr("y", 160);
    }

    // Step 3: Connecting Chart with Data
    scatterPlot(data[0]["set1"]);

    // Step 4: Create a bar chart
    function barChart(inputDataset) {
        var svg = d3.select("body")
            .append("svg")
            .attr("width", 400)
            .attr("height", 200);

        var xScale = d3.scaleBand()
            .domain(inputDataset.map(function(d) { return d.label; }))
            .range([0, 300])
            .padding(0.1);

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(inputDataset, function(d) { return d.value; })])
            .range([150, 0]);

        svg.selectAll("rect")
            .data(inputDataset)
            .enter()
            .append("rect")
            .attr("x", function(d) { return xScale(d.label) + 30; })
            .attr("y", function(d) { return yScale(d.value); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return 150 - yScale(d.value); })
            .attr("fill", "steelblue");

        var xAxis = d3.axisBottom().scale(xScale);
        var yAxis = d3.axisLeft().scale(yScale);

        svg.append("g")
            .attr("transform", "translate(30,150)")
            .call(xAxis);

        svg.append("g")
            .attr("transform", "translate(30,0)")
            .call(yAxis);
    }

});