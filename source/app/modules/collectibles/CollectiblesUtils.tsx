// app/modules/collectibles/CollectiblesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var26 = require;
    var3 = exports;
    var27 = dependencyMap;
    var _closure1_slot0 = var26;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var27;
    var23 = function getPriceForCollectiblesProduct(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg2;
            var4 = _closure1_slot22;
            var2 = _closure1_slot13;
            var3 = arg3;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.DEFAULT;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var3 = var2.PREMIUM_TIER_2;
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var2.MOBILE;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var1 = var2.MOBILE_PREMIUM_TIER_2;
case 10:
            var3 = var1;
case 7:
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        }
    };
    var _closure1_slot19 = var23;
    var22 = function getDefaultPriceSetAssignmentPurchaseType(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 13;
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
            if(!var1) { _fun0002_ip = 13; continue _fun0002 }
case 11:
            var1 = _closure1_slot14;
            var4 = var1.DISCORD_ORB;
            var1 = arg2;
            if(!(var1 === var4)) { _fun0002_ip = 14; continue _fun0002 }
case 13:
            var4 = _closure1_slot13;
            if(var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = var4.DEFAULT;
            _fun0002_ip = 17; continue _fun0002;
case 15:
            var1 = var4.PREMIUM_TIER_2;
case 17:
            _fun0002_ip = 18; continue _fun0002;
case 14:
            var3 = _closure1_slot13;
            if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = var3.MOBILE;
            _fun0002_ip = 21; continue _fun0002;
case 19:
            var2 = var3.MOBILE_PREMIUM_TIER_2;
case 21:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot20 = var22;
    var21 = function getBundleItemsPriceSum(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg2;
            var _closure2_slot0 = var6;
            var2 = arg1;
            var4 = var2.bundledProducts;
            var2 = null;
            if(!(var2 != var4)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var5 = _closure1_slot20;
            var3 = undefined;
            var2 = false;
            var2 = var5.bind(var3)(var2, var6);
            var _closure2_slot1 = var2;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure1_slot22;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var2 = arg2;
                    var3 = var5.bind(var1)(var2, var4, var3);
                    var2 = null;
                    var4 = var2 == var3;
                    if(var4) { _fun0004_ip = 24; continue _fun0004 }
case 2:
                    var1 = var3.amount;
case 24:
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var2 = var1;
case 25:
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                }
            };
            var1 = 0;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 22:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot21 = var21;
    var20 = function extractPriceByPurchaseTypes(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg3;
            var _closure2_slot0 = var4;
            var1 = arg1;
            var2 = var1.prices;
            var1 = arg2;
            var1 = var2[var1];
            var2 = null;
            var6 = var2 == var1;
            var5 = undefined;
            if(var6) { _fun0005_ip = 25; continue _fun0005 }
case 27:
            var1 = var1.countryPrices;
            var6 = var2 == var1;
            var5 = undefined;
            if(var6) { _fun0005_ip = 25; continue _fun0005 }
case 28:
            var5 = var1.prices;
case 25:
            var6 = var2 == var5;
            var1 = null;
            if(var6) { _fun0005_ip = 17; continue _fun0005 }
case 22:
            if(!(var2 != var4)) { _fun0005_ip = 13; continue _fun0005 }
case 29:
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.currency;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _fun0005_ip = 30; continue _fun0005;
case 13:
            var4 = 0;
            var3 = var5[var4];
case 30:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0005_ip = 31; continue _fun0005 }
case 15:
            var2 = var3;
case 31:
            var1 = var2;
case 17:
            return var1;
        }
    };
    var _closure1_slot22 = var20;
    var17 = function extendVariantsProducts(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var6 = arg2;
                var _closure3_slot0 = var6;
                var4 = null;
                if(!(var4 != var6)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                var8 = var6.type;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 14;
                var1 = var7[var1];
                var7 = undefined;
                var1 = var9.bind(var7)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.VARIANTS_GROUP;
                if(!(var8 === var1)) { _fun0006_ip = 32; continue _fun0006 }
case 34:
                var1 = var6.variants;
                if(!(var4 == var1)) { _fun0006_ip = 35; continue _fun0006 }
case 32:
                var1 = var5.push;
                var1 = var1.bind(var5)(var6);
                var1 = var5;
                _fun0006_ip = 36; continue _fun0006;
case 35:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 15;
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
                    var2 = _closure3_slot0;
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
case 36:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var17;
    var16 = function getProductsFromCategories(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var5 = var4[var2];
            var6 = undefined;
            var9 = var3.bind(var6)(var5);
            var8 = var9.flatMap;
            var5 = var7.values;
            var12 = var5.bind(var7)();
            var7 = new Array(0);
            var11 = 0;
            var13 = var7;
            var5 = arraySpread(var13, var12, var11);
            var5 = 'products';
            var5 = var8.bind(var9)(var7, var5);
            var2 = var4[var2];
            var4 = var3.bind(var6)(var2);
            var3 = var4.uniqBy;
            var7 = arg2;
            var2 = var5;
            if(!var7) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var1 = _closure1_slot23;
            var2 = var1.bind(var6)(var5);
case 37:
            var1 = 'storeListingId';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var16;
    var15 = function getItemRecordsFromPurchases(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 14;
            var1 = var1[var6];
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var2 !== var1)) { _fun0008_ip = 39; continue _fun0008 }
case 8:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var2 !== var1)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var2 !== var1)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_FRAME;
            if(!(var2 !== var1)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var1 = new Array(0);
            return var1;
case 44:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
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
case 42:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
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
            var1 = 15;
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
case 39:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
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
    var _closure1_slot25 = var15;
    var14 = function getItemRecordsFromCategories(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg2;
            var6 = _closure1_slot24;
            var3 = undefined;
            var5 = arg1;
            var1 = true;
            var9 = var6.bind(var3)(var5, var1);
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 14;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var2 !== var1)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var2 !== var1)) { _fun0009_ip = 48; continue _fun0009 }
case 49:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var2 !== var1)) { _fun0009_ip = 50; continue _fun0009 }
case 51:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_FRAME;
            if(!(var2 !== var1)) { _fun0009_ip = 52; continue _fun0009 }
