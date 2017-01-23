import { WelcomeComponent } from './../components/welcome/welcome';
import { ViewStoreComponent } from '../components/view-store/view-store';
import { ListStoreComponent } from '../components/list-store/list-store';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    ListStoreComponent,
    ViewStoreComponent,
    WelcomeComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListStoreComponent,
    ViewStoreComponent,
    WelcomeComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
