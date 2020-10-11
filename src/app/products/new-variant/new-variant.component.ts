import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Variant } from 'src/app/shared/model/variant.model';
import { VaraintService } from 'src/app/shared/service/variantService';
import { Product } from 'src/app/shared/model/productmodel';
import { ProductService } from 'src/app/shared/service/productservice';

@Component({
  selector: 'app-new-variant',
  templateUrl: './new-variant.component.html',
  styleUrls: ['./new-variant.component.css']
})
export class NewVariantComponent implements OnInit {
  variant:boolean=false;
  variantForm:FormGroup;
  id:number;
  products:Product[]=[];
  secPproducts:Product[]=[];
  product:Product;
  productName:String;
  constructor(private route:ActivatedRoute,private variantService:VaraintService,
    private productService:ProductService) { }

  ngOnInit() {
    this.route.params.subscribe((param)=>{
      this.id=+param['id'];
    })
    this.variantForm=new FormGroup({
      'productName':new FormControl(null),
      'productBrand':new FormControl(null),
      'productGender':new FormControl(null),
      'color':new FormControl(null),
      'size':new FormControl(null),
      'price':new FormControl(null)
    });

   this.getProductById(this.id);
  }

  onsaveVariant(formValue){
    var newVariant= new Variant(
      0,this.id,formValue.color,formValue.size,formValue.price,'','','',''
    ); 
    this.variantService.addNewVariant(newVariant).subscribe((res)=>{
      if(res!=null){
        this.variant=true;
        console.log(newVariant);
        this.variantForm.reset();
      }
    });
  }

  getProductById(id){
    this.productService.getProductById(id).subscribe((data:Product)=>{
      console.log("prodbyid",data);
      if(data!=null){        
        this.products.push(data);
      }
    })
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe((data:Product[])=>{
      if(data!=null){
        this.products=data;
        console.log(data[0].name,"oppppp")
         this.productService.getProductByName(data[0].name)
         .subscribe((data:Product)=>{
          if(data!=null){  
            this.secPproducts.push(data);      }
        })
      }
    })
  };



}
