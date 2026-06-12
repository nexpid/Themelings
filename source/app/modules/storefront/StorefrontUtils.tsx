// app/modules/storefront/StorefrontUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot6;
                var2 = var3.getPricesForSkuId;
                var4 = _closure2_slot0;
                var1 = null;
                var6 = var1 == var4;
                var4 = undefined;
                if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure2_slot0;
                var4 = var5.id;
case 2:
                var5 = var1 != var4;
                var1 = null;
                if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var4;
case 4:
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
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var4 = _closure1_slot8;
                var4 = var4.DEFAULT;
                if(!(var4 !== var5)) { _fun0002_ip = 8; continue _fun0002 }
case 3:
                var4 = _closure1_slot8;
                var4 = var4.GIFT;
                if(!(var4 !== var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 7;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var4 = var4.StorefrontPurchaseType;
                var4 = var4.SELF_PURCHASE;
                _fun0002_ip = 11; continue _fun0002;
case 9:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 7;
                var6 = var6[var5];
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var5 = var5.StorefrontPurchaseType;
                var4 = var5.GIFT;
                _fun0002_ip = 11; continue _fun0002;
case 8:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = var1.StorefrontPurchaseType;
                var4 = var1.SELF_PURCHASE;
                _fun0002_ip = 11; continue _fun0002;
case 6:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = var1.StorefrontPurchaseType;
                var4 = var1.SELF_PURCHASE;
case 11:
                var1 = _closure2_slot0;
                if(!(var3 != var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var1 = _closure2_slot3;
                if(!(var3 != var1)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                var1 = _closure2_slot3;
                var5 = var1[var4];
                if(!(var3 == var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var6 = _closure2_slot3;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var7 = var7[var1];
                var1 = undefined;
                var1 = var8.bind(var1)(var7);
                var1 = var1.StorefrontPurchaseType;
                var1 = var1.SELF_PURCHASE;
                var5 = var6[var1];
case 15:
                var1 = {};
                var7 = var3 == var5;
                var6 = undefined;
                if(var7) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var9 = var5.userPrice;
                var7 = var3 == var9;
                var6 = undefined;
                if(var7) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                var8 = var9.find;
                var7 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var2 = arg1;
                        var3 = var2.currency;
                        var2 = _closure1_slot7;
                        var2 = var2.DISCORD_ORB;
                        if(var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                        var1 = var3 !== var2;
                        _fun0003_ip = 2; continue _fun0003;
case 20:
                        var1 = var3 === var2;
case 2:
                        return var1;
                    }
                };
                var6 = var8.bind(var9)(var7);
case 17:
                var1['userPrice'] = var6;
                var1['pricesForPurchaseType'] = var5;
                var1['purchaseType'] = var4;
                var5 = true;
                var1['storeHasPrice'] = var5;
                return var1;
case 12:
                var1 = {};
                var5 = undefined;
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
    var _closure1_slot16 = var1;
    var5 = function useSKUPrice(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var13 = var2.sku;
            var _closure2_slot0 = var13;
            var12 = var2.priceSetAssignmentPurchaseType;
            var10 = undefined;
            if(!(var12 === var10)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var2 = _closure1_slot8;
            var12 = var2.DEFAULT;
case 22:
            var _closure2_slot1 = var12;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var10;
            var _closure2_slot6 = var10;
            var _closure2_slot7 = var10;
            var4 = _closure1_slot16;
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getRewardsForSkuId;
                    var1 = _closure2_slot0;
                    var2 = null;
                    var6 = var2 == var1;
                    var1 = undefined;
                    if(var6) { _fun0005_ip = 2; continue _fun0005 }
case 3:
                    var5 = _closure2_slot0;
                    var1 = var5.id;
case 2:
                    var1 = var3.bind(var4)(var1);
                    if(!(var2 == var1)) { _fun0005_ip = 24; continue _fun0005 }
case 5:
                    var1 = new Array(0);
case 24:
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
            if(var12) { _fun0004_ip = 15; continue _fun0004 }
case 25:
            var10 = var11.premiumType;
case 15:
            var2[2] = var10;
            var2[3] = var9;
            var2[4] = var8;
            var2[5] = var7;
            var2[6] = var6;
            var2[7] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var1 = _closure2_slot0;
                    var5 = var1.productLine;
                    var1 = _closure1_slot11;
                    var1 = var1.SOCIAL_LAYER_GAME_ITEM;
                    if(!(var5 !== var1)) { _fun0006_ip = 30; continue _fun0006 }
case 24:
                    var7 = _closure2_slot0;
                    var5 = var7.getPrice;
                    var1 = _closure2_slot7;
                    var8 = var2 == var1;
                    var1 = undefined;
                    if(var8) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var8 = _closure2_slot7;
                    var1 = var8.premiumType;
case 31:
                    var1 = var5.bind(var7)(var1);
                    _fun0006_ip = 33; continue _fun0006;
case 30:
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
case 33:
                    var5 = var2 != var1;
                    var4 = null;
                    if(!var5) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var7 = var1.amount;
                    var5 = 0;
                    var5 = var7 > var5;
                    var4 = null;
                    if(!var5) { _fun0006_ip = 34; continue _fun0006 }
case 36:
                    var4 = var1;
case 34:
                    var1 = {'normalPrice': null, 'discountedPrice': null, 'discountPercent': null};
                    var1['normalPrice'] = var4;
                    var1['userPrice'] = var4;
                    return var1;
case 28:
                    var5 = _closure2_slot6;
                    var4 = var5.find;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure2_slot4;
                            var1 = arg1;
                            var1 = var1[var2];
                            var2 = null;
                            var3 = var2 == var1;
                            var4 = undefined;
                            var2 = undefined;
                            if(var3) { _fun0007_ip = 21; continue _fun0007 }
case 23:
                            var2 = var1.type;
case 21:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 7;
                            var1 = var5[var1];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.StorefrontPromotionRewardType;
                            var1 = var1.DISCOUNT;
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var5 = var4.bind(var5)(var1);
                    var4 = var2 != var5;
                    var1 = null;
                    if(!var4) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var4 = _closure2_slot4;
                    var1 = var5[var4];
case 37:
                    var4 = var2 != var1;
                    var5 = null;
                    if(!var4) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var4 = _closure2_slot2;
                    var4 = var2 != var4;
                    var5 = null;
                    if(!var4) { _fun0006_ip = 39; continue _fun0006 }
case 41:
                    var5 = _closure2_slot2;
case 39:
                    var7 = var2 != var1;
                    var4 = null;
                    if(!var7) { _fun0006_ip = 42; continue _fun0006 }
case 25:
                    var8 = var1.amount;
                    var7 = 0;
                    var7 = var8 > var7;
                    var4 = null;
                    if(!var7) { _fun0006_ip = 42; continue _fun0006 }
case 18:
                    var4 = var1.amount;
case 42:
                    if(!(var2 == var1)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var7 = _closure2_slot2;
                    _fun0006_ip = 45; continue _fun0006;
case 43:
                    var1 = _closure2_slot3;
                    var8 = var2 == var1;
                    var10 = undefined;
                    var1 = undefined;
                    if(var8) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var8 = _closure2_slot3;
                    var11 = var8.prices;
                    var9 = _closure1_slot9;
                    var9 = var9.BASE;
                    var9 = var11[var9];
                    var11 = var2 == var9;
                    var1 = undefined;
                    if(var11) { _fun0006_ip = 46; continue _fun0006 }
case 48:
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
                    if(var8) { _fun0006_ip = 46; continue _fun0006 }
case 49:
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
case 46:
                    var7 = var1;
case 45:
                    var1 = {};
                    var8 = var2 != var7;
                    var6 = null;
                    if(!var8) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var9 = var7.amount;
                    var8 = 0;
                    var8 = var9 > var8;
                    var6 = null;
                    if(!var8) { _fun0006_ip = 50; continue _fun0006 }
case 52:
                    var6 = var7;
case 50:
                    var1['normalPrice'] = var6;
                    var1['discountedPrice'] = var5;
                    var1['discountPercent'] = var4;
                    var4 = _closure2_slot2;
                    var4 = var2 != var4;
                    var2 = null;
                    if(!var4) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var2 = _closure2_slot2;
case 53:
                    var1['userPrice'] = var2;
                    return var1;
case 26:
                    var1 = {'normalPrice': null, 'discountedPrice': null, 'discountPercent': null, 'userPrice': null};
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var4 = function formatSKUPrice(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var7 = var1.normalPrice;
            var6 = var1.discountedPrice;
            var4 = var1.discountPercent;
            var3 = var1.userPrice;
            var1 = {};
            var5 = null;
            var8 = var5 != var7;
            var2 = null;
            if(!var8) { _fun0008_ip = 55; continue _fun0008 }
case 22:
            var9 = var7.amount;
            var8 = 0;
            var8 = var9 > var8;
            var2 = null;
            if(!var8) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 12;
            var9 = var9[var8];
            var8 = undefined;
            var10 = var10.bind(var8)(var9);
            var9 = var10.formatPrice;
            var8 = var7.amount;
            var7 = var7.currency;
            var2 = var9.bind(var10)(var8, var7);
case 55:
            var1['normalPrice'] = var2;
            var7 = var5 != var6;
            var2 = null;
            if(!var7) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var8 = var6.amount;
            var7 = 0;
            var7 = var8 > var7;
            var2 = null;
            if(!var7) { _fun0008_ip = 57; continue _fun0008 }
case 33:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 12;
            var8 = var8[var7];
            var7 = undefined;
            var9 = var9.bind(var7)(var8);
            var8 = var9.formatPrice;
            var7 = var6.amount;
            var6 = var6.currency;
            var2 = var8.bind(var9)(var7, var6);
case 57:
            var1['discountedPrice'] = var2;
            var6 = var5 != var4;
            var2 = null;
            if(!var6) { _fun0008_ip = 59; continue _fun0008 }
case 60:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 12;
            var7 = var7[var6];
            var6 = undefined;
            var8 = var8.bind(var6)(var7);
            var7 = var8.formatPercent;
            var6 = -var4;
            var4 = 100;
            var6 = var6 / var4;
            var4 = arg2;
            var2 = var7.bind(var8)(var4, var6);
case 59:
            var1['discountPercent'] = var2;
            var4 = var5 != var3;
            var2 = null;
            if(!var4) { _fun0008_ip = 61; continue _fun0008 }
case 62:
            var6 = var3.amount;
            var4 = 0;
            var4 = var6 > var4;
            var2 = null;
            if(!var4) { _fun0008_ip = 61; continue _fun0008 }
case 63:
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
case 61:
            var1['userPrice'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var10 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.CurrencyCodes;
    var _closure1_slot7 = var9;
    var9 = var6.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot8 = var9;
    var9 = var6.PriceTypes;
    var _closure1_slot9 = var9;
    var9 = var6.SKUFlags;
    var _closure1_slot10 = var9;
    var6 = var6.SKUProductLines;
    var _closure1_slot11 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.PremiumTypes;
    var _closure1_slot12 = var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/storefront/StorefrontUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function transformStorefrontPricesServer(arg1) {
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
    var3['transformStorefrontPricesServer'] = var6;
    var6 = function isSlayerSkuAvailableOnThisPlatform(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var3 = null;
            if(!(var3 != var4)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var5 = var4.productLine;
            var1 = _closure1_slot11;
            var1 = var1.SOCIAL_LAYER_GAME_ITEM;
            if(!(var5 === var1)) { _fun0009_ip = 64; continue _fun0009 }
case 20:
            var5 = var3 == var4;
            var6 = undefined;
            var1 = undefined;
            if(var5) { _fun0009_ip = 4; continue _fun0009 }
case 66:
            var1 = var4.flags;
case 4:
            var3 = var3 != var1;
            var5 = 0;
            if(!var3) { _fun0009_ip = 67; continue _fun0009 }
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
            if(var3) { _fun0009_ip = 69; continue _fun0009 }
case 70:
            var1 = var7[var1];
            var3 = var4.bind(var6)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var1 = !var1;
            if(var1) { _fun0009_ip = 71; continue _fun0009 }
case 72:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 9;
            var3 = var9[var3];
            var9 = var8.bind(var6)(var3);
            var8 = var9.hasFlag;
            var3 = _closure1_slot10;
            var3 = var3.AVAILABLE_ON_ANDROID;
            var1 = var8.bind(var9)(var5, var3);
case 71:
            _fun0009_ip = 73; continue _fun0009;
case 69:
            var3 = 9;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.hasFlag;
            var2 = _closure1_slot10;
            var2 = var2.AVAILABLE_ON_IOS;
            var1 = var3.bind(var4)(var5, var2);
case 73:
            return var1;
case 64:
            var1 = false;
            return var1;
        }
    };
    var3['isSlayerSkuAvailableOnThisPlatform'] = var6;
    var3['useSKUPrice'] = var5;
    var5 = function useFormattedSKUPrice(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var7 = var2.sku;
            var6 = var2.priceSetAssignmentPurchaseType;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0010_ip = 74; continue _fun0010 }
case 75:
            var2 = _closure1_slot8;
            var6 = var2.DEFAULT;
case 74:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var4 = _closure1_slot17;
            var3 = {};
            var3['sku'] = var7;
            var3['priceSetAssignmentPurchaseType'] = var6;
            var6 = var4.bind(var5)(var3);
            _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 10;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
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
            _closure2_slot1 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                var4 = _closure1_slot18;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useFormattedSKUPrice'] = var5;
    var3['formatSKUPrice'] = var4;
    var2 = function useSKUOrbPrice(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var8 = var2.sku;
            var _closure2_slot0 = var8;
            var5 = var2.priceSetAssignmentPurchaseType;
            var7 = undefined;
            if(!(var5 === var7)) { _fun0011_ip = 22; continue _fun0011 }
case 23:
            var2 = _closure1_slot8;
            var5 = var2.DEFAULT;
case 22:
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var4 = _closure1_slot16;
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
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0012_ip = 76; continue _fun0012 }
case 77:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0012_ip = 78; continue _fun0012 }
case 79:
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
                    if(!var4) { _fun0012_ip = 70; continue _fun0012 }
case 80:
                    var4 = {};
                    var6 = var5.amount;
                    var4['amount'] = var6;
                    var5 = var5.currency;
                    var4['currency'] = var5;
                    var2 = var4;
case 70:
                    return var2;
case 78:
                    var2 = _closure2_slot1;
                    var4 = var1 != var2;
                    var2 = null;
                    if(!var4) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                    var2 = _closure2_slot1;
case 81:
                    return var2;
case 76:
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