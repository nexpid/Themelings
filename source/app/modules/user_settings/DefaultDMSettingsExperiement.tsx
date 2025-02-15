// app/modules/user_settings/DefaultDMSettingsExperiement.tsx
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
    report = {'kind': 'user', 'id': '2025-02_dm_defaults_new_users', 'label': 'Default DM Settings - New Users'};
    oscar = {'enabled': false, 'dmOffByDefault': false, 'messageRequestOnByDefault': false};
    report['defaultConfig'] = oscar;
    romeo = {'id': 1, 'label': 'DM Off by Default'};
    oscar = 1;
    yankee = {'enabled': true, 'dmOffByDefault': true, 'messageRequestOnByDefault': false};
    romeo['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeo;
    romeo = {'id': 2, 'label': 'Message Reqeust On by Default'};
    foxtrot = {'enabled': true, 'dmOffByDefault': false, 'messageRequestOnByDefault': true};
    romeo['config'] = foxtrot;
    yankee[1] = romeo;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot0 = report;
    tango = options[tango];
    offset = golf.bind(entity)(tango);
    verify = offset.createExperiment;
    tango = {'kind': 'user', 'id': '2025-02_dm_defaults', 'label': 'Default DM Settings'};
    yankee = {'enabled': false, 'dmOffByDefault': false, 'messageRequestOnByDefault': false};
    tango['defaultConfig'] = yankee;
    romeo = {'id': 1, 'label': 'DM Off by Default'};
    yankee = {'enabled': true, 'dmOffByDefault': true, 'messageRequestOnByDefault': false};
    romeo['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeo;
    romeo = {'id': 2, 'label': 'Message Reqeust On by Default'};
    foxtrot = {'enabled': true, 'dmOffByDefault': false, 'messageRequestOnByDefault': true};
    romeo['config'] = foxtrot;
    yankee[1] = romeo;
    tango['treatments'] = yankee;
    tango = verify.bind(offset)(tango);
    var _closure1_slot1 = tango;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/user_settings/DefaultDMSettingsExperiement.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['DMDefaultsNewUsers'] = report;
    zulu['DMDefaults'] = tango;
    tango = function(argFoo) {
        _fun99911: for(var _fun99911_ip = 0; ; ) switch(_fun99911_ip) {
 0:
            mike = argFoo;
            golf = _closure1_slot1;
            report = golf.useExperiment;
            tango = {};
            tango['location'] = mike;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = report.bind(golf)(tango, entity);
            report = _closure1_slot0;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity = entity.dmOffByDefault;
            if(entity) { _fun99911_ip = 81; continue _fun99911 }
 75:
            entity = mike.dmOffByDefault;
 81:
            return entity;
        }
    };
    zulu['useIsEligibleForDMDefaultOff'] = tango;
    tango = function(argFoo) {
        _fun99912: for(var _fun99912_ip = 0; ; ) switch(_fun99912_ip) {
 0:
            mike = argFoo;
            golf = _closure1_slot1;
            report = golf.getCurrentConfig;
            tango = {};
            tango['location'] = mike;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = report.bind(golf)(tango, entity);
            report = _closure1_slot0;
            tango = report.getCurrentConfig;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity = entity.dmOffByDefault;
            if(entity) { _fun99912_ip = 81; continue _fun99912 }
 75:
            entity = mike.dmOffByDefault;
 81:
            return entity;
        }
    };
    zulu['isEligibleForDMDefaultOff'] = tango;
    tango = function(argFoo) {
        _fun99913: for(var _fun99913_ip = 0; ; ) switch(_fun99913_ip) {
 0:
            mike = argFoo;
            golf = _closure1_slot1;
            report = golf.useExperiment;
            tango = {};
            tango['location'] = mike;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = report.bind(golf)(tango, entity);
            report = _closure1_slot0;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity = entity.messageRequestOnByDefault;
            if(entity) { _fun99913_ip = 81; continue _fun99913 }
 75:
            entity = mike.messageRequestOnByDefault;
 81:
            return entity;
        }
    };
    zulu['useIsEligibleForMessageRequestOnByDefault'] = tango;
    mike = function(argFoo) {
        _fun99914: for(var _fun99914_ip = 0; ; ) switch(_fun99914_ip) {
 0:
            mike = argFoo;
            golf = _closure1_slot1;
            report = golf.getCurrentConfig;
            tango = {};
            tango['location'] = mike;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = report.bind(golf)(tango, entity);
            report = _closure1_slot0;
            tango = report.getCurrentConfig;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity = entity.messageRequestOnByDefault;
            if(entity) { _fun99914_ip = 81; continue _fun99914 }
 75:
            entity = mike.messageRequestOnByDefault;
 81:
            return entity;
        }
    };
    zulu['isEligibleForMessageRequestOnByDefault'] = mike;
    return entity;
})();