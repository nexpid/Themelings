// app/modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var1 = function withStorefrontPrices(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = arg2;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.getProductOrbPrice;
            var5 = {};
            var5['product'] = var1;
            var8 = arg3;
            var5['hasShopDiscount'] = var8;
            var6 = var6.bind(var7)(var5);
            var5 = null;
            if(!(var5 == var6)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var7 = var1.skuId;
            var6 = function getStorefrontPricesForSkuId(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg2;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var2 = _closure1_slot13;
                    var8 = undefined;
                    var7 = var2.bind(var8)(var3);
                    var3 = var7.bind(var8)();
                    var2 = var3.done;
                    var6 = global;
                    var5 = 0;
                    var4 = var3;
                    if(var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var2 = var4.value;
                    var10 = var2.skus;
                    var3 = var10.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var3.bind(var10)(var2);
                    if(!(var1 != var2)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var11 = var6.Object;
                    var10 = var11.keys;
                    var3 = var2.prices;
                    var3 = var10.bind(var11)(var3);
                    var3 = var3.length;
                    if(!(!(var3 > var5))) { _fun0005_ip = 44; continue _fun0005 }
case 42:
                    var10 = var7.bind(var8)();
                    var3 = var10.done;
                    var4 = var10;
                    if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 45:
                    _fun0005_ip = 41; continue _fun0005;
case 44:
                    var2 = var2.prices;
                    return var2;
case 40:
                    return var1;
case 38:
                    return var1;
                }
            };
            var8 = var6.bind(var3)(var7, var10);
            if(!(var5 != var8)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var7 = var5 == var10;
            var6 = undefined;
            if(var7) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var9 = var10.flatMap;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.skus;
                return var1;
            };
            var9 = var9.bind(var10)(var7);
            var7 = var9.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.skuId;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var7.bind(var9)(var4);
case 48:
            var4 = _closure1_slot9;
            var2 = {};
            var7 = var1.storeListingId;
            var2['storeListingId'] = var7;
            var7 = var1.skuId;
            var2['skuId'] = var7;
            var7 = var1.name;
            var2['name'] = var7;
            var7 = var1.summary;
            var2['summary'] = var7;
            var7 = var1.styles;
            var2['styles'] = var7;
            var7 = var1.type;
            var2['type'] = var7;
            var7 = var1.premiumType;
            var2['premiumType'] = var7;
            var7 = var1.items;
            var2['items'] = var7;
            var7 = var1.categorySkuId;
            var2['categorySkuId'] = var7;
            var7 = var1.isCategoryReward;
            var2['isCategoryReward'] = var7;
            var7 = {};
            var11 = var1.prices;
            var12 = var7;
            var9 = copyDataProperties(var12, var11);
            var12 = var7;
            var11 = var8;
            var8 = copyDataProperties(var12, var11);
            var2['prices'] = var7;
            var7 = var1.bundledProducts;
            var2['bundledProducts'] = var7;
            var7 = var1.previewAssets;
            var2['previewAssets'] = var7;
            var7 = var5 == var6;
            var3 = undefined;
            if(var7) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var3 = var6.googleSkuIds;
case 50:
            if(!(var5 == var3)) { _fun0004_ip = 52; continue _fun0004 }
case 8:
            var3 = var1.googleSkuIds;
case 52:
            var2['googleSkuIds'] = var3;
            var3 = var1.variants;
            var2['variants'] = var3;
            var3 = var1.eligibleOffers;
            var2['eligibleOffers'] = var3;
            var3 = var1.badgeOverride;
            var2['badgeOverride'] = var3;
            var3 = var1.hideBadge;
            var2['hideBadge'] = var3;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var13 = var3;
            var12 = var2;
            var2 = new var13[var4](var12, var11);
            var2 = var2 instanceof Object ? var2 : var3;
            return var2;
case 46:
            return var1;
case 36:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var5 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot5 = var4;
    var4 = 3;
    var5 = var7[var4];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CollectiblesMobileShopScreen;
    var _closure1_slot10 = var5;
    var5 = 8;
    var8 = var7[var5];
    var8 = var9.bind(var1)(var8);
    var8 = var8.Millis;
    var10 = var8.SECOND;
    var8 = 10;
    var10 = var8 * var10;
    var _closure1_slot11 = var10;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.Millis;
    var5 = var5.SECOND;
    var5 = var8 * var5;
    var _closure1_slot12 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL'] = var4;
    var2 = function usePopularOrbShopProducts(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabled;
            var _closure2_slot0 = var2;
            var10 = _closure1_slot5;
            var3 = var10.useState;
            var1 = new Array(0);
            var1 = var3.bind(var10)(var1);
            var9 = _closure1_slot4;
            var11 = undefined;
            var7 = 2;
            var4 = var9.bind(var11)(var1, var7);
            var3 = 0;
            var1 = var4[var3];
            var _closure2_slot1 = var1;
            var5 = 1;
            var4 = var4[var5];
            var _closure2_slot2 = var4;
            var4 = var10.useState;
            var13 = false;
            var4 = var4.bind(var10)(var13);
            var4 = var9.bind(var11)(var4, var7);
            var8 = var4[var3];
            var _closure2_slot3 = var8;
            var4 = var4[var5];
            var _closure2_slot4 = var4;
            var4 = var10.useState;
            var4 = var4.bind(var10)(var13);
            var4 = var9.bind(var11)(var4, var7);
            var3 = var4[var3];
            var4 = var4[var5];
            var _closure2_slot5 = var4;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = 10;
            var4 = var14[var15];
            var13 = var9.bind(var11)(var4);
            var7 = var13.useStateFromStores;
            var4 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var13)(var5, var4);
            var16 = _closure1_slot1;
            var4 = 11;
            var4 = var14[var4];
            var5 = var16.bind(var11)(var4);
            var4 = var5.canUseShopDiscounts;
            var7 = var4.bind(var5)(var7);
            var _closure2_slot6 = var7;
            var13 = var10.useEffect;
            var5 = new Array(1);
            var5[0] = var2;
            var4 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = function _fetchSearchResults() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                                    var5 = undefined;
                                    var7 = undefined;
                                    var3 = undefined;
case 55: // try_start_0 // try_start_1
                                    var11 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var2 = 12;
                                    var2 = var12[var2];
                                    var9 = var11.bind(var5)(var2);
                                    var8 = var9.search;
                                    var6 = {};
                                    var2 = new Array(0);
                                    var6['item_types'] = var2;
                                    var2 = new Array(0);
                                    var6['colors'] = var2;
                                    var2 = new Array(0);
                                    var6['themes'] = var2;
                                    var4 = true;
                                    var6['orbs_eligible'] = var4;
                                    var2 = 13;
                                    var2 = var12[var2];
                                    var2 = var11.bind(var5)(var2);
                                    var2 = var2.CollectibleSearchCurrencyFilter;
                                    var2 = var2.ORBS;
                                    var6['currency'] = var2;
                                    var2 = 0;
                                    var6['offset'] = var2;
                                    var2 = 10;
                                    var6['limit'] = var2;
                                    var2 = 14;
                                    var2 = var12[var2];
                                    var2 = var11.bind(var5)(var2);
                                    var2 = var2.CollectibleSearchSortType;
                                    var2 = var2.POPULARITY;
                                    var6['sort_type'] = var2;
                                    var2 = 15;
                                    var2 = var12[var2];
                                    var2 = var11.bind(var5)(var2);
                                    var2 = var2.CollectibleSearchSortDirection;
                                    var2 = var2.DESC;
                                    var6['sort_direction'] = var2;
                                    var2 = {};
                                    var10 = _closure1_slot11;
                                    var2['timeout'] = var10;
                                    var2 = var8.bind(var9)(var6, var2);
                                    SaveGenerator(address=210);
case 56:
                                    return var2;
case 57:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                    if(var6) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                                    var3 = var2;
                                    var6 = _closure3_slot0;
                                    if(var6) { _fun0008_ip = 24; continue _fun0008 }
case 60:
                                    var6 = _closure2_slot2;
                                    var8 = var3.skus;
                                    var7 = var8;
                                    var3 = null;
                                    if(!(var3 == var8)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                                    var3 = new Array(0);
                                    _fun0008_ip = 63; continue _fun0008;
case 61:
                                    var3 = var7;
case 63:
                                    var3 = var6.bind(var5)(var3);
case 24: // try_end0
                                    _fun0008_ip = 64; continue _fun0008;
case 58: // try_end1
                                    var3 = _closure3_slot0;
                                    if(var3) { _fun0008_ip = 25; continue _fun0008 }
case 65:
                                    var3 = _closure2_slot4;
                                    var3 = var3.bind(var5)(var4);
case 25:
                                    return var2;
case 66: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register=1);
                                    var2 = _closure3_slot0;
                                    if(var2) { _fun0008_ip = 64; continue _fun0008 }
case 67:
                                    var3 = _closure2_slot2;
                                    var2 = new Array(0);
                                    var2 = var3.bind(var5)(var2);
case 64: // try_end2
                                    var2 = _closure3_slot0;
                                    if(var2) { _fun0008_ip = 68; continue _fun0008 }
case 26:
                                    var3 = _closure2_slot4;
                                    var2 = true;
                                    var2 = var3.bind(var5)(var2);
case 68:
                                    return var5;
case 69: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register=1);
                                    var3 = _closure3_slot0;
                                    if(var3) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                                    var4 = _closure2_slot4;
                                    var3 = true;
                                    var3 = var4.bind(var5)(var3);
case 70:
                                    throw var2;
case 53:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure3_slot1 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot1 = var2;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0007_ip = 72; continue _fun0007 }
case 31:
                    var4 = _closure2_slot2;
                    var5 = undefined;
                    var3 = new Array(0);
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot4;
                    var3 = false;
                    var3 = var4.bind(var5)(var3);
                    var3 = undefined;
                    return var3;
