// app/design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
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
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.BackHandler;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useNavigatorBackPressHandler
        tango = argFoo;
        var _closure2_slot0 = tango;
        golf = _closure1_slot2;
        zulu = golf.useRef;
        zulu = zulu.bind(golf)(tango);
        var _closure2_slot1 = zulu;
        tango = golf.useLayoutEffect;
        zulu = function() {
            mike = _closure2_slot1;
            entity = _closure2_slot0;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        zulu = tango.bind(golf)(zulu);
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.useFocusEffect;
        oscar = golf.useCallback;
        report = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure1_slot0;
                tango = _closure1_slot1;
                entity = 3;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.isIOS;
                tango = tango.bind(report)();
                if(tango) { _fun00002_ip = 78; continue _fun00001 }
 40:
                oscar = _closure1_slot3;
                report = oscar.addEventListener;
                tango = 'hardwareBackPress';
                zulu = function() {
                    mike = _closure2_slot1;
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
 78:
                return entity;
            }
        };
        mike = new Array(0);
        mike = oscar.bind(golf)(report, mike);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['useNavigatorBackPressHandler'] = mike;
    return entity;
})();