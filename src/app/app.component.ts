import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from "./home-section/home-section.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

@Component({
  selector: 'app-root',
  imports: [HomeSectionComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
