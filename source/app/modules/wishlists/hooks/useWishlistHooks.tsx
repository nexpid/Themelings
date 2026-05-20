// app/modules/wishlists/hooks/useWishlistHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var12;
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
    var1 = function getUserWishlistKey(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 == var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ':default';
            var1 = var3.bind(var2)(var6, var1);
            _fun0004_ip = 38; continue _fun0004;
case 36:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ':';
            var1 = var4.bind(var3)(var6, var2, var5);
case 38:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var5 = function useFetchWishlist(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var11 = var2.wishlistId;
            var _closure2_slot0 = var11;
            var3 = var2.userId;
            var _closure2_slot1 = var3;
            var10 = var2.source;
            var7 = undefined;
            if(!(var10 === var7)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var2 = _closure1_slot11;
            var10 = var2.USER_PROFILE;
case 39:
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 7;
            var2 = var12[var6];
            var8 = var9.bind(var7)(var2);
            var5 = var8.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var3 = _closure1_slot9;
                    var1 = var3.getWishlist;
                    var4 = _closure2_slot0;
                    var3 = var1.bind(var3)(var4);
                    var1 = new Array(4);
                    var1[0] = var3;
                    var5 = _closure1_slot9;
                    var3 = var5.getStatus;
                    var3 = var3.bind(var5)(var4);
                    var1[1] = var3;
                    var5 = _closure1_slot9;
                    var3 = var5.getError;
                    var3 = var3.bind(var5)(var4);
                    var1[2] = var3;
                    var3 = _closure1_slot9;
                    var2 = var3.getUpdatedAt;
                    var2 = var2.bind(var3)(var4);
                    var1[3] = var2;
                    _fun0006_ip = 43; continue _fun0006;
case 41:
                    var2 = [null, 'success'];
                    var3 = undefined;
                    var2[2] = var3;
                    var2[3] = var3;
                    var1 = var2;
case 43:
                    return var1;
                }
            };
            var5 = var5.bind(var8)(var3, var2);
            var3 = _closure1_slot3;
            var2 = 4;
            var13 = var3.bind(var7)(var5, var2);
            var2 = 0;
            var3 = var13[var2];
            _closure2_slot3 = var3;
            var2 = 1;
            var5 = var13[var2];
            var2 = 2;
            var2 = var13[var2];
            _closure2_slot4 = var2;
            var8 = 3;
            var8 = var13[var8];
            _closure2_slot5 = var8;
            var16 = _closure1_slot4;
            var15 = var16.useMemo;
            var14 = new Array(1);
            var14[0] = var3;
            var13 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 44; continue _fun0007 }
case 42:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.uniq;
                    var4 = _closure1_slot10;
                    var1 = _closure2_slot3;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    _fun0007_ip = 45; continue _fun0007;
case 44:
                    var1 = new Array(0);
case 45:
                    return var1;
                }
            };
            var16 = var15.bind(var16)(var13, var14);
            var13 = 10;
            var13 = var12[var13];
            var15 = var9.bind(var7)(var13);
            var14 = var15.useGetOrFetchStorefrontPricesForSkuIds;
            var13 = {};
            var13['skuIds'] = var16;
            var16 = 'useFetchWishlist';
            var13['location'] = var16;
            var13 = var14.bind(var15)(var13);
            var6 = var12[var6];
            var13 = var9.bind(var7)(var6);
            var12 = var13.useStateFromStores;
            var6 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 46; continue _fun0008 }
case 42:
                    var3 = _closure2_slot1;
                    if(!(var1 == var3)) { _fun0008_ip = 47; continue _fun0008 }
case 46:
                    var3 = undefined;
                    return var3;
case 47:
                    var5 = _closure1_slot6;
                    var4 = var5.getWishlistSettings;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3, var2);
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0008_ip = 30; continue _fun0008 }
case 7:
                    var1 = var2.updated_at;
case 30:
                    return var1;
                }
            };
            var9 = var12.bind(var13)(var9, var6);
            _closure2_slot6 = var9;
            var6 = _closure1_slot5;
            var4 = new Array(6);
            var4[0] = var11;
            var4[1] = var10;
            var4[2] = var3;
            var4[3] = var9;
            var4[4] = var8;
            var4[5] = var2;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var6 = _closure1_slot9;
                    var5 = var6.isFetching;
                    var3 = _closure2_slot0;
                    var2 = var5.bind(var6)(var3);
