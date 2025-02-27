import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // ✅ Import RouterModule with routes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'IMM';
}
