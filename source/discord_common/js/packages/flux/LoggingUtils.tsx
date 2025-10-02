// discord_common/js/packages/flux/LoggingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var2 = 0;
    var4 = var7[var2];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.Logger;
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'Flux';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.EventEmitter;
    var4 = function(arg1) {
        var4 = function ActionLogger() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arguments[0];
                var5 = this;
                var4 = undefined;
                if(!(var1 === var4)) { _fun0005_ip = 32; continue _fun0005 }
case 39:
                var1 = {};
case 32:
                var2 = var1.persist;
                if(!(var2 === var4)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var2 = false;
case 40:
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot6;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 42; continue _fun0005 }
case 35:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0005_ip = 43; continue _fun0005;
case 42:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 43:
                var1 = var3.bind(var4)(var5, var1);
                var3 = new Array(0);
                var1['logs'] = var3;
                var1['persist'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'log';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var10 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var2 = var10;
                var _closure3_slot1 = var10;
                var6 = arg2;
                var8 = undefined;
                var3 = undefined;
                var7 = _closure1_slot10;
                var9 = var7.prototype;
                var9 = Object.create(var9, {constructor: {value: var7}});
                var14 = var9;
                var13 = var10;
                var7 = new var14[var7](var13, var12);
                var10 = var7 instanceof Object ? var7 : var9;
                var3 = var10;
                var _closure3_slot2 = var10;
                var11 = _closure1_slot1;
                var7 = _closure1_slot2;
                var9 = 6;
                var7 = var7[var9];
                var7 = var11.bind(var8)(var7);
                var11 = var7.performance;
                var7 = var11.now;
                var7 = var7.bind(var11)();
                var10['startTime'] = var7;
case 44: // try_start_0 // try_start_1
                var1 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var7 = arg1;
                        var3 = var7;
                        var5 = arg2;
                        var8 = undefined;
                        var1 = undefined;
                        var2 = undefined;
                        var4 = undefined;
                        var6 = {};
                        var6['name'] = var7;
                        var7 = -1;
                        var6['time'] = var7;
                        var2 = var6;
                        var10 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var9 = 6;
                        var7 = var7[var9];
                        var7 = var10.bind(var8)(var7);
                        var10 = var7.performance;
                        var7 = var10.now;
                        var4 = var7.bind(var10)();
case 45: // try_start_0
                        var1 = var5.bind(var8)();
case 46: // try_end0
                        var7 = var2;
                        var10 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var9];
                        var5 = var10.bind(var8)(var5);
                        var10 = var5.performance;
                        var5 = var10.now;
                        var10 = var5.bind(var10)();
                        var5 = var4;
                        var5 = var10 - var5;
                        var7['time'] = var5;
                        var7 = _closure3_slot0;
                        var7 = var7.persist;
                        if(!var7) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                        var7 = _closure3_slot2;
                        var11 = var7.traces;
                        var10 = var11.push;
                        var7 = var2;
                        var7 = var10.bind(var11)(var7);
case 47:
                        var13 = _closure3_slot0;
                        var12 = var13.emit;
                        var5 = _closure3_slot1;
                        var16 = var5.type;
                        var15 = var3;
                        var5 = var2;
                        var14 = var5.time;
                        var17 = 'trace';
                        var18 = var13;
                        var5 = var18[var12](var17, var16, var15, var14, var13);
                        return var1;
case 49: // catch_target0
                        CatchBlockStart(arg_register=0);
                        var5 = var2;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var9];
                        var6 = var7.bind(var8)(var6);
                        var7 = var6.performance;
                        var6 = var7.now;
                        var6 = var6.bind(var7)();
                        var4 = var6 - var4;
                        var5['time'] = var4;
                        var5 = _closure3_slot0;
                        var5 = var5.persist;
                        if(!var5) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                        var5 = _closure3_slot2;
                        var7 = var5.traces;
                        var6 = var7.push;
                        var5 = var2;
                        var5 = var6.bind(var7)(var5);
case 50:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var4 = _closure3_slot1;
                        var16 = var4.type;
                        var15 = var3;
                        var14 = var2.time;
                        var17 = 'trace';
                        var18 = var7;
                        var2 = var18[var6](var17, var16, var15, var14, var13);
                        throw var1;
                    }
                };
                var1 = var6.bind(var8)(var1);
