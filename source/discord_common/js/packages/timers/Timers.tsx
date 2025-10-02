// discord_common/js/packages/timers/Timers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = function() {
        var4 = _closure1_slot1;
        var3 = function Timeout() {
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'start';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arguments[2];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = true;
case 2:
                var4 = var3.isStarted;
                var4 = var4.bind(var3)();
                if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = !var5;
case 4:
                if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = var3.stop;
                var4 = var4.bind(var3)();
                var4 = global;
                var6 = var4.window;
                var5 = var6.setTimeout;
                var4 = function() {
                    var3 = _closure3_slot0;
                    var2 = null;
                    var3['_ref'] = var2;
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = arg1;
                var2 = var5.bind(var6)(var4, var2);
                var3['_ref'] = var2;
case 6:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'stop';
        var1['key'] = var6;
        var6 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = this;
                var3 = var2._ref;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2._ref;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['_ref'] = var1;
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isStarted';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1._ref;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var6 = var4.bind(var1)();
    var _closure1_slot2 = var6;
    var4 = function() {
        var4 = _closure1_slot1;
        var3 = function DelayedCall(arg1, arg2) {
            var3 = this;
            var5 = _closure1_slot0;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = arg1;
            var3['_delay'] = var4;
            var4 = arg2;
            var3['_handler'] = var4;
            var2 = _closure1_slot2;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_timeout'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'set';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var1 = this;
            var2 = arg1;
            var1['_delay'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'delay';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var6 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var6 = true;
case 10:
                var5 = var2._timeout;
                var4 = var5.start;
                var3 = var2._delay;
                var2 = var2._handler;
                var2 = var4.bind(var5)(var3, var2, var6);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'cancel';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1._timeout;
            var1 = var2.stop;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'isDelayed';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1._timeout;
            var1 = var2.isStarted;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot1;
        var3 = function Interval() {
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'start';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            var2 = this;
            var1 = var2.stop;
            var1 = var1.bind(var2)();
            var1 = global;
            var5 = var1.window;
            var4 = var5.setInterval;
            var3 = arg2;
            var1 = arg1;
            var1 = var4.bind(var5)(var3, var1);
            var2['_ref'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'stop';
        var1['key'] = var6;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var3 = var2._ref;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var3 = global;
                var5 = var3.clearInterval;
                var4 = var2._ref;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['_ref'] = var1;
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isStarted';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1._ref;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var7 = 2;
    var8 = var8[var7];
    var7 = require;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = '../discord_common/js/packages/timers/Timers.tsx';
    var7 = var8.bind(var9)(var7);
    var3['Timeout'] = var6;
    var3['DelayedCall'] = var5;
    var3['Interval'] = var4;
    var2 = function timeoutPromise(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = global;
            var4 = var1.setTimeout;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = function() {
                var2 = _closure3_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['timeoutPromise'] = var2;
    return var1;
})();