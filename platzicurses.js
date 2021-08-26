class Curso{
    #autor;
    #nombre;
    constructor({
        autor,
        nombre,
    }) {
        this.#autor = autor;
        this.#nombre = nombre;
    }
    get autor() {
        return this.#autor;
      }
    
      get nombre() {
        return this.#nombre;
      }
    set autor(nuevoAutor){
this.#autor=nuevoAutor;
    }
    set nombre(nuevoCur){
        this.#nombre=nuevoCur;
            }
}

class LearningPaths{
    constructor({
        nameLearningPath,
        courses=[],
    }) {
        this.nameLearningPath = nameLearningPath;
        this.courses = courses;
    }
}

class Estudiante{
    constructor({
        nombre,
        edad,
        cursosAprobados=[],
        email,
        facebook,
        twitter,
        instagram,
        rutaAprendizaje=[],
    })
    {
    this.nombre=nombre;
    this.edad=edad;
    this.cursosAprobados=cursosAprobados;
    this.email=email;
    this.socialNetworks={
     facebook,
     twitter,
     instagram,
    }
    this.rutaAprendizaje=rutaAprendizaje;
    
    
}
agreCurso(nuevo){
    this.cursosAprobados.push(nuevo);
}
}
const ultimoCurso= new Curso({
    nombre:"algo",
    autor:"camilo",
});
/**asi se asigna ultimoCurso.autor="otro" y así se muestra ultimoCurso.autor */
const escuelaWeb = new LearningPaths({
    nameLearningPath:"Escuela de Desarrollo Web",
    courses: [
        "Curso de Computación Básica",
        "Curso Básico de Algoritmos y Pensamiento Lógico",
        "Curso de Fundamentos de Ingeniería de Software",
        "Curso de Prework:Configuración de Entorno de Desarrollo en Windows",
        "Curso de Introducción a la Terminal de Linea de Comandos",
        "Curso Profesional de Git y GitHub",
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
        "Curso de Preprocesadore CSS",
        "Curso de Frontend Developer",
        "Curso de Programación Orientada a Objetos",
        "Curso Básico de Programación Orientada a Objetos con JavaScript",
    ]
});
const escuelaDataScience = new LearningPaths({
    nameLearningPath:"Escuela de Data Science",
    courses: [
        "Curso de Análisis de Negocios para Ciencias de Datos",
        "Curso Básico de Phyton",
        "Curso de Introducción a la Terminal de Linea de Comandos",
        "Curso Profesional de Git y GitHub",
        "Curso de Fundamentos de Matemáticas",
        "Curso de Python Intermedio",
        "Curso de Introducción al Pensamiento Computacional con Phyton",
        ultimoCurso.nombre,
    ]
});
const juan2 = new Estudiante({
    nombre:"JuanDC",
    edad: 20,
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    rutaAprendizaje: escuelaDataScience.nameLearningPath,
    
});
juan2.agreCurso("Curso de Fundamentos de Matemáticas",
"Curso de Python Intermedio")
juan2.agreCurso("Curso de Python Intermedio")
console.log(juan2)

/**terminar las clases que faltan y hacer cada una en diferentes arhivos
 * para importarlos en este
 * import Teacher from './teacher.js'
import Course from './course.js'
import Lesson from './lesson.js'
import LearningPath from './learningPath.js'
import Student from './student.js'
 */
