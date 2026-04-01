// app/modules/wishlists/hooks/useWishlistHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var10;
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
            var12 = var2.wishlistId;
            var _closure2_slot0 = var12;
            var3 = var2.userId;
            var _closure2_slot1 = var3;
            var11 = var2.source;
            var7 = undefined;
            if(!(var11 === var7)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var2 = _closure1_slot11;
            var11 = var2.USER_PROFILE;
case 39:
            var _closure2_slot2 = var11;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var _closure2_slot7 = var7;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 8;
            var2 = var13[var6];
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
            var10 = var3.bind(var7)(var5, var2);
            var2 = 0;
            var3 = var10[var2];
            _closure2_slot3 = var3;
            var2 = 1;
            var5 = var10[var2];
            var2 = 2;
            var2 = var10[var2];
            _closure2_slot4 = var2;
            var8 = 3;
            var8 = var10[var8];
            _closure2_slot5 = var8;
            var10 = 7;
            var10 = var13[var10];
            var15 = var9.bind(var7)(var10);
            var14 = var15.useIsEligibleForWishlistShowPrices;
            var10 = 'use_fetch_wishlist';
            var10 = var14.bind(var15)(var10);
            _closure2_slot6 = var10;
            var6 = var13[var6];
            var14 = var9.bind(var7)(var6);
            var13 = var14.useStateFromStores;
            var6 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0007_ip = 44; continue _fun0007 }
case 42:
                    var3 = _closure2_slot1;
                    if(!(var1 == var3)) { _fun0007_ip = 45; continue _fun0007 }
case 44:
                    var3 = undefined;
                    return var3;
case 45:
                    var5 = _closure1_slot6;
                    var4 = var5.getWishlistSettings;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3, var2);
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0007_ip = 30; continue _fun0007 }
case 7:
                    var1 = var2.updated_at;
case 30:
                    return var1;
                }
            };
            var9 = var13.bind(var14)(var9, var6);
            _closure2_slot7 = var9;
            var6 = _closure1_slot5;
            var4 = new Array(7);
            var4[0] = var12;
            var4[1] = var11;
            var4[2] = var10;
            var4[3] = var3;
            var4[4] = var9;
            var4[5] = var8;
            var4[6] = var2;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var5 = _closure1_slot9;
                    var4 = var5.isFetching;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0008_ip = 46; continue _fun0008 }
case 48:
                    var3 = _closure2_slot4;
                    if(!(var6 == var3)) { _fun0008_ip = 46; continue _fun0008 }
case 4:
                    var5 = _closure1_slot9;
                    var4 = var5.getLastFetchedAt;
                    var3 = _closure2_slot0;
                    var7 = var4.bind(var5)(var3);
                    var4 = _closure2_slot6;
                    if(!var4) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                    var3 = var6 == var7;
                    if(var3) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var5 = global;
                    var8 = var5.Date;
                    var5 = var8.now;
                    var5 = var5.bind(var8)();
                    var7 = var5 - var7;
                    var5 = _closure1_slot10;
                    var3 = var7 > var5;
case 51:
                    var4 = var3;
case 49:
                    var3 = _closure2_slot3;
                    var3 = var6 == var3;
                    if(var3) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                    var5 = _closure2_slot7;
                    var5 = var6 != var5;
                    if(!var5) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var7 = _closure2_slot5;
                    var6 = _closure2_slot7;
                    var5 = var7 !== var6;
case 55:
                    var3 = var5;
case 53:
                    if(var3) { _fun0008_ip = 14; continue _fun0008 }
case 57:
                    var3 = var4;
case 14:
                    if(!var3) { _fun0008_ip = 46; continue _fun0008 }
case 58:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.fetchWishlist;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 46:
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
            if(var3) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var4 = 'error';
            var3 = var4 === var5;
case 59:
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
        var3 = 8;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = {};
                var4 = _closure2_slot0;
                var2 = null;
                var5 = var2 != var4;
                var4 = null;
                if(!var5) { _fun0009_ip = 61; continue _fun0009 }
case 29:
                var7 = _closure1_slot6;
                var6 = var7.getUserProfile;
                var5 = _closure2_slot0;
                var4 = var6.bind(var7)(var5);