case 52: // try_end0 // try_end1
                var6 = var3;
                var7 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var9];
                var1 = var7.bind(var8)(var1);
                var7 = var1.performance;
                var1 = var7.now;
                var7 = var1.bind(var7)();
                var1 = var6.startTime;
                var1 = var7 - var1;
                var6['totalTime'] = var1;
                var6 = var5.persist;
                var1 = var6;
                if(!var6) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                var6 = var3;
                var7 = var6.totalTime;
                var6 = 0;
                var1 = var7 > var6;
case 53:
                if(!var1) { _fun0006_ip = 55; continue _fun0006 }
case 20:
                var7 = var5.logs;
                var6 = var7.push;
                var1 = var3;
                var1 = var6.bind(var7)(var1);
case 55:
                var1 = var5.logs;
                var6 = var1.length;
                var1 = 1000;
                if(!(var6 > var1)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                var6 = var5.logs;
                var1 = var6.shift;
                var1 = var1.bind(var6)();
case 56:
                var7 = var5.emit;
                var6 = var2;
                var1 = 'log';
                var1 = var7.bind(var5)(var1, var6);
                var1 = var3;
                return var1;
case 58: // try_start_2 // catch_target0
                CatchBlockStart(arg_register=0);
                var6 = var3;
                var6['error'] = var1;
                throw var1;
case 59: // try_end2 // catch_target1 // catch_target2
                CatchBlockStart(arg_register=0);
                var6 = var3;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var9];
                var4 = var7.bind(var8)(var4);
                var7 = var4.performance;
                var4 = var7.now;
                var7 = var4.bind(var7)();
                var4 = var6.startTime;
                var4 = var7 - var4;
                var6['totalTime'] = var4;
                var6 = var5.persist;
                var4 = var6;
                if(!var6) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                var6 = var3;
                var7 = var6.totalTime;
                var6 = 0;
                var4 = var7 > var6;
case 60:
                if(!var4) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                var6 = var5.logs;
                var4 = var6.push;
                var3 = var4.bind(var6)(var3);
case 62:
                var3 = var5.logs;
                var4 = var3.length;
                var3 = 1000;
                if(!(var4 > var3)) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                var4 = var5.logs;
                var3 = var4.shift;
                var3 = var3.bind(var4)();
