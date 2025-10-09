// app/modules/collectibles/CollectiblesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var21 = require;
    var3 = exports;
    var22 = dependencyMap;
    var _closure1_slot0 = var21;
    var _closure1_slot1 = var22;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot36;
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
            var7 = _closure1_slot36;
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
    var _closure1_slot35 = var1;
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
    var _closure1_slot36 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var22[var1];
    var1 = undefined;
    var4 = var21.bind(var1)(var4);
    var4 = var4.NO_PAYMENT_SOURCE;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var4 = var4.isAvatarDecorationRecord;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var4 = var4.isNameplateRecord;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var4 = var4.isProfileEffectRecord;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var4 = var4.AssetDisplayConfigRecord;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var5 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot7 = var5;
    var5 = var4.FALLBACK_RECOMMENDED_GIFT_SKU_IDS;
    var _closure1_slot8 = var5;
    var5 = var4.ORBS_COLLECTION_SKU_ID;
    var _closure1_slot9 = var5;
    var5 = var4.RECOMMENDED_GIFT_COUNT;
    var _closure1_slot10 = var5;
    var5 = var4.SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS;
    var _closure1_slot11 = var5;
    var4 = var4.SHOP_CARD_PER_PRODUCT_NEW_COLOR_BADGE_EXPIRY_SETTINGS;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var5 = var4.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot13 = var5;
    var5 = var4.Endpoints;
    var _closure1_slot14 = var5;
    var5 = var4.EntitlementTypes;
    var _closure1_slot15 = var5;
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot16 = var4;
    var4 = 7;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var23 = var4.CurrencyCodes;
    var19 = function isOrbsCollection(arg1) {
        var2 = _closure1_slot9;
        var1 = arg1;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot17 = var19;
    var18 = function getPriceForCollectiblesProduct(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg2;
            var3 = _closure1_slot16;
            var4 = arg3;
            if(var4) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var4 = var3.DEFAULT;
            _fun0004_ip = 33; continue _fun0004;
case 38:
            var4 = var3.PREMIUM_TIER_2;
case 33:
            _fun0004_ip = 4; continue _fun0004;
case 36:
            if(var2) { _fun0004_ip = 2; continue _fun0004 }
case 40:
            var2 = var3.MOBILE;
            _fun0004_ip = 41; continue _fun0004;
case 2:
            var2 = var3.MOBILE_PREMIUM_TIER_2;
case 41:
            var4 = var2;
case 4:
            var3 = _closure1_slot21;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1, var4);
            return var1;
        }
    };
    var _closure1_slot18 = var18;
    var17 = function getDefaultPriceSetAssignmentPurchaseType(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 9;
            var1 = var1[var6];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.isAndroid;
            var1 = var1.bind(var4)();
            if(var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            if(var1) { _fun0005_ip = 42; continue _fun0005 }
case 35:
            var4 = _closure1_slot16;
            if(var2) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var1 = var4.DEFAULT;
            _fun0005_ip = 46; continue _fun0005;
case 44:
            var1 = var4.PREMIUM_TIER_2;
case 46:
            _fun0005_ip = 47; continue _fun0005;
case 42:
            var3 = _closure1_slot16;
            if(var2) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var2 = var3.MOBILE;
            _fun0005_ip = 50; continue _fun0005;
case 48:
            var2 = var3.MOBILE_PREMIUM_TIER_2;
case 50:
            var1 = var2;
case 47:
            return var1;
        }
    };
    var _closure1_slot19 = var17;
    var16 = function getBundleItemsPriceSum(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var4 = var2.bundledProducts;
            var2 = null;
            if(!(var2 != var4)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var5 = _closure1_slot19;
            var3 = undefined;
            var2 = false;
            var2 = var5.bind(var3)(var2);
            var _closure2_slot0 = var2;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot21;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var2 = arg2;
                    var3 = var4.bind(var1)(var2, var3);
                    var2 = null;
                    var4 = var2 == var3;
                    if(var4) { _fun0007_ip = 43; continue _fun0007 }
case 53:
                    var1 = var3.amount;
case 43:
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0007_ip = 41; continue _fun0007 }
case 5:
                    var2 = var1;
case 41:
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                }
            };
            var1 = 0;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 51:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot20 = var16;
    var15 = function extractPriceByPurchaseTypes(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var2 = var1.prices;
            var1 = arg2;
            var1 = var2[var1];
            var3 = null;
            var4 = var3 != var1;
            var2 = null;
            if(!var4) { _fun0008_ip = 3; continue _fun0008 }
case 38:
            var2 = var1;
case 3:
            var4 = var3 != var2;
            var1 = null;
            if(!var4) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var4 = var2.countryPrices;
            var6 = var3 == var4;
            var2 = undefined;
            if(var6) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var4 = var4.prices;
            var3 = var3 == var4;
            var2 = undefined;
            if(var3) { _fun0008_ip = 56; continue _fun0008 }
case 58:
            var3 = 0;
            var2 = var4[var3];
case 56:
            var1 = var2;
case 54:
            return var1;
        }
    };
    var _closure1_slot21 = var15;
    var14 = {'original': 4294967295, 'discountPercentage': 4294967295};
    var _closure1_slot22 = var14;
    var13 = function getProductsFromCategories(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 11;
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
            if(!var1) { _fun0009_ip = 59; continue _fun0009 }
case 60:
            var1 = function(arg1) {
                var4 = arg1;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var5 = arg1;
                        var6 = arg2;
                        var _closure4_slot0 = var6;
                        var4 = null;
                        if(!(var4 != var6)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                        var8 = var6.type;
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var1 = 10;
                        var1 = var7[var1];
                        var7 = undefined;
                        var1 = var9.bind(var7)(var1);
                        var1 = var1.CollectiblesItemType;
                        var1 = var1.VARIANTS_GROUP;
                        if(!(var8 === var1)) { _fun0010_ip = 61; continue _fun0010 }
case 63:
                        var1 = var6.variants;
                        if(!(var4 == var1)) { _fun0010_ip = 64; continue _fun0010 }
case 61:
                        var1 = var5.push;
                        var1 = var1.bind(var5)(var6);
                        var1 = var5;
                        _fun0010_ip = 65; continue _fun0010;
case 64:
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var3 = 11;
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
                            var1[var3] = var4;
                            var3 = var2.eligibleOffers;
                            var2 = 'eligibleOffers';
                            var1[var2] = var3;
                            return var1;
                        };
                        var2 = var6.bind(var7)(var2);
                        var1 = var3.bind(var4)(var5, var2);
case 65:
                        return var1;
                    }
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var1.bind(var6)(var5);
case 59:
            var1 = 'storeListingId';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var13;
    var12 = function getItemRecordsFromPurchases(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 10;
            var1 = var1[var6];
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var2 !== var1)) { _fun0011_ip = 8; continue _fun0011 }
case 66:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var2 !== var1)) { _fun0011_ip = 67; continue _fun0011 }
case 9:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var2 !== var1)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
            var1 = new Array(0);
            return var1;
