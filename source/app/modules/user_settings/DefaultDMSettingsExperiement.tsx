// app/modules/user_settings/DefaultDMSettingsExperiement.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = 0;
    report = verify[tangon];
    entity = undefined;
    golfie = option.bind(entity)(report);
    oscard = golfie.createExperiment;
    report = {'kind': 'user', 'id': '2025-02_dm_defaults_new_users', 'label': 'Default DM Settings - New Users'};
    offset = {'enabled': false, 'dmOffByDefault': false, 'messageRequestOnByDefault': false};
    report['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'DM Off by Default'};
    offset = {'enabled': true, 'dmOffByDefault': true, 'messageRequestOnByDefault': false};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Message Reqeust On by Default'};
    romeon = {'enabled': true, 'dmOffByDefault': false, 'messageRequestOnByDefault': true};
    yankee['config'] = romeon;
    offset[1] = yankee;
    report['treatments'] = offset;
    oscard = oscard.bind(golfie)(report);
    var _closure1_slot2 = oscard;
    tangon = verify[tangon];
    golfie = option.bind(entity)(tangon);
    report = golfie.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-02_dm_defaults', 'label': 'Default DM Settings'};
    offset = {'enabled': false, 'dmOffByDefault': false, 'messageRequestOnByDefault': false};
    tangon['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'DM Off by Default'};
    offset = {'enabled': true, 'dmOffByDefault': true, 'messageRequestOnByDefault': false};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Message Reqeust On by Default'};
    romeon = {'enabled': true, 'dmOffByDefault': false, 'messageRequestOnByDefault': true};
    yankee['config'] = romeon;
    offset[1] = yankee;
    tangon['treatments'] = offset;
    report = report.bind(golfie)(tangon);
    var _closure1_slot3 = report;
    tangon = function(argFoo) { // Original name: isEligibleForMessageRequestOnByDefault
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = _closure1_slot3;
            report = oscard.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = tangon;
            entity = {};
            option = false;
            entity['autoTrackExposure'] = option;
            entity = report.bind(oscard)(zuuluu, entity);
            golfie = _closure1_slot2;
            oscard = golfie.getCurrentConfig;
            report = {};
            report['location'] = tangon;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = option;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            entity = entity.messageRequestOnByDefault;
            if(entity) { _fun00002_ip = 81; continue _fun00001 }
 75:
            entity = zuuluu.messageRequestOnByDefault;
 81:
            if(entity) { _fun00002_ip = 117; continue _fun00001 }
 84:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.isEligibleForSettingsDefaultsAggregate;
            entity = michal.bind(zuuluu)(tangon);
 117:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    golfie = 3;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/user_settings/DefaultDMSettingsExperiement.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['DMDefaultsNewUsers'] = oscard;
    zuuluu['DMDefaults'] = report;
    report = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot3;
            report = golfie.useExperiment;
            tangon = {};
            tangon['location'] = michal;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            report = _closure1_slot2;
            tangon = report.useExperiment;
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
    zuuluu['useIsEligibleForDMDefaultOff'] = report;
    report = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot3;
            report = golfie.getCurrentConfig;
            tangon = {};
            tangon['location'] = michal;
            entity = {};
            oscard = false;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            report = _closure1_slot2;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = entity.dmOffByDefault;
            if(entity) { _fun00006_ip = 81; continue _fun00005 }
 75:
            entity = michal.dmOffByDefault;
 81:
            return entity;
        }
    };
    zuuluu['isEligibleForDMDefaultOff'] = report;
    report = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot3;
            tangon = oscard.useExperiment;
            zuuluu = {};
            zuuluu['location'] = report;
            entity = {};
            option = false;
            entity['autoTrackExposure'] = option;
            entity = tangon.bind(oscard)(zuuluu, entity);
            golfie = _closure1_slot2;
            oscard = golfie.useExperiment;
            tangon = {};
            tangon['location'] = report;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = option;
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 1;
            tangon = tangon[michal];
            michal = undefined;
            tangon = oscard.bind(michal)(tangon);
            michal = tangon.useIsEligibleForSettingsDefaultsAggregate;
            michal = michal.bind(tangon)(report);
            entity = entity.messageRequestOnByDefault;
            if(entity) { _fun00008_ip = 114; continue _fun00007 }
 108:
            entity = zuuluu.messageRequestOnByDefault;
 114:
            if(entity) { _fun00008_ip = 120; continue _fun00007 }
 117:
            entity = michal;
 120:
            return entity;
        }
    };
    zuuluu['useIsEligibleForMessageRequestOnByDefault'] = report;
    zuuluu['isEligibleForMessageRequestOnByDefault'] = tangon;
    michal = function() {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 2;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.shouldShowTiggerPawtect;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00010_ip = 51; continue _fun00009 }
 38:
            zuuluu = _closure1_slot4;
            michal = 'shouldAgeVerifyForDMDefaultOff';
            entity = zuuluu.bind(tangon)(michal);
 51:
            return entity;
        }
    };
    zuuluu['shouldAgeVerifyForDMDefaultOff'] = michal;
    return entity;
})();