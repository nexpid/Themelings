// discord_common/js/packages/kv-storage/js/raw/Runtime.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var4 = global;
    var10 = var4.Object;
    var8 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var7);
    var7 = 0;
    var8 = var6[var7];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = var4.process;
    var8 = var8.env;
    var9 = var8.KV_STORAGE_LOGGING;
    var8 = '1';
    var8 = var8 === var9;
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.Logger;
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var13 = 'Runtime';
    var14 = var9;
    var8 = new var14[var10](var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot5 = var8;
    var2 = function() {
        var5 = _closure1_slot3;
        var4 = function Runtime() {
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var4;
        var1 = {};
        var3 = 'nextId';
        var1['key'] = var3;
        var3 = function value() {
            var2 = this;
            var1 = var2.counter;
            var1 = var1 + 1;
            var2['counter'] = var1;
            return var1;
        };
        var1['value'] = var3;
        var3 = new Array(11);
        var3[0] = var1;
        var1 = {};
        var6 = 'executeAsync';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = this;
            var _closure3_slot0 = var3;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = arg2;
            var _closure3_slot2 = var2;
            var2 = var3.initialize;
            var2 = var2.bind(var3)();
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                var2 = _closure3_slot0;
                var1 = var2.nextId;
                var5 = var1.bind(var2)();
                var3 = _closure3_slot2;
                var1 = undefined;
                var3 = var3.bind(var1)(var5);
                var4 = var2.pending;
                var3 = var4.set;
                var2 = {};
                var2['id'] = var5;
                var6 = _closure3_slot1;
                var2['tag'] = var6;
                var6 = global;
                var7 = var6.performance;
                var6 = var7.now;
                var6 = var6.bind(var7)();
                var2['started'] = var6;
                var6 = arg1;
                var2['resolve'] = var6;
                var6 = arg2;
                var2['reject'] = var6;
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'addCompletionCallback';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = arg1;
            var2 = this;
            var3 = var2.completionCallbacks;
            var2 = var3.push;
            var2 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'addDatabaseStateCallback';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = arg1;
            var2 = this;
            var3 = var2.dbStateCallbacks;
            var2 = var3.push;
            var2 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'removeCompletionCallback';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var3 = arg1;
            var _closure3_slot0 = var3;
            var4 = var2.completionCallbacks;
            var3 = var4.filter;
            var1 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['completionCallbacks'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var3[4] = var1;
        var1 = {};
        var6 = 'removeDatabaseStateCallback';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var3 = arg1;
            var _closure3_slot0 = var3;
            var4 = var2.dbStateCallbacks;
            var3 = var4.filter;
            var1 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['dbStateCallbacks'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var3[5] = var1;
        var1 = {};
        var6 = 'onResponse';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var7 = arg2;
                var3 = this;
                var1 = global;
                var2 = var1.performance;
                var1 = var2.now;
                var5 = var1.bind(var2)();
                var6 = var3.pending;
                var2 = var6.get;
                var1 = var4.id;
                var2 = var2.bind(var6)(var1);
                var1 = null;
                if(!(var1 != var2)) { _fun0004_ip = 127; continue _fun0004 }
 53:
                var9 = var3.pending;
                var8 = var9.delete;
                var6 = var4.id;
                var6 = var8.bind(var9)(var6);
                var6 = var4.timings;
                var8 = var1 != var7;
                var1 = 0;
                if(!var8) { _fun0004_ip = 92; continue _fun0004 }
 89:
                var1 = var7;
 92:
                var6['materializationTimeNanoseconds'] = var1;
                var1 = var3.completeOperation;
                var1 = var1.bind(var3)(var2, var4, var5);
                var1 = var3.resolveOperation;
                var1 = var1.bind(var3)(var2, var4);
 127:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[6] = var1;
        var1 = {};
        var6 = 'onStatus';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = arg1;
                var3 = _closure1_slot6;
                var1 = this;
                var2 = var1.dbStateCallbacks;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0005_ip = 75; continue _fun0005 }
 38:
                var7 = var3.value;
                var6 = var5.handle;
                var2 = var5.state;
                var2 = var7.bind(var1)(var6, var2);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0005_ip = 38; continue _fun0005 }
 75:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[7] = var1;
        var1 = {};
        var6 = 'resolveOperation';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var1 = arg2;
                var2 = var1.ok;
                if(var2) { _fun0006_ip = 84; continue _fun0006 }
 15:
                var4 = var3.reject;
                var2 = var1.data;
                var5 = 'string';
                var2 = typeof var2;
                if(!(var5 !== var2)) { _fun0006_ip = 44; continue _fun0006 }
 37:
                var2 = var1.data;
                _fun0006_ip = 77; continue _fun0006;
 44:
                var5 = global;
                var7 = var5.Error;
                var8 = var1.data;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var9 = var6;
                var5 = new var9[var7](var8, var7);
                var2 = var5 instanceof Object ? var5 : var6;
 77:
                var2 = var4.bind(var3)(var2);
                _fun0006_ip = 100; continue _fun0006;
 84:
                var2 = var3.resolve;
                var1 = var1.data;
                var1 = var2.bind(var3)(var1);
 100:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[8] = var1;
        var1 = {};
        var6 = 'completeOperation';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var4 = arg2;
                var1 = this;
                var2 = var1.completionCallbacks;
                var5 = var2.length;
                var2 = 0;
                if(!(var5 > var2)) { _fun0007_ip = 247; continue _fun0007 }
 29:
                var5 = {};
                var2 = var3.id;
                var5['id'] = var2;
                var2 = var3.tag;
                var5['tag'] = var2;
                var2 = var4.ok;
                var5['ok'] = var2;
                var2 = var4.data;
                var5['value'] = var2;
                var2 = {};
                var6 = var4.timings;
                var7 = var6.queueTimeNanoseconds;
                var6 = 1000000;
                var7 = var7 / var6;
                var2['queue'] = var7;
                var7 = var4.timings;
                var7 = var7.executionTimeNanoseconds;
                var7 = var7 / var6;
                var2['execution'] = var7;
                var7 = var4.timings;
                var7 = var7.materializationTimeNanoseconds;
                var7 = var7 / var6;
                var2['materialization'] = var7;
                var4 = var4.timings;
                var4 = var4.totalTimeNanoseconds;
                var4 = var4 / var6;
                var2['ccTotal'] = var4;
                var4 = var3.started;
                var3 = arg3;
                var3 = var3 - var4;
                var2['jsTotal'] = var3;
                var5['timings'] = var2;
                var2 = _closure1_slot6;
                var1 = var1.completionCallbacks;
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if(var1) { _fun0007_ip = 247; continue _fun0007 }
 222:
                var1 = var2.value;
                var1 = var1.bind(var4)(var5);
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if(!var1) { _fun0007_ip = 222; continue _fun0007 }
 247:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[9] = var1;
        var1 = {};
        var6 = 'initialize';
        var1['key'] = var6;
        var2 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.initialized;
                if(var3) { _fun0008_ip = 132; continue _fun0008 }
 18:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 3;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var6 = var4.KV_RAW;
                var5 = var6.setCallbacks;
                var4 = {};
                var7 = function status(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.onStatus;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['status'] = var7;
                var7 = function response(arg1, arg2) {
                    var4 = _closure3_slot0;
                    var3 = var4.onResponse;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var4['response'] = var7;
                var4 = var5.bind(var6)(var4);
                var3 = _closure1_slot4;
                if(!var3) { _fun0008_ip = 124; continue _fun0008 }
 90:
                var4 = var2.addCompletionCallback;
                var3 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var4 = arg1;
                        var1 = var4.ok;
                        var14 = 'failed';
                        if(!var1) { _fun0009_ip = 22; continue _fun0009 }
 18:
                        var14 = 'completed';
 22:
                        var1 = var4.timings;
                        var2 = var1.execution;
                        var1 = var2.toFixed;
                        var6 = 3;
                        var5 = var1.bind(var2)(var6);
                        var1 = global;
                        var2 = var1.HermesInternal;
                        var3 = var2.concat;
                        var13 = '';
                        var2 = 'ms execution';
                        var2 = var3.bind(var13)(var5, var2);
                        var5 = new Array(4);
                        var5[0] = var2;
                        var2 = var4.timings;
                        var3 = var2.materialization;
                        var2 = var3.toFixed;
                        var7 = var2.bind(var3)(var6);
                        var2 = var1.HermesInternal;
                        var3 = var2.concat;
                        var2 = 'ms js materialization';
                        var2 = var3.bind(var13)(var7, var2);
                        var5[1] = var2;
                        var2 = var4.timings;
                        var3 = var2.ccTotal;
                        var2 = var3.toFixed;
                        var7 = var2.bind(var3)(var6);
                        var2 = var1.HermesInternal;
                        var3 = var2.concat;
                        var2 = 'ms cc completion';
                        var2 = var3.bind(var13)(var7, var2);
                        var5[2] = var2;
                        var2 = var4.timings;
                        var3 = var2.jsTotal;
                        var2 = var3.toFixed;
                        var7 = var2.bind(var3)(var6);
                        var2 = var1.HermesInternal;
                        var3 = var2.concat;
                        var2 = 'ms js reception';
                        var2 = var3.bind(var13)(var7, var2);
                        var5[3] = var2;
                        var3 = var5.join;
                        var2 = ', ';
                        var16 = var3.bind(var5)(var2);
                        var3 = _closure1_slot5;
                        var2 = var3.info;
                        var11 = var4.tag;
                        var22 = var4.id;
                        var4 = var4.timings;
                        var5 = var4.ccTotal;
                        var4 = var5.toFixed;
                        var18 = var4.bind(var5)(var6);
                        var1 = var1.HermesInternal;
                        var8 = var1.concat;
                        var23 = ' (#';
                        var21 = ') ';
                        var19 = ' in ';
                        var17 = 'ms (';
                        var15 = ').';
                        var25 = var13;
                        var24 = var11;
                        var20 = var14;
                        var1 = var25[var8](var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var4.bind(var2)(var3);
                var3 = var2.addDatabaseStateCallback;
                var1 = function(arg1, arg2) {
                    var3 = _closure1_slot5;
                    var2 = var3.info;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var13 = '';
                    var12 = arg1;
                    var11 = ' (state: ';
                    var10 = arg2;
                    var9 = ')';
                    var1 = var13[var8](var12, var11, var10, var9, var8);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
 124:
                var1 = true;
                var2['initialized'] = var1;
 132:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[10] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var5.bind(var2)(var4, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var2['counter'] = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var2['pending'] = var4;
    var4 = false;
    var2['initialized'] = var4;
    var4 = new Array(0);
    var2['dbStateCallbacks'] = var4;
    var4 = new Array(0);
    var2['completionCallbacks'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/kv-storage/js/raw/Runtime.tsx';
    var4 = var5.bind(var6)(var4);
    var3['Runtime'] = var2;
    return var1;
})();