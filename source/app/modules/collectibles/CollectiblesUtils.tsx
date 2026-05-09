// app/modules/collectibles/CollectiblesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var24 = require;
    var3 = exports;
    var25 = dependencyMap;
    var _closure1_slot0 = var24;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var25;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var25[var1];
    var1 = undefined;
    var4 = var24.bind(var1)(var4);
    var4 = var4.isAvatarDecorationRecord;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var25[var4];
    var4 = var24.bind(var1)(var4);
    var4 = var4.isNameplateRecord;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var25[var4];
    var4 = var24.bind(var1)(var4);
    var4 = var4.isProfileEffectRecord;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var25[var4];
    var4 = var24.bind(var1)(var4);
    var4 = var4.isProfileFrameRecord;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var25[var4];
    var4 = var24.bind(var1)(var4);
    var4 = var4.AssetDisplayConfigRecord;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var25[var4];
    var4 = var24.bind(var1)(var4);
    var5 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot8 = var5;
    var5 = var4.LIMITED_TIME_BADGE_DAYS_THRESHOLD;
    var _closure1_slot9 = var5;
    var4 = var4.SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var25[var4];
    var4 = var24.bind(var1)(var4);
    var5 = var4.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot11 = var5;
    var5 = var4.EntitlementTypes;
    var _closure1_slot12 = var5;
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var25[var4];
    var4 = var24.bind(var1)(var4);
    var26 = var4.CurrencyCodes;
    var22 = {};
    var4 = 'nitro';
    var22['NITRO'] = var4;
    var4 = 'thirdparty';
    var22['THIRDPARTY'] = var4;
    var _closure1_slot14 = var22;
    var21 = function getPriceForCollectiblesProduct(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg2;
            var3 = _closure1_slot13;
            var4 = arg3;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3.DEFAULT;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = var3.PREMIUM_TIER_2;
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3.MOBILE;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var2 = var3.MOBILE_PREMIUM_TIER_2;
case 10:
            var4 = var2;
case 7:
            var3 = _closure1_slot18;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1, var4);
            return var1;
        }
    };
    var _closure1_slot15 = var21;
    var20 = function getDefaultPriceSetAssignmentPurchaseType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 12;
            var1 = var1[var6];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.isAndroid;
            var1 = var1.bind(var4)();
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 13:
            var4 = _closure1_slot13;
            if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = var4.DEFAULT;
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var1 = var4.PREMIUM_TIER_2;
case 16:
            _fun0002_ip = 17; continue _fun0002;
case 11:
            var3 = _closure1_slot13;
            if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = var3.MOBILE;
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var2 = var3.MOBILE_PREMIUM_TIER_2;
case 20:
            var1 = var2;
