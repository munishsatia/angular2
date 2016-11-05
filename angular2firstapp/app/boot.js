// import {bootstrap} from './angular2/platform/browser'
// import {App} from "./app.component"
"use strict";
// bootstrap(App);
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=boot.js.map