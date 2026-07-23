// app/modules/storefront/StorefrontUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var1 = function transformStorefrontSKUPricesServer(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.currency;
            var1['currency'] = var3;
            var2 = var2.amount;
            var1['amount'] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function transformStorefrontPricesResultMapServer(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.mapValues;
        var2 = arg1;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.mapValues;
            var2 = arg1;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = _closure1_slot13;
                var4 = var2.user_price;
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var1['userPrice'] = var4;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.mapValues;
                var3 = var2.prices;
                var2 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.mapValues;
                    var2 = arg1;
                    var1 = function(arg1) {
                        var3 = _closure1_slot13;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var1['prices'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function transformStorefrontRewardsResultMapServer(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.mapValues;
        var2 = arg1;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.mapValues;
            var2 = arg1;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.type;
                var1['type'] = var3;
                var2 = var2.amount;
                var1['amount'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var7 = function transformPriceSetAssignmentToStorefrontPurchaseType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot8;
            var2 = var2.DEFAULT;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot8;
            var2 = var2.GIFT;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.StorefrontPurchaseType;
            var2 = var2.SELF_PURCHASE;
            return var2;
case 6:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.StorefrontPurchaseType;
            var2 = var2.GIFT;
            return var2;
case 4:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.StorefrontPurchaseType;
            var1 = var1.SELF_PURCHASE;
            return var1;
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.StorefrontPurchaseType;
            var1 = var1.SELF_PURCHASE;
            return var1;
        }
    };
    var _closure1_slot16 = var7;
    var1 = function useResolvedUserPrice(arg1) {
        var2 = arg1;
        var8 = var2.sku;
        var _closure2_slot0 = var8;
        var6 = var2.priceSetAssignmentPurchaseType;
        var _closure2_slot1 = var6;
        var5 = var2.isOrbPrice;
        var _closure2_slot2 = var5;
        var7 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var9 = var7.bind(var3)(var4);
        var7 = var9.useStateFromStores;
        var3 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure1_slot6;
                var2 = var3.getPricesForSkuId;
                var4 = _closure2_slot0;
                var1 = null;
                var6 = var1 == var4;
                var4 = undefined;
                if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var5 = _closure2_slot0;
                var4 = var5.id;
case 8:
                var5 = var1 != var4;
                var1 = null;
                if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var1 = var4;
case 10:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var7 = var7.bind(var9)(var4, var3);
        var _closure2_slot3 = var7;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot16;
                var3 = _closure2_slot1;
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var6 = _closure2_slot0;
                var3 = null;
                if(!(var3 != var6)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var6 = _closure2_slot3;
                if(!(var3 != var6)) { _fun0003_ip = 12; continue _fun0003 }
case 8:
                var6 = _closure2_slot3;
                var6 = var6[var4];
                if(!(var3 == var6)) { _fun0003_ip = 14; continue _fun0003 }
case 10:
                var7 = _closure2_slot3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var1 = var8.bind(var5)(var1);
                var1 = var1.StorefrontPurchaseType;
                var1 = var1.SELF_PURCHASE;
                var6 = var7[var1];
case 14:
                var1 = {};
                var8 = var3 == var6;
                var7 = undefined;
                if(var8) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var10 = var6.userPrice;
                var8 = var3 == var10;
                var7 = undefined;
                if(var8) { _fun0003_ip = 15; continue _fun0003 }
case 17:
                var9 = var10.find;
                var8 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var2 = arg1;
                        var3 = var2.currency;
                        var2 = _closure1_slot7;
                        var2 = var2.DISCORD_ORB;
                        if(var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var1 = var3 !== var2;
                        _fun0004_ip = 8; continue _fun0004;
case 18:
                        var1 = var3 === var2;
case 8:
                        return var1;
                    }
                };
                var7 = var9.bind(var10)(var8);
case 15:
                var1['userPrice'] = var7;
                var1['pricesForPurchaseType'] = var6;
                var1['purchaseType'] = var4;
                var6 = true;
                var1['storeHasPrice'] = var6;
                return var1;
case 12:
                var1 = {};
                var1['userPrice'] = var5;
                var1['pricesForPurchaseType'] = var5;
                var1['purchaseType'] = var4;
                var2 = _closure2_slot3;
                var2 = var3 != var2;
                var1['storeHasPrice'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var6 = function useSKUPrice(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var13 = var2.sku;
            var _closure2_slot0 = var13;
            var12 = var2.priceSetAssignmentPurchaseType;
            var10 = undefined;
            if(!(var12 === var10)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var2 = _closure1_slot8;
            var12 = var2.DEFAULT;
case 20:
            var _closure2_slot1 = var12;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var10;
            var _closure2_slot6 = var10;
            var _closure2_slot7 = var10;
            var4 = _closure1_slot17;
            var3 = {};
            var3['sku'] = var13;
            var3['priceSetAssignmentPurchaseType'] = var12;
            var5 = false;
            var3['isOrbPrice'] = var5;
            var3 = var4.bind(var10)(var3);
            var8 = var3.userPrice;
            _closure2_slot2 = var8;
            var7 = var3.pricesForPurchaseType;
            _closure2_slot3 = var7;
            var6 = var3.purchaseType;
            _closure2_slot4 = var6;
            var9 = var3.storeHasPrice;
            _closure2_slot5 = var9;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 10;
            var5 = var11[var3];
            var16 = var4.bind(var10)(var5);
            var15 = var16.useStateFromStoresArray;
            var5 = _closure1_slot6;
            var14 = new Array(1);
            var14[0] = var5;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getRewardsForSkuId;
                    var1 = _closure2_slot0;
                    var2 = null;
                    var6 = var2 == var1;
                    var1 = undefined;
                    if(var6) { _fun0006_ip = 8; continue _fun0006 }
case 9:
                    var5 = _closure2_slot0;
                    var1 = var5.id;
case 8:
                    var1 = var3.bind(var4)(var1);
                    if(!(var2 == var1)) { _fun0006_ip = 22; continue _fun0006 }
case 11:
                    var1 = new Array(0);
case 22:
                    return var1;
                }
            };
            var5 = var15.bind(var16)(var14, var5);
            _closure2_slot6 = var5;
            var3 = var11[var3];
            var14 = var4.bind(var10)(var3);
            var11 = var14.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var11.bind(var14)(var4, var3);
            _closure2_slot7 = var11;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(8);
            var2[0] = var13;
            var2[1] = var12;
            var12 = null;
            var12 = var12 == var11;
            var10 = undefined;
            if(var12) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var10 = var11.premiumType;
case 23:
            var2[2] = var10;
            var2[3] = var9;
            var2[4] = var8;
            var2[5] = var7;
            var2[6] = var6;
            var2[7] = var5;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var1 = _closure2_slot0;
                    var5 = var1.productLine;
                    var1 = _closure1_slot11;
                    var1 = var1.SOCIAL_LAYER_GAME_ITEM;
                    if(!(var5 !== var1)) { _fun0007_ip = 29; continue _fun0007 }
case 22:
                    var7 = _closure2_slot0;
                    var5 = var7.getPrice;
                    var1 = _closure2_slot7;
                    var8 = var2 == var1;
                    var1 = undefined;
                    if(var8) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var8 = _closure2_slot7;
                    var1 = var8.premiumType;
case 30:
                    var1 = var5.bind(var7)(var1);
                    _fun0007_ip = 32; continue _fun0007;
case 29:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var5 = var5[var4];
                    var4 = undefined;
                    var8 = var7.bind(var4)(var5);
                    var7 = var8.getPrice;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var1 = var7.bind(var8)(var5, var4);
case 32:
                    var5 = var2 != var1;
                    var4 = null;
                    if(!var5) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var4 = var1;
case 33:
                    var1 = {'normalPrice': null, 'discountedPrice': null, 'discountPercent': null};
                    var1['normalPrice'] = var4;
                    var1['userPrice'] = var4;
                    return var1;
case 27:
                    var5 = _closure2_slot6;
                    var4 = var5.find;
                    var1 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = _closure2_slot4;
                            var1 = arg1;
                            var1 = var1[var2];
                            var2 = null;
                            if(!(var2 != var1)) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                            var3 = var1.type;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var6 = 7;
                            var4 = var4[var6];
                            var5 = undefined;
                            var4 = var7.bind(var5)(var4);
                            var4 = var4.StorefrontPromotionRewardType;
                            var4 = var4.DISCOUNT;
                            if(!(var4 !== var3)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var6];
                            var4 = var7.bind(var5)(var4);
                            var4 = var4.StorefrontPromotionRewardType;
                            var4 = var4.FIXED_PRICE;
                            if(!(var4 !== var3)) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.StorefrontPromotionRewardType;
                            var2 = var2.ACTION;
                            if(!(var2 !== var3)) { _fun0008_ip = 39; continue _fun0008 }
case 41:
                            var1 = var1.type;
                            var1 = false;
                            return var1;
case 39:
                            var1 = false;
                            return var1;
case 37:
                            var1 = true;
                            return var1;
case 35:
                            var1 = false;
                            return var1;
                        }
                    };
                    var5 = var4.bind(var5)(var1);
                    var4 = var2 != var5;
                    var1 = null;
                    if(!var4) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var4 = _closure2_slot4;
                    var1 = var5[var4];
case 42:
                    var4 = var2 != var1;
                    var5 = null;
                    if(!var4) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var4 = _closure2_slot2;
                    var4 = var2 != var4;
                    var5 = null;
                    if(!var4) { _fun0007_ip = 44; continue _fun0007 }
case 46:
                    var5 = _closure2_slot2;
case 44:
                    var7 = var2 != var1;
                    var4 = null;
                    if(!var7) { _fun0007_ip = 23; continue _fun0007 }
case 47:
                    var8 = var1.amount;
                    var7 = 0;
                    var7 = var8 > var7;
                    var4 = null;
                    if(!var7) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var4 = var1.amount;
case 23:
                    if(!(var2 == var1)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var7 = _closure2_slot2;
                    _fun0007_ip = 50; continue _fun0007;
case 48:
                    var1 = _closure2_slot3;
                    var8 = var2 == var1;
                    var10 = undefined;
                    var1 = undefined;
                    if(var8) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var8 = _closure2_slot3;
                    var11 = var8.prices;
                    var9 = _closure1_slot9;
                    var9 = var9.BASE;
                    var9 = var11[var9];
                    var11 = var2 == var9;
                    var1 = undefined;
                    if(var11) { _fun0007_ip = 51; continue _fun0007 }
case 53:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 7;
                    var8 = var12[var8];
                    var8 = var11.bind(var10)(var8);
                    var8 = var8.StorefrontPriceVariant;
                    var8 = var8.NORMAL;
                    var9 = var9[var8];
                    var8 = var2 == var9;
                    var1 = undefined;
                    if(var8) { _fun0007_ip = 51; continue _fun0007 }
case 54:
                    var8 = var9.find;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.currency;
                        var1 = _closure1_slot7;
                        var1 = var1.DISCORD_ORB;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var1 = var8.bind(var9)(var6);
case 51:
                    var7 = var1;
case 50:
                    var1 = {};
                    var8 = var2 != var7;
                    var6 = null;
                    if(!var8) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var6 = var7;
case 55:
                    var1['normalPrice'] = var6;
                    var1['discountedPrice'] = var5;
                    var1['discountPercent'] = var4;
                    var4 = _closure2_slot2;
                    var4 = var2 != var4;
                    var2 = null;
                    if(!var4) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var2 = _closure2_slot2;
case 57:
                    var1['userPrice'] = var2;
                    return var1;
case 25:
                    var1 = {'normalPrice': null, 'discountedPrice': null, 'discountPercent': null, 'userPrice': null};
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot18 = var6;
    var5 = function useFormatSKUPrice(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var5.bind(var3)(var4);
        var5 = var7.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot4;
            var1 = var1.locale;
            return var1;
        };
        var5 = var5.bind(var7)(var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure1_slot20;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var5;
    var4 = function formatSKUPrice(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var7 = var1.normalPrice;
            var6 = var1.discountedPrice;
            var5 = var1.discountPercent;
            var3 = var1.userPrice;
            var1 = {};
            var2 = null;
            var8 = var2 != var7;
            var4 = null;
            if(!var8) { _fun0009_ip = 59; continue _fun0009 }
case 20:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 12;
            var9 = var9[var8];
            var8 = undefined;
            var10 = var10.bind(var8)(var9);
            var9 = var10.formatPrice;
            var8 = var7.amount;
            var7 = var7.currency;
            var4 = var9.bind(var10)(var8, var7);
case 59:
            var1['normalPrice'] = var4;
            var7 = var2 != var6;
            var4 = null;
            if(!var7) { _fun0009_ip = 35; continue _fun0009 }
case 60:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 12;
            var8 = var8[var7];
            var7 = undefined;
            var9 = var9.bind(var7)(var8);
            var8 = var9.formatPrice;
            var7 = var6.amount;
            var6 = var6.currency;
            var4 = var8.bind(var9)(var7, var6);
case 35:
            var1['discountedPrice'] = var4;
            var6 = var2 != var5;
            var4 = null;
            if(!var6) { _fun0009_ip = 61; continue _fun0009 }
case 62:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 12;
            var7 = var7[var6];
            var6 = undefined;
            var8 = var8.bind(var6)(var7);
            var7 = var8.formatPercent;
            var6 = -var5;
            var5 = 100;
            var6 = var6 / var5;
            var5 = arg2;
            var4 = var7.bind(var8)(var5, var6);
case 61:
            var1['discountPercent'] = var4;
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 12;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.formatPrice;
            var4 = var3.amount;
            var3 = var3.currency;
            var2 = var5.bind(var6)(var4, var3);
case 63:
            var1['userPrice'] = var2;
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var12 = var10[var1];
    var8 = metroImportAll;
    var1 = undefined;
    var8 = var8.bind(var1)(var12);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.CurrencyCodes;
    var _closure1_slot7 = var11;
    var11 = var8.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot8 = var11;
    var11 = var8.PriceTypes;
    var _closure1_slot9 = var11;
    var11 = var8.SKUFlags;
    var _closure1_slot10 = var11;
    var8 = var8.SKUProductLines;
    var _closure1_slot11 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.PremiumTypes;
    var _closure1_slot12 = var8;
    var8 = 15;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/storefront/StorefrontUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function transformStorefrontPricesServer(arg1) {
        var2 = arg1;
        var1 = {};
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var4 = 6;
        var5 = var5[var4];
        var4 = undefined;
        var8 = var6.bind(var4)(var5);
        var7 = var8.mapValues;
        var6 = var2.sku_price_map;
        var5 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.pricing_result_id;
            var1['pricingResultId'] = var3;
            var2 = var2.reward_result_ids;
            var1['rewardResultIds'] = var2;
            return var1;
        };
        var5 = var7.bind(var8)(var6, var5);
        var1['skuPriceMap'] = var5;
        var6 = _closure1_slot14;
        var5 = var2.pricing_result_id_map;
        var5 = var6.bind(var4)(var5);
        var1['pricingResultIdMap'] = var5;
        var3 = _closure1_slot15;
        var2 = var2.reward_result_id_map;
        var2 = var3.bind(var4)(var2);
        var1['rewardResultIdMap'] = var2;
        return var1;
    };
    var3['transformStorefrontPricesServer'] = var8;
    var3['transformPriceSetAssignmentToStorefrontPurchaseType'] = var7;
    var7 = function isSlayerSkuAvailableOnThisPlatform(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var3 = null;
            if(!(var3 != var4)) { _fun0010_ip = 65; continue _fun0010 }
case 3:
            var5 = var4.productLine;
            var1 = _closure1_slot11;
            var1 = var1.SOCIAL_LAYER_GAME_ITEM;
            if(!(var5 === var1)) { _fun0010_ip = 65; continue _fun0010 }
case 18:
            var5 = var3 == var4;
            var6 = undefined;
            var1 = undefined;
            if(var5) { _fun0010_ip = 10; continue _fun0010 }
case 66:
            var1 = var4.flags;
case 10:
            var3 = var3 != var1;
            var5 = 0;
            if(!var3) { _fun0010_ip = 67; continue _fun0010 }
case 68:
            var5 = var1;
case 67:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var4 = var4.bind(var6)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var3) { _fun0010_ip = 27; continue _fun0010 }
case 69:
            var1 = var7[var1];
            var3 = var4.bind(var6)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var1 = !var1;
            if(var1) { _fun0010_ip = 70; continue _fun0010 }
case 71:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 9;
            var3 = var9[var3];
            var9 = var8.bind(var6)(var3);
            var8 = var9.hasFlag;
            var3 = _closure1_slot10;
            var3 = var3.AVAILABLE_ON_ANDROID;
            var1 = var8.bind(var9)(var5, var3);
case 70:
            _fun0010_ip = 72; continue _fun0010;
case 27:
            var3 = 9;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.hasFlag;
            var2 = _closure1_slot10;
            var2 = var2.AVAILABLE_ON_IOS;
            var1 = var3.bind(var4)(var5, var2);
case 72:
            return var1;
case 65:
            var1 = false;
            return var1;
        }
    };
    var3['isSlayerSkuAvailableOnThisPlatform'] = var7;
    var3['useSKUPrice'] = var6;
    var6 = function useFormattedSKUPrice(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var6 = var1.sku;
            var5 = var1.priceSetAssignmentPurchaseType;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0011_ip = 13; continue _fun0011 }
case 73:
            var1 = _closure1_slot8;
            var5 = var1.DEFAULT;
case 13:
            var2 = _closure1_slot19;
            var4 = _closure1_slot18;
            var1 = {};
            var1['sku'] = var6;
            var1['priceSetAssignmentPurchaseType'] = var5;
            var1 = var4.bind(var3)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useFormattedSKUPrice'] = var6;
    var3['useFormatSKUPrice'] = var5;
    var3['formatSKUPrice'] = var4;
    var2 = function useSKUOrbPrice(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var8 = var2.sku;
            var _closure2_slot0 = var8;
            var5 = var2.priceSetAssignmentPurchaseType;
            var7 = undefined;
            if(!(var5 === var7)) { _fun0012_ip = 20; continue _fun0012 }
case 21:
            var2 = _closure1_slot8;
            var5 = var2.DEFAULT;
case 20:
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var4 = _closure1_slot17;
            var3 = {};
            var3['sku'] = var8;
            var3['priceSetAssignmentPurchaseType'] = var5;
            var5 = true;
            var3['isOrbPrice'] = var5;
            var3 = var4.bind(var7)(var3);
            var5 = var3.userPrice;
            _closure2_slot1 = var5;
            var6 = var3.storeHasPrice;
            _closure2_slot2 = var6;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 10;
            var3 = var9[var3];
            var9 = var4.bind(var7)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var7.bind(var9)(var4, var3);
            _closure2_slot3 = var3;
            var9 = _closure1_slot3;
            var7 = var9.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isPremium;
                var2 = _closure2_slot3;
                var1 = _closure1_slot12;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var7.bind(var9)(var3, var4);
            _closure2_slot4 = var7;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.getOrbPriceFromPrices;
                    var2 = _closure2_slot0;
                    var4 = var2.prices;
                    var2 = _closure2_slot4;
                    var5 = var5.bind(var6)(var4, var2);
                    var4 = var1 != var5;
                    var2 = null;
                    if(!var4) { _fun0013_ip = 69; continue _fun0013 }
case 78:
                    var4 = {};
                    var6 = var5.amount;
                    var4['amount'] = var6;
                    var5 = var5.currency;
                    var4['currency'] = var5;
                    var2 = var4;
case 69:
                    return var2;
case 76:
                    var2 = _closure2_slot1;
                    var4 = var1 != var2;
                    var2 = null;
                    if(!var4) { _fun0013_ip = 79; continue _fun0013 }
case 80:
                    var2 = _closure2_slot1;
case 79:
                    return var2;
case 74:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useSKUOrbPrice'] = var2;
    return var1;
})();