// app/modules/explicit_media_redaction/ExplicitMediaNewTeenDefaults.tsx
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
    report = {'kind': 'user', 'id': '2025-01_sensitive_content_defaults', 'label': 'Sensitive Content Defaults'};
    oscard = {'enabled': false, 'allBlur': false, 'mixed': false};
    report['defaultConfig'] = oscard;
    romeon = {'id': 1, 'label': 'Mixed'};
    oscard = 1;
    yankee = {'enabled': true, 'mixed': true, 'allBlur': false};
    romeon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = {'id': 2, 'label': 'Blur Default'};
    foxtra = {'enabled': true, 'mixed': false, 'allBlur': true};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot0 = report;
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
    var _closure1_slot1 = tangon;
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
            report = _closure1_slot1;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            michal = michal.enabled;
            if(entity) { _fun00002_ip = 82; continue _fun00001 }
 79:
            entity = michal;
 82:
            return entity;
        }
    };
    zuuluu['isEligibleForSensitiveContentDefaults'] = tangon;
    tangon = function(argFoo) { // Original name: useIsEligibleForSensitiveContentDefaults
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
    zuuluu['useIsEligibleForSensitiveContentDefaults'] = tangon;
    tangon = function(argFoo) { // Original name: isEligibleForSensitiveContentDefaultsAllBlur
        tangon = _closure1_slot0;
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
        tangon = _closure1_slot0;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = argFoo;
        michal['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.mixed;
        return entity;
    };
    zuuluu['isEligibleForSensitiveContentDefaultsMixed'] = michal;
    return entity;
})();