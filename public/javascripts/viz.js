window.onload = () => {
// =====================================================================================================================
    // Start Bar Chart
    const laptopCounts = [
        {
            "Brand": "Acer",
            "Count": 2
        },
        {
            "Brand": "Apple",
            "Count": 10
        },
        {
            "Brand": "Asus",
            "Count": 2
        },
        {
            "Brand": "Dell",
            "Count": 4
        },
        {
            "Brand": "HP",
            "Count": 5
        },
        {
            "Brand": "Lenovo",
            "Count": 2
        }
    ];

    const barSpacing = 2;
    const strokeWidth = 2;
    const w = 1200;
    const h = 275;
    const barChart = d3.select("#bar-chart").append("svg").attr("width", w).attr("height", h);
    d3.select("#bar-chart").append("figcaption")
        .text("Count of Popular Laptops Grouped By Brand.");

    const bars = barChart
        .selectAll("g")
        .data(laptopCounts)
        .enter()
        .append("g");

    bars
        .append("rect")
        .attr("x", strokeWidth)
        .attr("y", (d, i) => i * (h-50) / laptopCounts.length + strokeWidth)
        .attr("width", d => d["Count"] * 100)
        .attr("height", 30)
        .attr("rx", 4)
        .attr("ry", 6)
        .style("stroke-width", strokeWidth);

    bars
        .append("text")
        .text(d => d["Count"])
        .attr("x", d => (d["Count"] * 100 + 2 * barSpacing) + 5)
        .attr("y", (d, i) => i * (h-50) / laptopCounts.length + (h / laptopCounts.length / 2 + barSpacing))
        .style("font-size", "12pt");

    bars
        .append("text")
        .text(d => d["Brand"])
        .attr("x", (2 * barSpacing) + 5)
        .attr("y", (d, i) => i * (h-50) / laptopCounts.length + (h / laptopCounts.length / 2 + barSpacing))
        .style("fill", "white")
        .style("font-size", "12pt");
    // End Bar Chart
// =====================================================================================================================

    // Start Line Chart
    const laptopWeight = [
        {
            "Brand": "Acer",
            "Weight": 1.34
        },
        {
            "Brand": "Apple",
            "Weight": 1.73
        },
        {
            "Brand": "Asus",
            "Weight": 1.14
        },
        {
            "Brand": "Dell",
            "Weight": 1.81
        },
        {
            "Brand": "HP",
            "Weight": 1.87
        },
        {
            "Brand": "Lenovo",
            "Weight": 2.35
        }
    ];

    const parseByIndex = d => {
        switch (d["Brand"]) {
            case "Acer":
                return 5;
            case "Apple":
                return 10;
            case "Asus":
                return 15;
            case "Dell":
                return 20;
            case "HP":
                return 25;
            case "Lenovo":
                return 30;
        }
    };


    const line = d3.line()
        .x(parseByIndex)
        .y(function(d) {
            return 6 - d["Weight"];
        });

    const lineChart = d3.select("#line-chart")
        .append("svg")
        .attr("width", 900)
        .attr("viewBox", "0 0 35 10")
        .attr("preserveAspectRatio", "none");

    d3.select("#line-chart").append("figcaption")
        .text("Average Mass of Popular Laptops (kg) Grouped By Brand");

    lineChart.append("path")
        .datum(laptopWeight)
        .attr("class", "line")
        .attr("d", line);


    const labels = lineChart
        .selectAll("g")
        .data(laptopWeight)
        .enter()
        .append("g");

    labels.append("text")
        .text(d => d["Brand"])
        .attr("x", d => parseByIndex(d))
        .attr("y", 9.5)
        .attr("text-anchor", "middle")
        .style("fill", "black")
        .style("font-size", "1px");

    labels.append("text")
        .text(d => d["Weight"])
        .attr("x", d => parseByIndex(d))
        .attr("y", d => 5 - d["Weight"])
        .attr("text-anchor", "middle")
        .style("fill", "black")
        .style("font-size", "1px");

    //End Bar Chart
// =====================================================================================================================

    // Start Dot Chart
    const ramOptions = [
        {
            "Brand": "Acer",
            "GB": 4
        },
        {
            "Brand": "Acer",
            "GB": 8
        },
        {
            "Brand": "Apple",
            "GB": 16
        },
        {
            "Brand": "Apple",
            "GB": 8
        },
        {
            "Brand": "Asus",
            "GB": 16
        },
        {
            "Brand": "Asus",
            "GB": 2
        },
        {
            "Brand": "Dell",
            "GB": 8
        },
        {
            "Brand": "Dell",
            "GB": 4
        },
        {
            "Brand": "HP",
            "GB": 8
        },
        {
            "Brand": "HP",
            "GB": 4
        },
        {
            "Brand": "Lenovo",
            "GB": 8
        }
    ];

    //since the axis was inverted.
    const parseByRamSize = d => {
        switch (d["GB"]) {
            case 2:
                return 9;
            case 4:
                return 8;
            case 8:
                return 6;
            case 12:
                return 4;
            case 16:
                return 2;
        }
    };

    const dotChart = d3.select("#dot-chart")
        .append("svg")
        .attr("width", 900)
        .attr("viewBox", "0 0 35 15")
        .attr("preserveAspectRatio", "none");

    const dots = dotChart
        .selectAll("g")
        .data(ramOptions)
        .enter()
        .append("g");

    dots
        .append("circle")
            .attr("cx", d => parseByIndex(d))
            .attr("cy", d => parseByRamSize(d))
            .attr("r", "0.3")
            .style("fill", "#ED254E"); //colors it

    dots.
        append("text")
            .text(d => d["Brand"])
            .attr("x", d => parseByIndex(d))
            .attr("y", 12)
            .attr("text-anchor", "middle")
            .style("fill", "black")
            .style("font-size", "1px");

    dots
        .append("rect")
            .attr("x", 2)
            .attr("y", 10)
            .attr("width", 30)
            .attr("height", 0.05);

    dots
        .append("rect")
            .attr("x", 2)
            .attr("y", 2)
            .attr("width", 0.05)
            .attr("height", 8);

    dots
        .append("rect")
            .attr("x", 2)
            .attr("y", 2)
            .attr("width", 0.5)
            .attr("height", 0.05);

    dots
        .append("rect")
            .attr("x", 2)
            .attr("y", 6)
            .attr("width", 0.5)
            .attr("height", 0.05);

    dots
        .append("rect")
            .attr("x", 2)
            .attr("y", 4)
            .attr("width", 0.5)
            .attr("height", 0.05);

    dots
        .append("rect")
            .attr("x", 2)
            .attr("y", 8)
            .attr("width", 0.5)
            .attr("height", 0.05);

    dots
        .append("text")
            .text("0")
            .attr("x", 1)
            .attr("y", 10.33)
            .attr("text-anchor", "middle")
            .style("fill", "black")
            .style("font-size", "1px");

    dots
        .append("text")
        .text("16")
        .attr("x", 1)
        .attr("y", 2.33)
        .attr("text-anchor", "middle")
        .style("fill", "black")
        .style("font-size", "1px");

    d3.select("#dot-chart").append("figcaption")
        .text("Ram Options (gb) Offered on Popular Laptops by Company");

    //End dot Chart

};