case 17:
            return var1;
        }
    };
    var _closure1_slot16 = var20;
    var19 = function getBundleItemsPriceSum(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var4 = var2.bundledProducts;
            var2 = null;
            if(!(var2 != var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var5 = _closure1_slot16;
            var3 = undefined;
            var2 = false;
            var2 = var5.bind(var3)(var2);
            var _closure2_slot0 = var2;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot18;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var2 = arg2;
                    var3 = var4.bind(var1)(var2, var3);
                    var2 = null;
                    var4 = var2 == var3;
                    if(var4) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var1 = var3.amount;
case 23:
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0004_ip = 10; continue _fun0004 }
case 25:
                    var2 = var1;
case 10:
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                }
            };
            var1 = 0;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 21:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot17 = var19;
    var18 = function extractPriceByPurchaseTypes(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.prices;
            var1 = arg2;
            var1 = var2[var1];
            var3 = null;
            var4 = var3 != var1;
            var2 = null;
            if(!var4) { _fun0005_ip = 26; continue _fun0005 }
case 4:
            var2 = var1;
case 26:
            var4 = var3 != var2;
            var1 = null;
            if(!var4) { _fun0005_ip = 15; continue _fun0005 }
case 27:
            var4 = var2.countryPrices;
            var6 = var3 == var4;
            var2 = undefined;
            if(var6) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var4 = var4.prices;
            var3 = var3 == var4;
            var2 = undefined;
            if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 30:
            var3 = 0;
            var2 = var4[var3];
case 28:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var _closure1_slot18 = var18;
    var17 = {'original': 4294967295, 'discountPercentage': 4294967295};
    var _closure1_slot19 = var17;
    var16 = function getProductsFromCategories(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var4 = var3[var1];
            var6 = undefined;
            var8 = var2.bind(var6)(var4);
            var7 = var8.flatMap;
            var4 = var5.values;
            var11 = var4.bind(var5)();
            var5 = new Array(0);
            var10 = 0;
            var12 = var5;
            var4 = arraySpread(var12, var11, var10);
            var4 = 'products';
            var5 = var7.bind(var8)(var5, var4);
            var1 = var3[var1];
            var4 = var2.bind(var6)(var1);
            var3 = var4.uniqBy;
            var1 = arg2;
            var2 = var5;
            if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var1 = function(arg1) {
                var4 = arg1;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var5 = arg1;
                        var6 = arg2;
                        var _closure4_slot0 = var6;
                        var4 = null;
                        if(!(var4 != var6)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                        var8 = var6.type;
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 13;
                        var1 = var7[var1];
                        var7 = undefined;
                        var1 = var9.bind(var7)(var1);
                        var1 = var1.CollectiblesItemType;
                        var1 = var1.VARIANTS_GROUP;
                        if(!(var8 === var1)) { _fun0007_ip = 33; continue _fun0007 }
case 35:
                        var1 = var6.variants;
                        if(!(var4 == var1)) { _fun0007_ip = 36; continue _fun0007 }
case 33:
                        var1 = var5.push;
                        var1 = var1.bind(var5)(var6);
                        var1 = var5;
                        _fun0007_ip = 37; continue _fun0007;
case 36:
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 14;
                        var3 = var8[var3];
                        var4 = var4.bind(var7)(var3);
                        var3 = var4.concat;
                        var7 = var6.variants;
                        var6 = var7.map;
                        var2 = function(arg1) {
                            var1 = {};
                            var5 = arg1;
                            var6 = var1;
                            var2 = copyDataProperties(var6, var5);
                            var2 = _closure4_slot0;
                            var4 = var2.storeListingId;
                            var3 = 'variantGroupStoreListingId';
                            var1[2] = var4;
                            var3 = var2.eligibleOffers;
                            var2 = 'eligibleOffers';
                            var1[1] = var3;
                            return var1;
                        };
                        var2 = var6.bind(var7)(var2);
                        var1 = var3.bind(var4)(var5, var2);
case 37:
                        return var1;
                    }
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var1.bind(var6)(var5);
case 31:
            var1 = 'storeListingId';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var16;
    var15 = function getItemRecordsFromPurchases(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 13;
            var1 = var1[var6];
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var2 !== var1)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var2 !== var1)) { _fun0008_ip = 40; continue _fun0008 }
case 14:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var2 !== var1)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_FRAME;
            if(!(var2 !== var1)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var1 = new Array(0);
            return var1;
case 43:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var6 = var5[var1];
            var10 = var2.bind(var3)(var6);
            var9 = var10.flatMap;
            var6 = var7.values;
            var13 = var6.bind(var7)();
            var8 = new Array(0);
            var12 = 0;
            var14 = var8;
            var6 = arraySpread(var14, var13, var12);
            var6 = 'items';
            var9 = var9.bind(var10)(var8, var6);
            var8 = var9.filter;
            var6 = _closure1_slot6;
            var6 = var8.bind(var9)(var6);
            var1 = var5[var1];
            var5 = var2.bind(var3)(var1);
            var2 = var5.uniqBy;
            var1 = 'skuId';
            var1 = var2.bind(var5)(var6, var1);
            return var1;
case 41:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var6 = var5[var1];
            var10 = var2.bind(var3)(var6);
            var9 = var10.flatMap;
            var6 = var7.values;
            var13 = var6.bind(var7)();
            var8 = new Array(0);
            var12 = 0;
            var14 = var8;
            var6 = arraySpread(var14, var13, var12);
            var6 = 'items';
            var9 = var9.bind(var10)(var8, var6);
            var8 = var9.filter;
            var6 = _closure1_slot5;
            var6 = var8.bind(var9)(var6);
            var1 = var5[var1];
            var5 = var2.bind(var3)(var1);
            var2 = var5.uniqBy;
            var1 = 'skuId';
            var1 = var2.bind(var5)(var6, var1);
            return var1;
case 40:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var6 = var5[var1];
            var10 = var2.bind(var3)(var6);
            var9 = var10.flatMap;
            var6 = var7.values;
            var13 = var6.bind(var7)();
            var8 = new Array(0);
            var12 = 0;
            var14 = var8;
            var6 = arraySpread(var14, var13, var12);
            var6 = 'items';
            var9 = var9.bind(var10)(var8, var6);
            var8 = var9.filter;
            var6 = _closure1_slot4;
            var6 = var8.bind(var9)(var6);
            var1 = var5[var1];
            var5 = var2.bind(var3)(var1);
            var2 = var5.uniqBy;
            var1 = 'skuId';
            var1 = var2.bind(var5)(var6, var1);
            return var1;
case 38:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var6 = var5[var1];
            var9 = var2.bind(var3)(var6);
            var8 = var9.flatMap;
            var6 = var7.values;
            var13 = var6.bind(var7)();
            var7 = new Array(0);
            var12 = 0;
            var14 = var7;
            var6 = arraySpread(var14, var13, var12);
            var6 = 'items';
            var7 = var8.bind(var9)(var7, var6);
            var6 = var7.filter;
            var4 = _closure1_slot3;
            var4 = var6.bind(var7)(var4);
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.uniqBy;
            var1 = 'skuId';
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var15;
    var14 = function getItemRecordsFromCategories(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg2;
            var6 = _closure1_slot20;
            var3 = undefined;
            var5 = arg1;
            var1 = true;
            var9 = var6.bind(var3)(var5, var1);
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 13;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var2 !== var1)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var2 !== var1)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var2 !== var1)) { _fun0009_ip = 49; continue _fun0009 }
case 50:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_FRAME;
            if(!(var2 !== var1)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            var1 = new Array(0);
            return var1;
case 51:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var6 = var5[var1];
            var8 = var2.bind(var3)(var6);
            var7 = var8.flatMap;
            var6 = 'items';
            var8 = var7.bind(var8)(var9, var6);
            var7 = var8.filter;
            var6 = _closure1_slot6;
            var6 = var7.bind(var8)(var6);
            var1 = var5[var1];
            var5 = var2.bind(var3)(var1);
            var2 = var5.uniqBy;
            var1 = 'skuId';
            var1 = var2.bind(var5)(var6, var1);
            return var1;
case 49:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var6 = var5[var1];
            var8 = var2.bind(var3)(var6);
            var7 = var8.flatMap;
            var6 = 'items';
            var8 = var7.bind(var8)(var9, var6);
            var7 = var8.filter;
            var6 = _closure1_slot5;
            var6 = var7.bind(var8)(var6);
            var1 = var5[var1];
            var5 = var2.bind(var3)(var1);
            var2 = var5.uniqBy;
            var1 = 'skuId';
            var1 = var2.bind(var5)(var6, var1);
            return var1;
case 47:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var6 = var5[var1];
            var8 = var2.bind(var3)(var6);
            var7 = var8.flatMap;
            var6 = 'items';
            var8 = var7.bind(var8)(var9, var6);
            var7 = var8.filter;
            var6 = _closure1_slot4;
            var6 = var7.bind(var8)(var6);
            var1 = var5[var1];
            var5 = var2.bind(var3)(var1);
            var2 = var5.uniqBy;
            var1 = 'skuId';
            var1 = var2.bind(var5)(var6, var1);
            return var1;
case 45:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var6 = var5[var1];
            var8 = var2.bind(var3)(var6);
            var7 = var8.flatMap;
            var6 = 'items';
            var7 = var7.bind(var8)(var9, var6);
            var6 = var7.filter;
            var4 = _closure1_slot3;
            var4 = var6.bind(var7)(var4);
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.uniqBy;
            var1 = 'skuId';
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var14;
    var13 = function getAvatarDecorationsFromPurchases(arg1) {
        var4 = _closure1_slot21;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.AVATAR_DECORATION;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var13;
    var12 = function getAvatarDecorationsFromCategories(arg1) {
        var4 = _closure1_slot22;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.AVATAR_DECORATION;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var12;
    var11 = function getNameplatesFromPurchases(arg1) {
        var4 = _closure1_slot21;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.NAMEPLATE;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var11;
    var10 = function getNameplatesFromCategories(arg1) {
        var4 = _closure1_slot22;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.NAMEPLATE;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var10;
    var9 = function getProfileEffectsFromPurchases(arg1) {
        var4 = _closure1_slot21;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.PROFILE_EFFECT;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var9;
    var8 = function getProfileEffectsFromCategories(arg1) {
        var4 = _closure1_slot22;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.PROFILE_EFFECT;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var8;
    var7 = function getProfileFramesFromPurchases(arg1) {
        var4 = _closure1_slot21;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.PROFILE_FRAME;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var7;
    var6 = function getProfileFramesFromCategories(arg1) {
        var4 = _closure1_slot22;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.PROFILE_FRAME;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var6;
    var5 = function getDaysRemaining(arg1) {
        var8 = arg1;
        var2 = global;
        var1 = var2.Date;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var12 = var3;
        var1 = new var12[var1](var11);
        var7 = var1 instanceof Object ? var1 : var3;
        var6 = var2.Date;
        var5 = var6.UTC;
        var1 = var7.getFullYear;
        var4 = var1.bind(var7)();
        var1 = var7.getMonth;
        var3 = var1.bind(var7)();
        var1 = var7.getDate;
        var1 = var1.bind(var7)();
        var4 = var5.bind(var6)(var4, var3, var1);
        var7 = var2.Date;
        var6 = var7.UTC;
        var1 = var8.getFullYear;
        var5 = var1.bind(var8)();
        var1 = var8.getMonth;
        var3 = var1.bind(var8)();
        var1 = var8.getDate;
        var1 = var1.bind(var8)();
        var1 = var6.bind(var7)(var5, var3, var1);
        var3 = var2.Math;
        var2 = var3.floor;
        var4 = var1 - var4;
        var1 = 86400000;
        var1 = var4 / var1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot31 = var5;
    var4 = function isBundleProduct(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0010_ip = 53; continue _fun0010 }
case 3:
            var2 = var1.type;
case 53:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot32 = var4;
    var27 = var26.KZT;
    var23 = new Array(3);
    var23[0] = var27;
    var27 = var26.NGN;
    var23[1] = var27;
    var26 = var26.EGP;
    var23[2] = var26;
    var _closure1_slot33 = var23;
    var23 = 16;
    var23 = var25[var23];
    var25 = var24.bind(var1)(var23);
    var24 = var25.fileFinishedImporting;
    var23 = 'modules/collectibles/CollectiblesUtils.tsx';
    var23 = var24.bind(var25)(var23);
    var3['ShopDiscountSource'] = var22;
    var22 = function getShopDiscountSource(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 8;
            var3 = var3[var5];
            var8 = undefined;
            var4 = var4.bind(var8)(var3);
            var3 = var4.canUseShopDiscounts;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0011_ip = 8; continue _fun0011 }
case 54:
            var3 = null;
            return var3;
case 8:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var4 = var4.bind(var8)(var3);
            var3 = var4.canUseCollectibles;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0011_ip = 55; continue _fun0011 }
case 56:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var6 = var4.bind(var8)(var3);
            var5 = var6.getPerkSource;
            var4 = null;
            var7 = var4 == var2;
            var3 = undefined;
            if(var7) { _fun0011_ip = 57; continue _fun0011 }
case 58:
            var3 = var2.perks;
case 57:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 10;
            var2 = var2[var9];
            var2 = var7.bind(var8)(var2);
            var2 = var2.Perk;
            var2 = var2.SHOP_DISCOUNTS;
            var6 = var5.bind(var6)(var3, var2);
            var3 = var4 != var6;
            var2 = null;
            if(!var3) { _fun0011_ip = 59; continue _fun0011 }
case 51:
            var5 = var6.includes;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var7.bind(var8)(var3);
            var3 = var3.PerkSource;
            var3 = var3.SOURCE_NITRO;
            var3 = var5.bind(var6)(var3);
            var2 = null;
            if(!var3) { _fun0011_ip = 59; continue _fun0011 }
case 60:
            var3 = _closure1_slot14;
            var2 = var3.NITRO;
case 59:
            return var2;
case 55:
            var1 = _closure1_slot14;
            var1 = var1.NITRO;
            return var1;
        }
    };
    var3['getShopDiscountSource'] = var22;
    var22 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0012_ip = 61; continue _fun0012 }
case 62:
            var1 = var3.premiumType;
case 61:
            var1 = var2 != var1;
            return var1;
        }
    };
    var3['isPremiumCollectiblesProduct'] = var22;
    var22 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0013_ip = 61; continue _fun0013 }
case 62:
            var2 = var1.purchaseType;
case 61:
            var1 = _closure1_slot12;
            var1 = var1.PREMIUM_PURCHASE;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isPremiumCollectiblesPurchase'] = var22;
    var22 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var3 = var1.items;
            var2 = var3.find;
            var1 = _closure1_slot3;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0014_ip = 63; continue _fun0014 }
case 64:
            var1 = var2.asset;
case 63:
            return var1;
        }
    };
    var3['getAssetForAvatarDecorationProduct'] = var22;
    var3['getPriceForCollectiblesProduct'] = var21;
    var21 = function(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = _closure1_slot15;
            var2 = undefined;
            var5 = arg1;
            var4 = arg2;
            var1 = arg3;
            var6 = var6.bind(var2)(var5, var4, var1);
            var7 = null;
            var4 = var7 == var6;
            var1 = '';
            if(var4) { _fun0015_ip = 65; continue _fun0015 }
case 9:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var5 = var4.bind(var2)(var3);
            var4 = var5.formatPrice;
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0015_ip = 66; continue _fun0015 }
case 67:
            var3 = var6.amount;
