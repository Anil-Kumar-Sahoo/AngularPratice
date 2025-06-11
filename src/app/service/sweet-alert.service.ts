import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  success(title: string, text?: string) {
    return Swal.fire({
      title,
      text,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  error(title: string, text?: string) {
    return Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }

  info(title: string, text?: string) {
    return Swal.fire({
      title,
      text,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }

  warning(title: string, text?: string) {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      confirmButtonText: 'OK'
    });
  }

  confirm(title: string, text: string, confirmText: string = 'Yes', cancelText: string = 'Cancel') {
    return Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText
    });
  }

  toast(message: string, icon: 'success' | 'error' | 'info' | 'warning' = 'info', duration = 3000) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      icon,
      title: message,
      showConfirmButton: false,
      timer: duration,
      timerProgressBar: true,
    });
  }

  autoClose(title: string, text?: string, icon: 'success' | 'error' | 'info' | 'warning' = 'info', duration = 2000) {
    return Swal.fire({
      title,
      text,
      icon,
      timer: duration,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }

  prompt(title: string, inputLabel?: string, placeholder?: string, inputValue?: string) {
    return Swal.fire({
      title,
      input: 'text',
      inputLabel,
      inputPlaceholder: placeholder,
      inputValue,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
    });
  }

  custom(options: any) {
    return Swal.fire(options);
  }
}
