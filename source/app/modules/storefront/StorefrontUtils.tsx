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
    var4 = 12;
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
            var8 = var2.sku;
            var _closure2_slot0 = var8;
            var13 = var2.priceSetAssignmentPurchaseType;
            var11 = undefined;
            if(!(var13 === var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot8;
            var13 = var2.DEFAULT;
case 2:
            var _closure2_slot1 = var13;
            var _closure2_slot2 = var11;
            var _closure2_slot3 = var11;
            var _closure2_slot4 = var11;
            var _closure2_slot5 = var11;
            var _closure2_slot6 = var11;
            var _closure2_slot7 = var11;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var7 = var3.bind(var11)(var2);
            var6 = var7.useIsEligibleForWishlistShowPrices;
            var2 = 'useSKUPrice';
            var9 = var6.bind(var7)(var2);
            _closure2_slot2 = var9;
            var2 = 8;
            var6 = var4[var2];
            var14 = var3.bind(var11)(var6);
            var12 = var14.useStateFromStores;
            var6 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var6;
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
            var10 = var12.bind(var14)(var10, var7);
            _closure2_slot3 = var10;
            var7 = var4[var2];
            var14 = var3.bind(var11)(var7);
            var12 = var14.useStateFromStoresArray;
            var7 = new Array(1);
            var7[0] = var6;
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
            var7 = var12.bind(var14)(var7, var6);
            _closure2_slot4 = var7;
            var6 = var4[var2];
            var15 = var3.bind(var11)(var6);
            var14 = var15.useStateFromStores;
            var6 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var14.bind(var15)(var12, var6);
            _closure2_slot5 = var12;
            var2 = var4[var2];
            var6 = var3.bind(var11)(var2);
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
            _closure2_slot6 = var2;
            var6 = _closure1_slot3;
            var4 = var6.useMemo;
            var3 = new Array(6);
            var3[0] = var8;
            var3[1] = var13;
            var13 = null;
            var13 = var13 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = var12.premiumType;
case 8:
            var3[2] = var11;
            var3[3] = var10;
            var3[4] = var7;
            var3[5] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = _closure2_slot3;
                    if(!(var6 != var2)) { _fun0004_ip = 12; continue _fun0004 }
case 3:
                    var5 = _closure2_slot1;
                    if(!(var6 != var5)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var4 = _closure1_slot8;
                    var4 = var4.DEFAULT;
                    if(!(var4 !== var5)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var4 = _closure1_slot8;
                    var4 = var4.GIFT;
                    if(!(var4 !== var5)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 6;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var7.bind(var4)(var5);
                    var4 = var4.StorefrontPurchaseType;
                    var5 = var4.SELF_PURCHASE;
                    _fun0004_ip = 19; continue _fun0004;
case 17:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var7 = var7[var4];
                    var4 = undefined;
                    var4 = var8.bind(var4)(var7);
                    var4 = var4.StorefrontPurchaseType;
                    var5 = var4.GIFT;
                    _fun0004_ip = 19; continue _fun0004;
case 15:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var4);
                    var2 = var2.StorefrontPurchaseType;
                    var5 = var2.SELF_PURCHASE;
                    _fun0004_ip = 19; continue _fun0004;
case 13:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var4);
                    var2 = var2.StorefrontPurchaseType;
                    var5 = var2.SELF_PURCHASE;
case 19:
                    var _closure3_slot0 = var5;
                    var2 = _closure2_slot3;
                    var9 = var2[var5];
                    if(!(var6 == var9)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var4 = _closure2_slot3;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var8.bind(var2)(var7);
                    var2 = var2.StorefrontPurchaseType;
                    var2 = var2.SELF_PURCHASE;
                    var9 = var4[var2];
case 20:
                    var2 = var6 == var9;
                    var8 = undefined;
                    var7 = undefined;
                    if(var2) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var10 = var9.userPrice;
                    var2 = var6 == var10;
                    var7 = undefined;
                    if(var2) { _fun0004_ip = 22; continue _fun0004 }
case 24:
                    var4 = var10.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.currency;
                        var1 = _closure1_slot7;
                        var1 = var1.DISCORD_ORB;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var7 = var4.bind(var10)(var2);
case 22:
                    var10 = _closure2_slot4;
                    var4 = var10.find;
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var1 = arg1;
                            var1 = var1[var2];
                            var2 = null;
                            var3 = var2 == var1;
                            var4 = undefined;
                            var2 = undefined;
                            if(var3) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                            var2 = var1.type;
case 25:
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
                    var4 = var4.bind(var10)(var2);
                    var10 = var6 != var4;
                    var2 = null;
                    if(!var10) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var2 = var4[var5];
case 27:
                    var4 = var6 != var2;
                    var5 = null;
                    if(!var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var5 = var7;
case 29:
                    var10 = var6 != var2;
                    var4 = null;
                    if(!var10) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var11 = var2.amount;
                    var10 = 0;
                    var10 = var11 > var10;
                    var4 = null;
                    if(!var10) { _fun0004_ip = 31; continue _fun0004 }
case 33:
                    var4 = var2.amount;
case 31:
                    if(!(var6 != var2)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var10 = var6 == var9;
                    var2 = undefined;
                    if(var10) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var11 = var9.prices;
                    var10 = _closure1_slot9;
                    var10 = var10.BASE;
                    var10 = var11[var10];
                    var11 = var6 == var10;
                    var2 = undefined;
                    if(var11) { _fun0004_ip = 36; continue _fun0004 }
case 38:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 6;
                    var9 = var12[var9];
                    var9 = var11.bind(var8)(var9);
                    var9 = var9.StorefrontPriceVariant;
                    var9 = var9.NORMAL;
                    var10 = var10[var9];
                    var9 = var6 == var10;
                    var2 = undefined;
                    if(var9) { _fun0004_ip = 36; continue _fun0004 }
case 39:
                    var9 = var10.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.currency;
                        var1 = _closure1_slot7;
                        var1 = var1.DISCORD_ORB;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var2 = var9.bind(var10)(var3);
case 36:
                    var7 = var2;
case 34:
                    var2 = {};
                    var9 = var6 != var7;
                    var3 = null;
                    if(!var9) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var10 = var7.amount;
                    var9 = 0;
                    var9 = var10 > var9;
                    var3 = null;
                    if(!var9) { _fun0004_ip = 40; continue _fun0004 }
case 42:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 10;
                    var9 = var11[var9];
                    var11 = var10.bind(var8)(var9);
                    var10 = var11.formatPrice;
                    var9 = var7.amount;
                    var7 = var7.currency;
                    var3 = var10.bind(var11)(var9, var7);
case 40:
                    var2['normalPrice'] = var3;
                    var7 = var6 != var5;
                    var3 = null;
                    if(!var7) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 10;
                    var7 = var10[var7];
                    var10 = var9.bind(var8)(var7);
                    var9 = var10.formatPrice;
                    var7 = var5.amount;
                    var5 = var5.currency;
                    var3 = var9.bind(var10)(var7, var5);
case 43:
                    var2['discountedPrice'] = var3;
                    var5 = var6 != var4;
                    var3 = null;
                    if(!var5) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 10;
                    var5 = var9[var5];
                    var8 = var7.bind(var8)(var5);
                    var7 = var8.formatPercent;
                    var5 = _closure2_slot6;
                    var9 = -var4;
                    var4 = 100;
                    var4 = var9 / var4;
                    var3 = var7.bind(var8)(var5, var4);
case 45:
                    var2['discountPercent'] = var3;
                    return var2;
case 12:
                    var2 = _closure2_slot0;
                    var3 = var2.productLine;
                    var2 = _closure1_slot10;
                    var2 = var2.SOCIAL_LAYER_GAME_ITEM;
                    if(!(var3 !== var2)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var5 = _closure2_slot0;
                    var3 = var5.getPrice;
                    var2 = _closure2_slot5;
                    var7 = var6 == var2;
                    var2 = undefined;
                    if(var7) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                    var7 = _closure2_slot5;
                    var2 = var7.premiumType;
case 49:
                    var3 = var3.bind(var5)(var2);
                    _fun0004_ip = 51; continue _fun0004;
case 47:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var5 = var5[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var5);
                    var5 = var7.getPrice;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var3 = var5.bind(var7)(var2, var1);
case 51:
                    var1 = {'normalPrice': null, 'discountedPrice': null, 'discountPercent': null};
                    var5 = var6 != var3;
                    var2 = null;
                    if(!var5) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var7 = var3.amount;
                    var5 = 0;
                    var5 = var7 > var5;
                    var2 = null;
                    if(!var5) { _fun0004_ip = 52; continue _fun0004 }
case 54:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 10;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.formatPrice;
                    var4 = var3.amount;
                    var3 = var3.currency;
                    var2 = var5.bind(var6)(var4, var3);
case 52:
                    var1['normalPrice'] = var2;
                    return var1;
case 10:
                    var1 = {'normalPrice': null, 'discountedPrice': null, 'discountPercent': null};
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2, var3);
            var4 = var2.normalPrice;
            _closure2_slot7 = var4;
            var3 = var2.discountedPrice;
            var2 = var2.discountPercent;
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var8;
            var5[2] = var4;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var1 = var2 != var3;
case 55:
                    if(!var1) { _fun0006_ip = 4; continue _fun0006 }
case 57:
                    var3 = _closure2_slot7;
                    var2 = null;
                    var1 = var2 == var3;
case 4:
                    if(!var1) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
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
case 58:
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
    var3['useSKUPrice'] = var2;
    return var1;
})();