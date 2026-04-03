// app/modules/wishlists/WishlistActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function maybeFetchStorefrontPricesFromWishlistResponse(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var3 = var9[var1];
            var1 = undefined;
            var5 = var8.bind(var1)(var3);
            var4 = var5.uniq;
            var3 = arg1;
            var7 = var3.wishlist_items;
            var6 = var7.map;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.sku;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.id;
case 2:
                    return var1;
                }
            };
            var7 = var6.bind(var7)(var3);
            var6 = var7.filter;
            var3 = 9;
            var3 = var9[var3];
            var3 = var8.bind(var1)(var3);
            var3 = var3.isNotNullish;
            var3 = var6.bind(var7)(var3);
            var4 = var4.bind(var5)(var3);
            var5 = var4.length;
            var3 = 0;
            if(!(var5 > var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchStorefrontPricesForSkuIds;
            var2 = var2.bind(var3)(var4);
case 4:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function extraWishlistParams() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var3 = _closure1_slot7;
            var4 = var3.ipCountryCode;
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var3 = _closure1_slot7;
            var3 = var3.ipCountryCode;
            var1['country_code'] = var3;
case 6:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 11;
            var3 = var3[var6];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot12;
            var3 = var3.APPLE;
            var1['payment_gateway'] = var3;
            _fun0003_ip = 10; continue _fun0003;
case 8:
            var2 = _closure1_slot12;
            var2 = var2.GOOGLE;
            var1['payment_gateway'] = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function maybeDispatchUserDiscounts(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var5 = var2.body;
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0004_ip = 12; continue _fun0004 }
case 7:
            var3 = var5.user_discounts;
case 12:
            if(!(var4 != var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
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
            var2 = 12;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS';
            var2['type'] = var6;
            var2['userDiscounts'] = var5;
            var2 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function dispatchSkusFetchSuccessFromWishlistResponse(arg1) {
        var1 = arg1;
        var3 = var1.wishlist_items;
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.sku;
            return var1;
        };
        var6 = var2.bind(var3)(var1);
        var5 = var6.filter;
        var7 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 9;
        var3 = var4[var1];
        var1 = undefined;
        var3 = var7.bind(var1)(var3);
        var3 = var3.isNotNullish;
        var5 = var5.bind(var6)(var3);
        var3 = _closure1_slot1;
        var2 = 12;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'SKUS_FETCH_SUCCESS';
        var2['type'] = var6;
        var2['skus'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot16 = var1;
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var2 = undefined;
                    var8 = undefined;
                    var5 = undefined;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var10 = 'WISHLIST_FETCH_START';
                    var4['type'] = var10;
                    var11 = _closure2_slot0;
                    var4['wishlistId'] = var11;
                    var4 = var6.bind(var7)(var4);
case 17: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 13;
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
                    if(!(var7 == var13)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 14;
                    var13 = var15[var13];
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.WishlistFetchSource;
                    var13 = var13.USER_PROFILE;
                    _fun0005_ip = 20; continue _fun0005;
case 18:
                    var13 = _closure2_slot2;
case 20:
                    var12['source'] = var13;
                    var13 = _closure1_slot14;
                    var16 = var13.bind(var2)();
                    var17 = var12;
                    var13 = copyDataProperties(var17, var16);
                    var4['query'] = var12;
                    var12 = true;
                    var4['rejectWithError'] = var12;
                    var4 = var6.bind(var11)(var4);
                    SaveGenerator(address=217);
case 21:
                    return var4;
case 22:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var5 = var4;
                    var6 = var4.body;
                    var8 = var6;
                    var11 = var7 == var6;
                    var6 = undefined;
                    if(var11) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var6 = var8.wishlist_items;
case 25:
                    if(!(var7 == var6)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 15;
                    var6 = var8[var6];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.captureMessage;
                    var6 = 'Wishlist items not found in response';
                    var6 = var7.bind(var8)(var6);
case 27:
                    var6 = _closure1_slot15;
                    var6 = var6.bind(var2)(var5);
                    var7 = var5.body;
                    var5 = _closure1_slot16;
                    var5 = var5.bind(var2)(var7);
                    var5 = _closure1_slot13;
                    var5 = var5.bind(var2)(var7);
                    var6 = _closure1_slot9;
                    var5 = var6.fromServer;
                    var8 = var5.bind(var6)(var7);
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
case 29: // try_end0
                    _fun0005_ip = 30; continue _fun0005;
case 23:
                    return var4;
case 31: // catch_target0
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
                    var9 = 16;
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
                    var3 = 15;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
case 30:
                    return var2;
case 15:
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 32; continue _fun0006 }
case 16:
                    var8 = undefined;
                    var7 = undefined;
                    var3 = undefined;
                    var6 = null;
                    var5 = null;
case 3: // try_start_1
                    var9 = _closure1_slot15;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 13;
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
                    var14 = _closure1_slot14;
                    var15 = var14.bind(var8)();
                    var16 = var13;
                    var14 = copyDataProperties(var16, var15);
                    var2['body'] = var13;
                    var13 = true;
                    var2['rejectWithError'] = var13;
                    var2 = var10.bind(var11)(var2);
                    SaveGenerator(address=122);
case 8:
                    return var2;
case 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(var10) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var5 = var2;
                    var9 = var9.bind(var8)(var2);
                    var11 = var2.body;
                    var9 = _closure1_slot16;
                    var9 = var9.bind(var8)(var11);
                    var9 = _closure1_slot13;
                    var9 = var9.bind(var8)(var11);
                    var10 = _closure1_slot9;
                    var9 = var10.fromServer;
                    var13 = var9.bind(var10)(var11);
                    var7 = var13;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 12;
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
                    if(!(var6 != var9)) { _fun0006_ip = 36; continue _fun0006 }
case 25: // try_start_0
                    var14 = var7;
                    var7 = var14.getSkuIds;
                    var13 = var7.bind(var14)();
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 17;
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
case 37: // try_end0
                    _fun0006_ip = 36; continue _fun0006;
case 38: // catch_target0
                    CatchBlockStart(arg_register=6);
case 36: // try_end1
                    if(!(var6 != var5)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var7 = _closure1_slot6;
                    var5 = var7.getCurrentUser;
                    var5 = var5.bind(var7)();
                    var3 = var5;
                    if(!(var6 != var5)) { _fun0006_ip = 39; continue _fun0006 }
case 41:
                    var9 = _closure1_slot5;
                    var7 = var9.getFirstWishlistId;
                    var5 = var3;
                    var5 = var5.id;
                    var5 = var7.bind(var9)(var5);
                    if(!(var6 == var5)) { _fun0006_ip = 39; continue _fun0006 }
case 23: // try_start_2
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 18;
                    var4 = var6[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.fetchProfile;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=445);
case 42:
                    return var3;
case 43:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 44; continue _fun0006 }
case 45: // try_end2
                    _fun0006_ip = 39; continue _fun0006;
case 44:
                    return var3;
case 46: // catch_target2
                    CatchBlockStart(arg_register=2);
case 39:
                    return var8;
case 34:
                    return var2;
case 47: // catch_target1
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 12;
                    var3 = var9[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'WISHLIST_ADD_SKU_FAILURE';
                    var3['type'] = var7;
                    var7 = _closure2_slot0;
                    var3['skuId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 16;
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
case 32:
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 48; continue _fun0007 }
case 16:
                    var8 = undefined;
                    var4 = undefined;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 12;
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
case 49: // try_start_1
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 13;
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
                    var11 = _closure1_slot14;
                    var14 = var11.bind(var8)();
                    var15 = var10;
                    var11 = copyDataProperties(var15, var14);
                    var2['query'] = var10;
                    var10 = true;
                    var2['rejectWithError'] = var10;
                    var2 = var5.bind(var9)(var2);
                    SaveGenerator(address=178);
case 50:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var5 = _closure1_slot15;
                    var5 = var5.bind(var8)(var2);
                    var10 = var2.body;
                    var5 = _closure1_slot16;
                    var5 = var5.bind(var8)(var10);
                    var5 = _closure1_slot13;
                    var5 = var5.bind(var8)(var10);
                    var9 = _closure1_slot9;
                    var5 = var9.fromServer;
                    var11 = var5.bind(var9)(var10);
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
                    if(!(var5 != var9)) { _fun0007_ip = 53; continue _fun0007 }
case 54: // try_start_0
                    var12 = var4;
                    var4 = var12.getSkuIds;
                    var11 = var4.bind(var12)();
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 17;
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
case 23: // try_end0
                    _fun0007_ip = 53; continue _fun0007;
case 55: // catch_target0
                    CatchBlockStart(arg_register=3);
case 53: // try_end1
                    return var8;
case 51:
                    return var2;
case 56: // catch_target1
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
                    var6 = 16;
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
case 48:
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 57; continue _fun0008 }
case 16:
                    var8 = undefined;
                    var3 = undefined;
                    var4 = _closure1_slot6;
                    var2 = var4.getCurrentUser;
                    var4 = var2.bind(var4)();
                    var3 = var4;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0008_ip = 58; continue _fun0008 }
case 59: // try_start_1
                    var4 = _closure1_slot15;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 13;
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
                    var11 = _closure1_slot14;
                    var13 = var11.bind(var8)();
                    var14 = var10;
                    var11 = copyDataProperties(var14, var13);
                    var2['body'] = var10;
                    var10 = true;
                    var2['rejectWithError'] = var10;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=150);
case 60:
                    return var2;
case 61:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var4 = var4.bind(var8)(var2);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 12;
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
case 64: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 18;
                    var4 = var7[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.fetchProfile;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=261);
case 65:
                    return var3;
case 66:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 67; continue _fun0008 }
case 68: // try_end0
                    _fun0008_ip = 58; continue _fun0008;
case 67: // try_end1
                    return var3;
case 69: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=2);
case 58: // try_end2
                    return var8;
case 62:
                    return var2;
case 70: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 12;
                    var3 = var9[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'WISHLIST_UPDATE_VISIBILITY_FAILURE';
                    var3['type'] = var7;
                    var7 = _closure2_slot0;
                    var3['wishlistId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 16;
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
case 57:
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
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 71; continue _fun0009 }
case 16:
                    var2 = undefined;
                    var5 = undefined;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 12;
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
case 72: // try_start_1
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 13;
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
                    var11 = _closure1_slot14;
                    var14 = var11.bind(var2)();
                    var15 = var8;
                    var11 = copyDataProperties(var15, var14);
                    var4['body'] = var8;
                    var8 = true;
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=226);
case 73:
                    return var4;
case 24:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0009_ip = 46; continue _fun0009 }
case 74:
                    var6 = _closure1_slot15;
                    var6 = var6.bind(var2)(var4);
                    var8 = var4.body;
                    var6 = _closure1_slot16;
                    var6 = var6.bind(var2)(var8);
                    var6 = _closure1_slot13;
                    var6 = var6.bind(var2)(var8);
                    var7 = _closure1_slot9;
                    var6 = var7.fromServer;
                    var11 = var6.bind(var7)(var8);
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
                    if(!(var6 != var7)) { _fun0009_ip = 45; continue _fun0009 }
case 75: // try_start_0
                    var6 = var5;
                    var5 = var6.getSkuIds;
                    var11 = var5.bind(var6)();
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 17;
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
case 76: // try_end0
                    _fun0009_ip = 45; continue _fun0009;
case 77: // catch_target0
                    CatchBlockStart(arg_register=4);
case 45: // try_end1
                    _fun0009_ip = 78; continue _fun0009;
case 46:
                    return var4;
case 79: // catch_target1
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
                    var9 = 16;
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
                    var3 = 15;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
case 78:
                    return var2;
case 71:
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
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arguments[2];
            var3 = arguments[3];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0010_ip = 14; continue _fun0010 }
