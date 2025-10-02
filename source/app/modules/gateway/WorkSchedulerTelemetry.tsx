// app/modules/gateway/WorkSchedulerTelemetry.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var7 = global;
    var10 = var7.Object;
    var6 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var4);
    var13 = 0;
    var4 = var9[var13];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var6 = {};
    var4 = 'longer_dispatch';
    var6['LONGER_DISPATCH'] = var4;
    var4 = 'exceeded_max_consecutive_flushes';
    var6['EXCEEDED_MAX_CONSECUTIVE_FLUSHES'] = var4;
    var4 = 'fired_due_to_max_timeout';
    var6['FIRED_DUE_TO_MAX_TIMEOUT'] = var4;
    var4 = 'skip_idle_callback_due_to_backgrounded';
    var6['SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED'] = var4;
    var5 = {};
    var4 = 'time_to_fire_idle_callback';
    var5['TIME_TO_FIRE_IDLE_CALLBACK'] = var4;
    var4 = 'time_to_flush_all_work';
    var5['TIME_TO_QUEUE_EMPTY'] = var4;
    var4 = 'time_over_deadline';
    var5['TIME_OVER_DEADLINE'] = var4;
    var4 = 'initial_time_of_deadline';
    var5['DEADLINE_INITIAL_TIME_REMAINING'] = var4;
    var4 = {};
    var10 = 'count_dispatches_left_after_yield';
    var4['COUNT_DISPATCHES_LEFT_AFTER_YIELD'] = var10;
    var10 = 'count_flush_before_queue_empty';
    var4['COUNT_FLUSH_BEFORE_QUEUE_EMPTY'] = var10;
    var10 = 'count_initial_dispatches_length';
    var4['COUNT_INITIAL_DISPATCHS_LENGTH'] = var10;
    var12 = var7.Object;
    var11 = var12.freeze;
    var10 = {};
    var14 = var5.TIME_TO_FIRE_IDLE_CALLBACK;
    var15 = null;
    var10[var14] = var15;
    var14 = var5.TIME_TO_QUEUE_EMPTY;
    var10[var14] = var15;
    var14 = var5.TIME_OVER_DEADLINE;
    var10[var14] = var15;
    var14 = var5.DEADLINE_INITIAL_TIME_REMAINING;
    var10[var14] = var15;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot5 = var10;
    var12 = var7.Object;
    var11 = var12.freeze;
    var10 = {};
    var15 = var5.TIME_TO_FIRE_IDLE_CALLBACK;
    var14 = [0, 0];
    var10[var15] = var14;
    var15 = var5.TIME_TO_QUEUE_EMPTY;
    var14 = [0, 0];
    var10[var15] = var14;
    var15 = var5.TIME_OVER_DEADLINE;
    var14 = [0, 0];
    var10[var15] = var14;
    var15 = var5.DEADLINE_INITIAL_TIME_REMAINING;
    var14 = [0, 0];
    var10[var15] = var14;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot6 = var10;
    var12 = var7.Object;
    var11 = var12.freeze;
    var10 = {};
    var15 = var4.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
    var14 = [0, 0];
    var10[var15] = var14;
    var15 = var4.COUNT_DISPATCHES_LEFT_AFTER_YIELD;
    var14 = [0, 0];
    var10[var15] = var14;
    var15 = var4.COUNT_INITIAL_DISPATCHS_LENGTH;
    var14 = [0, 0];
    var10[var15] = var14;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot7 = var10;
    var11 = var7.Object;
    var10 = var11.freeze;
    var7 = {};
    var12 = var6.LONGER_DISPATCH;
    var7[var12] = var13;
    var12 = var6.EXCEEDED_MAX_CONSECUTIVE_FLUSHES;
    var7[var12] = var13;
    var12 = var6.FIRED_DUE_TO_MAX_TIMEOUT;
    var7[var12] = var13;
    var12 = var6.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
    var7[var12] = var13;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot8 = var7;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function WorkSchedulerTelemetry() {
            var3 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 3;
            var7 = var6[var4];
            var9 = var5.bind(var1)(var7);
            var8 = var9.cloneDeep;
            var7 = _closure1_slot5;
            var7 = var8.bind(var9)(var7);
            var3['_timeTracking'] = var7;
            var7 = var6[var4];
            var9 = var5.bind(var1)(var7);
            var8 = var9.cloneDeep;
            var7 = _closure1_slot6;
            var7 = var8.bind(var9)(var7);
            var3['_timingStats'] = var7;
            var7 = var6[var4];
            var9 = var5.bind(var1)(var7);
            var8 = var9.cloneDeep;
            var7 = _closure1_slot7;
            var7 = var8.bind(var9)(var7);
            var3['_measurements'] = var7;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.cloneDeep;
            var2 = _closure1_slot8;
            var2 = var4.bind(var5)(var2);
            var3['_eventCounts'] = var2;
            var2 = false;
            var3['_enabled'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'reset';
        var1['key'] = var2;
        var2 = function value() {
            var3 = this;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 3;
            var7 = var6[var4];
            var1 = undefined;
            var9 = var5.bind(var1)(var7);
            var8 = var9.cloneDeep;
            var7 = _closure1_slot5;
            var7 = var8.bind(var9)(var7);
            var3['_timeTracking'] = var7;
            var7 = var6[var4];
            var9 = var5.bind(var1)(var7);
            var8 = var9.cloneDeep;
            var7 = _closure1_slot6;
            var7 = var8.bind(var9)(var7);
            var3['_timingStats'] = var7;
            var7 = var6[var4];
            var9 = var5.bind(var1)(var7);
            var8 = var9.cloneDeep;
            var7 = _closure1_slot7;
            var7 = var8.bind(var9)(var7);
            var3['_measurements'] = var7;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.cloneDeep;
            var2 = _closure1_slot8;
            var2 = var4.bind(var5)(var2);
            var3['_eventCounts'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(11);
        var2[0] = var1;
        var1 = {};
        var6 = 'clearTime';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._timeTracking;
            var2 = null;
            var1 = arg1;
            var3[var1] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = '_storeTimeValue';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var4 = arg1;
            var3 = this;
            var6 = _closure1_slot2;
            var1 = var3._timingStats;
            var5 = var1[var4];
            var1 = undefined;
            var2 = 2;
            var5 = var6.bind(var1)(var5, var2);
            var2 = 0;
            var2 = var5[var2];
            var6 = 1;
            var5 = var5[var6];
            var3 = var3._timingStats;
            var7 = var2 * var5;
            var2 = arg2;
            var7 = var7 + var2;
            var2 = var5 + var6;
            var7 = var7 / var2;
            var2 = new Array(2);
            var2[0] = var7;
            var5 = var5 + var6;
            var2[1] = var5;
            var3[var4] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'time';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = this;
                var2 = var1._enabled;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var1._timeTracking;
                var1 = global;
                var2 = var1.performance;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var3[var1] = var2;
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'timeEnd';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1._enabled;
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var1._timeTracking;
                var5 = var2[var3];
                var2 = null;
                if(!(var2 != var5)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var4 = global;
                var6 = var4.performance;
                var4 = var6.now;
                var4 = var4.bind(var6)();
                var5 = var4 - var5;
                var4 = var1._storeTimeValue;
                var4 = var4.bind(var1)(var3, var5);
                var1 = var1._timeTracking;
                var1[var3] = var2;
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'timeTrack';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var1 = var4._enabled;
                if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 3:
                var3 = var4._storeTimeValue;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 7:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'measure';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var1 = var2._enabled;
                if(!var1) { _fun0004_ip = 8; continue _fun0004 }
case 5:
                var6 = _closure1_slot2;
                var1 = var2._measurements;
                var5 = var1[var3];
                var4 = undefined;
                var1 = 2;
                var4 = var6.bind(var4)(var5, var1);
                var1 = 0;
                var1 = var4[var1];
                var5 = 1;
                var4 = var4[var5];
                var2 = var2._measurements;
                var6 = var1 * var4;
                var1 = arg2;
                var6 = var6 + var1;
                var1 = var4 + var5;
                var6 = var6 / var1;
                var1 = new Array(2);
                var1[0] = var6;
                var4 = var4 + var5;
                var1[1] = var4;
                var2[var3] = var1;
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'track';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1._enabled;
                if(!var2) { _fun0005_ip = 9; continue _fun0005 }
case 5:
                var2 = var1._eventCounts;
                var4 = var2[var3];
                var1 = 1;
                var1 = var4 + var1;
                var2[var3] = var1;
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'toggleTelemetry';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['_enabled'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'isTelemetryEnabled';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._enabled;
            return var1;
        };
        var1['get'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'generateTelemetry';
        var1['key'] = var6;
        var5 = function value() {
            var5 = this;
            var6 = global;
            var3 = var6.Object;
            var2 = var3.entries;
            var1 = var5._timingStats;
            var7 = var2.bind(var3)(var1);
            var3 = var7.reduce;
            var2 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var8 = arg2;
                    var2 = var8[Symbol.iterator];
                    var8 = var2().next;
                    var12 = undefined;
                    var3 = undefined;
                    var6 = undefined;
                    var9 = var8().value;
                    var10 = var2;
                    var10 = var10 === var12;
                    var3 = var10;
                    if(var10) { _fun0006_ip = 10; continue _fun0006 }
case 11:
                    var6 = var9;
case 10:
                    var5 = var6;
                    var6 = undefined;
                    var9 = var3;
                    if(var9) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                    var8 = var8().value;
                    var9 = var2;
                    var9 = var9 === var12;
                    var3 = var9;
                    if(var9) { _fun0006_ip = 12; continue _fun0006 }
case 14:
                    var6 = var8;
case 12: // try_start_0
                    var8 = var6;
                    var10 = var8;
                    var6 = var10[Symbol.iterator];
                    var10 = var6().next;
                    var8 = undefined;
                    var9 = undefined;
                    var10 = var10().value;
                    var11 = var6;
                    var11 = var11 === var12;
                    var8 = var11;
                    if(var11) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var9 = var10;
case 15:
                    var7 = var9;
                    if(var8) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var6.return();
case 17: // try_end0
                    var6 = var3;
                    if(var6) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var2.return();
case 19:
                    var9 = var5;
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var8 = var6.concat;
                    var6 = 'avg_';
                    var6 = var8.bind(var6)(var9);
                    var9 = var7;
                    var8 = var9.toFixed;
                    var7 = 2;
                    var9 = var8.bind(var9)(var7);
                    var5 = var5.HermesInternal;
                    var8 = var5.concat;
                    var7 = '';
                    var5 = 'ms';
                    var5 = var8.bind(var7)(var9, var5);
                    var4[var6] = var5;
                    return var4;
case 21: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun0006_ip = 22; continue _fun0006;
case 23:
                    CatchBlockStart(arg_register=0);
case 22:
                    if(var3) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var2.return();
case 24:
                    throw var1;
                }
            };
            var1 = {};
            var3 = var3.bind(var7)(var2, var1);
            var7 = var6.Object;
            var2 = var7.entries;
            var1 = var5._measurements;
            var8 = var2.bind(var7)(var1);
            var7 = var8.reduce;
            var2 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = arg1;
                    var8 = arg2;
                    var2 = var8[Symbol.iterator];
                    var8 = var2().next;
                    var12 = undefined;
                    var3 = undefined;
                    var6 = undefined;
                    var9 = var8().value;
                    var10 = var2;
                    var10 = var10 === var12;
                    var3 = var10;
                    if(var10) { _fun0007_ip = 10; continue _fun0007 }
case 11:
                    var6 = var9;
case 10:
                    var5 = var6;
                    var6 = undefined;
                    var9 = var3;
                    if(var9) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                    var8 = var8().value;
                    var9 = var2;
                    var9 = var9 === var12;
                    var3 = var9;
                    if(var9) { _fun0007_ip = 12; continue _fun0007 }
case 14:
                    var6 = var8;
case 12: // try_start_0
                    var8 = var6;
                    var10 = var8;
                    var6 = var10[Symbol.iterator];
                    var10 = var6().next;
                    var8 = undefined;
                    var9 = undefined;
                    var10 = var10().value;
                    var11 = var6;
                    var11 = var11 === var12;
                    var8 = var11;
                    if(var11) { _fun0007_ip = 15; continue _fun0007 }
case 16:
                    var9 = var10;
case 15:
                    var7 = var9;
                    if(var8) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                    var6.return();
case 17: // try_end0
                    var6 = var3;
                    if(var6) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                    var2.return();
case 19:
                    var9 = var5;
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var8 = var6.concat;
                    var6 = 'avg_';
                    var6 = var8.bind(var6)(var9);
                    var9 = var7;
                    var8 = var9.toFixed;
                    var7 = 2;
                    var8 = var8.bind(var9)(var7);
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var5 = '';
                    var5 = var7.bind(var5)(var8);
                    var4[var6] = var5;
                    return var4;
case 26: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun0007_ip = 27; continue _fun0007;
case 28:
                    CatchBlockStart(arg_register=0);
case 27:
                    if(var3) { _fun0007_ip = 29; continue _fun0007 }
case 23:
                    var2.return();
case 29:
                    throw var1;
                }
            };
            var1 = {};
            var2 = var7.bind(var8)(var2, var1);
            var1 = {};
            var7 = var6.Object;
            var6 = var7.entries;
            var5 = var5._eventCounts;
            var7 = var6.bind(var7)(var5);
            var6 = var7.reduce;
            var5 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var4 = arg2;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var5 = var4().value;
                    var3 = var2;
                    var8 = undefined;
                    var3 = var3 === var8;
                    var6 = undefined;
                    if(var3) { _fun0008_ip = 7; continue _fun0008 }
case 30:
                    var6 = var5;
case 7:
                    var5 = undefined;
                    if(var3) { _fun0008_ip = 31; continue _fun0008 }
case 10:
                    var7 = var4().value;
                    var4 = var2;
                    var4 = var4 === var8;
                    var5 = undefined;
                    var3 = var4;
                    if(var4) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var5 = var7;
                    var3 = var4;
case 31:
                    if(var3) { _fun0008_ip = 12; continue _fun0008 }
case 14:
                    var2.return();
case 12:
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'count_';
                    var3 = var4.bind(var3)(var6);
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var2 = '';
                    var2 = var4.bind(var2)(var5);
                    var1[var3] = var2;
                    return var1;
                }
            };
            var4 = {};
            var9 = var6.bind(var7)(var5, var4);
            var10 = var1;
            var4 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var3;
            var3 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var2;
            var2 = copyDataProperties(var10, var9);
            return var1;
        };
        var1['value'] = var5;
        var2[10] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/gateway/WorkSchedulerTelemetry.tsx';
    var7 = var8.bind(var9)(var7);
    var3['WorkSchedulerTelemetryEvent'] = var6;
    var3['WorkSchedulerTelemetryTiming'] = var5;
    var3['WorkSchedulerTelemetryMeasurement'] = var4;
    var3['WorkSchedulerTelemetry'] = var2;
    return var1;
})();