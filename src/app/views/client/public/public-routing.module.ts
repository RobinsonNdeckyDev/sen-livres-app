import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LivresComponent } from './livres/livres.component';

const routes: Routes = [
    { path: '', component: AccueilComponent},
    { path: 'accueil', component: AccueilComponent},
    { path: 'about', component: AboutComponent},
    { path: 'livres', component: LivresComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
