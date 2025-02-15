// app/modules/routing/native/useBackPressHandler.tsx
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
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    report = mike.BackHandler;
    var _closure1_slot3 = report;
    mike = mike.NativeModules;
    var _closure1_slot4 = mike;
    mike = {};
    report = function() { // Original name: minimize
        entity = _closure1_slot4;
        mike = entity.MinimizeApp;
        entity = mike.minimizeApp;
        entity = entity.bind(mike)();
        entity = true;
        return entity;
    };
    mike['minimize'] = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/routing/native/useBackPressHandler.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useBackPressHandler
        _fun56681: for(var _fun56681_ip = 0; ; ) switch(_fun56681_ip) {
 0:
            tango = argFoo;
            oscar = arguments[1];
            var _closure2_slot0 = tango;
            entity = undefined;
            if(!(oscar === entity)) { _fun56681_ip = 20; continue _fun56681 }
 18:
            oscar = true;
 20:
            var _closure2_slot1 = oscar;
            var _closure2_slot2 = entity;
            report = _closure1_slot2;
            zulu = report.useRef;
            zulu = zulu.bind(report)(tango);
            _closure2_slot2 = zulu;
            tango = report.useLayoutEffect;
            zulu = function() {
                mike = _closure2_slot2;
                entity = _closure2_slot0;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            zulu = tango.bind(report)(zulu);
            tango = report.useEffect;
            zulu = new Array(1);
            zulu[0] = oscar;
            mike = function() {
                _fun56683: for(var _fun56683_ip = 0; ; ) switch(_fun56683_ip) {
 0:
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    entity = 2;
                    tango = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.isIOS;
                    tango = tango.bind(report)();
                    if(tango) { _fun56683_ip = 88; continue _fun56683 }
 40:
                    tango = _closure2_slot1;
                    if(!tango) { _fun56683_ip = 88; continue _fun56683 }
 50:
                    oscar = _closure1_slot3;
                    report = oscar.addEventListener;
                    tango = 'hardwareBackPress';
                    zulu = function() {
                        mike = _closure2_slot2;
                        entity = mike.current;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    zulu = report.bind(oscar)(tango, zulu);
                    var _closure3_slot0 = zulu;
                    mike = function() {
                        mike = _closure3_slot0;
                        entity = mike.remove;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    return mike;
 88:
                    return entity;
                }
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['BackPressHandler'] = mike;
    return entity;
})();