case 53:
            var1 = new Array(0);
            return var1;
case 52:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
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
case 50:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
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
case 48:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
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
case 46:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
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
    var _closure1_slot26 = var14;
    var13 = function getAvatarDecorationsFromPurchases(arg1) {
        var4 = _closure1_slot25;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.AVATAR_DECORATION;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var13;
    var12 = function getAvatarDecorationsFromCategories(arg1) {
        var4 = _closure1_slot26;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.AVATAR_DECORATION;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var12;
    var11 = function getNameplatesFromPurchases(arg1) {
        var4 = _closure1_slot25;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.NAMEPLATE;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var11;
    var10 = function getNameplatesFromCategories(arg1) {
        var4 = _closure1_slot26;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.NAMEPLATE;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var10;
    var9 = function getProfileEffectsFromPurchases(arg1) {
        var4 = _closure1_slot25;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.PROFILE_EFFECT;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var9;
    var8 = function getProfileEffectsFromCategories(arg1) {
        var4 = _closure1_slot26;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.PROFILE_EFFECT;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var8;
    var7 = function getProfileFramesFromPurchases(arg1) {
        var4 = _closure1_slot25;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.PROFILE_FRAME;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var7;
    var6 = function getProfileFramesFromCategories(arg1) {
        var4 = _closure1_slot26;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.PROFILE_FRAME;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot34 = var6;
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
    var _closure1_slot35 = var5;
    var4 = function isBundleProduct(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0010_ip = 54; continue _fun0010 }
case 55:
            var2 = var1.type;
case 54:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot36 = var4;
    var1 = global;
    var24 = var1.Object;
    var19 = var24.defineProperty;
    var18 = {};
    var1 = true;
    var18['value'] = var1;
    var1 = '__esModule';
    var1 = var19.bind(var24)(var3, var1, var18);
    var1 = 0;
    var18 = var27[var1];
    var1 = undefined;
    var18 = var26.bind(var1)(var18);
    var18 = var18.isAvatarDecorationRecord;
    var _closure1_slot3 = var18;
    var18 = 1;
    var18 = var27[var18];
    var18 = var26.bind(var1)(var18);
    var18 = var18.isNameplateRecord;
    var _closure1_slot4 = var18;
    var18 = 2;
    var18 = var27[var18];
    var18 = var26.bind(var1)(var18);
    var18 = var18.isProfileEffectRecord;
    var _closure1_slot5 = var18;
    var18 = 3;
    var18 = var27[var18];
    var18 = var26.bind(var1)(var18);
    var18 = var18.isProfileFrameRecord;
    var _closure1_slot6 = var18;
    var18 = 4;
    var18 = var27[var18];
    var18 = var26.bind(var1)(var18);
    var18 = var18.AssetDisplayConfigRecord;
    var _closure1_slot7 = var18;
    var18 = 5;
    var19 = var27[var18];
    var19 = var26.bind(var1)(var19);
    var24 = var19.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot8 = var24;
    var24 = var19.LIMITED_TIME_BADGE_DAYS_THRESHOLD;
    var _closure1_slot9 = var24;
    var19 = var19.SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS;
    var _closure1_slot10 = var19;
    var19 = 6;
    var19 = var27[var19];
    var19 = var26.bind(var1)(var19);
    var24 = var19.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot11 = var24;
    var24 = var19.EntitlementTypes;
    var _closure1_slot12 = var24;
    var19 = var19.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot13 = var19;
    var19 = 7;
    var19 = var27[var19];
    var19 = var26.bind(var1)(var19);
    var28 = var19.CurrencyCodes;
    var _closure1_slot14 = var28;
    var24 = {};
    var29 = 'nitro';
    var24['NITRO'] = var29;
    var19 = 'thirdparty';
    var24['THIRDPARTY'] = var19;
    var _closure1_slot15 = var24;
    var19 = {};
    var25 = var24.NITRO;
    var19[24] = var29;
    var29 = var24.THIRDPARTY;
    var25 = 'xbox';
    var19[28] = var25;
    var _closure1_slot16 = var19;
    var19 = {'original': 4294967295, 'discountPercentage': 4294967295};
    var _closure1_slot17 = var19;
    var29 = var28.KZT;
    var25 = new Array(3);
    var25[0] = var29;
    var29 = var28.NGN;
    var25[1] = var29;
    var28 = var28.EGP;
    var25[2] = var28;
    var _closure1_slot18 = var25;
    var25 = 18;
    var25 = var27[var25];
    var27 = var26.bind(var1)(var25);
    var26 = var27.fileFinishedImporting;
    var25 = 'modules/collectibles/CollectiblesUtils.tsx';
    var25 = var26.bind(var27)(var25);
    var3['ShopDiscountSource'] = var24;
    var24 = function getAnalyticsShopDiscountSource(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0011_ip = 5; continue _fun0011 }
case 56:
            var2 = _closure1_slot16;
            var1 = var2[var3];
case 5:
            return var1;
        }
    };
    var3['getAnalyticsShopDiscountSource'] = var24;
    var24 = function getShopDiscountSource(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            if(var3) { _fun0012_ip = 57; continue _fun0012 }
case 9:
            var3 = null;
            return var3;
case 57:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var4 = var4.bind(var8)(var3);
            var3 = var4.canUseCollectibles;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0012_ip = 48; continue _fun0012 }
case 58:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var6 = var4.bind(var8)(var3);
            var5 = var6.getPerkSource;
            var4 = null;
            var7 = var4 == var2;
            var3 = undefined;
            if(var7) { _fun0012_ip = 59; continue _fun0012 }
case 60:
            var3 = var2.perks;
case 59:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 10;
            var2 = var2[var9];
            var2 = var7.bind(var8)(var2);
            var2 = var2.Perk;
            var2 = var2.SHOP_DISCOUNTS;
            var6 = var5.bind(var6)(var3, var2);
            if(!(var4 != var6)) { _fun0012_ip = 61; continue _fun0012 }
case 62:
            var3 = var6.includes;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var5.bind(var8)(var2);
            var2 = var2.PerkSource;
            var2 = var2.SOURCE_NITRO;
            var2 = var3.bind(var6)(var2);
            if(var2) { _fun0012_ip = 63; continue _fun0012 }
case 61:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var5 = var3.bind(var8)(var2);
            var3 = var5.getIsCrepeEnabled;
            var2 = 'getShopDiscountSource';
            var3 = var3.bind(var5)(var2);
            var2 = null;
            if(!var3) { _fun0012_ip = 64; continue _fun0012 }
case 50:
            var3 = var4 != var6;
            var2 = null;
            if(!var3) { _fun0012_ip = 64; continue _fun0012 }
case 65:
            var5 = var6.includes;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var7.bind(var8)(var3);
            var3 = var3.PerkSource;
            var3 = var3.SOURCE_THIRDPARTY_CROISSANT;
            var3 = var5.bind(var6)(var3);
            var2 = null;
            if(!var3) { _fun0012_ip = 64; continue _fun0012 }
case 66:
            var3 = _closure1_slot15;
            var2 = var3.THIRDPARTY;
case 64:
            _fun0012_ip = 67; continue _fun0012;
case 63:
            var3 = _closure1_slot15;
            var2 = var3.NITRO;
case 67:
            return var2;
case 48:
            var1 = _closure1_slot15;
            var1 = var1.NITRO;
            return var1;
        }
    };
    var3['getShopDiscountSource'] = var24;
    var24 = function isPremiumCollectiblesProduct(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0013_ip = 3; continue _fun0013 }
case 68:
            var1 = var3.premiumType;
case 3:
            var1 = var2 != var1;
            return var1;
        }
    };
    var3['isPremiumCollectiblesProduct'] = var24;
    var24 = function isPremiumCollectiblesPurchase(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0014_ip = 3; continue _fun0014 }
case 68:
            var2 = var1.purchaseType;
case 3:
            var1 = _closure1_slot12;
            var1 = var1.PREMIUM_PURCHASE;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isPremiumCollectiblesPurchase'] = var24;
    var24 = function getAssetForAvatarDecorationProduct(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.items;
            var2 = var3.find;
            var1 = _closure1_slot3;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0015_ip = 69; continue _fun0015 }
case 6:
            var1 = var2.asset;
case 69:
            return var1;
        }
    };
    var3['getAssetForAvatarDecorationProduct'] = var24;
    var3['getPriceForCollectiblesProduct'] = var23;
    var23 = function getFormattedPriceForCollectiblesProduct(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var6 = _closure1_slot19;
            var2 = undefined;
            var5 = arg1;
            var4 = arg2;
            var1 = arg3;
            var6 = var6.bind(var2)(var5, var4, var1);
            var7 = null;
            var4 = var7 == var6;
            var1 = '';
            if(var4) { _fun0016_ip = 70; continue _fun0016 }
case 71:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 12;
            var3 = var5[var3];
            var5 = var4.bind(var2)(var3);
            var4 = var5.formatPrice;
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0016_ip = 72; continue _fun0016 }
case 73:
            var3 = var6.amount;
