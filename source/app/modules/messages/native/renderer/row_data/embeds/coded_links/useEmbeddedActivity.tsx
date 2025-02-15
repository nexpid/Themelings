// app/modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivity.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    options = oscar[tango];
    golf = argBaz;
    golf = golf.bind(entity)(options);
    var _closure1_slot3 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NO_ACTIVITIES;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivity.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useEmbeddedActivity
        zulu = argFoo;
        report = argBar;
        var _closure2_slot0 = zulu;
        var _closure2_slot1 = report;
        golf = _closure1_slot0;
        oscar = _closure1_slot1;
        tango = 2;
        oscar = oscar[tango];
        tango = undefined;
        options = golf.bind(tango)(oscar);
        golf = options.useStateFromStores;
        tango = _closure1_slot3;
        oscar = new Array(1);
        oscar[0] = tango;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity == zulu)) { _fun00002_ip = 22; continue _fun00001 }
 13:
                entity = _closure1_slot4;
                _fun00002_ip = 44; continue _fun00001;
 22:
                tango = _closure1_slot3;
                zulu = tango.getEmbeddedActivitiesForChannel;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 44:
                return entity;
            }
        };
        oscar = golf.bind(options)(oscar, zulu, tango);
        var _closure2_slot2 = oscar;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure2_slot1;
                entity = null;
                zulu = entity != zulu;
                entity = undefined;
                if(!zulu) { _fun00004_ip = 41; continue _fun00003 }
 18:
                tango = _closure2_slot2;
                zulu = tango.find;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.applicationId;
                    entity = _closure2_slot1;
                    entity = mike === entity;
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 41:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();