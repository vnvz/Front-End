const PI = 3.1415;

class FiguraGeometrica {
    constructor() {}

    calcularPerimetro() {}
    calcularArea() {}
}

class Triangulo extends FiguraGeometrica {
    constructor(lado1, lado2, lado3) {
        super();
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    calcularPerimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }

    calcularArea() {
        let sp = this.calcularPerimetro() / 2;
        return Math.sqrt(sp * (sp - this.lado1) * (sp - this.lado2) * (sp - this.lado3));
    }
}

class Trapezio extends FiguraGeometrica {
    constructor(baseMaior, baseMenor, altura) {
        super();
        this.baseMaior = baseMaior;
        this.baseMenor = baseMenor;
        this.altura = altura;
    }

    calcularPerimetro() {
        return this.baseMaior + this.baseMenor + 2 * this.altura;
    }

    calcularArea() {
        return ((this.baseMaior + this.baseMenor) * this.altura) / 2;
    }
}

class Retangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

class Elipse extends FiguraGeometrica {
    constructor(raioMaior, raioMenor) {
        super();
        this.raioMaior = raioMaior;
        this.raioMenor = raioMenor;
    }

    calcularPerimetro() {
        let h = Math.pow(this.raioMaior - this.raioMenor, 2) / Math.pow(this.raioMaior + this.raioMenor, 2);
        return PI * (this.raioMaior + this.raioMenor) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
    }

    calcularArea() {
        return PI * this.raioMaior * this.raioMenor;
    }
}

class Quadrado extends Retangulo {
    constructor(lado) {
        super(lado, lado);
        this.lado = lado;
    }
}

class Circulo extends Elipse {
    constructor(raio) {
        super(raio, raio);
        this.raio = raio;
    }
}

function mudarCamposEntrada() {
    let figura = document.getElementById("tipoFigura").value;
    if (figura == '1') {    
        document.getElementById("tri").style.display = 'block';
        document.getElementById("ret").style.display = 'none';
        document.getElementById("cir").style.display = 'none';
        document.getElementById("trap").style.display = 'none';
        document.getElementById("eli").style.display = 'none';
    } else if (figura == '2') {
        document.getElementById("tri").style.display = 'none';
        document.getElementById("ret").style.display = 'block';
        document.getElementById("cir").style.display = 'none';   
        document.getElementById("trap").style.display = 'none';
        document.getElementById("eli").style.display = 'none';     
    } else if (figura == '3') {
        document.getElementById("tri").style.display = 'none';
        document.getElementById("ret").style.display = 'none';
        document.getElementById("cir").style.display = 'block';  
        document.getElementById("trap").style.display = 'none';
        document.getElementById("eli").style.display = 'none';    
    } else if (figura == '4') {
        document.getElementById("tri").style.display = 'none';
        document.getElementById("ret").style.display = 'none';
        document.getElementById("cir").style.display = 'none';  
        document.getElementById("trap").style.display = 'block';
        document.getElementById("eli").style.display = 'none';  
    } else if (figura == '5') {
        document.getElementById("tri").style.display = 'none';
        document.getElementById("ret").style.display = 'none';
        document.getElementById("cir").style.display = 'none';  
        document.getElementById("trap").style.display = 'none';
        document.getElementById("eli").style.display = 'block';  
    }
}

function eventoClickBotao() {
    let figura;
    let perimetro;
    let area;

    let tipoFigura = document.getElementById("tipoFigura").value;

    if (tipoFigura === '1') {
        let lado1 = parseFloat(document.getElementById("lbLado1").value);
        let lado2 = parseFloat(document.getElementById("lbLado2").value);
        let lado3 = parseFloat(document.getElementById("lbLado3").value);
        figura = new Triangulo(lado1, lado2, lado3);
    } else if (tipoFigura === '2') {
        let base = parseFloat(document.getElementById("lbBase").value);
        let altura = parseFloat(document.getElementById("lbAltura").value);
        figura = new Retangulo(base, altura);
    } else if (tipoFigura === '3') {
        let raio = parseFloat(document.getElementById("lbRaio").value);
        figura = new Circulo(raio);
    } else if (tipoFigura === '4') {
        let baseMaior = parseFloat(document.getElementById("lbBaseMaior").value);
        let baseMenor = parseFloat(document.getElementById("lbBaseMenor").value);
        let alturaTrap = parseFloat(document.getElementById("lbAlturaTrap").value);
        figura = new Trapezio(baseMaior, baseMenor, alturaTrap);
    } else if (tipoFigura === '5') {
        let raioMaior = parseFloat(document.getElementById("lbRaioMaior").value);
        let raioMenor = parseFloat(document.getElementById("lbRaioMenor").value);
        figura = new Elipse(raioMaior, raioMenor);
    }

    if (figura) {
        perimetro = figura.calcularPerimetro();
        area = figura.calcularArea();

        document.getElementById("perimetro").value = perimetro.toFixed(2);
        document.getElementById("area").value = area.toFixed(2);
    } else {
        alert("Por favor, preencha todos os campos necessários.");
    }
}