case 72:
            var7 = var7 == var6;
            var2 = undefined;
            if(var7) { _fun0016_ip = 30; continue _fun0016 }
case 13:
            var2 = var6.currency;
case 30:
            var1 = var4.bind(var5)(var3, var2);
case 70:
            return var1;
        }
    };
    var3['getFormattedPriceForCollectiblesProduct'] = var23;
    var3['getDefaultPriceSetAssignmentPurchaseType'] = var22;
    var3['getBundleItemsPriceSum'] = var21;
    var3['extractPriceByPurchaseTypes'] = var20;
    var3['NoDiscount'] = var19;
    var3['DISCOUNT_DISPLAY_MINIMUM_THRESHOLD'] = var18;
    var18 = function getProductDiscount(arg1, arg2, arg3) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var8 = arg1;
            var7 = arg3;
            var2 = null;
            if(!(var2 != var8)) { _fun0017_ip = 19; continue _fun0017 }
case 56:
            var3 = _closure1_slot21;
            var5 = undefined;
            var6 = var3.bind(var5)(var8, var7);
            var3 = 0;
            if(!(!(var6 <= var3))) { _fun0017_ip = 74; continue _fun0017 }
case 75:
            var4 = _closure1_slot22;
            var9 = _closure1_slot20;
            var3 = arg2;
            var3 = var9.bind(var5)(var3, var7);
            var3 = var4.bind(var5)(var8, var3, var7);
            if(!(var2 != var3)) { _fun0017_ip = 76; continue _fun0017 }
