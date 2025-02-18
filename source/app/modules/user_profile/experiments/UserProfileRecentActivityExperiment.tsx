// app/modules/user_profile/experiments/UserProfileRecentActivityExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    verify = report.bind(entity)(tangon);
    option = verify.createExperiment;
    golfie = {'kind': 'user', 'id': '2024-11_user_profile_recent_activity', 'label': 'User Profile Recent Activity'};
    tangon = {'recentActivityEnabled': false, 'allProfileReactReplyEnabled': false};
    golfie['defaultConfig'] = tangon;
    yankee = {'id': 1, 'label': 'User Profile Recent Activity Enabled'};
    tangon = 1;
    offset = {'recentActivityEnabled': true, 'allProfileReactReplyEnabled': false};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'User Profile Recent Activity and React/Reply Enabled'};
    romeon = {'recentActivityEnabled': true, 'allProfileReactReplyEnabled': true};
    yankee['config'] = romeon;
    offset[1] = yankee;
    golfie['treatments'] = offset;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot0 = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/experiments/UserProfileRecentActivityExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            report = michal.autoTrackExposure;
            michal = undefined;
            if(!(report === michal)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            report = true;
 22:
            tangon = _closure1_slot0;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['getUserProfileRecentActivityExperiment'] = tangon;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            report = michal.autoTrackExposure;
            michal = undefined;
            if(!(report === michal)) { _fun00004_ip = 22; continue _fun00003 }
 20:
            report = true;
 22:
            tangon = _closure1_slot0;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useUserProfileRecentActivityExperiment'] = michal;
    return entity;
})();