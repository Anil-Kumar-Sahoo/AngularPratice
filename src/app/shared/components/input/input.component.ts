import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label = '';
  @Input() type: 'text' | 'password' | 'number' | 'email' = 'text';
  @Input() name = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() pattern?: string;
  @Input() model: any;
}



//  <app-input
//   label="Username"
//   type="text"
//   name="username"
// ></app-input>

// <app-input
//   label="Email"
//   type="email"
//   placeholder="Enter email"
//   formControlName="email"
// ></app-input> 
