// app/modules/reactions/InAppReactionNotificationExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    romeon = true;
    michal['value'] = romeon;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    michal = 0;
    tangon = golfie[michal];
    entity = undefined;
    verify = oscard.bind(entity)(tangon);
    option = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2024-08_reaction_push_notifications_user', 'label': 'In App Notifications for Reactions'};
    yankee = false;
    report = {'enableInAppNotifications': false, 'enableNotificationsForAllReactions': false};
    tangon['defaultConfig'] = report;
    foxtra = {'id': 1, 'label': 'Enable In App Notifications for Reactions (First Reaction)'};
    report = 1;
    offset = {'enableInAppNotifications': true, 'enableNotificationsForAllReactions': false};
    foxtra['config'] = offset;
    offset = new Array(3);
    offset[0] = foxtra;
    foxtra = {'id': 2, 'label': 'Enable In App Notifications for Reactions (All Reactions)'};
    backup = {'enableInAppNotifications': true, 'enableNotificationsForAllReactions': true};
    foxtra['config'] = backup;
    offset[1] = foxtra;
    foxtra = {'id': 3, 'label': 'Enable In App Notifications for Reactions (All Reactions)'};
    backup = {'enableInAppNotifications': true, 'enableNotificationsForAllReactions': true};
    foxtra['config'] = backup;
    offset[2] = foxtra;
    tangon['treatments'] = offset;
    tangon = option.bind(verify)(tangon);
    michal = golfie[michal];
    verify = oscard.bind(entity)(michal);
    option = verify.createExperiment;
    michal = {'kind': 'guild', 'id': '2024-08_reaction_push_notifications_guild', 'label': 'In App Notifications for Reactions (Guild)'};
    offset = {};
    offset['enableInAppNotifications'] = yankee;
    michal['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Enable In App Notifications for Reactions'};
    offset = {};
    offset['enableInAppNotifications'] = romeon;
    yankee['config'] = offset;
    offset = new Array(1);
    offset[0] = yankee;
    michal['treatments'] = offset;
    michal = option.bind(verify)(michal);
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/reactions/InAppReactionNotificationExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['InAppReactionNotificationGuildExperiment'] = michal;
    return entity;
})();