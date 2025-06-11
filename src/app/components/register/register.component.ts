import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Register } from '../../model/class/register';
import { ToasterService } from '../../service/toaster.service';
import { SweetAlertService } from '../../service/sweet-alert.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  isLoading = false;
  registerForm: FormGroup;

  constructor(private authService: AuthService, private toaster: ToasterService, private swal: SweetAlertService) {

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9_]+$/)
      ])
    });
  }

  // Getter methods for form controls

  get email() { return this.registerForm.get('email'); }
  get role() { return this.registerForm.get('role'); }
  get password() { return this.registerForm.get('password'); }
  get username() { return this.registerForm.get('username'); }

  // Form Submission

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      const registerationData: Register = this.registerForm.value;

      this.authService.register(registerationData).subscribe({
        next: (response) => {
          if (response.statusCode === 200) {
            this.swal.success(response.message).then((result) => {
              if (result.isConfirmed) {
                this.registerForm.reset();
                this.isLoading = false;
                // Navigate to another page 
              }
            });
          }
        },
        error: (error) => {
          this.isLoading = false;
          if (error.status === 409) {
            this.toaster.error(error.error.message);
          }
          else {
            this.toaster.error(error.error.message);
          }
        }
      })
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}