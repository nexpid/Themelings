// app/modules/read_states/ReadStateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/read_states/ReadStateUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getHasImportantUnread
        _fun79184: for(var _fun79184_ip = 0; ; ) switch(_fun79184_ip) {
 0:
            report = argFoo;
            tango = _closure1_slot2;
            zulu = tango.hasUnread;
            entity = report.id;
            entity = zulu.bind(tango)(entity);
            if(!entity) { _fun79184_ip = 58; continue _fun79184 }
 29:
            tango = _closure1_slot3;
            zulu = tango.resolveUnreadSetting;
            zulu = zulu.bind(tango)(report);
            mike = _closure1_slot4;
            mike = mike.ALL_MESSAGES;
            entity = zulu === mike;
 58:
            return entity;
        }
    };
    zulu['getHasImportantUnread'] = tango;
    mike = function(argFoo) { // Original name: useHasImportantUnread
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot2;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot3;
        mike[1] = report;
        entity = function() {
            _fun79186: for(var _fun79186_ip = 0; ; ) switch(_fun79186_ip) {
 0:
                report = _closure1_slot2;
                tango = report.hasUnread;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = tango.bind(report)(entity);
                if(!entity) { _fun79186_ip = 66; continue _fun79186 }
 33:
                report = _closure1_slot3;
                tango = report.resolveUnreadSetting;
                zulu = _closure2_slot0;
                zulu = tango.bind(report)(zulu);
                mike = _closure1_slot4;
                mike = mike.ALL_MESSAGES;
                entity = zulu === mike;
 66:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useHasImportantUnread'] = mike;
    return entity;
})();