case 72:
                    var4 = false;
                    var _closure3_slot0 = var4;
                    var2 = _closure2_slot4;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var4);
                    var2 = function fetchSearchResults() {
                        var1 = undefined;
                        var4 = _closure3_slot1;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = var2.bind(var3)();
                    var1 = function() {
                        var1 = true;
                        _closure3_slot0 = var1;
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var13.bind(var10)(var4, var5);
            var13 = var10.useEffect;
            var5 = new Array(3);
            var5[0] = var2;
            var5[1] = var8;
            var5[2] = var1;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0009_ip = 75; continue _fun0009 }
case 73:
                    var5 = _closure2_slot5;
                    var3 = undefined;
                    var4 = false;
                    var4 = var5.bind(var3)(var4);
                    return var3;
case 75:
                    var3 = _closure2_slot5;
                    var5 = undefined;
                    var2 = false;
                    var2 = var3.bind(var5)(var2);
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = _closure1_slot12;
                    var2 = function() {
                        var3 = _closure2_slot5;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var13.bind(var10)(var4, var5);
            var4 = 16;
            var4 = var14[var4];
            var5 = var9.bind(var11)(var4);
            var4 = var5.useFetchCollectiblesProducts;
            var4 = var4.bind(var5)(var1);
            var17 = var10.useEffect;
            var13 = new Array(1);
            var13[0] = var1;
            var5 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.length;
                    var1 = 0;
                    if(!(var1 !== var2)) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.maybeFetchProductsBySkuIds;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var1['skuIds'] = var4;
                    var1 = var2.bind(var3)(var1);
case 76:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var17.bind(var10)(var5, var13);
            var5 = 18;
            var5 = var14[var5];
            var17 = var9.bind(var11)(var5);
            var13 = var17.useGetOrFetchStorefrontPricesForSkuIds;
            var5 = {};
            var5['skuIds'] = var1;
            var5 = var13.bind(var17)(var5);
            var5 = var14[var15];
            var19 = var9.bind(var11)(var5);
            var18 = var19.useStateFromStoresArray;
            var5 = _closure1_slot6;
            var17 = new Array(1);
            var17[0] = var5;
            var13 = function() {
                var3 = _closure2_slot1;
                var2 = var3.map;
                var1 = function(arg1) {
                    var3 = _closure1_slot6;
                    var2 = var3.getProductsForSku;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var18.bind(var19)(var17, var13);
            var _closure2_slot7 = var13;
            var15 = var14[var15];
            var18 = var9.bind(var11)(var15);
            var17 = var18.useStateFromStoresArray;
            var15 = new Array(1);
            var15[0] = var5;
            var5 = function() {
                var3 = _closure2_slot1;
                var2 = var3.map;
                var1 = function(arg1) {
                    var3 = _closure1_slot6;
                    var2 = var3.getFetchStateForSku;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var17.bind(var18)(var15, var5);
            var _closure2_slot8 = var5;
            var15 = 19;
            var15 = var14[var15];
            var15 = var16.bind(var11)(var15);
            var17 = var15.bind(var11)();
            var _closure2_slot9 = var17;
            var16 = var10.useMemo;
            var15 = new Array(4);
            var15[0] = var17;
            var15[1] = var1;
            var15[2] = var13;
            var15[3] = var7;
            var13 = function() {
                var3 = _closure2_slot9;
                var2 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    var5 = _closure1_slot15;
                    var3 = _closure2_slot7;
                    var2 = arg2;
                    var4 = var3[var2];
                    var3 = _closure2_slot6;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var5.bind(var2)(var1, var4, var3);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var16.bind(var10)(var13, var15);
            var _closure2_slot10 = var16;
            var15 = var10.useMemo;
            var13 = new Array(3);
            var13[0] = var1;
            var13[1] = var5;
            var13[2] = var7;
            var5 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = var1.length;
                    var1 = 0;
                    var1 = var1 !== var3;
                    if(!var1) { _fun0011_ip = 78; continue _fun0011 }
case 39:
                    var4 = _closure2_slot1;
                    var3 = var4.some;
                    var2 = function(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var4 = _closure1_slot8;
                            var3 = var4.getProduct;
                            var2 = arg1;
                            var5 = var3.bind(var4)(var2);
                            var3 = null;
                            if(!(var3 != var5)) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.getProductOrbPrice;
                            var1 = {};
                            var1['product'] = var5;
                            var5 = _closure2_slot6;
                            var1['hasShopDiscount'] = var5;
                            var1 = var2.bind(var4)(var1);
                            if(!(var3 == var1)) { _fun0012_ip = 81; continue _fun0012 }
case 79:
                            var2 = _closure2_slot8;
                            var1 = arg2;
                            var2 = var2[var1];
                            var1 = 'loading';
                            var1 = var1 === var2;
                            if(var1) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                            var1 = var3 == var2;
case 82:
                            return var1;
case 81:
                            var1 = false;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 78:
                    return var1;
                }
            };
            var5 = var15.bind(var10)(var5, var13);
            var15 = var10.useMemo;
            var13 = new Array(2);
            var13[0] = var16;
            var13[1] = var7;
            var7 = function() {
                var3 = _closure2_slot10;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getProductOrbPrice;
                    var1 = {};
                    var4 = arg1;
                    var1['product'] = var4;
                    var4 = _closure2_slot6;
                    var1['hasShopDiscount'] = var4;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var15.bind(var10)(var7, var13);
            var7 = 20;
            var7 = var14[var7];
            var11 = var9.bind(var11)(var7);
            var9 = var11.useFilteredAndSortedProducts;
            var7 = {};
            var7['products'] = var13;
            var12 = _closure1_slot10;
            var12 = var12.ORBS;
            var7['screen'] = var12;
            var11 = var9.bind(var11)(var7);
            var _closure2_slot11 = var11;
            var9 = var10.useMemo;
            var7 = new Array(1);
            var7[0] = var11;
            var6 = function() {
                var4 = _closure2_slot11;
                var3 = var4.slice;
                var2 = 0;
                var1 = 10;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var9.bind(var10)(var6, var7);
            if(var4) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var4 = var5;
case 84:
            var6 = var8;
            if(!var6) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var5 = var1.length;
            var1 = 3;
            var6 = var5 >= var1;
case 86:
            var5 = var7.length;
            var1 = 3;
            var5 = var5 >= var1;
            var1 = {};
            var1['products'] = var7;
            var7 = var2;
            if(!var2) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var7 = !var8;
case 88:
            var1['isSearchingSkuIds'] = var7;
            var1['isLoadingProducts'] = var4;
            if(!var2) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var2 = var6;
case 90:
            if(!var2) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            var2 = !var5;
case 92:
            if(!var2) { _fun0006_ip = 94; continue _fun0006 }
case 95:
            var2 = var4;
case 94:
            if(!var2) { _fun0006_ip = 96; continue _fun0006 }
case 97:
            var2 = !var3;
case 96:
            var1['showPlaceholderCarousel'] = var2;
            return var1;
        }
    };
    var3['usePopularOrbShopProducts'] = var2;
    return var1;
})();