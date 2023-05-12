import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/services/image.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = '';
  fechaP: string = '';
  descripcionP: string = '';
  linkP: string = '';
  urlP: string = '';

  constructor(private proyectoS: ProyectoService, private router: Router, private activatedRouter: ActivatedRoute, public imageService: ImageService) { }

  ngOnInit(): void {  }

  onCreate(): void {
    const proN = new Proyecto(this.nombreP, this.fechaP, this.descripcionP, this.linkP, this.urlP);
    this.proyectoS.save(proN).subscribe(
      data => {
        alert('Se agrego el proyecto');
        this.router.navigate([''])
      }, err => {
        alert("Error al agregar proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
