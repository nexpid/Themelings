// app/lib/MuteTimers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = function() {
        var4 = _closure1_slot1;
        var3 = function MuteTimers() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = {};
            var3['timers'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'reset';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var1 = global;
            var4 = var1.Object;
            var3 = var4.values;
            var1 = var2.timers;
            var4 = var3.bind(var4)(var1);
            var3 = var4.forEach;
            var1 = function(arg1) {
                var1 = global;
                var3 = var1.clearTimeout;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var1 = {};
            var2['timers'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'setTimer';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg1;
                var3 = arg2;
                var1 = null;
                if(!(var1 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                if(!(var1 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = var3.end_time;
                var2 = var1 == var2;
                var9 = null;
                if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = global;
                var6 = var2.Date;
                var11 = var3.end_time;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var12 = var4;
                var3 = new var12[var6](var11, var10);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = var4.getTime;
                var3 = var3.bind(var4)();
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var9 = var3 - var2;
case 6:
                var1 = var1 != var9;
                if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var7 = 0;
                var2 = var9 <= var7;
                if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var3 = this;
                var4 = var3.timers;
                var3 = global;
                var8 = var3.setTimeout;
                var6 = var3.Math;
                var3 = var6.max;
                var7 = var3.bind(var6)(var7, var9);
                var6 = undefined;
                var3 = arg3;
                var3 = var8.bind(var6)(var3, var7);
                var4[var5] = var3;
                var2 = false;
case 10:
                var1 = var2;
case 8:
                return var1;
case 4:
                var1 = false;
                return var1;
case 2:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'clearTimer';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var3 = null;
                var3 = var3 != var2;
                if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 3:
                var4 = var1.timers;
                var3 = var2 in var4;
case 12:
                if(!var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var3 = global;
                var5 = var3.clearTimeout;
                var3 = var1.timers;
                var4 = var3[var2];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var1 = var1.timers;
                var1 = delete var1[var2];
case 13:
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
    var4 = var4.bind(var1)();
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/MuteTimers.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function computeIsMuted(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.muted;
            var4 = var2.mute_config;
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var5 = null;
            var2 = var5 == var4;
            if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var3 = var4.end_time;
            var2 = var5 == var3;
case 17:
            if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var3 = global;
            var6 = var3.Date;
            var7 = var4.end_time;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var8 = var5;
            var4 = new var8[var6](var7, var6);
            var4 = var4 instanceof Object ? var4 : var5;
            var3 = var3.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var8 = var5;
            var3 = new var8[var3](var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var2 = var4 >= var3;
case 19:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['computeIsMuted'] = var4;
    var2 = function isTemporarilyMuted(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.muted;
            var3 = var2.mute_config;
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0004_ip = 21; continue _fun0004 }
case 16:
            var2 = null;
            var1 = var2 != var3;
case 21:
            if(!var1) { _fun0004_ip = 22; continue _fun0004 }
case 18:
            var4 = var3.end_time;
            var2 = null;
            var1 = var2 != var4;
case 22:
            if(!var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var2 = global;
            var5 = var2.Date;
            var6 = var3.end_time;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var3 = new var7[var5](var6, var5);
            var3 = var3 instanceof Object ? var3 : var4;
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var1 = var3 >= var2;
case 23:
            return var1;
        }
    };
    var3['isTemporarilyMuted'] = var2;
    return var1;
})();