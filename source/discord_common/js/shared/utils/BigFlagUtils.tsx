// discord_common/js/shared/utils/BigFlagUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = metroImportDefault;
        var3 = exports;
        var12 = dependencyMap;
        var _closure1_slot0 = var8;
        var _closure1_slot1 = var12;
        var1 = function fromHexReverseArray(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var3 = 0;
                var6 = 16;
                var5 = 4;
                var4 = undefined;
                var2 = 0;
                var1 = 0;
                if(!(var1 < var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var9 = var7 + var2;
                var10 = var8[var9];
                var1 = var3;
                if(!(var4 !== var10)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                var12 = var6;
                var11 = var2;
                var9 = exponentiationOperator(var12, var11);
                var9 = var10 * var9;
                var3 = var3 + var9;
                var2 = var2 + 1;
                var1 = var3;
                if(var2 < var5) { _fun0002_ip = 3; continue _fun0002 }
case 2:
                return var1;
            }
        };
        var _closure1_slot11 = var1;
        var1 = function toHexReverseArray(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var7 = arg1;
                var1 = new Array(0);
                var2 = var7.length;
                var6 = 0;
                var2 = var6 < var2;
                var5 = global;
                var4 = undefined;
                var3 = 0;
                if(!var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                var8 = var5.Number;
                var2 = var7[var3];
                var10 = var8.bind(var4)(var2);
                var9 = var10;
                var8 = 0;
                if(var10) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var2 = var1.length;
                var2 = var6 < var2;
                var9 = var10;
                var8 = 0;
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 7:
                var10 = var1[var8];
                if(var10) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var10 = 0;
case 10:
                var2 = 10;
                var2 = var2 * var10;
                var11 = var9 + var2;
                var10 = 16;
                var2 = var11 % var10;
                var1[var8] = var2;
                var2 = var1[var8];
                var2 = var11 - var2;
                var11 = var2 / var10;
                var10 = var8 + 1;
                var9 = var11;
                var8 = var10;
                if(var11) { _fun0003_ip = 7; continue _fun0003 }
case 12:
                var2 = var1.length;
                var9 = var11;
                var8 = var10;
                if(var8 < var2) { _fun0003_ip = 7; continue _fun0003 }
case 9:
                var3 = var3 + 1;
                var2 = var7.length;
                if(var3 < var2) { _fun0003_ip = 6; continue _fun0003 }
case 5:
                return var1;
            }
        };
        var _closure1_slot12 = var1;
        var4 = global;
        var9 = var4.Object;
        var7 = var9.defineProperty;
        var6 = {};
        var2 = true;
        var6['value'] = var2;
        var1 = '__esModule';
        var1 = var7.bind(var9)(var3, var1, var6);
        var6 = 0;
        var7 = var12[var6];
        var1 = undefined;
        var7 = var8.bind(var1)(var7);
        var _closure1_slot2 = var7;
        var7 = 1;
        var7 = var12[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot3 = var7;
        var7 = function() {
            var5 = function HighLow(arg1, arg2) {
                var3 = this;
                var4 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                var2 = arg1;
                var3['parts'] = var2;
                var2 = arg2;
                var3['str'] = var2;
                return var1;
            };
            var _closure2_slot0 = var5;
            var4 = _closure1_slot3;
            var1 = {};
            var2 = 'and';
            var1['key'] = var2;
            var2 = function value(arg1) {
                var2 = arg1;
                var2 = var2.parts;
                var _closure3_slot0 = var2;
                var3 = _closure2_slot0;
                var2 = this;
                var4 = var2.parts;
                var2 = var4.map;
                var1 = function(arg1, arg2) {
                    var2 = _closure3_slot0;
                    var1 = arg2;
                    var2 = var2[var1];
                    var1 = arg1;
                    var1 = var1 & var2;
                    return var1;
                };
                var5 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var1['value'] = var2;
            var3 = new Array(7);
            var3[0] = var1;
            var1 = {};
            var2 = 'or';
            var1['key'] = var2;
            var2 = function value(arg1) {
                var2 = arg1;
                var2 = var2.parts;
                var _closure3_slot0 = var2;
                var3 = _closure2_slot0;
                var2 = this;
                var4 = var2.parts;
                var2 = var4.map;
                var1 = function(arg1, arg2) {
                    var2 = _closure3_slot0;
                    var1 = arg2;
                    var2 = var2[var1];
                    var1 = arg1;
                    var1 = var1 | var2;
                    return var1;
                };
                var5 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var1['value'] = var2;
            var3[1] = var1;
            var1 = {};
            var2 = 'xor';
            var1['key'] = var2;
            var2 = function value(arg1) {
                var2 = arg1;
                var2 = var2.parts;
                var _closure3_slot0 = var2;
                var3 = _closure2_slot0;
                var2 = this;
                var4 = var2.parts;
                var2 = var4.map;
                var1 = function(arg1, arg2) {
                    var2 = _closure3_slot0;
                    var1 = arg2;
                    var2 = var2[var1];
                    var1 = arg1;
                    var1 = var1 ^ var2;
                    return var1;
                };
                var5 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var1['value'] = var2;
            var3[2] = var1;
            var1 = {};
            var2 = 'not';
            var1['key'] = var2;
            var2 = function value() {
                var3 = _closure2_slot0;
                var1 = this;
                var4 = var1.parts;
                var2 = var4.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = ~var1;
                    return var1;
                };
                var5 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var1['value'] = var2;
            var3[3] = var1;
            var1 = {};
            var2 = 'equals';
            var1['key'] = var2;
            var2 = function value(arg1) {
                var2 = arg1;
                var2 = var2.parts;
                var _closure3_slot0 = var2;
                var2 = this;
                var3 = var2.parts;
                var2 = var3.every;
                var1 = function(arg1, arg2) {
                    var2 = _closure3_slot0;
                    var1 = arg2;
                    var2 = var2[var1];
                    var1 = arg1;
                    var1 = var1 === var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['value'] = var2;
            var3[4] = var1;
            var1 = {};
            var2 = 'toString';
            var1['key'] = var2;
            var2 = function value() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = this;
                    var4 = var1.str;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var3 = global;
                    var3 = var3.Array;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var5 = 16;
                    var9 = var4;
                    var8 = var5;
                    var3 = new var9[var3](var8, var7);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var _closure3_slot0 = var4;
                    var6 = var1.parts;
                    var3 = var6.forEach;
                    var2 = function(arg1, arg2) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var8 = arg2;
                            var3 = _closure1_slot12;
                            var1 = var2.toString;
                            var2 = var1.bind(var2)();
                            var1 = undefined;
                            var7 = var3.bind(var1)(var2);
                            var5 = 4;
                            var3 = 3;
                            var2 = 0;
case 15:
                            var11 = _closure3_slot0;
                            var9 = var5 * var8;
                            var10 = var2 + var9;
                            var9 = var3 - var2;
                            var9 = var7[var9];
                            if(var9) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                            var9 = 0;
case 16:
                            var11[var10] = var9;
                            var2 = var2 + 1;
                            if(var2 < var5) { _fun0005_ip = 15; continue _fun0005 }
case 18:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var6)(var2);
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var2 = var3.fromArray;
                    var3 = var2.bind(var3)(var4, var5);
                    var2 = var3.toString;
                    var2 = var2.bind(var3)();
                    var1['str'] = var2;
                    return var2;
case 13:
                    var1 = var1.str;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[5] = var1;
            var1 = {};
            var2 = 'toJSON';
            var1['key'] = var2;
            var2 = function value() {
                var2 = this;
                var1 = var2.toString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['value'] = var2;
            var3[6] = var1;
            var1 = {};
            var2 = 'fromString';
            var1['key'] = var2;
            var2 = function value(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot12;
                    var8 = undefined;
                    var7 = var1.bind(var8)(var4);
                    var1 = global;
                    var1 = var1.Array;
                    var6 = 4;
                    var1 = var1.bind(var8)(var6);
                    var2 = 3;
                    var5 = 0;
case 19:
                    var11 = var2 - var5;
                    var12 = _closure1_slot11;
                    var10 = var6 * var5;
                    var10 = var12.bind(var8)(var7, var10, var6);
                    var1[var11] = var10;
                    var5 = var5 + 1;
                    if(var5 < var6) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var16 = var2;
                    var15 = var1;
                    var14 = var4;
                    var1 = new var16[var3](var15, var14, var13);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                }
            };
            var1['value'] = var2;
            var2 = new Array(3);
            var2[0] = var1;
            var1 = {};
            var7 = 'fromBit';
            var1['key'] = var7;
            var7 = function value(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var9 = arg1;
                    var1 = global;
                    var3 = var1.Array;
                    var2 = undefined;
                    var8 = 4;
                    var3 = var3.bind(var2)(var8);
                    var4 = var1.Math;
                    var2 = var4.floor;
                    var7 = 16;
                    var1 = var9 / var7;
                    var6 = var2.bind(var4)(var1);
                    var4 = 1;
                    var2 = 3;
                    var1 = 0;
case 8:
                    var11 = var2 - var1;
                    var10 = 0;
                    if(!(var1 === var6)) { _fun0007_ip = 20; continue _fun0007 }
case 17:
                    var12 = var7 * var6;
                    var12 = var9 - var12;
                    var10 = var4 << var12;
case 20:
                    var3[var11] = var10;
                    var1 = var1 + 1;
                    if(var1 < var8) { _fun0007_ip = 8; continue _fun0007 }
case 21:
                    var1 = _closure2_slot0;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var14 = var2;
                    var13 = var3;
                    var1 = new var14[var1](var13, var12);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                }
            };
            var1['value'] = var7;
            var2[1] = var1;
            var1 = {};
            var7 = 'asUintN';
            var1['key'] = var7;
            var6 = function value(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var9 = arg1;
                    var1 = arg2;
                    var8 = var1.parts;
                    var10 = 0;
                    var2 = var10 < var9;
                    var1 = 0;
                    if(!var2) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                    var2 = var8.length;
                    var7 = 16;
                    var2 = var7 * var2;
                    var6 = global;
                    var5 = 1;
                    var4 = 0;
                    var3 = 0;
                    var1 = 0;
                    if(!(var1 < var2)) { _fun0008_ip = 22; continue _fun0008 }
case 8:
                    var11 = var6.Math;
                    var10 = var11.min;
                    var2 = var9 - var3;
                    var2 = var10.bind(var11)(var2, var7);
                    var10 = var5 << var2;
                    var12 = var8.length;
                    var14 = var6.Math;
                    var13 = var14.floor;
                    var11 = var3 / var7;
                    var11 = var13.bind(var14)(var11);
                    var11 = var12 - var11;
                    var11 = var11 - var5;
                    var11 = var8[var11];
                    var10 = var10 - var5;
                    var10 = var11 & var10;
                    var10 = var10 << var3;
                    var10 = var4 | var10;
                    var3 = var3 + var2;
                    var1 = var10;
                    if(!(var3 < var9)) { _fun0008_ip = 22; continue _fun0008 }
case 24:
                    var2 = var8.length;
                    var2 = var7 * var2;
                    var4 = var10;
                    var1 = var4;
                    if(var3 < var2) { _fun0008_ip = 8; continue _fun0008 }
case 22:
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[2] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var5, var3, var2);
            return var1;
        };
        var7 = var7.bind(var1)();
        var _closure1_slot4 = var7;
case 25: // try_start_0
        var7 = var4.BigInt;
case 26: // try_end0
        var2 = true;
        _fun0001_ip = 27; continue _fun0001;
case 12: // catch_target0
        CatchBlockStart(arg_register=6);
        var2 = false;
case 27:
        var7 = var2;
        if(!var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
        var8 = var4.BigInt;
        var8 = var8.prototype;
        var9 = var8.toJSON;
        var8 = null;
        var7 = var8 == var9;
case 28:
        if(!var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
        var4 = var4.BigInt;
        var7 = var4.prototype;
        var4 = function() {
            var2 = this;
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7['toJSON'] = var4;
case 30:
        if(var2) { _fun0001_ip = 32; continue _fun0001 }
case 33:
        var10 = function(arg1) {
            var2 = _closure1_slot4;
            var1 = arg1;
            var1 = var1 instanceof var2;
            return var1;
        };
        _fun0001_ip = 34; continue _fun0001;
case 32:
        var10 = function(arg1) {
            var2 = 'bigint';
            var1 = arg1;
            var1 = typeof var1;
            var1 = var2 === var1;
            return var1;
        };
case 34:
        var4 = {};
        var _closure1_slot5 = var4;
        if(var2) { _fun0001_ip = 35; continue _fun0001 }
case 36:
        var4 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var1 = _closure1_slot4;
                var3 = var5 instanceof var1;
                var1 = var5;
                if(var3) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                var6 = 'number';
                var4 = typeof var5;
                var3 = var5;
                if(!(var6 === var4)) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                var4 = var5.toString;
                var3 = var4.bind(var5)();
case 39:
                var4 = _closure1_slot5;
                var5 = var4[var3];
                var4 = null;
                if(!(var4 == var5)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                var5 = _closure1_slot5;
                var6 = _closure1_slot4;
                var4 = var6.fromString;
                var4 = var4.bind(var6)(var3);
                var5[var3] = var4;
case 41:
                var2 = _closure1_slot5;
                var1 = var2[var3];
case 37:
                return var1;
            }
        };
        _fun0001_ip = 43; continue _fun0001;
case 35:
        var4 = function(arg1) {
            var1 = global;
            var3 = var1.BigInt;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
case 43:
        var6 = var4.bind(var1)(var6);
        var _closure1_slot6 = var6;
        var9 = var4;
        if(var2) { _fun0001_ip = 44; continue _fun0001 }
case 45:
        var8 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arguments[0];
                var2 = arguments[1];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                var3 = _closure1_slot6;
case 46:
                if(!(var2 === var1)) { _fun0010_ip = 6; continue _fun0010 }
case 48:
                var2 = _closure1_slot6;
case 6:
                var1 = var3.and;
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        _fun0001_ip = 49; continue _fun0001;
case 44:
        var8 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arguments[0];
                var1 = arguments[1];
                var3 = undefined;
                if(!(var2 === var3)) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                var2 = _closure1_slot6;
case 46:
                if(!(var1 === var3)) { _fun0011_ip = 6; continue _fun0011 }
case 48:
                var1 = _closure1_slot6;
case 6:
                var1 = var2 & var1;
                return var1;
            }
        };
case 49:
        var _closure1_slot7 = var8;
        if(var2) { _fun0001_ip = 50; continue _fun0001 }
case 51:
        var4 = function() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arguments[0];
                var2 = arguments[1];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0012_ip = 46; continue _fun0012 }
case 47:
                var3 = _closure1_slot6;
case 46:
                if(!(var2 === var1)) { _fun0012_ip = 6; continue _fun0012 }
case 48:
                var2 = _closure1_slot6;
case 6:
                var1 = var3.or;
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        _fun0001_ip = 52; continue _fun0001;
case 50:
        var4 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = arguments[0];
                var1 = arguments[1];
                var3 = undefined;
                if(!(var2 === var3)) { _fun0013_ip = 46; continue _fun0013 }
case 47:
                var2 = _closure1_slot6;
case 46:
                if(!(var1 === var3)) { _fun0013_ip = 6; continue _fun0013 }
case 48:
                var1 = _closure1_slot6;
case 6:
                var1 = var2 | var1;
                return var1;
            }
        };
case 52:
        var _closure1_slot8 = var4;
        if(var2) { _fun0001_ip = 53; continue _fun0001 }
case 54:
        var4 = function() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arguments[0];
                var2 = arguments[1];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0014_ip = 46; continue _fun0014 }
case 47:
                var3 = _closure1_slot6;
case 46:
                if(!(var2 === var1)) { _fun0014_ip = 6; continue _fun0014 }
case 48:
                var2 = _closure1_slot6;
case 6:
                var1 = var3.xor;
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        _fun0001_ip = 55; continue _fun0001;
case 53:
        var4 = function() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = arguments[0];
                var1 = arguments[1];
                var3 = undefined;
                if(!(var2 === var3)) { _fun0015_ip = 46; continue _fun0015 }
case 47:
                var2 = _closure1_slot6;
case 46:
                if(!(var1 === var3)) { _fun0015_ip = 6; continue _fun0015 }
case 48:
                var1 = _closure1_slot6;
case 6:
                var1 = var2 ^ var1;
                return var1;
            }
        };
case 55:
        var _closure1_slot9 = var4;
        if(var2) { _fun0001_ip = 56; continue _fun0001 }
case 57:
        var7 = function() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = arguments[0];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0016_ip = 58; continue _fun0016 }