case 68:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 11;
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
            var1 = 'id';
            var1 = var2.bind(var5)(var6, var1);
            return var1;
case 67:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 11;
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
            var1 = 'id';
            var1 = var2.bind(var5)(var6, var1);
            return var1;
case 8:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 11;
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
            var1 = 'id';
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var12;
    var11 = function getItemRecordsFromCategories(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg2;
            var6 = _closure1_slot23;
            var3 = undefined;
            var5 = arg1;
            var1 = true;
            var9 = var6.bind(var3)(var5, var1);
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 10;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var2 !== var1)) { _fun0012_ip = 70; continue _fun0012 }
case 71:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var2 !== var1)) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var2 !== var1)) { _fun0012_ip = 74; continue _fun0012 }
case 75:
            var1 = new Array(0);
            return var1;
case 74:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 11;
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
            var1 = 'id';
            var1 = var2.bind(var5)(var6, var1);
            return var1;
case 72:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 11;
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
            var1 = 'id';
            var1 = var2.bind(var5)(var6, var1);
            return var1;
case 70:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 11;
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
            var1 = 'id';
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var11;
    var10 = function getAvatarDecorationsFromPurchases(arg1) {
        var4 = _closure1_slot24;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.AVATAR_DECORATION;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var10;
    var9 = function getAvatarDecorationsFromCategories(arg1) {
        var4 = _closure1_slot25;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.AVATAR_DECORATION;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var9;
    var8 = function getProfileEffectsFromPurchases(arg1) {
        var4 = _closure1_slot24;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 10;
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
    var7 = function getProfileEffectsFromCategories(arg1) {
        var4 = _closure1_slot25;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.PROFILE_EFFECT;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var7;
    var6 = function getNameplatesFromPurchases(arg1) {
        var4 = _closure1_slot24;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.NAMEPLATE;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var6;
    var5 = function getNameplatesFromCategories(arg1) {
        var4 = _closure1_slot25;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CollectiblesItemType;
        var2 = var1.NAMEPLATE;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var5;
    var4 = function isBundleProduct(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0013_ip = 76; continue _fun0013 }
case 37:
            var2 = var1.type;
case 76:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot32 = var4;
    var24 = var23.KZT;
    var20 = new Array(3);
    var20[0] = var24;
    var24 = var23.NGN;
    var20[1] = var24;
    var23 = var23.EGP;
    var20[2] = var23;
    var _closure1_slot33 = var20;
    var20 = function fillRecommendedGiftSkuIdsIfNeeded(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var4 = var3.length;
            var2 = _closure1_slot10;
            if(!(!(var4 < var2))) { _fun0014_ip = 76; continue _fun0014 }
case 39:
            return var3;
case 76:
            var5 = _closure1_slot8;
            var4 = var5.slice;
            var2 = _closure1_slot10;
            var1 = var3.length;
            var2 = var2 - var1;
            var1 = 0;
            var2 = var4.bind(var5)(var1, var2);
            var1 = var3.concat;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var _closure1_slot34 = var20;
    var20 = 13;
    var20 = var22[var20];
    var22 = var21.bind(var1)(var20);
    var21 = var22.fileFinishedImporting;
    var20 = 'modules/collectibles/CollectiblesUtils.tsx';
    var20 = var21.bind(var22)(var20);
    var20 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0015_ip = 29; continue _fun0015 }
case 32:
            var1 = var3.premiumType;
case 29:
            var1 = var2 != var1;
            return var1;
        }
    };
    var3['isPremiumCollectiblesProduct'] = var20;
    var3['isOrbsCollection'] = var19;
    var19 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot17;
            var1 = null;
            var5 = var1 == var4;
            var2 = undefined;
            var1 = undefined;
            if(var5) { _fun0016_ip = 77; continue _fun0016 }
case 31:
            var1 = var4.categorySkuId;
case 77:
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var3['isOrbsExclusiveCollectiblesProduct'] = var19;
    var19 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0017_ip = 29; continue _fun0017 }
case 32:
            var2 = var1.purchaseType;
case 29:
            var1 = _closure1_slot15;
            var1 = var1.PREMIUM_PURCHASE;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isPremiumCollectiblesPurchase'] = var19;
    var19 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var3 = var1.items;
            var2 = var3.find;
            var1 = _closure1_slot3;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0018_ip = 78; continue _fun0018 }
case 40:
            var1 = var2.asset;
case 78:
            return var1;
        }
    };
    var3['getAssetForAvatarDecorationProduct'] = var19;
    var3['getPriceForCollectiblesProduct'] = var18;
    var18 = function(arg1, arg2, arg3) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var6 = _closure1_slot18;
            var2 = undefined;
            var5 = arg1;
            var4 = arg2;
            var1 = arg3;
            var6 = var6.bind(var2)(var5, var4, var1);
            var7 = null;
            var4 = var7 == var6;
            var1 = '';
            if(var4) { _fun0019_ip = 49; continue _fun0019 }
