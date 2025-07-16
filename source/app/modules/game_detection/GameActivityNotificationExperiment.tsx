// app/modules/game_detection/GameActivityNotificationExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    option = 0;
    tangon = golfie[option];
    entity = undefined;
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    report = 1;
    tangon = golfie[report];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    romeon = {};
    romeon['FRIENDS_ONLY'] = option;
    tangon = 'FRIENDS_ONLY';
    romeon[option] = tangon;
    romeon['FRIENDS_AND_AFFINITY_USERS'] = report;
    tangon = 'FRIENDS_AND_AFFINITY_USERS';
    romeon[report] = tangon;
    tangon = 2;
    romeon['NONE'] = tangon;
    report = 'NONE';
    romeon[tangon] = report;
    var _closure1_slot2 = romeon;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-04_game_activity_notification', 'label': 'Game Activity Notifications'};
    verify = {};
    offset = romeon.NONE;
    verify['fromUserType'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Show Notifications from Friends Only'};
    verify = {};
    yankee = romeon.FRIENDS_ONLY;
    verify['fromUserType'] = yankee;
    offset['config'] = verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = {'id': 2, 'label': 'Show Notifications from Friends and High Affinity Users'};
    yankee = {};
    romeon = romeon.FRIENDS_AND_AFFINITY_USERS;
    yankee['fromUserType'] = romeon;
    offset['config'] = yankee;
    verify[1] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/game_detection/GameActivityNotificationExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function(argFoo) { // Original name: filterPresencesByGameActivityPreferences
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            oscard = _closure1_slot3;
            report = oscard.getCurrentConfig;
            tangon = {};
            golfie = 'filterPresences';
            tangon['location'] = golfie;
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.fromUserType;
            report = _closure1_slot2;
            report = report.NONE;
            if(!(report !== tangon)) { _fun00002_ip = 123; continue _fun00001 }
 55:
            report = _closure1_slot2;
            report = report.FRIENDS_ONLY;
            if(!(report !== tangon)) { _fun00002_ip = 104; continue _fun00001 }
 69:
            michal = _closure1_slot2;
            michal = michal.FRIENDS_AND_AFFINITY_USERS;
            if(!(michal !== tangon)) { _fun00002_ip = 85; continue _fun00001 }
 83:
            return zuuluu;
 85:
            tangon = zuuluu.filter;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    michal = entity.user;
                    report = _closure1_slot1;
                    tangon = report.isFriend;
                    entity = michal.id;
                    entity = tangon.bind(report)(entity);
                    if(entity) { _fun00004_ip = 56; continue _fun00003 }
 34:
                    tangon = _closure1_slot0;
                    zuuluu = tangon.isHighlyAffinedVCUser;
                    michal = michal.id;
                    entity = zuuluu.bind(tangon)(michal);
 56:
                    return entity;
                }
            };
            michal = tangon.bind(zuuluu)(michal);
            return michal;
 104:
            michal = zuuluu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                zuuluu = _closure1_slot1;
                michal = zuuluu.isFriend;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
 123:
            entity = new Array(0);
            return entity;
        }
    };
    zuuluu['filterPresencesByGameActivityPreferences'] = tangon;
    tangon = function(argFoo) { // Original name: isEligibleForGameActivityNotificationExperiment
        tangon = _closure1_slot3;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        report = argFoo;
        michal['location'] = report;
        michal = zuuluu.bind(tangon)(michal);
        michal = michal.fromUserType;
        entity = _closure1_slot2;
        entity = entity.NONE;
        entity = michal !== entity;
        return entity;
    };
    zuuluu['isEligibleForGameActivityNotificationExperiment'] = tangon;
    michal = function(argFoo) { // Original name: useIsEligibleForGameActivityNotificationExperiment
        tangon = _closure1_slot3;
        zuuluu = tangon.useExperiment;
        michal = {};
        report = argFoo;
        michal['location'] = report;
        michal = zuuluu.bind(tangon)(michal);
        michal = michal.fromUserType;
        entity = _closure1_slot2;
        entity = entity.NONE;
        entity = michal !== entity;
        return entity;
    };
    zuuluu['useIsEligibleForGameActivityNotificationExperiment'] = michal;
    return entity;
})();