case 59:
                var2 = _closure1_slot6;
case 58:
                var1 = var2.not;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        _fun0001_ip = 60; continue _fun0001;
case 56:
        var7 = function() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0017_ip = 58; continue _fun0017 }
case 59:
                var1 = _closure1_slot6;
case 58:
                var1 = ~var1;
                return var1;
            }
        };
case 60:
        if(var2) { _fun0001_ip = 61; continue _fun0001 }
case 62:
        var6 = function(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = arg1;
                var2 = arg2;
                var1 = null;
                if(!(var1 != var3)) { _fun0018_ip = 63; continue _fun0018 }
case 47:
                if(!(var1 != var2)) { _fun0018_ip = 63; continue _fun0018 }
case 58:
                var1 = var3.equals;
                var1 = var1.bind(var3)(var2);
                _fun0018_ip = 64; continue _fun0018;
case 63:
                var1 = var3 == var2;
case 64:
                return var1;
            }
        };
        _fun0001_ip = 65; continue _fun0001;
case 61:
        var6 = function(arg1, arg2) {
            var2 = arg1;
            var1 = arg2;
            var1 = var2 === var1;
            return var1;
        };
case 65:
        var _closure1_slot10 = var6;
        if(var2) { _fun0001_ip = 66; continue _fun0001 }
