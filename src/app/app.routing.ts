import { HomeComponent } from './Home/home.component';
import { FormGeneratorComponent } from './FormGenerator/formGenerator.component';
import { DatepickerComponent } from './Datepicker/datepicker.component';
import { ErrorComponent } from './Error/error.component';

export const routes = [
    { path: '', component: HomeComponent },
    { path: 'form-generator', component: FormGeneratorComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: '**', component: ErrorComponent }
];