case 40:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 8;
            var3 = var5[var3];
            var5 = var4.bind(var2)(var3);
            var4 = var5.formatPrice;
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0019_ip = 79; continue _fun0019 }
case 80:
            var3 = var6.amount;
case 79:
            var7 = var7 == var6;
            var2 = undefined;
            if(var7) { _fun0019_ip = 81; continue _fun0019 }
case 82:
            var2 = var6.currency;
case 81:
            var1 = var4.bind(var5)(var3, var2);
case 49:
            return var1;
        }
    };
    var3['getFormattedPriceForCollectiblesProduct'] = var18;
    var3['getDefaultPriceSetAssignmentPurchaseType'] = var17;
    var3['getBundleItemsPriceSum'] = var16;
    var3['extractPriceByPurchaseTypes'] = var15;
    var3['NoDiscount'] = var14;
    var14 = function(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot20;
            var4 = undefined;
            var6 = var2.bind(var4)(var5);
            var2 = 0;
            if(!(!(var6 <= var2))) { _fun0020_ip = 13; continue _fun0020 }
case 31:
            var3 = _closure1_slot21;
            var7 = _closure1_slot19;
            var2 = arg2;
            var2 = var7.bind(var4)(var2);
            var3 = var3.bind(var4)(var5, var2);
            var2 = null;
            if(!(var2 != var3)) { _fun0020_ip = 83; continue _fun0020 }
case 84:
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
            _fun0020_ip = 48; continue _fun0020;
case 83:
            var2 = _closure1_slot22;
case 48:
            return var2;
case 13:
            var1 = _closure1_slot22;
            return var1;
        }
    };
    var3['getProductDiscount'] = var14;
    var14 = function(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = _closure1_slot21;
            var1 = _closure1_slot16;
            var3 = var1.DEFAULT;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            var3 = null;
            var3 = var3 == var1;
            if(var3) { _fun0021_ip = 85; continue _fun0021 }
case 86:
            var2 = var1.amount;
case 85:
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        }
    };
    var3['isFreeCollectiblesProduct'] = var14;
    var3['getProductsFromCategories'] = var13;
    var3['getItemRecordsFromPurchases'] = var12;
    var3['getItemRecordsFromCategories'] = var11;
    var11 = function(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var11 = arg1;
            var5 = arg2;
            var3 = null;
            if(!(var3 != var11)) { _fun0022_ip = 12; continue _fun0022 }
case 87:
            var12 = '';
            if(!(var12 !== var11)) { _fun0022_ip = 12; continue _fun0022 }
case 88:
            var1 = global;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var10 = var2.CDN_HOST;
            var7 = var2.API_ENDPOINT;
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var6 = 12;
            var8 = var15[var6];
            var4 = undefined;
            var9 = var14.bind(var4)(var8);
            var8 = var9.getBestMediaProxySize;
            var13 = var5.size;
            var6 = var15[var6];
            var14 = var14.bind(var4)(var6);
            var6 = var14.getDevicePixelRatio;
            var6 = var6.bind(var14)();
            var6 = var13 * var6;
            var9 = var8.bind(var9)(var6);
            var6 = var3 == var5;
            if(var6) { _fun0022_ip = 75; continue _fun0022 }
case 89:
            var4 = var5.format;
case 75:
            var5 = var3 != var4;
            var8 = 'png';
            if(!var5) { _fun0022_ip = 90; continue _fun0022 }
case 91:
            var8 = var4;
case 90:
            if(!(var3 == var10)) { _fun0022_ip = 72; continue _fun0022 }
case 92:
            var5 = _closure1_slot14;
            var4 = var5.APPLICATION_ASSET;
            var3 = _closure1_slot13;
            var22 = var4.bind(var5)(var3, var11, var8);
            var3 = var1.location;
            var24 = var3.protocol;
            var3 = var1.HermesInternal;
            var4 = var3.concat;
            var21 = '?size=';
            var25 = var12;
            var23 = var7;
            var20 = var9;
            var3 = var25[var4](var24, var23, var22, var21, var20, var19);
            return var3;
case 72:
            var22 = _closure1_slot13;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var25 = 'https://';
            var23 = '/app-assets/';
            var21 = '/';
            var19 = '.';
            var17 = '?size=';
            var24 = var10;
            var20 = var11;
            var18 = var8;
            var16 = var9;
            var1 = var25[var6](var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
            return var1;
case 12:
            var1 = '';
            return var1;
        }
    };
    var3['getCollectiblesAssetURL'] = var11;
    var11 = function(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 != var4;
            var1 = undefined;
            if(!var2) { _fun0023_ip = 93; continue _fun0023 }
case 32:
            var3 = _closure1_slot6;
            var2 = var3.fromServer;
            var1 = var2.bind(var3)(var4);
case 93:
            return var1;
        }
    };
    var3['getAssetDisplayConfig'] = var11;
    var3['getAvatarDecorationsFromPurchases'] = var10;
    var3['getAvatarDecorationsFromCategories'] = var9;
    var9 = function(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 11;
        var2 = var4[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.uniqBy;
        var5 = _closure1_slot26;
        var2 = arg1;
        var9 = var5.bind(var7)(var2);
        var2 = new Array(0);
        var8 = 0;
        var10 = var2;
        var8 = arraySpread(var10, var9, var8);
        var6 = _closure1_slot27;
        var1 = arg2;
        var9 = var6.bind(var7)(var1);
        var10 = var2;
        var1 = arraySpread(var10, var9, var8);
        var1 = 'id';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getAvatarDecorations'] = var9;
    var3['getProfileEffectsFromPurchases'] = var8;
    var3['getProfileEffectsFromCategories'] = var7;
    var7 = function(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 11;
        var2 = var4[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.uniqBy;
        var5 = _closure1_slot28;
        var2 = arg1;
        var9 = var5.bind(var7)(var2);
        var2 = new Array(0);
        var8 = 0;
        var10 = var2;
        var8 = arraySpread(var10, var9, var8);
        var6 = _closure1_slot29;
        var1 = arg2;
        var9 = var6.bind(var7)(var1);
        var10 = var2;
        var1 = arraySpread(var10, var9, var8);
        var1 = 'id';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getProfileEffects'] = var7;
    var7 = function(arg1, arg2) {
        var4 = _closure1_slot28;
        var5 = undefined;
        var3 = arg2;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot0 = var3;
        var4 = _closure1_slot29;
        var2 = arg1;
        var4 = var4.bind(var5)(var2);
        var2 = var4.filter;
        var1 = function(arg1) {
            var2 = arg1;
            var2 = var2.id;
            var _closure3_slot0 = var2;
            var3 = _closure2_slot0;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
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
    var3['groupProfileEffects'] = var7;
    var3['getNameplatesFromPurchases'] = var6;
    var3['getNameplatesFromCategories'] = var5;
    var5 = function(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 11;
        var2 = var4[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.uniqBy;
        var5 = _closure1_slot30;
        var2 = arg1;
        var9 = var5.bind(var7)(var2);
        var2 = new Array(0);
        var8 = 0;
        var10 = var2;
        var8 = arraySpread(var10, var9, var8);
        var6 = _closure1_slot31;
        var1 = arg2;
        var9 = var6.bind(var7)(var1);
        var10 = var2;
        var1 = arraySpread(var10, var9, var8);
        var1 = 'id';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getNameplates'] = var5;
    var5 = function(arg1) {
        var1 = arg1;
        var2 = var1.applicationId;
        var1 = _closure1_slot13;
        var1 = var2 === var1;
        return var1;
    };
    var3['isCollectiblesGiftCode'] = var5;
    var5 = 3.8;
    var3['LOGO_ASPECT_RATIO'] = var5;
    var5 = function(arg1) {
        var2 = 3.8;
        var1 = arg1;
        var1 = var2 * var1;
        return var1;
    };
    var3['getLogoSize'] = var5;
    var5 = function(arg1) {
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
    var3['getDaysRemaining'] = var5;
    var5 = function(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var2 = _closure1_slot11;
            var1 = arg1;
            var3 = var2[var1];
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0024_ip = 94; continue _fun0024 }
case 31:
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
case 94:
            return var1;
        }
    };
    var3['isProductNew'] = var5;
    var5 = function(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var2 = _closure1_slot12;
            var1 = arg1;
            var3 = var2[var1];
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0025_ip = 94; continue _fun0025 }
case 31:
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
case 94:
            return var1;
        }
    };
    var3['hasNewColor'] = var5;
    var3['isBundleProduct'] = var4;
    var4 = function(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var6 = null;
            if(!(var6 == var1)) { _fun0026_ip = 95; continue _fun0026 }
case 96:
            var2 = undefined;
            return var2;
case 95:
            var7 = var1.type;
            var8 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = 10;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var8.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.BUNDLE;
            if(!(var7 !== var3)) { _fun0026_ip = 11; continue _fun0026 }
case 97:
            var7 = var1.items;
            var3 = var6 == var7;
            var1 = undefined;
            if(var3) { _fun0026_ip = 81; continue _fun0026 }
case 61:
            var3 = 0;
            var3 = var7[var3];
            var6 = var6 == var3;
            var1 = undefined;
            if(var6) { _fun0026_ip = 81; continue _fun0026 }
case 64:
            var1 = var3.type;
case 81:
            _fun0026_ip = 68; continue _fun0026;
case 11:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var1 = var2.BUNDLE;
case 68:
            return var1;
        }
    };
    var3['getCollectiblesItemTypeForDisplay'] = var4;
    var4 = function(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var5 = arg1;
            var7 = var5.selectedSkuPricePreview;
            var1 = var5.paymentSourceId;
            var3 = var5.selectedSkuId;
            var4 = var5.skuPricePreviewsById;
            var2 = var5.skusById;
            var5 = var5.formatPrice;
            var6 = null;
            if(!(var6 == var7)) { _fun0027_ip = 98; continue _fun0027 }
case 84:
            var8 = var6 != var1;
            var1 = null;
            if(!var8) { _fun0027_ip = 11; continue _fun0027 }
case 99:
            var8 = var6 != var3;
            var1 = null;
            if(!var8) { _fun0027_ip = 11; continue _fun0027 }
case 58:
            var9 = var4[var3];
            var8 = var6 == var9;
            var4 = undefined;
            if(var8) { _fun0027_ip = 42; continue _fun0027 }
case 100:
            var8 = _closure1_slot2;
            var4 = var9[var8];
case 42:
            var1 = var4;
case 11:
            var7 = var1;
case 98:
            var8 = var6 == var7;
            var4 = undefined;
            var1 = undefined;
            if(var8) { _fun0027_ip = 101; continue _fun0027 }
case 13:
            var8 = var7.invoice_items;
            var7 = var6 == var8;
            var1 = undefined;
            if(var7) { _fun0027_ip = 101; continue _fun0027 }
case 68:
            var7 = 0;
            var7 = var8[var7];
            var8 = var6 == var7;
            var1 = undefined;
            if(var8) { _fun0027_ip = 101; continue _fun0027 }
case 102:
            var1 = var7.unit_price;
case 101:
            var8 = var6 != var1;
            var7 = undefined;
            if(!var8) { _fun0027_ip = 103; continue _fun0027 }
case 104:
            var8 = var1.amount;
            var1 = var1.currency;
            var7 = var5.bind(var4)(var8, var1);
case 103:
            var1 = var7;
            if(!(var6 == var1)) { _fun0027_ip = 105; continue _fun0027 }
case 106:
            var1 = var7;
            if(!(var6 != var3)) { _fun0027_ip = 105; continue _fun0027 }
case 107:
            var2 = var2[var3];
            var8 = var6 == var2;
            var3 = undefined;
            if(var8) { _fun0027_ip = 108; continue _fun0027 }
case 109:
            var3 = var2.price;
case 108:
            var1 = var7;
            if(!(var6 != var3)) { _fun0027_ip = 105; continue _fun0027 }
case 110:
            var3 = var2.price;
            var3 = var3.amount;
            var2 = var2.price;
            var2 = var2.currency;
            var1 = var5.bind(var4)(var3, var2);
case 105:
            return var1;
        }
    };
    var3['getCollectiblesPriceForDisplay'] = var4;
    var4 = function(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var4 = arg1;
            var2 = !var4;
            var1 = !var2;
            if(var2) { _fun0028_ip = 77; continue _fun0028 }
case 111:
            var3 = _closure1_slot33;
            var2 = var3.includes;
            var1 = var2.bind(var3)(var4);
case 77:
            return var1;
        }
    };
    var3['shouldHideGiftingForCurrency'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var3 = arg1;
            var4 = arg3;
            var5 = _closure1_slot32;
            var2 = undefined;
            var5 = var5.bind(var2)(var3);
            if(var5) { _fun0029_ip = 112; continue _fun0029 }
case 31:
            var6 = _closure1_slot16;
            var5 = arg2;
            if(var5) { _fun0029_ip = 41; continue _fun0029 }
case 33:
            if(var4) { _fun0029_ip = 78; continue _fun0029 }
case 113:
            var5 = var6.PREMIUM_TIER_2;
            _fun0029_ip = 66; continue _fun0029;
case 78:
            var5 = var6.MOBILE_PREMIUM_TIER_2;
case 66:
            _fun0029_ip = 114; continue _fun0029;
case 41:
            if(var4) { _fun0029_ip = 115; continue _fun0029 }
case 4:
            var4 = var6.DEFAULT;
            _fun0029_ip = 58; continue _fun0029;
case 115:
            var4 = var6.MOBILE;
case 58:
            var5 = var4;
case 114:
            var4 = _closure1_slot21;
            var5 = var4.bind(var2)(var3, var5);
            var4 = null;
            var6 = var4 == var5;
            var4 = undefined;
            if(var6) { _fun0029_ip = 98; continue _fun0029 }
case 42:
            var4 = var5.amount;
case 98:
            return var4;
case 112:
            var1 = _closure1_slot20;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['getStrikeThroughPriceAmountForCollectiblesProduct'] = var4;
    var4 = function(arg1, arg2) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var12 = arg2;
            var3 = new Array(0);
            var5 = _closure1_slot35;
            var2 = undefined;
            var4 = arg1;
            var11 = var5.bind(var2)(var4);
            var5 = var11.bind(var2)();
            var4 = var5.done;
            var10 = null;
            var9 = var5;
            var8 = undefined;
            var7 = undefined;
            var6 = undefined;
            var5 = undefined;
            if(var4) { _fun0030_ip = 116; continue _fun0030 }
case 41:
            var4 = var9.value;
            var15 = var4.heroRanking;
            var14 = var6;
            var13 = var5;
            if(!(var10 != var15)) { _fun0030_ip = 117; continue _fun0030 }
case 80:
            var4 = _closure1_slot35;
            var16 = var4.bind(var2)(var15);
            var17 = var16.bind(var2)();
            var4 = var17.done;
            var15 = var17;
            var8 = var15;
            var7 = var16;
            var14 = var6;
            var13 = var5;
            if(var4) { _fun0030_ip = 117; continue _fun0030 }
case 118:
            var18 = var15.value;
            var4 = var12.get;
            var17 = var4.bind(var12)(var18);
            if(!(var10 != var17)) { _fun0030_ip = 119; continue _fun0030 }
case 75:
            var4 = _closure1_slot32;
            var4 = var4.bind(var2)(var17);
            if(var4) { _fun0030_ip = 119; continue _fun0030 }
case 102:
            var4 = var3.push;
            var4 = var4.bind(var3)(var18);
            var19 = var3.length;
            var4 = _closure1_slot10;
            if(!(var19 >= var4)) { _fun0030_ip = 119; continue _fun0030 }
case 14:
            return var3;
case 119:
            var19 = var16.bind(var2)();
            var4 = var19.done;
            var15 = var19;
            var8 = var15;
            var7 = var16;
            var14 = var18;
            var13 = var17;
            if(!var4) { _fun0030_ip = 118; continue _fun0030 }
case 117:
            var15 = var11.bind(var2)();
            var4 = var15.done;
            var6 = var14;
            var5 = var13;
            var9 = var15;
            if(!var4) { _fun0030_ip = 41; continue _fun0030 }
case 116:
            var1 = _closure1_slot34;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['getRecommendedGiftSkuIds'] = var4;
    var4 = function(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var2 = arg1;
            var5 = var2.product;
            var1 = var2.isPartiallyOwnedBundle;
            var3 = var2.isPurchased;
            if(var1) { _fun0031_ip = 30; continue _fun0031 }
case 120:
            var2 = _closure1_slot7;
            var4 = var2.ORB_PROFILE_BADGE;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0031_ip = 57; continue _fun0031 }
case 121:
            var2 = var5.skuId;
case 57:
            var2 = var4 === var2;
            if(!var2) { _fun0031_ip = 63; continue _fun0031 }
case 7:
            var2 = var3;
case 63:
            var1 = var2;
case 30:
            var1 = !var1;
            return var1;
        }
    };
    var3['canActionOnProduct'] = var4;
    var4 = function(arg1, arg2) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 10;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var1 !== var3)) { _fun0032_ip = 122; continue _fun0032 }
