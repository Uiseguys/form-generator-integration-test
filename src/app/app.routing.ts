import { HomeComponent } from './home/home.component';
import { FormGeneratorComponent } from './formGenerator/formGenerator.component';
import { ErrorComponent } from './error/error.component';

export const routes = [
    { path: '', component: HomeComponent },
    { path: 'form-generator', component: FormGeneratorComponent },
    { path: '**', component: ErrorComponent }
];
