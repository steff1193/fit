import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';
import { ExerciseTemplatesComponent } from "./exercise-templates/exercise-templates.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    LoginComponent,
    ExerciseTemplatesComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    LoginComponent,
    ExerciseTemplatesComponent
  ],
  // Providers
  providers: [
  ],
  // Modules
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  // Main Component
  bootstrap: [ IonicApp ]
})
export class AppModule {}
