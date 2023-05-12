import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewSkillComponent } from './components/hss/new-skill.component';
import { EditSkillComponent } from './components/hss/edit-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, // Ruta por defecto
  { path: 'login', component: LoginComponent}, // Ruta para el login
  { path: 'nuevaexp', component: NewExperienciaComponent}, // Ruta para crear una nueva experiencia
  { path: 'editexp/:id', component: EditExperienciaComponent}, // Ruta para editar una experiencia
  { path: 'nuevaedu', component: NeweducacionComponent}, // Ruta para crear una nueva educacion
  { path: 'editedu/:id', component: EditeducacionComponent}, // Ruta para editar una educacion
  { path: 'newskill', component: NewSkillComponent}, // Ruta para crear una nueva habilidad
  { path: 'editskill/:id', component: EditSkillComponent}, // Ruta para editar una habilidad
  { path: 'editacercade/:id', component: EditAcercaDeComponent}, // Ruta para editar la informacion de la pagina acerca de
  { path: 'newproyecto', component: NewProyectoComponent}, // Ruta para crear un nuevo proyecto
  { path: 'editproyecto/:id', component: EditProyectoComponent} // Ruta para editar un proyecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
