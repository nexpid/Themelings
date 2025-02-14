// app/hooks/useInterval.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.useEffect;
    var _closure1_slot2 = golf;
    tango = tango.useRef;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'hooks/useInterval.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useInterval
        zulu = argFoo;
        report = argBar;
        var _closure2_slot0 = zulu;
        var _closure2_slot1 = report;
        golf = _closure1_slot3;
        entity = undefined;
        oscar = golf.bind(entity)(zulu);
        var _closure2_slot2 = oscar;
        oscar = null;
        oscar = golf.bind(entity)(oscar);
        var _closure2_slot3 = oscar;
        tango = _closure1_slot2;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            mike = _closure2_slot2;
            entity = _closure2_slot0;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        zulu = tango.bind(entity)(zulu, oscar);
        zulu = new Array(1);
        zulu[0] = report;
        mike = function() {
            _fun75607: for(var _fun75607_ip = 0; ; ) switch(_fun75607_ip) {
 0:
                zulu = _closure2_slot1;
                tango = null;
                if(!(tango === zulu)) { _fun75607_ip = 62; continue _fun75607 }
 15:
                zulu = _closure2_slot3;
                zulu = zulu.current;
                if(!(tango !== zulu)) { _fun75607_ip = 58; continue _fun75607 }
 28:
                zulu = global;
                golf = zulu.clearInterval;
                zulu = _closure2_slot3;
                oscar = zulu.current;
                report = undefined;
                report = golf.bind(report)(oscar);
                zulu['current'] = tango;
 58:
                zulu = undefined;
                return zulu;
 62:
                zulu = _closure2_slot3;
                tango = global;
                oscar = tango.setInterval;
                report = _closure2_slot1;
                tango = undefined;
                mike = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 1;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    zulu = _closure2_slot2;
                    tango = zulu.current;
                    mike = null;
                    tango = mike != tango;
                    mike = 'Missing callback';
                    mike = report.bind(entity)(tango, mike);
                    mike = zulu.current;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                mike = oscar.bind(tango)(mike, report);
                zulu['current'] = mike;
                entity = function() {
                    entity = global;
                    zulu = entity.clearInterval;
                    entity = _closure2_slot3;
                    mike = entity.current;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            }
        };
        mike = tango.bind(entity)(mike, zulu);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();