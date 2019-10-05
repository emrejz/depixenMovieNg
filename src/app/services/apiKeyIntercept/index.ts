import { ApiKeyInterceptService } from "./apiKeyIntercept.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

export const ApiKeyInterceptProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptService, multi: true }
];
