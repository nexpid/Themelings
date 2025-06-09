// app/modules/user_settings/FriendRequestDefaultEveryoneOff.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
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
    oscard = {'id': 1, 'label': 'warning'};
    yankee = {'enabled': true, 'bucket': 1};
    oscard['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = oscard;
    romeon = {'id': 2, 'label': 'defaults'};
    oscard = 2;
    foxtra = {'enabled': true, 'bucket': 2};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot2 = report;
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
    var _closure1_slot3 = tangon;
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
            oscard = _closure1_slot2;
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
            oscard = _closure1_slot3;
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
            tangon = argFoo;
            oscard = _closure1_slot2;
            report = oscard.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = tangon;
            entity = {};
            verify = false;
            entity['autoTrackExposure'] = verify;
            entity = report.bind(oscard)(zuuluu, entity);
            entity = entity.bucket;
            zuuluu = 1;
            entity = zuuluu === entity;
            if(entity) { _fun00004_ip = 92; continue _fun00003 }
 53:
            option = _closure1_slot3;
            golfie = option.getCurrentConfig;
            oscard = {};
            oscard['location'] = tangon;
            report = {};
            report['autoTrackExposure'] = verify;
            report = golfie.bind(option)(oscard, report);
            report = report.bucket;
            entity = zuuluu === report;
 92:
            if(entity) { _fun00004_ip = 125; continue _fun00003 }
 95:
            report = _closure1_slot0;
            michal = _closure1_slot1;
            zuuluu = michal[zuuluu];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.isEligibleForSettingsDefaultsAggregate;
            entity = michal.bind(zuuluu)(tangon);
 125:
            return entity;
        }
    };
    zuuluu['isEligibleForFriendRequestAlerts'] = tangon;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot2;
            report = golfie.useExperiment;
            tangon = {};
            tangon['location'] = michal;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            entity = entity.bucket;
            report = _closure1_slot3;
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
            oscard = argFoo;
            report = _closure1_slot2;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = oscard;
            entity = {};
            option = false;
            entity['autoTrackExposure'] = option;
            entity = tangon.bind(report)(zuuluu, entity);
            entity = entity.bucket;
            golfie = _closure1_slot3;
            report = golfie.useExperiment;
            tangon = {};
            tangon['location'] = oscard;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = option;
            zuuluu = report.bind(golfie)(tangon, zuuluu);
            tangon = zuuluu.bucket;
            golfie = _closure1_slot0;
            michal = _closure1_slot1;
            zuuluu = 1;
            report = michal[zuuluu];
            michal = undefined;
            report = golfie.bind(michal)(report);
            michal = report.useIsEligibleForSettingsDefaultsAggregate;
            michal = michal.bind(report)(oscard);
            entity = zuuluu === entity;
            if(entity) { _fun00008_ip = 122; continue _fun00007 }
 118:
            entity = zuuluu === tangon;
 122:
            if(entity) { _fun00008_ip = 128; continue _fun00007 }
 125:
            entity = michal;
 128:
            return entity;
        }
    };
    zuuluu['useIsEligibleForFriendRequestAlerts'] = michal;
    return entity;
})();