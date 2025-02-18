// app/modules/gateway/BasicWorkScheduler.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.MAX_DISPATCHER_FLUSH_DEADLINE_TRIES;
    var _closure1_slot5 = option;
    option = tangon.DISPATCHER_STANDARD_TIMEOUT_MS;
    var _closure1_slot6 = option;
    option = tangon.DISPATCHER_IDEAL_TIME_LIMIT_MS;
    var _closure1_slot7 = option;
    tangon = tangon.DISPATCHER_LONG_TIMEOUT_MS;
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'DispatcherWorkScheduler';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot9 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: BasicWorkScheduler
            zuuluu = this;
            report = _closure1_slot3;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = null;
            zuuluu['_flushTimeoutHandler'] = tangon;
            zuuluu['_flushIdleHandler'] = tangon;
            report = _closure1_slot6;
            zuuluu['_nextDispatchTimeout'] = report;
            zuuluu['_workCallbackFn'] = tangon;
            tangon = 0;
            zuuluu['_consecutiveFlushesBeforeQueueEmpty'] = tangon;
            tangon = false;
            zuuluu['_isBackgrounded'] = tangon;
            zuuluu['_enableRequestIdleCallback'] = tangon;
            zuuluu['_criticalWorkScheduled'] = tangon;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 4;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            tangon = tangon.WorkSchedulerTelemetry;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            verify = report;
            tangon = new verify[tangon](option);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['telemetry'] = tangon;
            michal = _closure1_slot9;
            zuuluu['_logger'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = '_trackAppBackgrounded';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                michal = this;
                zuuluu = michal._isBackgrounded;
                if(!(zuuluu !== entity)) { _fun00002_ip = 103; continue _fun00001 }
 16:
                michal['_isBackgrounded'] = entity;
                entity = michal._isBackgrounded;
                if(!entity) { _fun00002_ip = 37; continue _fun00001 }
 31:
                entity = michal.hasWorkScheduled;
 37:
                if(!entity) { _fun00002_ip = 103; continue _fun00001 }
 40:
                tangon = michal.telemetry;
                zuuluu = tangon.track;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                entity = 4;
                report = report[entity];
                entity = undefined;
                entity = oscard.bind(entity)(report);
                entity = entity.WorkSchedulerTelemetryEvent;
                entity = entity.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
                entity = zuuluu.bind(tangon)(entity);
                entity = michal._processWorkCallback;
                entity = entity.bind(michal)();
 103:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(12);
        michal[0] = entity;
        entity = {};
        oscard = '_queueIdleCallback';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = 'Not implemented';
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = '_clearIdleCallback';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = 'Not implemented';
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = '_hasExceededMaxConsecutiveFlushes';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            michal = entity._consecutiveFlushesBeforeQueueEmpty;
            entity = _closure1_slot5;
            entity = michal >= entity;
            return entity;
        };
        entity['get'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = '_processWorkCallback';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = this;
                zuuluu = michal._workCallbackFn;
                entity = null;
                if(!(entity != zuuluu)) { _fun00004_ip = 252; continue _fun00003 }
 18:
                entity = michal._hasExceededMaxConsecutiveFlushes;
                if(entity) { _fun00004_ip = 256; continue _fun00003 }
 32:
                zuuluu = global;
                tangon = zuuluu.performance;
                entity = tangon.now;
                report = entity.bind(tangon)();
                tangon = michal._workCallbackFn;
                entity = argFoo;
                entity = tangon.bind(michal)(entity);
                oscard = zuuluu.performance;
                tangon = oscard.now;
                tangon = tangon.bind(oscard)();
                oscard = michal.clearWorkTimeout;
                oscard = oscard.bind(michal)();
                oscard = tangon - report;
                report = _closure1_slot7;
                if(!(!(oscard > report))) { _fun00004_ip = 109; continue _fun00003 }
 103:
                report = _closure1_slot6;
                _fun00004_ip = 113; continue _fun00003;
 109:
                report = _closure1_slot8;
 113:
                michal['_nextDispatchTimeout'] = report;
                report = michal._consecutiveFlushesBeforeQueueEmpty;
                if(entity) { _fun00004_ip = 143; continue _fun00003 }
 128:
                entity = 1;
                entity = report + entity;
                michal['_consecutiveFlushesBeforeQueueEmpty'] = entity;
                _fun00004_ip = 252; continue _fun00003;
 143:
                entity = 0;
                if(!(report > entity)) { _fun00004_ip = 238; continue _fun00003 }
 149:
                oscard = michal.telemetry;
                report = oscard.measure;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                tangon = 4;
                tangon = option[tangon];
                option = undefined;
                tangon = golfie.bind(option)(tangon);
                tangon = tangon.WorkSchedulerTelemetryMeasurement;
                tangon = tangon.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
                golfie = zuuluu.parseInt;
                offset = michal._consecutiveFlushesBeforeQueueEmpty;
                zuuluu = zuuluu.HermesInternal;
                verify = zuuluu.concat;
                zuuluu = '';
                zuuluu = verify.bind(zuuluu)(offset);
                zuuluu = golfie.bind(option)(zuuluu);
                zuuluu = report.bind(oscard)(tangon, zuuluu);
 238:
                michal['_consecutiveFlushesBeforeQueueEmpty'] = entity;
                entity = false;
                michal['_criticalWorkScheduled'] = entity;
 252:
                entity = undefined;
                return entity;
 256:
                report = _closure1_slot9;
                tangon = report.log;
                zuuluu = 'Unable to fully flush work queue after max retries, skipping future deadline.';
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = michal._workCallbackFn;
                zuuluu = zuuluu.bind(michal)();
                zuuluu = michal.clearWorkTimeout;
                zuuluu = zuuluu.bind(michal)();
                offset = michal.telemetry;
                verify = offset.measure;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 4;
                tangon = option[zuuluu];
                oscard = undefined;
                tangon = golfie.bind(oscard)(tangon);
                tangon = tangon.WorkSchedulerTelemetryMeasurement;
                report = tangon.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
                tangon = michal._consecutiveFlushesBeforeQueueEmpty;
                tangon = verify.bind(offset)(report, tangon);
                report = michal.telemetry;
                tangon = report.track;
                zuuluu = option[zuuluu];
                zuuluu = golfie.bind(oscard)(zuuluu);
                zuuluu = zuuluu.WorkSchedulerTelemetryEvent;
                zuuluu = zuuluu.EXCEEDED_MAX_CONSECUTIVE_FLUSHES;
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = 0;
                michal['_consecutiveFlushesBeforeQueueEmpty'] = zuuluu;
                entity = _closure1_slot8;
                michal['_nextDispatchTimeout'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'markCriticalWorkScheduled';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                entity = true;
                michal['_criticalWorkScheduled'] = entity;
                zuuluu = michal._flushIdleHandler;
                entity = null;
                if(!(entity != zuuluu)) { _fun00006_ip = 43; continue _fun00005 }
 23:
                entity = michal._clearIdleCallback;
                entity = entity.bind(michal)();
                entity = michal._processWorkCallback;
                entity = entity.bind(michal)();
 43:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'toggleRequestIdleCallback';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                michal = this;
                michal['_enableRequestIdleCallback'] = entity;
                entity = !entity;
                if(!entity) { _fun00008_ip = 24; continue _fun00007 }
 18:
                entity = michal.hasWorkScheduled;
 24:
                if(!entity) { _fun00008_ip = 47; continue _fun00007 }
 27:
                entity = michal._clearIdleCallback;
                entity = entity.bind(michal)();
                entity = michal._processWorkCallback;
                entity = entity.bind(michal)();
 47:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'isBackgrounded';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._isBackgrounded;
            return entity;
        };
        entity['get'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'hasWorkScheduled';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = this;
                entity = michal._flushTimeoutHandler;
                zuuluu = null;
                entity = zuuluu != entity;
                if(entity) { _fun00010_ip = 28; continue _fun00009 }
 18:
                michal = michal._flushIdleHandler;
                entity = zuuluu != michal;
 28:
                return entity;
            }
        };
        entity['get'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'isRequestIdleCallbackEnabled';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._enableRequestIdleCallback;
            return entity;
        };
        entity['get'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'clearWorkTimeout';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = this;
                zuuluu = michal._flushTimeoutHandler;
                entity = null;
                if(!(entity != zuuluu)) { _fun00012_ip = 42; continue _fun00011 }
 15:
                zuuluu = global;
                report = zuuluu.clearTimeout;
                tangon = michal._flushTimeoutHandler;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['_flushTimeoutHandler'] = entity;
 42:
                zuuluu = michal._clearIdleCallback;
                zuuluu = zuuluu.bind(michal)();
                zuuluu = _closure1_slot6;
                michal['_nextDispatchTimeout'] = zuuluu;
                michal['_workCallbackFn'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'requestWorkTimeout';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = arguments[1];
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                entity = undefined;
                if(!(tangon === entity)) { _fun00014_ip = 20; continue _fun00013 }
 18:
                tangon = false;
 20:
                report = argFoo;
                zuuluu['_workCallbackFn'] = report;
                report = zuuluu.hasWorkScheduled;
                if(report) { _fun00014_ip = 200; continue _fun00013 }
 41:
                option = zuuluu.telemetry;
                golfie = option.time;
                offset = _closure1_slot0;
                oscard = _closure1_slot2;
                verify = 4;
                oscard = oscard[verify];
                oscard = offset.bind(entity)(oscard);
                oscard = oscard.WorkSchedulerTelemetryTiming;
                oscard = oscard.TIME_TO_QUEUE_EMPTY;
                oscard = golfie.bind(option)(oscard);
                golfie = zuuluu._nextDispatchTimeout;
                oscard = _closure1_slot8;
                if(!(golfie === oscard)) { _fun00014_ip = 152; continue _fun00013 }
 107:
                golfie = zuuluu.telemetry;
                oscard = golfie.track;
                option = _closure1_slot0;
                report = _closure1_slot2;
                report = report[verify];
                report = option.bind(entity)(report);
                report = report.WorkSchedulerTelemetryEvent;
                report = report.LONGER_DISPATCH;
                report = oscard.bind(golfie)(report);
 152:
                if(tangon) { _fun00014_ip = 190; continue _fun00013 }
 155:
                tangon = global;
                report = tangon.setTimeout;
                tangon = zuuluu._nextDispatchTimeout;
                michal = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 5;
                        michal = tangon[michal];
                        oscard = undefined;
                        golfie = zuuluu.bind(oscard)(michal);
                        zuuluu = _closure3_slot0;
                        report = zuuluu._workCallbackFn;
                        tangon = null;
                        report = tangon != report;
                        tangon = 'Work callback should be set';
                        tangon = golfie.bind(oscard)(report, tangon);
                        zuuluu = zuuluu._isBackgrounded;
                        michal = _closure3_slot0;
                        if(zuuluu) { _fun00016_ip = 81; continue _fun00015 }
 69:
                        zuuluu = michal._queueIdleCallback;
                        zuuluu = zuuluu.bind(michal)();
                        return oscard;
 81:
                        tangon = michal.telemetry;
                        zuuluu = tangon.track;
                        report = _closure1_slot0;
                        golfie = _closure1_slot2;
                        entity = 4;
                        entity = golfie[entity];
                        entity = report.bind(oscard)(entity);
                        entity = entity.WorkSchedulerTelemetryEvent;
                        entity = entity.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
                        entity = zuuluu.bind(tangon)(entity);
                        entity = michal._processWorkCallback;
                        entity = entity.bind(michal)();
                        return entity;
                    }
                };
                michal = report.bind(entity)(michal, tangon);
                zuuluu['_flushTimeoutHandler'] = michal;
                _fun00014_ip = 200; continue _fun00013;
 190:
                michal = zuuluu._queueIdleCallback;
                michal = michal.bind(zuuluu)();
 200:
                return entity;
            }
        };
        entity['value'] = report;
        michal[11] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/BasicWorkScheduler.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['BasicWorkScheduler'] = michal;
    return entity;
})();