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
case 0:
                    var2 = _closure3_slot0;
                    var2 = var2._queue;
                    var2 = var2.length;
                    var3 = 0;
                    if(!(var2 > var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = _closure3_slot0;
                    var2 = var2._tokenCount;
                    if(!(var2 > var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                    var2 = _closure3_slot0;
                    var3 = var2._tokenCount;
                    var3 = var3 - 1;
                    var2['_tokenCount'] = var3;
                    var3 = var2._intervalID;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
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
case 5:
                    var3 = _closure3_slot0;
                    var4 = var3._queue;
                    var3 = var4.shift;
                    var3 = var3.bind(var4)();
                    if(!(var2 != var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var2 = var3.resolve;
                    var2 = var2.bind(var3)();
case 7:
                    var2 = _closure3_slot0;
                    var1 = var2._processQueue;
                    var1 = var1.bind(var2)();
case 2:
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
case 0:
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
                if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var5 = var2._intervalID;
                var4 = null;
                var3 = var4 != var5;
case 9:
                if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var4 = var1.clearInterval;
                var3 = var2._intervalID;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = null;
                var2['_intervalID'] = var1;
case 11:
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
        var5 = function value(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg2;
                    var _closure4_slot0 = var3;
                    var5 = _closure3_slot1;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var4 = _closure3_slot1;
                    var4 = var4.aborted;
                    if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 13:
                    var7 = {};
                    var4 = arg1;
                    var7['resolve'] = var4;
                    var4 = _closure3_slot1;
                    var7['signal'] = var4;
                    var _closure4_slot1 = var7;
                    var5 = _closure3_slot0;
                    var6 = var5._queue;
                    var5 = var6.push;
                    var5 = var5.bind(var6)(var7);
                    if(!var4) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var7 = _closure3_slot1;
                    var6 = var7.addEventListener;
                    var5 = {};
                    var4 = true;
                    var5['once'] = var4;
                    var4 = 'abort';
                    var2 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var5 = var1._queue;
                            var4 = var5.indexOf;
                            var3 = _closure4_slot1;
                            var5 = var4.bind(var5)(var3);
                            var3 = 0;
                            if(!(var5 >= var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                            var2 = _closure3_slot0;
                            var4 = var2._queue;
                            var3 = var4.splice;
                            var2 = 1;
                            var2 = var3.bind(var4)(var5, var2);
case 18:
                            var3 = _closure4_slot0;
                            var1 = global;
                            var4 = var1.Error;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var7 = 'Aborted';
                            var8 = var2;
                            var1 = new var8[var4](var7, var6);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2 = var6.bind(var7)(var4, var2, var5);
case 16:
                    var2 = _closure3_slot0;
                    var1 = var2._processQueue;
                    var1 = var1.bind(var2)();
                    _fun0003_ip = 20; continue _fun0003;
case 15:
                    var1 = global;
                    var4 = var1.Error;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var10 = 'Already aborted';
                    var11 = var2;
                    var1 = new var11[var4](var10, var9);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 20:
                    var1 = undefined;
                    return var1;
                }
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