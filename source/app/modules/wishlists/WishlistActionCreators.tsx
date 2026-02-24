// app/modules/wishlists/WishlistActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function extraWishlistParams() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var3 = _closure1_slot7;
            var4 = var3.ipCountryCode;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot7;
            var3 = var3.ipCountryCode;
            var1['country_code'] = var3;
case 2:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 8;
            var3 = var3[var6];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot12;
            var3 = var3.APPLE;
            var1['payment_gateway'] = var3;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = _closure1_slot12;
            var2 = var2.GOOGLE;
            var1['payment_gateway'] = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function maybeDispatchUserDiscounts(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = var2.body;
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 3:
            var3 = var5.user_discounts;
case 8:
            if(!(var4 != var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var2.body;
            var4 = var2.user_discounts;
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.fromServer;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var3.bind(var4)(var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS';
            var2['type'] = var6;
            var2['userDiscounts'] = var5;
            var2 = var3.bind(var4)(var2);
case 9:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var2 = var5.bind(var1)(var2);
    var2 = var2.CollectiblesUserDiscountRecord;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.AnalyticEvents;
    var _closure1_slot10 = var7;
    var7 = var2.Endpoints;
    var _closure1_slot11 = var7;
    var2 = var2.PaymentGateways;
    var _closure1_slot12 = var2;
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = undefined;
                    var8 = undefined;
                    var5 = undefined;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var10 = 'WISHLIST_FETCH_START';
                    var4['type'] = var10;
                    var11 = _closure2_slot0;
                    var4['wishlistId'] = var11;
                    var4 = var6.bind(var7)(var4);
case 13: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 10;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var11 = var4.HTTP;
                    var6 = var11.get;
                    var4 = {};
                    var13 = _closure1_slot11;
                    var12 = var13.USER_WISHLIST;
                    var7 = _closure2_slot0;
                    var7 = var12.bind(var13)(var7);
                    var4['url'] = var7;
                    var12 = {};
                    var13 = _closure2_slot2;
                    var7 = null;
                    if(!(var7 == var13)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 11;
                    var13 = var15[var13];
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.WishlistFetchSource;
                    var13 = var13.USER_PROFILE;
                    _fun0003_ip = 16; continue _fun0003;
case 14:
                    var13 = _closure2_slot2;
case 16:
                    var12['source'] = var13;
                    var13 = _closure1_slot13;
                    var16 = var13.bind(var2)();
                    var17 = var12;
                    var13 = copyDataProperties(var17, var16);
                    var4['query'] = var12;
                    var12 = true;
                    var4['rejectWithError'] = var12;
                    var4 = var6.bind(var11)(var4);
                    SaveGenerator(address=217);
case 17:
                    return var4;
case 18:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var5 = var4;
                    var6 = var4.body;
                    var8 = var6;
                    var11 = var7 == var6;
                    var6 = undefined;
                    if(var11) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var6 = var8.wishlist_items;
case 21:
                    if(!(var7 == var6)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 12;
                    var6 = var8[var6];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.captureMessage;
                    var6 = 'Wishlist items not found in response';
                    var6 = var7.bind(var8)(var6);
case 23:
                    var6 = _closure1_slot14;
                    var6 = var6.bind(var2)(var5);
                    var7 = _closure1_slot9;
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
case 25: // try_end0
                    _fun0003_ip = 26; continue _fun0003;
case 19:
                    return var4;
case 27: // catch_target0
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
                    var9 = 13;
                    var9 = var6[var9];
                    var9 = var10.bind(var2)(var9);
                    var9 = var9.APIError;
                    var10 = var9.prototype;
                    var10 = Object.create(var10, {constructor: {value: var9}});
                    var18 = var10;
                    var17 = var5;
                    var9 = new var18[var9](var17, var16);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var3['error'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 12;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
case 26:
                    return var2;
case 11:
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 12:
                    var8 = undefined;
                    var7 = undefined;
                    var3 = undefined;
                    var6 = null;
                    var5 = null;
case 29: // try_start_1
                    var9 = _closure1_slot14;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 10;
                    var2 = var11[var2];
                    var2 = var10.bind(var8)(var2);
                    var11 = var2.HTTP;
                    var10 = var11.post;
                    var2 = {};
                    var12 = _closure1_slot11;
                    var12 = var12.USER_WISHLIST_ITEMS;
                    var2['url'] = var12;
                    var13 = {};
                    var14 = _closure2_slot0;
                    var13['sku_id'] = var14;
                    var14 = _closure1_slot13;
                    var15 = var14.bind(var8)();
                    var16 = var13;
                    var14 = copyDataProperties(var16, var15);
                    var2['body'] = var13;
                    var13 = true;
                    var2['rejectWithError'] = var13;
                    var2 = var10.bind(var11)(var2);
                    SaveGenerator(address=122);
case 4:
                    return var2;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(var10) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var5 = var2;
                    var9 = var9.bind(var8)(var2);
                    var11 = _closure1_slot9;
                    var10 = var11.fromServer;
                    var9 = var2.body;
                    var13 = var10.bind(var11)(var9);
                    var7 = var13;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 9;
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
                    if(!(var6 != var9)) { _fun0004_ip = 33; continue _fun0004 }
case 34: // try_start_0
                    var14 = var7;
                    var7 = var14.getSkuIds;
                    var13 = var7.bind(var14)();
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 14;
                    var7 = var10[var7];
                    var11 = var9.bind(var8)(var7);
                    var10 = var11.track;
                    var7 = _closure1_slot10;
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
case 35: // try_end0
                    _fun0004_ip = 33; continue _fun0004;
case 36: // catch_target0
                    CatchBlockStart(arg_register=6);
case 33: // try_end1
                    if(!(var6 != var5)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var7 = _closure1_slot6;
                    var5 = var7.getCurrentUser;
                    var5 = var5.bind(var7)();
                    var3 = var5;
                    if(!(var6 != var5)) { _fun0004_ip = 37; continue _fun0004 }
case 39:
                    var9 = _closure1_slot5;
                    var7 = var9.getFirstWishlistId;
                    var5 = var3;
                    var5 = var5.id;
                    var5 = var7.bind(var9)(var5);
                    if(!(var6 == var5)) { _fun0004_ip = 37; continue _fun0004 }
case 19: // try_start_2
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var4 = var6[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.fetchProfile;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=427);
case 40:
                    return var3;
case 41:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 42; continue _fun0004 }
case 43: // try_end2
                    _fun0004_ip = 37; continue _fun0004;
case 42:
                    return var3;
case 44: // catch_target2
                    CatchBlockStart(arg_register=2);
case 37:
                    return var8;
case 31:
                    return var2;
case 45: // catch_target1
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 9;
                    var3 = var9[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'WISHLIST_ADD_SKU_FAILURE';
                    var3['type'] = var7;
                    var7 = _closure2_slot0;
                    var3['skuId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 13;
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
case 28:
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 46; continue _fun0005 }
case 12:
                    var8 = undefined;
                    var4 = undefined;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 9;
                    var2 = var2[var3];
                    var9 = var5.bind(var8)(var2);
                    var5 = var9.dispatch;
                    var2 = {};
                    var7 = 'WISHLIST_REMOVE_SKU_START';
                    var2['type'] = var7;
                    var10 = _closure2_slot0;
                    var2['wishlistId'] = var10;
                    var10 = _closure2_slot1;
                    var2['skuId'] = var10;
                    var2 = var5.bind(var9)(var2);
case 47: // try_start_1
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 10;
                    var2 = var9[var2];
                    var2 = var5.bind(var8)(var2);
                    var9 = var2.HTTP;
                    var5 = var9.del;
                    var2 = {};
                    var13 = _closure1_slot11;
                    var12 = var13.USER_WISHLIST_ITEM;
                    var11 = _closure2_slot0;
                    var10 = _closure2_slot1;
                    var10 = var12.bind(var13)(var11, var10);
                    var2['url'] = var10;
                    var10 = {};
                    var11 = _closure1_slot13;
                    var14 = var11.bind(var8)();
                    var15 = var10;
                    var11 = copyDataProperties(var15, var14);
                    var2['query'] = var10;
                    var10 = true;
                    var2['rejectWithError'] = var10;
                    var2 = var5.bind(var9)(var2);
                    SaveGenerator(address=178);
case 48:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var5 = _closure1_slot14;
                    var5 = var5.bind(var8)(var2);
                    var10 = _closure1_slot9;
                    var9 = var10.fromServer;
                    var5 = var2.body;
                    var11 = var9.bind(var10)(var5);
                    var4 = var11;
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var3];
                    var10 = var9.bind(var8)(var5);
                    var9 = var10.dispatch;
                    var5 = {};
                    var12 = 'WISHLIST_REMOVE_SKU_SUCCESS';
                    var5['type'] = var12;
                    var12 = _closure2_slot0;
                    var5['wishlistId'] = var12;
                    var12 = _closure2_slot1;
                    var5['skuId'] = var12;
                    var5['wishlistData'] = var11;
                    var5 = var9.bind(var10)(var5);
                    var9 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 != var9)) { _fun0005_ip = 51; continue _fun0005 }
case 52: // try_start_0
                    var12 = var4;
                    var4 = var12.getSkuIds;
                    var11 = var4.bind(var12)();
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 14;
                    var4 = var9[var4];
                    var10 = var5.bind(var8)(var4);
                    var9 = var10.track;
                    var4 = _closure1_slot10;
                    var5 = var4.WISHLIST_UPDATED;
                    var4 = {};
                    var12 = var12.id;
                    var4['wishlist_id'] = var12;
                    var12 = 'REMOVE';
                    var4['action_type'] = var12;
                    var12 = _closure2_slot1;
                    var4['sku_id'] = var12;
                    var4['sku_ids'] = var11;
                    var11 = _closure2_slot2;
                    var4['location_stack'] = var11;
                    var4 = var9.bind(var10)(var5, var4);
case 19: // try_end0
                    _fun0005_ip = 51; continue _fun0005;
case 53: // catch_target0
                    CatchBlockStart(arg_register=3);
case 51: // try_end1
                    return var8;
case 49:
                    return var2;
case 54: // catch_target1
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = var9[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var10 = 'WISHLIST_REMOVE_SKU_FAILURE';
                    var3['type'] = var10;
                    var10 = _closure2_slot0;
                    var3['wishlistId'] = var10;
                    var7 = _closure2_slot1;
                    var3['skuId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 13;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.APIError;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var16 = var7;
                    var15 = var2;
                    var6 = new var16[var6](var15, var14);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 46:
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 19; continue _fun0006 }
case 12:
                    var8 = undefined;
                    var3 = undefined;
                    var4 = _closure1_slot6;
                    var2 = var4.getCurrentUser;
                    var4 = var2.bind(var4)();
                    var3 = var4;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0006_ip = 55; continue _fun0006 }
case 56: // try_start_1
                    var4 = _closure1_slot14;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 10;
                    var2 = var7[var2];
                    var2 = var5.bind(var8)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.patch;
                    var2 = {};
                    var12 = _closure1_slot11;
                    var11 = var12.USER_WISHLIST_PATCH;
                    var10 = _closure2_slot0;
                    var10 = var11.bind(var12)(var10);
                    var2['url'] = var10;
                    var10 = {};
                    var11 = _closure2_slot1;
                    var10['visibility'] = var11;
                    var11 = _closure1_slot13;
                    var13 = var11.bind(var8)();
                    var14 = var10;
                    var11 = copyDataProperties(var14, var13);
                    var2['body'] = var10;
                    var10 = true;
                    var2['rejectWithError'] = var10;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=150);
case 57:
                    return var2;
case 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var4 = var4.bind(var8)(var2);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 9;
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
case 61: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 15;
                    var4 = var7[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.fetchProfile;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=261);
case 62:
                    return var3;
case 63:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 64; continue _fun0006 }
case 65: // try_end0
                    _fun0006_ip = 55; continue _fun0006;
case 64: // try_end1
                    return var3;
case 66: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=2);
case 55: // try_end2
                    return var8;
case 59:
                    return var2;
case 67: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 9;
                    var3 = var9[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'WISHLIST_UPDATE_VISIBILITY_FAILURE';
                    var3['type'] = var7;
                    var7 = _closure2_slot0;
                    var3['wishlistId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 13;
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
    var2['updateWishlistVisibility'] = var7;
    var7 = function reorderWishlistItem(arg1, arg2, arg3) {
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 68; continue _fun0007 }
case 12:
                    var2 = undefined;
                    var5 = undefined;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 9;
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
case 69: // try_start_1
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 10;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.patch;
                    var4 = {};
                    var13 = _closure1_slot11;
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
                    var11 = _closure1_slot13;
                    var14 = var11.bind(var2)();
                    var15 = var8;
                    var11 = copyDataProperties(var15, var14);
                    var4['body'] = var8;
                    var8 = true;
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=226);
case 70:
                    return var4;
case 20:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 44; continue _fun0007 }
case 71:
                    var6 = _closure1_slot14;
                    var6 = var6.bind(var2)(var4);
                    var8 = _closure1_slot9;
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
                    if(!(var6 != var7)) { _fun0007_ip = 43; continue _fun0007 }
case 72: // try_start_0
                    var6 = var5;
                    var5 = var6.getSkuIds;
                    var11 = var5.bind(var6)();
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 14;
                    var5 = var7[var5];
                    var8 = var6.bind(var2)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot10;
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
case 73: // try_end0
                    _fun0007_ip = 43; continue _fun0007;
case 74: // catch_target0
                    CatchBlockStart(arg_register=4);
case 43: // try_end1
                    _fun0007_ip = 75; continue _fun0007;
case 44:
                    return var4;
case 76: // catch_target1
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
                    var9 = 13;
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
                    var3 = 12;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
case 75:
                    return var2;
case 68:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['reorderWishlistItem'] = var7;
    var4 = function fetchWishlistRecommendations(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arguments[2];
            var3 = arguments[3];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0008_ip = 10; continue _fun0008 }
case 77:
            var4 = 20;
case 10:
            var _closure2_slot2 = var4;
            if(!(var3 === var2)) { _fun0008_ip = 78; continue _fun0008 }
case 79:
            var3 = true;
case 78:
            var _closure2_slot3 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 80; continue _fun0009 }
case 12:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 9;
                        var4 = var2[var5];
                        var2 = undefined;
                        var8 = var6.bind(var2)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var6 = 'WISHLIST_RECOMMENDATIONS_FETCH_START';
                        var4['type'] = var6;
                        var9 = _closure2_slot1;
                        var4['userIds'] = var9;
                        var9 = _closure2_slot0;
                        var4['applicationIds'] = var9;
                        var4 = var7.bind(var8)(var4);
case 81: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 10;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var8 = var4.HTTP;
                        var7 = var8.get;
                        var4 = {};
                        var9 = _closure1_slot11;
                        var9 = var9.USER_WISHLIST_RECOMMENDATIONS;
                        var4['url'] = var9;
                        var9 = {};
                        var10 = _closure2_slot0;
                        var9['application_ids'] = var10;
                        var10 = _closure2_slot1;
                        var9['user_ids'] = var10;
                        var10 = _closure2_slot2;
                        var9['max_recommendations'] = var10;
                        var10 = _closure2_slot3;
                        var9['localize'] = var10;
                        var10 = _closure1_slot13;
                        var12 = var10.bind(var2)();
                        var13 = var9;
                        var10 = copyDataProperties(var13, var12);
                        var4['query'] = var9;
                        var9 = true;
                        var4['rejectWithError'] = var9;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address=197);
