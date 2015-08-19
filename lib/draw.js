var d3 = require('d3');

module.exports = function(svg, canvas) {

//Projection to fit layer
/*
	var projection = d3.geo.mercator()
		  .scale(1)
		  .translate([0, 0]);
	var path = d3.geo.path()
		  .projection(projection);
	var b = path.bounds(); // <-- Layer goes in here
	var s = .95 / Math.max((b[1][0] - b[0][0]) / canvas.width, (b[1][1] - b[0][1]) / canvas.height);
	var t = [(canvas.width - s * (b[1][0] + b[0][0])) / 2, (canvas.height - s * (b[1][1] + b[0][1])) / 2];
	projection
		  .scale(s)
		  .translate(t);
*/
	svg.append('text')
		.attr({
			x: canvas.width / 2,
			y: canvas.height / 2,
			'text-anchor': 'middle',
			'font-size': canvas.width / 50
		})
		.text('SVG template')
}
