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
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
 343:
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
 0:
                    var8 = arg1;
                    var2 = var8.id;
                    var1 = _closure2_slot5;
                    var1 = var2 !== var1;
                    if(!var1) { _fun0004_ip = 139; continue _fun0004 }
 22:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 7;
                    var2 = var2[var10];
                    var9 = undefined;
                    var3 = var3.bind(var9)(var2);
                    var2 = var3.shouldShowOutboundPromotionOnPlatform;
                    var2 = var2.bind(var3)(var8);
                    var3 = !var2;
                    var2 = !var3;
                    if(var3) { _fun0004_ip = 136; continue _fun0004 }
 67:
                    var3 = _closure2_slot2;
                    var3 = !var3;
                    if(!var3) { _fun0004_ip = 133; continue _fun0004 }
 77:
                    var4 = _closure2_slot0;
                    var4 = !var4;
                    if(!var4) { _fun0004_ip = 94; continue _fun0004 }
 87:
                    var7 = _closure2_slot1;
                    var4 = !var7;
 94:
                    if(var4) { _fun0004_ip = 130; continue _fun0004 }
 97:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var7 = var7.bind(var9)(var6);
                    var6 = var7.isTrialUserEligibleToSeeOutboundPromotion;
                    var5 = _closure2_slot3;
                    var4 = var6.bind(var7)(var8, var5);
 130:
                    var3 = var4;
 133:
                    var2 = var3;
 136:
                    var1 = var2;
 139:
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
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/promotions/PromotionsHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useOutboundPromotions() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 6;
            var3 = var14[var2];
            var12 = undefined;
            var7 = var13.bind(var12)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot7;
                var1 = var1.lastFetchedActivePromotions;
                return var1;
            };
            var11 = var6.bind(var7)(var5, var3);
            var _closure2_slot0 = var11;
            var3 = var14[var2];
            var7 = var13.bind(var12)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var6.bind(var7)(var5, var3);
            var3 = 8;
            var3 = var14[var3];
            var5 = var13.bind(var12)(var3);
            var3 = var5.useHasActiveTrial;
            var6 = var3.bind(var5)();
            var2 = var14[var2];
            var7 = var13.bind(var12)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.hasAnyUnexpiredOffer;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var7)(var3, var2);
            var2 = 9;
            var2 = var14[var2];
            var3 = var13.bind(var12)(var2);
            var2 = var3.useIsInReverseTrial;
            var9 = var2.bind(var3)();
            var _closure2_slot1 = var9;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var16 = false;
            var2 = var2.bind(var3)(var16);
            var15 = _closure1_slot3;
            var10 = 2;
            var2 = var15.bind(var12)(var2, var10);
            var8 = 0;
            var7 = var2[var8];
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot2 = var2;
            var19 = _closure1_slot4;
            var18 = var19.useState;
            var2 = new Array(0);
            var2 = var18.bind(var19)(var2);
            var2 = var15.bind(var12)(var2, var10);
            var10 = var2[var8];
            var2 = var2[var3];
            var _closure2_slot3 = var2;
            var15 = _closure1_slot4;
            var8 = var15.useEffect;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var9;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(var1) { _fun0006_ip = 20; continue _fun0006 }
 16:
                    var1 = _closure2_slot1;
 20:
                    if(!var1) { _fun0006_ip = 66; continue _fun0006 }
 23:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.markOutboundPromotionsSeen;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var15)(var2, var3);
            var15 = _closure1_slot4;
            var8 = var15.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                        if(var2) { _fun0007_ip = 65; continue _fun0007 }
 27:
                        var2 = new Array(1);
                        var5 = 0;
                        var7 = var2;
                        var6 = var4;
                        var4 = arraySpread(var7, var6, var5);
                        var3 = _closure3_slot0;
                        var2[var4] = var3;
                        var3 = 1;
                        var3 = var4 + var3;
                        var1 = var2;
 65:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var8.bind(var15)(var3, var2);
            var8 = _closure1_slot1;
            var3 = 12;
            var3 = var14[var3];
            var15 = var8.bind(var12)(var3);
            var8 = var15.isPremiumExactly;
            var3 = _closure1_slot8;
            var3 = var3.TIER_2;
            var3 = var8.bind(var15)(var17, var3);
            var8 = 13;
            var8 = var14[var8];
            var8 = var13.bind(var12)(var8);
            var15 = var8.OutboundPromoDesktopUpsellExperiment;
            var14 = var15.useExperiment;
            var13 = {};
            var8 = 'useOutboundPromotions';
            var13['location'] = var8;
            var8 = {};
            var8['autoTrackExposure'] = var16;
            var8['disable'] = var3;
            var8 = var14.bind(var15)(var13, var8);
            var8 = var8.enabled;
            if(var8) { _fun0005_ip = 420; continue _fun0005 }
 417:
            var8 = var3;
 420:
            var _closure2_slot4 = var8;
            var15 = _closure1_slot4;
            var14 = var15.useEffect;
            var13 = new Array(3);
            var13[0] = var11;
            var13[1] = var8;
            var13[2] = var9;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.wait;
                var2 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = _closure2_slot4;
                        if(!var1) { _fun0008_ip = 30; continue _fun0008 }
 10:
                        var4 = _closure2_slot0;
                        var2 = null;
                        var2 = var2 == var4;
                        if(var2) { _fun0008_ip = 27; continue _fun0008 }
 23:
                        var2 = _closure2_slot1;
 27:
                        var1 = var2;
 30:
                        if(!var1) { _fun0008_ip = 68; continue _fun0008 }
 33:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.fetchActiveOutboundPromotions;
                        var1 = var1.bind(var2)();
 68:
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
                var1 = 10;
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
                        var4 = _closure2_slot3;
                        var1 = undefined;
                        var3 = arg1;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot2;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function() {
                        var4 = _closure2_slot3;
                        var1 = undefined;
                        var3 = new Array(0);
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot2;
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
            if(var13) { _fun0005_ip = 547; continue _fun0005 }
 507:
            var13 = var14.value;
            var16 = var13.code;
            var13 = var13.promotion;
            var13 = var13.id;
            var3[var13] = var16;
            var16 = var15.bind(var12)();
            var13 = var16.done;
            var14 = var16;
            if(!var13) { _fun0005_ip = 507; continue _fun0005 }
 547:
            var1 = _closure1_slot11;
            var24 = undefined;
            var23 = var6;
            var22 = var5;
            var21 = var9;
            var20 = var3;
            var5 = var24[var1](var23, var22, var21, var20, var19);
            var1 = global;
            var12 = var1.Set;
            var6 = var5.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var23 = var6.bind(var5)(var1);
            var6 = var12.prototype;
            var6 = Object.create(var6, {constructor: {value: var12}});
            var24 = var6;
            var1 = new var24[var12](var23, var22);
            var1 = var1 instanceof Object ? var1 : var6;
            var _closure2_slot5 = var1;
            var6 = var10.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.promotion;
                var3 = _closure2_slot5;
                var2 = var3.has;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var6 = var6.bind(var10)(var1);
            var1 = {};
            if(!var7) { _fun0005_ip = 657; continue _fun0005 }
 636:
            var8 = !var8;
            if(var8) { _fun0005_ip = 648; continue _fun0005 }
 642:
            var10 = null;
            var8 = var10 != var11;
 648:
            if(var8) { _fun0005_ip = 654; continue _fun0005 }
 651:
            var8 = var9;
 654:
            var7 = var8;
 657:
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0009_ip = 36; continue _fun0009 }
 13:
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
                _fun0009_ip = 40; continue _fun0009;
 36:
                var1 = _closure2_slot1;
 40:
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