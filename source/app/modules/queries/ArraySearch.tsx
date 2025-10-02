// app/modules/queries/ArraySearch.tsx
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
    var1 = function sortGroup(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var2 = _closure1_slot0;
                var1 = _closure2_slot0;
                var6 = undefined;
                var5 = var2.bind(var6)(var1);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var1 = 0;
                var4 = var3;
                if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var2 = var4.value;
                var2 = var2.bind(var6)(var8, var7);
                if(!(var1 === var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var9 = var5.bind(var6)();
                var3 = var9.done;
                var4 = var9;
                if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 40:
                _fun0004_ip = 37; continue _fun0004;
case 38:
                return var2;
case 36:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot2 = var1;
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
    var4 = 'modules/queries/ArraySearch.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function queryData(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg2;
            var2 = var3.limit;
            var1 = null;
            var5 = var1 != var2;
            var4 = inf;
            if(!var5) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var4 = var2;
case 41:
            var7 = var3.filterPredicates;
            if(!(var1 == var7)) { _fun0005_ip = 2; continue _fun0005 }
case 43:
            var7 = new Array(0);
case 2:
            var5 = function applyFilters(arg1, arg2) {
                var3 = arg1;
                var2 = arg2;
                var _closure3_slot0 = var2;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure3_slot0;
                    var2 = var3.every;
                    var1 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = arg1;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = undefined;
            var2 = arg1;
            var8 = var5.bind(var9)(var2, var7);
            var2 = var3.bucketPredicates;
            if(!(var1 != var2)) { _fun0005_ip = 44; continue _fun0005 }
case 40:
            var2 = var3.bucketPredicates;
            var5 = var2.length;
            var2 = 0;
            if(!(!(var5 > var2))) { _fun0005_ip = 45; continue _fun0005 }
case 44:
            var2 = new Array(1);
            var2[0] = var8;
            _fun0005_ip = 46; continue _fun0005;
case 45:
            var5 = var8.length;
            if(!(!(var4 >= var5))) { _fun0005_ip = 47; continue _fun0005 }
case 13:
            var7 = var3.bucketPredicates;
            if(!(var1 == var7)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var7 = new Array(0);
case 48:
            var5 = function applyBucketing(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var10 = arg1;
                    var9 = arg3;
                    var1 = new Array(0);
                    var3 = _closure1_slot0;
                    var7 = undefined;
                    var2 = arg2;
                    var6 = var3.bind(var7)(var2);
                    var3 = var6.bind(var7)();
                    var2 = var3.done;
                    var5 = 0;
                    var4 = var3;
                    var3 = undefined;
                    if(var2) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var16 = var4.value;
                    var12 = new Array(0);
                    var13 = new Array(0);
                    var2 = _closure1_slot0;
                    var15 = var2.bind(var7)(var10);
                    var14 = var15.bind(var7)();
                    var2 = var14.done;
                    if(var2) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var17 = var14.value;
                    var2 = var16.bind(var7)(var17);
                    if(var2) { _fun0006_ip = 13; continue _fun0006 }
case 54:
                    var2 = var12.push;
                    var2 = var2.bind(var12)(var17);
                    _fun0006_ip = 49; continue _fun0006;
case 13:
                    var2 = var13.push;
                    var2 = var2.bind(var13)(var17);
case 49:
                    var18 = var15.bind(var7)();
                    var2 = var18.done;
                    var14 = var18;
                    var3 = var17;
                    if(!var2) { _fun0006_ip = 53; continue _fun0006 }
case 52:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var13);
                    var13 = var1.reduce;
                    var2 = function(arg1, arg2) {
                        var1 = arg2;
                        var2 = var1.length;
                        var1 = arg1;
                        var1 = var2 + var1;
                        return var1;
                    };
                    var2 = var13.bind(var1)(var2, var5);
                    if(!(!(var2 >= var9))) { _fun0006_ip = 50; continue _fun0006 }
case 55:
                    var13 = var6.bind(var7)();
                    var2 = var13.done;
                    var4 = var13;
                    var10 = var12;
                    if(!var2) { _fun0006_ip = 51; continue _fun0006 }
case 50:
                    return var1;
                }
            };
            var5 = var5.bind(var9)(var8, var7, var4);
            _fun0005_ip = 56; continue _fun0005;
case 47:
            var7 = var3.bucketPredicates;
            if(!(var1 == var7)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var7 = new Array(0);
case 57:
            var6 = function applyBucketingSingleIteration(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var7 = arg2;
                    var1 = global;
                    var3 = var1.Array;
                    var11 = var7.length;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var12 = var2;
                    var1 = new var12[var3](var11, var10);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var2 = var3.fill;
                    var1 = null;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function() {
                        var1 = new Array(0);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure1_slot0;
                    var6 = undefined;
                    var2 = arg1;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    var4 = 0;
                    if(var2) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                    var9 = var3.value;
                    var2 = var7.length;
                    var2 = var4 < var2;
                    var10 = 0;
                    if(!var2) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                    var2 = var7[var10];
                    var8 = var2.bind(var7)(var9);
                    var2 = var10;
                    if(var8) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                    var10 = var2 + 1;
                    var8 = var7.length;
                    if(var10 < var8) { _fun0007_ip = 62; continue _fun0007 }
case 65:
                    _fun0007_ip = 61; continue _fun0007;
case 63:
                    var8 = var1[var2];
                    var2 = var8.push;
                    var2 = var2.bind(var8)(var9);
case 61:
                    var8 = var5.bind(var6)();
                    var2 = var8.done;
                    var3 = var8;
                    if(!var2) { _fun0007_ip = 60; continue _fun0007 }
case 59:
                    return var1;
                }
            };
            var5 = var6.bind(var9)(var8, var7);
case 56:
            var2 = var5;
case 46:
            var8 = var3.sortComparers;
            if(!(var1 == var8)) { _fun0005_ip = 66; continue _fun0005 }
case 67:
            var8 = new Array(0);
case 66:
            var3 = new Array(0);
            var1 = _closure1_slot0;
            var6 = var1.bind(var9)(var2);
            var5 = var6.bind(var9)();
            var1 = var5.done;
            var2 = 0;
            if(var1) { _fun0005_ip = 68; continue _fun0005 }
case 69:
            var10 = _closure1_slot2;
            var1 = var5.value;
            var13 = var10.bind(var9)(var1, var8);
            var10 = var3.push;
            var1 = new Array(0);
            var14 = var1;
            var12 = 0;
            var11 = arraySpread(var14, var13, var12);
            var14 = var10;
            var13 = var1;
            var12 = var3;
            var1 = apply(var14, var13, var12);
            var1 = var3.length;
            if(!(!(var1 >= var4))) { _fun0005_ip = 68; continue _fun0005 }
case 70:
            var10 = var6.bind(var9)();
            var1 = var10.done;
            var5 = var10;
            if(!var1) { _fun0005_ip = 69; continue _fun0005 }
case 68:
            var1 = var3.slice;
            var1 = var1.bind(var3)(var2, var4);
            return var1;
        }
    };
    var3['queryData'] = var2;
    return var1;
})();