case 77:
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
            _fun0017_ip = 20; continue _fun0017;
case 76:
            var2 = _closure1_slot17;
case 20:
            return var2;
case 74:
            var1 = _closure1_slot17;
            return var1;
case 19:
            var1 = _closure1_slot17;
            return var1;
        }
    };
    var3['getProductDiscount'] = var18;
    var18 = function getCollectiblesProductPriceComparisons(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var6 = var1.hasShopDiscount;
            var5 = var1.discount;
            var3 = _closure1_slot22;
            var1 = _closure1_slot13;
            var1 = var1.DEFAULT;
            var4 = undefined;
            var3 = var3.bind(var4)(var8, var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0018_ip = 78; continue _fun0018 }
case 79:
            var9 = var3.amount;
            var7 = 0;
            if(!(!(var9 <= var7))) { _fun0018_ip = 80; continue _fun0018 }
case 81:
            var9 = _closure1_slot22;
            var7 = _closure1_slot13;
            var7 = var7.PREMIUM_TIER_2;
            var7 = var9.bind(var4)(var8, var7);
            var2 = _closure1_slot36;
            var2 = var2.bind(var4)(var8);
            var4 = var3;
            if(!var2) { _fun0018_ip = 82; continue _fun0018 }
case 83:
            var4 = var3;
            if(!var6) { _fun0018_ip = 82; continue _fun0018 }
case 84:
            var2 = {};
            var11 = var2;
            var10 = var3;
            var8 = copyDataProperties(var11, var10);
            var8 = var5.original;
            var5 = 'amount';
            var2[4] = var8;
            var4 = var2;
case 82:
            if(!var6) { _fun0018_ip = 85; continue _fun0018 }
case 36:
            var6 = var1 != var7;
case 85:
            var5 = var4;
            if(!var6) { _fun0018_ip = 86; continue _fun0018 }
case 87:
            var5 = var7;
case 86:
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
case 80:
            var2 = {};
            var2['defaultPrice'] = var3;
            var3 = true;
            var2['showDefaultPriceOnly'] = var3;
            return var2;
case 78:
            return var1;
        }
    };
    var3['getCollectiblesProductPriceComparisons'] = var18;
    var18 = function isFreeCollectiblesProduct(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = _closure1_slot22;
            var1 = _closure1_slot13;
            var3 = var1.DEFAULT;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            var3 = null;
            var3 = var3 == var1;
            if(var3) { _fun0019_ip = 69; continue _fun0019 }
case 6:
            var2 = var1.amount;
case 69:
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        }
    };
    var3['isFreeCollectiblesProduct'] = var18;
    var3['extendVariantsProducts'] = var17;
    var3['getProductsFromCategories'] = var16;
    var3['getItemRecordsFromPurchases'] = var15;
    var3['getItemRecordsFromCategories'] = var14;
    var14 = function getCollectibleTypeLabel(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 14;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0020_ip = 48; continue _fun0020 }