case 66:
            var7 = var7 == var6;
            var2 = undefined;
            if(var7) { _fun0015_ip = 11; continue _fun0015 }
case 68:
            var2 = var6.currency;
case 11:
            var1 = var4.bind(var5)(var3, var2);
case 65:
            return var1;
        }
    };
    var3['getFormattedPriceForCollectiblesProduct'] = var21;
    var3['getDefaultPriceSetAssignmentPurchaseType'] = var20;
    var3['getBundleItemsPriceSum'] = var19;
    var3['extractPriceByPurchaseTypes'] = var18;
    var3['NoDiscount'] = var17;
    var17 = function(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var7 = arg1;
            var2 = null;
            if(!(var2 != var7)) { _fun0016_ip = 69; continue _fun0016 }
case 70:
            var3 = _closure1_slot17;
            var5 = undefined;
            var6 = var3.bind(var5)(var7);
            var3 = 0;
            if(!(!(var6 <= var3))) { _fun0016_ip = 71; continue _fun0016 }
case 72:
            var4 = _closure1_slot18;
            var8 = _closure1_slot16;
            var3 = arg2;
            var3 = var8.bind(var5)(var3);
            var3 = var4.bind(var5)(var7, var3);
            if(!(var2 != var3)) { _fun0016_ip = 73; continue _fun0016 }
case 7:
            var2 = {};
            var2['original'] = var6;
            var4 = global;
            var5 = var4.Math;
            var4 = var5.round;
            var3 = var3.amount;
            var3 = var6 - var3;
            var6 = var3 / var6;
            var3 = 100;
            var3 = var6 * var3;
            var3 = var4.bind(var5)(var3);
            var2['discountPercentage'] = var3;
            _fun0016_ip = 74; continue _fun0016;
case 73:
            var2 = _closure1_slot19;
case 74:
            return var2;
case 71:
            var1 = _closure1_slot19;
            return var1;
case 69:
            var1 = _closure1_slot19;
            return var1;
        }
    };
    var3['getProductDiscount'] = var17;
    var17 = function(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var6 = var1.hasShopDiscount;
            var5 = var1.discount;
            var3 = _closure1_slot18;
            var1 = _closure1_slot13;
            var1 = var1.DEFAULT;
            var4 = undefined;
            var3 = var3.bind(var4)(var8, var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0017_ip = 75; continue _fun0017 }
case 10:
            var9 = var3.amount;
            var7 = 0;
            if(!(!(var9 <= var7))) { _fun0017_ip = 76; continue _fun0017 }
case 77:
            var9 = _closure1_slot18;
            var7 = _closure1_slot13;
            var7 = var7.PREMIUM_TIER_2;
            var7 = var9.bind(var4)(var8, var7);
            var2 = _closure1_slot32;
            var2 = var2.bind(var4)(var8);
            var4 = var3;
            if(!var2) { _fun0017_ip = 78; continue _fun0017 }
case 31:
            var4 = var3;
            if(!var6) { _fun0017_ip = 78; continue _fun0017 }
case 73:
            var2 = {};
            var11 = var2;
            var10 = var3;
            var8 = copyDataProperties(var11, var10);
            var8 = var5.original;
            var5 = 'amount';
            var2[4] = var8;
            var4 = var2;
case 78:
            if(!var6) { _fun0017_ip = 79; continue _fun0017 }
case 37:
            var6 = var1 != var7;
case 79:
            var5 = var4;
            if(!var6) { _fun0017_ip = 80; continue _fun0017 }
case 81:
            var5 = var7;
case 80:
            var2 = {};
            var2['defaultPrice'] = var3;
            var2['originalPrice'] = var4;
            var2['premiumPrice'] = var7;
            var2['finalPrice'] = var5;
            var2['showDiscountPrice'] = var6;
            var5 = var5.amount;
            var4 = var4.amount;
            var4 = var5 !== var4;
            var2['finalPriceIsDifferent'] = var4;
            var4 = false;
            var2['showDefaultPriceOnly'] = var4;
            return var2;
case 76:
            var2 = {};
            var2['defaultPrice'] = var3;
            var3 = true;
            var2['showDefaultPriceOnly'] = var3;
            return var2;
case 75:
            return var1;
        }
    };
    var3['getCollectiblesProductPriceComparisons'] = var17;
    var17 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var4 = _closure1_slot18;
            var1 = _closure1_slot13;
            var3 = var1.DEFAULT;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            var3 = null;
            var3 = var3 == var1;
            if(var3) { _fun0018_ip = 63; continue _fun0018 }
