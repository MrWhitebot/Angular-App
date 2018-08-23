import {
  Component,
  OnInit,
  Output
} from '@angular/core';
import {
  PaisesService
} from '../paises-service.service';
import {
  Pais
} from '../pais';
@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {
  paises: Pais[];
  mostrarInformacion: Boolean = false;
  constructor(private paisesService: PaisesService) {}

  ngOnInit() {
    this.paises = this.paisesService.getAll();
  }
  ordenaPaises() {
    this.paises = this.paisesService.getOrdenados();
  }
  mostrarInfo(pais) {
    console.log(pais);

     if (this.mostrarInformacion == false) {
      this.mostrarInformacion = true;
    }else{
      this.mostrarInformacion = false;
    }

  }
  onChange($event) {
    this.paises = this.paisesService.getByPoblacion($event.target.value);
  }

  anadirPais($event){
    let nuevoPais : Pais;
     nuevoPais = $event as Pais;
     this.paisesService.anadirPais(nuevoPais);
}

}