case 88:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0020_ip = 89; continue _fun0020 }
case 90:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0020_ip = 91; continue _fun0020 }
case 92:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_FRAME;
            if(!(var2 !== var3)) { _fun0020_ip = 93; continue _fun0020 }
case 94:
            var2 = null;
            return var2;
case 93:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.GWrZOd;
            var2 = var3.bind(var4)(var2);
            return var2;
case 91:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.x5CoXR;
            var2 = var3.bind(var4)(var2);
            return var2;
case 89:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.wR5wOo;
            var2 = var3.bind(var4)(var2);
            return var2;
case 48:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 16;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1["7v0T9P"];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getCollectibleTypeLabel'] = var14;
    var14 = function getAssetDisplayConfig(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 != var4;
            var1 = undefined;
            if(!var2) { _fun0021_ip = 95; continue _fun0021 }
case 68:
            var3 = _closure1_slot7;
            var2 = var3.fromServer;
            var1 = var2.bind(var3)(var4);
case 95:
            return var1;
        }
    };
    var3['getAssetDisplayConfig'] = var14;
    var3['getAvatarDecorationsFromPurchases'] = var13;
    var3['getAvatarDecorationsFromCategories'] = var12;
    var12 = function getAvatarDecorations(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 15;
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
    var3['getAvatarDecorations'] = var12;
    var3['getNameplatesFromPurchases'] = var11;
    var3['getNameplatesFromCategories'] = var10;
    var10 = function getNameplates(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 15;
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
    var3['getNameplates'] = var10;
    var3['getProfileEffectsFromPurchases'] = var9;
    var3['getProfileEffectsFromCategories'] = var8;
    var8 = function getProfileEffects(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 15;
        var2 = var4[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.uniqBy;
        var5 = _closure1_slot31;
        var2 = arg1;
        var9 = var5.bind(var7)(var2);
        var2 = new Array(0);
        var8 = 0;
        var10 = var2;
        var8 = arraySpread(var10, var9, var8);
        var6 = _closure1_slot32;
        var1 = arg2;
        var9 = var6.bind(var7)(var1);
        var10 = var2;
        var1 = arraySpread(var10, var9, var8);
        var1 = 'skuId';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getProfileEffects'] = var8;
    var8 = function groupProfileEffects(arg1, arg2) {
        var4 = _closure1_slot31;
        var5 = undefined;
        var3 = arg2;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot0 = var3;
        var4 = _closure1_slot32;
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
    var6 = function getProfileFrames(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 15;
        var2 = var4[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.uniqBy;
        var5 = _closure1_slot33;
        var2 = arg1;
        var9 = var5.bind(var7)(var2);
        var2 = new Array(0);
        var8 = 0;
        var10 = var2;
        var8 = arraySpread(var10, var9, var8);
        var6 = _closure1_slot34;
        var1 = arg2;
        var9 = var6.bind(var7)(var1);
        var10 = var2;
        var1 = arraySpread(var10, var9, var8);
        var1 = 'skuId';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getProfileFrames'] = var6;
    var6 = function isCollectiblesGiftCode(arg1) {
        var1 = arg1;
        var2 = var1.applicationId;
        var1 = _closure1_slot11;
        var1 = var2 === var1;
        return var1;
    };
    var3['isCollectiblesGiftCode'] = var6;
    var6 = 3.8;
    var3['LOGO_ASPECT_RATIO'] = var6;
    var6 = function getLogoSize(arg1) {
        var2 = 3.8;
        var1 = arg1;
        var1 = var2 * var1;
        return var1;
    };
    var3['getLogoSize'] = var6;
    var3['getDaysRemaining'] = var5;
    var5 = function shouldShowLimitedTimeBadge(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0022_ip = 96; continue _fun0022 }
case 56:
            var4 = _closure1_slot35;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var2 = _closure1_slot9;
            var1 = var3 <= var2;
case 96:
            return var1;
        }
    };
    var3['shouldShowLimitedTimeBadge'] = var5;
    var5 = function isProductNew(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var2 = _closure1_slot10;
            var1 = arg1;
            var3 = var2[var1];
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0023_ip = 97; continue _fun0023 }
case 5:
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
case 97:
            return var1;
        }
    };
    var3['isProductNew'] = var5;
    var3['isBundleProduct'] = var4;
    var4 = function getCollectiblesItemTypeForDisplay(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var6 = null;
            if(!(var6 == var1)) { _fun0024_ip = 98; continue _fun0024 }
case 99:
            var2 = undefined;
            return var2;
case 98:
            var7 = var1.type;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 14;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var8.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.BUNDLE;
            if(!(var7 !== var3)) { _fun0024_ip = 16; continue _fun0024 }
case 7:
            var7 = var1.items;
            var3 = var6 == var7;
            var1 = undefined;
            if(var3) { _fun0024_ip = 100; continue _fun0024 }
case 73:
            var3 = 0;
            var3 = var7[var3];
            var6 = var6 == var3;
            var1 = undefined;
            if(var6) { _fun0024_ip = 100; continue _fun0024 }
case 13:
            var1 = var3.type;
case 100:
            _fun0024_ip = 101; continue _fun0024;
case 16:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var1 = var2.BUNDLE;
case 101:
            return var1;
        }
    };
    var3['getCollectiblesItemTypeForDisplay'] = var4;
    var4 = function getCollectiblesPrice(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var2 = arg1;
            var1 = var2.invoicePreview;
            var6 = var2.selectedSkuId;
            var3 = var2.skusById;
            var4 = null;
            var5 = var4 == var1;
            var7 = undefined;
            if(var5) { _fun0025_ip = 29; continue _fun0025 }
case 96:
            var5 = var1.invoiceItems;
            var1 = var4 == var5;
            var7 = undefined;
            if(var1) { _fun0025_ip = 29; continue _fun0025 }
case 102:
            var1 = 0;
            var1 = var5[var1];
            var5 = var4 == var1;
            var7 = undefined;
            if(var5) { _fun0025_ip = 29; continue _fun0025 }
case 34:
            var7 = var1.unitPrice;
case 29:
            var1 = var4 != var7;
            var5 = undefined;
            if(!var1) { _fun0025_ip = 31; continue _fun0025 }
case 72:
            var1 = {};
            var8 = var7.amount;
            var1['amount'] = var8;
            var7 = var7.currency;
            var1['currency'] = var7;
            var5 = var1;
case 31:
            var1 = var5;
            if(!(var4 == var1)) { _fun0025_ip = 103; continue _fun0025 }
case 104:
            var1 = var5;
            if(!(var4 != var6)) { _fun0025_ip = 103; continue _fun0025 }
case 74:
            var3 = var3[var6];
            var6 = var4 == var3;
            var2 = undefined;
            if(var6) { _fun0025_ip = 105; continue _fun0025 }
case 106:
            var2 = var3.price;
case 105:
            var1 = var5;
            if(!(var4 != var2)) { _fun0025_ip = 103; continue _fun0025 }
case 107:
            var2 = {};
            var4 = var3.price;
            var4 = var4.amount;
            var2['amount'] = var4;
            var3 = var3.price;
            var3 = var3.currency;
            var2['currency'] = var3;
            var1 = var2;
case 103:
            return var1;
        }
    };
    var3['getCollectiblesPrice'] = var4;
    var4 = function shouldHideGiftingForCurrency(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0026_ip = 108; continue _fun0026 }
case 56:
            var3 = _closure1_slot18;
            var2 = var3.includes;
            var1 = var2.bind(var3)(var4);
case 108:
            return var1;
        }
    };
    var3['shouldHideGiftingForCurrency'] = var4;
    var4 = function getStrikeThroughPriceAmountForCollectiblesProduct(arg1, arg2, arg3) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var3 = arg1;
            var6 = arg3;
            var4 = _closure1_slot36;
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            if(var4) { _fun0027_ip = 109; continue _fun0027 }
case 5:
            var5 = _closure1_slot22;
            var7 = _closure1_slot13;
            var4 = arg2;
            if(var4) { _fun0027_ip = 10; continue _fun0027 }
