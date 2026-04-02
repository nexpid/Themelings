// app/modules/premium/promotions/PromotionsHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var1 = function useEligibleActiveOutboundPromotions(arg1, arg2, arg3, arg4) {
        var7 = arg1;
        var6 = arg2;
        var8 = arg3;
        var5 = arg4;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var8;
        var _closure2_slot3 = var5;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 6;
        var10 = var11[var3];
        var4 = undefined;
        var14 = var9.bind(var4)(var10);
        var13 = var14.useStateFromStoresArray;
        var10 = _closure1_slot7;
        var12 = new Array(1);
        var12[0] = var10;
        var10 = function() {
            var1 = _closure1_slot7;
            var1 = var1.outboundPromotions;
            return var1;
        };
        var10 = var13.bind(var14)(var12, var10);
        var _closure2_slot4 = var10;
        var3 = var11[var3];
        var11 = var9.bind(var4)(var3);
        var9 = var11.useStateFromStores;
        var3 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot7;
            var1 = var1.consumedInboundPromotionId;
            return var1;
        };
        var9 = var9.bind(var11)(var4, var3);
        var _closure2_slot5 = var9;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(6);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var2[5] = var5;
        var1 = function() {
            var3 = _closure2_slot4;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var9 = arg1;
                    var2 = var9.id;
                    var1 = _closure2_slot5;
                    var1 = var2 !== var1;
                    if(!var1) { _fun0004_ip = 16; continue _fun0004 }
case 36:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var11 = 7;
                    var2 = var2[var11];
                    var10 = undefined;
                    var3 = var3.bind(var10)(var2);
                    var2 = var3.shouldShowOutboundPromotionOnPlatform;
                    var2 = var2.bind(var3)(var9);
                    var3 = !var2;
                    var2 = !var3;
                    if(var3) { _fun0004_ip = 37; continue _fun0004 }
case 35:
                    var3 = _closure2_slot2;
                    var3 = !var3;
                    if(!var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var11];
                    var5 = var5.bind(var10)(var4);
                    var4 = var5.isLogitechPromotion;
                    var4 = var4.bind(var5)(var9);
                    var4 = !var4;
                    if(!var4) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var5 = _closure2_slot0;
                    var5 = !var5;
                    if(!var5) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var8 = _closure2_slot1;
                    var5 = !var8;
case 42:
                    if(var5) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var8 = var8.bind(var10)(var7);
                    var7 = var8.isTrialUserEligibleToSeeOutboundPromotion;
                    var6 = _closure2_slot3;
                    var5 = var7.bind(var8)(var9, var6);
case 44:
                    var4 = var5;
case 40:
                    var3 = var4;
case 38:
                    var2 = var3;
case 37:
                    var1 = var2;
case 16:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/promotions/PromotionsHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useOutboundPromotions() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 6;
            var5 = var10[var2];
            var12 = undefined;
            var8 = var3.bind(var12)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var1 = _closure1_slot7;
                var1 = var1.lastFetchedActivePromotions;
                return var1;
            };
            var11 = var7.bind(var8)(var6, var5);
            var _closure2_slot0 = var11;
            var5 = var10[var2];
            var8 = var3.bind(var12)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var7.bind(var8)(var6, var5);
            var5 = 8;
            var5 = var10[var5];
            var6 = var3.bind(var12)(var5);
            var5 = var6.useHasActiveTrial;
            var6 = var5.bind(var6)();
            var2 = var10[var2];
            var9 = var3.bind(var12)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.hasAnyUnexpiredOffer;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var7.bind(var9)(var5, var2);
            var2 = 9;
            var2 = var10[var2];
            var3 = var3.bind(var12)(var2);
            var2 = var3.useIsInReverseTrial;
            var9 = var2.bind(var3)();
            var _closure2_slot1 = var9;
            var7 = _closure1_slot1;
            var3 = 10;
            var2 = var10[var3];
            var14 = var7.bind(var12)(var2);
            var13 = var14.isPremiumExactly;
            var2 = _closure1_slot8;
            var2 = var2.TIER_2;
            var2 = var13.bind(var14)(var8, var2);
            var3 = var10[var3];
            var7 = var7.bind(var12)(var3);
            var3 = var7.isPremium;
            var3 = var3.bind(var7)(var8);
            var8 = !var3;
            if(var8) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var8 = var2;