case 48:
                    if(var2) { _fun0009_ip = 5; continue _fun0009 }
case 50:
                    var3 = _closure2_slot4;
                    var2 = var4 != var3;
case 5:
                    if(var2) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                    var2 = _closure2_slot3;
                    var2 = var4 == var2;
                    if(var2) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var3 = _closure2_slot6;
                    var3 = var4 != var3;
                    if(!var3) { _fun0009_ip = 9; continue _fun0009 }
case 55:
                    var5 = _closure2_slot5;
                    var4 = _closure2_slot6;
                    var3 = var5 !== var4;
case 9:
                    var2 = var3;
case 53:
                    if(!var2) { _fun0009_ip = 51; continue _fun0009 }
case 56:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.fetchWishlist;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var4);
            var1 = {};
            var1['wishlist'] = var3;
            var3 = 'fetching';
            var3 = var3 === var5;
            var1['isFetching'] = var3;
            var3 = 'success';
            var3 = var3 === var5;
            if(var3) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var4 = 'error';
            var3 = var4 === var5;
case 57:
            var1['wasFetched'] = var3;
            var1['error'] = var2;
            return var1;
        }
    };
    var _closure1_slot15 = var5;
    var2 = function useFetchWishlistAndProfileInfoForUser(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 7;
        var8 = var5[var3];
        var6 = undefined;
        var11 = var4.bind(var6)(var8);
        var10 = var11.useStateFromStores;
        var8 = _closure1_slot8;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getUser;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10 = var10.bind(var11)(var9, var8);
        var _closure2_slot1 = var10;
        var3 = var5[var3];
        var9 = var4.bind(var6)(var3);
        var8 = var9.useStateFromStoresObject;
        var3 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var3;
        var4 = new Array(1);
        var4[0] = var7;
        var3 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = {};
                var4 = _closure2_slot0;
                var2 = null;
                var5 = var2 != var4;
                var4 = null;
                if(!var5) { _fun0010_ip = 59; continue _fun0010 }
case 29:
                var7 = _closure1_slot6;
                var6 = var7.getUserProfile;
                var5 = _closure2_slot0;
                var4 = var6.bind(var7)(var5);
case 59:
                var1['userProfile'] = var4;
                var4 = _closure2_slot0;
                var4 = var2 != var4;
                var2 = null;
                if(!var4) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                var5 = _closure1_slot6;
                var4 = var5.getFirstWishlistId;
                var3 = _closure2_slot0;
                var2 = var4.bind(var5)(var3);
case 60:
                var1['wishlistId'] = var2;
                return var1;
            }
        };
        var4 = var8.bind(var9)(var5, var3, var4);
        var3 = var4.userProfile;
        var _closure2_slot2 = var3;
        var4 = var4.wishlistId;
        var9 = _closure1_slot4;
        var8 = var9.useEffect;
        var5 = new Array(3);
        var5[0] = var10;
        var5[1] = var7;
        var5[2] = var3;
        var1 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure2_slot0;
                var7 = null;
                var2 = var7 != var2;
                if(!var2) { _fun0011_ip = 62; continue _fun0011 }
case 49:
                var3 = _closure2_slot2;
                var2 = var7 == var3;
case 62:
                if(!var2) { _fun0011_ip = 40; continue _fun0011 }
case 63:
                var3 = _closure2_slot1;
                var2 = var7 != var3;
case 40:
                if(!var2) { _fun0011_ip = 2; continue _fun0011 }
case 48:
                var3 = _closure2_slot2;
                var2 = var7 == var3;
case 2:
                if(!var2) { _fun0011_ip = 64; continue _fun0011 }
case 5:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var6 = _closure2_slot1;
                var2 = var6.id;
                var5 = var6.getAvatarURL;
                var1 = 80;
                var1 = var5.bind(var6)(var7, var1);
                var1 = var3.bind(var4)(var2, var1);
