// app/modules/remixing/native/hooks/useIsRemixEnabled.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot3 = tango;
    tango = function(argFoo, argBar) { // Original name: useIsRemixEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 1;
            entity = oscar[entity];
            report = undefined;
            tango = zulu.bind(report)(entity);
            zulu = tango.useCanRemix;
            entity = argBar;
            entity = zulu.bind(tango)(entity);
            options = _closure1_slot3;
            golf = options.useMemo;
            tango = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 2;
                entity = mike[entity];
                mike = undefined;
                entity = zulu.bind(mike)(entity);
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = new Array(0);
            zulu = golf.bind(options)(tango, zulu);
            tango = _closure1_slot1;
            mike = 3;
            mike = oscar[mike];
            tango = tango.bind(report)(mike);
            mike = argFoo;
            mike = tango.bind(report)(mike);
            if(!entity) { _fun00002_ip = 95; continue _fun00001 }
 92:
            entity = zulu;
 95:
            if(!entity) { _fun00002_ip = 101; continue _fun00001 }
 98:
            entity = mike;
 101:
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/remixing/native/hooks/useIsRemixEnabled.tsx';
    report = oscar.bind(golf)(report);
    zulu['useIsRemixEnabled'] = tango;
    mike = function(argFoo, argBar, argBaz) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscar = argBar;
            var _closure2_slot0 = oscar;
            golf = _closure1_slot4;
            report = undefined;
            tango = argFoo;
            entity = argBaz;
            entity = golf.bind(report)(tango, entity);
            report = _closure1_slot3;
            tango = report.useMemo;
            zulu = new Array(1);
            zulu[0] = oscar;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = mike.width;
                    zulu = 6000;
                    entity = entity < zulu;
                    if(!entity) { _fun00006_ip = 34; continue _fun00005 }
 25:
                    mike = mike.height;
                    entity = mike < zulu;
 34:
                    return entity;
                }
            };
            mike = tango.bind(report)(mike, zulu);
            if(!entity) { _fun00004_ip = 64; continue _fun00003 }
 61:
            entity = mike;
 64:
            return entity;
        }
    };
    zulu['useIsRemixEnabledForMedia'] = mike;
    return entity;
})();