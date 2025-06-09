// app/modules/explicit_media_redaction/ExplicitMediaNewTeenDefaults.tsx
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
    report = {'kind': 'user', 'id': '2025-01_sensitive_content_defaults', 'label': 'Sensitive Content Defaults'};
    oscard = {'enabled': false, 'allBlur': false, 'mixed': false};
    report['defaultConfig'] = oscard;
    oscard = {'id': 1, 'label': 'Mixed'};
    yankee = {'enabled': true, 'mixed': true, 'allBlur': false};
    oscard['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = oscard;
    romeon = {'id': 2, 'label': 'Blur Default'};
    oscard = 2;
    foxtra = {'enabled': true, 'mixed': false, 'allBlur': true};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot2 = report;
    tangon = option[tangon];
    offset = golfie.bind(entity)(tangon);
    verify = offset.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-01_sensitive_content_defaults_new_users', 'label': 'Sensitive Content Defaults - New Users'};
    yankee = {'enabled': false, 'allBlur': false, 'mixed': false};
    tangon['defaultConfig'] = yankee;
    romeon = {'id': 1, 'label': 'Mixed'};
    yankee = {'enabled': true, 'mixed': true, 'allBlur': false};
    romeon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = {'id': 2, 'label': 'Blur Default'};
    foxtra = {'enabled': true, 'mixed': false, 'allBlur': true};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    tangon['treatments'] = yankee;
    tangon = verify.bind(offset)(tangon);
    var _closure1_slot3 = tangon;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/explicit_media_redaction/ExplicitMediaNewTeenDefaults.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['SensitiveContentDefault'] = report;
    zuuluu['SensitiveContentDefaultNewUser'] = tangon;
    tangon = function(argFoo) { // Original name: isEligibleForSensitiveContentDefaults
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = _closure1_slot2;
            report = oscard.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = tangon;
            entity = {};
            option = false;
            entity['autoTrackExposure'] = option;
            entity = report.bind(oscard)(zuuluu, entity);
            entity = entity.enabled;
            golfie = _closure1_slot3;
            oscard = golfie.getCurrentConfig;
            report = {};
            report['location'] = tangon;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = option;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            zuuluu = zuuluu.enabled;
            if(entity) { _fun00002_ip = 82; continue _fun00001 }
 79:
            entity = zuuluu;
 82:
            if(entity) { _fun00002_ip = 118; continue _fun00001 }
 85:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.isEligibleForSettingsDefaultsAggregate;
            entity = michal.bind(zuuluu)(tangon);
 118:
            return entity;
        }
    };
    zuuluu['isEligibleForSensitiveContentDefaults'] = tangon;
    tangon = function(argFoo) { // Original name: useIsEligibleForSensitiveContentDefaults
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot2;
            tangon = oscard.useExperiment;
            zuuluu = {};
            zuuluu['location'] = report;
            entity = {};
            option = false;
            entity['autoTrackExposure'] = option;
            entity = tangon.bind(oscard)(zuuluu, entity);
            entity = entity.enabled;
            golfie = _closure1_slot3;
            oscard = golfie.useExperiment;
            tangon = {};
            tangon['location'] = report;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = option;
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            zuuluu = zuuluu.enabled;
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 1;
            tangon = tangon[michal];
            michal = undefined;
            tangon = oscard.bind(michal)(tangon);
            michal = tangon.useIsEligibleForSettingsDefaultsAggregate;
            michal = michal.bind(tangon)(report);
            if(entity) { _fun00004_ip = 115; continue _fun00003 }
 112:
            entity = zuuluu;
 115:
            if(entity) { _fun00004_ip = 121; continue _fun00003 }
 118:
            entity = michal;
 121:
            return entity;
        }
    };
    zuuluu['useIsEligibleForSensitiveContentDefaults'] = tangon;
    tangon = function(argFoo) { // Original name: isEligibleForSensitiveContentDefaultsAllBlur
        tangon = _closure1_slot2;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = argFoo;
        michal['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.allBlur;
        return entity;
    };
    zuuluu['isEligibleForSensitiveContentDefaultsAllBlur'] = tangon;
    michal = function(argFoo) { // Original name: isEligibleForSensitiveContentDefaultsMixed
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            oscard = _closure1_slot2;
            report = oscard.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = tangon;
            entity = {};
            golfie = false;
            entity['autoTrackExposure'] = golfie;
            entity = report.bind(oscard)(zuuluu, entity);
            entity = entity.mixed;
            if(entity) { _fun00006_ip = 79; continue _fun00005 }
 46:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.isEligibleForSettingsDefaultsAggregate;
            entity = michal.bind(zuuluu)(tangon);
 79:
            return entity;
        }
    };
    zuuluu['isEligibleForSensitiveContentDefaultsMixed'] = michal;
    return entity;
})();