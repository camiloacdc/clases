function videoPLay(id){
const urlSecreta="http://camilo.com/"+id;
console.log("reproduciendo desde aquí "+ urlSecreta);
}
function videoStop(id){
    const urlSecreta="http://camilo.com/"+id;
    console.log("se detuvo desde aquí "+ urlSecreta);
    }

export class PlatziClass {
  constructor({ nombre, videoId }) {
    this.nombre = nombre;
    this.videoId = videoId;
  }
  reproducir(){
    videoPLay(this.videoId)
  }
  pausar(){
    videoStop(this.videoId)
  }
}
