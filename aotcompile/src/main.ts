import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './aot/app/app.module.ngfactory';

//import { AppModule } from './app/app.module';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
