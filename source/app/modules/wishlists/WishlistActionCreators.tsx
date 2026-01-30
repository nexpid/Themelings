// app/modules/wishlists/WishlistActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.AnalyticEvents;
    var _closure1_slot7 = var7;
    var2 = var2.Endpoints;
    var _closure1_slot8 = var2;
    var2 = {};
    var7 = function fetchWishlist(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = undefined;
                    var8 = undefined;
                    var5 = undefined;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var10 = 'WISHLIST_FETCH_START';
                    var4['type'] = var10;
                    var11 = _closure2_slot0;
                    var4['wishlistId'] = var11;
                    var4 = var6.bind(var7)(var4);
case 4: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var11 = var4.HTTP;
                    var6 = var11.get;
                    var4 = {};
                    var13 = _closure1_slot8;
                    var12 = var13.USER_WISHLIST;
                    var7 = _closure2_slot0;
                    var7 = var12.bind(var13)(var7);
                    var4['url'] = var7;
                    var12 = {};
                    var13 = _closure2_slot2;
                    var7 = null;
                    if(!(var7 == var13)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 7;
                    var13 = var15[var13];
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.WishlistFetchSource;
                    var13 = var13.USER_PROFILE;
                    _fun0001_ip = 7; continue _fun0001;
case 5:
                    var13 = _closure2_slot2;
case 7:
                    var12['source'] = var13;
                    var4['query'] = var12;
                    var12 = true;
                    var4['rejectWithError'] = var12;
                    var4 = var6.bind(var11)(var4);
                    SaveGenerator(address=202);
case 8:
                    return var4;
case 9:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var5 = var4;
                    var6 = var4.body;
                    var8 = var6;
                    var11 = var7 == var6;
                    var6 = undefined;
                    if(var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var6 = var8.wishlist_items;
case 12:
                    if(!(var7 == var6)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 8;
                    var6 = var8[var6];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.captureMessage;
                    var6 = 'Wishlist items not found in response';
                    var6 = var7.bind(var8)(var6);
case 14:
                    var7 = _closure1_slot6;
                    var6 = var7.fromServer;
                    var5 = var5.body;
                    var8 = var6.bind(var7)(var5);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var3];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var11 = 'WISHLIST_FETCH_SUCCESS';
                    var5['type'] = var11;
                    var11 = _closure2_slot0;
                    var5['wishlistId'] = var11;
                    var5['wishlistData'] = var8;
                    var8 = _closure2_slot1;
                    var5['updatedAt'] = var8;
                    var5 = var6.bind(var7)(var5);
case 16: // try_end0
                    _fun0001_ip = 17; continue _fun0001;
case 10:
                    return var4;
case 18: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var4.bind(var2)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var11 = 'WISHLIST_FETCH_FAILURE';
                    var3['type'] = var11;
                    var10 = _closure2_slot0;
                    var3['wishlistId'] = var10;
                    var10 = _closure1_slot0;
                    var9 = 9;
                    var9 = var6[var9];
                    var9 = var10.bind(var2)(var9);
                    var9 = var9.APIError;
                    var10 = var9.prototype;
                    var10 = Object.create(var10, {constructor: {value: var9}});
                    var17 = var10;
                    var16 = var5;
                    var9 = new var17[var9](var16, var15);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var3['error'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 8;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
case 17:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchWishlist'] = var7;
    var7 = function addSkuToWishlist(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 3:
                    var8 = undefined;
                    var7 = undefined;
                    var3 = undefined;
                    var6 = null;
                    var5 = null;
case 20: // try_start_1
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var8)(var2);
                    var10 = var2.HTTP;
                    var9 = var10.post;
                    var2 = {};
                    var11 = _closure1_slot8;
                    var11 = var11.USER_WISHLIST_ITEMS;
                    var2['url'] = var11;
                    var11 = {};
                    var13 = _closure2_slot0;
                    var11['sku_id'] = var13;
                    var2['body'] = var11;
                    var11 = true;
                    var2['rejectWithError'] = var11;
                    var2 = var9.bind(var10)(var2);
                    SaveGenerator(address=103);
case 21:
                    return var2;
case 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var5 = var2;
                    var11 = _closure1_slot6;
                    var10 = var11.fromServer;
                    var9 = var2.body;
                    var13 = var10.bind(var11)(var9);
                    var7 = var13;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 5;
                    var9 = var11[var9];
                    var11 = var10.bind(var8)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var14 = 'WISHLIST_ADD_SKU_SUCCESS';
                    var9['type'] = var14;
                    var14 = var13.id;
                    var9['wishlistId'] = var14;
                    var14 = _closure2_slot0;
                    var9['skuId'] = var14;
                    var9['wishlistData'] = var13;
                    var9 = var10.bind(var11)(var9);
                    var9 = _closure2_slot1;
                    if(!(var6 != var9)) { _fun0002_ip = 25; continue _fun0002 }
case 26: // try_start_0
                    var14 = var7;
                    var7 = var14.getSkuIds;
                    var13 = var7.bind(var14)();
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 10;
                    var7 = var10[var7];
                    var11 = var9.bind(var8)(var7);
                    var10 = var11.track;
                    var7 = _closure1_slot7;
                    var9 = var7.WISHLIST_UPDATED;
                    var7 = {};
                    var14 = var14.id;
                    var7['wishlist_id'] = var14;
                    var14 = 'ADD';
                    var7['action_type'] = var14;
                    var14 = _closure2_slot0;
                    var7['sku_id'] = var14;
                    var7['sku_ids'] = var13;
                    var12 = _closure2_slot1;
                    var7['location_stack'] = var12;
                    var7 = var10.bind(var11)(var9, var7);
case 27: // try_end0
                    _fun0002_ip = 25; continue _fun0002;
case 28: // catch_target0
                    CatchBlockStart(arg_register=6);
case 25: // try_end1
                    if(!(var6 != var5)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var7 = _closure1_slot5;
                    var5 = var7.getCurrentUser;
                    var5 = var5.bind(var7)();
                    var3 = var5;
                    if(!(var6 != var5)) { _fun0002_ip = 29; continue _fun0002 }
case 31:
                    var9 = _closure1_slot4;
                    var7 = var9.getFirstWishlistId;
                    var5 = var3;
                    var5 = var5.id;
                    var5 = var7.bind(var9)(var5);
                    if(!(var6 == var5)) { _fun0002_ip = 29; continue _fun0002 }
case 10: // try_start_2
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.fetchProfile;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=403);
case 32:
                    return var3;
case 33:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 34; continue _fun0002 }
case 35: // try_end2
                    _fun0002_ip = 29; continue _fun0002;
case 34:
                    return var3;
case 36: // catch_target2
                    CatchBlockStart(arg_register=2);
case 29:
                    return var8;
case 23:
                    return var2;
case 37: // catch_target1
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'WISHLIST_ADD_SKU_FAILURE';
                    var3['type'] = var7;
                    var7 = _closure2_slot0;
                    var3['skuId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 9;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.APIError;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var17 = var7;
                    var16 = var2;
                    var6 = new var17[var6](var16, var15);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 19:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['addSkuToWishlist'] = var7;
    var7 = function removeSkuFromWishlist(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 38; continue _fun0003 }
case 3:
                    var8 = undefined;
                    var4 = undefined;
case 39: // try_start_1
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 6;
                    var2 = var6[var2];
                    var2 = var5.bind(var8)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.del;
                    var2 = {};
                    var12 = _closure1_slot8;
                    var11 = var12.USER_WISHLIST_ITEM;
                    var10 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['url'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=96);
case 40:
                    return var2;
case 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var9 = _closure1_slot6;
                    var6 = var9.fromServer;
                    var5 = var2.body;
                    var10 = var6.bind(var9)(var5);
                    var4 = var10;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 5;
                    var5 = var9[var5];
                    var9 = var6.bind(var8)(var5);
                    var6 = var9.dispatch;
                    var5 = {};
                    var11 = 'WISHLIST_REMOVE_SKU_SUCCESS';
                    var5['type'] = var11;
                    var11 = _closure2_slot0;
                    var5['wishlistId'] = var11;
                    var11 = _closure2_slot1;
                    var5['skuId'] = var11;
                    var5['wishlistData'] = var10;
                    var5 = var6.bind(var9)(var5);
                    var6 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0003_ip = 44; continue _fun0003 }
case 45: // try_start_0
                    var10 = var4;
                    var4 = var10.getSkuIds;
                    var9 = var4.bind(var10)();
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var6 = var5.bind(var8)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot7;
                    var4 = var3.WISHLIST_UPDATED;
                    var3 = {};
                    var10 = var10.id;
                    var3['wishlist_id'] = var10;
                    var10 = 'REMOVE';
                    var3['action_type'] = var10;
                    var10 = _closure2_slot1;
                    var3['sku_id'] = var10;
                    var3['sku_ids'] = var9;
                    var7 = _closure2_slot2;
                    var3['location_stack'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
case 46: // try_end0
                    _fun0003_ip = 44; continue _fun0003;
case 47: // catch_target0
                    CatchBlockStart(arg_register=2);
case 44: // try_end1
                    return var8;
case 42:
                    return var2;
case 48: // catch_target1
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'WISHLIST_REMOVE_SKU_FAILURE';
                    var3['type'] = var7;
                    var10 = _closure2_slot0;
                    var3['wishlistId'] = var10;
                    var7 = _closure2_slot1;
                    var3['skuId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 9;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.APIError;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var15 = var7;
                    var14 = var2;
                    var6 = new var15[var6](var14, var13);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 38:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['removeSkuFromWishlist'] = var7;
    var7 = function updateWishlistVisibility(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 10; continue _fun0004 }
case 3:
                    var8 = undefined;
                    var3 = undefined;
                    var4 = _closure1_slot5;
                    var2 = var4.getCurrentUser;
                    var4 = var2.bind(var4)();
                    var3 = var4;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 49; continue _fun0004 }
case 50: // try_start_1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var2 = var4.bind(var8)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.patch;
                    var2 = {};
                    var11 = _closure1_slot8;
                    var10 = var11.USER_WISHLIST_PATCH;
                    var7 = _closure2_slot0;
                    var7 = var10.bind(var11)(var7);
                    var2['url'] = var7;
                    var7 = {};
                    var10 = _closure2_slot1;
                    var7['visibility'] = var10;
                    var2['body'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=131);
case 51:
                    return var2;
case 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var7 = var5.bind(var8)(var4);
                    var5 = var7.dispatch;
                    var4 = {};
                    var10 = 'WISHLIST_UPDATE_VISIBILITY_SUCCESS';
                    var4['type'] = var10;
                    var10 = _closure2_slot0;
                    var4['wishlistId'] = var10;
                    var9 = _closure2_slot1;
                    var4['visibility'] = var9;
                    var4 = var5.bind(var7)(var4);
case 55: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var4 = var7[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.fetchProfile;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=237);
case 56:
                    return var3;
case 12:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 57; continue _fun0004 }
case 58: // try_end0
                    _fun0004_ip = 49; continue _fun0004;
case 57: // try_end1
                    return var3;
case 59: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=2);
case 49: // try_end2
                    return var8;
case 53:
                    return var2;
case 60: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'WISHLIST_UPDATE_VISIBILITY_FAILURE';
                    var3['type'] = var7;
                    var7 = _closure2_slot0;
                    var3['wishlistId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 9;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.APIError;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var13 = var7;
                    var12 = var2;
                    var6 = new var13[var6](var12, var11);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 10:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['updateWishlistVisibility'] = var7;
    var4 = function reorderWishlistItem(arg1, arg2, arg3) {
        var2 = arg3;
        var3 = arg1;
        var _closure2_slot0 = var3;
        var3 = arg2;
        var _closure2_slot1 = var3;
        var3 = var2.previousSkuId;
        var _closure2_slot2 = var3;
        var3 = var2.nextSkuId;
        var _closure2_slot3 = var3;
        var3 = var2.newWishlistData;
        var _closure2_slot4 = var3;
        var2 = var2.analyticsLocations;
        var _closure2_slot5 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 61; continue _fun0005 }
case 3:
                    var2 = undefined;
                    var5 = undefined;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var8 = 'WISHLIST_REORDER_START';
                    var4['type'] = var8;
                    var8 = _closure2_slot0;
                    var4['wishlistId'] = var8;
                    var8 = _closure2_slot1;
                    var4['skuId'] = var8;
                    var8 = _closure2_slot2;
                    var4['previousSkuId'] = var8;
                    var8 = _closure2_slot3;
                    var4['nextSkuId'] = var8;
                    var8 = _closure2_slot4;
                    var4['newWishlistData'] = var8;
                    var4 = var6.bind(var7)(var4);
case 62: // try_start_1
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.patch;
                    var4 = {};
                    var13 = _closure1_slot8;
                    var12 = var13.USER_WISHLIST_ITEM;
                    var11 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var8 = var12.bind(var13)(var11, var8);
                    var4['url'] = var8;
                    var8 = {};
                    var11 = _closure2_slot2;
                    var8['previous_sku_id'] = var11;
                    var11 = _closure2_slot3;
                    var8['next_sku_id'] = var11;
                    var4['body'] = var8;
                    var8 = true;
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=211);
case 63:
                    return var4;
case 11:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 36; continue _fun0005 }
case 64:
                    var8 = _closure1_slot6;
                    var7 = var8.fromServer;
                    var6 = var4.body;
                    var11 = var7.bind(var8)(var6);
                    var5 = var11;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var3];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var12 = 'WISHLIST_REORDER_SUCCESS';
                    var6['type'] = var12;
                    var12 = _closure2_slot0;
                    var6['wishlistId'] = var12;
                    var6['wishlistData'] = var11;
                    var6 = var7.bind(var8)(var6);
                    var7 = _closure2_slot5;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0005_ip = 35; continue _fun0005 }
