// app/hooks/useThrottle.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    entity = 0;
    report = golf[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(report);
    var _closure1_slot2 = mike;
    mike = function(argFoo) { // Original name: throttleStateFn
        entity = argFoo;
        return entity;
    };
    var _closure1_slot3 = mike;
    mike = function(argFoo, argBar) { // Original name: useThrottledFunction
        _fun104078: for(var _fun104078_ip = 0; ; ) switch(_fun104078_ip) {
 0:
            verify = argFoo;
            options = argBar;
            golf = arguments[2];
            oscar = arguments[3];
            var _closure2_slot0 = verify;
            var _closure2_slot1 = options;
            offset = undefined;
            if(!(golf === offset)) { _fun104078_ip = 32; continue _fun104078 }
 28:
            golf = new Array(0);
 32:
            var _closure2_slot2 = oscar;
            var _closure2_slot3 = offset;
            report = _closure1_slot2;
            zulu = report.useRef;
            tango = _closure1_slot0;
            yankee = _closure1_slot1;
            entity = 1;
            entity = yankee[entity];
            tango = tango.bind(offset)(entity);
            entity = tango.throttle;
            entity = entity.bind(tango)(verify, options, oscar);
            entity = zulu.bind(report)(entity);
            _closure2_slot3 = entity;
            tango = report.useEffect;
            zulu = new Array(3);
            zulu[0] = verify;
            zulu[1] = options;
            zulu[2] = oscar;
            romeo = 3;
            backup = zulu;
            foxtrot = golf;
            oscar = arraySpread(backup, foxtrot, romeo);
            mike = function() {
                mike = _closure2_slot3;
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 1;
                tango = tango[zulu];
                zulu = undefined;
                oscar = report.bind(zulu)(tango);
                report = oscar.throttle;
                tango = _closure2_slot0;
                zulu = _closure2_slot1;
                entity = _closure2_slot2;
                entity = report.bind(oscar)(tango, zulu, entity);
                mike['current'] = entity;
                entity = function() {
                    _fun104080: for(var _fun104080_ip = 0; ; ) switch(_fun104080_ip) {
 0:
                        entity = _closure2_slot3;
                        mike = entity.current;
                        entity = null;
                        if(!(entity != mike)) { _fun104080_ip = 28; continue _fun104080 }
 18:
                        entity = mike.cancel;
                        entity = entity.bind(mike)();
 28:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            entity = entity.current;
            return entity;
        }
    };
    var _closure1_slot4 = mike;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'hooks/useThrottle.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar) {
        _fun104081: for(var _fun104081_ip = 0; ; ) switch(_fun104081_ip) {
 0:
            entity = argFoo;
            tango = argBar;
            verify = arguments[2];
            var _closure2_slot0 = entity;
            options = undefined;
            if(!(verify === options)) { _fun104081_ip = 25; continue _fun104081 }
 21:
            verify = new Array(0);
 25:
            var _closure2_slot1 = options;
            var _closure2_slot2 = options;
            golf = _closure1_slot4;
            foxtrot = _closure1_slot3;
            offset = arguments[3];
            backup = undefined;
            romeo = tango;
            yankee = verify;
            options = backup[golf](foxtrot, romeo, yankee, offset, verify);
            _closure2_slot1 = options;
            golf = _closure1_slot2;
            mike = golf.useRef;
            mike = mike.bind(golf)(entity);
            _closure2_slot2 = mike;
            oscar = golf.useEffect;
            report = new Array(2);
            report[0] = entity;
            report[1] = options;
            zulu = function() {
                tango = _closure2_slot1;
                zulu = _closure2_slot0;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                mike = _closure2_slot2;
                mike['current'] = zulu;
                return entity;
            };
            zulu = oscar.bind(golf)(zulu, report);
            zulu = 0;
            if(!(zulu !== tango)) { _fun104081_ip = 122; continue _fun104081 }
 117:
            entity = mike.current;
 122:
            return entity;
        }
    };
    zulu['useThrottledState'] = tango;
    zulu['useThrottledFunction'] = mike;
    return entity;
})();