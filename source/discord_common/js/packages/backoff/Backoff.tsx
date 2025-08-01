// discord_common/js/packages/backoff/Backoff.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function Backoff() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arguments[0];
                var5 = arguments[1];
                var4 = arguments[2];
                var1 = this;
                var3 = undefined;
                if(!(var2 === var3)) { _fun0001_ip = 24; continue _fun0001 }
 18:
                var2 = 500;
 24:
                if(!(var5 === var3)) { _fun0001_ip = 30; continue _fun0001 }
 28:
                var5 = null;
 30:
                if(!(var4 === var3)) { _fun0001_ip = 36; continue _fun0001 }
 34:
                var4 = true;
 36:
                var7 = _closure1_slot0;
                var6 = _closure2_slot0;
                var6 = var7.bind(var3)(var1, var6);
                var6 = 0;
                var1['_fails'] = var6;
                if(!(!(var2 <= var6))) { _fun0001_ip = 107; continue _fun0001 }
 68:
                var1['min'] = var2;
                var6 = null;
                if(!(var6 == var5)) { _fun0001_ip = 87; continue _fun0001 }
 80:
                var6 = 10;
                var5 = var6 * var2;
 87:
                var1['max'] = var5;
                var1['jitter'] = var4;
                var1['_current'] = var2;
                return var3;
 107:
                var1 = global;
                var2 = var1.Error;
                var1 = 'Backoff min value must be greater than zero or backoff will never back-off.';
                var1 = var2.bind(var3)(var1);
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'fails';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._fails;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'current';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._current;
            return var1;
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'pending';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var2 = var1._timeoutId;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['get'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'succeed';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.cancel;
            var1 = var1.bind(var2)();
            var1 = 0;
            var2['_fails'] = var1;
            var1 = var2.min;
            var2['_current'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'fail';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var4;
                var5 = var2._fails;
                var1 = 1;
                var1 = var5 + var1;
                var2['_fails'] = var1;
                var5 = var2._current;
                var1 = 2;
                var5 = var1 * var5;
                var1 = var2.jitter;
                var6 = var5;
                if(!var1) { _fun0002_ip = 82; continue _fun0002 }
 60:
                var1 = global;
                var7 = var1.Math;
                var1 = var7.random;
                var1 = var1.bind(var7)();
                var6 = var5 * var1;
 82:
                var1 = global;
                var8 = var1.Math;
                var7 = var8.min;
                var5 = var2._current;
                var6 = var5 + var6;
                var5 = var2.max;
                var5 = var7.bind(var8)(var6, var5);
                var2['_current'] = var5;
                var6 = null;
                if(!(var6 != var4)) { _fun0002_ip = 195; continue _fun0002 }
 128:
                var5 = var2._timeoutId;
                if(!(var6 != var5)) { _fun0002_ip = 158; continue _fun0002 }
 138:
                var5 = var2._callback;
                if(!(var5 === var4)) { _fun0002_ip = 203; continue _fun0002 }
 148:
                var5 = var2.cancel;
                var5 = var5.bind(var2)();
 158:
                var2['_callback'] = var4;
                var6 = var1.setTimeout;
                var5 = var2._current;
                var4 = undefined;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0: // try_start_0
                        var3 = _closure3_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 23; continue _fun0003 }
 13:
                        var3 = _closure3_slot1;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
 23: // try_end0
                        var2 = _closure3_slot0;
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
 41: // catch_target0
                        CatchBlockStart(arg_register=0);
                        var3 = _closure3_slot0;
                        var2 = var3.cancel;
                        var2 = var2.bind(var3)();
                        throw var1;
                    }
                };
                var3 = var6.bind(var4)(var3, var5);
                var2['_timeoutId'] = var3;
 195:
                var2 = var2._current;
                return var2;
 203:
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var10 = 'callback already pending';
                var11 = var2;
                var1 = new var11[var3](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'cancel';
        var1['key'] = var6;
        var5 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = this;
                var1 = null;
                var2['_callback'] = var1;
                var3 = var2._timeoutId;
                if(!(var1 != var3)) { _fun0004_ip = 48; continue _fun0004 }
 21:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2._timeoutId;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['_timeoutId'] = var1;
 48:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[5] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/backoff/Backoff.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();