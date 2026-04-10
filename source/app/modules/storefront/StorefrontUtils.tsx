// app/modules/storefront/StorefrontUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot12 = var1;
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
                var6 = _closure1_slot12;
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
                        var3 = _closure1_slot12;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
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
        var3 = 8;
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
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.CurrencyCodes;
    var _closure1_slot7 = var7;
    var7 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot8 = var7;
    var7 = var4.PriceTypes;
    var _closure1_slot9 = var7;
    var4 = var4.SKUProductLines;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/storefront/StorefrontUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function transformStorefrontPricesServer(arg1) {
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
        var6 = _closure1_slot13;
        var5 = var2.pricing_result_id_map;
        var5 = var6.bind(var4)(var5);
        var1['pricingResultIdMap'] = var5;
        var3 = _closure1_slot14;
        var2 = var2.reward_result_id_map;
        var2 = var3.bind(var4)(var2);
        var1['rewardResultIdMap'] = var2;
        return var1;
    };
    var3['transformStorefrontPricesServer'] = var4;
    var4 = function useSKUPrice(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var8 = var2.sku;
            var _closure2_slot0 = var8;
            var16 = var2.priceSetAssignmentPurchaseType;
            var14 = undefined;
            if(!(var16 === var14)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var2 = _closure1_slot8;
            var16 = var2.DEFAULT;
case 22:
            var _closure2_slot1 = var16;
            var _closure2_slot2 = var14;
            var _closure2_slot3 = var14;
            var _closure2_slot4 = var14;
            var _closure2_slot5 = var14;
            var _closure2_slot6 = var14;
            var _closure2_slot7 = var14;
            var _closure2_slot8 = var14;
            var _closure2_slot9 = var14;
            var _closure2_slot10 = var14;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var7 = var3.bind(var14)(var2);
            var6 = var7.useIsEligibleForWishlistShowPrices;
            var2 = 'useSKUPrice';
            var9 = var6.bind(var7)(var2);
            _closure2_slot2 = var9;
            var6 = _closure1_slot15;
            var2 = {};
            var2['sku'] = var8;
            var2['priceSetAssignmentPurchaseType'] = var16;
            var7 = false;
            var2['isOrbPrice'] = var7;
            var2 = var6.bind(var14)(var2);
            var12 = var2.userPrice;
            _closure2_slot3 = var12;
            var11 = var2.pricesForPurchaseType;
            _closure2_slot4 = var11;
            var10 = var2.purchaseType;
            _closure2_slot5 = var10;
            var13 = var2.storeHasPrice;
            _closure2_slot6 = var13;
            var2 = 8;
            var6 = var4[var2];
            var17 = var3.bind(var14)(var6);
            var15 = var17.useStateFromStoresArray;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
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
            var7 = var15.bind(var17)(var7, var6);
            _closure2_slot7 = var7;
            var6 = var4[var2];
            var18 = var3.bind(var14)(var6);
            var17 = var18.useStateFromStores;
            var6 = _closure1_slot5;
            var15 = new Array(1);
            var15[0] = var6;
            var6 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var17.bind(var18)(var15, var6);
            _closure2_slot8 = var15;
            var2 = var4[var2];
            var6 = var3.bind(var14)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.locale;
                return var1;
            };
            var2 = var4.bind(var6)(var3, var2);
            _closure2_slot9 = var2;
            var6 = _closure1_slot3;
            var4 = var6.useMemo;
            var3 = new Array(9);
            var3[0] = var8;
            var3[1] = var16;
            var16 = null;
            var16 = var16 == var15;
            var14 = undefined;
            if(var16) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var14 = var15.premiumType;
case 25:
            var3[2] = var14;
            var3[3] = var13;
            var3[4] = var12;
            var3[5] = var11;
            var3[6] = var10;
            var3[7] = var7;
            var3[8] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var1 = _closure2_slot0;
                    var3 = var1.productLine;
                    var1 = _closure1_slot10;
                    var1 = var1.SOCIAL_LAYER_GAME_ITEM;
                    if(!(var3 !== var1)) { _fun0006_ip = 31; continue _fun0006 }
case 24:
                    var6 = _closure2_slot0;
                    var3 = var6.getPrice;
                    var1 = _closure2_slot8;
                    var8 = var2 == var1;
                    var1 = undefined;
                    if(var8) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    var8 = _closure2_slot8;
                    var1 = var8.premiumType;
case 32:
                    var6 = var3.bind(var6)(var1);
                    _fun0006_ip = 34; continue _fun0006;
case 31:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var9 = var8.bind(var1)(var3);
                    var8 = var9.getPrice;
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var6 = var8.bind(var9)(var3, var1);
case 34:
                    var1 = {'normalPrice': null, 'discountedPrice': null, 'discountPercent': null};
                    var8 = var2 != var6;
                    var3 = null;
                    if(!var8) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var9 = var6.amount;
                    var8 = 0;
                    var8 = var9 > var8;
                    var3 = null;
                    if(!var8) { _fun0006_ip = 35; continue _fun0006 }
case 37:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 11;
                    var8 = var8[var7];
                    var7 = undefined;
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.formatPrice;
                    var7 = var6.amount;
                    var6 = var6.currency;
                    var3 = var8.bind(var9)(var7, var6);
case 35:
                    var1['normalPrice'] = var3;
                    return var1;
case 29:
                    var6 = _closure2_slot7;
                    var3 = var6.find;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure2_slot5;
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
                    var6 = var3.bind(var6)(var1);
                    var3 = var2 != var6;
                    var1 = null;
                    if(!var3) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var3 = _closure2_slot5;
                    var1 = var6[var3];
case 38:
                    var3 = var2 != var1;
                    var6 = null;
                    if(!var3) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var6 = _closure2_slot3;
case 40:
                    var7 = var2 != var1;
                    var3 = null;
                    if(!var7) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var8 = var1.amount;
                    var7 = 0;
                    var7 = var8 > var7;
                    var3 = null;
                    if(!var7) { _fun0006_ip = 42; continue _fun0006 }
case 44:
                    var3 = var1.amount;
case 42:
                    if(!(var2 == var1)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var7 = _closure2_slot3;
                    _fun0006_ip = 47; continue _fun0006;
case 45:
                    var1 = _closure2_slot4;
                    var8 = var2 == var1;
                    var10 = undefined;
                    var1 = undefined;
                    if(var8) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var8 = _closure2_slot4;
                    var11 = var8.prices;
                    var9 = _closure1_slot9;
                    var9 = var9.BASE;
                    var9 = var11[var9];
                    var11 = var2 == var9;
                    var1 = undefined;
                    if(var11) { _fun0006_ip = 48; continue _fun0006 }
case 50:
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
                    if(var8) { _fun0006_ip = 48; continue _fun0006 }
case 51:
                    var8 = var9.find;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.currency;
                        var1 = _closure1_slot7;
                        var1 = var1.DISCORD_ORB;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var1 = var8.bind(var9)(var5);
case 48:
                    var7 = var1;
case 47:
                    var1 = {};
                    var8 = var2 != var7;
                    var5 = null;
                    if(!var8) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var9 = var7.amount;
                    var8 = 0;
                    var8 = var9 > var8;
                    var5 = null;
                    if(!var8) { _fun0006_ip = 52; continue _fun0006 }
case 54:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 11;
                    var9 = var9[var8];
                    var8 = undefined;
                    var10 = var10.bind(var8)(var9);
                    var9 = var10.formatPrice;
                    var8 = var7.amount;
                    var7 = var7.currency;
                    var5 = var9.bind(var10)(var8, var7);
case 52:
                    var1['normalPrice'] = var5;
                    var7 = var2 != var6;
                    var5 = null;
                    if(!var7) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 11;
                    var8 = var8[var7];
                    var7 = undefined;
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.formatPrice;
                    var7 = var6.amount;
                    var6 = var6.currency;
                    var5 = var8.bind(var9)(var7, var6);
case 55:
                    var1['discountedPrice'] = var5;
                    var5 = var2 != var3;
                    var2 = null;
                    if(!var5) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 11;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.formatPercent;
                    var4 = _closure2_slot9;
                    var7 = -var3;
                    var3 = 100;
                    var3 = var7 / var3;
                    var2 = var5.bind(var6)(var4, var3);
case 57:
                    var1['discountPercent'] = var2;
                    return var1;
case 27:
                    var1 = {'normalPrice': null, 'discountedPrice': null, 'discountPercent': null};
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2, var3);
            var4 = var2.normalPrice;
            _closure2_slot10 = var4;
            var3 = var2.discountedPrice;
            var2 = var2.discountPercent;
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var8;
            var5[2] = var4;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var1 = var2 != var3;
case 59:
                    if(!var1) { _fun0008_ip = 3; continue _fun0008 }
case 61:
                    var3 = _closure2_slot10;
                    var2 = null;
                    var1 = var2 == var3;
case 3:
                    if(!var1) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.captureException;
                    var1 = global;
                    var5 = var1.Error;
                    var1 = var5.prototype;
                    var2 = Object.create(var1, {constructor: {value: var5}});
                    var8 = 'SKU price not found for item.';
                    var9 = var2;
                    var1 = new var9[var5](var8, var7);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = {};
                    var5 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var5['skuId'] = var6;
                    var1['extra'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['normalPrice'] = var4;
            var1['discountedPrice'] = var3;
            var1['discountPercent'] = var2;
            return var1;
        }
    };
    var3['useSKUPrice'] = var4;
    var2 = function useSKUOrbPrice(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var8 = var2.sku;
            var _closure2_slot0 = var8;
            var5 = var2.priceSetAssignmentPurchaseType;
            var7 = undefined;
            if(!(var5 === var7)) { _fun0009_ip = 22; continue _fun0009 }
case 23:
            var2 = _closure1_slot8;
            var5 = var2.DEFAULT;
case 22:
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var4 = _closure1_slot15;
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
            var3 = 8;
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
                var1 = _closure1_slot11;
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
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0010_ip = 66; continue _fun0010 }
case 59:
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
                    if(!var4) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                    var4 = {};
                    var6 = var5.amount;
                    var4['amount'] = var6;
                    var5 = var5.currency;
                    var4['currency'] = var5;
                    var2 = var4;
case 67:
                    return var2;
case 66:
                    var2 = _closure2_slot1;
                    var4 = var1 != var2;
                    var2 = null;
                    if(!var4) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                    var2 = _closure2_slot1;
case 69:
                    return var2;
case 64:
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