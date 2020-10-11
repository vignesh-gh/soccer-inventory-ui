import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule,MatSidenavModule,MatTableModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {AppRoutingModule} from 'src/app/shared/app.routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { NewVariantComponent } from './products/new-variant/new-variant.component';
import { HeaderComponent } from './header/header.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProductService } from './shared/service/productservice';
import { ProdcutHttpService } from './shared/dao/producthttpservice';
import {VariantHttpService} from 'src/app/shared/dao/variantHttpService';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    NewProductComponent,
    NewVariantComponent,
    HeaderComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService,ProdcutHttpService,VariantHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