case 61:
                var1['userProfile'] = var4;
                var4 = _closure2_slot0;
                var4 = var2 != var4;
                var2 = null;
                if(!var4) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                var5 = _closure1_slot6;
                var4 = var5.getFirstWishlistId;
                var3 = _closure2_slot0;
                var2 = var4.bind(var5)(var3);
case 62:
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure2_slot0;
                var7 = null;
                var2 = var7 != var2;
                if(!var2) { _fun0010_ip = 64; continue _fun0010 }
case 47:
                var3 = _closure2_slot2;
                var2 = var7 == var3;
case 64:
                if(!var2) { _fun0010_ip = 40; continue _fun0010 }
case 65:
                var3 = _closure2_slot1;
                var2 = var7 != var3;
case 40:
                if(!var2) { _fun0010_ip = 2; continue _fun0010 }
case 66:
                var3 = _closure2_slot2;
                var2 = var7 == var3;
case 2:
                if(!var2) { _fun0010_ip = 67; continue _fun0010 }
case 5:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 12;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var6 = _closure2_slot1;
                var2 = var6.id;
                var5 = var6.getAvatarURL;
                var1 = 80;
                var1 = var5.bind(var6)(var7, var1);
                var1 = var3.bind(var4)(var2, var1);
case 67:
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
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var10[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var11 = var10[var6];
    var8 = metroImportAll;
    var8 = var8.bind(var1)(var11);
    var _closure1_slot4 = var8;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.useEffect;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var10[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var10[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var10[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var10[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var10[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Millis;
    var7 = var6.HOUR;
    var6 = 24;
    var6 = var6 * var7;
    var _closure1_slot10 = var6;
    var7 = {};
    var6 = 'wishlist';
    var7['WISHLIST'] = var6;
    var6 = 'popular';
    var7['POPULAR'] = var6;
    var6 = {};
    var8 = 'user_profile';
    var6['USER_PROFILE'] = var8;
    var _closure1_slot11 = var6;
    var8 = 13;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/wishlists/hooks/useWishlistHooks.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = 6;
            var2 = arg1;
            if(!var2) { _fun0011_ip = 37; continue _fun0011 }
case 68:
            var1 = 5;
case 37:
            return var1;
        }
    };
    var3['getWishlistInDmLength'] = var8;
    var8 = 350;
    var3['WISHLIST_TOOLTIP_DELAY_MS'] = var8;
    var8 = 16;
    var3['WISHLIST_TOOLTIP_ICON_SIZE'] = var8;
    var3['WishlistItemSource'] = var7;
    var3['WishlistFetchSource'] = var6;
    var6 = function useFetchWishlists(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var11 = var2.wishlistIdsAndUsers;
            var _closure2_slot0 = var11;
            var10 = var2.source;
            var7 = undefined;
            if(!(var10 === var7)) { _fun0012_ip = 69; continue _fun0012 }
case 70:
            var2 = _closure1_slot11;
            var10 = var2.USER_PROFILE;
case 69:
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 7;
            var2 = var12[var2];
            var4 = var9.bind(var7)(var2);
            var3 = var4.useIsEligibleForWishlistShowPrices;
            var2 = 'use_fetch_wishlists';
            var8 = var3.bind(var4)(var2);
            _closure2_slot2 = var8;
            var6 = 8;
            var2 = var12[var6];
            var14 = var9.bind(var7)(var2);
            var13 = var14.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = new Array(1);
            var3[0] = var11;
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
                        if(!var2) { _fun0013_ip = 71; continue _fun0013 }
case 72:
                        var3 = _closure1_slot9;
                        var2 = var3.getWishlist;
                        var1 = var2.bind(var3)(var4);
case 71:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var13.bind(var14)(var4, var2, var3);
            var2 = var12[var6];
            var15 = var9.bind(var7)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var2;
            var3 = new Array(1);
            var3[0] = var11;
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
                        if(!var1) { _fun0014_ip = 71; continue _fun0014 }
case 72:
                        var3 = _closure1_slot9;
                        var2 = var3.isFetching;
                        var1 = var2.bind(var3)(var4);
case 71:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var14.bind(var15)(var13, var2, var3);
            var2 = var12[var6];
            var16 = var9.bind(var7)(var2);
            var15 = var16.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var14 = new Array(1);
            var14[0] = var2;
            var13 = new Array(1);
            var13[0] = var11;
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
                        if(!var2) { _fun0015_ip = 66; continue _fun0015 }
case 29:
                        var3 = _closure1_slot9;
                        var2 = var3.getError;
                        var1 = var2.bind(var3)(var4);
case 66:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var15.bind(var16)(var14, var2, var13);
            var6 = var12[var6];
            var13 = var9.bind(var7)(var6);
            var12 = var13.useStateFromStoresArray;
            var6 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var6;
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
                        if(!var3) { _fun0016_ip = 73; continue _fun0016 }
case 45:
                        var5 = _closure1_slot6;
                        var3 = var5.getWishlistSettings;
                        var3 = var3.bind(var5)(var6, var7);
                        var4 = var4 == var3;
                        var2 = undefined;
                        if(var4) { _fun0016_ip = 74; continue _fun0016 }
case 75:
                        var2 = var3.updated_at;
case 74:
                        var1 = var2;
case 73:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var12.bind(var13)(var9, var6);
            _closure2_slot3 = var6;
            var13 = _closure1_slot4;
            var12 = var13.useMemo;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var6;
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
                        var2 = _closure2_slot3;
                        var2 = var2.length;
                        if(!(!(var4 >= var2))) { _fun0017_ip = 30; continue _fun0017 }
case 33:
                        var3 = _closure3_slot0;
                        var5 = _closure1_slot14;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var7, var6);
                        var1 = _closure2_slot3;
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
            var9 = var12.bind(var13)(var6, var9);
            _closure2_slot4 = var9;
            var6 = _closure1_slot5;
            var5 = new Array(4);
            var5[0] = var11;
            var5[1] = var10;
            var5[2] = var9;
            var5[3] = var8;
            var1 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure1_slot12;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var12 = var3.bind(var1)(var2);
                    var3 = var12.bind(var1)();
                    var2 = var3.done;
                    var11 = 9;
                    var10 = null;
                    var9 = global;
                    var8 = var3;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0018_ip = 76; continue _fun0018 }
case 28:
                    var2 = var8.value;
                    var27 = var2.wishlistId;
                    var21 = var2.userId;
                    var19 = var7;
                    var18 = var6;
                    var17 = var5;
                    var16 = var4;
                    var15 = var3;
                    if(!(var10 != var27)) { _fun0018_ip = 77; continue _fun0018 }
case 78:
                    var20 = _closure1_slot9;
                    var2 = var20.isFetching;
                    var2 = var2.bind(var20)(var27);
                    var19 = var7;
                    var18 = var6;
                    var17 = var5;
                    var16 = var4;
                    var15 = var3;
                    if(var2) { _fun0018_ip = 77; continue _fun0018 }
case 79:
                    var20 = _closure1_slot9;
                    var2 = var20.getError;
                    var2 = var2.bind(var20)(var27);
                    var19 = var7;
                    var18 = var6;
                    var17 = var5;
                    var16 = var4;
                    var15 = var3;
                    if(!(var10 == var2)) { _fun0018_ip = 77; continue _fun0018 }
case 80:
                    var20 = _closure1_slot9;
                    var2 = var20.getWishlist;
                    var23 = var2.bind(var20)(var27);
                    var20 = _closure1_slot9;
                    var2 = var20.getUpdatedAt;
                    var22 = var2.bind(var20)(var27);
                    var20 = _closure2_slot4;
                    var2 = _closure1_slot14;
                    var2 = var2.bind(var1)(var21, var27);
                    var21 = var20[var2];
                    var20 = _closure1_slot9;
                    var2 = var20.getLastFetchedAt;
                    var20 = var2.bind(var20)(var27);
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0018_ip = 81; continue _fun0018 }
case 82:
                    var24 = var10 == var20;
                    if(var24) { _fun0018_ip = 83; continue _fun0018 }
case 84:
                    var26 = var9.Date;
                    var25 = var26.now;
                    var25 = var25.bind(var26)();
                    var26 = var25 - var20;
                    var25 = _closure1_slot10;
                    var24 = var26 > var25;
case 83:
                    var2 = var24;
case 81:
                    var24 = var10 == var23;
                    if(var24) { _fun0018_ip = 85; continue _fun0018 }
case 86:
                    var25 = var10 != var21;
                    if(!var25) { _fun0018_ip = 87; continue _fun0018 }
case 88:
                    var25 = var22 !== var21;
case 87:
                    var24 = var25;
case 85:
                    if(var24) { _fun0018_ip = 89; continue _fun0018 }
case 90:
                    var24 = var2;
case 89:
                    var19 = var23;
                    var18 = var22;
                    var17 = var21;
                    var16 = var20;
                    var15 = var2;
                    if(!var24) { _fun0018_ip = 77; continue _fun0018 }
case 91:
                    var25 = _closure1_slot1;
                    var24 = _closure1_slot2;
                    var24 = var24[var11];
                    var26 = var25.bind(var1)(var24);
                    var25 = var26.fetchWishlist;
                    var24 = _closure2_slot1;
                    var24 = var25.bind(var26)(var27, var21, var24);
                    var19 = var23;
                    var18 = var22;
                    var17 = var21;
                    var16 = var20;
                    var15 = var2;
case 77:
                    var20 = var12.bind(var1)();
                    var2 = var20.done;
                    var7 = var19;
                    var6 = var18;
                    var5 = var17;
                    var4 = var16;
                    var3 = var15;
                    var8 = var20;
                    if(!var2) { _fun0018_ip = 28; continue _fun0018 }
case 76:
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
        var3 = 8;
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
                if(!var1) { _fun0019_ip = 36; continue _fun0019 }
case 47:
                var5 = _closure1_slot9;
                var4 = var5.hasSkuId;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = var4.bind(var5)(var3, var2);
case 36:
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
            if(!(var5 === var10)) { _fun0020_ip = 69; continue _fun0020 }
case 92:
            var5 = true;
case 69:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 10;
            var3 = var6[var3];
            var4 = var4.bind(var10)(var3);
            var3 = {};
            var7 = null;
            var11 = var7 == var8;
            var6 = undefined;
            if(var11) { _fun0020_ip = 93; continue _fun0020 }
case 94:
            var6 = var8.id;
case 93:
            var3['userId'] = var6;
            var6 = var4.bind(var10)(var3);
            _closure2_slot3 = var6;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 8;
            var3 = var11[var3];
            var12 = var4.bind(var10)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0021_ip = 65; continue _fun0021 }
case 72:
                    var4 = _closure2_slot1;
                    var3 = var4.id;
case 65:
                    var3 = var1 == var3;
                    var1 = null;
                    if(var3) { _fun0021_ip = 95; continue _fun0021 }
case 71:
                    var4 = _closure1_slot6;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 95:
                    return var1;
                }
            };
            var12 = var11.bind(var12)(var4, var3);
            var4 = _closure1_slot15;
            var3 = {};
            var13 = var7 != var12;
            var11 = null;
            if(!var13) { _fun0020_ip = 19; continue _fun0020 }
