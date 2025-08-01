// discord_common/js/packages/leaky-bucket/LeakyBucket.tsx
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
        var3 = function LeakyBucket(arg1, arg2) {
            var4 = arg1;
            var3 = this;
            var5 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var3['_capacity'] = var4;
            var3['_tokenCount'] = var4;
            var2 = new Array(0);
            var3['_queue'] = var2;
            var2 = arg2;
            var2 = var2 / var4;
            var3['_intervalPeriod'] = var2;
            var2 = null;
            var3['_intervalID'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = '_processQueue';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = global;
            var4 = var1.setTimeout;
            var1 = undefined;
            var3 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var2 = _closure3_slot0;
                    var2 = var2._queue;
                    var2 = var2.length;
                    var3 = 0;
                    if(!(var2 > var3)) { _fun0001_ip = 155; continue _fun0001 }
 27:
                    var2 = _closure3_slot0;
                    var2 = var2._tokenCount;
                    if(!(var2 > var3)) { _fun0001_ip = 155; continue _fun0001 }
 41:
                    var2 = _closure3_slot0;
                    var3 = var2._tokenCount;
                    var3 = var3 - 1;
                    var2['_tokenCount'] = var3;
                    var3 = var2._intervalID;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0001_ip = 111; continue _fun0001 }
 72:
                    var4 = _closure3_slot0;
                    var3 = global;
                    var7 = var3.setInterval;
                    var6 = var4._intervalPeriod;
                    var5 = undefined;
                    var3 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2._iterate;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var3 = var7.bind(var5)(var3, var6);
                    var4['_intervalID'] = var3;
 111:
                    var3 = _closure3_slot0;
                    var4 = var3._queue;
                    var3 = var4.shift;
                    var3 = var3.bind(var4)();
                    if(!(var2 != var3)) { _fun0001_ip = 141; continue _fun0001 }
 135:
                    var2 = undefined;
                    var2 = var3.bind(var2)();
 141:
                    var2 = _closure3_slot0;
                    var1 = var2._processQueue;
                    var1 = var1.bind(var2)();
 155:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = 0;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = '_iterate';
        var1['key'] = var6;
        var6 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = this;
                var1 = global;
                var6 = var1.Math;
                var5 = var6.min;
                var4 = var2._capacity;
                var7 = var2._tokenCount;
                var3 = 1;
                var3 = var7 + var3;
                var3 = var5.bind(var6)(var4, var3);
                var2['_tokenCount'] = var3;
                var4 = var2._tokenCount;
                var3 = var2._capacity;
                var3 = var4 >= var3;
                if(!var3) { _fun0002_ip = 78; continue _fun0002 }
 66:
                var5 = var2._intervalID;
                var4 = null;
                var3 = var4 != var5;
 78:
                if(!var3) { _fun0002_ip = 108; continue _fun0002 }
 81:
                var4 = var1.clearInterval;
                var3 = var2._intervalID;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = null;
                var2['_intervalID'] = var1;
 108:
                var1 = var2._processQueue;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'process';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1) {
                var2 = _closure3_slot0;
                var4 = var2._queue;
                var3 = var4.push;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var1 = var2._processQueue;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
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
    var4 = '../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();