case 66:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var1 !== var3)) { _fun0032_ip = 123; continue _fun0032 }
case 9:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var1 !== var3)) { _fun0032_ip = 124; continue _fun0032 }
case 125:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            if(!(var1 !== var3)) { _fun0032_ip = 126; continue _fun0032 }
case 15:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.EXTERNAL_SKU;
            if(!(var1 !== var3)) { _fun0032_ip = 127; continue _fun0032 }
case 128:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.VARIANTS_GROUP;
            if(!(var1 !== var3)) { _fun0032_ip = 129; continue _fun0032 }
case 67:
            var1 = 'unknown';
            return var1;
case 129:
            var1 = 'variants group';
            return var1;
case 127:
            var1 = _closure1_slot7;
            var3 = var1.FRACTIONAL_PREMIUM;
            var1 = '3-day nitro credit';
            if(!(var4 !== var3)) { _fun0032_ip = 130; continue _fun0032 }
case 131:
            var2 = _closure1_slot7;
            var3 = var2.ORB_PROFILE_BADGE;
            var2 = 'unknown';
            if(!(var4 === var3)) { _fun0032_ip = 132; continue _fun0032 }
case 133:
            var2 = 'orb profile badge';
case 132:
            var1 = var2;
case 130:
            return var1;
case 126:
            var1 = 'bundle';
            return var1;
