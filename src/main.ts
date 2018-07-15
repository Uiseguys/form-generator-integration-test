import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements as uiLib } from '@ui-guys/stencil-bs-ui-lib/dist/uiLib';
import { defineCustomElements as formGen } from '@ui-guys/form-generator/dist/formGenerator';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
uiLib(window);
formGen(window);
