// app/hooks/useMountEffect.tsx
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
    tango = 'hooks/useMountEffect.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useMountEffect
        tango = _closure1_slot0;
        zulu = tango.useRef;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        var _closure2_slot0 = mike;
        zulu = tango.useEffect;
        mike = function() {
            mike = _closure2_slot0;
            entity = mike.current;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['default'] = tango;
    tango = function(argFoo) { // Original name: useMountLayoutEffect
        tango = _closure1_slot0;
        zulu = tango.useRef;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        var _closure2_slot0 = mike;
        zulu = tango.useLayoutEffect;
        mike = function() {
            mike = _closure2_slot0;
            entity = mike.current;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['useMountLayoutEffect'] = tango;
    mike = function(argFoo) { // Original name: useUnmountEffect
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        tango = _closure1_slot0;
        mike = tango.useRef;
        mike = mike.bind(tango)(zulu);
        var _closure2_slot1 = mike;
        zulu = tango.useEffect;
        mike = function() {
            mike = _closure2_slot1;
            entity = _closure2_slot0;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        zulu = tango.useEffect;
        mike = function() {
            entity = function() {
                mike = _closure2_slot1;
                entity = mike.current;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['useUnmountEffect'] = mike;
    return entity;
})();