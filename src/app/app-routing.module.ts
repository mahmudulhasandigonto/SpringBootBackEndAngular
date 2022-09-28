import { TitlesloganComponent } from './components/titleslogan/titleslogan.component';
import { BrandaddComponent } from './components/brandadd/brandadd.component';
import { ProductaddComponent } from './components/productadd/productadd.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { CatlistComponent } from './components/catlist/catlist.component';
import { CataddComponent } from './components/catadd/catadd.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SlideraddComponent } from './components/slideradd/slideradd.component';
import { SliderlistComponent } from './components/sliderlist/sliderlist.component';
import { SocialComponent } from './components/social/social.component';
import { BrandlistComponent } from './components/brandlist/brandlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', redirectTo: '', pathMatch: 'full' },
  { path: 'admin', component: HomeComponent },
  { path: 'admin/catadd', component: CataddComponent },
  { path: 'admin/catlist', component: CatlistComponent },
  { path: 'admin/changepassword', component: ChangepasswordComponent },
  { path: 'admin/copyright', component: CopyrightComponent },
  { path: 'admin/productadd', component: ProductaddComponent },
  { path: 'admin/productlist', component: ProductlistComponent }, //
  { path: 'admin/slideradd', component: SlideraddComponent },
  { path: 'admin/sliderlsit', component: SliderlistComponent },
  { path: 'admin/social', component: SocialComponent },
  { path: 'admin/titleslogan', component: TitlesloganComponent },
  { path: 'admin/brandadd', component: BrandaddComponent },
  { path: 'admin/brandlist', component: BrandlistComponent },



  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