case 42: // try_start_0
                    var6 = var5;
                    var5 = var6.getSkuIds;
                    var11 = var5.bind(var6)();
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 10;
                    var5 = var7[var5];
                    var8 = var6.bind(var2)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot7;
                    var6 = var5.WISHLIST_UPDATED;
                    var5 = {};
                    var12 = _closure2_slot0;
                    var5['wishlist_id'] = var12;
                    var12 = 'REORDER';
                    var5['action_type'] = var12;
                    var12 = _closure2_slot1;
                    var5['sku_id'] = var12;
                    var5['sku_ids'] = var11;
                    var11 = _closure2_slot5;
                    var5['location_stack'] = var11;
                    var5 = var7.bind(var8)(var6, var5);
case 65: // try_end0
                    _fun0005_ip = 35; continue _fun0005;
case 66: // catch_target0
                    CatchBlockStart(arg_register=4);
case 35: // try_end1
                    _fun0005_ip = 67; continue _fun0005;
case 36:
                    return var4;
case 68: // catch_target1
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var4.bind(var2)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var11 = 'WISHLIST_REORDER_FAILURE';
                    var3['type'] = var11;
                    var11 = _closure2_slot0;
                    var3['wishlistId'] = var11;
                    var10 = _closure2_slot1;
                    var3['skuId'] = var10;
                    var10 = _closure1_slot0;
                    var9 = 9;
                    var9 = var6[var9];
                    var9 = var10.bind(var2)(var9);
                    var9 = var9.APIError;
                    var10 = var9.prototype;
                    var10 = Object.create(var10, {constructor: {value: var9}});
                    var16 = var10;
                    var15 = var5;
                    var9 = new var16[var9](var15, var14);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var3['error'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 8;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
case 67:
                    return var2;
case 61:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['reorderWishlistItem'] = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/WishlistActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();