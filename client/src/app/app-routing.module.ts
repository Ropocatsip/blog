import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlogPistachioComponent } from './component/blog-pistachio/blog-pistachio.component';
import { BlogSeaComponent } from './component/blog-sea/blog-sea.component';
import { MemberComponent } from './component/member/member.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'blog-pistachio', component: BlogPistachioComponent },
  { path: 'blog-sea-or-mountain', component: BlogSeaComponent },
  { path: 'member', component: MemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
