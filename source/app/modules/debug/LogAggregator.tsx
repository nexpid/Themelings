// app/modules/debug/LogAggregator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
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
            var9 = _closure1_slot2;
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
            var7 = _closure1_slot2;
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
    var _closure1_slot1 = var1;
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
    var _closure1_slot2 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var7 = var4.bind(var1)(var6);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var10 = 5000;
    var11 = var6;
    var4 = new var11[var7](var10, var9);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/debug/LogAggregator.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function report(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var18 = 1;
            var3 = copyRestArgs(var18);
            var2 = _closure1_slot1;
            var1 = undefined;
            var14 = var2.bind(var1)(var3);
            var5 = var14.bind(var1)();
            var2 = var5.done;
            var6 = '';
            var13 = ' ';
            var12 = '\n';
            var8 = global;
            var11 = 'boolean';
            var10 = 'number';
            var3 = 'string';
            var9 = var5;
            var5 = var6;
            var6 = var5;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var9.value;
            var15 = typeof var2;
            if(!(var3 !== var15)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            if(!(var10 !== var15)) { _fun0004_ip = 38; continue _fun0004 }
case 40:
            if(!(var11 !== var15)) { _fun0004_ip = 38; continue _fun0004 }
case 41:
            var15 = var8.Error;
            var15 = var2 instanceof var15;
            if(var15) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var16 = var8.JSON;
            var15 = var16.stringify;
            var15 = var15.bind(var16)(var2);
            var15 = var15 + var13;
            var15 = var5 + var15;
            _fun0004_ip = 44; continue _fun0004;
case 42:
            var16 = var2.message;
            var17 = var16 + var12;
            var16 = var2.stack;
            var16 = var17 + var16;
            var16 = var16 + var13;
            var15 = var5 + var16;
            _fun0004_ip = 44; continue _fun0004;
case 38:
            var2 = var2 + var13;
            var15 = var5 + var2;
case 44:
            var16 = var14.bind(var1)();
            var2 = var16.done;
            var5 = var15;
            var9 = var16;
            var6 = var5;
            if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            var2 = typeof var7;
            if(!(var3 !== var2)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var5 = _closure1_slot0;
            var3 = var5.push;
            var2 = {};
            var10 = var8.Date;
            var9 = var10.now;
            var9 = var9.bind(var10)();
            var2['time'] = var9;
            var9 = var7.name;
            var2['category'] = var9;
            var9 = var7.timing;
            var2['timing'] = var9;
            var2['message'] = var6;
            var2 = var3.bind(var5)(var2);
            _fun0004_ip = 47; continue _fun0004;
case 45:
            var5 = _closure1_slot0;
            var3 = var5.push;
            var2 = {};
            var9 = var8.Date;
            var8 = var9.now;
            var8 = var8.bind(var9)();
            var2['time'] = var8;
            var2['category'] = var7;
            var2['message'] = var6;
            var2 = var3.bind(var5)(var2);
case 47:
            var2 = _closure1_slot0;
            var2 = var2.length;
            var3 = 5000;
            if(!(var2 > var3)) { _fun0004_ip = 48; continue _fun0004 }
case 8:
            var2 = _closure1_slot0;
            var5 = var2.shift;
            var5 = var5.bind(var2)();
            var2 = var2.length;
            if(var2 > var3) { _fun0004_ip = 8; continue _fun0004 }
case 48:
            return var1;
        }
    };
    var3['report'] = var4;
    var4 = function clear() {
        var2 = _closure1_slot0;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var3['clear'] = var4;
    var4 = function stringify(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var2 = var3.toArray;
        var4 = var2.bind(var3)();
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var4 = _closure2_slot0;
                var3 = var4.includes;
                var2 = arg1;
                var2 = var2.category;
                var1 = var3.bind(var4)(var2);
case 49:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var3 = new Array(0);
                var4 = var3.push;
                var2 = global;
                var6 = var2.Date;
                var8 = var1.time;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var2 = new var9[var6](var8, var7);
                var5 = var2 instanceof Object ? var2 : var5;
                var2 = var5.toISOString;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                var4 = var1.timing;
                var2 = null;
                if(!(var2 != var4)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                var4 = var3.push;
                var2 = var1.timing;
                var2 = var4.bind(var3)(var2);
case 51:
                var4 = var3.push;
                var2 = var1.category;
                var1 = var1.message;
                var1 = var4.bind(var3)(var2, var1);
                var2 = var3.join;
                var1 = ' -> ';
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = '\n';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['stringify'] = var4;
    var2 = function getAllForDebugPanel() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arguments[0];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var1 = false;
case 53:
            var3 = _closure1_slot0;
            var2 = var3.toArray;
            var3 = var2.bind(var3)();
            if(var1) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var1 = var3;
            _fun0007_ip = 2; continue _fun0007;
case 55:
            var2 = var3.reverse;
            var1 = var2.bind(var3)();
case 2:
            return var1;
        }
    };
    var3['getAllForDebugPanel'] = var2;
    return var1;
})();