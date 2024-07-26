import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageItemComponent } from './page/manage-item/manage-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rentalManagementSystem';
}
