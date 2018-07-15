import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//order matters! Because 'stencil-bs-ui-lib' has namespace 'index'
// import '@ui-guys/stencil-bs-ui-lib/dist/uiLib';
// import '@ui-guys/form-generator/dist/formGenerator';

// Components
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
