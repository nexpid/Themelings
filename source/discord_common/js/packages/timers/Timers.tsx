// discord_common/js/packages/timers/Timers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: Timeout
            tango = _closure1_slot0;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = this;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'start';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = arguments[2];
                zulu = this;
                var _closure3_slot0 = zulu;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = undefined;
                if(!(report === entity)) { _fun00002_ip = 27; continue _fun00001 }
 25:
                report = true;
 27:
                tango = zulu.isStarted;
                tango = tango.bind(zulu)();
                if(!tango) { _fun00002_ip = 43; continue _fun00001 }
 40:
                tango = !report;
 43:
                if(tango) { _fun00002_ip = 89; continue _fun00001 }
 46:
                tango = zulu.stop;
                tango = tango.bind(zulu)();
                tango = global;
                oscar = tango.window;
                report = oscar.setTimeout;
                tango = function() {
                    zulu = _closure3_slot0;
                    mike = null;
                    zulu['_ref'] = mike;
                    mike = _closure3_slot1;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike = argFoo;
                mike = report.bind(oscar)(tango, mike);
                zulu['_ref'] = mike;
 89:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'stop';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = this;
                zulu = mike._ref;
                entity = null;
                if(!(entity != zulu)) { _fun00004_ip = 42; continue _fun00003 }
 15:
                zulu = global;
                report = zulu.clearTimeout;
                tango = mike._ref;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['_ref'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'isStarted';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            mike = entity._ref;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    oscar = tango.bind(entity)();
    var _closure1_slot2 = oscar;
    tango = function() {
        tango = _closure1_slot1;
        zulu = function(argFoo, argBar) { // Original name: DelayedCall
            zulu = this;
            report = _closure1_slot0;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = argFoo;
            zulu['_delay'] = tango;
            tango = argBar;
            zulu['_handler'] = tango;
            mike = _closure1_slot2;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            options = tango;
            mike = new options[mike](golf);
            mike = mike instanceof Object ? mike : tango;
            zulu['_timeout'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'set';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            entity = this;
            mike = argFoo;
            entity['_delay'] = mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'delay';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                oscar = arguments[0];
                mike = this;
                entity = undefined;
                if(!(oscar === entity)) { _fun00006_ip = 14; continue _fun00005 }
 12:
                oscar = true;
 14:
                report = mike._timeout;
                tango = report.start;
                zulu = mike._delay;
                mike = mike._handler;
                mike = tango.bind(report)(zulu, mike, oscar);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'cancel';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity._timeout;
            entity = mike.stop;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'isDelayed';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            mike = entity._timeout;
            entity = mike.isStarted;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    report = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: Interval
            tango = _closure1_slot0;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = this;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'start';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            mike = this;
            entity = mike.stop;
            entity = entity.bind(mike)();
            entity = global;
            report = entity.window;
            tango = report.setInterval;
            zulu = argBar;
            entity = argFoo;
            entity = tango.bind(report)(zulu, entity);
            mike['_ref'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'stop';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = this;
                zulu = mike._ref;
                entity = null;
                if(!(entity != zulu)) { _fun00008_ip = 42; continue _fun00007 }
 15:
                zulu = global;
                report = zulu.clearInterval;
                tango = mike._ref;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['_ref'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'isStarted';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            mike = entity._ref;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    golf = 2;
    options = options[golf];
    golf = argBar;
    verify = golf.bind(entity)(options);
    options = verify.fileFinishedImporting;
    golf = '../discord_common/js/packages/timers/Timers.tsx';
    golf = options.bind(verify)(golf);
    zulu['Timeout'] = oscar;
    zulu['DelayedCall'] = report;
    zulu['Interval'] = tango;
    mike = function(argFoo) { // Original name: timeoutPromise
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = global;
            tango = entity.setTimeout;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = function() {
                mike = _closure3_slot0;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            };
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['timeoutPromise'] = mike;
    return entity;
})();