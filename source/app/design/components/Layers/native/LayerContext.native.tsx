// app/design/components/Layers/native/LayerContext.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBaz;
    zulu = argFred;
    oscar = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    report = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(report);
    mike = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: LayerContextManager
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = {};
            tango = null;
            mike['current'] = tango;
            zulu['surfaceRef'] = mike;
            mike = new Array(0);
            zulu['items'] = mike;
            mike = function() {
                entity = null;
                return entity;
            };
            zulu['invalidate'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'add';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            report = argFoo;
            mike = this;
            var _closure3_slot0 = report;
            tango = mike.items;
            zulu = tango.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.key;
                entity = _closure3_slot0;
                entity = mike !== entity;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['items'] = entity;
            tango = mike.items;
            zulu = tango.push;
            entity = {};
            entity['key'] = report;
            report = argBar;
            entity['component'] = report;
            entity = zulu.bind(tango)(entity);
            entity = mike.invalidate;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'remove';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            zulu = argFoo;
            var _closure3_slot0 = zulu;
            tango = mike.items;
            zulu = tango.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.key;
                entity = _closure3_slot0;
                entity = mike !== entity;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['items'] = entity;
            entity = mike.invalidate;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'setSurfaceRef';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.surfaceRef;
            entity = argFoo;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = mike.bind(entity)();
    mike = tango.prototype;
    report = Object.create(mike, {constructor: {value: tango}});
    romeo = report;
    mike = new romeo[tango](yankee);
    report = mike instanceof Object ? mike : report;
    mike = golf.createContext;
    mike = mike.bind(golf)(report);
    report = 3;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/Layers/native/LayerContext.native.tsx';
    report = oscar.bind(golf)(report);
    zulu['LayerContextManager'] = tango;
    zulu['LayerContext'] = mike;
    return entity;
})();