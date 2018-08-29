import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import '@ui-guys/stencil-bs-ui-lib/dist/ui-lib';
import '@ui-guys/form-generator/dist/form-generator';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { HomeComponent } from './pages/Home/home.component';
import { PocComponent } from './pages/Poc/poc.component';
import { PageNotFoundComponent } from './pages/PageNotFound/pageNotFound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'poc', component: PocComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PocComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
