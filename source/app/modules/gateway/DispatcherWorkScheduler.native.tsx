// app/modules/gateway/DispatcherWorkScheduler.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS;
    var _closure1_slot7 = golf;
    golf = tango.NATIVE_WORK_BACKOFF_MS;
    var _closure1_slot8 = golf;
    golf = tango.NATIVE_WORK_DEADLINE_MS;
    var _closure1_slot9 = golf;
    tango = tango.WorkIdleDeadline;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AppStates;
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.BasicWorkScheduler;
    tango = function(argFoo) {
        tango = function() { // Original name: DispatcherWorkScheduler
            oscar = this;
            entity = _closure1_slot2;
            tango = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(oscar, tango);
            entity = _closure1_slot13;
            entity = entity.bind(report)(oscar, tango);
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 7;
            zulu = oscar[zulu];
            report = tango.bind(report)(zulu);
            tango = report.subscribe;
            zulu = 'APP_STATE_UPDATE';
            mike = function(argFoo) {
                entity = argFoo;
                tango = entity.state;
                entity = _closure1_slot11;
                entity = entity.BACKGROUND;
                zulu = _closure3_slot0;
                mike = zulu._trackAppBackgrounded;
                entity = tango === entity;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = '_queueIdleCallback';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                entity = mike._enableRequestIdleCallback;
                if(!entity) { _fun00006_ip = 80; continue _fun00005 }
 18:
                entity = mike._criticalWorkScheduled;
                if(entity) { _fun00006_ip = 80; continue _fun00005 }
 27:
                entity = global;
                report = entity.performance;
                tango = report.now;
                tango = tango.bind(report)();
                var _closure3_slot1 = tango;
                report = entity.setTimeout;
                entity = undefined;
                tango = function() {
                    tango = global;
                    mike = tango.performance;
                    entity = mike.now;
                    zulu = entity.bind(mike)();
                    mike = _closure3_slot1;
                    oscar = zulu - mike;
                    zulu = _closure3_slot0;
                    mike = zulu._processWorkCallback;
                    verify = zulu._consecutiveFlushesBeforeQueueEmpty;
                    options = tango.Math;
                    golf = options.max;
                    report = _closure1_slot9;
                    oscar = report - oscar;
                    report = 0;
                    options = golf.bind(options)(report, oscar);
                    oscar = _closure1_slot10;
                    golf = tango.Math;
                    report = golf.max;
                    tango = _closure1_slot8;
                    tango = tango * verify;
                    tango = options + tango;
                    entity = _closure1_slot7;
                    yankee = report.bind(golf)(tango, entity);
                    entity = oscar.prototype;
                    tango = Object.create(entity, {constructor: {value: oscar}});
                    offset = false;
                    romeo = tango;
                    entity = new romeo[oscar](yankee, offset, verify);
                    entity = entity instanceof Object ? entity : tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                zulu = 1;
                zulu = report.bind(entity)(tango, zulu);
                mike['_flushIdleHandler'] = zulu;
                return entity;
 80:
                entity = mike._processWorkCallback;
                entity = entity.bind(mike)();
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_clearIdleCallback';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = this;
                zulu = mike._flushIdleHandler;
                entity = null;
                if(!(entity != zulu)) { _fun00008_ip = 42; continue _fun00007 }
 15:
                zulu = global;
                report = zulu.clearTimeout;
                tango = mike._flushIdleHandler;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['_flushIdleHandler'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(golf);
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/DispatcherWorkScheduler.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: createDispatcherWorkScheduler
        entity = _closure1_slot12;
        mike = entity.prototype;
        mike = Object.create(mike, {constructor: {value: entity}});
        zulu = mike;
        entity = new zulu[entity](mike);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['createDispatcherWorkScheduler'] = mike;
    return entity;
})();