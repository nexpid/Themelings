// discord_common/js/packages/flux/Emitter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportAll;
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
case 0:
                var5 = arguments[0];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = null;
case 2:
                var4 = true;
                var3['isPaused'] = var4;
                var6 = var3.pauseTimer;
                var4 = null;
                if(!(var4 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var6 = global;
                var7 = var6.clearTimeout;
                var6 = var3.pauseTimer;
                var6 = var7.bind(var1)(var6);
case 4:
                if(!(var4 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
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
case 6:
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
case 0:
                var4 = arguments[0];
                var5 = this;
                var _closure3_slot0 = var5;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = true;
case 2:
                var3 = global;
                var7 = var3.clearTimeout;
                var6 = var5.pauseTimer;
                var6 = var7.bind(var1)(var6);
                var6 = null;
                var5['pauseTimer'] = var6;
                var6 = var5.isPaused;
                if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var6 = false;
                var5['isPaused'] = var6;
                if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var5 = var5.changedStores;
                var6 = var5.size;
                var5 = 0;
                var4 = var6 > var5;
case 10:
                if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 12:
                var3 = var3.setImmediate;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.emit;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
case 8:
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
case 0:
                var4 = this;
                var1 = arg1;
                var2 = var4.isPaused;
                if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 13: // try_start_0
                var2 = true;
                var4['isPaused'] = var2;
                var3 = var1;
                var2 = undefined;
                var2 = var3.bind(var2)();
case 14: // try_end0
                var5 = var4.resume;
                var3 = false;
                var3 = var5.bind(var4)(var3);
                var3 = var4.emit;
                var3 = var3.bind(var4)();
                return var2;
case 15: // catch_target0
                CatchBlockStart(arg_register=1);
                var5 = var4.resume;
                var3 = false;
                var3 = var5.bind(var4)(var3);
                var3 = var4.emit;
                var3 = var3.bind(var4)();
                throw var2;
case 10:
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
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = var3.isBatchEmitting;
                if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 3:
                var2 = var3.isPaused;
case 16:
                if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var9 = undefined;
case 19: // try_start_0
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
                        if(!(var4 > var6)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                        var4 = var7;
                        var4 = var4 + 1;
                        var7 = var4;
                        if(!(!(var4 > var5))) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                        var4 = _closure3_slot0;
                        var12 = var4.emitNonReactOnce;
                        var11 = var8;
                        var10 = var9;
                        var10 = var12.bind(var4)(var11, var10);
                        var4 = var4.changedStores;
                        var4 = var4.size;
                        if(var4 > var6) { _fun0005_ip = 21; continue _fun0005 }
case 20:
                        var4 = _closure3_slot0;
                        var4 = var4.reactChangedStores;
                        var4 = var4.size;
                        if(!(var4 > var6)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                        var4 = var7;
                        var4 = var4 + 1;
                        var7 = var4;
                        if(!(!(var4 > var5))) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                        var4 = _closure3_slot0;
                        var8 = var4.emitReactOnce;
                        var8 = var8.bind(var4)();
                        var4 = var4.reactChangedStores;
                        var4 = var4.size;
                        if(var4 > var6) { _fun0005_ip = 25; continue _fun0005 }
case 24: // try_end0
                        var4 = _closure3_slot0;
                        var2 = false;
                        var4['isBatchEmitting'] = var2;
                        return var3;
case 26: // try_start_1
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
case 22:
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
case 28: // try_end1 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=0);
                        var3 = _closure3_slot0;
                        var2 = false;
                        var3['isBatchEmitting'] = var2;
                        throw var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
case 17:
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
case 0:
                var4 = arg1;
                var2 = this;
                var3 = var4._changeCallbacks;
                var1 = var3.hasAny;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var3 = var4._syncWiths;
                var5 = var3.length;
                var3 = 0;
                var1 = var5 > var3;
case 29:
                if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                var3 = var2.changedStores;
                var1 = var3.add;
                var1 = var1.bind(var3)(var4);
case 31:
                var3 = var4._reactChangeCallbacks;
                var1 = var3.hasAny;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                var3 = var2.reactChangedStores;
                var1 = var3.add;
                var1 = var1.bind(var3)(var4);
case 33:
                var1 = var2.isBatchEmitting;
                if(var1) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                var1 = var2.isDispatching;
case 35:
                if(var1) { _fun0006_ip = 37; continue _fun0006 }
case 21:
                var1 = var2.isPaused;
case 37:
                if(var1) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                var1 = var2.emit;
                var1 = var1.bind(var2)();
case 38:
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
case 0:
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
case 0:
                            var1 = arg1;
                            var4 = var1.func;
                            var3 = var1.store;
                            var5 = _closure3_slot1;
                            var2 = var5.has;
                            var2 = var2.bind(var5)(var4);
                            if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                            var5 = _closure3_slot1;
                            var2 = var5.add;
                            var2 = var2.bind(var5)(var4);
                            var2 = undefined;
                            var4 = var4.bind(var2)();
                            var2 = false;
                            if(!(var2 !== var4)) { _fun0008_ip = 40; continue _fun0008 }
case 31:
                            var4 = _closure3_slot2;
                            var2 = var4.has;
                            var2 = var2.bind(var4)(var3);
                            if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 42:
                            var4 = _closure3_slot2;
                            var2 = var4.add;
                            var2 = var2.bind(var4)(var3);
                            var2 = _closure3_slot0;
                            var1 = var2.markChanged;
                            var1 = var1.bind(var2)(var3);
case 40:
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
                if(!(var3 > var1)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
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
case 43:
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
case 0:
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
                if(!(var3 > var1)) { _fun0009_ip = 45; continue _fun0009 }
case 36:
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
case 45:
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