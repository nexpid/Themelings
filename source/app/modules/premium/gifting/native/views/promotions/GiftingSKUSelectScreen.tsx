// app/modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['scroll'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'column'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9['padding'] = var12;
    var4['contentContainer'] = var9;
    var9 = {};
    var12 = 'center';
    var9['textAlign'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['padding'] = var12;
    var4['header'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_96;
    var9['marginHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginVertical'] = var12;
    var4['segmentedControlContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_24;
    var9['paddingBottom'] = var10;
    var4['buttonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftingSKUSelectScreen(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var6 = var2.defaultHighlightedReward;
            var _closure2_slot0 = var6;
            var7 = var2.defaultCategory;
            var18 = var2.claimableRewards;
            var _closure2_slot1 = var18;
            var8 = var2.claimableVariants;
            var _closure2_slot2 = var8;
            var2 = var2.onSelect;
            var _closure2_slot3 = var2;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var3 = _closure1_slot9;
            var10 = var3.bind(var4)();
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var13 = null;
            if(!(var13 == var7)) { _fun0004_ip = 143; continue _fun0004 }
 111:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 6;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.TrickTreatCategory;
            var7 = var11.Trick;
 143:
            var5 = var3.bind(var5)(var7);
            var3 = _closure1_slot3;
            var16 = 2;
            var5 = var3.bind(var4)(var5, var16);
            var12 = 0;
            var27 = var5[var12];
            _closure2_slot4 = var27;
            var3 = 1;
            var25 = var5[var3];
            var11 = _closure1_slot4;
            var7 = var11.useState;
            var14 = var13 == var6;
            var5 = undefined;
            if(var14) { _fun0004_ip = 202; continue _fun0004 }
 196:
            var5 = var6.skuId;
 202:
            var5 = var7.bind(var11)(var5);
            var15 = _closure1_slot3;
            var5 = var15.bind(var4)(var5, var16);
            var11 = var5[var12];
            _closure2_slot5 = var11;
            var5 = var5[var3];
            _closure2_slot6 = var5;
            var5 = _closure1_slot4;
            var14 = var5.useState;
            var7 = false;
            var7 = var14.bind(var5)(var7);
            var14 = var15.bind(var4)(var7, var16);
            var7 = var14[var12];
            _closure2_slot7 = var7;
            var14 = var14[var3];
            _closure2_slot8 = var14;
            var17 = var5.useCallback;
            var14 = new Array(3);
            var14[0] = var2;
            var14[1] = var11;
            var14[2] = var18;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = _closure2_slot5;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 43; continue _fun0005 }
 32:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var17.bind(var5)(var2, var14);
            var19 = var5.useCallback;
            var17 = function(arg1) {
                var4 = _closure2_slot6;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot8;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var17 = var19.bind(var5)(var17, var2);
            var2 = var5.useState;
            var2 = var2.bind(var5)(var12);
            var2 = var15.bind(var4)(var2, var16);
            var26 = var2[var12];
            var2 = var2[var3];
            _closure2_slot9 = var2;
            var12 = var5.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot9;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = new Array(0);
            var15 = var12.bind(var5)(var3, var2);
            var12 = var5.useMemo;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var18;
            var3[2] = var27;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0006_ip = 160; continue _fun0006 }
 16:
                    var1 = new Array(0);
                    var5 = _closure1_slot10;
                    var4 = _closure2_slot2;
                    var9 = undefined;
                    var8 = var5.bind(var9)(var4);
                    var5 = var8.bind(var9)();
                    var4 = var5.done;
                    var7 = 'name';
                    var6 = 6;
                    if(var4) { _fun0006_ip = 158; continue _fun0006 }
 57:
                    var12 = var5.value;
                    var4 = var12.variants;
                    var11 = var4.length;
                    var13 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var4 = var13.bind(var9)(var4);
                    var4 = var4.CATEGORY_COUNT;
                    if(!(!(var11 < var4))) { _fun0006_ip = 143; continue _fun0006 }
 100:
                    var11 = var12.variants;
                    var4 = _closure2_slot4;
                    var14 = var11[var4];
                    var11 = var1.push;
                    var4 = {};
                    var15 = var4;
                    var13 = copyDataProperties(var15, var14);
                    var12 = var12.name;
                    var4[var7] = var12;
                    var4 = var11.bind(var1)(var4);
 143:
                    var11 = var8.bind(var9)();
                    var4 = var11.done;
                    var5 = var11;
                    if(!var4) { _fun0006_ip = 57; continue _fun0006 }
 158:
                    return var1;
 160:
                    var1 = _closure2_slot1;
                    if(!(var3 == var1)) { _fun0006_ip = 174; continue _fun0006 }
 168:
                    var1 = new Array(0);
                    _fun0006_ip = 178; continue _fun0006;
 174:
                    var1 = _closure2_slot1;
 178:
                    return var1;
                }
            };
            var20 = var12.bind(var5)(var2, var3);
            _closure2_slot10 = var20;
            var12 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var18;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 40; continue _fun0007 }
 16:
                    var4 = _closure2_slot1;
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = _closure2_slot5;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var12 = var12.bind(var5)(var2, var3);
            _closure2_slot11 = var12;
            var3 = var5.useEffect;
            var2 = new Array(5);
            var2[0] = var11;
            var2[1] = var20;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var12;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot10;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0008_ip = 125; continue _fun0008 }
 20:
                    var3 = _closure2_slot11;
                    if(!var3) { _fun0008_ip = 52; continue _fun0008 }
 27:
                    var5 = _closure2_slot10;
                    var4 = var5.some;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = _closure2_slot5;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0008_ip = 136; continue _fun0008 }
 52:
                    var3 = _closure2_slot7;
                    var5 = !var3;
                    if(!var5) { _fun0008_ip = 72; continue _fun0008 }
 62:
                    var4 = _closure2_slot0;
                    var3 = null;
                    var5 = var3 != var4;
 72:
                    if(!var5) { _fun0008_ip = 97; continue _fun0008 }
 75:
                    var4 = _closure2_slot10;
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = _closure2_slot0;
                        var1 = var1.skuId;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var5 = var3.bind(var4)(var2);
 97:
                    var4 = _closure2_slot6;
                    var3 = undefined;
                    var2 = undefined;
                    if(!var5) { _fun0008_ip = 118; continue _fun0008 }
 108:
                    var5 = _closure2_slot0;
                    var2 = var5.skuId;
 118:
                    var2 = var4.bind(var3)(var2);
                    _fun0008_ip = 136; continue _fun0008;
 125:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var1);
 136:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var6 = _closure1_slot6;
            var5 = {};
            var7 = var10.scroll;
            var5['style'] = var7;
            var7 = var10.contentContainer;
            var5['contentContainerStyle'] = var7;
            var22 = _closure1_slot7;
            var29 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 7;
            var7 = var23[var16];
            var7 = var29.bind(var4)(var7);
            var21 = var7.Text;
            var7 = {'style': null, 'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var19 = var10.header;
            var7['style'] = var19;
            var19 = 8;
            var24 = var23[var19];
            var24 = var29.bind(var4)(var24);
            var28 = var24.intl;
            var24 = var28.string;
            var23 = var23[var19];
            var23 = var29.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.Rp0+ZG;
            var23 = var24.bind(var28)(var23);
            var7['children'] = var23;
            var21 = var22.bind(var4)(var21, var7);
            var7 = new Array(4);
            var7[0] = var21;
            var8 = var13 != var8;
            if(!var8) { _fun0004_ip = 810; continue _fun0004 }
 666:
            var22 = _closure1_slot7;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var16 = var33[var16];
            var16 = var32.bind(var4)(var16);
            var21 = var16.Text;
            var16 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-normal'};
            var23 = var10.header;
            var16['style'] = var23;
            var23 = var33[var19];
            var23 = var32.bind(var4)(var23);
            var29 = var23.intl;
            var28 = var29.format;
            var23 = var33[var19];
            var23 = var32.bind(var4)(var23);
            var23 = var23.t;
            var24 = var23.xGzXNT;
            var23 = {};
            var31 = var20.length;
            var30 = 6;
            var30 = var33[var30];
            var30 = var32.bind(var4)(var30);
            var30 = var30.CATEGORY_COUNT;
            var30 = var31 * var30;
            var23['rewardCount'] = var30;
            var23 = var28.bind(var29)(var24, var23);
            var16['children'] = var23;
            var8 = var22.bind(var4)(var21, var16);
 810:
            var7[1] = var8;
            var16 = _closure1_slot7;
            var22 = _closure1_slot5;
            var8 = {};
            var21 = var10.segmentedControlContainer;
            var8['style'] = var21;
            var8['onLayout'] = var15;
            var15 = _closure1_slot1;
            var21 = _closure1_slot2;
            var23 = 9;
            var23 = var21[var23];
            var24 = var15.bind(var4)(var23);
            var23 = {};
            var23['defaultCategory'] = var27;
            var23['onCategoryChange'] = var25;
            var25 = 32;
            var25 = var26 - var25;
            var23['pageWidth'] = var25;
            var23 = var16.bind(var4)(var24, var23);
            var8['children'] = var23;
            var8 = var16.bind(var4)(var22, var8);
            var7[2] = var8;
            var8 = 10;
            var8 = var21[var8];
            var15 = var15.bind(var4)(var8);
            var8 = {};
            var8['rewardsToDisplay'] = var20;
            if(!(var13 == var18)) { _fun0004_ip = 930; continue _fun0004 }
 926:
            var18 = new Array(0);
 930:
            var8['claimableRewards'] = var18;
            var8['onSelect'] = var17;
            var8['highlightedSkuId'] = var11;
            var8 = var16.bind(var4)(var15, var8);
            var7[3] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var10.buttonContainer;
            var6['style'] = var10;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 11;
            var9 = var15[var9];
            var9 = var18.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.WaYuBQ;
            var15 = var16.bind(var17)(var15);
            var9['text'] = var15;
            var9['onPress'] = var14;
            var11 = var13 == var11;
            if(var11) { _fun0004_ip = 1085; continue _fun0004 }
 1082:
            var11 = !var12;
 1085:
            var9['disabled'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();