case 6:
            if(var6) { _fun0027_ip = 110; continue _fun0027 }
case 111:
            var4 = var7.PREMIUM_TIER_2;
            _fun0027_ip = 26; continue _fun0027;
case 110:
            var4 = var7.MOBILE_PREMIUM_TIER_2;
case 26:
            _fun0027_ip = 112; continue _fun0027;
case 10:
            if(var6) { _fun0027_ip = 81; continue _fun0027 }
case 7:
            var6 = var7.DEFAULT;
            _fun0027_ip = 73; continue _fun0027;
case 81:
            var6 = var7.MOBILE;
case 73:
            var4 = var6;
case 112:
            var5 = var5.bind(var2)(var3, var4);
            var4 = null;
            var6 = var4 == var5;
            var4 = undefined;
            if(var6) { _fun0027_ip = 37; continue _fun0027 }
case 100:
            var4 = var5.amount;
case 37:
            return var4;
case 109:
            var1 = _closure1_slot21;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['getStrikeThroughPriceAmountForCollectiblesProduct'] = var4;
    var4 = function canActionOnProduct(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var2 = arg1;
            var5 = var2.product;
            var1 = var2.isPartiallyOwnedBundle;
            var3 = var2.isPurchased;
            if(var1) { _fun0028_ip = 22; continue _fun0028 }
case 23:
            var2 = _closure1_slot8;
            var4 = var2.ORB_PROFILE_BADGE;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0028_ip = 113; continue _fun0028 }
