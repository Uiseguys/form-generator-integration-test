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
import { ErrorComponent } from './Error/error.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { FormGeneratorComponent } from './FormGenerator/formGenerator.component';
import { DatepickerComponent } from './Datepicker/datepicker.component';


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
