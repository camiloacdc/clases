function student(nombre,edad,cursosAprobados){
this.nombre=nombre,
this.edad=edad,
this.cursosAprobados=cursosAprobados
}
student.prototype.aprobarCurso=function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)
}
student.prototype.mostrarObjeto= function(){
    
    Object.entries(this).forEach(([key, value]) => {
        if (key!="cursosAprobados"){console.log(`${key} : ${value}`)}
        });
    }
    
student.prototype.aprobados= function(){
        let cursos =   this.cursosAprobados.length 
    console.log(` Tienes ${cursos} aprobados`) 
    this.cursosAprobados.map((curso)=>{
        console.log(`${curso} `)
        });
        
    }

const estudiante=new student("SAntiago",20,["curso de css","algo"]);
estudiante.aprobarCurso("curso de javascript")

estudiante.mostrarObjeto()
estudiante.aprobados()

const mostrar= Object.keys(estudiante).map(function(key, index){
    console.log(`${key}:${index}`)
    })

    const camilo={
        nombre:"Camilo Alfonso Cubides Guevara",
        age:32,
        licencia:"expert",
        cursosAprobados:[
            "curso basico de javacript",
            "curso practico de javascript",
            "curso de mesfix"
        ],
    
    };
const mostrar= Object.entries(camilo).map(function(key, index){
console.log(`${key}:${index}`)
})
const nobmreCursos=camilo.cursosAprobados.map((curso)=>{
    console.log(`${curso} `)
})

//creando clases con constructor

class Empleado{
    constructor({
        nombre,
        edad,
        cursosAprobados=[],
        email,
        facebook,
    })
    {
    this.nombre=nombre;
    this.edad=edad;
    this.cursosAprobados=cursosAprobados;
    this.email=email;
    this.facebook=facebook;
    
}
agreCurso(nuevo){
    this.cursosAprobados.push(nuevo);
}
}

const ejecutivo= new Empleado({
    edad:32,
    nombre:"camilo",
    facebook:"camiloacdc"
});
console.log(ejecutivo)