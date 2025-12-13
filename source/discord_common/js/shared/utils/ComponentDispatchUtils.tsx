// discord_common/js/shared/utils/ComponentDispatchUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function ComponentDispatcher() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = {};
case 2:
                var6 = _closure1_slot2;
                var4 = _closure2_slot0;
                var4 = var6.bind(var1)(var2, var4);
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var3 = var4.bind(var1)(var3);
                var3 = var3.EventEmitter;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var9 = var4;
                var3 = new var9[var3](var8);
                var3 = var3 instanceof Object ? var3 : var4;
                var2['emitter'] = var3;
                var3 = {};
                var2['_savedDispatches'] = var3;
                var3 = {'maxListeners': 100, 'enableDevtools': false};
                var4 = 100;
                var8 = var3;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                var2['options'] = var3;
                var3 = var2.options;
                var3 = var3.maxListeners;
                var5 = null;
                var5 = var5 != var3;
                if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = var3;
case 4:
                var3 = var2.emitter;
                var2 = var3.setMaxListeners;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'safeDispatch';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = arg1;
                var3 = this;
                var5 = 1;
                var11 = var5;
                var4 = copyRestArgs(var11);
                var1 = var3.hasSubscribers;
                var1 = var1.bind(var3)(var6);
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = 0;
                var7 = var4[var1];
                var1 = var3._savedDispatches;
                var2 = var3._savedDispatches;
                var2 = var2[var6];
                var8 = null;
                if(!(var8 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = new Array(0);
case 8:
                var1[var6] = var2;
                var1 = var2.push;
                var1 = var1.bind(var2)(var7);
                return var3;
case 6:
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = this;
                var4 = arg1;
                var3 = arg2;
                var2 = undefined;
                var7 = global;
                var6 = var7.Date;
                var1 = var6.now;
                var2 = var1.bind(var6)();
case 10: // try_start_0
                var9 = var5.emitter;
                var8 = var9.emit;
                var6 = var4;
                var1 = var3;
                var1 = var8.bind(var9)(var6, var1);
case 11: // try_end0
                var6 = var5.options;
                var6 = var6.enableDevtools;
                var1 = var6;
                if(!var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var6 = var5.options;
                var1 = var6.devtoolsReporter;
case 12:
                if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var10 = var5.options;
                var9 = var10.devtoolsReporter;
                var8 = var4;
                var6 = var3;
                var11 = var7.Date;
                var1 = var11.now;
                var11 = var1.bind(var11)();
                var1 = var2;
                var1 = var11 - var1;
                var1 = var9.bind(var10)(var8, var6, var1);
case 14:
                return var5;
case 16: // catch_target0
                CatchBlockStart(arg_register=0);
                var8 = var5.options;
                var8 = var8.enableDevtools;
                var6 = var8;
                if(!var8) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var8 = var5.options;
                var6 = var8.devtoolsReporter;
case 17:
                if(!var6) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var6 = var5.options;
                var5 = var6.devtoolsReporter;
                var8 = var7.Date;
                var7 = var8.now;
                var7 = var7.bind(var8)();
                var2 = var7 - var2;
                var2 = var5.bind(var6)(var4, var3, var2);
case 19:
                throw var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'dispatchToLastSubscribed';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = this;
                var4 = arg1;
                var3 = arg2;
                var2 = undefined;
                var1 = undefined;
                var7 = global;
                var8 = var7.Date;
                var6 = var8.now;
                var2 = var6.bind(var8)();
case 7: // try_start_0
                var9 = var5.emitter;
                var8 = var9.listeners;
                var6 = var4;
                var6 = var8.bind(var9)(var6);
                var1 = var6;
                var8 = var6.length;
                var6 = 0;
                if(!(var8 > var6)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var8 = var1;
                var6 = var8.length;
                var1 = 1;
                var1 = var6 - var1;
                var6 = var8[var1];
                var1 = var3;
                var1 = var6.bind(var8)(var1);
case 21: // try_end0
                var6 = var5.options;
                var6 = var6.enableDevtools;
                var1 = var6;
                if(!var6) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var6 = var5.options;
                var1 = var6.devtoolsReporter;
case 23:
                if(!var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var10 = var5.options;
                var9 = var10.devtoolsReporter;
                var8 = var4;
                var6 = var3;
                var11 = var7.Date;
                var1 = var11.now;
                var11 = var1.bind(var11)();
                var1 = var2;
                var1 = var11 - var1;
                var1 = var9.bind(var10)(var8, var6, var1);
case 25:
                return var5;
case 27: // catch_target0
                CatchBlockStart(arg_register=0);
                var8 = var5.options;
                var8 = var8.enableDevtools;
                var6 = var8;
                if(!var8) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var8 = var5.options;
                var6 = var8.devtoolsReporter;
case 28:
                if(!var6) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var6 = var5.options;
                var5 = var6.devtoolsReporter;
                var8 = var7.Date;
                var7 = var8.now;
                var7 = var7.bind(var8)();
                var2 = var7 - var2;
                var2 = var5.bind(var6)(var4, var3, var2);
case 30:
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var3;
                var4 = var1._savedDispatches;
                var5 = var4[var3];
                var4 = null;
                if(!(var4 != var5)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
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
case 32:
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                if(!(!(var3 >= var2))) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                var3 = var1.emitter;
                var2 = var3.on;
                var2 = var2.bind(var3)(var5, var4);
                var2 = var1._checkSavedDispatches;
                var2 = var2.bind(var1)(var5);
                _fun0006_ip = 36; continue _fun0006;
case 34:
                var2 = var1.options;
                var2 = var2.logger;
                if(!var2) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                var2 = var1.options;
                var4 = var2.logger;
                var3 = var4.warn;
                var2 = 'ComponentDispatch.subscribe: Attempting to add a duplicate listener';
                var2 = var3.bind(var4)(var2, var5);
case 36:
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var1 = this;
                var3 = var1.emitter;
                var2 = var3.listeners;
                var3 = var2.bind(var3)(var5);
                var2 = var3.includes;
                var2 = var2.bind(var3)(var4);
                if(var2) { _fun0007_ip = 15; continue _fun0007 }
case 38:
                var2 = var1.options;
                var2 = var2.logger;
                if(!var2) { _fun0007_ip = 23; continue _fun0007 }
case 39:
                var2 = var1.options;
                var6 = var2.logger;
                var3 = var6.warn;
                var2 = 'ComponentDispatch.resubscribe: Resubscribe without existing subscription';
                var2 = var3.bind(var6)(var2, var5);
                _fun0007_ip = 23; continue _fun0007;
case 15:
                var3 = var1.emitter;
                var2 = var3.off;
                var2 = var2.bind(var3)(var5, var4);
                var3 = var1.emitter;
                var2 = var3.on;
                var2 = var2.bind(var3)(var5, var4);
case 23:
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
    var2 = var2.bind(var1)();
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/utils/ComponentDispatchUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ComponentDispatcher'] = var2;
    return var1;
})();