case 110:
            var2 = var5.skuId;
case 113:
            var2 = var4 === var2;
            if(!var2) { _fun0028_ip = 114; continue _fun0028 }
case 115:
            var2 = var3;
case 114:
            var1 = var2;
case 22:
            var1 = !var1;
            return var1;
        }
    };
    var3['canActionOnProduct'] = var4;
    var4 = function getProductTypeNameForLogging(arg1, arg2) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 14;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var4.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var1 !== var2)) { _fun0029_ip = 116; continue _fun0029 }
case 8:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var4.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var1 !== var2)) { _fun0029_ip = 117; continue _fun0029 }
case 41:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var4.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var1 !== var2)) { _fun0029_ip = 118; continue _fun0029 }
case 43:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var4.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_FRAME;
            if(!(var1 !== var2)) { _fun0029_ip = 119; continue _fun0029 }
case 120:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var4.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            if(!(var1 !== var2)) { _fun0029_ip = 121; continue _fun0029 }
case 122:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var4.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.EXTERNAL_SKU;
            if(!(var1 !== var2)) { _fun0029_ip = 123; continue _fun0029 }
case 124:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var4.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.VARIANTS_GROUP;
            if(!(var1 !== var2)) { _fun0029_ip = 125; continue _fun0029 }
case 42:
            var1 = 'unknown';
            return var1;
case 125:
            var1 = 'variants group';
            return var1;
case 123:
            var1 = _closure1_slot8;
            var2 = var1.FRACTIONAL_PREMIUM;
            var1 = '3-day nitro credit';
            if(!(var5 !== var2)) { _fun0029_ip = 126; continue _fun0029 }