case 46:
            var _closure2_slot2 = var8;
            var7 = _closure1_slot4;
            var3 = var7.useState;
            var2 = false;
            var2 = var3.bind(var7)(var2);
            var14 = _closure1_slot3;
            var13 = 2;
            var2 = var14.bind(var12)(var2, var13);
            var10 = 0;
            var7 = var2[var10];
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot3 = var2;
            var16 = _closure1_slot4;
            var15 = var16.useState;
            var2 = new Array(0);
            var2 = var15.bind(var16)(var2);
            var2 = var14.bind(var12)(var2, var13);
            var10 = var2[var10];
            var2 = var2[var3];
            var _closure2_slot4 = var2;
            var14 = _closure1_slot4;
            var13 = var14.useEffect;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var9;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(var1) { _fun0006_ip = 29; continue _fun0006 }
case 48:
                    var1 = _closure2_slot1;
case 29:
                    if(!var1) { _fun0006_ip = 49; continue _fun0006 }
case 31:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.markOutboundPromotionsSeen;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 49:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var13.bind(var14)(var2, var3);
            var14 = _closure1_slot4;
            var13 = var14.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4.some;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.promotion;
                            var2 = var1.id;
                            var1 = _closure3_slot0;
                            var1 = var1.promotion;
                            var1 = var1.id;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var2.bind(var4)(var1);
                        var1 = var4;
                        if(var2) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                        var2 = new Array(1);
                        var5 = 0;
                        var7 = var2;
                        var6 = var4;
                        var4 = arraySpread(var7, var6, var5);
                        var3 = _closure3_slot0;
                        var2[3] = var3;
                        var3 = 1;
                        var3 = var4 + var3;
                        var1 = var2;
case 50:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var13.bind(var14)(var3, var2);
            var15 = _closure1_slot4;
            var14 = var15.useEffect;
            var13 = new Array(3);
            var13[0] = var11;
            var13[1] = var8;
            var13[2] = var9;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.wait;
                var2 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = _closure2_slot2;
                        if(!var1) { _fun0008_ip = 3; continue _fun0008 }
case 52:
                        var4 = _closure2_slot0;
                        var2 = null;
                        var2 = var2 == var4;
                        if(var2) { _fun0008_ip = 51; continue _fun0008 }
case 31:
                        var2 = _closure2_slot1;
case 51:
                        var1 = var2;
case 3:
                        if(!var1) { _fun0008_ip = 53; continue _fun0008 }
case 33:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.fetchActivePromotions;
                        var1 = var1.bind(var2)();
