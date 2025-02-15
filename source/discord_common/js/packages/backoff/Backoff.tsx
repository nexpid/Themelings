// discord_common/js/packages/backoff/Backoff.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: Backoff
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = arguments[0];
                report = arguments[1];
                tango = arguments[2];
                entity = this;
                zulu = undefined;
                if(!(mike === zulu)) { _fun00002_ip = 24; continue _fun00001 }
 18:
                mike = 500;
 24:
                if(!(report === zulu)) { _fun00002_ip = 30; continue _fun00001 }
 28:
                report = null;
 30:
                if(!(tango === zulu)) { _fun00002_ip = 36; continue _fun00001 }
 34:
                tango = true;
 36:
                golf = _closure1_slot0;
                oscar = _closure2_slot0;
                oscar = golf.bind(zulu)(entity, oscar);
                oscar = 0;
                entity['_fails'] = oscar;
                if(!(!(mike <= oscar))) { _fun00002_ip = 107; continue _fun00001 }
 68:
                entity['min'] = mike;
                oscar = null;
                if(!(oscar == report)) { _fun00002_ip = 87; continue _fun00001 }
 80:
                oscar = 10;
                report = oscar * mike;
 87:
                entity['max'] = report;
                entity['jitter'] = tango;
                entity['_current'] = mike;
                return zulu;
 107:
                entity = global;
                mike = entity.Error;
                entity = 'Backoff min value must be greater than zero or backoff will never back-off.';
                entity = mike.bind(zulu)(entity);
                throw entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'fails';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity._fails;
            return entity;
        };
        entity['get'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        oscar = 'current';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._current;
            return entity;
        };
        entity['get'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'pending';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            mike = entity._timeoutId;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        entity['get'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'succeed';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.cancel;
            entity = entity.bind(mike)();
            entity = 0;
            mike['_fails'] = entity;
            entity = mike.min;
            mike['_current'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'fail';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = argFoo;
                mike = this;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = tango;
                report = mike._fails;
                entity = 1;
                entity = report + entity;
                mike['_fails'] = entity;
                report = mike._current;
                entity = 2;
                report = entity * report;
                entity = mike.jitter;
                oscar = report;
                if(!entity) { _fun00004_ip = 82; continue _fun00003 }
 60:
                entity = global;
                golf = entity.Math;
                entity = golf.random;
                entity = entity.bind(golf)();
                oscar = report * entity;
 82:
                entity = global;
                options = entity.Math;
                golf = options.min;
                report = mike._current;
                oscar = report + oscar;
                report = mike.max;
                report = golf.bind(options)(oscar, report);
                mike['_current'] = report;
                oscar = null;
                if(!(oscar != tango)) { _fun00004_ip = 195; continue _fun00003 }
 128:
                report = mike._timeoutId;
                if(!(oscar != report)) { _fun00004_ip = 158; continue _fun00003 }
 138:
                report = mike._callback;
                if(!(report === tango)) { _fun00004_ip = 203; continue _fun00003 }
 148:
                report = mike.cancel;
                report = report.bind(mike)();
 158:
                mike['_callback'] = tango;
                oscar = entity.setTimeout;
                report = mike._current;
                tango = undefined;
                zulu = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0: // try_start_0
                        zulu = _closure3_slot1;
                        mike = null;
                        if(!(mike != zulu)) { _fun00006_ip = 23; continue _fun00005 }
 13:
                        zulu = _closure3_slot1;
                        mike = undefined;
                        mike = zulu.bind(mike)();
 23: // try_end0
                        mike = _closure3_slot0;
                        entity = mike.cancel;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
 41: // catch_target0
                        CatchBlockStart(arg_register=0);
                        zulu = _closure3_slot0;
                        mike = zulu.cancel;
                        mike = mike.bind(zulu)();
                        throw entity;
                    }
                };
                zulu = oscar.bind(tango)(zulu, report);
                mike['_timeoutId'] = zulu;
 195:
                mike = mike._current;
                return mike;
 203:
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                offset = 'callback already pending';
                yankee = mike;
                entity = new yankee[zulu](offset, verify);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'cancel';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = this;
                entity = null;
                mike['_callback'] = entity;
                zulu = mike._timeoutId;
                if(!(entity != zulu)) { _fun00008_ip = 48; continue _fun00007 }
 21:
                zulu = global;
                report = zulu.clearTimeout;
                tango = mike._timeoutId;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['_timeoutId'] = entity;
 48:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[5] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/backoff/Backoff.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();