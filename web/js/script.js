function loadShoesData() {
	$.getJSON("data/data.json", function(data) {
		$.each(data, function(key, val){
			console.log(val);
			addNew(val.heading, val.precio, val.descripcion, val.image);
		});
	});
}

function addNew( heading, precio, descripcion, image) {
	var row = $("<div/>", {
		"class": "row"
	});

	var section = $("<section/>", {
		"class" : "col-lg-7"
	});

	var headingH1 = $("<h1/>", {
		html : heading,
		"class": "col-lg-12"
	});

	var precioH3 = $("<h3/>", {
		html: precio,
		"class": "col-lg-12"
	});

	var p = $("<p/>", {
		html: descripcion,
		"class":"col-lg-12"
	});

	var button = $("<button/>", {
		html: "Añadir al carrito",
		"class": "col-lg-12"
	});

	var aside = $("<aside/>", {
		"class": "col-lg-5"
	});

	var imag = $("<img/>", {
		src : image, 
		alt : "placeholder"
	});

	headingH1.appendTo(section);
	precioH3.appendTo(section);
	p.appendTo(section);
	button.appendTo(section);
	section.appendTo(row);

	imag.appendTo(aside);
	aside.appendTo(row);

	row.appendTo("#items");
}

$(document).ready(function(){
	loadShoesData();
});