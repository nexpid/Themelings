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
    offset = option.bind(entity)(report);
    oscard = offset.createExperiment;
    report = {'kind': 'user', 'id': '2025-02_dm_defaults_new_users', 'label': 'Default DM Settings - New Users'};
    golfie = {'enabled': false, 'dmOffByDefault': false, 'messageRequestOnByDefault': false};
    report['defaultConfig'] = golfie;
    golfie = {'id': 1, 'label': 'DM Off by Default'};
    yankee = {'enabled': true, 'dmOffByDefault': true, 'messageRequestOnByDefault': false};
    golfie['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = golfie;
    romeon = {'id': 2, 'label': 'Message Reqeust On by Default'};
    golfie = 2;
    foxtra = {'enabled': true, 'dmOffByDefault': false, 'messageRequestOnByDefault': true};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    oscard = oscard.bind(offset)(report);
    var _closure1_slot2 = oscard;
    tangon = verify[tangon];
    offset = option.bind(entity)(tangon);
    report = offset.createExperiment;
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
    report = report.bind(offset)(tangon);
    var _closure1_slot3 = report;
    tangon = function(argFoo) { // Original name: isEligibleForMessageRequestOnByDefault
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            entity = entity.messageRequestOnByDefault;
            if(entity) { _fun00002_ip = 81; continue _fun00001 }
 75:
            entity = michal.messageRequestOnByDefault;
 81:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
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
            entity = entity.messageRequestOnByDefault;
            if(entity) { _fun00008_ip = 81; continue _fun00007 }
 75:
            entity = michal.messageRequestOnByDefault;
 81:
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
            entity = 1;
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