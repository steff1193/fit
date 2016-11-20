import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';
import { ExerciseTemplatesComponent } from "./exercise-templates/exercise-templates.component";
import { LoginComponent } from "./login/login.component";
import { WorkoutsComponent } from "./workouts/workouts.component";
import { ExerciseComponent } from "./exercise/exercise.component";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    LoginComponent,
    WorkoutsComponent,
    ExerciseTemplatesComponent,
    ExerciseComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    LoginComponent,
    WorkoutsComponent,
    ExerciseTemplatesComponent,
    ExerciseComponent
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
