// app/utils/Queue.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = 'Queue';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot4 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function Queue() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arguments[0];
                var4 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot4;
case 2:
                if(!(var4 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = 100;
case 4:
                var7 = _closure1_slot2;
                var6 = _closure2_slot0;
                var6 = var7.bind(var1)(var3, var6);
                var3['logger'] = var5;
                var3['defaultRetryAfter'] = var4;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var5[var2];
                var2 = var4.bind(var1)(var2);
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var10 = var4;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['queue'] = var2;
                var2 = null;
                var3['timeout'] = var2;
                var2 = false;
                var3['draining'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'enqueue';
        var1['key'] = var2;
        var2 = function value(arg1, arg2, arg3) {
            var2 = this;
            var4 = var2.queue;
            var3 = var4.push;
            var1 = {};
            var5 = arg1;
            var1['message'] = var5;
            var5 = arg2;
            var1['success'] = var5;
            var5 = arg3;
            var1['logId'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var2._drainIfNecessary;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'length';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.queue;
            var1 = var1.length;
            return var1;
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = '_drainIfNecessary';
        var1['key'] = var6;
        var5 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var3 = var4.timeout;
                var2 = null;
                if(!(var2 === var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = var4.queue;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                var3 = var4.draining;
                var2 = true;
                if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 9:
                var4['draining'] = var2;
                var3 = var4.queue;
                var2 = var3.shift;
                var2 = var2.bind(var3)();
                var _closure3_slot1 = var2;
                var3 = var2.message;
                var5 = var2.success;
                var _closure3_slot2 = var5;
                var10 = var2.logId;
                var _closure3_slot3 = var10;
                var6 = var4.logger;
                var5 = var6.log;
                var2 = var4.queue;
                var9 = var2.length;
                var2 = global;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var7 = 'Draining message from queue LogId:';
                var2 = ' QueueLength: ';
                var2 = var8.bind(var7)(var10, var2, var9);
                var2 = var5.bind(var6)(var2);
                var2 = var4.drain;
                var1 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var6 = arg1;
                        var2 = arg2;
                        var7 = _closure3_slot0;
                        var9 = var7.logger;
                        var8 = var9.log;
                        var12 = _closure3_slot3;
                        var4 = var7.queue;
                        var11 = var4.length;
                        var4 = global;
                        var5 = var4.HermesInternal;
                        var10 = var5.concat;
                        var5 = 'Finished draining message from queue LogId:';
                        var14 = ' QueueLength: ';
                        var5 = var10.bind(var5)(var12, var14, var11);
                        var5 = var8.bind(var9)(var5);
                        var5 = false;
                        var7['draining'] = var5;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var9 = var6.retryAfter;
                        if(!(var5 == var9)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var5 = _closure3_slot0;
                        var9 = var5.defaultRetryAfter;
case 12:
                        var6 = _closure3_slot0;
                        var8 = var6.logger;
                        var7 = var8.info;
                        var17 = _closure3_slot3;
                        var5 = var6.queue;
                        var15 = var5.length;
                        var5 = var4.HermesInternal;
                        var11 = var5.concat;
                        var20 = 'Rate limited. Delaying draining of queue for ';
                        var18 = ' ms. LogId:';
                        var19 = var9;
                        var16 = var14;
                        var5 = var20[var11](var19, var18, var17, var16, var15, var14);
                        var5 = var7.bind(var8)(var5);
                        var8 = var4.setTimeout;
                        var7 = undefined;
                        var5 = function() {
                            var2 = _closure3_slot0;
                            var4 = var2.queue;
                            var3 = var4.unshift;
                            var1 = _closure3_slot1;
                            var1 = var3.bind(var4)(var1);
                            var1 = null;
                            var2['timeout'] = var1;
                            var1 = var2._drainIfNecessary;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        };
                        var5 = var8.bind(var7)(var5, var9);
                        var6['timeout'] = var5;
                        _fun0003_ip = 14; continue _fun0003;
case 10:
                        var5 = var4.setImmediate;
                        var4 = undefined;
                        var3 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2._drainIfNecessary;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var3 = var5.bind(var4)(var3);
case 15: // try_start_0
                        var3 = _closure3_slot2;
                        var2 = var3.bind(var4)(var2);
case 16: // try_end0
                        _fun0003_ip = 14; continue _fun0003;
case 17: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var1 = _closure3_slot0;
                        var3 = var1.logger;
                        var2 = var3.error;
                        var1 = '';
                        var1 = var2.bind(var3)(var1, var4);
case 14:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var4)(var3, var1);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/Queue.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();