// app/modules/user_settings/FriendRequestDefaultEveryoneOff.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = 0;
    report = option[tangon];
    entity = undefined;
    offset = golfie.bind(entity)(report);
    verify = offset.createExperiment;
    report = {'kind': 'user', 'id': '2025-01_friend_requests_alerts', 'label': 'Friend Request Setting Defaults'};
    oscard = {'enabled': false, 'bucket': 0};
    report['defaultConfig'] = oscard;
    romeon = {'id': 1, 'label': 'warning'};
    oscard = 1;
    yankee = {'enabled': true, 'bucket': 1};
    romeon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = {'id': 2, 'label': 'defaults'};
    foxtra = {'enabled': true, 'bucket': 2};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot0 = report;
    tangon = option[tangon];
    offset = golfie.bind(entity)(tangon);
    verify = offset.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-01_friend_requests_alerts_new_users', 'label': 'Friend Request Setting Defaults'};
    yankee = {'enabled': false, 'bucket': 0};
    tangon['defaultConfig'] = yankee;
    romeon = {'id': 1, 'label': 'warning'};
    yankee = {'enabled': true, 'bucket': 1};
    romeon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = {'id': 2, 'label': 'defaults'};
    foxtra = {'enabled': true, 'bucket': 2};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    tangon['treatments'] = yankee;
    tangon = verify.bind(offset)(tangon);
    var _closure1_slot1 = tangon;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/user_settings/FriendRequestDefaultEveryoneOff.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['FriendRequestDefaultEveryoneOff'] = report;
    zuuluu['FriendRequestDefaultEveryoneOffNewUsers'] = tangon;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = _closure1_slot0;
            report = oscard.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = michal;
            entity = {};
            golfie = false;
            entity['autoTrackExposure'] = golfie;
            entity = report.bind(oscard)(zuuluu, entity);
            entity = entity.bucket;
            zuuluu = 2;
            entity = zuuluu === entity;
            if(entity) { _fun00002_ip = 92; continue _fun00001 }
 53:
            oscard = _closure1_slot1;
            report = oscard.getCurrentConfig;
            tangon = {};
            tangon['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = golfie;
            michal = report.bind(oscard)(tangon, michal);
            michal = michal.bucket;
            entity = zuuluu === michal;
 92:
            return entity;
        }
    };
    zuuluu['isEligibleForFriendRequestDefaults'] = tangon;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            oscard = _closure1_slot0;
            report = oscard.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = michal;
            entity = {};
            golfie = false;
            entity['autoTrackExposure'] = golfie;
            entity = report.bind(oscard)(zuuluu, entity);
            entity = entity.bucket;
            zuuluu = 1;
            entity = zuuluu === entity;
            if(entity) { _fun00004_ip = 92; continue _fun00003 }
 53:
            oscard = _closure1_slot1;
            report = oscard.getCurrentConfig;
            tangon = {};
            tangon['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = golfie;
            michal = report.bind(oscard)(tangon, michal);
            michal = michal.bucket;
            entity = zuuluu === michal;
 92:
            return entity;
        }
    };
    zuuluu['isEligibleForFriendRequestAlerts'] = tangon;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot0;
            report = golfie.useExperiment;
            tangon = {};
            tangon['location'] = michal;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            entity = entity.bucket;
            report = _closure1_slot1;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            zuuluu = michal.bucket;
            michal = 2;
            entity = michal === entity;
            if(entity) { _fun00006_ip = 92; continue _fun00005 }
 88:
            entity = michal === zuuluu;
 92:
            return entity;
        }
    };
    zuuluu['useIsEligibleForFriendRequestDefaults'] = tangon;
    michal = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot0;
            report = golfie.useExperiment;
            tangon = {};
            tangon['location'] = michal;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            entity = entity.bucket;
            report = _closure1_slot1;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            zuuluu = michal.bucket;
            michal = 1;
            entity = michal === entity;
            if(entity) { _fun00008_ip = 92; continue _fun00007 }
 88:
            entity = michal === zuuluu;
 92:
            return entity;
        }
    };
    zuuluu['useIsEligibleForFriendRequestAlerts'] = michal;
    return entity;
})();