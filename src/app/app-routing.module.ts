import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { NewPostsComponent } from './posts/new-post/new-posts.component';


const routes: Routes = [
   {path: '',component:DashboardComponent},
   {path: 'category',component: CategoriesComponent},
   {path:'posts',component:AllPostsComponent},
   {path:'posts/new',component:NewPostsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
