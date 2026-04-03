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
    var _closure1_slot11 = var1;
    var1 = function transformStorefrontPricesResultMapServer(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.mapValues;
        var2 = arg1;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.mapValues;
            var2 = arg1;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = _closure1_slot11;
                var4 = var2.user_price;
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var1['userPrice'] = var4;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.mapValues;
                var3 = var2.prices;
                var2 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.mapValues;
                    var2 = arg1;
                    var1 = function(arg1) {
                        var3 = _closure1_slot11;
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
    var _closure1_slot12 = var1;
    var1 = function transformStorefrontRewardsResultMapServer(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.mapValues;
        var2 = arg1;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
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
    var _closure1_slot13 = var1;
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
    var4 = 10;
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
        var4 = 5;
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
        var6 = _closure1_slot12;
        var5 = var2.pricing_result_id_map;
        var5 = var6.bind(var4)(var5);
        var1['pricingResultIdMap'] = var5;
        var3 = _closure1_slot13;
        var2 = var2.reward_result_id_map;
        var2 = var3.bind(var4)(var2);
        var1['rewardResultIdMap'] = var2;
        return var1;
    };
    var3['transformStorefrontPricesServer'] = var4;
    var2 = function useSKUPrice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.sku;
            var _closure2_slot0 = var11;
            var10 = var2.priceSetAssignmentPurchaseType;
            var8 = undefined;
            if(!(var10 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot8;
            var10 = var2.DEFAULT;
case 2:
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var8;
            var _closure2_slot5 = var8;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var6 = var5[var3];
            var13 = var4.bind(var8)(var6);
            var12 = var13.useStateFromStores;
            var6 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var6;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getPricesForSkuId;
                    var4 = _closure2_slot0;
                    var1 = null;
                    var6 = var1 == var4;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = _closure2_slot0;
                    var4 = var5.id;
case 2:
                    var5 = var1 != var4;
                    var1 = null;
                    if(!var5) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var1 = var4;
case 5:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var12.bind(var13)(var9, var7);
            _closure2_slot2 = var7;
            var9 = var5[var3];
            var13 = var4.bind(var8)(var9);
            var12 = var13.useStateFromStoresArray;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getRewardsForSkuId;
                    var1 = _closure2_slot0;
                    var2 = null;
                    var6 = var2 == var1;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 2; continue _fun0003 }
case 4:
                    var5 = _closure2_slot0;
                    var1 = var5.id;
case 2:
                    var1 = var3.bind(var4)(var1);
                    if(!(var2 == var1)) { _fun0003_ip = 7; continue _fun0003 }
case 6:
                    var1 = new Array(0);
case 7:
                    return var1;
                }
            };
            var6 = var12.bind(var13)(var9, var6);
            _closure2_slot3 = var6;
            var9 = var5[var3];
            var14 = var4.bind(var8)(var9);
            var13 = var14.useStateFromStores;
            var9 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var9;
            var9 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var13.bind(var14)(var12, var9);
            _closure2_slot4 = var9;
            var3 = var5[var3];
            var12 = var4.bind(var8)(var3);
            var5 = var12.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.locale;
                return var1;
            };
            var5 = var5.bind(var12)(var4, var3);
            _closure2_slot5 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var11;
            var2[1] = var10;
            var10 = null;
            var10 = var10 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var9.premiumType;
case 8:
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var6;
            var2[5] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var3 = _closure2_slot2;
                    if(!(var2 != var3)) { _fun0004_ip = 12; continue _fun0004 }
