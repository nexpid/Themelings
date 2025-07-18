// discord_common/js/packages/flux/Emitter.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var1 = native4;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Logger;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'Flux';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = function batchEmitChanges(arg1) {
        var2 = arg1;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function Emitter() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var4 = var2.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['changedStores'] = var4;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['reactChangedStores'] = var2;
            var2 = 0;
            var3['changeSentinel'] = var2;
            var2 = false;
            var3['isBatchEmitting'] = var2;
            var3['isDispatching'] = var2;
            var3['isPaused'] = var2;
            var2 = null;
            var3['pauseTimer'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'destroy';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var3 = var1.changedStores;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var2 = var1.reactChangedStores;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = function batchEmitChanges(arg1) {
                var2 = arg1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            _closure1_slot5 = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(11);
        var2[0] = var1;
        var1 = {};
        var6 = 'injectBatchEmitChanges';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = arg1;
            _closure1_slot5 = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'pause';
        var1['key'] = var6;
        var6 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = arguments[0];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0001_ip = 20; continue _fun0001 }
 18:
                var5 = null;
 20:
                var4 = true;
                var3['isPaused'] = var4;
                var6 = var3.pauseTimer;
                var4 = null;
                if(!(var4 !== var6)) { _fun0001_ip = 59; continue _fun0001 }
 40:
                var6 = global;
                var7 = var6.clearTimeout;
                var6 = var3.pauseTimer;
                var6 = var7.bind(var1)(var6);
 59:
                if(!(var4 !== var5)) { _fun0001_ip = 88; continue _fun0001 }
 63:
                var4 = global;
                var4 = var4.setTimeout;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = null;
                    var2['pauseTimer'] = var1;
                    var1 = var2.resume;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var1)(var2, var5);
                var3['pauseTimer'] = var2;
 88:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'resume';
        var1['key'] = var6;
        var6 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arguments[0];
                var5 = this;
                var _closure3_slot0 = var5;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0002_ip = 20; continue _fun0002 }
 18:
                var4 = true;
 20:
                var3 = global;
                var7 = var3.clearTimeout;
                var6 = var5.pauseTimer;
                var6 = var7.bind(var1)(var6);
                var6 = null;
                var5['pauseTimer'] = var6;
                var6 = var5.isPaused;
                if(!var6) { _fun0002_ip = 103; continue _fun0002 }
 56:
                var6 = false;
                var5['isPaused'] = var6;
                if(!var4) { _fun0002_ip = 84; continue _fun0002 }
 67:
                var5 = var5.changedStores;
                var6 = var5.size;
                var5 = 0;
                var4 = var6 > var5;
 84:
                if(!var4) { _fun0002_ip = 103; continue _fun0002 }
 87:
                var3 = var3.setImmediate;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.emit;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
 103:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'batched';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var1 = arg1;
                var2 = var4.isPaused;
                if(var2) { _fun0003_ip = 84; continue _fun0003 }
 15: // try_start_0
                var2 = true;
                var4['isPaused'] = var2;
                var3 = var1;
                var2 = undefined;
                var2 = var3.bind(var2)();
 32: // try_end0
                var5 = var4.resume;
                var3 = false;
                var3 = var5.bind(var4)(var3);
                var3 = var4.emit;
                var3 = var3.bind(var4)();
                return var2;
 57: // catch_target0
                CatchBlockStart(arg_register=1);
                var5 = var4.resume;
                var3 = false;
                var3 = var5.bind(var4)(var3);
                var3 = var4.emit;
                var3 = var3.bind(var4)();
                throw var2;
 84:
                var2 = var1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'emit';
        var1['key'] = var6;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = var3.isBatchEmitting;
                if(var2) { _fun0004_ip = 24; continue _fun0004 }
 18:
                var2 = var3.isPaused;
 24:
                if(var2) { _fun0004_ip = 46; continue _fun0004 }
 27:
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var9 = undefined;
 8: // try_start_0
                        var4 = _closure3_slot0;
                        var1 = true;
                        var4['isBatchEmitting'] = var1;
                        var1 = var4.changeSentinel;
                        var1 = var1 + 1;
                        var4['changeSentinel'] = var1;
                        var6 = 0;
                        var7 = 0;
                        var1 = global;
                        var5 = var1.Set;
                        var10 = var5.prototype;
                        var10 = Object.create(var10, {constructor: {value: var5}});
                        var15 = var10;
                        var5 = new var15[var5](var14);
                        var8 = var5 instanceof Object ? var5 : var10;
                        var5 = var1.Set;
                        var10 = var5.prototype;
                        var10 = Object.create(var10, {constructor: {value: var5}});
                        var15 = var10;
                        var5 = new var15[var5](var14);
                        var9 = var5 instanceof Object ? var5 : var10;
                        var4 = var4.changedStores;
                        var4 = var4.size;
                        var5 = 100;
                        if(!(var4 > var6)) { _fun0005_ip = 167; continue _fun0005 }
 114:
                        var4 = var7;
                        var4 = var4 + 1;
                        var7 = var4;
                        if(!(!(var4 > var5))) { _fun0005_ip = 315; continue _fun0005 }
 130:
                        var4 = _closure3_slot0;
                        var12 = var4.emitNonReactOnce;
                        var11 = var8;
                        var10 = var9;
                        var10 = var12.bind(var4)(var11, var10);
                        var4 = var4.changedStores;
                        var4 = var4.size;
                        if(var4 > var6) { _fun0005_ip = 114; continue _fun0005 }
 167:
                        var4 = _closure3_slot0;
                        var4 = var4.reactChangedStores;
                        var4 = var4.size;
                        if(!(var4 > var6)) { _fun0005_ip = 228; continue _fun0005 }
 186:
                        var4 = var7;
                        var4 = var4 + 1;
                        var7 = var4;
                        if(!(!(var4 > var5))) { _fun0005_ip = 242; continue _fun0005 }
 199:
                        var4 = _closure3_slot0;
                        var8 = var4.emitReactOnce;
                        var8 = var8.bind(var4)();
                        var4 = var4.reactChangedStores;
                        var4 = var4.size;
                        if(var4 > var6) { _fun0005_ip = 186; continue _fun0005 }
 228: // try_end0
                        var4 = _closure3_slot0;
                        var2 = false;
                        var4['isBatchEmitting'] = var2;
                        return var3;
 242: // try_start_1
                        var6 = _closure1_slot4;
                        var5 = var6.error;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var2 = 3;
                        var2 = var7[var2];
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.serialize;
                        var4 = var2.bind(var4)();
                        var2 = 'LastFewActions';
                        var2 = var5.bind(var6)(var2, var4);
                        var4 = var1.Error;
                        var2 = 'react change emit loop detected, aborting';
                        var2 = var4.bind(var3)(var2);
                        throw var2;
 315:
                        var6 = _closure1_slot4;
                        var5 = var6.error;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var2 = 3;
                        var2 = var7[var2];
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.serialize;
                        var4 = var2.bind(var4)();
                        var2 = 'LastFewActions';
                        var2 = var5.bind(var6)(var2, var4);
                        var2 = var1.Error;
                        var1 = 'change emit loop detected, aborting';
                        var1 = var2.bind(var3)(var1);
                        throw var1;
 388: // try_end1 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=0);
                        var3 = _closure3_slot0;
                        var2 = false;
                        var3['isBatchEmitting'] = var2;
                        throw var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
 46:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getChangeSentinel';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.changeSentinel;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getIsPaused';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.isPaused;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'markChanged';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var3 = var4._changeCallbacks;
                var1 = var3.hasAny;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 42; continue _fun0006 }
 25:
                var3 = var4._syncWiths;
                var5 = var3.length;
                var3 = 0;
                var1 = var5 > var3;
 42:
                if(!var1) { _fun0006_ip = 61; continue _fun0006 }
 45:
                var3 = var2.changedStores;
                var1 = var3.add;
                var1 = var1.bind(var3)(var4);
 61:
                var3 = var4._reactChangeCallbacks;
                var1 = var3.hasAny;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0006_ip = 96; continue _fun0006 }
 80:
                var3 = var2.reactChangedStores;
                var1 = var3.add;
                var1 = var1.bind(var3)(var4);
 96:
                var1 = var2.isBatchEmitting;
                if(var1) { _fun0006_ip = 111; continue _fun0006 }
 105:
                var1 = var2.isDispatching;
 111:
                if(var1) { _fun0006_ip = 120; continue _fun0006 }
 114:
                var1 = var2.isPaused;
 120:
                if(var1) { _fun0006_ip = 133; continue _fun0006 }
 123:
                var1 = var2.emit;
                var1 = var1.bind(var2)();
 133:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'emitNonReactOnce';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = this;
                var _closure3_slot0 = var5;
                var2 = arg1;
                var _closure3_slot1 = var2;
                var2 = arg2;
                var _closure3_slot2 = var2;
                var2 = global;
                var4 = var2.Date;
                var3 = var4.now;
                var6 = var3.bind(var4)();
                var4 = var5.changedStores;
                var3 = var2.Set;
                var7 = var3.prototype;
                var7 = Object.create(var7, {constructor: {value: var3}});
                var10 = var7;
                var3 = new var10[var3](var9);
                var3 = var3 instanceof Object ? var3 : var7;
                var5['changedStores'] = var3;
                var5 = var4.forEach;
                var3 = function(arg1) {
                    var3 = arg1;
                    var4 = _closure3_slot2;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var3);
                    var4 = var3._changeCallbacks;
                    var2 = var4.invokeAll;
                    var2 = var2.bind(var4)();
                    var1 = _closure3_slot0;
                    var2 = var1.changedStores;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                };
                var3 = var5.bind(var4)(var3);
                var3 = var4.forEach;
                var1 = function(arg1) {
                    var1 = arg1;
                    var3 = var1._syncWiths;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var1 = arg1;
                            var4 = var1.func;
                            var3 = var1.store;
                            var5 = _closure3_slot1;
                            var2 = var5.has;
                            var2 = var2.bind(var5)(var4);
                            if(var2) { _fun0008_ip = 107; continue _fun0008 }
 35:
                            var5 = _closure3_slot1;
                            var2 = var5.add;
                            var2 = var2.bind(var5)(var4);
                            var2 = undefined;
                            var4 = var4.bind(var2)();
                            var2 = false;
                            if(!(var2 !== var4)) { _fun0008_ip = 107; continue _fun0008 }
 61:
                            var4 = _closure3_slot2;
                            var2 = var4.has;
                            var2 = var2.bind(var4)(var3);
                            if(var2) { _fun0008_ip = 107; continue _fun0008 }
 78:
                            var4 = _closure3_slot2;
                            var2 = var4.add;
                            var2 = var2.bind(var4)(var3);
                            var2 = _closure3_slot0;
                            var1 = var2.markChanged;
                            var1 = var1.bind(var2)(var3);
 107:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var3 = var2.Date;
                var1 = var3.now;
                var5 = var1.bind(var3)();
                var3 = var5 - var6;
                var1 = 100;
                if(!(var3 > var1)) { _fun0007_ip = 218; continue _fun0007 }
 134:
                var4 = _closure1_slot4;
                var3 = var4.verbose;
                var7 = var5 - var6;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = 'Slow batch emitChanges took ';
                var2 = 'ms recentActions:';
                var2 = var6.bind(var5)(var7, var2);
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var1 = var5.serialize;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var2, var1);
 218:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'emitReactOnce';
        var1['key'] = var6;
        var5 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = this;
                var _closure3_slot0 = var5;
                var2 = global;
                var4 = var2.Date;
                var3 = var4.now;
                var6 = var3.bind(var4)();
                var4 = var5.reactChangedStores;
                var3 = var2.Set;
                var7 = var3.prototype;
                var7 = Object.create(var7, {constructor: {value: var3}});
                var10 = var7;
                var3 = new var10[var3](var9);
                var3 = var3 instanceof Object ? var3 : var7;
                var5['reactChangedStores'] = var3;
                var3 = var4.forEach;
                var1 = function(arg1) {
                    var3 = arg1;
                    var2 = var3._reactChangeCallbacks;
                    var1 = var2.invokeAll;
                    var1 = var1.bind(var2)();
                    var1 = _closure3_slot0;
                    var2 = var1.reactChangedStores;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var3 = var2.Date;
                var1 = var3.now;
                var5 = var1.bind(var3)();
                var3 = var5 - var6;
                var1 = 100;
                if(!(var3 > var1)) { _fun0009_ip = 189; continue _fun0009 }
 105:
                var4 = _closure1_slot4;
                var3 = var4.verbose;
                var7 = var5 - var6;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = 'Slow batch emitReactChanges took ';
                var2 = 'ms recentActions:';
                var2 = var6.bind(var5)(var7, var2);
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var1 = var5.serialize;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var2, var1);
 189:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[10] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/Emitter.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();