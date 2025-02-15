// app/modules/pomelo/PomeloModalActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.POMELO_MODAL_KEY;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/pomelo/PomeloModalActionCreators.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: openPomeloModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = arguments[1];
            options = undefined;
            if(!(oscar === options)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            oscar = false;
 11:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            zulu = 1;
            zulu = mike[zulu];
            report = tango.bind(options)(zulu);
            tango = report.pushLazy;
            golf = _closure1_slot0;
            zulu = 3;
            zulu = mike[zulu];
            golf = golf.bind(options)(zulu);
            zulu = 2;
            zulu = mike[zulu];
            mike = mike.paths;
            zulu = golf.bind(options)(zulu, mike);
            mike = {};
            golf = function() { // Original name: onCloseModal
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 1;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.popWithKey;
                entity = _closure1_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['onCloseModal'] = golf;
            golf = argFoo;
            mike['source'] = golf;
            mike['oneClickFlow'] = oscar;
            entity = _closure1_slot3;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = true;
            return entity;
        }
    };
    zulu['openPomeloModal'] = mike;
    return entity;
})();