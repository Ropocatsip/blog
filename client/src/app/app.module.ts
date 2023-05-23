import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BlogSeaComponent } from './component/blog-sea/blog-sea.component';
import { BlogPistachioComponent } from './component/blog-pistachio/blog-pistachio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MemberComponent } from './component/member/member.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { PolicyComponent } from './component/policy/policy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogSeaComponent,
    BlogPistachioComponent,
    MemberComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('978330329246-q8hmevbhghu95lv23lu149m6sm0lcq3m.apps.googleusercontent.com') // your client id
          }
        ],
      } as SocialAuthServiceConfig,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
