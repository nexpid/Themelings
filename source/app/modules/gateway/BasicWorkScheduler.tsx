// app/modules/gateway/BasicWorkScheduler.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MAX_DISPATCHER_FLUSH_DEADLINE_TRIES;
    var _closure1_slot5 = var8;
    var8 = var4.DISPATCHER_STANDARD_TIMEOUT_MS;
    var _closure1_slot6 = var8;
    var8 = var4.DISPATCHER_IDEAL_TIME_LIMIT_MS;
    var _closure1_slot7 = var8;
    var4 = var4.DISPATCHER_LONG_TIMEOUT_MS;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'DispatcherWorkScheduler';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot9 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function BasicWorkScheduler() {
            var3 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = null;
            var3['_flushTimeoutHandler'] = var4;
            var3['_flushIdleHandler'] = var4;
            var5 = _closure1_slot6;
            var3['_nextDispatchTimeout'] = var5;
            var3['_workCallbackFn'] = var4;
            var4 = 0;
            var3['_consecutiveFlushesBeforeQueueEmpty'] = var4;
            var4 = false;
            var3['_isBackgrounded'] = var4;
            var3['_enableRequestIdleCallback'] = var4;
            var3['_criticalWorkScheduled'] = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.WorkSchedulerTelemetry;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var9 = var5;
            var4 = new var9[var4](var8);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['telemetry'] = var4;
            var2 = _closure1_slot9;
            var3['_logger'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = '_trackAppBackgrounded';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var3 = var2._isBackgrounded;
                if(!(var3 !== var1)) { _fun0001_ip = 103; continue _fun0001 }
 16:
                var2['_isBackgrounded'] = var1;
                var1 = var2._isBackgrounded;
                if(!var1) { _fun0001_ip = 37; continue _fun0001 }
 31:
                var1 = var2.hasWorkScheduled;
 37:
                if(!var1) { _fun0001_ip = 103; continue _fun0001 }
 40:
                var4 = var2.telemetry;
                var3 = var4.track;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = var1.WorkSchedulerTelemetryEvent;
                var1 = var1.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
                var1 = var3.bind(var4)(var1);
                var1 = var2._processWorkCallback;
                var1 = var1.bind(var2)();
 103:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(12);
        var2[0] = var1;
        var1 = {};
        var6 = '_queueIdleCallback';
        var1['key'] = var6;
        var6 = function value() {
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'Not implemented';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = '_clearIdleCallback';
        var1['key'] = var6;
        var6 = function value() {
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'Not implemented';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = '_hasExceededMaxConsecutiveFlushes';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var2 = var1._consecutiveFlushesBeforeQueueEmpty;
            var1 = _closure1_slot5;
            var1 = var2 >= var1;
            return var1;
        };
        var1['get'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = '_processWorkCallback';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = this;
                var3 = var2._workCallbackFn;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 252; continue _fun0002 }
 18:
                var1 = var2._hasExceededMaxConsecutiveFlushes;
                if(var1) { _fun0002_ip = 256; continue _fun0002 }
 32:
                var3 = global;
                var4 = var3.performance;
                var1 = var4.now;
                var5 = var1.bind(var4)();
                var4 = var2._workCallbackFn;
                var1 = arg1;
                var1 = var4.bind(var2)(var1);
                var6 = var3.performance;
                var4 = var6.now;
                var4 = var4.bind(var6)();
                var6 = var2.clearWorkTimeout;
                var6 = var6.bind(var2)();
                var6 = var4 - var5;
                var5 = _closure1_slot7;
                if(!(!(var6 > var5))) { _fun0002_ip = 109; continue _fun0002 }
 103:
                var5 = _closure1_slot6;
                _fun0002_ip = 113; continue _fun0002;
 109:
                var5 = _closure1_slot8;
 113:
                var2['_nextDispatchTimeout'] = var5;
                var5 = var2._consecutiveFlushesBeforeQueueEmpty;
                if(var1) { _fun0002_ip = 143; continue _fun0002 }
 128:
                var1 = 1;
                var1 = var5 + var1;
                var2['_consecutiveFlushesBeforeQueueEmpty'] = var1;
                _fun0002_ip = 252; continue _fun0002;
 143:
                var1 = 0;
                if(!(var5 > var1)) { _fun0002_ip = 238; continue _fun0002 }
 149:
                var6 = var2.telemetry;
                var5 = var6.measure;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 4;
                var4 = var8[var4];
                var8 = undefined;
                var4 = var7.bind(var8)(var4);
                var4 = var4.WorkSchedulerTelemetryMeasurement;
                var4 = var4.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
                var7 = var3.parseInt;
                var10 = var2._consecutiveFlushesBeforeQueueEmpty;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var3 = '';
                var3 = var9.bind(var3)(var10);
                var3 = var7.bind(var8)(var3);
                var3 = var5.bind(var6)(var4, var3);
 238:
                var2['_consecutiveFlushesBeforeQueueEmpty'] = var1;
                var1 = false;
                var2['_criticalWorkScheduled'] = var1;
 252:
                var1 = undefined;
                return var1;
 256:
                var5 = _closure1_slot9;
                var4 = var5.log;
                var3 = 'Unable to fully flush work queue after max retries, skipping future deadline.';
                var3 = var4.bind(var5)(var3);
                var3 = var2._workCallbackFn;
                var3 = var3.bind(var2)();
                var3 = var2.clearWorkTimeout;
                var3 = var3.bind(var2)();
                var10 = var2.telemetry;
                var9 = var10.measure;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 4;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var4 = var4.WorkSchedulerTelemetryMeasurement;
                var5 = var4.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
                var4 = var2._consecutiveFlushesBeforeQueueEmpty;
                var4 = var9.bind(var10)(var5, var4);
                var5 = var2.telemetry;
                var4 = var5.track;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.WorkSchedulerTelemetryEvent;
                var3 = var3.EXCEEDED_MAX_CONSECUTIVE_FLUSHES;
                var3 = var4.bind(var5)(var3);
                var3 = 0;
                var2['_consecutiveFlushesBeforeQueueEmpty'] = var3;
                var1 = _closure1_slot8;
                var2['_nextDispatchTimeout'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'markCriticalWorkScheduled';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var1 = true;
                var2['_criticalWorkScheduled'] = var1;
                var3 = var2._flushIdleHandler;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 43; continue _fun0003 }
 23:
                var1 = var2._clearIdleCallback;
                var1 = var1.bind(var2)();
                var1 = var2._processWorkCallback;
                var1 = var1.bind(var2)();
 43:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'toggleRequestIdleCallback';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var2['_enableRequestIdleCallback'] = var1;
                var1 = !var1;
                if(!var1) { _fun0004_ip = 24; continue _fun0004 }
 18:
                var1 = var2.hasWorkScheduled;
 24:
                if(!var1) { _fun0004_ip = 47; continue _fun0004 }
 27:
                var1 = var2._clearIdleCallback;
                var1 = var1.bind(var2)();
                var1 = var2._processWorkCallback;
                var1 = var1.bind(var2)();
 47:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'isBackgrounded';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._isBackgrounded;
            return var1;
        };
        var1['get'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'hasWorkScheduled';
        var1['key'] = var6;
        var6 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var1 = var2._flushTimeoutHandler;
                var3 = null;
                var1 = var3 != var1;
                if(var1) { _fun0005_ip = 28; continue _fun0005 }
 18:
                var2 = var2._flushIdleHandler;
                var1 = var3 != var2;
 28:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'isRequestIdleCallbackEnabled';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._enableRequestIdleCallback;
            return var1;
        };
        var1['get'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'clearWorkTimeout';
        var1['key'] = var6;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var3 = var2._flushTimeoutHandler;
                var1 = null;
                if(!(var1 != var3)) { _fun0006_ip = 42; continue _fun0006 }
 15:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2._flushTimeoutHandler;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['_flushTimeoutHandler'] = var1;
 42:
                var3 = var2._clearIdleCallback;
                var3 = var3.bind(var2)();
                var3 = _closure1_slot6;
                var2['_nextDispatchTimeout'] = var3;
                var2['_workCallbackFn'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'requestWorkTimeout';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arguments[1];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0007_ip = 20; continue _fun0007 }
 18:
                var4 = false;
 20:
                var5 = arg1;
                var3['_workCallbackFn'] = var5;
                var5 = var3.hasWorkScheduled;
                if(var5) { _fun0007_ip = 200; continue _fun0007 }
 41:
                var8 = var3.telemetry;
                var7 = var8.time;
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var9 = 4;
                var6 = var6[var9];
                var6 = var10.bind(var1)(var6);
                var6 = var6.WorkSchedulerTelemetryTiming;
                var6 = var6.TIME_TO_QUEUE_EMPTY;
                var6 = var7.bind(var8)(var6);
                var7 = var3._nextDispatchTimeout;
                var6 = _closure1_slot8;
                if(!(var7 === var6)) { _fun0007_ip = 152; continue _fun0007 }
 107:
                var7 = var3.telemetry;
                var6 = var7.track;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var8.bind(var1)(var5);
                var5 = var5.WorkSchedulerTelemetryEvent;
                var5 = var5.LONGER_DISPATCH;
                var5 = var6.bind(var7)(var5);
 152:
                if(var4) { _fun0007_ip = 190; continue _fun0007 }
 155:
                var4 = global;
                var5 = var4.setTimeout;
                var4 = var3._nextDispatchTimeout;
                var2 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var2 = var4[var2];
                        var6 = undefined;
                        var7 = var3.bind(var6)(var2);
                        var3 = _closure3_slot0;
                        var5 = var3._workCallbackFn;
                        var4 = null;
                        var5 = var4 != var5;
                        var4 = 'Work callback should be set';
                        var4 = var7.bind(var6)(var5, var4);
                        var3 = var3._isBackgrounded;
                        var2 = _closure3_slot0;
                        if(var3) { _fun0008_ip = 81; continue _fun0008 }
 69:
                        var3 = var2._queueIdleCallback;
                        var3 = var3.bind(var2)();
                        return var6;
 81:
                        var4 = var2.telemetry;
                        var3 = var4.track;
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 4;
                        var1 = var7[var1];
                        var1 = var5.bind(var6)(var1);
                        var1 = var1.WorkSchedulerTelemetryEvent;
                        var1 = var1.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2._processWorkCallback;
                        var1 = var1.bind(var2)();
                        return var1;
                    }
                };
                var2 = var5.bind(var1)(var2, var4);
                var3['_flushTimeoutHandler'] = var2;
                _fun0007_ip = 200; continue _fun0007;
 190:
                var2 = var3._queueIdleCallback;
                var2 = var2.bind(var3)();
 200:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[11] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/BasicWorkScheduler.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BasicWorkScheduler'] = var2;
    return var1;
})();