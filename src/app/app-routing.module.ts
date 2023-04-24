import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form/form.component';
import { InfoComponent } from './info/info/info.component';
import { HomeComponent } from './home/home/home.component';
import { EditComponent } from './edit/edit/edit.component';
const routes: Routes = [

  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home',component:HomeComponent },
  {path: 'form',component:FormComponent },
  {path: 'clientes',component:InfoComponent},
  {path: 'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
