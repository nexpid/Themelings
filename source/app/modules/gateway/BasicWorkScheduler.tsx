// app/modules/gateway/BasicWorkScheduler.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.MAX_DISPATCHER_FLUSH_DEADLINE_TRIES;
    var _closure1_slot5 = options;
    options = tango.DISPATCHER_STANDARD_TIMEOUT_MS;
    var _closure1_slot6 = options;
    options = tango.DISPATCHER_IDEAL_TIME_LIMIT_MS;
    var _closure1_slot7 = options;
    tango = tango.DISPATCHER_LONG_TIMEOUT_MS;
    var _closure1_slot8 = tango;
    tango = 3;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'DispatcherWorkScheduler';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot9 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: BasicWorkScheduler
            zulu = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = null;
            zulu['_flushTimeoutHandler'] = tango;
            zulu['_flushIdleHandler'] = tango;
            report = _closure1_slot6;
            zulu['_nextDispatchTimeout'] = report;
            zulu['_workCallbackFn'] = tango;
            tango = 0;
            zulu['_consecutiveFlushesBeforeQueueEmpty'] = tango;
            tango = false;
            zulu['_isBackgrounded'] = tango;
            zulu['_enableRequestIdleCallback'] = tango;
            zulu['_criticalWorkScheduled'] = tango;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 4;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            tango = tango.WorkSchedulerTelemetry;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            verify = report;
            tango = new verify[tango](options);
            tango = tango instanceof Object ? tango : report;
            zulu['telemetry'] = tango;
            mike = _closure1_slot9;
            zulu['_logger'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = '_trackAppBackgrounded';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun106029: for(var _fun106029_ip = 0; ; ) switch(_fun106029_ip) {
 0:
                entity = argFoo;
                mike = this;
                zulu = mike._isBackgrounded;
                if(!(zulu !== entity)) { _fun106029_ip = 103; continue _fun106029 }
 16:
                mike['_isBackgrounded'] = entity;
                entity = mike._isBackgrounded;
                if(!entity) { _fun106029_ip = 37; continue _fun106029 }
 31:
                entity = mike.hasWorkScheduled;
 37:
                if(!entity) { _fun106029_ip = 103; continue _fun106029 }
 40:
                tango = mike.telemetry;
                zulu = tango.track;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                entity = 4;
                report = report[entity];
                entity = undefined;
                entity = oscar.bind(entity)(report);
                entity = entity.WorkSchedulerTelemetryEvent;
                entity = entity.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
                entity = zulu.bind(tango)(entity);
                entity = mike._processWorkCallback;
                entity = entity.bind(mike)();
 103:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(12);
        mike[0] = entity;
        entity = {};
        oscar = '_queueIdleCallback';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'Not implemented';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = '_clearIdleCallback';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'Not implemented';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = '_hasExceededMaxConsecutiveFlushes';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            mike = entity._consecutiveFlushesBeforeQueueEmpty;
            entity = _closure1_slot5;
            entity = mike >= entity;
            return entity;
        };
        entity['get'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = '_processWorkCallback';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun106033: for(var _fun106033_ip = 0; ; ) switch(_fun106033_ip) {
 0:
                mike = this;
                zulu = mike._workCallbackFn;
                entity = null;
                if(!(entity != zulu)) { _fun106033_ip = 252; continue _fun106033 }
 18:
                entity = mike._hasExceededMaxConsecutiveFlushes;
                if(entity) { _fun106033_ip = 256; continue _fun106033 }
 32:
                zulu = global;
                tango = zulu.performance;
                entity = tango.now;
                report = entity.bind(tango)();
                tango = mike._workCallbackFn;
                entity = argFoo;
                entity = tango.bind(mike)(entity);
                oscar = zulu.performance;
                tango = oscar.now;
                tango = tango.bind(oscar)();
                oscar = mike.clearWorkTimeout;
                oscar = oscar.bind(mike)();
                oscar = tango - report;
                report = _closure1_slot7;
                if(!(!(oscar > report))) { _fun106033_ip = 109; continue _fun106033 }
 103:
                report = _closure1_slot6;
                _fun106033_ip = 113; continue _fun106033;
 109:
                report = _closure1_slot8;
 113:
                mike['_nextDispatchTimeout'] = report;
                report = mike._consecutiveFlushesBeforeQueueEmpty;
                if(entity) { _fun106033_ip = 143; continue _fun106033 }
 128:
                entity = 1;
                entity = report + entity;
                mike['_consecutiveFlushesBeforeQueueEmpty'] = entity;
                _fun106033_ip = 252; continue _fun106033;
 143:
                entity = 0;
                if(!(report > entity)) { _fun106033_ip = 238; continue _fun106033 }
 149:
                oscar = mike.telemetry;
                report = oscar.measure;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                tango = 4;
                tango = options[tango];
                options = undefined;
                tango = golf.bind(options)(tango);
                tango = tango.WorkSchedulerTelemetryMeasurement;
                tango = tango.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
                golf = zulu.parseInt;
                offset = mike._consecutiveFlushesBeforeQueueEmpty;
                zulu = zulu.HermesInternal;
                verify = zulu.concat;
                zulu = '';
                zulu = verify.bind(zulu)(offset);
                zulu = golf.bind(options)(zulu);
                zulu = report.bind(oscar)(tango, zulu);
 238:
                mike['_consecutiveFlushesBeforeQueueEmpty'] = entity;
                entity = false;
                mike['_criticalWorkScheduled'] = entity;
 252:
                entity = undefined;
                return entity;
 256:
                report = _closure1_slot9;
                tango = report.log;
                zulu = 'Unable to fully flush work queue after max retries, skipping future deadline.';
                zulu = tango.bind(report)(zulu);
                zulu = mike._workCallbackFn;
                zulu = zulu.bind(mike)();
                zulu = mike.clearWorkTimeout;
                zulu = zulu.bind(mike)();
                offset = mike.telemetry;
                verify = offset.measure;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                zulu = 4;
                tango = options[zulu];
                oscar = undefined;
                tango = golf.bind(oscar)(tango);
                tango = tango.WorkSchedulerTelemetryMeasurement;
                report = tango.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
                tango = mike._consecutiveFlushesBeforeQueueEmpty;
                tango = verify.bind(offset)(report, tango);
                report = mike.telemetry;
                tango = report.track;
                zulu = options[zulu];
                zulu = golf.bind(oscar)(zulu);
                zulu = zulu.WorkSchedulerTelemetryEvent;
                zulu = zulu.EXCEEDED_MAX_CONSECUTIVE_FLUSHES;
                zulu = tango.bind(report)(zulu);
                zulu = 0;
                mike['_consecutiveFlushesBeforeQueueEmpty'] = zulu;
                entity = _closure1_slot8;
                mike['_nextDispatchTimeout'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'markCriticalWorkScheduled';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun106034: for(var _fun106034_ip = 0; ; ) switch(_fun106034_ip) {
 0:
                mike = this;
                entity = true;
                mike['_criticalWorkScheduled'] = entity;
                zulu = mike._flushIdleHandler;
                entity = null;
                if(!(entity != zulu)) { _fun106034_ip = 43; continue _fun106034 }
 23:
                entity = mike._clearIdleCallback;
                entity = entity.bind(mike)();
                entity = mike._processWorkCallback;
                entity = entity.bind(mike)();
 43:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'toggleRequestIdleCallback';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun106035: for(var _fun106035_ip = 0; ; ) switch(_fun106035_ip) {
 0:
                entity = argFoo;
                mike = this;
                mike['_enableRequestIdleCallback'] = entity;
                entity = !entity;
                if(!entity) { _fun106035_ip = 24; continue _fun106035 }
 18:
                entity = mike.hasWorkScheduled;
 24:
                if(!entity) { _fun106035_ip = 47; continue _fun106035 }
 27:
                entity = mike._clearIdleCallback;
                entity = entity.bind(mike)();
                entity = mike._processWorkCallback;
                entity = entity.bind(mike)();
 47:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'isBackgrounded';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._isBackgrounded;
            return entity;
        };
        entity['get'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'hasWorkScheduled';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            _fun106037: for(var _fun106037_ip = 0; ; ) switch(_fun106037_ip) {
 0:
                mike = this;
                entity = mike._flushTimeoutHandler;
                zulu = null;
                entity = zulu != entity;
                if(entity) { _fun106037_ip = 28; continue _fun106037 }
 18:
                mike = mike._flushIdleHandler;
                entity = zulu != mike;
 28:
                return entity;
            }
        };
        entity['get'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'isRequestIdleCallbackEnabled';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._enableRequestIdleCallback;
            return entity;
        };
        entity['get'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'clearWorkTimeout';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun106039: for(var _fun106039_ip = 0; ; ) switch(_fun106039_ip) {
 0:
                mike = this;
                zulu = mike._flushTimeoutHandler;
                entity = null;
                if(!(entity != zulu)) { _fun106039_ip = 42; continue _fun106039 }
 15:
                zulu = global;
                report = zulu.clearTimeout;
                tango = mike._flushTimeoutHandler;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['_flushTimeoutHandler'] = entity;
 42:
                zulu = mike._clearIdleCallback;
                zulu = zulu.bind(mike)();
                zulu = _closure1_slot6;
                mike['_nextDispatchTimeout'] = zulu;
                mike['_workCallbackFn'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'requestWorkTimeout';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun106040: for(var _fun106040_ip = 0; ; ) switch(_fun106040_ip) {
 0:
                tango = arguments[1];
                zulu = this;
                var _closure3_slot0 = zulu;
                entity = undefined;
                if(!(tango === entity)) { _fun106040_ip = 20; continue _fun106040 }
 18:
                tango = false;
 20:
                report = argFoo;
                zulu['_workCallbackFn'] = report;
                report = zulu.hasWorkScheduled;
                if(report) { _fun106040_ip = 200; continue _fun106040 }
 41:
                options = zulu.telemetry;
                golf = options.time;
                offset = _closure1_slot0;
                oscar = _closure1_slot2;
                verify = 4;
                oscar = oscar[verify];
                oscar = offset.bind(entity)(oscar);
                oscar = oscar.WorkSchedulerTelemetryTiming;
                oscar = oscar.TIME_TO_QUEUE_EMPTY;
                oscar = golf.bind(options)(oscar);
                golf = zulu._nextDispatchTimeout;
                oscar = _closure1_slot8;
                if(!(golf === oscar)) { _fun106040_ip = 152; continue _fun106040 }
 107:
                golf = zulu.telemetry;
                oscar = golf.track;
                options = _closure1_slot0;
                report = _closure1_slot2;
                report = report[verify];
                report = options.bind(entity)(report);
                report = report.WorkSchedulerTelemetryEvent;
                report = report.LONGER_DISPATCH;
                report = oscar.bind(golf)(report);
 152:
                if(tango) { _fun106040_ip = 190; continue _fun106040 }
 155:
                tango = global;
                report = tango.setTimeout;
                tango = zulu._nextDispatchTimeout;
                mike = function() {
                    _fun106041: for(var _fun106041_ip = 0; ; ) switch(_fun106041_ip) {
 0:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 5;
                        mike = tango[mike];
                        oscar = undefined;
                        golf = zulu.bind(oscar)(mike);
                        zulu = _closure3_slot0;
                        report = zulu._workCallbackFn;
                        tango = null;
                        report = tango != report;
                        tango = 'Work callback should be set';
                        tango = golf.bind(oscar)(report, tango);
                        zulu = zulu._isBackgrounded;
                        mike = _closure3_slot0;
                        if(zulu) { _fun106041_ip = 81; continue _fun106041 }
 69:
                        zulu = mike._queueIdleCallback;
                        zulu = zulu.bind(mike)();
                        return oscar;
 81:
                        tango = mike.telemetry;
                        zulu = tango.track;
                        report = _closure1_slot0;
                        golf = _closure1_slot2;
                        entity = 4;
                        entity = golf[entity];
                        entity = report.bind(oscar)(entity);
                        entity = entity.WorkSchedulerTelemetryEvent;
                        entity = entity.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
                        entity = zulu.bind(tango)(entity);
                        entity = mike._processWorkCallback;
                        entity = entity.bind(mike)();
                        return entity;
                    }
                };
                mike = report.bind(entity)(mike, tango);
                zulu['_flushTimeoutHandler'] = mike;
                _fun106040_ip = 200; continue _fun106040;
 190:
                mike = zulu._queueIdleCallback;
                mike = mike.bind(zulu)();
 200:
                return entity;
            }
        };
        entity['value'] = report;
        mike[11] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/BasicWorkScheduler.tsx';
    tango = report.bind(oscar)(tango);
    zulu['BasicWorkScheduler'] = mike;
    return entity;
})();