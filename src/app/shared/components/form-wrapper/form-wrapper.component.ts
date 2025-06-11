import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  imports: [CommonModule],
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css']
})
export class FormWrapperComponent {
  @Input() formTitle: string = 'Form';
  @Input() formSubTitle?: string;
  @Input() width: string = '400px';
}




// =================================================================

/* -----------------------  Use  --------------------------

<app-form-wrapper formTitle="Login" formSubTitle="Access your account">
  <form>
    <!-- Your input fields here -->

  </form>
</app-form-wrapper>

*/

// =================================================================