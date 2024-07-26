import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageItemComponent } from './page/manage-item/manage-item.component';
import { RentalManageComponent } from './page/rental-manage/rental-manage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageItemComponent,RentalManageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rentalManagementSystem';
}
