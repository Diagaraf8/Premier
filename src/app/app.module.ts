import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireAuthModule } from '@angular/fire/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthServicen } from './auth/auth.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

export const  firebaseConfig = {
  apiKey: "AIzaSyCEajMiBBEYwPJxe4UvmcQY08aphuj3XVo",
  authDomain: "fir-auth-af3ab.firebaseapp.com",
  databaseURL: "https://fir-auth-af3ab.firebaseio.com",
  projectId: "fir-auth-af3ab",
  storageBucket: "fir-auth-af3ab.appspot.com",
  messagingSenderId: "163426275216",
  appId: "1:163426275216:web:96117f888654b8f718ed15",
  measurementId: "G-12Y0MCTDVG"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
