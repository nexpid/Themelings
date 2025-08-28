// app/modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot3;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot3;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var8 = 0;
    var4 = var6[var8];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot0 = var2;
    var7 = 1;
    var4 = var6[var7];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot1 = var2;
    var4 = {};
    var4['Trick'] = var8;
    var2 = 'Trick';
    var4[var8] = var2;
    var4['Treat'] = var7;
    var2 = 'Treat';
    var4[var7] = var2;
    var2 = 2;
    var7 = var6[var2];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useGiftingPromotionDefaultSelection(arg1, arg2, arg3) {
        var7 = arg1;
        var6 = arg2;
        var5 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot1;
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
 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0004_ip = 466; continue _fun0004 }
 18:
                var2 = _closure2_slot0;
                var2 = var2.length;
                var4 = 0;
                if(!(var4 !== var2)) { _fun0004_ip = 466; continue _fun0004 }
 36:
                var2 = _closure2_slot1;
                if(!(var1 != var2)) { _fun0004_ip = 409; continue _fun0004 }
 47:
                var2 = _closure2_slot1;
                var2 = var2.length;
                if(!(var4 !== var2)) { _fun0004_ip = 409; continue _fun0004 }
 63:
                var5 = new Array(0);
                var _closure3_slot0 = var5;
                var2 = global;
                var6 = var2.Map;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var21 = var7;
                var6 = new var21[var6](var20);
                var7 = var6 instanceof Object ? var6 : var7;
                var _closure3_slot1 = var7;
                var8 = _closure1_slot2;
                var6 = _closure2_slot1;
                var13 = undefined;
                var11 = var8.bind(var13)(var6);
                var8 = var11.bind(var13)();
                var6 = var8.done;
                var12 = 2;
                var10 = var8;
                var9 = undefined;
                var8 = undefined;
                if(var6) { _fun0004_ip = 219; continue _fun0004 }
 143:
                var6 = var10.value;
                var _closure3_slot2 = var6;
                var6 = var6.variants;
                var6 = var6.length;
                if(!(var6 >= var12)) { _fun0004_ip = 204; continue _fun0004 }
 167:
                var16 = function _loop() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var4 = _closure3_slot3;
                        var2 = _closure3_slot2;
                        var3 = var2.variants;
                        var2 = _closure3_slot3;
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
                        if(!var1) { _fun0005_ip = 135; continue _fun0005 }
 59:
                        var2 = _closure3_slot1;
                        var1 = var2.has;
                        var1 = var1.bind(var2)(var4);
                        if(var1) { _fun0005_ip = 135; continue _fun0005 }
 76:
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var4);
                        var3 = _closure3_slot1;
                        var2 = var3.set;
                        var1 = {};
                        var8 = var1;
                        var7 = var6;
                        var6 = copyDataProperties(var8, var7);
                        var5 = _closure3_slot2;
                        var6 = var5.name;
                        var5 = 'name';
                        var1[var5] = var6;
                        var1 = var2.bind(var3)(var4, var1);
 135:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot3 = var4;
                var6 = 0;
 180:
                var17 = var16.bind(var13)();
                var17 = var6 + 1;
                _closure3_slot3 = var17;
                var6 = var17;
                var9 = var16;
                var8 = var6;
                if(var8 < var12) { _fun0004_ip = 180; continue _fun0004 }
 204:
                var16 = var11.bind(var13)();
                var6 = var16.done;
                var10 = var16;
                if(!var6) { _fun0004_ip = 143; continue _fun0004 }
 219:
                var6 = var5.length;
                if(!(var4 !== var6)) { _fun0004_ip = 407; continue _fun0004 }
 231:
                var6 = _closure2_slot2;
                if(!(var1 != var6)) { _fun0004_ip = 344; continue _fun0004 }
 239:
                var6 = _closure1_slot2;
                var11 = var6.bind(var13)(var7);
                var8 = var11.bind(var13)();
                var6 = var8.done;
                var10 = 1;
                var9 = var8;
                if(var6) { _fun0004_ip = 344; continue _fun0004 }
 266:
                var8 = var9.value;
                var6 = _closure1_slot0;
                var6 = var6.bind(var13)(var8, var12);
                var8 = var6[var4];
                var6 = var6[var10];
                var15 = var6.skuId;
                var6 = _closure2_slot2;
                var6 = var6.skuId;
                if(!(var15 !== var6)) { _fun0004_ip = 326; continue _fun0004 }
 309:
                var15 = var11.bind(var13)();
                var6 = var15.done;
                var9 = var15;
                if(var6) { _fun0004_ip = 344; continue _fun0004 }
 324:
                _fun0004_ip = 266; continue _fun0004;
 326:
                var6 = {};
                var6['defaultCategory'] = var8;
                var8 = _closure2_slot2;
                var6['defaultHighlightedReward'] = var8;
                return var6;
 344:
                var8 = var2.Math;
                var6 = var8.floor;
                var2 = _closure2_slot3;
                var9 = var2.current;
                var2 = var5.length;
                var2 = var9 * var2;
                var2 = var6.bind(var8)(var2);
                var6 = var5[var2];
                var2 = {};
                var2['defaultCategory'] = var6;
                var5 = var7.get;
                var5 = var5.bind(var7)(var6);
                var2['defaultHighlightedReward'] = var5;
                return var2;
 407:
                return var1;
 409:
                var2 = {};
                var5 = global;
                var7 = var5.Math;
                var6 = var7.floor;
                var5 = _closure2_slot3;
                var8 = var5.current;
                var5 = 2;
                var5 = var5 * var8;
                var5 = var6.bind(var7)(var5);
                var2['defaultCategory'] = var5;
                var3 = _closure2_slot0;
                var3 = var3[var4];
                var2['defaultHighlightedReward'] = var3;
                return var2;
 466:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var5;
    var3['TrickTreatCategory'] = var4;
    var3['CATEGORY_COUNT'] = var2;
    return var1;
})();