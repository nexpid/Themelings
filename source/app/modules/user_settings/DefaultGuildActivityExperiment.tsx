// app/modules/user_settings/DefaultGuildActivityExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    foxtra = true;
    tangon['value'] = foxtra;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = 0;
    report = option[tangon];
    entity = undefined;
    offset = golfie.bind(entity)(report);
    verify = offset.createExperiment;
    report = {'kind': 'user', 'id': '2025-01_default_activity_status', 'label': 'Guild activity status defaults'};
    oscard = {};
    romeon = false;
    oscard['enabled'] = romeon;
    report['defaultConfig'] = oscard;
    backup = {'id': 1, 'label': 'Enable new defaults'};
    oscard = 1;
    yankee = {};
    yankee['enabled'] = foxtra;
    backup['config'] = yankee;
    yankee = new Array(1);
    yankee[0] = backup;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot0 = report;
    tangon = option[tangon];
    offset = golfie.bind(entity)(tangon);
    verify = offset.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-01_default_activity_status_new_users', 'label': 'Guild activity status defaults'};
    yankee = {};
    yankee['enabled'] = romeon;
    tangon['defaultConfig'] = yankee;
    romeon = {'id': 1, 'label': 'Enable new defaults'};
    yankee = {};
    yankee['enabled'] = foxtra;
    romeon['config'] = yankee;
    yankee = new Array(1);
    yankee[0] = romeon;
    tangon['treatments'] = yankee;
    tangon = verify.bind(offset)(tangon);
    var _closure1_slot1 = tangon;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/user_settings/DefaultGuildActivityExperiment.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['DefaultGuildActivityExperiment'] = report;
    zuuluu['DefaultGuildActivityExperimentNewUsers'] = tangon;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot0;
            report = golfie.getCurrentConfig;
            tangon = {};
            tangon['location'] = michal;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            entity = entity.enabled;
            if(entity) { _fun00002_ip = 79; continue _fun00001 }
 45:
            report = _closure1_slot1;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = michal.enabled;
 79:
            return entity;
        }
    };
    zuuluu['isEligibleForDefaultGuildActivity'] = tangon;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            entity = entity.enabled;
            report = _closure1_slot1;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            michal = michal.enabled;
            if(entity) { _fun00004_ip = 82; continue _fun00003 }
 79:
            entity = michal;
 82:
            return entity;
        }
    };
    zuuluu['useIsEligibleForDefaultGuildActivity'] = michal;
    return entity;
})();