// app/modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    tango = tango.UserNotificationSettings;
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot3 = tango;
    tango = {};
    report = 'all_messages';
    tango['ALL_MESSAGES'] = report;
    report = 'mentions';
    tango['MENTIONS'] = report;
    report = 'nothing';
    tango['NOTHING'] = report;
    report = 'custom';
    tango['CUSTOM'] = report;
    var _closure1_slot4 = tango;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['Presets'] = tango;
    tango = function(argFoo, argBar) { // Original name: presetFromSettings
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.match;
        zulu = new Array(2);
        oscar = argBar;
        zulu[0] = oscar;
        oscar = argFoo;
        zulu[1] = oscar;
        golf = tango.bind(report)(zulu);
        oscar = golf.with;
        zulu = _closure1_slot2;
        tango = zulu.ALL_MESSAGES;
        report = new Array(2);
        report[0] = tango;
        mike = _closure1_slot3;
        tango = mike.ALL_MESSAGES;
        report[1] = tango;
        tango = function() {
            entity = _closure1_slot4;
            entity = entity.ALL_MESSAGES;
            return entity;
        };
        golf = oscar.bind(golf)(report, tango);
        oscar = golf.with;
        tango = zulu.ONLY_MENTIONS;
        report = new Array(2);
        report[0] = tango;
        tango = mike.UNSET;
        report[1] = tango;
        tango = function() {
            entity = _closure1_slot4;
            entity = entity.MENTIONS;
            return entity;
        };
        golf = oscar.bind(golf)(report, tango);
        oscar = golf.with;
        tango = zulu.ONLY_MENTIONS;
        report = new Array(2);
        report[0] = tango;
        tango = mike.ONLY_MENTIONS;
        report[1] = tango;
        tango = function() {
            entity = _closure1_slot4;
            entity = entity.MENTIONS;
            return entity;
        };
        golf = oscar.bind(golf)(report, tango);
        oscar = golf.with;
        tango = zulu.NO_MESSAGES;
        report = new Array(2);
        report[0] = tango;
        tango = mike.UNSET;
        report[1] = tango;
        tango = function() {
            entity = _closure1_slot4;
            entity = entity.NOTHING;
            return entity;
        };
        report = oscar.bind(golf)(report, tango);
        tango = report.with;
        oscar = zulu.NO_MESSAGES;
        zulu = new Array(2);
        zulu[0] = oscar;
        mike = mike.ONLY_MENTIONS;
        zulu[1] = mike;
        mike = function() {
            entity = _closure1_slot4;
            entity = entity.NOTHING;
            return entity;
        };
        zulu = tango.bind(report)(zulu, mike);
        mike = zulu.otherwise;
        entity = function() {
            entity = _closure1_slot4;
            entity = entity.CUSTOM;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['presetFromSettings'] = tango;
    tango = function(argFoo) { // Original name: presetName
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.match;
        zulu = argFoo;
        oscar = tango.bind(report)(zulu);
        report = oscar.with;
        mike = _closure1_slot4;
        tango = mike.ALL_MESSAGES;
        zulu = function() {
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.hZrr6u;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = report.bind(oscar)(tango, zulu);
        report = oscar.with;
        tango = mike.MENTIONS;
        zulu = function() {
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.y59NJi;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = report.bind(oscar)(tango, zulu);
        report = oscar.with;
        tango = mike.NOTHING;
        zulu = function() {
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.pGn/bG;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        tango = report.bind(oscar)(tango, zulu);
        zulu = tango.with;
        mike = mike.CUSTOM;
        entity = function() {
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.32yow8;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike, entity);
        entity = mike.exhaustive;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['presetName'] = tango;
    mike = function(argFoo, argBar) { // Original name: arePresetSettingsUnset
        _fun86844: for(var _fun86844_ip = 0; ; ) switch(_fun86844_ip) {
 0:
            report = argFoo;
            tango = argBar;
            mike = null;
            entity = mike != report;
            if(!entity) { _fun86844_ip = 32; continue _fun86844 }
 15:
            zulu = _closure1_slot3;
            zulu = zulu.UNSET;
            entity = report !== zulu;
 32:
            if(entity) { _fun86844_ip = 62; continue _fun86844 }
 35:
            mike = mike != tango;
            if(!mike) { _fun86844_ip = 59; continue _fun86844 }
 42:
            zulu = _closure1_slot2;
            zulu = zulu.NULL;
            mike = tango !== zulu;
 59:
            entity = mike;
 62:
            entity = !entity;
            return entity;
        }
    };
    zulu['arePresetSettingsUnset'] = mike;
    return entity;
})();