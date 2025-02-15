// app/uikit-native/ThrottledButton.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
    mike = function() { // Original name: useThrottledActionHandler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = arguments[0];
            mike = undefined;
            if(!(zulu === mike)) { _fun00002_ip = 18; continue _fun00001 }
 11:
            zulu = _closure1_slot4;
 18:
            var _closure2_slot0 = zulu;
            var _closure2_slot1 = mike;
            report = _closure1_slot2;
            tango = report.useRef;
            zulu = null;
            zulu = tango.bind(report)(zulu);
            _closure2_slot1 = zulu;
            report = _closure1_slot2;
            tango = report.useEffect;
            zulu = function() {
                entity = function() {
                    entity = global;
                    zulu = entity.clearTimeout;
                    entity = _closure2_slot1;
                    mike = entity.current;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            };
            mike = new Array(0);
            mike = tango.bind(report)(zulu, mike);
            entity = function(argFoo) {
                mike = argFoo;
                var _closure3_slot0 = mike;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        mike = _closure3_slot0;
                        tango = null;
                        mike = tango != mike;
                        if(!mike) { _fun00004_ip = 32; continue _fun00003 }
 16:
                        zulu = _closure2_slot1;
                        zulu = zulu.current;
                        mike = tango === zulu;
 32:
                        if(!mike) { _fun00004_ip = 89; continue _fun00003 }
 35:
                        mike = _closure3_slot0;
                        report = undefined;
                        entity = argFoo;
                        entity = mike.bind(report)(entity);
                        mike = _closure2_slot1;
                        zulu = global;
                        tango = zulu.setTimeout;
                        zulu = _closure2_slot0;
                        entity = function() {
                            mike = _closure2_slot1;
                            entity = null;
                            mike['current'] = entity;
                            entity = undefined;
                            return entity;
                        };
                        entity = tango.bind(report)(entity, zulu);
                        mike['current'] = entity;
 89:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            return entity;
        }
    };
    var _closure1_slot5 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot3 = report;
    report = 500;
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'uikit-native/ThrottledButton.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: ThrottledButton
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            options = report.onPress;
            golf = report.onPressIn;
            oscar = report.onPressOut;
            zulu = report.throttleMs;
            tango = undefined;
            if(!(zulu === tango)) { _fun00006_ip = 39; continue _fun00005 }
 32:
            zulu = _closure1_slot4;
 39:
            mike = {'onPress': 0, 'onPressIn': 0, 'onPressOut': 0, 'throttleMs': 0};
            romeo = null;
            foxtrot = mike;
            entity = silentSetPrototypeOf(foxtrot, romeo);
            foxtrot = {};
            romeo = report;
            yankee = mike;
            romeo = copyDataProperties(foxtrot, romeo, yankee);
            mike = _closure1_slot5;
            report = mike.bind(tango)(zulu);
            zulu = _closure1_slot3;
            mike = _closure1_slot0;
            offset = _closure1_slot1;
            entity = 2;
            entity = offset[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            foxtrot = entity;
            verify = copyDataProperties(foxtrot, romeo);
            verify = report.bind(tango)(options);
            options = 'onPress';
            entity[options] = verify;
            options = report.bind(tango)(golf);
            golf = 'onPressIn';
            entity[golf] = options;
            oscar = report.bind(tango)(oscar);
            report = 'onPressOut';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['useThrottledActionHandler'] = mike;
    return entity;
})();