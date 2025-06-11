import { Component } from '@angular/core';
import { HomeSectionComponent } from "./home-section/home-section.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { FormWrapperComponent } from "./shared/components/form-wrapper/form-wrapper.component";
import { TooltipDirective } from './shared/directives/tooltip.directive';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [HomeSectionComponent, RegisterComponent, LoginComponent, FormWrapperComponent, TooltipDirective, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  submitForm() {
    alert("Hiiii....");
  }
}