case 82:
                        return var4;
case 83:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                        var7 = _closure1_slot14;
                        var7 = var7.bind(var2)(var4);
                        var9 = _closure1_slot8;
                        var8 = var9.fromServer;
                        var7 = var4.body;
                        var10 = var8.bind(var9)(var7);
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var5];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS';
                        var7['type'] = var11;
                        var11 = _closure2_slot1;
                        var7['userIds'] = var11;
                        var11 = _closure2_slot0;
                        var7['applicationIds'] = var11;
                        var7['data'] = var10;
                        var7 = var8.bind(var9)(var7);
case 23: // try_end0
                        _fun0009_ip = 86; continue _fun0009;
case 84:
                        return var4;
case 87: // catch_target0
                        CatchBlockStart(arg_register=8);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var7 = 12;
                        var7 = var3[var7];
                        var8 = var4.bind(var2)(var7);
                        var7 = var8.captureException;
                        var7 = var7.bind(var8)(var9);
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'WISHLIST_RECOMMENDATIONS_FETCH_FAILURE';
                        var3['type'] = var7;
                        var7 = _closure2_slot1;
                        var3['userIds'] = var7;
                        var6 = _closure2_slot0;
                        var3['applicationIds'] = var6;
                        var3 = var4.bind(var5)(var3);
case 86:
                        return var2;
case 80:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['fetchWishlistRecommendations'] = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/WishlistActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();