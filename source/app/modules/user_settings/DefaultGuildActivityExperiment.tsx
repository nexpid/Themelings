// app/modules/user_settings/DefaultGuildActivityExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    foxtrot = true;
    tango['value'] = foxtrot;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = 0;
    report = options[tango];
    entity = undefined;
    offset = golf.bind(entity)(report);
    verify = offset.createExperiment;
    report = {'kind': 'user', 'id': '2025-01_default_activity_status', 'label': 'Guild activity status defaults'};
    oscar = {};
    romeo = false;
    oscar['enabled'] = romeo;
    report['defaultConfig'] = oscar;
    backup = {'id': 1, 'label': 'Enable new defaults'};
    oscar = 1;
    yankee = {};
    yankee['enabled'] = foxtrot;
    backup['config'] = yankee;
    yankee = new Array(1);
    yankee[0] = backup;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot0 = report;
    tango = options[tango];
    offset = golf.bind(entity)(tango);
    verify = offset.createExperiment;
    tango = {'kind': 'user', 'id': '2025-01_default_activity_status_new_users', 'label': 'Guild activity status defaults'};
    yankee = {};
    yankee['enabled'] = romeo;
    tango['defaultConfig'] = yankee;
    romeo = {'id': 1, 'label': 'Enable new defaults'};
    yankee = {};
    yankee['enabled'] = foxtrot;
    romeo['config'] = yankee;
    yankee = new Array(1);
    yankee[0] = romeo;
    tango['treatments'] = yankee;
    tango = verify.bind(offset)(tango);
    var _closure1_slot1 = tango;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/user_settings/DefaultGuildActivityExperiment.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['DefaultGuildActivityExperiment'] = report;
    zulu['DefaultGuildActivityExperimentNewUsers'] = tango;
    tango = function(argFoo) {
        _fun35522: for(var _fun35522_ip = 0; ; ) switch(_fun35522_ip) {
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
            if(entity) { _fun35522_ip = 79; continue _fun35522 }
 45:
            report = _closure1_slot1;
            tango = report.getCurrentConfig;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity = mike.enabled;
 79:
            return entity;
        }
    };
    zulu['isEligibleForDefaultGuildActivity'] = tango;
    mike = function(argFoo) {
        _fun35523: for(var _fun35523_ip = 0; ; ) switch(_fun35523_ip) {
 0:
            mike = argFoo;
            golf = _closure1_slot0;
            report = golf.useExperiment;
            tango = {};
            tango['location'] = mike;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = report.bind(golf)(tango, entity);
            entity = entity.enabled;
            report = _closure1_slot1;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            mike = mike.enabled;
            if(entity) { _fun35523_ip = 82; continue _fun35523 }
 79:
            entity = mike;
 82:
            return entity;
        }
    };
    zulu['useIsEligibleForDefaultGuildActivity'] = mike;
    return entity;
})();