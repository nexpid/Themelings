// app/modules/threads/useGetThreadDraftSettings.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/useGetThreadDraftSettings.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useGetThreadDraftSettings
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 1;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                tango = null;
                mike = tango == entity;
                entity = null;
                if(mike) { _fun00002_ip = 99; continue _fun00001 }
 18:
                golf = _closure1_slot3;
                report = golf.getThreadSettings;
                mike = _closure2_slot0;
                mike = report.bind(golf)(mike);
                if(!(tango == mike)) { _fun00002_ip = 96; continue _fun00001 }
 44:
                report = _closure1_slot3;
                tango = report.getThreadDraftWithParentMessageId;
                options = _closure1_slot1;
                golf = _closure1_slot2;
                oscar = 2;
                golf = golf[oscar];
                oscar = undefined;
                golf = options.bind(oscar)(golf);
                oscar = golf.castChannelIdAsMessageId;
                zulu = _closure2_slot0;
                zulu = oscar.bind(golf)(zulu);
                mike = tango.bind(report)(zulu);
 96:
                entity = mike;
 99:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useHasThreadDraft
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 1;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot0;
                zulu = null;
                entity = zulu != entity;
                if(!entity) { _fun00004_ip = 98; continue _fun00003 }
 16:
                oscar = _closure1_slot3;
                report = oscar.getThreadSettings;
                mike = _closure2_slot0;
                mike = report.bind(oscar)(mike);
                if(!(zulu == mike)) { _fun00004_ip = 94; continue _fun00003 }
 42:
                oscar = _closure1_slot3;
                report = oscar.getThreadDraftWithParentMessageId;
                verify = _closure1_slot1;
                options = _closure1_slot2;
                golf = 2;
                options = options[golf];
                golf = undefined;
                options = verify.bind(golf)(options);
                golf = options.castChannelIdAsMessageId;
                tango = _closure2_slot0;
                tango = golf.bind(options)(tango);
                mike = report.bind(oscar)(tango);
 94:
                entity = zulu != mike;
 98:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useHasThreadDraft'] = mike;
    return entity;
})();