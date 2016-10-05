# Angular2-Ionic2-Meteor-Base

Base project for meteor applications serving a web-application and building to mobile apps. Same meteor-server-backend but different presentation. Web-presentation using Angular 2. Mobile presentation using Ionic 2 with Angular 2

Fork of [Angular2-Meteor-Base Tutorial](https://github.com/bsliran/angular2-meteor-base). See its README.md

I am no expert on Meteor, Angular 2 nor Ionic 2, but I got it (kinda) working. Probably not in the most elegant way. Please help making it better by fork and PR.

## Folder Structure

See [Angular2-Meteor-Base Tutorial - README.md](https://github.com/bsliran/angular2-meteor-base/README.md)

#### Client

The client has extended structure compared to [Angular2-Meteor-Base Tutorial](https://github.com/bsliran/angular2-meteor-base)

`/client/main.ts` bootstraps the application, using Angular 2 modules in `/client/imports/app/app.module.ts` and `/client/imports/mobileapp/app.module.ts` for web and mobile respectively.

Both show a simple collection of data via `.../app.component.ts` and `.../demo/demo.component.ts`. Shared stuff lives in `/client/both`

## Running the application

`npm install`

Now go change `node_modules/ionic-angular/fonts/ionicons.scss`. Replace
```
@import "ionicons-icons";
@import "ionicons-variables";
```
with
```
@import "../../ionicons/dist/scss/ionicons-icons";
@import "../../ionicons/dist/scss/ionicons-variables";
```

Then
* `npm start` to just serve the web-app
* `npm run start-ios` to serve the web-app and run the mobile app in iOS simulator
* `npm run start-android` to serve the web-app and run the mobile app in Android emulator

Running mobile meteor should (and does) start the simulator/emulator, but it is my experience that your are best off starting it yourself beforehand

## Upgrading dependency to ionic-angular

For now, this project uses ionic-angular version 2.0.0-rc.0, and the tricks to make ionic work may be specific to that version. The tricks are
* Fixing `node_modules/ionic-angular/fonts/ionicons.scss` as described above
* Copying non-scss files from `node_modules/ionic-angular/fonts/` to `public/fonts` (guess the ionicons ones could just as well have been copied from `node_modules/ionicons/dist/fonts/`)

Depending on a newer version of ionic-angular in the future may require similar or other fixes, or maybe some of the current fixes can be eliminated

I guess a particular version of ionic-angular matches a particular version/commit of [Ionic 2 App Base](https://github.com/driftyco/ionic2-app-base), and since `/client/imports/ionic.scss` and `/client/imports/ionic.variables.scss` are strongly inspired by [its variable.scss](https://github.com/driftyco/ionic2-app-base/blob/master/src/theme/variables.scss) those two scss's may have to be modified to fit with the "Ionic 2 App Base" version/commit matching the new version on ionic-angular 

## Using this project as a base for your own project

Just fork on [GitHub](https://github.com/steff1193/angular2-ionic2-meteor-base) and go edit. You probably want to start out with the following
* Remove the demo code in `/client`, `/server` and `/both` folers
* Change name in `package.json` and `typings.json`
* Probably more... (remind me, please)

At some point, before going to production, you probably want to
```
meteor remove autopublish
meteor remove insecure
```