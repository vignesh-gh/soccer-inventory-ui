import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductsComponent } from '../products/products.component';
import { NewProductComponent } from '../products/new-product/new-product.component';
import { NewVariantComponent } from '../products/new-variant/new-variant.component';
import { PageNotfoundComponent } from '../page-notfound/page-notfound.component';
const appRoute:Routes=[
    {path:'product',component:ProductsComponent,children:[
        {path:'list',component:ProductListComponent},
        {path:'newProduct',component:NewProductComponent},
        {path:'variant/:id',component:NewVariantComponent}
    ]},
    {path:'page-notfound',component:PageNotfoundComponent}   
];

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}