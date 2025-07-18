// app/lib/MuteTimers.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                var5 = arg1;
                var3 = arg2;
                var1 = null;
                if(!(var1 != var5)) { _fun0001_ip = 176; continue _fun0001 }
 15:
                if(!(var1 != var3)) { _fun0001_ip = 172; continue _fun0001 }
 22:
                var2 = var3.end_time;
                var2 = var1 == var2;
                var9 = null;
                if(var2) { _fun0001_ip = 100; continue _fun0001 }
 37:
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
 100:
                var1 = var1 != var9;
                if(!var1) { _fun0001_ip = 170; continue _fun0001 }
 107:
                var7 = 0;
                var2 = var9 <= var7;
                if(var2) { _fun0001_ip = 167; continue _fun0001 }
 116:
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
 167:
                var1 = var2;
 170:
                return var1;
 172:
                var1 = false;
                return var1;
 176:
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
 0:
                var2 = arg1;
                var1 = this;
                var3 = null;
                var3 = var3 != var2;
                if(!var3) { _fun0002_ip = 25; continue _fun0002 }
 15:
                var4 = var1.timers;
                var3 = var2 in var4;
 25:
                if(!var3) { _fun0002_ip = 63; continue _fun0002 }
 28:
                var3 = global;
                var5 = var3.clearTimeout;
                var3 = var1.timers;
                var4 = var3[var2];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var1 = var1.timers;
                var1 = delete var1[var2];
 63:
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
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/MuteTimers.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function computeIsMuted(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = var2.muted;
            var4 = var2.mute_config;
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0003_ip = 113; continue _fun0003 }
 24:
            var5 = null;
            var2 = var5 == var4;
            if(var2) { _fun0003_ip = 43; continue _fun0003 }
 33:
            var3 = var4.end_time;
            var2 = var5 == var3;
 43:
            if(var2) { _fun0003_ip = 110; continue _fun0003 }
 46:
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
 110:
            var1 = var2;
 113:
            return var1;
        }
    };
    var3['computeIsMuted'] = var4;
    var2 = function isTemporarilyMuted(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = var2.muted;
            var3 = var2.mute_config;
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0004_ip = 30; continue _fun0004 }
 24:
            var2 = null;
            var1 = var2 != var3;
 30:
            if(!var1) { _fun0004_ip = 45; continue _fun0004 }
 33:
            var4 = var3.end_time;
            var2 = null;
            var1 = var2 != var4;
 45:
            if(!var1) { _fun0004_ip = 112; continue _fun0004 }
 48:
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
 112:
            return var1;
        }
    };
    var3['isTemporarilyMuted'] = var2;
    return var1;
})();