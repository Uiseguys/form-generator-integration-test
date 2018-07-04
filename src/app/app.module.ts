import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routing';

//order matters! Because 'stencil-bs-ui-lib' has namespace 'index'
import '@ui-guys/stencil-bs-ui-lib';
import '@ui-guys/form-generator/dist/jsonschema';

// Components
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormGeneratorComponent } from './formGenerator/formGenerator.component';
import { DatepickerComponent } from './datepicker/datepicker.component';


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
        FormGeneratorComponent,
        DatepickerComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
