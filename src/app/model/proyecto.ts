export class Proyecto {
  id: number;
  nombreP: string;
  fechaP: string;
  descripcionP: string;
  linkP: string;
  urlP: string;

  constructor(nombreP: string, fechaP: string, descripcionP: string, linkP: string, urlP: string) {
    this.nombreP = nombreP;
    this.fechaP = fechaP;
    this.descripcionP = descripcionP;
    this.linkP = linkP;
    this.urlP = urlP;
  }

}