case 80:
            var4 = 20;
case 14:
            var _closure2_slot2 = var4;
            if(!(var3 === var2)) { _fun0010_ip = 81; continue _fun0010 }
case 82:
            var3 = true;
case 81:
            var _closure2_slot3 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0011_ip = 83; continue _fun0011 }
case 16:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 12;
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
case 84: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 13;
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
                        var10 = _closure1_slot14;
                        var17 = var10.bind(var2)();
                        var18 = var9;
                        var10 = copyDataProperties(var18, var17);
                        var4['query'] = var9;
                        var9 = true;
                        var4['rejectWithError'] = var9;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address=199);
case 85:
                        return var4;
case 86:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0011_ip = 56; continue _fun0011 }
case 87:
                        var7 = _closure1_slot15;
                        var7 = var7.bind(var2)(var4);
                        var10 = var4.body;
                        var8 = _closure1_slot8;
                        var7 = var8.fromServer;
                        var13 = var7.bind(var8)(var10);
                        var12 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var8 = 10;
                        var8 = var7[var8];
                        var11 = var12.bind(var2)(var8);
                        var9 = var11.fetchStorefrontPricesForSkuIds;
                        var8 = 8;
                        var8 = var7[var8];
                        var14 = var12.bind(var2)(var8);
                        var12 = var14.uniq;
                        var16 = var10.skus;
                        var15 = var16.map;
                        var8 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var8 = var15.bind(var16)(var8);
                        var8 = var12.bind(var14)(var8);
                        var8 = var9.bind(var11)(var8);
                        var8 = _closure1_slot1;
                        var9 = var7[var5];
                        var12 = var8.bind(var2)(var9);
                        var11 = var12.dispatch;
                        var9 = {};
                        var14 = 'WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS';
                        var9['type'] = var14;
                        var14 = _closure2_slot1;
                        var9['userIds'] = var14;
                        var14 = _closure2_slot0;
                        var9['applicationIds'] = var14;
                        var9['data'] = var13;
                        var9 = var11.bind(var12)(var9);
                        var7 = var7[var5];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'SKUS_FETCH_SUCCESS';
                        var7['type'] = var11;
                        var10 = var10.skus;
                        var7['skus'] = var10;
                        var7 = var8.bind(var9)(var7);
case 88: // try_end0
                        _fun0011_ip = 89; continue _fun0011;
case 56:
                        return var4;
case 90: // catch_target0
                        CatchBlockStart(arg_register=8);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var7 = 15;
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
case 89:
                        return var2;
case 83:
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
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/WishlistActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();