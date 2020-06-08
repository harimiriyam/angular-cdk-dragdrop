import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DragDropComponent} from "./components/drag-drop/drag-drop.component";


const routes: Routes = [{
  path : "", component : DragDropComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
