// discord_common/js/shared/utils/TypedEventEmitter.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: TypedEventEmitter
            zulu = this;
            report = _closure1_slot2;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 2;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            mike = mike.EventEmitter;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            options = tango;
            mike = new options[mike](golf);
            mike = mike instanceof Object ? mike : tango;
            zulu['emitter'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'on';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity.emitter;
            zulu = tango.on;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(9);
        mike[0] = entity;
        entity = {};
        oscar = 'off';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity.emitter;
            zulu = tango.off;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'once';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity.emitter;
            zulu = tango.once;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'addListener';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity.emitter;
            zulu = tango.addListener;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'removeListener';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity.emitter;
            zulu = tango.removeListener;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'removeAllListeners';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.emitter;
            entity = mike.removeAllListeners;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'emit';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            report = 1;
            verify = report;
            options = copyRestArgs(verify);
            entity = this;
            zulu = entity.emitter;
            mike = zulu.emit;
            entity = new Array(1);
            oscar = argFoo;
            entity[0] = oscar;
            verify = entity;
            golf = report;
            tango = arraySpread(verify, options, golf);
            verify = mike;
            options = entity;
            golf = zulu;
            entity = apply(verify, options, golf);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'emitUnsafe';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            report = 1;
            verify = report;
            options = copyRestArgs(verify);
            entity = this;
            zulu = entity.emitter;
            mike = zulu.emit;
            entity = new Array(1);
            oscar = argFoo;
            entity[0] = oscar;
            verify = entity;
            golf = report;
            tango = arraySpread(verify, options, golf);
            verify = mike;
            options = entity;
            golf = zulu;
            entity = apply(verify, options, golf);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'listenerCount';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.emitter;
            mike = zulu.listenerCount;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = report;
        mike[8] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/shared/utils/TypedEventEmitter.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();