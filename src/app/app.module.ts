import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { IndexComponent } from "./components/index/index.component";
import { ProdukDetailComponent } from "./components/produk-detail/produk-detail.component";
import { UsahaDetailComponent } from "./components/usaha-detail/usaha-detail.component";
import { ProdukComponent } from "./components/produk/produk.component";
import { KomentarComponent } from "./components/komentar/komentar.component";
import { KeranjangComponent } from "./components/keranjang/keranjang.component";
import { UsahaBuatComponent } from "./components/usaha-buat/usaha-buat.component";
import { LoginComponent } from "./components/login/login.component";
import { ProdukCartComponent } from "./reusable/produk-cart/produk-cart.component";
import { KomentarFormComponent } from './reusable/komentar-form/komentar-form.component';
import { IndexHeaderComponent } from './components/index-header/index-header.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { ProfileComponent } from './components/myprofile/profile/profile.component';
import { ProfilusahaComponent } from './components/myprofile/profilusaha/profilusaha.component';
import { ProdukusahaComponent } from './components/myprofile/produkusaha/produkusaha.component';
import { PenjualanusahaComponent } from './components/myprofile/penjualanusaha/penjualanusaha.component';
import { UlasanusahaComponent } from './components/myprofile/ulasanusaha/ulasanusaha.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ProdukDetailComponent,
    UsahaDetailComponent,
    ProdukComponent,
    KomentarComponent,
    KeranjangComponent,
    UsahaBuatComponent,
    LoginComponent,
    ProdukCartComponent,
    KomentarFormComponent,
    IndexHeaderComponent,
    MyprofileComponent,
    ProfileComponent,
    ProfilusahaComponent,
    ProdukusahaComponent,
    PenjualanusahaComponent,
    UlasanusahaComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
