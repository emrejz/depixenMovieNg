import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

@Injectable()
export class ApiKeyInterceptService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      // setHeaders: {
      //   apiKey: "1ae30c64"
      // }
      setParams: { apiKey: "1ae30c64" }
    });
    return next.handle(authReq);
  }

  constructor() {}
}
