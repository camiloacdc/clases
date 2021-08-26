class Comment {
  #likes;
  #content;
  #tipoEstudiante;
  #nombreEstudiante;
  constructor({
    likes= 0,
    content,
    tipoEstudiante = "estudiante",
    nombreEstudiante,
  }) {
    this.#likes = likes;
    this.#content = content;
    this.#tipoEstudiante = tipoEstudiante;
    this.#nombreEstudiante = nombreEstudiante;
  }
  publicar() {
    console.log(`${this.#nombreEstudiante} (${this.#tipoEstudiante})`);
    console.log(`${this.#likes} likes`);
    console.log(`${this.#content} `);
  }
}

class Curso {
  #autor;
  #nombre;
  #isFree;
  #lang;
  constructor({ autor, nombre, isFree = false, lang = "spanish" }) {
    this.#autor = autor;
    this.#nombre = nombre;
    this.#isFree = isFree;
    this.#lang = lang;
  }
  get autor() {
    return this.#autor;
  }
  get nombre() {
    return this.#nombre;
  }
  set autor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }
  set nombre(nuevoCur) {
    this.#nombre = nuevoCur;
  }
  set isFree(state) {
    this.#isFree = state;
  }
  get isFree() {
    return this.#isFree;
  }
  set lang(language) {
    this.#lang = language;
  }
  get lang() {
    return this.#lang;
  }
}

class LearningPaths {
  constructor({ nameLearningPath, courses = [] }) {
    this.nameLearningPath = nameLearningPath;
    this.courses = courses;
  }
}

class Estudiante {
  constructor({
    nombre,
    edad,
    cursosAprobados = [],
    email,
    facebook,
    twitter,
    instagram,
    rutaAprendizaje = [],
  }) {
    this.nombre = nombre;
    this.edad = edad;
    this.cursosAprobados = cursosAprobados;
    this.email = email;
    this.socialNetworks = {
      facebook,
      twitter,
      instagram,
    };
    this.rutaAprendizaje = rutaAprendizaje;
  }
  agreCurso(nuevo) {
    this.cursosAprobados.push(nuevo);
  }
}

class FreeStudent extends Estudiante {
  constructor(props) {
    super(props);
  }
  agreCurso(nCurse) {
    if (nCurse.isFree) {
      this.cursosAprobados.push(nCurse);
    } else {
      console.warn(`lo sentimos ${this.nombre} no puedes ver este curso`);
    }
  }

  publicarComentario(comentarioIn) {
    const comentario = new Comment({
      content: comentarioIn,
      nombreEstudiante: this.nombre,
    });
    comentario.publicar();
  }
}
class BasicStudent extends Estudiante {
  constructor(props) {
    super(props);
  }
  agreCurso(nCurse) {
    if (nCurse.lang !== "english") {
      this.cursosAprobados.push(nCurse.nombre);
    } else {
      console.warn(`lo sentimos ${this.nombre} no puedes ver cursos en ingles`);
    }
  }
}
class ExpertStudent extends Estudiante {
  constructor(props) {
    super(props);
  }
}
class TeacherStudent extends Estudiante {
    constructor(props) {
      super(props);
    }
    publicarComentario(comentarioIn) {
        const comentario = new Comment({
            content: comentarioIn,
          nombreEstudiante: this.nombre,
          tipoEstudiante:"profesor"
        });
        comentario.publicar();
      }
  }
const ultimoCurso = new Curso({
  nombre: "algo",
  autor: "camilo",
});

const ultimoCurso2 = new Curso({
  nombre: "gratis",
  autor: "camilo",
  isFree: true,
  lang: "english",
});
/**asi se asigna ultimoCurso.autor="otro" y así se muestra ultimoCurso.autor */
const escuelaWeb = new LearningPaths({
  nameLearningPath: "Escuela de Desarrollo Web",
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
  ],
});
const escuelaDataScience = new LearningPaths({
  nameLearningPath: "Escuela de Data Science",
  courses: [
    "Curso de Análisis de Negocios para Ciencias de Datos",
    "Curso Básico de Phyton",
    "Curso de Introducción a la Terminal de Linea de Comandos",
    "Curso Profesional de Git y GitHub",
    "Curso de Fundamentos de Matemáticas",
    "Curso de Python Intermedio",
    "Curso de Introducción al Pensamiento Computacional con Phyton",
    ultimoCurso.nombre,
  ],
});
const juan2 = new BasicStudent({
  nombre: "JuanDC",
  edad: 20,
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  rutaAprendizaje: escuelaDataScience.nameLearningPath,
});
const juanCamilo = new FreeStudent({
  nombre: "JuanDC",
  edad: 20,
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  rutaAprendizaje: escuelaDataScience.nameLearningPath,
});
const importante = new TeacherStudent({
    nombre: "el nuevo",
    edad: 30,
    email: "otro@juanito.com",
    twitter: "otro",
   
  });

/**terminar las clases que faltan y hacer cada una en diferentes arhivos
 * para importarlos en este
 * import Teacher from './teacher.js'
import Course from './course.js'
import Lesson from './lesson.js'
import LearningPath from './learningPath.js'
import Student from './student.js'
 */
