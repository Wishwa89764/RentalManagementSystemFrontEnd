import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-item',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './manage-item.component.html',
  styleUrl: './manage-item.component.css'
})
export class ManageItemComponent {
constructor (private http:HttpClient){}

  public itemObj={
    itemID:"",
    itemName:"",
    rentalPerDay:"",
    finePerDay:"",
    availability:""
  }

  addItem(){
    console.log(this.itemObj);
    this.http.post("http://localhost:8080/item-controller/add-item",this.itemObj).subscribe(
      (data)=>{
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    )
  }
}
