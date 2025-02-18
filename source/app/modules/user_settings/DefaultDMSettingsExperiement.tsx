// app/modules/user_settings/DefaultDMSettingsExperiement.tsx
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
    report = {'kind': 'user', 'id': '2025-02_dm_defaults_new_users', 'label': 'Default DM Settings - New Users'};
    oscard = {'enabled': false, 'dmOffByDefault': false, 'messageRequestOnByDefault': false};
    report['defaultConfig'] = oscard;
    romeon = {'id': 1, 'label': 'DM Off by Default'};
    oscard = 1;
    yankee = {'enabled': true, 'dmOffByDefault': true, 'messageRequestOnByDefault': false};
    romeon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = {'id': 2, 'label': 'Message Reqeust On by Default'};
    foxtra = {'enabled': true, 'dmOffByDefault': false, 'messageRequestOnByDefault': true};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot0 = report;
    tangon = option[tangon];
    offset = golfie.bind(entity)(tangon);
    verify = offset.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-02_dm_defaults', 'label': 'Default DM Settings'};
    yankee = {'enabled': false, 'dmOffByDefault': false, 'messageRequestOnByDefault': false};
    tangon['defaultConfig'] = yankee;
    romeon = {'id': 1, 'label': 'DM Off by Default'};
    yankee = {'enabled': true, 'dmOffByDefault': true, 'messageRequestOnByDefault': false};
    romeon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = {'id': 2, 'label': 'Message Reqeust On by Default'};
    foxtra = {'enabled': true, 'dmOffByDefault': false, 'messageRequestOnByDefault': true};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    tangon['treatments'] = yankee;
    tangon = verify.bind(offset)(tangon);
    var _closure1_slot1 = tangon;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/user_settings/DefaultDMSettingsExperiement.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['DMDefaultsNewUsers'] = report;
    zuuluu['DMDefaults'] = tangon;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot1;
            report = golfie.useExperiment;
            tangon = {};
            tangon['location'] = michal;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            report = _closure1_slot0;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = entity.dmOffByDefault;
            if(entity) { _fun00002_ip = 81; continue _fun00001 }
 75:
            entity = michal.dmOffByDefault;
 81:
            return entity;
        }
    };
    zuuluu['useIsEligibleForDMDefaultOff'] = tangon;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot1;
            report = golfie.getCurrentConfig;
            tangon = {};
            tangon['location'] = michal;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            report = _closure1_slot0;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = entity.dmOffByDefault;
            if(entity) { _fun00004_ip = 81; continue _fun00003 }
 75:
            entity = michal.dmOffByDefault;
 81:
            return entity;
        }
    };
    zuuluu['isEligibleForDMDefaultOff'] = tangon;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot1;
            report = golfie.useExperiment;
            tangon = {};
            tangon['location'] = michal;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            report = _closure1_slot0;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = entity.messageRequestOnByDefault;
            if(entity) { _fun00006_ip = 81; continue _fun00005 }
 75:
            entity = michal.messageRequestOnByDefault;
 81:
            return entity;
        }
    };
    zuuluu['useIsEligibleForMessageRequestOnByDefault'] = tangon;
    michal = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot1;
            report = golfie.getCurrentConfig;
            tangon = {};
            tangon['location'] = michal;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            report = _closure1_slot0;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = entity.messageRequestOnByDefault;
            if(entity) { _fun00008_ip = 81; continue _fun00007 }
 75:
            entity = michal.messageRequestOnByDefault;
 81:
            return entity;
        }
    };
    zuuluu['isEligibleForMessageRequestOnByDefault'] = michal;
    return entity;
})();