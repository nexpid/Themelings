// app/modules/explicit_media_redaction/ExplicitMediaNewTeenDefaults.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = 0;
    report = options[tango];
    entity = undefined;
    offset = golf.bind(entity)(report);
    verify = offset.createExperiment;
    report = {'kind': 'user', 'id': '2025-01_sensitive_content_defaults', 'label': 'Sensitive Content Defaults'};
    oscar = {'enabled': false, 'allBlur': false, 'mixed': false};
    report['defaultConfig'] = oscar;
    romeo = {'id': 1, 'label': 'Mixed'};
    oscar = 1;
    yankee = {'enabled': true, 'mixed': true, 'allBlur': false};
    romeo['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeo;
    romeo = {'id': 2, 'label': 'Blur Default'};
    foxtrot = {'enabled': true, 'mixed': false, 'allBlur': true};
    romeo['config'] = foxtrot;
    yankee[1] = romeo;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot0 = report;
    tango = options[tango];
    offset = golf.bind(entity)(tango);
    verify = offset.createExperiment;
    tango = {'kind': 'user', 'id': '2025-01_sensitive_content_defaults_new_users', 'label': 'Sensitive Content Defaults - New Users'};
    yankee = {'enabled': false, 'allBlur': false, 'mixed': false};
    tango['defaultConfig'] = yankee;
    romeo = {'id': 1, 'label': 'Mixed'};
    yankee = {'enabled': true, 'mixed': true, 'allBlur': false};
    romeo['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeo;
    romeo = {'id': 2, 'label': 'Blur Default'};
    foxtrot = {'enabled': true, 'mixed': false, 'allBlur': true};
    romeo['config'] = foxtrot;
    yankee[1] = romeo;
    tango['treatments'] = yankee;
    tango = verify.bind(offset)(tango);
    var _closure1_slot1 = tango;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/explicit_media_redaction/ExplicitMediaNewTeenDefaults.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['SensitiveContentDefault'] = report;
    zulu['SensitiveContentDefaultNewUser'] = tango;
    tango = function(argFoo) { // Original name: isEligibleForSensitiveContentDefaults
        _fun58502: for(var _fun58502_ip = 0; ; ) switch(_fun58502_ip) {
 0:
            mike = argFoo;
            golf = _closure1_slot0;
            report = golf.getCurrentConfig;
            tango = {};
            tango['location'] = mike;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = report.bind(golf)(tango, entity);
            entity = entity.enabled;
            report = _closure1_slot1;
            tango = report.getCurrentConfig;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            mike = mike.enabled;
            if(entity) { _fun58502_ip = 82; continue _fun58502 }
 79:
            entity = mike;
 82:
            return entity;
        }
    };
    zulu['isEligibleForSensitiveContentDefaults'] = tango;
    tango = function(argFoo) { // Original name: useIsEligibleForSensitiveContentDefaults
        _fun58503: for(var _fun58503_ip = 0; ; ) switch(_fun58503_ip) {
 0:
            mike = argFoo;
            report = _closure1_slot0;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = mike;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            entity = entity.enabled;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            mike = mike.enabled;
            if(entity) { _fun58503_ip = 78; continue _fun58503 }
 75:
            entity = mike;
 78:
            return entity;
        }
    };
    zulu['useIsEligibleForSensitiveContentDefaults'] = tango;
    tango = function(argFoo) { // Original name: isEligibleForSensitiveContentDefaultsAllBlur
        tango = _closure1_slot0;
        zulu = tango.getCurrentConfig;
        mike = {};
        entity = argFoo;
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.allBlur;
        return entity;
    };
    zulu['isEligibleForSensitiveContentDefaultsAllBlur'] = tango;
    mike = function(argFoo) { // Original name: isEligibleForSensitiveContentDefaultsMixed
        tango = _closure1_slot0;
        zulu = tango.getCurrentConfig;
        mike = {};
        entity = argFoo;
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.mixed;
        return entity;
    };
    zulu['isEligibleForSensitiveContentDefaultsMixed'] = mike;
    return entity;
})();