case 67:
        var4 = function(arg1) {
            var3 = _closure1_slot4;
            var2 = var3.fromBit;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        _fun0001_ip = 68; continue _fun0001;
case 66:
        var4 = function(arg1) {
            var1 = global;
            var3 = var1.BigInt;
            var4 = undefined;
            var2 = 1;
            var2 = var3.bind(var4)(var2);
            var3 = var1.BigInt;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var1 = var2 << var1;
            return var1;
        };
case 68:
        if(var2) { _fun0001_ip = 69; continue _fun0001 }
case 70:
        var2 = function(arg1, arg2) {
            var4 = _closure1_slot4;
            var3 = var4.asUintN;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        _fun0001_ip = 71; continue _fun0001;
case 69:
        var2 = function(arg1, arg2) {
            var1 = global;
            var3 = var1.Number;
            var5 = var1.BigInt;
            var4 = var5.asUintN;
            var2 = arg1;
            var1 = arg2;
            var2 = var4.bind(var5)(var2, var1);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
case 71:
        var11 = 3;
        var12 = var12[var11];
        var11 = require;
        var13 = var11.bind(var1)(var12);
        var12 = var13.fileFinishedImporting;
        var11 = '../discord_common/js/shared/utils/BigFlagUtils.tsx';
        var11 = var12.bind(var13)(var11);
        var3['isBigFlag'] = var10;
        var3['deserialize'] = var9;
        var3['filter'] = var8;
        var3['invert'] = var7;
        var3['equals'] = var6;
        var6 = function combine(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = 0;
                var10 = 0;
                var7 = copyRestArgs(var10);
                var3 = var7[var1];
                var2 = var7.length;
                var6 = 1;
                var2 = var6 < var2;
                var4 = undefined;
                var1 = var3;
                if(!var2) { _fun0019_ip = 72; continue _fun0019 }
case 73:
                var8 = _closure1_slot8;
                var2 = var7[var6];
                var3 = var8.bind(var4)(var3, var2);
                var6 = var6 + 1;
                var2 = var7.length;
                var1 = var3;
                if(var6 < var2) { _fun0019_ip = 73; continue _fun0019 }
case 72:
                return var1;
            }
        };
        var3['combine'] = var6;
        var6 = function has(arg1, arg2) {
            var4 = arg2;
            var3 = _closure1_slot10;
            var5 = _closure1_slot7;
            var2 = undefined;
            var1 = arg1;
            var1 = var5.bind(var2)(var1, var4);
            var1 = var3.bind(var2)(var1, var4);
            return var1;
        };
        var3['has'] = var6;
        var6 = function hasAny(arg1, arg2) {
            var4 = _closure1_slot10;
            var6 = _closure1_slot7;
            var3 = undefined;
            var5 = arg1;
            var2 = arg2;
            var2 = var6.bind(var3)(var5, var2);
            var1 = _closure1_slot6;
            var1 = var4.bind(var3)(var2, var1);
            var1 = !var1;
            return var1;
        };
        var3['hasAny'] = var6;
        var6 = function add(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var3 = _closure1_slot6;
                var1 = var5;
                if(!(var4 !== var3)) { _fun0020_ip = 74; continue _fun0020 }
case 38:
                var3 = _closure1_slot8;
                var2 = undefined;
                var1 = var3.bind(var2)(var5, var4);
case 74:
                return var1;
            }
        };
        var3['add'] = var6;
        var5 = function remove(arg1, arg2) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var5 = arg1;
                var6 = arg2;
                var3 = _closure1_slot6;
                var1 = var5;
                if(!(var6 !== var3)) { _fun0021_ip = 75; continue _fun0021 }
case 38:
                var4 = _closure1_slot9;
                var2 = _closure1_slot7;
                var3 = undefined;
                var2 = var2.bind(var3)(var5, var6);
                var1 = var4.bind(var3)(var5, var2);
case 75:
                return var1;
            }
        };
        var3['remove'] = var5;
        var3['getFlag'] = var4;
        var3['asUintN'] = var2;
        return var1;
    }
})();