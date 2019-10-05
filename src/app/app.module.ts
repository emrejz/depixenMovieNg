import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { ApiKeyInterceptProvider } from "./services/apiKeyIntercept";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiKeyInterceptProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
