import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IndexComponent } from './components/index/index.component'
import { ProdukComponent } from './components/produk/produk.component'
import { ProdukDetailComponent } from './components/produk-detail/produk-detail.component'
import { UsahaDetailComponent } from './components/usaha-detail/usaha-detail.component'
import { KeranjangComponent } from './components/keranjang/keranjang.component'
import { UsahaBuatComponent } from './components/usaha-buat/usaha-buat.component'
import { LoginComponent } from "./components/login/login.component"

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'produk/:id',
    component: ProdukDetailComponent
  },
  {
    path: 'usaha/:id',
    component: UsahaDetailComponent
  },
  {
    path: 'produk',
    component: ProdukComponent
  },
  {
    path: 'keranjang',
    component: KeranjangComponent
  },
  {
    path: 'buatUsaha',
    component: UsahaBuatComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
