// app/modules/game_relationships/FriendTiersUIExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    romeon = true;
    tangon['value'] = romeon;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    verify = oscard.bind(entity)(tangon);
    option = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-01_friend_tiers_ui', 'label': 'Slayer Friend Tiers UI'};
    report = {};
    offset = false;
    report['enabled'] = offset;
    tangon['defaultConfig'] = report;
    yankee = {'id': 1, 'label': 'Enable game friend features in app'};
    report = 1;
    offset = {};
    offset['enabled'] = romeon;
    yankee['config'] = offset;
    offset = new Array(1);
    offset[0] = yankee;
    tangon['treatments'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot0 = tangon;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/game_relationships/FriendTiersUIExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['FriendTiersUIExperiment'] = tangon;
    tangon = function(argFoo) { // Original name: getIsFriendTiersUIEnabled
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
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['getIsFriendTiersUIEnabled'] = tangon;
    michal = function(argFoo) { // Original name: useIsFriendTiersUIEnabled
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
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['useIsFriendTiersUIEnabled'] = michal;
    return entity;
})();