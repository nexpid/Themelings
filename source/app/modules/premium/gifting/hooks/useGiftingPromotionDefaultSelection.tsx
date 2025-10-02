// app/modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
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
    var5 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var2);
    var7 = 0;
    var5 = var6[var7];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot0 = var2;
    var2 = {};
    var2['Trick'] = var7;
    var5 = 'Trick';
    var2[var7] = var5;
    var5 = 1;
    var2['Treat'] = var5;
    var7 = 'Treat';
    var2[var5] = var7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useGiftingPromotionDefaultSelection(arg1, arg2, arg3) {
        var7 = arg1;
        var6 = arg2;
        var5 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot0;
        var3 = var4.useRef;
        var2 = global;
        var8 = var2.Math;
        var2 = var8.random;
        var2 = var2.bind(var8)();
        var2 = var3.bind(var4)(var2);
        var _closure2_slot3 = var2;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var3 = _closure2_slot0;
                var5 = var3.length;
                var3 = 0;
                if(!(var3 !== var5)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
                var5 = _closure2_slot1;
                if(!(var1 != var5)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                var5 = _closure2_slot1;
                var5 = var5.length;
                if(!(var3 !== var5)) { _fun0004_ip = 39; continue _fun0004 }
case 41:
                var7 = new Array(0);
                var _closure3_slot0 = var7;
                var5 = global;
                var6 = var5.Map;
                var8 = var6.prototype;
                var8 = Object.create(var8, {constructor: {value: var6}});
                var20 = var8;
                var6 = new var20[var6](var19);
                var9 = var6 instanceof Object ? var6 : var8;
                var _closure3_slot1 = var9;
                var6 = var5.Map;
                var8 = var6.prototype;
                var8 = Object.create(var8, {constructor: {value: var6}});
                var20 = var8;
                var6 = new var20[var6](var19);
                var10 = var6 instanceof Object ? var6 : var8;
                var _closure3_slot2 = var10;
                var8 = _closure1_slot1;
                var6 = _closure2_slot1;
                var15 = undefined;
                var14 = var8.bind(var15)(var6);
                var8 = var14.bind(var15)();
                var6 = var8.done;
                var13 = 2;
                var12 = var8;
                var11 = undefined;
                var8 = undefined;
                if(var6) { _fun0004_ip = 18; continue _fun0004 }
case 42:
                var6 = var12.value;
                var _closure3_slot3 = var6;
                var6 = var6.variants;
                var6 = var6.length;
                if(!(var6 >= var13)) { _fun0004_ip = 21; continue _fun0004 }
case 43:
                var16 = function _loop() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = _closure3_slot4;
                        var2 = _closure3_slot3;
                        var3 = var2.variants;
                        var2 = _closure3_slot4;
                        var6 = var3[var2];
                        var _closure4_slot0 = var6;
                        var3 = _closure2_slot0;
                        var2 = var3.some;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.skuId;
                            var1 = _closure4_slot0;
                            var1 = var1.skuId;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                        var3 = _closure3_slot2;
                        var2 = var3.set;
                        var1 = var6.skuId;
                        var1 = var2.bind(var3)(var1, var4);
                        var2 = _closure3_slot1;
                        var1 = var2.has;
                        var1 = var1.bind(var2)(var4);
                        if(var1) { _fun0005_ip = 44; continue _fun0005 }
case 46:
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var4);
                        var3 = _closure3_slot1;
                        var2 = var3.set;
                        var1 = {};
                        var8 = var1;
                        var7 = var6;
                        var6 = copyDataProperties(var8, var7);
                        var5 = _closure3_slot3;
                        var6 = var5.name;
                        var5 = 'name';
                        var1[var5] = var6;
                        var1 = var2.bind(var3)(var4, var1);
case 44:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot4 = var3;
                var6 = 0;
case 47:
                var17 = var16.bind(var15)();
                var17 = var6 + 1;
                _closure3_slot4 = var17;
                var6 = var17;
                var11 = var16;
                var8 = var6;
                if(var8 < var13) { _fun0004_ip = 47; continue _fun0004 }
case 21:
                var16 = var14.bind(var15)();
                var6 = var16.done;
                var12 = var16;
                if(!var6) { _fun0004_ip = 42; continue _fun0004 }
case 18:
                var6 = var7.length;
                if(!(var3 !== var6)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                var6 = _closure2_slot2;
                if(!(var1 != var6)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                var8 = var10.get;
                var6 = _closure2_slot2;
                var6 = var6.skuId;
                var6 = var8.bind(var10)(var6);
                if(!(var1 == var6)) { _fun0004_ip = 52; continue _fun0004 }
case 50:
                var10 = var5.Math;
                var8 = var10.floor;
                var5 = _closure2_slot3;
                var11 = var5.current;
                var5 = var7.length;
                var5 = var11 * var5;
                var5 = var8.bind(var10)(var5);
                var8 = var7[var5];
                var5 = {};
                var5['defaultCategory'] = var8;
                var7 = var9.get;
                var7 = var7.bind(var9)(var8);
                var5['defaultHighlightedReward'] = var7;
                return var5;
case 52:
                var5 = {};
                var5['defaultCategory'] = var6;
                var6 = _closure2_slot2;
                var5['defaultHighlightedReward'] = var6;
                return var5;
case 48:
                return var1;
case 39:
                var5 = _closure2_slot2;
                if(!(var1 != var5)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                var6 = _closure2_slot0;
                var5 = var6.some;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.skuId;
                    var1 = _closure2_slot2;
                    var1 = var1.skuId;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                if(var2) { _fun0004_ip = 55; continue _fun0004 }
case 53:
                var2 = _closure2_slot0;
                var3 = var2[var3];
                _fun0004_ip = 56; continue _fun0004;
case 55:
                var3 = _closure2_slot2;
case 56:
                var2 = {};
                var5 = global;
                var6 = var5.Math;
                var5 = var6.floor;
                var4 = _closure2_slot3;
                var7 = var4.current;
                var4 = 2;
                var4 = var4 * var7;
                var4 = var5.bind(var6)(var4);
                var2['defaultCategory'] = var4;
                var2['defaultHighlightedReward'] = var3;
                return var2;
case 36:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['TrickTreatCategory'] = var2;
    var2 = 2;
    var3['CATEGORY_COUNT'] = var2;
    return var1;
})();