case 64:
            var2 = var1.amount;
case 63:
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        }
    };
    var3['isFreeCollectiblesProduct'] = var17;
    var3['getProductsFromCategories'] = var16;
    var3['getItemRecordsFromPurchases'] = var15;
    var3['getItemRecordsFromCategories'] = var14;
    var14 = function(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 != var4;
            var1 = undefined;
            if(!var2) { _fun0019_ip = 82; continue _fun0019 }
case 62:
            var3 = _closure1_slot7;
            var2 = var3.fromServer;
            var1 = var2.bind(var3)(var4);
case 82:
            return var1;
        }
    };
    var3['getAssetDisplayConfig'] = var14;
    var3['getAvatarDecorationsFromPurchases'] = var13;
    var3['getAvatarDecorationsFromCategories'] = var12;
    var12 = function(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 14;
        var2 = var4[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.uniqBy;
        var5 = _closure1_slot23;
        var2 = arg1;
        var9 = var5.bind(var7)(var2);
        var2 = new Array(0);
        var8 = 0;
        var10 = var2;
        var8 = arraySpread(var10, var9, var8);
        var6 = _closure1_slot24;
        var1 = arg2;
        var9 = var6.bind(var7)(var1);
        var10 = var2;
        var1 = arraySpread(var10, var9, var8);
        var1 = 'skuId';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getAvatarDecorations'] = var12;
    var3['getNameplatesFromPurchases'] = var11;
    var3['getNameplatesFromCategories'] = var10;
    var10 = function(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 14;
        var2 = var4[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.uniqBy;
        var5 = _closure1_slot25;
        var2 = arg1;
        var9 = var5.bind(var7)(var2);
        var2 = new Array(0);
        var8 = 0;
        var10 = var2;
        var8 = arraySpread(var10, var9, var8);
        var6 = _closure1_slot26;
        var1 = arg2;
        var9 = var6.bind(var7)(var1);
        var10 = var2;
        var1 = arraySpread(var10, var9, var8);
        var1 = 'skuId';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getNameplates'] = var10;
    var3['getProfileEffectsFromPurchases'] = var9;
    var3['getProfileEffectsFromCategories'] = var8;
    var8 = function(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 14;
        var2 = var4[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.uniqBy;
        var5 = _closure1_slot27;
        var2 = arg1;
        var9 = var5.bind(var7)(var2);
        var2 = new Array(0);
        var8 = 0;
        var10 = var2;
        var8 = arraySpread(var10, var9, var8);
        var6 = _closure1_slot28;
        var1 = arg2;
        var9 = var6.bind(var7)(var1);
        var10 = var2;
        var1 = arraySpread(var10, var9, var8);
        var1 = 'skuId';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getProfileEffects'] = var8;
    var8 = function(arg1, arg2) {
        var4 = _closure1_slot27;
        var5 = undefined;
        var3 = arg2;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot0 = var3;
        var4 = _closure1_slot28;
        var2 = arg1;
        var4 = var4.bind(var5)(var2);
        var2 = var4.filter;
        var1 = function(arg1) {
            var2 = arg1;
            var2 = var2.skuId;
            var _closure3_slot0 = var2;
            var3 = _closure2_slot0;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.skuId;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['purchased'] = var3;
        var1['shopPreviews'] = var2;
        return var1;
    };
    var3['groupProfileEffects'] = var8;
    var3['getProfileFramesFromPurchases'] = var7;
    var3['getProfileFramesFromCategories'] = var6;
    var6 = function(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 14;
        var2 = var4[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.uniqBy;
        var5 = _closure1_slot29;
        var2 = arg1;
        var9 = var5.bind(var7)(var2);
        var2 = new Array(0);
        var8 = 0;
        var10 = var2;
        var8 = arraySpread(var10, var9, var8);
        var6 = _closure1_slot30;
        var1 = arg2;
        var9 = var6.bind(var7)(var1);
        var10 = var2;
        var1 = arraySpread(var10, var9, var8);
        var1 = 'skuId';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getProfileFrames'] = var6;
    var6 = function(arg1) {
        var1 = arg1;
        var2 = var1.applicationId;
        var1 = _closure1_slot11;
        var1 = var2 === var1;
        return var1;
    };
    var3['isCollectiblesGiftCode'] = var6;
    var6 = 3.8;
    var3['LOGO_ASPECT_RATIO'] = var6;
    var6 = function(arg1) {
        var2 = 3.8;
        var1 = arg1;
        var1 = var2 * var1;
        return var1;
    };
    var3['getLogoSize'] = var6;
    var3['getDaysRemaining'] = var5;
    var5 = function(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0020_ip = 24; continue _fun0020 }
case 83:
            var4 = _closure1_slot31;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var2 = _closure1_slot9;
            var1 = var3 <= var2;
case 24:
            return var1;
        }
    };
    var3['shouldShowLimitedTimeBadge'] = var5;
    var5 = function(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var2 = _closure1_slot10;
            var1 = arg1;
            var3 = var2[var1];
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0021_ip = 84; continue _fun0021 }
case 85:
            var2 = global;
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var5 = var4;
            var2 = new var5[var2](var4);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.getTime;
            var2 = var2.bind(var4)();
            var1 = var2 < var3;
case 84:
            return var1;
        }
    };
    var3['isProductNew'] = var5;
    var3['isBundleProduct'] = var4;
    var4 = function(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var6 = null;
            if(!(var6 == var1)) { _fun0022_ip = 86; continue _fun0022 }
case 70:
            var2 = undefined;
            return var2;
case 86:
            var7 = var1.type;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 13;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var8.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.BUNDLE;
            if(!(var7 !== var3)) { _fun0022_ip = 87; continue _fun0022 }
case 88:
            var7 = var1.items;
            var3 = var6 == var7;
            var1 = undefined;
            if(var3) { _fun0022_ip = 11; continue _fun0022 }
case 33:
            var3 = 0;
            var3 = var7[var3];
            var6 = var6 == var3;
            var1 = undefined;
            if(var6) { _fun0022_ip = 11; continue _fun0022 }
case 36:
            var1 = var3.type;
case 11:
            _fun0022_ip = 89; continue _fun0022;
case 87:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var1 = var2.BUNDLE;
case 89:
            return var1;
        }
    };
    var3['getCollectiblesItemTypeForDisplay'] = var4;
    var4 = function(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var2 = arg1;
            var1 = var2.invoicePreview;
            var6 = var2.selectedSkuId;
            var3 = var2.skusById;
            var4 = null;
            var5 = var4 == var1;
            var7 = undefined;
            if(var5) { _fun0023_ip = 90; continue _fun0023 }
case 91:
            var5 = var1.invoiceItems;
            var1 = var4 == var5;
            var7 = undefined;
            if(var1) { _fun0023_ip = 90; continue _fun0023 }
case 92:
            var1 = 0;
            var1 = var5[var1];
            var5 = var4 == var1;
            var7 = undefined;
            if(var5) { _fun0023_ip = 90; continue _fun0023 }
case 93:
            var7 = var1.unitPrice;
case 90:
            var1 = var4 != var7;
            var5 = undefined;
            if(!var1) { _fun0023_ip = 73; continue _fun0023 }
case 94:
            var1 = {};
            var8 = var7.amount;
            var1['amount'] = var8;
            var7 = var7.currency;
            var1['currency'] = var7;
            var5 = var1;
case 73:
            var1 = var5;
            if(!(var4 == var1)) { _fun0023_ip = 95; continue _fun0023 }
case 20:
            var1 = var5;
            if(!(var4 != var6)) { _fun0023_ip = 95; continue _fun0023 }
case 42:
            var3 = var3[var6];
            var6 = var4 == var3;
            var2 = undefined;
            if(var6) { _fun0023_ip = 37; continue _fun0023 }
case 96:
            var2 = var3.price;
case 37:
            var1 = var5;
            if(!(var4 != var2)) { _fun0023_ip = 95; continue _fun0023 }
case 97:
            var2 = {};
            var4 = var3.price;
            var4 = var4.amount;
            var2['amount'] = var4;
            var3 = var3.price;
            var3 = var3.currency;
            var2['currency'] = var3;
            var1 = var2;
case 95:
            return var1;
        }
    };
    var3['getCollectiblesPrice'] = var4;
    var4 = function(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0024_ip = 72; continue _fun0024 }
case 83:
            var3 = _closure1_slot33;
            var2 = var3.includes;
            var1 = var2.bind(var3)(var4);
case 72:
            return var1;
        }
    };
    var3['shouldHideGiftingForCurrency'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = arg1;
            var4 = arg3;
            var5 = _closure1_slot32;
            var2 = undefined;
            var5 = var5.bind(var2)(var3);
            if(var5) { _fun0025_ip = 19; continue _fun0025 }
case 85:
            var6 = _closure1_slot13;
            var5 = arg2;
            if(var5) { _fun0025_ip = 10; continue _fun0025 }
case 6:
            if(var4) { _fun0025_ip = 98; continue _fun0025 }
case 91:
            var5 = var6.PREMIUM_TIER_2;
            _fun0025_ip = 39; continue _fun0025;
case 98:
            var5 = var6.MOBILE_PREMIUM_TIER_2;
case 39:
            _fun0025_ip = 90; continue _fun0025;
case 10:
            if(var4) { _fun0025_ip = 99; continue _fun0025 }
case 7:
            var4 = var6.DEFAULT;
            _fun0025_ip = 30; continue _fun0025;
case 99:
            var4 = var6.MOBILE;
case 30:
            var5 = var4;
case 90:
            var4 = _closure1_slot18;
            var5 = var4.bind(var2)(var3, var5);
            var4 = null;
            var6 = var4 == var5;
            var4 = undefined;
            if(var6) { _fun0025_ip = 100; continue _fun0025 }
case 101:
            var4 = var5.amount;
case 100:
            return var4;
case 19:
            var1 = _closure1_slot17;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['getStrikeThroughPriceAmountForCollectiblesProduct'] = var4;
    var4 = function(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var2 = arg1;
            var5 = var2.product;
            var1 = var2.isPartiallyOwnedBundle;
            var3 = var2.isPurchased;
            if(var1) { _fun0026_ip = 93; continue _fun0026 }
case 102:
            var2 = _closure1_slot8;
            var4 = var2.ORB_PROFILE_BADGE;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0026_ip = 103; continue _fun0026 }
case 104:
            var2 = var5.skuId;
case 103:
            var2 = var4 === var2;
            if(!var2) { _fun0026_ip = 99; continue _fun0026 }
case 105:
            var2 = var3;
case 99:
            var1 = var2;
case 93:
            var1 = !var1;
            return var1;
        }
    };
    var3['canActionOnProduct'] = var4;
    var4 = function(arg1, arg2) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 13;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var1 !== var3)) { _fun0027_ip = 106; continue _fun0027 }
