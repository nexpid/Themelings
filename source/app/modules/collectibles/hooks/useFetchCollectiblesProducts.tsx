// app/modules/collectibles/hooks/useFetchCollectiblesProducts.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEffect;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SKUProductLines;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useFetchCollectiblesProducts.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchCollectiblesProducts(arg1, arg2) {
        var11 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var11;
        var _closure2_slot1 = var2;
        var12 = _closure1_slot0;
        var13 = _closure1_slot1;
        var7 = 5;
        var3 = var13[var7];
        var6 = undefined;
        var9 = var12.bind(var6)(var3);
        var8 = var9.useStateFromStoresArray;
        var3 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10 = var8.bind(var9)(var5, var3);
        var _closure2_slot2 = var10;
        var3 = var13[var7];
        var14 = var12.bind(var6)(var3);
        var9 = var14.useStateFromStoresArray;
        var5 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var5;
        var3 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = var3.isFetchingProduct;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var9.bind(var14)(var8, var3);
        var _closure2_slot3 = var9;
        var3 = var13[var7];
        var15 = var12.bind(var6)(var3);
        var14 = var15.useStateFromStoresArray;
        var8 = new Array(1);
        var8[0] = var5;
        var3 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = var3.getProduct;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var14.bind(var15)(var8, var3);
        var _closure2_slot4 = var3;
        var8 = var13[var7];
        var16 = var12.bind(var6)(var8);
        var15 = var16.useStateFromStoresArray;
        var14 = new Array(1);
        var14[0] = var5;
        var8 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = var3.getProductFetchError;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8 = var15.bind(var16)(var14, var8);
        var _closure2_slot5 = var8;
        var7 = var13[var7];
        var13 = var12.bind(var6)(var7);
        var12 = var13.useStateFromStoresArray;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = var3.getProductFetchErrorTimestamp;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var12.bind(var13)(var7, var5);
        var _closure2_slot6 = var7;
        var5 = _closure1_slot3;
        var4 = new Array(7);
        var4[0] = var11;
        var4[1] = var10;
        var4[2] = var9;
        var4[3] = var3;
        var4[4] = var8;
        var4[5] = var7;
        var4[6] = var2;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var15 = var1.bind(var2)();
                var3 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = var2.entries;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var12 = var3.bind(var1)(var2);
                var3 = var12.bind(var1)();
                var2 = var3.done;
                var11 = 7;
                var10 = null;
                var9 = 3600000;
                var8 = 0;
                var7 = 6;
                var6 = 2;
                var5 = 1;
                var4 = true;
                if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var16 = var3.value;
                var2 = _closure1_slot2;
                var2 = var2.bind(var1)(var16, var6);
                var21 = var2[var8];
                var18 = var2[var5];
                var2 = _closure2_slot2;
                var20 = var2[var21];
                var2 = _closure2_slot4;
                var2 = var2[var21];
                var16 = _closure2_slot3;
                var17 = var16[var21];
                var16 = _closure2_slot5;
                var16 = var16[var21];
                var19 = _closure2_slot6;
                var21 = var19[var21];
                var19 = _closure2_slot1;
                var19 = var4 === var19;
                if(!var19) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var22 = var10 == var2;
                var23 = undefined;
                if(var22) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                var23 = var2.type;
case 40:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var7];
                var22 = var24.bind(var1)(var22);
                var22 = var22.CollectiblesItemType;
                var22 = var22.BUNDLE;
                var19 = var23 === var22;
case 38:
                if(!var19) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                var22 = var2.items;
                var22 = var22.length;
                var19 = var8 === var22;
case 42:
                var16 = var10 != var16;
                if(!var16) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                var16 = var10 != var21;
case 44:
                if(!var16) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                var21 = var15 - var21;
                var16 = var21 < var9;
case 46:
                var2 = var10 != var2;
                if(!var2) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                var2 = !var19;
case 48:
                if(var2) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                var19 = var10 != var20;
                if(!var19) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                var21 = var20.productLine;
                var20 = _closure1_slot6;
                var20 = var20.COLLECTIBLES;
                var19 = var21 !== var20;
case 52:
                var2 = var19;
case 50:
                if(var2) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                var2 = var17;
case 54:
                if(var2) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                var2 = var16;
case 56:
                if(var2) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                var16 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var11];
                var17 = var16.bind(var1)(var2);
                var16 = var17.fetchCollectiblesProduct;
                var2 = {};
                var19 = _closure2_slot1;
                var2['includeBundles'] = var19;
                var2 = var16.bind(var17)(var18, var2);
case 58:
                var16 = var12.bind(var1)();
                var2 = var16.done;
                var3 = var16;
                if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 36:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var2, var4);
        var2 = var3.some;
        var1 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg2;
                var1 = _closure2_slot3;
                var1 = var1[var5];
                if(var1) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                var4 = null;
                var2 = arg1;
                var2 = var4 == var2;
                if(!var2) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                var3 = _closure2_slot5;
                var3 = var3[var5];
                var2 = var4 == var3;
case 62:
                var1 = var2;
case 60:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useFetchCollectiblesProducts'] = var2;
    return var1;
})();