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

  custom(options: any) {
    return Swal.fire(options);
  }
}
