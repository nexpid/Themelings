// app/utils/ComponentDispatchUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ComponentActionsKeyed;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function ComponentDispatcher() {
            var2 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var2, var4);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.EventEmitter;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var8 = var4;
            var3 = new var8[var3](var7);
            var3 = var3 instanceof Object ? var3 : var4;
            var2['emitter'] = var3;
            var3 = {};
            var2['_savedDispatches'] = var3;
            var4 = var2.emitter;
            var3 = var4.setMaxListeners;
            var2 = 100;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'safeDispatch';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = arg1;
                var3 = this;
                var5 = 1;
                var11 = var5;
                var4 = copyRestArgs(var11);
                var1 = var3.hasSubscribers;
                var1 = var1.bind(var3)(var6);
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = 0;
                var7 = var4[var1];
                var1 = var3._savedDispatches;
                var2 = var3._savedDispatches;
                var2 = var2[var6];
                var8 = null;
                if(!(var8 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = new Array(0);
case 4:
                var1[var6] = var2;
                var1 = var2.push;
                var1 = var1.bind(var2)(var7);
                return var3;
case 2:
                var2 = var3.dispatch;
                var1 = new Array(1);
                var1[0] = var6;
                var11 = var1;
                var10 = var4;
                var9 = var5;
                var4 = arraySpread(var11, var10, var9);
                var11 = var2;
                var10 = var1;
                var9 = var3;
                var1 = apply(var11, var10, var9);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(13);
        var2[0] = var1;
        var1 = {};
        var6 = 'dispatch';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = this;
                var3 = arg1;
                var2 = arg2;
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
case 6: // try_start_0
                var5 = var1.emitter;
                var4 = var5.emit;
                var2 = var4.bind(var5)(var3, var2);
case 7: // try_end0
                return var1;
case 8: // catch_target0
                CatchBlockStart(arg_register=0);
                throw var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'dispatchToLastSubscribed';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = this;
                var4 = arg1;
                var2 = arg2;
                var3 = undefined;
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
case 9: // try_start_0
                var6 = var1.emitter;
                var5 = var6.listeners;
                var4 = var5.bind(var6)(var4);
                var3 = var4;
                var5 = var4.length;
                var4 = 0;
                if(!(var5 > var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var4 = var3;
                var5 = var4.length;
                var3 = 1;
                var3 = var5 - var3;
                var3 = var4[var3];
                var2 = var3.bind(var4)(var2);
case 10: // try_end0
                return var1;
case 12: // catch_target0
                CatchBlockStart(arg_register=0);
                throw var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'hasSubscribers';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.emitter;
            var2 = var3.listenerCount;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = '_checkSavedDispatches';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var3;
                var4 = var1._savedDispatches;
                var5 = var4[var3];
                var4 = null;
                if(!(var4 != var5)) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                var4 = var5.forEach;
                var2 = function(arg1) {
                    var4 = _closure3_slot0;
                    var3 = var4.dispatch;
                    var2 = _closure3_slot1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var2 = var1._savedDispatches;
                var1 = undefined;
                var2[var3] = var1;
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'subscribe';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var1 = this;
                var3 = var1.emitter;
                var2 = var3.listeners;
                var3 = var2.bind(var3)(var5);
                var2 = var3.indexOf;
                var3 = var2.bind(var3)(var4);
                var2 = 0;
                if(!(!(var3 >= var2))) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var3 = var1.emitter;
                var2 = var3.on;
                var2 = var2.bind(var3)(var5, var4);
                var2 = var1._checkSavedDispatches;
                var2 = var2.bind(var1)(var5);
                _fun0005_ip = 16; continue _fun0005;
case 14:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var7 = 'ComponentDispatchUtils';
                var8 = var3;
                var2 = new var8[var4](var7, var6);
                var4 = var2 instanceof Object ? var2 : var3;
                var3 = var4.warn;
                var2 = 'ComponentDispatch.subscribe: Attempting to add a duplicate listener';
                var2 = var3.bind(var4)(var2, var5);
case 16:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'subscribeOnce';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = arg1;
            var1 = this;
            var5 = var1.emitter;
            var4 = var5.once;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
            var2 = var1._checkSavedDispatches;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'resubscribe';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var1 = this;
                var5 = var1.emitter;
                var2 = var5.listeners;
                var5 = var2.bind(var5)(var4);
                var2 = var5.includes;
                var2 = var2.bind(var5)(var3);
                if(var2) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var5 = var5[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var5);
                var2 = var6.prototype;
                var5 = Object.create(var2, {constructor: {value: var6}});
                var8 = 'ComponentDispatchUtils';
                var9 = var5;
                var2 = new var9[var6](var8, var7);
                var6 = var2 instanceof Object ? var2 : var5;
                var5 = var6.warn;
                var2 = 'ComponentDispatch.resubscribe: Resubscribe without existing subscription';
                var2 = var5.bind(var6)(var2, var4);
                return var1;
case 17:
                var5 = var1.emitter;
                var2 = var5.off;
                var2 = var2.bind(var5)(var4, var3);
                var2 = var1.emitter;
                var1 = var2.on;
                var1 = var1.bind(var2)(var4, var3);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'unsubscribe';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var5 = var1.emitter;
            var4 = var5.removeListener;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.emitter;
            var2 = var3.removeAllListeners;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'dispatchKeyed';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var3 = this;
            var11 = 2;
            var5 = copyRestArgs(var11);
            var2 = var3.dispatch;
            var1 = global;
            var1 = var1.HermesInternal;
            var8 = var1.concat;
            var7 = '';
            var6 = arg1;
            var4 = '_';
            var1 = arg2;
            var4 = var8.bind(var7)(var6, var4, var1);
            var1 = new Array(1);
            var1[0] = var4;
            var9 = 1;
            var11 = var1;
            var10 = var5;
            var4 = arraySpread(var11, var10, var9);
            var11 = var2;
            var10 = var1;
            var9 = var3;
            var1 = apply(var11, var10, var9);
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'subscribeKeyed';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var4 = this;
            var3 = var4.subscribe;
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var6 = '';
            var5 = arg1;
            var2 = '_';
            var1 = arg2;
            var2 = var7.bind(var6)(var5, var2, var1);
            var1 = arg3;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'unsubscribeKeyed';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3) {
            var4 = this;
            var3 = var4.unsubscribe;
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var6 = '';
            var5 = arg1;
            var2 = '_';
            var1 = arg2;
            var2 = var7.bind(var6)(var5, var2, var1);
            var1 = arg3;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var5;
        var2[12] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var2.bind(var1)();
    var2 = var4.prototype;
    var5 = Object.create(var2, {constructor: {value: var4}});
    var13 = var5;
    var2 = new var13[var4](var12);
    var2 = var2 instanceof Object ? var2 : var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/ComponentDispatchUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ComponentDispatcher'] = var4;
    var3['ComponentDispatch'] = var2;
    return var1;
})();