case 64:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var8.bind(var9)(var1, var5);
        var1 = {};
        var5 = _closure1_slot15;
        var2 = {};
        var2['wishlistId'] = var4;
        var2['userId'] = var7;
        var13 = var5.bind(var6)(var2);
        var14 = var1;
        var2 = copyDataProperties(var14, var13);
        var2 = 'wishlistId';
        var1[1] = var4;
        var2 = 'userProfile';
        var1[1] = var3;
        return var1;
    };
    var _closure1_slot16 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var6);
    var1 = 0;
    var6 = var12[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var9 = var12[var6];
    var8 = metroImportAll;
    var8 = var8.bind(var1)(var9);
    var _closure1_slot4 = var8;
    var6 = var12[var6];
    var6 = var11.bind(var1)(var6);
    var6 = var6.useEffect;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var12[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var12[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var12[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var9 = 5;
    var6 = var12[var9];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var8 = 6;
    var6 = var12[var8];
    var6 = var11.bind(var1)(var6);
    var6 = var6.getWishlistSkuIds;
    var _closure1_slot10 = var6;
    var7 = {};
    var6 = 'wishlist';
    var7['WISHLIST'] = var6;
    var6 = 'popular';
    var7['POPULAR'] = var6;
    var6 = {};
    var10 = 'user_profile';
    var6['USER_PROFILE'] = var10;
    var _closure1_slot11 = var6;
    var10 = 14;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/wishlists/hooks/useWishlistHooks.tsx';
    var10 = var11.bind(var12)(var10);
    var3['WISHLIST_IN_DM_LENGTH'] = var9;
    var3['WISHLIST_IN_DM_LENGTH_MOBILE'] = var8;
    var8 = 350;
    var3['WISHLIST_TOOLTIP_DELAY_MS'] = var8;
    var3['WishlistItemSource'] = var7;
    var3['WishlistFetchSource'] = var6;
    var6 = function useFetchWishlists(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var10 = var2.wishlistIdsAndUsers;
            var _closure2_slot0 = var10;
            var9 = var2.source;
            var7 = undefined;
            if(!(var9 === var7)) { _fun0012_ip = 65; continue _fun0012 }
case 66:
            var2 = _closure1_slot11;
            var9 = var2.USER_PROFILE;
case 65:
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 7;
            var2 = var11[var6];
            var13 = var8.bind(var7)(var2);
            var12 = var13.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.wishlistId;
                        var1 = null;
                        var2 = var1 != var4;
                        if(!var2) { _fun0013_ip = 67; continue _fun0013 }
case 68:
                        var3 = _closure1_slot9;
                        var2 = var3.getWishlist;
                        var1 = var2.bind(var3)(var4);
case 67:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var12.bind(var13)(var4, var2, var3);
            var2 = var11[var6];
            var14 = var8.bind(var7)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var2;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.wishlistId;
                        var1 = null;
                        var1 = var1 != var4;
                        if(!var1) { _fun0014_ip = 67; continue _fun0014 }
case 68:
                        var3 = _closure1_slot9;
                        var2 = var3.isFetching;
                        var1 = var2.bind(var3)(var4);
case 67:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var13.bind(var14)(var12, var2, var3);
            var2 = var11[var6];
            var15 = var8.bind(var7)(var2);
            var14 = var15.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var2;
            var12 = new Array(1);
            var12[0] = var10;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.wishlistId;
                        var1 = null;
                        var2 = var1 != var4;
                        var1 = undefined;
                        if(!var2) { _fun0015_ip = 48; continue _fun0015 }
case 29:
                        var3 = _closure1_slot9;
                        var2 = var3.getError;
                        var1 = var2.bind(var3)(var4);
case 48:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var14.bind(var15)(var13, var2, var12);
            var6 = var11[var6];
            var12 = var8.bind(var7)(var6);
            var11 = var12.useStateFromStoresArray;
            var6 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure2_slot0;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var1 = arg1;
                        var7 = var1.wishlistId;
                        var6 = var1.userId;
                        var4 = null;
                        var3 = var4 != var7;
                        var1 = undefined;
                        if(!var3) { _fun0016_ip = 69; continue _fun0016 }
case 47:
                        var5 = _closure1_slot6;
                        var3 = var5.getWishlistSettings;
                        var3 = var3.bind(var5)(var6, var7);
                        var4 = var4 == var3;
                        var2 = undefined;
                        if(var4) { _fun0016_ip = 70; continue _fun0016 }
case 71:
                        var2 = var3.updated_at;
case 70:
                        var1 = var2;
case 69:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var11.bind(var12)(var8, var6);
            _closure2_slot2 = var6;
            var12 = _closure1_slot4;
            var11 = var12.useMemo;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var6;
            var6 = function() {
                var1 = {};
                var _closure3_slot0 = var1;
                var4 = _closure2_slot0;
                var3 = var4.forEach;
                var2 = function(arg1, arg2) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = arg1;
                        var4 = arg2;
                        var7 = var1.userId;
                        var6 = var1.wishlistId;
                        var2 = _closure2_slot2;
                        var2 = var2.length;
                        if(!(!(var4 >= var2))) { _fun0017_ip = 30; continue _fun0017 }
case 33:
                        var3 = _closure3_slot0;
                        var5 = _closure1_slot14;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var7, var6);
                        var1 = _closure2_slot2;
                        var1 = var1[var4];
                        var3[var2] = var1;
case 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var11.bind(var12)(var6, var8);
            _closure2_slot3 = var8;
            var6 = _closure1_slot5;
            var5 = new Array(3);
            var5[0] = var10;
            var5[1] = var9;
            var5[2] = var8;
            var1 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure1_slot12;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var3 = var8.bind(var1)();
                    var2 = var3.done;
                    var7 = 8;
                    var6 = null;
                    var5 = var3;
                    var4 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0018_ip = 72; continue _fun0018 }
case 39:
                    var2 = var5.value;
                    var17 = var2.wishlistId;
                    var16 = var2.userId;
                    var12 = var4;
                    var11 = var3;
                    if(!(var6 != var17)) { _fun0018_ip = 23; continue _fun0018 }
case 73:
                    var13 = _closure1_slot9;
                    var2 = var13.isFetching;
                    var2 = var2.bind(var13)(var17);
                    var12 = var4;
                    var11 = var3;
                    if(var2) { _fun0018_ip = 23; continue _fun0018 }
case 64:
                    var13 = _closure1_slot9;
                    var2 = var13.getError;
                    var2 = var2.bind(var13)(var17);
                    var12 = var4;
                    var11 = var3;
                    if(!(var6 == var2)) { _fun0018_ip = 23; continue _fun0018 }
case 74:
                    var13 = _closure1_slot9;
                    var2 = var13.getWishlist;
                    var14 = var2.bind(var13)(var17);
                    var13 = _closure1_slot9;
                    var2 = var13.getUpdatedAt;
                    var13 = var2.bind(var13)(var17);
                    var15 = _closure2_slot3;
                    var2 = _closure1_slot14;
                    var2 = var2.bind(var1)(var16, var17);
                    var2 = var15[var2];
                    var14 = var6 == var14;
                    if(var14) { _fun0018_ip = 75; continue _fun0018 }
case 76:
                    var15 = var6 != var2;
                    if(!var15) { _fun0018_ip = 20; continue _fun0018 }
case 77:
                    var15 = var13 !== var2;
case 20:
                    var14 = var15;
case 75:
                    var12 = var13;
                    var11 = var2;
                    if(!var14) { _fun0018_ip = 23; continue _fun0018 }
case 78:
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var7];
                    var16 = var15.bind(var1)(var14);
                    var15 = var16.fetchWishlist;
                    var14 = _closure2_slot1;
                    var14 = var15.bind(var16)(var17, var2, var14);
                    var12 = var13;
                    var11 = var2;
case 23:
                    var13 = var8.bind(var1)();
                    var2 = var13.done;
                    var4 = var12;
                    var3 = var11;
                    var5 = var13;
                    if(!var2) { _fun0018_ip = 39; continue _fun0018 }
case 72:
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['wishlists'] = var4;
            var1['isFetching'] = var3;
            var1['errors'] = var2;
            return var1;
        }
    };
    var3['useFetchWishlists'] = var6;
    var3['useFetchWishlist'] = var5;
    var5 = function useIsSkuInWishlist(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 7;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot9;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0019_ip = 79; continue _fun0019 }
case 49:
                var5 = _closure1_slot9;
                var4 = var5.hasSkuId;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = var4.bind(var5)(var3, var2);
case 79:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsSkuInWishlist'] = var5;
    var5 = function useShouldShowWishlistInDMGifting(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var9 = var2.isGift;
            var _closure2_slot0 = var9;
            var8 = var2.giftRecipient;
            var _closure2_slot1 = var8;
            var5 = var2.isSocialLayerStorefrontEnabled;
            var10 = undefined;
            if(!(var5 === var10)) { _fun0020_ip = 65; continue _fun0020 }
case 80:
            var5 = true;
case 65:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var11 = _closure1_slot4;
            var6 = var11.useEffect;
            var7 = null;
            var4 = var7 == var8;
            var3 = undefined;
            if(var4) { _fun0020_ip = 81; continue _fun0020 }
case 55:
            var3 = var8.id;
case 81:
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0021_ip = 82; continue _fun0021 }
case 29:
                    var5 = _closure2_slot1;
                    var3 = var5.id;
case 82:
                    if(!(var4 != var3)) { _fun0021_ip = 35; continue _fun0021 }
case 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var2 = var3.bind(var1)(var2);
case 35:
                    return var1;
                }
            };
            var3 = var6.bind(var11)(var3, var4);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var4 = var4.bind(var10)(var3);
            var3 = {};
            var11 = var7 == var8;
            var6 = undefined;
            if(var11) { _fun0020_ip = 83; continue _fun0020 }
