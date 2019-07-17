curso = {
    profesores: [],
    alumnos: [],
};


class Profesores {
    constructor(nombre, materia, edad) {
        this.nombre = nombre,
        this.materia = materia,
        this.edad = edad
    }
};

var profe1 = new Profesores("Ricardo", 'Ingles', '49'),
    profe2 = new Profesores("Jose", 'Educacion Fisica', '25'),
    profe3 = new Profesores("Batia", 'Historia Judia', '234');

var a = [profe1, profe2, profe3];
console.log(a)
curso.profesores = a
console.log(curso)