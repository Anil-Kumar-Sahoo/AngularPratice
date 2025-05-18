import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  success(message: string, title: string = 'Success') {
    this.toastr.success(message, title, {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true
    });
  }

  error(message: string, title: string = 'Error') {
    this.toastr.error(message, title, {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true
    });
  }

  warning(message: string, title: string = 'Warning') {
    this.toastr.warning(message, title, {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true
    });
  }

  info(message: string, title: string = 'Info') {
    this.toastr.info(message, title, {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true
    });
  }
}
