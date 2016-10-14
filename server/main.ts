import { Main } from './imports/server-main/main';

Meteor.startup(function() {
    const mainInstance = new Main();
    mainInstance.start();
});