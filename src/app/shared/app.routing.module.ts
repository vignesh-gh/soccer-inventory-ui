import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductsComponent } from '../products/products.component';
import { NewProductComponent } from '../products/new-product/new-product.component';
import { NewVariantComponent } from '../products/new-variant/new-variant.component';
import { PageNotfoundComponent } from '../page-notfound/page-notfound.component';
import { StcoksComponent } from '../stcoks/stcoks.component';
import { VariantListComponent } from '../stcoks/variant-list/variant-list.component';
import { NewStocksComponent } from '../stcoks/new-stocks/new-stocks.component';
import { OrdersComponent } from '../orders/orders.component';
import { OrderListComponent } from '../orders/order-list/order-list.component';
const appRoute:Routes=[
    {path:'',component:ProductListComponent,pathMatch:'full'},
    {path:'product',component:ProductsComponent,children:[
        {path:'list',component:ProductListComponent},
        {path:'newProduct',component:NewProductComponent},
        {path:'variant/:id',component:NewVariantComponent}
    ]},
    {path:'stocks',component:StcoksComponent,children:[
        {path:'variantList',component:VariantListComponent},
        {path:'newStock/:id',component:NewStocksComponent}
    ]},
    {path:'order',component:OrdersComponent,children:[
        {path:'list',component:OrderListComponent}
    ]},
    {path:'page-notfound',component:PageNotfoundComponent},
    {path:'**',redirectTo:'page-notfound'}
     
];

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}