case 39:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var1 !== var3)) { _fun0027_ip = 107; continue _fun0027 }
case 14:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var1 !== var3)) { _fun0027_ip = 108; continue _fun0027 }
case 42:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_FRAME;
            if(!(var1 !== var3)) { _fun0027_ip = 109; continue _fun0027 }
case 110:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            if(!(var1 !== var3)) { _fun0027_ip = 111; continue _fun0027 }
case 112:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.EXTERNAL_SKU;
            if(!(var1 !== var3)) { _fun0027_ip = 113; continue _fun0027 }
case 114:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.VARIANTS_GROUP;
            if(!(var1 !== var3)) { _fun0027_ip = 115; continue _fun0027 }
case 41:
            var1 = 'unknown';
            return var1;
case 115:
            var1 = 'variants group';
            return var1;
case 113:
            var1 = _closure1_slot8;
            var3 = var1.FRACTIONAL_PREMIUM;
            var1 = '3-day nitro credit';
            if(!(var4 !== var3)) { _fun0027_ip = 116; continue _fun0027 }
case 117:
            var2 = _closure1_slot8;
            var3 = var2.ORB_PROFILE_BADGE;
            var2 = 'unknown';
            if(!(var4 === var3)) { _fun0027_ip = 118; continue _fun0027 }