case 124:
            var1 = 'nameplate';
            return var1;
case 123:
            var1 = 'profile effect';
            return var1;
case 122:
            var1 = 'avatar decoration';
            return var1;
        }
    };
    var3['getProductTypeNameForLogging'] = var4;
    var4 = function(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var6 = _closure1_slot18;
                var5 = _closure2_slot0;
                var3 = undefined;
                var1 = arg1;
                var4 = true;
                var1 = var6.bind(var3)(var1, var5, var4);
                var2 = arg2;
                var5 = var6.bind(var3)(var2, var5, var4);
                var4 = null;
                var2 = var4 == var1;
                var6 = undefined;
                if(var2) { _fun0033_ip = 4; continue _fun0033 }
case 5:
                var6 = var1.amount;
case 4:
                var7 = var4 != var6;
                var1 = 0;
                if(!var7) { _fun0033_ip = 30; continue _fun0033 }
case 63:
                var1 = var6;
case 30:
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0033_ip = 100; continue _fun0033 }
case 134:
                var3 = var5.amount;
case 100:
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0033_ip = 81; continue _fun0033 }
case 46:
                var2 = var3;
case 81:
                var1 = var1 - var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sortProductsByPrice'] = var4;
    var2 = function(arg1, arg2) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var3 = var5.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0034_ip = 94; continue _fun0034 }
