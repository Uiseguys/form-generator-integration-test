import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routing';
import '@ui-guys/form-generator';

// Components
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormGeneratorComponent } from './formGenerator/formGenerator.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpModule,
        FormsModule
    ],
    declarations: [
        ErrorComponent,
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FormGeneratorComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