case 53:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var14.bind(var15)(var3, var13);
            var15 = _closure1_slot4;
            var14 = var15.useEffect;
            var13 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.wait;
                var2 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.fetchClaimedOutboundPromotionCodes;
                    var5 = var3.bind(var4)();
                    var4 = var5.then;
                    var3 = function(arg1) {
                        var4 = _closure2_slot4;
                        var1 = undefined;
                        var3 = arg1;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot3;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function() {
                        var4 = _closure2_slot4;
                        var1 = undefined;
                        var3 = new Array(0);
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot3;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var14.bind(var15)(var13, var3);
            var3 = {};
            var13 = _closure1_slot9;
            var15 = var13.bind(var12)(var10);
            var14 = var15.bind(var12)();
            var13 = var14.done;
            if(var13) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var13 = var14.value;
            var16 = var13.code;
            var13 = var13.promotion;
            var13 = var13.id;
            var3[var13] = var16;
            var16 = var15.bind(var12)();
            var13 = var16.done;
            var14 = var16;
            if(!var13) { _fun0005_ip = 55; continue _fun0005 }
case 54:
            var1 = _closure1_slot11;
            var21 = undefined;
            var20 = var6;
            var19 = var5;
            var18 = var9;
            var17 = var3;
            var5 = var21[var1](var20, var19, var18, var17, var16);
            var1 = global;
            var12 = var1.Set;
            var6 = var5.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var20 = var6.bind(var5)(var1);
            var6 = var12.prototype;
            var6 = Object.create(var6, {constructor: {value: var12}});
            var21 = var6;
            var1 = new var21[var12](var20, var19);
            var1 = var1 instanceof Object ? var1 : var6;
            var _closure2_slot5 = var1;
            var6 = var10.filter;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.promotion;
                    var3 = _closure2_slot5;
                    var2 = var3.has;
                    var1 = var4.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    if(!var1) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.isRecurringPromotion;
                    var2 = {};
                    var6 = var4.outboundTitle;
                    var2['promotionPartner'] = var6;
                    var6 = var4.promotionType;
                    var2['promotionType'] = var6;
                    var3 = var3.bind(var5)(var2);
                    var2 = false;
                    var1 = var2 === var3;
case 56:
                    if(!var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.isLogitechPromotion;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
case 58:
                    return var1;
                }
            };
            var6 = var6.bind(var10)(var1);
            var1 = {};
            if(!var7) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var8 = !var8;
            if(var8) { _fun0005_ip = 62; continue _fun0005 }
case 63:
            var10 = null;
            var8 = var10 != var11;
case 62:
            if(var8) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var8 = var9;
case 64:
            var7 = var8;
case 60:
            var1['promotionsLoaded'] = var7;
            var1['activeOutboundPromotions'] = var5;
            var5 = var6.filter;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.shouldShowOutboundPromotionOnPlatform;
                var1 = arg1;
                var1 = var1.promotion;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var1['claimedEndedOutboundPromotions'] = var4;
            var1['claimedOutboundPromotionCodeMap'] = var3;
            var1['addClaimedOutboundPromotionCode'] = var2;
            return var1;
        }
    };
    var3['useOutboundPromotions'] = var4;
    var4 = function useUnseenOutboundPromotions() {
        var5 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 6;
        var2 = var10[var4];
        var9 = undefined;
        var8 = var5.bind(var9)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot7;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() {
            var1 = _closure1_slot7;
            var1 = var1.lastSeenOutboundPromotionStartDate;
            return var1;
        };
        var2 = var7.bind(var8)(var6, var2);
        var _closure2_slot0 = var2;
        var8 = _closure1_slot11;
        var6 = 8;
        var6 = var10[var6];
        var7 = var5.bind(var9)(var6);
        var6 = var7.useHasActiveTrial;
        var7 = var6.bind(var7)();
        var4 = var10[var4];
        var12 = var5.bind(var9)(var4);
        var11 = var12.useStateFromStores;
        var4 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() {
            var2 = _closure1_slot6;
            var1 = var2.hasAnyUnexpiredOffer;
            var1 = var1.bind(var2)();
            return var1;
        };
        var15 = var11.bind(var12)(var6, var4);
        var4 = 9;
        var4 = var10[var4];
        var5 = var5.bind(var9)(var4);
        var4 = var5.useIsInReverseTrial;
        var14 = var4.bind(var5)();
        var13 = {};
        var17 = undefined;
        var16 = var7;
        var6 = var17[var8](var16, var15, var14, var13, var12);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var2;
        var2 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                var4 = _closure2_slot1;
                var3 = var4.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var5 = var1.startDate;
                    var1 = global;
                    var2 = var1.Date;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var6 = var3;
                    var2 = new var6[var2](var5, var4);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var4 = var1.Date;
                    var5 = _closure2_slot0;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var6 = var3;
                    var1 = new var6[var4](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var1 = var2 > var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                _fun0010_ip = 68; continue _fun0010;
case 66:
                var1 = _closure2_slot1;
case 68:
                return var1;
            }
        };
        var3 = var4.bind(var5)(var2, var3);
        var2 = var3.filter;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.shouldShowOutboundPromotionOnPlatform;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useUnseenOutboundPromotions'] = var4;
    var2 = function useBogoPromotion() {
        var1 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot7;
            var1 = var1.bogoPromotion;
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        var1['promotion'] = var2;
        return var1;
    };
    var3['useBogoPromotion'] = var2;
    return var1;
})();