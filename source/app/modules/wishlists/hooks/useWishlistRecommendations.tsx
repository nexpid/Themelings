// app/modules/wishlists/hooks/useWishlistRecommendations.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var4 = function useWishlistRecommendationsWithWishlists(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var6 = var1.userIdsAndWishlistIds;
            var _closure2_slot0 = var6;
            var8 = var1.numItems;
            var4 = var1.applicationIds;
            var1 = var1.source;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 6;
            var3 = var9[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.WishlistFetchSource;
            var1 = var3.USER_PROFILE;
case 36:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var7 = {};
            var12 = _closure1_slot4;
            var11 = var12.useMemo;
            var10 = new Array(1);
            var10[0] = var6;
            var9 = function() {
                var3 = _closure2_slot0;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.userId;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var11.bind(var12)(var9, var10);
            var7['userIds'] = var9;
            var7['numItems'] = var8;
            var7['applicationIds'] = var4;
            var4 = function useFetchWishlistRecommendations(arg1) {
                var1 = arg1;
                var8 = var1.userIds;
                var _closure3_slot0 = var8;
                var6 = var1.numItems;
                var _closure3_slot1 = var6;
                var7 = var1.applicationIds;
                var _closure3_slot2 = var7;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 8;
                var4 = var4[var1];
                var1 = undefined;
                var9 = var5.bind(var1)(var4);
                var5 = var9.useStateFromStores;
                var1 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() {
                    var4 = _closure1_slot6;
                    var3 = var4.getRecommendations;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var5.bind(var9)(var4, var1);
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(3);
                var3[0] = var8;
                var3[1] = var7;
                var3[2] = var6;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var6 = _closure1_slot6;
                        var5 = var6.getRecommendations;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot2;
                        var5 = var5.bind(var6)(var4, var3);
                        var3 = null;
                        var3 = var3 != var5;
                        if(!var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                        var6 = var5.state;
                        var4 = 'loading';
                        var4 = var4 === var6;
                        if(var4) { _fun0005_ip = 40; continue _fun0005 }
case 4:
                        var6 = var5.fetchedAt;
                        var5 = global;
                        var7 = var5.Date;
                        var5 = var7.now;
                        var7 = var5.bind(var7)();
                        var5 = _closure1_slot8;
                        var5 = var7 - var5;
                        var4 = var6 >= var5;
case 40:
                        var3 = var4;
case 38:
                        if(var3) { _fun0005_ip = 41; continue _fun0005 }
case 11:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.fetchWishlistRecommendations;
                        var3 = _closure3_slot2;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var1 = var4.bind(var5)(var3, var2, var1);
case 41:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var7 = var4.bind(var5)(var7);
            _closure2_slot1 = var7;
            var4 = {};
            var4['userIdsAndWishlistIds'] = var6;
            var4['source'] = var1;
            var1 = function useSortedWishlistUnownedSkus(arg1) {
                var1 = arg1;
                var5 = var1.userIdsAndWishlistIds;
                var4 = var1.source;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.useFetchWishlists;
                var1 = {};
                var1['wishlistIdsAndUsers'] = var5;
                var1['source'] = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var2.wishlists;
                var _closure3_slot0 = var1;
                var3 = var2.isFetching;
                var2 = var2.errors;
                var9 = _closure1_slot4;
                var8 = var9.useMemo;
                var5 = new Array(1);
                var5[0] = var1;
                var4 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = {};
                        var3 = _closure1_slot9;
                        var5 = _closure3_slot0;
                        var4 = var5.filter;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 7;
                        var2 = var7[var2];
                        var7 = undefined;
                        var2 = var6.bind(var7)(var2);
                        var2 = var2.isNotNullish;
                        var2 = var4.bind(var5)(var2);
                        var6 = var3.bind(var7)(var2);
                        var3 = var6.bind(var7)();
                        var2 = var3.done;
                        var5 = null;
                        var4 = var3;
                        var3 = undefined;
                        if(var2) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                        var11 = var4.value;
                        var9 = _closure1_slot9;
                        var2 = var11.items;
                        var10 = var9.bind(var7)(var2);
                        var9 = var10.bind(var7)();
                        var2 = var9.done;
                        if(var2) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                        var12 = var9.value;
                        var2 = var12.sku;
                        var2 = var5 == var2;
                        if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                        var2 = var12.isOwned;
case 46:
                        if(var2) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                        var13 = var12.skuId;
                        var2 = {};
                        var14 = var12.skuId;
                        var14 = var1[var14];
                        if(!(var5 == var14)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                        var14 = {};
                        _fun0006_ip = 52; continue _fun0006;
case 50:
                        var15 = var12.skuId;
                        var14 = var1[var15];
case 52:
                        var17 = var2;
                        var16 = var14;
                        var14 = copyDataProperties(var17, var16);
                        var15 = var11.userId;
                        var14 = _closure1_slot7;
                        var14 = var14.WISHLIST;
                        var2[var15] = var14;
                        var1[var13] = var2;
case 48:
                        var13 = var10.bind(var7)();
                        var2 = var13.done;
                        var9 = var13;
                        var3 = var12;
                        if(!var2) { _fun0006_ip = 45; continue _fun0006 }
case 44:
                        var9 = var6.bind(var7)();
                        var2 = var9.done;
                        var4 = var9;
                        if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 42:
                        return var1;
                    }
                };
                var4 = var8.bind(var9)(var4, var5);
                var _closure3_slot1 = var4;
                var9 = _closure1_slot4;
                var8 = var9.useMemo;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() {
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.fromEntries;
                    var6 = _closure3_slot0;
                    var5 = var6.filter;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 7;
                    var7 = var7[var4];
                    var4 = undefined;
                    var4 = var8.bind(var4)(var7);
                    var4 = var4.isNotNullish;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.flatMap;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.items;
                        return var1;
                    };
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = arg1;
                            var4 = null;
                            var1 = var4 != var2;
                            if(!var1) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                            var3 = var2.sku;
                            var1 = var4 != var3;
case 53:
                            if(!var1) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                            var2 = var2.isOwned;
                            var1 = !var2;
case 55:
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.map;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.skuId;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var2 = var2.sku;
                        var1[1] = var2;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var8.bind(var9)(var1, var5);
                var _closure3_slot2 = var5;
                var1 = {};
                var9 = _closure1_slot4;
                var8 = var9.useMemo;
                var7 = new Array(2);
                var7[0] = var5;
                var7[1] = var4;
                var6 = function() {
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.keys;
                    var2 = _closure3_slot2;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.sort;
                    var2 = function(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = global;
                            var6 = var3.Object;
                            var4 = var6.keys;
                            var5 = _closure3_slot1;
                            var2 = arg2;
                            var2 = var5[var2];
                            var5 = null;
                            if(!(var5 == var2)) { _fun0008_ip = 57; continue _fun0008 }
case 33:
                            var2 = {};
case 57:
                            var2 = var4.bind(var6)(var2);
                            var2 = var2.length;
                            var4 = var3.Object;
                            var3 = var4.keys;
                            var6 = _closure3_slot1;
                            var1 = arg1;
                            var1 = var6[var1];
                            if(!(var5 == var1)) { _fun0008_ip = 36; continue _fun0008 }
case 58:
                            var1 = {};
case 36:
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.length;
                            var1 = var2 - var1;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var2 = _closure3_slot2;
                        var1 = arg1;
                        var1 = var2[var1];
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6 = var8.bind(var9)(var6, var7);
                var1['sortedWishlistSkus'] = var6;
                var1['wishlistSkuIdToSku'] = var5;
                var1['wishlistSkusToUserAndReasonMap'] = var4;
                var1['wishlistsAreFetching'] = var3;
                var1['wishlistErrors'] = var2;
                return var1;
            };
            var4 = var1.bind(var5)(var4);
            var12 = var4.sortedWishlistSkus;
            _closure2_slot2 = var12;
            var1 = var4.wishlistSkuIdToSku;
            _closure2_slot3 = var1;
            var10 = var4.wishlistSkusToUserAndReasonMap;
            _closure2_slot4 = var10;
            var8 = var4.wishlistsAreFetching;
            _closure2_slot5 = var8;
            var6 = var4.wishlistErrors;
            _closure2_slot6 = var6;
            var9 = _closure1_slot4;
            var5 = var9.useMemo;
            var4 = new Array(2);
            var4[0] = var7;
            var4[1] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0009_ip = 38; continue _fun0009 }
case 59:
                    var1 = _closure2_slot1;
                    var3 = var1.state;
                    var1 = 'success';
                    if(!(var1 === var3)) { _fun0009_ip = 38; continue _fun0009 }
case 3:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var3 = var3.data;
                    var5 = var3.skus;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot3;
                        var1 = var2 in var1;
                        var1 = !var1;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    var1['filteredRecommendations'] = var3;
                    var2 = _closure2_slot1;
                    var2 = var2.data;
                    var2 = var2.skusToUserAndReason;
                    var1['skusToUserAndReasonRecommendations'] = var2;
                    _fun0009_ip = 60; continue _fun0009;
case 38:
                    var2 = {};
                    var3 = new Array(0);
                    var2['filteredRecommendations'] = var3;
                    var3 = {};
                    var2['skusToUserAndReasonRecommendations'] = var3;
                    var1 = var2;
case 60:
                    return var1;
                }
            };
            var1 = var5.bind(var9)(var1, var4);
            var11 = var1.filteredRecommendations;
            _closure2_slot7 = var11;
            var1 = var1.skusToUserAndReasonRecommendations;
            _closure2_slot8 = var1;
            var9 = _closure1_slot4;
            var5 = var9.useMemo;
            var4 = new Array(4);
            var4[0] = var12;
            var4[1] = var11;
            var4[2] = var10;
            var4[3] = var1;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = {};
                    var15 = _closure2_slot8;
                    var16 = var2;
                    var1 = copyDataProperties(var16, var15);
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.entries;
                    var1 = _closure2_slot4;
                    var10 = var3.bind(var5)(var1);
                    var1 = var10.length;
                    var6 = 0;
                    var1 = var6 < var1;
                    var8 = undefined;
                    var7 = 2;
                    var5 = 1;
                    var3 = 0;
                    if(!var1) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                    var11 = var10[var3];
                    var1 = _closure1_slot3;
                    var1 = var1.bind(var8)(var11, var7);
                    var11 = var1[var6];
                    var12 = var1[var5];
                    var1 = {};
                    var15 = var2[var11];
                    var16 = var1;
                    var13 = copyDataProperties(var16, var15);
                    var16 = var1;
                    var15 = var12;
                    var12 = copyDataProperties(var16, var15);
                    var2[var11] = var1;
                    var3 = var3 + 1;
                    var1 = var10.length;
                    if(var3 < var1) { _fun0010_ip = 62; continue _fun0010 }
case 61:
                    var1 = {};
                    var15 = _closure2_slot2;
                    var3 = new Array(0);
                    var16 = var3;
                    var14 = 0;
                    var14 = arraySpread(var16, var15, var14);
                    var15 = _closure2_slot7;
                    var16 = var3;
                    var4 = arraySpread(var16, var15, var14);
                    var1['combinedSkus'] = var3;
                    var1['combinedSkusToUserAndReason'] = var2;
                    return var1;
                }
            };
            var4 = var5.bind(var9)(var1, var4);
            var1 = {};
            var5 = var4.combinedSkus;
            var1['wishlistAndRecommendations'] = var5;
            var4 = var4.combinedSkusToUserAndReason;
            var1['skusToUserAndReason'] = var4;
            var5 = _closure1_slot4;
            var4 = var5.useMemo;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var4 = 'loading';
                    var1 = var4;
                    if(var3) { _fun0011_ip = 63; continue _fun0011 }
case 29:
                    var3 = _closure2_slot1;
                    var5 = null;
                    var3 = var5 == var3;
                    var1 = var4;
                    if(var3) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                    var3 = _closure2_slot1;
                    if(!(var5 != var3)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                    var3 = _closure2_slot1;
                    var3 = var3.state;
                    var1 = var4;
                    if(!(var1 !== var3)) { _fun0011_ip = 63; continue _fun0011 }
case 65:
                    var5 = _closure2_slot6;
                    var4 = var5.filter;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.isNotNullish;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.length;
                    var3 = 0;
                    if(!(!(var4 > var3))) { _fun0011_ip = 46; continue _fun0011 }
case 67:
                    var2 = _closure2_slot1;
                    var4 = var2.state;
                    var2 = 'success';
                    var3 = 'error';
                    if(!(var3 === var4)) { _fun0011_ip = 68; continue _fun0011 }
case 46:
                    var2 = 'error';
case 68:
                    var1 = var2;
case 63:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1['status'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.WishlistRecommendationReason;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Millis;
    var8 = var5.MINUTE;
    var5 = 30;
    var5 = var5 * var8;
    var _closure1_slot8 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/wishlists/hooks/useWishlistRecommendations.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useWishlistRecommendationsForSingleUser(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var8 = var1.userId;
            var _closure2_slot0 = var8;
            var7 = var1.numItems;
            var5 = var1.source;
            var6 = undefined;
            if(!(var5 === var6)) { _fun0012_ip = 62; continue _fun0012 }
case 69:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.WishlistFetchSource;
            var5 = var2.USER_PROFILE;
case 62:
            var12 = var1.location;
            var _closure2_slot1 = var6;
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var1 = var4.bind(var6)(var1);
            var13 = var1.bind(var6)(var8);
            var2 = _closure1_slot0;
            var1 = 8;
            var1 = var10[var1];
            var15 = var2.bind(var6)(var1);
            var14 = var15.useStateFromStoresObject;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var3 = var4.getFirstWishlistId;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var1['defaultWishlistId'] = var2;
                return var1;
            };
            var1 = var14.bind(var15)(var3, var1);
            var3 = var1.defaultWishlistId;
            _closure2_slot1 = var3;
            var1 = 11;
            var1 = var10[var1];
            var4 = var4.bind(var6)(var1);
            var1 = {};
            var1['displayProfile'] = var13;
            var1['location'] = var12;
            var12 = var4.bind(var6)(var1);
            var4 = _closure1_slot11;
            var1 = {};
            var14 = _closure1_slot4;
            var13 = var14.useMemo;
            var11 = new Array(2);
            var11[0] = var8;
            var11[1] = var3;
            var9 = function() {
                var2 = {};
                var3 = _closure2_slot0;
                var2['userId'] = var3;
                var1 = _closure2_slot1;
                var2['wishlistId'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var9 = var13.bind(var14)(var9, var11);
            var1['userIdsAndWishlistIds'] = var9;
            var9 = 12;
            var9 = var10[var9];
            var11 = var2.bind(var6)(var9);
            var9 = var11.useWishlistApplicationIds;
            var9 = var9.bind(var11)(var12);
            var1['applicationIds'] = var9;
            var1['numItems'] = var7;
            var1['source'] = var5;
            var1 = var4.bind(var6)(var1);
            var9 = var1.wishlistAndRecommendations;
            var5 = var1.skusToUserAndReason;
            var4 = var1.status;
            var1 = 13;
            var1 = var10[var1];
            var6 = var2.bind(var6)(var1);
            var2 = var6.useWishlistSkuFilter;
            var1 = {};
            var1['wishlistAndRecommendations'] = var9;
            var1['skusToUserAndReason'] = var5;
            var1['userId'] = var8;
            var1['numItems'] = var7;
            var6 = var2.bind(var6)(var1);
            var2 = var6.totalUnownedWishlistItemCount;
            var1 = {};
            var6 = var6.slicedWishlistAndRecommendations;
            var1['wishlistAndRecommendations'] = var6;
            var1['skusToUserAndReason'] = var5;
            var1['status'] = var4;
            var1['defaultWishlistId'] = var3;
            var1['totalUnownedWishlistItemCount'] = var2;
            return var1;
        }
    };
    var3['useWishlistRecommendationsForSingleUser'] = var2;
    return var1;
})();