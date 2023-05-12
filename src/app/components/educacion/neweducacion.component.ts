import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  urlE: string = '';

  constructor(private educacionS: EducacionService, private router: Router, private activatedRouter: ActivatedRoute, public imageService: ImageService) { }

  ngOnInit() {
  }


  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.urlE);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert('Se agrego con éxito la educacion');
        this.router.navigate(['']);
      }, err => {
        alert('Error al agregar');
        this.router.navigate(['']);
      }
    )
  }


}