case 39:
            var3 = var1.length;
            if(!(var4 !== var3)) { _fun0034_ip = 94; continue _fun0034 }
case 34:
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
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.eligibleOffers;
                    var2 = null;
                    var1 = var2 == var7;
                    var5 = undefined;
                    if(var1) { _fun0035_ip = 40; continue _fun0035 }
case 135:
                    var6 = var7.some;
                    var1 = function(arg1) {
                        var3 = _closure2_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var1);
case 40:
                    var1 = var2 != var5;
                    if(!var1) { _fun0035_ip = 121; continue _fun0035 }
case 136:
                    var1 = var5;
case 121:
                    var5 = arg2;
                    var6 = var5.eligibleOffers;
                    var5 = var2 == var6;
                    var3 = undefined;
                    if(var5) { _fun0035_ip = 100; continue _fun0035 }
case 137:
                    var5 = var6.some;
                    var4 = function(arg1) {
                        var3 = _closure2_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
case 100:
                    var2 = var2 != var3;
                    if(!var2) { _fun0035_ip = 138; continue _fun0035 }
case 64:
                    var2 = var3;
case 138:
                    var2 = var2 - 0;
                    var1 = var1 - 0;
                    var1 = var2 - var1;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var2;
case 94:
            return var1;
        }
    };
    var3['sortProductsByUserDiscounts'] = var2;
    return var1;
})();