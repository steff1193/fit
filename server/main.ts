import { Main } from './imports/server-main/main';

declare module ServiceConfiguration {
    var configurations: any;
};

Meteor.startup(function() {
    const mainInstance = new Main();
    mainInstance.start();

    ServiceConfiguration.configurations.remove({
        service: "facebook"
    });
    ServiceConfiguration.configurations.upsert(
        { service: "facebook" },
        {
            $set: {
                "appId": Meteor.settings["oauth"].facebook.appId,
                "secret": Meteor.settings["oauth"].facebook.secret,
                loginStyle: "popup"
            }
        }
    );

});