case 127:
            var2 = _closure1_slot8;
            var4 = var2.FRACTIONAL_PREMIUM_1_DAY;
            var2 = '1-day nitro credit';
            if(!(var5 !== var4)) { _fun0029_ip = 128; continue _fun0029 }
case 129:
            var3 = _closure1_slot8;
            var4 = var3.ORB_PROFILE_BADGE;
            var3 = 'unknown';
            if(!(var5 === var4)) { _fun0029_ip = 130; continue _fun0029 }
case 131:
            var3 = 'orb profile badge';
case 130:
            var2 = var3;
case 128:
            var1 = var2;
case 126:
            return var1;
case 121:
            var1 = 'bundle';
            return var1;
case 119:
            var1 = 'profile frame';
            return var1;
case 118:
            var1 = 'nameplate';
            return var1;
case 117:
            var1 = 'profile effect';
            return var1;
case 116:
            var1 = 'avatar decoration';
            return var1;
        }
    };
    var3['getProductTypeNameForLogging'] = var4;
    var4 = function sortProductsByPrice(arg1, arg2, arg3) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var1 = _closure2_slot1;
                if(var1) { _fun0030_ip = 111; continue _fun0030 }
case 132:
                var5 = _closure1_slot19;
                var4 = _closure2_slot0;
                var3 = undefined;
                var1 = true;
                var1 = var5.bind(var3)(var8, var4, var1);
                _fun0030_ip = 35; continue _fun0030;
case 111:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 17;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.getProductOrbPrice;
                var3 = {};
                var3['product'] = var8;
                var8 = _closure2_slot0;
                var3['hasShopDiscount'] = var8;
                var1 = var4.bind(var5)(var3);
case 35:
                var3 = _closure2_slot1;
                if(var3) { _fun0030_ip = 60; continue _fun0030 }
case 133:
                var8 = _closure1_slot19;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = true;
                var5 = var8.bind(var4)(var7, var5, var3);
                _fun0030_ip = 134; continue _fun0030;
case 60:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getProductOrbPrice;
                var2 = {};
                var2['product'] = var7;
                var6 = _closure2_slot0;
                var2['hasShopDiscount'] = var6;
                var5 = var3.bind(var4)(var2);
case 134:
                var4 = null;
                var2 = var4 == var1;
                var6 = undefined;
                if(var2) { _fun0030_ip = 135; continue _fun0030 }
case 136:
                var6 = var1.amount;
case 135:
                var7 = var4 != var6;
                var1 = 0;
                if(!var7) { _fun0030_ip = 137; continue _fun0030 }
case 138:
                var1 = var6;
case 137:
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0030_ip = 91; continue _fun0030 }
case 139:
                var3 = var5.amount;
case 91:
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0030_ip = 140; continue _fun0030 }
case 80:
                var2 = var3;
case 140:
                var1 = var1 - var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sortProductsByPrice'] = var4;
    var4 = function sortProductsByUserDiscounts(arg1, arg2) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var3 = var5.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0031_ip = 97; continue _fun0031 }
case 132:
            var3 = var1.length;
            if(!(var4 !== var3)) { _fun0031_ip = 97; continue _fun0031 }
case 141:
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
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.eligibleOffers;
                    var2 = null;
                    var1 = var2 == var7;
                    var5 = undefined;
                    if(var1) { _fun0032_ip = 71; continue _fun0032 }
case 142:
                    var6 = var7.some;
                    var1 = function(arg1) {
                        var3 = _closure2_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var1);
case 71:
                    var1 = var2 != var5;
                    if(!var1) { _fun0032_ip = 110; continue _fun0032 }
case 24:
                    var1 = var5;
case 110:
                    var5 = arg2;
                    var6 = var5.eligibleOffers;
                    var5 = var2 == var6;
                    var3 = undefined;
                    if(var5) { _fun0032_ip = 143; continue _fun0032 }
case 22:
                    var5 = var6.some;
                    var4 = function(arg1) {
                        var3 = _closure2_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
case 143:
                    var2 = var2 != var3;
                    if(!var2) { _fun0032_ip = 144; continue _fun0032 }
case 35:
                    var2 = var3;
case 144:
                    var2 = var2 - 0;
                    var1 = var1 - 0;
                    var1 = var2 - var1;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var2;
case 97:
            return var1;
        }
    };
    var3['sortProductsByUserDiscounts'] = var4;
    var2 = function removeRewardProductsFilter(arg1) {
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