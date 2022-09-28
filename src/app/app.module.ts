import { TitlesloganComponent } from './components/titleslogan/titleslogan.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { CataddComponent } from './components/catadd/catadd.component';
import { CatlistComponent } from './components/catlist/catlist.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ProductaddComponent } from './components/productadd/productadd.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SlideraddComponent } from './components/slideradd/slideradd.component';
import { SliderlistComponent } from './components/sliderlist/sliderlist.component';
import { SocialComponent } from './components/social/social.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrandaddComponent } from './components/brandadd/brandadd.component';
import { BrandlistComponent } from './components/brandlist/brandlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InboxComponent,
    CataddComponent,
    CatlistComponent,
    SidebarComponent,
    ChangepasswordComponent,
    CopyrightComponent,
    ProductaddComponent,
    ProductlistComponent,
    SlideraddComponent,
    SliderlistComponent,
    SocialComponent,
    TitlesloganComponent,
    BrandaddComponent,
    BrandlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
