// app/modules/user_profile/experiments/UserProfileRecentActivityExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    verify = report.bind(entity)(tango);
    options = verify.createExperiment;
    golf = {'kind': 'user', 'id': '2024-11_user_profile_recent_activity', 'label': 'User Profile Recent Activity'};
    tango = {'recentActivityEnabled': false, 'allProfileReactReplyEnabled': false};
    golf['defaultConfig'] = tango;
    yankee = {'id': 1, 'label': 'User Profile Recent Activity Enabled'};
    tango = 1;
    offset = {'recentActivityEnabled': true, 'allProfileReactReplyEnabled': false};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'User Profile Recent Activity and React/Reply Enabled'};
    romeo = {'recentActivityEnabled': true, 'allProfileReactReplyEnabled': true};
    yankee['config'] = romeo;
    offset[1] = yankee;
    golf['treatments'] = offset;
    golf = options.bind(verify)(golf);
    var _closure1_slot0 = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/experiments/UserProfileRecentActivityExperiment.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun80805: for(var _fun80805_ip = 0; ; ) switch(_fun80805_ip) {
 0:
            mike = argFoo;
            entity = mike.location;
            report = mike.autoTrackExposure;
            mike = undefined;
            if(!(report === mike)) { _fun80805_ip = 22; continue _fun80805 }
 20:
            report = true;
 22:
            tango = _closure1_slot0;
            zulu = tango.getCurrentConfig;
            mike = {};
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['getUserProfileRecentActivityExperiment'] = tango;
    mike = function(argFoo) {
        _fun80806: for(var _fun80806_ip = 0; ; ) switch(_fun80806_ip) {
 0:
            mike = argFoo;
            entity = mike.location;
            report = mike.autoTrackExposure;
            mike = undefined;
            if(!(report === mike)) { _fun80806_ip = 22; continue _fun80806 }
 20:
            report = true;
 22:
            tango = _closure1_slot0;
            zulu = tango.useExperiment;
            mike = {};
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['useUserProfileRecentActivityExperiment'] = mike;
    return entity;
})();