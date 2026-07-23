// discord_common/js/packages/timers/Timers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var2 = global;
    var8 = var2.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var10[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var10[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var10[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var10[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var10[var4];
    var4 = var7.bind(var1)(var4);
    var6 = 5;
    var6 = var10[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 6;
    var6 = var10[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = function() {
        var4 = _closure1_slot5;
        var3 = function Timeout() {
            var4 = _closure1_slot4;
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arguments[2];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var5 = true;
case 39:
                var4 = var3.isStarted;
                var4 = var4.bind(var3)();
                if(!var4) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var4 = !var5;
case 41:
                if(var4) { _fun0005_ip = 43; continue _fun0005 }
case 2:
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
case 43:
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var3 = var2._ref;
                var1 = null;
                if(!(var1 != var3)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2._ref;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['_ref'] = var1;
case 44:
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
    var8 = var6.bind(var1)();
    var _closure1_slot6 = var8;
    var6 = function() {
        var4 = _closure1_slot5;
        var3 = function DelayedCall(arg1, arg2) {
            var3 = this;
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = arg1;
            var3['_delay'] = var4;
            var4 = arg2;
            var3['_handler'] = var4;
            var2 = _closure1_slot6;
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0007_ip = 32; continue _fun0007 }
case 46:
                var6 = true;
case 32:
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
    var7 = var6.bind(var1)();
    var _closure1_slot7 = var7;
    var6 = function() {
        var4 = _closure1_slot5;
        var3 = function Interval() {
            var4 = _closure1_slot4;
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var3 = var2._ref;
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                var3 = global;
                var5 = var3.clearInterval;
                var4 = var2._ref;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['_ref'] = var1;
case 44:
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
    var6 = var6.bind(var1)();
    var2 = var2.Error;
    var4 = var4.bind(var1)(var2);
    var2 = function(arg1) {
        var3 = function BatchInvocationManagerResetError(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot4;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot2;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot1;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0009_ip = 49; continue _fun0009;
case 47:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot2;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 49:
                var1 = var2.bind(var3)(var4, var1);
                var2 = 'BatchInvocationManagerResetError';
                var1['name'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot3;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot5;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4 = var2.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function BatchInvocationManager(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arguments[1];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0010_ip = 29; continue _fun0010 }
case 50:
                var5 = {};
case 29:
                var7 = _closure1_slot4;
                var6 = _closure2_slot1;
                var6 = var7.bind(var1)(var3, var6);
                var6 = arg1;
                var3['invoke'] = var6;
                var3['options'] = var5;
                var5 = global;
                var6 = var5.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var10 = var7;
                var6 = new var10[var6](var9);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['_promises'] = var6;
                var5 = var5.Set;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var10 = var6;
                var5 = new var10[var5](var9);
                var5 = var5 instanceof Object ? var5 : var6;
                var3['_pending'] = var5;
                var6 = _closure1_slot7;
                var4 = var3.options;
                var4 = var4.delay;
                var5 = null;
                var7 = var5 != var4;
                var5 = 32;
                if(!var7) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                var5 = var4;
case 51:
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var8 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2._flush;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var10 = var4;
                var9 = var5;
                var2 = new var10[var6](var9, var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['_flushHandler'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'queue';
        var5['key'] = var2;
        var2 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var7 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var8 = new Array(0);
                var5 = _closure1_slot9;
                var2 = global;
                var6 = var2.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var7);
                var4 = var7;
                if(var6) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                var6 = new Array(1);
                var6[0] = var7;
                var4 = var6;
case 53:
                var9 = undefined;
                var7 = var5.bind(var9)(var4);
                var6 = var7.bind(var9)();
                var4 = var6.done;
                var5 = null;
                if(var4) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                var10 = var6.value;
                var13 = var3.options;
                var12 = var13.predicate;
                var4 = var5 == var12;
                var11 = undefined;
                if(var4) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                var4 = var12.call;
                var11 = var4.bind(var12)(var13, var10);
case 57:
                var4 = var5 != var11;
                if(!var4) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                var4 = !var11;
case 59:
                if(var4) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                var12 = var3._pending;
                var11 = var12.has;
                var4 = var11.bind(var12)(var10);
case 61:
                if(var4) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                var11 = var3._pending;
                var4 = var11.add;
                var4 = var4.bind(var11)(var10);
                var4 = var8.push;
                var4 = var4.bind(var8)(var10);
case 63:
                var10 = var7.bind(var9)();
                var4 = var10.done;
                var6 = var10;
                if(!var4) { _fun0011_ip = 56; continue _fun0011 }
case 55:
                var6 = var8.length;
                var4 = 0;
                if(!(var6 > var4)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                var7 = var3.options;
                var6 = var7.onQueued;
                if(!(var5 != var6)) { _fun0011_ip = 65; continue _fun0011 }
case 67:
                var5 = var6.call;
                var5 = var5.bind(var6)(var7, var8);
case 65:
                var3 = var3._pending;
                var3 = var3.size;
                if(!(var4 !== var3)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                var4 = var2.Promise;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var15 = function(arg1, arg2) {
                    var1 = _closure3_slot0;
                    var4 = var1._promises;
                    var3 = var4.add;
                    var2 = {};
                    var5 = arg1;
                    var2['resolve'] = var5;
                    var5 = arg2;
                    var2['reject'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var3 = var1._flushHandler;
                    var2 = var3.delay;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var16 = var3;
                var1 = new var16[var4](var15, var14);
                var1 = var1 instanceof Object ? var1 : var3;
                _fun0011_ip = 70; continue _fun0011;
case 68:
                var3 = var2.Promise;
                var2 = var3.resolve;
                var1 = var2.bind(var3)();
case 70:
                return var1;
            }
        };
        var5['value'] = var2;
        var2 = new Array(3);
        var2[0] = var5;
        var5 = {};
        var7 = 'reset';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = this;
                var10 = var2._pending;
                var6 = new Array(0);
                var5 = 0;
                var11 = var6;
                var9 = 0;
                var3 = arraySpread(var11, var10, var9);
                var10 = var2._promises;
                var3 = new Array(0);
                var11 = var3;
                var4 = arraySpread(var11, var10, var9);
                var8 = _closure1_slot8;
                var4 = var8.prototype;
                var7 = Object.create(var4, {constructor: {value: var8}});
                var11 = 'BatchInvocationManager was reset';
                var12 = var7;
                var4 = new var12[var8](var11, var10);
                var4 = var4 instanceof Object ? var4 : var7;
                var _closure3_slot0 = var4;
                var7 = var2._pending;
                var4 = var7.clear;
                var4 = var4.bind(var7)();
                var7 = var2._promises;
                var4 = var7.clear;
                var4 = var4.bind(var7)();
                var7 = var2._flushHandler;
                var4 = var7.cancel;
                var4 = var4.bind(var7)();
                var4 = var6.length;
                if(!(var4 > var5)) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                var5 = var2.options;
                var4 = var5.onCancelled;
                var2 = null;
                if(!(var2 != var4)) { _fun0012_ip = 71; continue _fun0012 }
case 73:
                var2 = var4.call;
                var2 = var2.bind(var4)(var5, var6);
case 71:
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.reject;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var2[1] = var5;
        var5 = {};
        var7 = '_flush';
        var5['key'] = var7;
        var8 = _closure1_slot0;
        var1 = undefined;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var7 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 74; continue _fun0013 }
case 45:
                    var2 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var12 = var7._pending;
                    var6 = new Array(0);
                    var8 = 0;
                    var13 = var6;
                    var11 = 0;
                    var9 = arraySpread(var13, var12, var11);
                    var5 = var6;
                    var10 = var7._pending;
                    var9 = var10.clear;
                    var9 = var9.bind(var10)();
                    var12 = var7._promises;
                    var9 = new Array(0);
                    var13 = var9;
                    var10 = arraySpread(var13, var12, var11);
                    var4 = var9;
                    var10 = var7._promises;
                    var9 = var10.clear;
                    var9 = var9.bind(var10)();
                    var6 = var6.length;
                    if(!(var8 === var6)) { _fun0013_ip = 75; continue _fun0013 }
case 76:
                    var9 = var4;
                    var8 = var9.forEach;
                    var6 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.resolve;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var6 = var8.bind(var9)(var6);
                    _fun0013_ip = 77; continue _fun0013;
case 75: // try_start_0
                    var6 = var7.invoke;
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=141);
case 78:
                    return var5;
case 79:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0013_ip = 80; continue _fun0013 }
case 64:
                    var8 = var4;
                    var7 = var8.forEach;
                    var6 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.resolve;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6);
case 71: // try_end0
                    _fun0013_ip = 77; continue _fun0013;
case 80:
                    return var5;
case 81: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var _closure4_slot0 = var5;
                    var5 = var4;
                    var4 = var5.forEach;
                    var3 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.reject;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
case 77:
                    return var2;
case 74:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var6 = function _flush() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var2[2] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var9 = 7;
    var10 = var10[var9];
    var9 = require;
    var11 = var9.bind(var1)(var10);
    var10 = var11.fileFinishedImporting;
    var9 = '../discord_common/js/packages/timers/Timers.tsx';
    var9 = var10.bind(var11)(var9);
    var3['Timeout'] = var8;
    var3['DelayedCall'] = var7;
    var3['Interval'] = var6;
    var5 = function timeoutPromise(arg1) {
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
    var3['timeoutPromise'] = var5;
    var5 = 32;
    var3['DEFAULT_BATCH_INVOCATION_DELAY_MS'] = var5;
    var3['BatchInvocationManagerResetError'] = var4;
    var3['BatchInvocationManager'] = var2;
    return var1;
})();