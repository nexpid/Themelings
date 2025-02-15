// app/modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot2 = tango;
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: useExternalPipAspectRatioUpdater
        report = argBar;
        zulu = argBaz;
        var _closure2_slot0 = report;
        var _closure2_slot1 = zulu;
        tango = _closure1_slot2;
        mike = tango.useRef;
        mike = mike.bind(tango)(zulu);
        var _closure2_slot2 = mike;
        zulu = tango.useInsertionEffect;
        mike = function() {
            mike = _closure2_slot2;
            entity = _closure2_slot1;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        zulu = tango.useEffect;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure2_slot0;
            tango = zulu.getTargetDimensions;
            mike = _closure2_slot2;
            mike = mike.current;
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 1;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.setPipAspectRatio;
            tango = mike.width;
            mike = mike.height;
            mike = report.bind(oscar)(tango, mike);
            mike = zulu.subscribeFromItem;
            entity = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = zulu.getTargetDimensions;
                    entity = _closure2_slot2;
                    entity = entity.current;
                    entity = mike.bind(zulu)(entity);
                    tango = entity.width;
                    zulu = entity.height;
                    entity = _closure3_slot0;
                    entity = entity.width;
                    entity = tango === entity;
                    if(!entity) { _fun00002_ip = 69; continue _fun00001 }
 56:
                    report = _closure3_slot0;
                    report = report.height;
                    entity = zulu === report;
 69:
                    if(entity) { _fun00002_ip = 123; continue _fun00001 }
 72:
                    entity = {};
                    entity['width'] = tango;
                    entity['height'] = zulu;
                    _closure3_slot0 = entity;
                    report = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 1;
                    mike = mike[entity];
                    entity = undefined;
                    mike = report.bind(entity)(mike);
                    entity = mike.setPipAspectRatio;
                    entity = entity.bind(mike)(tango, zulu);
 123:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        entity = undefined;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();