case 84:
            var6 = var8.id;
case 83:
            var3['userId'] = var6;
            var6 = var4.bind(var10)(var3);
            _closure2_slot3 = var6;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 7;
            var3 = var11[var3];
            var12 = var4.bind(var10)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0022_ip = 63; continue _fun0022 }
case 68:
                    var4 = _closure2_slot1;
                    var3 = var4.id;
case 63:
                    var3 = var1 == var3;
                    var1 = null;
                    if(var3) { _fun0022_ip = 54; continue _fun0022 }
case 67:
                    var4 = _closure1_slot6;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 54:
                    return var1;
                }
            };
            var12 = var11.bind(var12)(var4, var3);
            var4 = _closure1_slot15;
            var3 = {};
            var13 = var7 != var12;
            var11 = null;
            if(!var13) { _fun0020_ip = 85; continue _fun0020 }
case 86:
            var11 = null;
            if(!var9) { _fun0020_ip = 85; continue _fun0020 }
case 87:
            var13 = var7 != var8;
            var11 = null;
            if(!var13) { _fun0020_ip = 85; continue _fun0020 }
case 88:
            var11 = var12;
case 85:
            var3['wishlistId'] = var11;
            var11 = var7 == var8;
            var7 = undefined;
            if(var11) { _fun0020_ip = 89; continue _fun0020 }
