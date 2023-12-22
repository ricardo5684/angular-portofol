import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category, } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categoryArray:  Array<any> =[];
  formCategory!: string;
  formStatus: string='Add';
  categoryId!: string;


  constructor(private categoryService: CategoriesService){}
  ngOnInit():void {

    this.categoryService.loadData().subscribe((val)=>{
      console.log(val);
      this.categoryArray =val;
    })
  }

  onSubmit(formData: any){
    let categoriesData: Category = {
      category: formData.value.category,
    }
    if (this.formStatus == 'Add') {
      this.categoryService.saveData(categoriesData);

      formData.reset();
    }else if (this.formStatus == 'Edit') {
      this.categoryService.updateData(this.categoryId,categoriesData);
      this.formCategory='Add';
    }
  }
  onEdit(category:any,id:any){
    this.formCategory =category;
    this.formStatus = 'Edit';
    this.categoryId =id;
  }

  onDelete(id:any) {
    this.categoryService.deleteData (id);
  }
}