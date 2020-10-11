import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/service/productservice';
import {Product} from 'src/app/shared/model/productmodel';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  addVariant:boolean=false
  productForm:FormGroup;
  prod:Product;
  showError=false;
  constructor(private router:Router,private route:ActivatedRoute,
    private productService:ProductService) { }


  ngOnInit() {
    this.productForm=new FormGroup({
      'name':new FormControl(null),
      'gender':new FormControl('Male'),
      'brand': new FormControl(null)      
    })
  }

  onSaveProduct(formValue){
    
    console.log(formValue);
    this.productService.onAddNewProduct(formValue).subscribe((res:Product)=>{
      console.log("res",res);
     if(res!=null){        
     this.addVariant=true;
     this.productForm.reset();
     setTimeout(()=>{
      this.router.navigate(['../variant',res.id],{relativeTo:this.route})     

     },100);
     }else{
       this.showError=true;
     }
    });
      
  }

  onNavVariant(){   
      this.router.navigate(['../variant'],{relativeTo:this.route})
  }

}