case 3:
                    var6 = _closure2_slot1;
                    if(!(var2 != var6)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var5 = _closure1_slot8;
                    var5 = var5.DEFAULT;
                    if(!(var5 !== var6)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var5 = _closure1_slot8;
                    var5 = var5.GIFT;
                    if(!(var5 !== var6)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 6;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.StorefrontPurchaseType;
                    var6 = var5.SELF_PURCHASE;
                    _fun0004_ip = 19; continue _fun0004;
case 17:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 6;
                    var7 = var7[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7);
                    var5 = var5.StorefrontPurchaseType;
                    var6 = var5.GIFT;
                    _fun0004_ip = 19; continue _fun0004;
case 15:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var5);
                    var3 = var3.StorefrontPurchaseType;
                    var6 = var3.SELF_PURCHASE;
                    _fun0004_ip = 19; continue _fun0004;
case 13:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var5);
                    var3 = var3.StorefrontPurchaseType;
                    var6 = var3.SELF_PURCHASE;
case 19:
                    var _closure3_slot0 = var6;
                    var3 = _closure2_slot2;
                    var9 = var3[var6];
                    if(!(var2 == var9)) { _fun0004_ip = 9; continue _fun0004 }
case 20:
                    var5 = _closure2_slot2;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var7 = var7[var3];
                    var3 = undefined;
                    var3 = var8.bind(var3)(var7);
                    var3 = var3.StorefrontPurchaseType;
                    var3 = var3.SELF_PURCHASE;
                    var9 = var5[var3];
case 9:
                    var3 = var2 == var9;
                    var8 = undefined;
                    var7 = undefined;
                    if(var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var10 = var9.userPrice;
                    var3 = var2 == var10;
                    var7 = undefined;
                    if(var3) { _fun0004_ip = 21; continue _fun0004 }
case 23:
                    var5 = var10.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.currency;
                        var1 = _closure1_slot7;
                        var1 = var1.DISCORD_ORB;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var7 = var5.bind(var10)(var3);
case 21:
                    var10 = _closure2_slot3;
                    var5 = var10.find;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var1 = arg1;
                            var1 = var1[var2];
                            var2 = null;
                            var3 = var2 == var1;
                            var4 = undefined;
                            var2 = undefined;
                            if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                            var2 = var1.type;
case 24:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 6;
                            var1 = var5[var1];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.StorefrontPromotionRewardType;
                            var1 = var1.DISCOUNT;
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var5 = var5.bind(var10)(var3);
                    var10 = var2 != var5;
                    var3 = null;
                    if(!var10) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var3 = var5[var6];
case 26:
                    var5 = var2 != var3;
                    var6 = null;
                    if(!var5) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var6 = var7;
case 28:
                    var10 = var2 != var3;
                    var5 = null;
                    if(!var10) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var11 = var3.amount;
                    var10 = 0;
                    var10 = var11 > var10;
                    var5 = null;
                    if(!var10) { _fun0004_ip = 30; continue _fun0004 }
case 32:
                    var5 = var3.amount;
case 30:
                    if(!(var2 != var3)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var10 = var2 == var9;
                    var3 = undefined;
                    if(var10) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var11 = var9.prices;
                    var10 = _closure1_slot9;
                    var10 = var10.BASE;
                    var10 = var11[var10];
                    var11 = var2 == var10;
                    var3 = undefined;
                    if(var11) { _fun0004_ip = 35; continue _fun0004 }
case 37:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 6;
                    var9 = var12[var9];
                    var9 = var11.bind(var8)(var9);
                    var9 = var9.StorefrontPriceVariant;
                    var9 = var9.NORMAL;
                    var10 = var10[var9];
                    var9 = var2 == var10;
                    var3 = undefined;
                    if(var9) { _fun0004_ip = 35; continue _fun0004 }
case 38:
                    var9 = var10.find;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.currency;
                        var1 = _closure1_slot7;
                        var1 = var1.DISCORD_ORB;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var3 = var9.bind(var10)(var4);
case 35:
                    var7 = var3;
case 33:
                    var3 = {};
                    var9 = var2 != var7;
                    var4 = '';
                    if(!var9) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 9;
                    var9 = var11[var9];
                    var11 = var10.bind(var8)(var9);
                    var10 = var11.formatPrice;
                    var9 = var7.amount;
                    var7 = var7.currency;
                    var4 = var10.bind(var11)(var9, var7);
case 39:
                    var3['normalPrice'] = var4;
                    var7 = var2 != var6;
                    var4 = null;
                    if(!var7) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 9;
                    var7 = var10[var7];
                    var10 = var9.bind(var8)(var7);
                    var9 = var10.formatPrice;
                    var7 = var6.amount;
                    var6 = var6.currency;
                    var4 = var9.bind(var10)(var7, var6);
case 41:
                    var3['discountedPrice'] = var4;
                    var6 = var2 != var5;
                    var4 = null;
                    if(!var6) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 9;
                    var6 = var9[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.formatPercent;
                    var6 = _closure2_slot5;
                    var9 = -var5;
                    var5 = 100;
                    var5 = var9 / var5;
                    var4 = var7.bind(var8)(var6, var5);
case 43:
                    var3['discountPercent'] = var4;
                    return var3;
case 12:
                    var3 = _closure2_slot0;
                    var5 = var3.productLine;
                    var3 = _closure1_slot10;
                    var3 = var3.SOCIAL_LAYER_GAME_ITEM;
                    if(!(var5 !== var3)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var6 = _closure2_slot0;
                    var5 = var6.getPrice;
                    var3 = _closure2_slot4;
                    var7 = var2 == var3;
                    var3 = undefined;
                    if(var7) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var7 = _closure2_slot4;
                    var3 = var7.premiumType;
case 47:
                    var3 = var5.bind(var6)(var3);
                    _fun0004_ip = 49; continue _fun0004;
case 45:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 8;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.getPrice;
                    var5 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var3 = var6.bind(var7)(var5, var1);
case 49:
                    var1 = {'normalPrice': null, 'discountedPrice': null, 'discountPercent': null};
                    var5 = var2 != var3;
                    var2 = '';
                    if(!var5) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 9;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.formatPrice;
                    var4 = var3.amount;
                    var3 = var3.currency;
                    var2 = var5.bind(var6)(var4, var3);
case 50:
                    var1['normalPrice'] = var2;
                    return var1;
case 10:
                    var1 = {'normalPrice': '', 'discountedPrice': null, 'discountPercent': null};
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var1, var2);
            var1 = {};
            var3 = var2.normalPrice;
            var1['normalPrice'] = var3;
            var3 = var2.discountedPrice;
            var1['discountedPrice'] = var3;
            var2 = var2.discountPercent;
            var1['discountPercent'] = var2;
            return var1;
        }
    };
    var3['useSKUPrice'] = var2;
    return var1;
})();