case 64:
                var4 = var5.emit;
                var3 = var2;
                var2 = 'log';
                var2 = var4.bind(var5)(var2, var3);
                throw var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSlowestActions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var13 = arg1;
                var4 = arguments[1];
                var _closure3_slot0 = var13;
                var9 = undefined;
                if(!(var4 === var9)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                var4 = 20;
case 66:
                var _closure3_slot1 = var9;
                var _closure3_slot2 = var9;
                var1 = new Array(0);
                var6 = _closure1_slot11;
                var2 = this;
                var2 = var2.logs;
                var11 = var6.bind(var9)(var2);
                var7 = var11.bind(var9)();
                var6 = var7.done;
                var2 = null;
                var10 = var7;
                var8 = undefined;
                var7 = undefined;
                if(var6) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                var15 = var10.value;
                if(!(var2 != var13)) { _fun0008_ip = 11; continue _fun0008 }
case 70:
                var6 = var15.name;
                if(!(var6 === var13)) { _fun0008_ip = 71; continue _fun0008 }
case 11:
                var12 = _closure1_slot11;
                var6 = var15.traces;
                var14 = var12.bind(var9)(var6);
                var16 = var14.bind(var9)();
                var6 = var16.done;
                var12 = var16;
                var8 = var12;
                var7 = var14;
                if(var6) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                var17 = var12.value;
                var16 = var1.push;
                var18 = var17.name;
                var6 = new Array(3);
                var6[0] = var18;
                var18 = var15.name;
                var6[1] = var18;
                var17 = var17.time;
                var6[2] = var17;
                var6 = var16.bind(var1)(var6);
                var16 = var14.bind(var9)();
                var6 = var16.done;
                var12 = var16;
                var8 = var12;
                var7 = var14;
                if(!var6) { _fun0008_ip = 72; continue _fun0008 }
case 71:
                var12 = var11.bind(var9)();
                var6 = var12.done;
                var10 = var12;
                if(!var6) { _fun0008_ip = 69; continue _fun0008 }
case 68:
                var7 = var1.sort;
                var6 = function(arg1, arg2) {
                    var1 = arg2;
                    var3 = 2;
                    var2 = var1[var3];
                    var1 = arg1;
                    var1 = var1[var3];
                    var1 = var2 - var1;
                    return var1;
                };
                var6 = var7.bind(var1)(var6);
                var6 = var1.length;
                if(!(var6 > var4)) { _fun0008_ip = 18; continue _fun0008 }
case 73:
                var1['length'] = var4;
case 18:
                var6 = 0;
                _closure3_slot1 = var6;
                _closure3_slot2 = var6;
                var7 = var1.map;
                var4 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = arg1;
                        var1 = var4[Symbol.iterator];
                        var4 = var1().next;
                        var2 = var4().value;
                        var3 = var1;
                        var7 = undefined;
                        var3 = var3 === var7;
                        var5 = undefined;
                        if(var3) { _fun0009_ip = 74; continue _fun0009 }
case 41:
                        var5 = var2;
case 74:
                        var9 = undefined;
                        if(var3) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                        var6 = var4().value;
                        var2 = var1;
                        var2 = var2 === var7;
                        var9 = undefined;
                        var3 = var2;
                        if(var2) { _fun0009_ip = 75; continue _fun0009 }
case 77:
                        var9 = var6;
                        var3 = var2;
case 75:
                        var2 = undefined;
                        if(var3) { _fun0009_ip = 70; continue _fun0009 }
case 78:
                        var6 = var4().value;
                        var4 = var1;
                        var4 = var4 === var7;
                        var2 = undefined;
                        var3 = var4;
                        if(var4) { _fun0009_ip = 70; continue _fun0009 }
case 79:
                        var2 = var6;
                        var3 = var4;
case 70:
                        if(var3) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                        var1.return();
case 80:
                        var1 = global;
                        var3 = var1.HermesInternal;
                        var4 = var3.concat;
                        var3 = '';
                        var6 = var4.bind(var3)(var5);
                        var7 = _closure3_slot0;
                        var5 = null;
                        var3 = var6;
                        if(!(var5 == var7)) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                        var5 = var1.HermesInternal;
                        var8 = var5.concat;
                        var7 = '<';
                        var5 = '>';
                        var5 = var8.bind(var7)(var9, var5);
                        var3 = var6 + var5;
case 82:
                        var7 = var1.Math;
                        var6 = var7.max;
                        var5 = var3.length;
                        var1 = _closure3_slot1;
                        var1 = var6.bind(var7)(var5, var1);
                        _closure3_slot1 = var1;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var8 = var7.bind(var1)(var4);
                var7 = var8.map;
                var4 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = arg1;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var5 = var3().value;
                        var2 = var1;
                        var7 = undefined;
                        var2 = var2 === var7;
                        var4 = undefined;
                        if(var2) { _fun0010_ip = 74; continue _fun0010 }
case 41:
                        var4 = var5;
case 74:
                        var6 = undefined;
                        if(var2) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                        var5 = var3().value;
                        var3 = var1;
                        var3 = var3 === var7;
                        var6 = undefined;
                        var2 = var3;
                        if(var3) { _fun0010_ip = 75; continue _fun0010 }
case 77:
                        var6 = var5;
                        var2 = var3;
case 75:
                        if(var2) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                        var1.return();
case 84:
                        var2 = _closure3_slot2;
                        var2 = var2 + var6;
                        _closure3_slot2 = var2;
                        var3 = var4.padEnd;
                        var2 = _closure3_slot1;
                        var1 = 1;
                        var2 = var2 + var1;
                        var1 = ' ';
                        var11 = var3.bind(var4)(var2, var1);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var12 = '';
                        var10 = ' - ';
                        var8 = 'ms';
                        var9 = var6;
                        var1 = var12[var4](var11, var10, var9, var8, var7);
                        return var1;
                    }
                };
                var7 = var7.bind(var8)(var4);
                var4 = var7.join;
                var11 = '\n';
                var10 = var4.bind(var7)(var11);
                var4 = var1.length;
                var4 = var6 === var4;
                if(var4) { _fun0008_ip = 86; continue _fun0008 }
case 87:
                var7 = var1[var6];
                var6 = 2;
                var7 = var7[var6];
                var6 = 10;
                var4 = var7 < var6;
case 86:
                if(var4) { _fun0008_ip = 88; continue _fun0008 }
case 89:
                var7 = _closure3_slot2;
                var6 = 20;
                var4 = var7 < var6;
case 88:
                if(var4) { _fun0008_ip = 90; continue _fun0008 }
case 61:
                var8 = _closure1_slot8;
                var7 = var8.log;
                var6 = _closure1_slot0;
                var12 = var2 == var6;
                var4 = undefined;
                if(var12) { _fun0008_ip = 91; continue _fun0008 }
case 92:
                var4 = var6.HermesInternal;