case 119:
            var2 = 'orb profile badge';
case 118:
            var1 = var2;
case 116:
            return var1;
case 111:
            var1 = 'bundle';
            return var1;
case 109:
            var1 = 'profile frame';
            return var1;
case 108:
            var1 = 'nameplate';
            return var1;
case 107:
            var1 = 'profile effect';
            return var1;
case 106:
            var1 = 'avatar decoration';
            return var1;
        }
    };
    var3['getProductTypeNameForLogging'] = var4;
    var4 = function(arg1, arg2, arg3) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var1 = _closure2_slot1;
                if(var1) { _fun0028_ip = 23; continue _fun0028 }
case 5:
                var5 = _closure1_slot15;
                var4 = _closure2_slot0;
                var3 = undefined;
                var1 = true;
                var1 = var5.bind(var3)(var8, var4, var1);
                _fun0028_ip = 36; continue _fun0028;
case 23:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 15;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.getProductOrbPrice;
                var3 = {};
                var3['product'] = var8;
                var8 = _closure2_slot0;
                var3['hasShopDiscount'] = var8;
                var1 = var4.bind(var5)(var3);
case 36:
                var3 = _closure2_slot1;
                if(var3) { _fun0028_ip = 58; continue _fun0028 }
case 87:
                var8 = _closure1_slot15;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = true;
                var5 = var8.bind(var4)(var7, var5, var3);
                _fun0028_ip = 120; continue _fun0028;
