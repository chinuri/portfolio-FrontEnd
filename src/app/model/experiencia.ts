export class Experiencia {
  id?: number;
  nombreE: string;
  descripcionE: string;
  urlEx: string;

  constructor(nombreE: string, descripcionE: string, urlEx: string) {
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.urlEx = urlEx;
  }

}
