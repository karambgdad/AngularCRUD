import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: any): void {
        const toastrService = this.injector.get(ToastrService);

        // handle the error here and show an appropriate toast message
        toastrService.error('An error occurreddd. Please try again later.');

        // log the error to the console for debugging
        console.error('An error occurreddd:', error.code);
    }
}