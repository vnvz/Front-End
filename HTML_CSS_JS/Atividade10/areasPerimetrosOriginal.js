const PI = 3.1415;
function eventoClickBotao() {
	let perimetro;
	let area;
	if (document.getElementById("tri").style.display == 'block') {
		let lado1 = Number(document.getElementById("lbLado1").value);
		let lado2 = Number(document.getElementById("lbLado2").value);
		let lado3 = Number(document.getElementById("lbLado3").value);
		perimetro = lado1 + lado2 + lado3;
 		let sp = perimetro / 2;
		area = Math.sqrt(sp*(sp - lado1)*(sp - lado2)*(sp - lado3));			
	}
	if (document.getElementById("ret").style.display == 'block') {
		let base = Number(document.getElementById("lbBase").value);
		let altura = Number(document.getElementById("lbAltura").value);
		perimetro = 2 * (base + altura);
		area = base * altura;			
	}	
	if (document.getElementById("cir").style.display == 'block') {
		let raio = Number(document.getElementById("lbRaio").value);
		perimetro = 2*PI*raio;;
		area = PI*raio*raio;
	}	
	document.getElementById("perimetro").value = perimetro;
	document.getElementById("area").value = area;
}
function mudarCamposEntrada() {
	let figura = document.getElementById("tipoFigura").value;
	if (figura == '1') {	
		document.getElementById("tri").style.display = 'block';
		document.getElementById("ret").style.display = 'none';
		document.getElementById("cir").style.display = 'none';
	} else if (figura == '2') {
		document.getElementById("tri").style.display = 'none';
		document.getElementById("ret").style.display = 'block';
		document.getElementById("cir").style.display = 'none';		
	} else {
		document.getElementById("tri").style.display = 'none';
		document.getElementById("ret").style.display = 'none';
		document.getElementById("cir").style.display = 'block';		
	}
}