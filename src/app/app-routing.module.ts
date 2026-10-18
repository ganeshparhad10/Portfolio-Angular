import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'Ganesh Parhad | Java Backend & Full-Stack Developer' },
  { path: 'skills', component: SkillsComponent, title: 'Skills | Ganesh Parhad' },
  { path: 'skill', redirectTo: 'skills', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects | Ganesh Parhad' },
  { path: 'resume', component: ResumeComponent, title: 'Resume | Ganesh Parhad' },
  { path: 'contact', component: ContactComponent, title: 'Contact Me | Ganesh Parhad' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