case 91:
                var6 = 'Using Hermes:';
                var4 = var9 === var4;
                var4 = !var4;
                var4 = var7.bind(var8)(var6, var4);
                var7 = _closure1_slot8;
                var6 = var7.log;
                var2 = var2 != var13;
                var9 = '';
                var8 = var9;
                if(!var2) { _fun0008_ip = 93; continue _fun0008 }
case 64:
                var2 = global;
                var2 = var2.HermesInternal;
                var12 = var2.concat;
                var4 = '\n\n=== ';
                var2 = ' ===';
                var8 = var12.bind(var4)(var13, var2);
case 93:
                var2 = global;
                var4 = var2.HermesInternal;
                var4 = var4.concat;
                var23 = var9;
                var22 = var8;
                var21 = var11;
                var20 = var10;
                var19 = var11;
                var4 = var23[var4](var22, var21, var20, var19, var18);
                var4 = var6.bind(var7)(var4);
                var4 = _closure1_slot8;
                var3 = var4.log;
                var7 = _closure3_slot2;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = 'Total Time: ';
                var2 = 'ms';
                var2 = var6.bind(var5)(var7, var2);
                var2 = var3.bind(var4)(var2);
case 90:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getLastActionMetrics';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arguments[1];
                var9 = undefined;
                if(!(var4 === var9)) { _fun0011_ip = 32; continue _fun0011 }
case 94:
                var4 = 20;
case 32:
                var _closure3_slot0 = var9;
                var _closure3_slot1 = var9;
                var6 = {};
                var2 = _closure1_slot11;
                var1 = this;
                var1 = var1.logs;
                var5 = var2.bind(var9)(var1);
                var2 = var5.bind(var9)();
                var1 = var2.done;
                if(var1) { _fun0011_ip = 95; continue _fun0011 }
case 75:
                var11 = var2.value;
                var8 = _closure1_slot11;
                var1 = var11.traces;
                var10 = var8.bind(var9)(var1);
                var8 = var10.bind(var9)();
                var1 = var8.done;
                if(var1) { _fun0011_ip = 96; continue _fun0011 }
case 97:
                var13 = var8.value;
                var12 = var13.name;
                var14 = var13.name;
                var1 = new Array(3);
                var1[0] = var14;
                var14 = var11.name;
                var1[1] = var14;
                var13 = var13.time;
                var1[2] = var13;
                var6[var12] = var1;
                var12 = var10.bind(var9)();
                var1 = var12.done;
                var8 = var12;
                if(!var1) { _fun0011_ip = 97; continue _fun0011 }
case 96:
                var8 = var5.bind(var9)();
                var1 = var8.done;
                var2 = var8;
                if(!var1) { _fun0011_ip = 75; continue _fun0011 }
case 95:
                var2 = global;
                var5 = var2.Object;
                var1 = var5.values;
                var1 = var1.bind(var5)(var6);
                var6 = var1.sort;
                var5 = function(arg1, arg2) {
                    var1 = arg2;
                    var3 = 2;
                    var2 = var1[var3];
                    var1 = arg1;
                    var1 = var1[var3];
                    var1 = var2 - var1;
                    return var1;
                };
                var5 = var6.bind(var1)(var5);
                var5 = var1.length;
                if(!(var5 > var4)) { _fun0011_ip = 55; continue _fun0011 }
case 98:
                var1['length'] = var4;
case 55:
                var5 = 0;
                _closure3_slot0 = var5;
                _closure3_slot1 = var5;
                var6 = var1.map;
                var4 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var2 = var5().value;
                        var3 = var1;
                        var7 = undefined;
                        var4 = var3 === var7;
                        var3 = undefined;
                        if(var4) { _fun0012_ip = 74; continue _fun0012 }
case 41:
                        var3 = var2;
case 74:
                        if(var4) { _fun0012_ip = 99; continue _fun0012 }
case 3:
                        var2 = var5().value;
                        var2 = var1;
                        var4 = var2 === var7;
case 99:
                        var2 = undefined;
                        if(var4) { _fun0012_ip = 100; continue _fun0012 }
case 2:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var7;
                        var2 = undefined;
                        var4 = var5;
                        if(var5) { _fun0012_ip = 100; continue _fun0012 }
case 101:
                        var2 = var6;
                        var4 = var5;
case 100:
                        if(var4) { _fun0012_ip = 102; continue _fun0012 }
case 37:
                        var1.return();
