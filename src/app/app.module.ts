import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ user: userReducer }),
    // EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