case 90:
            var7 = var8.id;
case 89:
            var3['userId'] = var7;
            var3 = var4.bind(var10)(var3);
            var7 = var3.wishlist;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 13;
            var3 = var11[var3];
            var4 = var4.bind(var10)(var3);
            var3 = var4.useWishlistGiftableItems;
            var7 = var3.bind(var4)(var7);
            _closure2_slot4 = var7;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var1 === var2;
                    if(!var1) { _fun0023_ip = 66; continue _fun0023 }
case 49:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var1 = var2 != var3;
case 66:
                    if(!var1) { _fun0023_ip = 91; continue _fun0023 }
case 82:
                    var2 = _closure2_slot4;
                    var2 = var2.length;
                    var5 = 0;
                    var2 = var2 > var5;
                    if(var2) { _fun0023_ip = 35; continue _fun0023 }
case 92:
                    var3 = _closure2_slot2;
                    if(!var3) { _fun0023_ip = 30; continue _fun0023 }
case 93:
                    var4 = _closure2_slot3;
                    var4 = var4.length;
                    var3 = var4 > var5;
case 30:
                    var2 = var3;
case 35:
                    var1 = var2;
case 91:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useShouldShowWishlistInDMGifting'] = var5;
    var4 = function useCurrentUserWishlist() {
        var3 = _closure1_slot16;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 7;
        var4 = var4[var2];
        var2 = undefined;
        var6 = var5.bind(var2)(var4);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var2 = _closure1_slot7;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var5.bind(var6)(var4, var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useCurrentUserWishlist'] = var4;
    var3['useFetchWishlistAndProfileInfoForUser'] = var2;
    return var1;
})();