// app/hooks/useUnmountAbortSignal.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 2;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'hooks/useUnmountAbortSignal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useUnmountAbortSignal
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 0;
        entity = oscar[entity];
        tango = undefined;
        zulu = report.bind(tango)(entity);
        entity = function() {
            entity = global;
            entity = entity.AbortController;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            zulu = mike;
            entity = new zulu[entity](mike);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity = zulu.bind(tango)(entity);
        var _closure2_slot0 = entity;
        zulu = 1;
        zulu = oscar[zulu];
        zulu = report.bind(tango)(zulu);
        mike = function() {
            entity = function() {
                mike = _closure2_slot0;
                entity = mike.abort;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        entity = entity.signal;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();