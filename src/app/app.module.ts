import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgtemplateDemoComponent } from './components/ngtemplate-demo/ngtemplate-demo.component';
import { CoreModule } from './core/core.module';
import { JwtInterceptor } from './core/interceptorHelper/interceptor.interceptor';
import { TokenService } from './core/TokenServices/token.service';



@NgModule({
  declarations: [
    AppComponent,
    NgtemplateDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [TokenService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