case 96:
            var11 = null;
            if(!var9) { _fun0020_ip = 19; continue _fun0020 }
case 97:
            var13 = var7 != var8;
            var11 = null;
            if(!var13) { _fun0020_ip = 19; continue _fun0020 }
case 98:
            var11 = var12;
case 19:
            var3['wishlistId'] = var11;
            var11 = var7 == var8;
            var7 = undefined;
            if(var11) { _fun0020_ip = 99; continue _fun0020 }
case 100:
            var7 = var8.id;
case 99:
            var3['userId'] = var7;
            var3 = var4.bind(var10)(var3);
            var7 = var3.wishlist;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 11;
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
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var1 === var2;
                    if(!var1) { _fun0022_ip = 70; continue _fun0022 }
case 47:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var1 = var2 != var3;
case 70:
                    if(!var1) { _fun0022_ip = 101; continue _fun0022 }
case 102:
                    var2 = _closure2_slot4;
                    var2 = var2.length;
                    var5 = 0;
                    var2 = var2 > var5;
                    if(var2) { _fun0022_ip = 35; continue _fun0022 }
case 103:
                    var3 = _closure2_slot2;
                    if(!var3) { _fun0022_ip = 30; continue _fun0022 }
case 104:
                    var4 = _closure2_slot3;
                    var4 = var4.length;
                    var3 = var4 > var5;
case 30:
                    var2 = var3;
case 35:
                    var1 = var2;
case 101:
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
        var2 = 8;
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