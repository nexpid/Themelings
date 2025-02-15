// app/modules/content_inventory/useEntryActivityAndApplication.tsx
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
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/content_inventory/useEntryActivityAndApplication.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useEntryActivityAndApplication
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            offset = 3;
            entity = zulu[offset];
            verify = undefined;
            golf = mike.bind(verify)(entity);
            report = golf.useStateFromStores;
            entity = _closure1_slot5;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = _closure1_slot5;
                mike = zulu.getMatchingActivity;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = report.bind(golf)(mike, entity);
            mike = _closure1_slot1;
            entity = 4;
            entity = zulu[entity];
            mike = mike.bind(verify)(entity);
            report = null;
            entity = report == golf;
            zulu = undefined;
            if(entity) { _fun00002_ip = 97; continue _fun00001 }
 91:
            zulu = golf.application_id;
 97:
            entity = new Array(2);
            entity[0] = zulu;
            yankee = options.extra;
            zulu = 'application_id';
            yankee = zulu in yankee;
            zulu = undefined;
            if(!yankee) { _fun00002_ip = 136; continue _fun00001 }
 124:
            options = options.extra;
            zulu = options.application_id;
 136:
            entity[1] = zulu;
            zulu = mike.bind(verify)(entity);
            mike = _closure1_slot3;
            entity = 2;
            mike = mike.bind(verify)(zulu, entity);
            entity = 0;
            zulu = mike[entity];
            var _closure2_slot1 = zulu;
            entity = 1;
            mike = mike[entity];
            entity = {};
            entity['activity'] = golf;
            options = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[offset];
            options = options.bind(verify)(golf);
            golf = options.useStateFromStores;
            verify = _closure1_slot4;
            oscar = new Array(1);
            oscar[0] = verify;
            tango = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = _closure1_slot4;
                    zulu = tango.getEmbeddedActivityForUserId;
                    entity = _closure2_slot0;
                    mike = entity.author_id;
                    oscar = _closure2_slot1;
                    entity = null;
                    oscar = entity == oscar;
                    entity = undefined;
                    if(oscar) { _fun00004_ip = 50; continue _fun00003 }
 41:
                    report = _closure2_slot1;
                    entity = report.id;
 50:
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            tango = golf.bind(options)(oscar, tango);
            entity['embeddedActivity'] = tango;
            tango = mike;
            if(!(report != zulu)) { _fun00002_ip = 244; continue _fun00001 }
 241:
            tango = zulu;
 244:
            entity['anyMatchingApplication'] = tango;
            entity['activityApplication'] = zulu;
            entity['fallbackApplication'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();