case 102:
                        var1 = global;
                        var7 = var1.Math;
                        var6 = var7.max;
                        var5 = var3.length;
                        var1 = _closure3_slot0;
                        var1 = var6.bind(var7)(var5, var1);
                        _closure3_slot0 = var1;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var8 = var6.bind(var1)(var4);
                var6 = var8.map;
                var4 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var3 = arg1;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var5 = var3().value;
                        var2 = var1;
                        var7 = undefined;
                        var2 = var2 === var7;
                        var4 = undefined;
                        if(var2) { _fun0013_ip = 74; continue _fun0013 }
case 41:
                        var4 = var5;
case 74:
                        var6 = undefined;
                        if(var2) { _fun0013_ip = 75; continue _fun0013 }
case 76:
                        var5 = var3().value;
                        var3 = var1;
                        var3 = var3 === var7;
                        var6 = undefined;
                        var2 = var3;
                        if(var3) { _fun0013_ip = 75; continue _fun0013 }
case 77:
                        var6 = var5;
                        var2 = var3;
case 75:
                        if(var2) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                        var1.return();
case 84:
                        var2 = _closure3_slot1;
                        var2 = var2 + var6;
                        _closure3_slot1 = var2;
                        var3 = var4.padEnd;
                        var2 = _closure3_slot0;
                        var1 = 1;
                        var2 = var2 + var1;
                        var1 = ' ';
                        var11 = var3.bind(var4)(var2, var1);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var12 = '';
                        var10 = ' - ';
                        var8 = 'ms';
                        var9 = var6;
                        var1 = var12[var4](var11, var10, var9, var8, var7);
                        return var1;
                    }
                };
                var8 = var6.bind(var8)(var4);
                var6 = var8.join;
                var4 = '\n';
                var11 = var6.bind(var8)(var4);
                var4 = var1.length;
                var4 = var5 === var4;
                if(var4) { _fun0011_ip = 103; continue _fun0011 }
case 104:
                var6 = _closure3_slot1;
                var5 = 8;
                var4 = var6 < var5;
case 103:
                if(var4) { _fun0011_ip = 105; continue _fun0011 }
case 106:
                var6 = _closure1_slot8;
                var5 = var6.log;
                var4 = _closure1_slot0;
                var3 = null;
                var8 = var3 == var4;
                var3 = undefined;
                if(var8) { _fun0011_ip = 107; continue _fun0011 }
case 108:
                var3 = var4.HermesInternal;
case 107:
                var4 = var2.HermesInternal;
                var8 = var4.concat;
                var4 = '\nUsing Hermes: ';
                var3 = var9 === var3;
                var3 = !var3;
                var4 = var8.bind(var4)(var3);
                var3 = var2.HermesInternal;
                var10 = var3.concat;
                var9 = '\n\n=== ';
                var8 = arg1;
                var3 = ' ===\n';
                var3 = var10.bind(var9)(var8, var3, var11);
                var9 = _closure3_slot1;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var7 = '\nTotal Time: ';
                var2 = 'ms\n\n';
                var2 = var8.bind(var7)(var9, var2);
                var2 = var5.bind(var6)(var4, var3, var2);
case 105:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var8);
    var _closure1_slot9 = var2;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function ActionLog(arg1) {
            var3 = this;
            var4 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = 0;
            var3['startTime'] = var2;
            var3['totalTime'] = var2;
            var2 = new Array(0);
            var3['traces'] = var2;
            var2 = _closure1_slot9;
            var2 = parseFloat(var2);
            var4 = var2 + 1;
            _closure1_slot9 = var4;
            var3['id'] = var2;
            var2 = arg1;
            var3['action'] = var2;
            var2 = global;
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['createdAt'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'name';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1.action;
            var1 = var1.type;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'toJSON';
        var1['key'] = var6;
        var5 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = this;
                var3 = var2.createdAt;
                var1 = null;
                if(!(var1 != var3)) { _fun0014_ip = 30; continue _fun0014 }
case 109:
                var1 = {};
                var3 = var2.action;
                var3 = var3.type;
                var1['actionType'] = var3;
                var3 = var2.createdAt;
                var1['created_at'] = var3;
                var3 = var2.totalTime;
                var1['totalTime'] = var3;
                var2 = var2.traces;
                var1['traces'] = var2;
                return var1;
case 30:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = 'ActionLog.toJSON: You must complete your logging before calling toJSON';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot10 = var2;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/flux/LoggingUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ActionLogger'] = var4;
    var3['ActionLog'] = var2;
    return var1;
})();