import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './pages/init/init.component';
import { GotheyearComponent } from './pages/gotheyear/gotheyear.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentsModule } from './components/components.module';

import {AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    GotheyearComponent,
    // NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