case 58:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getProductOrbPrice;
                var2 = {};
                var2['product'] = var7;
                var6 = _closure2_slot0;
                var2['hasShopDiscount'] = var6;
                var5 = var3.bind(var4)(var2);
case 120:
                var4 = null;
                var2 = var4 == var1;
                var6 = undefined;
                if(var2) { _fun0028_ip = 121; continue _fun0028 }
case 122:
                var6 = var1.amount;
case 121:
                var7 = var4 != var6;
                var1 = 0;
                if(!var7) { _fun0028_ip = 123; continue _fun0028 }
case 124:
                var1 = var6;
case 123:
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0028_ip = 125; continue _fun0028 }
case 126:
                var3 = var5.amount;
case 125:
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0028_ip = 127; continue _fun0028 }
case 76:
                var2 = var3;
case 127:
                var1 = var1 - var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sortProductsByPrice'] = var4;
    var4 = function(arg1, arg2) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var3 = var5.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0029_ip = 84; continue _fun0029 }
case 5:
            var3 = var1.length;
            if(!(var4 !== var3)) { _fun0029_ip = 84; continue _fun0029 }
case 128:
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.discountId;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var _closure2_slot0 = var3;
            var3 = var1.sort;
            var2 = function(arg1, arg2) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.eligibleOffers;
                    var2 = null;
                    var1 = var2 == var7;
                    var5 = undefined;
                    if(var1) { _fun0030_ip = 9; continue _fun0030 }
case 129:
                    var6 = var7.some;
                    var1 = function(arg1) {
                        var3 = _closure2_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var1);
case 9:
                    var1 = var2 != var5;
                    if(!var1) { _fun0030_ip = 104; continue _fun0030 }
case 130:
                    var1 = var5;
case 104:
                    var5 = arg2;
                    var6 = var5.eligibleOffers;
                    var5 = var2 == var6;
                    var3 = undefined;
                    if(var5) { _fun0030_ip = 131; continue _fun0030 }
case 93:
                    var5 = var6.some;
                    var4 = function(arg1) {
                        var3 = _closure2_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
case 131:
                    var2 = var2 != var3;
                    if(!var2) { _fun0030_ip = 16; continue _fun0030 }
case 36:
                    var2 = var3;
case 16:
                    var2 = var2 - 0;
                    var1 = var1 - 0;
                    var1 = var2 - var1;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var2;
case 84:
            return var1;
        }
    };
    var3['sortProductsByUserDiscounts'] = var4;
    var2 = function(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.isCategoryReward;
            var1 = !var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['removeRewardProductsFilter'] = var2;
    return var1;
})();