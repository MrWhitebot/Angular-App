export class Pais{
    id: number;
    nombre: string;
    imagen: string;
    poblacion: number;
    url: string;
    desc: string;
    constructor(id: number, nombre: string, imagen: string, poblacion: number, url: string, desc: string){
      this.id = id;
      this.nombre = nombre;
      this.imagen = imagen;
      this.poblacion = poblacion;
      this.url = url;
      this.desc = desc;
    }
  }