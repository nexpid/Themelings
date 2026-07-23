// discord_common/js/packages/application-widget-renderer/src/createCompactNumberFormat.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
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
            var9 = _closure1_slot1;
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
            var7 = _closure1_slot1;
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
    var _closure1_slot0 = var1;
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
    var _closure1_slot1 = var1;
    var1 = function exponentOf(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var1 = 0;
            if(!(var1 !== var7)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = global;
            var4 = var2.Math;
            var3 = var4.floor;
            var5 = var2.Math;
            var2 = var5.log10;
            var2 = var2.bind(var5)(var7);
            var2 = var3.bind(var4)(var2);
            var6 = 10;
            var10 = var6;
            var9 = var2;
            var3 = exponentiationOperator(var10, var9);
            var4 = var2;
            var2 = var4;
            if(!(var3 > var7)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = var4 - 1;
            var10 = var6;
            var9 = var5;
            var3 = exponentiationOperator(var10, var9);
            var4 = var5;
            var2 = var4;
            if(var3 > var7) { _fun0004_ip = 39; continue _fun0004 }
case 38:
            var5 = 1;
            var9 = var2 + var5;
            var10 = var6;
            var3 = exponentiationOperator(var10, var9);
            var4 = var2;
            var2 = var4;
            if(!(var3 <= var7)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var8 = var4 + 1;
            var9 = var8 + var5;
            var10 = var6;
            var3 = exponentiationOperator(var10, var9);
            var4 = var8;
            var2 = var4;
            if(var3 <= var7) { _fun0004_ip = 41; continue _fun0004 }
case 40:
            return var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function toAsciiDigits(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var8 = arg2;
            var2 = _closure1_slot0;
            var7 = undefined;
            var1 = arg1;
            var6 = var2.bind(var7)(var1);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var1 = '';
            var5 = null;
            var4 = var3;
            var3 = var1;
            var1 = var3;
            if(var2) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var2 = var4.value;
            var9 = var8.get;
            var9 = var9.bind(var8)(var2);
            if(!(var5 != var9)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var2 = var9;
case 44:
            var3 = var3 + var2;
            var10 = var6.bind(var7)();
            var2 = var10.done;
            var4 = var10;
            var1 = var3;
            if(!var2) { _fun0005_ip = 43; continue _fun0005 }
case 42:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/application-widget-renderer/src/createCompactNumberFormat.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createCompactNumberFormat(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var1 = function scaleForExponent(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)(var5);
                    var7 = undefined;
                    if(!(var7 === var1)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var20 = 10;
                    var19 = var5;
                    var6 = exponentiationOperator(var20, var19);
                    var4 = _closure2_slot1;
                    var2 = var4.formatToParts;
                    var4 = var2.bind(var4)(var6);
                    var16 = _closure2_slot0;
                    var2 = _closure1_slot0;
                    var14 = var2.bind(var7)(var4);
                    var8 = var14.bind(var7)();
                    var2 = var8.done;
                    var4 = '';
                    var13 = '.';
                    var12 = 'decimal';
                    var11 = 'fraction';
                    var10 = 'integer';
                    var9 = var8;
                    var8 = var4;
                    var4 = var8;
                    if(var2) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var2 = var9.value;
                    var17 = var2.type;
                    if(!(var10 !== var17)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var17 = var2.type;
                    if(!(var11 !== var17)) { _fun0007_ip = 50; continue _fun0007 }
case 52:
                    var18 = var2.type;
                    var17 = var8;
                    if(!(var12 === var18)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var17 = var8 + var13;
                    _fun0007_ip = 53; continue _fun0007;
case 50:
                    var18 = _closure1_slot3;
                    var2 = var2.value;
                    var2 = var18.bind(var7)(var2, var16);
                    var17 = var8 + var2;
case 53:
                    var18 = var14.bind(var7)();
                    var2 = var18.done;
                    var8 = var17;
                    var9 = var18;
                    var4 = var8;
                    if(!var2) { _fun0007_ip = 49; continue _fun0007 }
case 48:
                    var2 = global;
                    var2 = var2.Number;
                    var4 = var2.bind(var7)(var4);
                    var2 = 0;
                    var7 = var4 > var2;
                    var2 = 1;
                    if(!var7) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var2 = var6 / var4;
case 55:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5, var2);
                    var1 = var2;
case 46:
                    return var1;
                }
            };
            var _closure2_slot3 = var1;
            var1 = global;
            var3 = var1.Intl;
            var5 = var3.NumberFormat;
            var3 = {};
            var4 = false;
            var3['useGrouping'] = var4;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var14 = var4;
            var13 = var6;
            var12 = var3;
            var3 = new var14[var5](var13, var12, var11);
            var8 = var3 instanceof Object ? var3 : var4;
            var3 = var1.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var14 = var4;
            var3 = new var14[var3](var13);
            var3 = var3 instanceof Object ? var3 : var4;
            var5 = undefined;
            var4 = 9;
            var7 = 0;
case 57:
            var11 = var3.set;
            var9 = var8.format;
            var10 = var9.bind(var8)(var7);
            var9 = var1.String;
            var9 = var9.bind(var5)(var7);
            var9 = var11.bind(var3)(var10, var9);
            var7 = var7 + 1;
            if(var7 <= var4) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var _closure2_slot0 = var3;
            var3 = var1.Intl;
            var5 = var3.NumberFormat;
            var3 = var5.prototype;
            var4 = Object.create(var3, {constructor: {value: var5}});
            var12 = {'notation': 'compact', 'compactDisplay': 'short'};
            var14 = var4;
            var13 = var6;
            var3 = new var14[var5](var13, var12, var11);
            var3 = var3 instanceof Object ? var3 : var4;
            var _closure2_slot1 = var3;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var14 = var3;
            var1 = new var14[var1](var13);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure2_slot2 = var1;
            var1 = {};
            var2 = function format(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var10 = 0;
                    if(!(var10 !== var3)) { _fun0008_ip = 59; continue _fun0008 }
case 37:
                    var1 = global;
                    var4 = var1.Number;
                    var2 = var4.isFinite;
                    var2 = var2.bind(var4)(var3);
                    if(!var2) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var4 = _closure1_slot2;
                    var6 = var1.Math;
                    var2 = var6.abs;
                    var2 = var2.bind(var6)(var3);
                    var7 = undefined;
                    var6 = var4.bind(var7)(var2);
                    var2 = var6 >= var10;
                    var11 = 1;
                    var4 = var11;
                    if(!var2) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var2 = _closure2_slot3;
                    var4 = var2.bind(var7)(var6);
case 61:
                    var2 = var3 / var4;
                    var6 = _closure1_slot2;
                    var8 = var1.Math;
                    var5 = var8.abs;
                    var5 = var5.bind(var8)(var2);
                    var5 = var6.bind(var7)(var5);
                    var8 = var1.Math;
                    var7 = var8.max;
                    var9 = var1.Math;
                    var6 = var9.min;
                    var5 = var5 - var11;
                    var6 = var6.bind(var9)(var5, var10);
                    var5 = -15;
                    var5 = var7.bind(var8)(var6, var5);
                    var12 = -var5;
                    var13 = 10;
                    var5 = exponentiationOperator(var13, var12);
                    var7 = var1.Math;
                    var6 = var7.floor;
                    var2 = var2 * var5;
                    var2 = var6.bind(var7)(var2);
                    var2 = var2 / var5;
                    var5 = var2 * var4;
                    var4 = _closure2_slot1;
                    var2 = var4.format;
                    var6 = var1.Number;
                    var1 = var6.isFinite;
                    var6 = var1.bind(var6)(var5);
                    var1 = var3;
                    if(!var6) { _fun0008_ip = 63; continue _fun0008 }
case 46:
                    var1 = var5;
case 63:
                    var1 = var2.bind(var4)(var1);
                    return var1;
case 59:
                    var2 = _closure2_slot1;
                    var1 = var2.format;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                }
            };
            var1['format'] = var2;
            return var1;
        }
    };
    var3['createCompactNumberFormat'] = var2;
    return var1;
})();