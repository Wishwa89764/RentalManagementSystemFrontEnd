import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rental-manage',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './rental-manage.component.html',
  styleUrl: './rental-manage.component.css'
})
export class RentalManageComponent {
  constructor (private http:HttpClient){}

  public itemDetailObj={
    itemCode:"",
    itemQty:"",
    returnDate:""
  }

  generateRental(){
    this.http.post("http://localhost:8080/rental-controller/generate-rental",this.itemDetailObj).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }
}
