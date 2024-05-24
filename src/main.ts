import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ApiService } from './app/service/api.service';

bootstrapApplication(AppComponent, {
    providers: [
        ApiService,
        provideRouter(routes),
        provideHttpClient()
    ]
}).catch((err) =>
    console.error(err)
);
