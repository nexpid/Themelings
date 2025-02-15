// app/modules/a11y/native/useAccessibilityPress.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/a11y/native/useAccessibilityPress.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useAccessibilityPress
        mike = argFoo;
        report = argBar;
        var _closure2_slot0 = mike;
        var _closure2_slot1 = report;
        tango = _closure1_slot0;
        zulu = tango.useRef;
        zulu = zulu.bind(tango)(mike);
        var _closure2_slot2 = zulu;
        oscar = tango.useEffect;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            mike = _closure2_slot2;
            entity = _closure2_slot0;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        mike = oscar.bind(tango)(mike, zulu);
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            entity = {};
            mike = function(argFoo) { // Original name: onAccessibilityAction
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    mike = entity.actionName;
                    entity = 'activate';
                    if(!(entity === mike)) { _fun00002_ip = 38; continue _fun00001 }
 22:
                    mike = _closure2_slot2;
                    entity = mike.current;
                    entity = entity.bind(mike)();
 38:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onAccessibilityAction'] = mike;
            zulu = {};
            mike = 'activate';
            zulu['name'] = mike;
            mike = _closure2_slot1;
            zulu['label'] = mike;
            mike = new Array(1);
            mike[0] = zulu;
            entity['accessibilityActions'] = mike;
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();