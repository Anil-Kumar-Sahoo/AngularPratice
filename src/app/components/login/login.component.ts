import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Login } from '../../model/class/login';
import { AuthService } from '../../service/auth.service';
import { ToasterService } from '../../service/toaster.service';
import { SweetAlertService } from '../../service/sweet-alert.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: Login = new Login();
  constructor(private authService: AuthService, private toaster: ToasterService, private swal: SweetAlertService) { }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.authService.login(this.loginForm).subscribe({
        next: (response) => {
          if (response.statusCode === 200) {
            this.swal.success(response.message).then((result) => {
              if (result.isConfirmed) {
                // Navigate to Login
              }
            })
          }
        },
        error: (error) => {
          this.toaster.error(error.error.message)
        }
      })
    } else {
      loginForm.form.markAllAsTouched();
    }
  }
}
