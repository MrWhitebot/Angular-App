import {
  Injectable
} from '@angular/core';
import {
  Pais
} from './pais';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  PAISES = [
    new Pais(3, "Argentina", "argentina.png", 43131966, "https://es.wikipedia.org/wiki/Argentina","Argentina, llamada oficialmente República Argentina, es un país soberano de América del Sur, ubicado en el extremo sur y sudeste de dicho subcontinente. Adopta la forma de gobierno republicana, democrática, representativa y federal."),
    new Pais(2, "Bélgica", "belgica.png", 11250659, "https://es.wikipedia.org/wiki/B%C3%A9lgica","Bélgica, oficialmente Reino de Bélgica , es un país soberano, miembro de la Unión Europea, situado en el noroeste europeo."),
    new Pais(1, "España", "espania.png", 46524949, "https://es.wikipedia.org/wiki/Espa%C3%B1a","España, también denominado Reino de España, es un país transcontinental, miembro de la Unión Europea, constituido en Estado social y democrático de derecho y cuya forma de gobierno es la monarquía parlamentaria. Su territorio, con capital en Madrid, está organizado en diecisiete comunidades autónomas y dos ciudades autónomas, formadas estas, a su vez, por cincuenta provincias."),
    new Pais(4, "Suazilandia", "suazilandia.png", 1018449, "https://es.wikipedia.org/wiki/Suazilandia","Suazilandia, cuyo nombre oficial es Reino de Suazilandia, es un pequeño estado soberano sin salida al mar situado en África Austral o del Sur, en las estribaciones orientales de los montes Drakensberg, entre Sudáfrica y Mozambique, cuya forma de gobierno es la monarquía absolutista."),
  ];
  

  constructor() {}

  getAll(): Pais[] {
    // Método que devuelve todos los países
    return this.PAISES;

  }
  getByPoblacion(poblacion: number): Pais[] {
    // Método que devuelve los países que tengan una población mayor o igual a la especificada por parámetro
    return this.PAISES.filter((elemento => elemento.poblacion >= poblacion));
  }
  getOrdenados(): Pais[] {
    // Método que devuelve los países ordenados por ID
    return this.PAISES.sort((n1, n2) => n1.id - n2.id);
  }

  anadirPais(pais : Pais){
    pais.id = this.PAISES.length+1;
    this.PAISES.push(pais);
}
}
