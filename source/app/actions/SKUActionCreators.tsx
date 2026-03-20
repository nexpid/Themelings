// app/actions/SKUActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchSKU() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = var4;
                    var3 = _closure1_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)(var4);
                    var2 = null;
                    if(!(var2 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var4 = undefined;
                    var8 = var7.bind(var4)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'SKU_FETCH_START';
                    var3['type'] = var9;
                    var9 = var5;
                    var3['skuId'] = var9;
                    var3 = var7.bind(var8)(var3);
case 6: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 6;
                    var3 = var8[var3];
                    var8 = var7.bind(var4)(var3);
                    var7 = var8.httpGetWithCountryCodeQuery;
                    var3 = {};
                    var11 = _closure1_slot8;
                    var10 = var11.STORE_SKU;
                    var9 = var5;
                    var9 = var10.bind(var11)(var9);
                    var3['url'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=159);
case 7:
                    return var3;
case 8:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var2];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'SKU_FETCH_SUCCESS';
                    var7['type'] = var10;
                    var10 = var3.body;
                    var7['sku'] = var10;
                    var7 = var8.bind(var9)(var7);
case 4: // try_end0
                    var7 = undefined;
                    return var7;
case 9:
                    return var3;
case 11: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = var6[var2];
                    var8 = var3.bind(var4)(var2);
                    var7 = var8.dispatch;
                    var2 = {};
                    var9 = 'SKU_FETCH_FAIL';
                    var2['type'] = var9;
                    var2['skuId'] = var5;
                    var2 = var7.bind(var8)(var2);
                    var2 = 7;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'Failed to fetch SKU ';
                    var12 = var3.bind(var2)(var5);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var13 = var3;
                    var2 = new var13[var4](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _fetchPublishedSKU() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var14 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 3:
                    var13 = arg1;
                    var5 = var14;
                    var11 = arg3;
                    var9 = arg4;
                    var4 = undefined;
                    var7 = undefined;
                    var3 = undefined;
                    var8 = undefined;
                    var10 = undefined;
                    var12 = _closure1_slot5;
                    var2 = var12.get;
                    var12 = var2.bind(var12)(var14);
                    var2 = null;
                    if(!(var2 == var12)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var14 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 5;
                    var12 = var12[var2];
                    var15 = var14.bind(var4)(var12);
                    var14 = var15.dispatch;
                    var12 = {};
                    var16 = 'SKU_FETCH_START';
                    var12['type'] = var16;
                    var16 = var5;
                    var12['skuId'] = var16;
                    var12 = var14.bind(var15)(var12);
case 15: // try_start_0
                    var16 = _closure1_slot6;
                    var15 = var16.inTestModeForApplication;
                    var14 = var13;
                    var14 = var15.bind(var16)(var14);
                    var12 = var14;
                    if(var14) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var15 = _closure1_slot4;
                    var14 = var15.inDevModeForApplication;
                    var12 = var14.bind(var15)(var13);
case 16:
                    var13 = var12;
                    var7 = var13;
                    var12 = {};
                    var16 = _closure1_slot8;
                    if(var13) { _fun0002_ip = 18; continue _fun0002 }
case 10:
                    var14 = var16.STORE_PUBLISHED_LISTINGS_SKU;
                    var13 = var5;
                    var13 = var14.bind(var16)(var13);
                    _fun0002_ip = 19; continue _fun0002;
case 18:
                    var15 = var16.STORE_SKU;
                    var14 = var5;
                    var13 = var15.bind(var16)(var14);
case 19:
                    var12['url'] = var13;
                    var13 = false;
                    var12['rejectWithError'] = var13;
                    var3 = var12;
                    var8 = {};
                    var13 = var11;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 8;
                    var12 = var15[var12];
                    var12 = var14.bind(var4)(var12);
                    var12 = var12.ShopVariantsReturnStyle;
                    var12 = var12.VARIANTS_GROUP;
                    if(!(var13 === var12)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var12 = var8;
                    var12['variants_return_style'] = var11;
case 20:
                    if(!var9) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var11 = var8;
                    var9 = true;
                    var11['include_unpublished'] = var9;
case 22:
                    var9 = global;
                    var12 = var9.Object;
                    var11 = var12.keys;
                    var9 = var8;
                    var9 = var11.bind(var12)(var9);
                    var11 = var9.length;
                    var9 = 0;
                    if(!(var11 > var9)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var9 = var3;
                    var9['query'] = var8;
case 24:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 6;
                    var8 = var11[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.httpGetWithCountryCodeQuery;
                    var3 = var8.bind(var9)(var3);
                    SaveGenerator(address=348);
case 26:
                    return var3;
case 27:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var10 = var3;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var2];
                    var11 = var9.bind(var4)(var8);
                    var9 = var11.dispatch;
                    var8 = {};
                    var12 = 'SKU_FETCH_SUCCESS';
                    var8['type'] = var12;
                    var12 = var7;
                    var13 = var10;
                    var13 = var13.body;
                    if(var12) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var12 = var13.sku;
                    _fun0002_ip = 32; continue _fun0002;
case 30:
                    var12 = var13;
case 32:
                    var8['sku'] = var12;
                    var8 = var9.bind(var11)(var8);
                    if(var7) { _fun0002_ip = 13; continue _fun0002 }
case 33:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var2];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'STORE_LISTING_FETCH_SUCCESS';
                    var7['type'] = var11;
                    var10 = var10.body;
                    var7['storeListing'] = var10;
                    var7 = var8.bind(var9)(var7);
case 13: // try_end0
                    return var4;
case 28:
                    return var3;
case 34: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = var6[var2];
                    var8 = var3.bind(var4)(var2);
                    var7 = var8.dispatch;
                    var2 = {};
                    var9 = 'SKU_FETCH_FAIL';
                    var2['type'] = var9;
                    var2['skuId'] = var5;
                    var2 = var7.bind(var8)(var2);
                    var2 = 7;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'Failed to fetch SKU ';
                    var17 = var3.bind(var2)(var5);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var18 = var3;
                    var2 = new var18[var4](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 12:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _fetchTestSKUsForApplication() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    var3 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var7 = undefined;
                    if(!(var3 === var7)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var3 = true;
case 37:
                    SaveGenerator(address=28);
case 39:
                    return var7;
case 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var6 = _closure1_slot6;
                    var4 = var6.inTestModeForApplication;
                    var4 = var4.bind(var6)(var10);
                    if(var4) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var6 = _closure1_slot4;
                    var4 = var6.inDevModeForApplication;
                    var4 = var4.bind(var6)(var10);
                    if(var4) { _fun0003_ip = 43; continue _fun0003 }
case 45:
                    if(!var3) { _fun0003_ip = 43; continue _fun0003 }
case 46:
                    var3 = global;
                    var6 = var3.Error;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {constructor: {value: var6}});
                    var11 = 'this should only be used in test mode';
                    var12 = var4;
                    var3 = new var12[var6](var11, var10);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 43:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var3 = var6[var3];
                    var6 = var4.bind(var7)(var3);
                    var4 = var6.httpGetWithCountryCodeQuery;
                    var3 = {};
                    var9 = _closure1_slot8;
                    var8 = var9.APPLICATION_SKUS;
                    var8 = var8.bind(var9)(var10);
                    var3['url'] = var8;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=177);
case 47:
                    return var3;
case 48:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                    var4 = var3.body;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 5;
                    var5 = var8[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'SKUS_FETCH_SUCCESS';
                    var5['type'] = var8;
                    var5['skus'] = var4;
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 49:
                    return var3;
case 41:
                    return var2;
case 35:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _fetchPurchasePreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    var8 = arg3;
                    var5 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    var12 = arg2;
                    var13 = var8;
                    var14 = var5;
                    var7 = undefined;
                    var3 = undefined;
                    var11 = undefined;
                    var2 = undefined;
                    var4 = {};
                    var4['payment_source_id'] = var8;
                    var15 = null;
                    var8 = var15 == var5;
                    var5 = undefined;
                    if(var8) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var8 = var14;
                    var5 = var8.isGift;
case 53:
                    var4['gift'] = var5;
                    var11 = var4;
                    var8 = _closure1_slot6;
                    var5 = var8.inTestModeForApplication;
                    var5 = var5.bind(var8)(var10);
                    if(var5) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                    var9 = _closure1_slot4;
                    var8 = var9.inDevModeForApplication;
                    var5 = var8.bind(var9)(var10);
case 55:
                    if(!var5) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                    var8 = var11;
                    var5 = true;
                    var8['test_mode'] = var5;
case 57:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var9 = 5;
                    var5 = var5[var9];
                    var10 = var8.bind(var7)(var5);
                    var8 = var10.dispatch;
                    var5 = {};
                    var16 = 'SKU_PURCHASE_PREVIEW_FETCH';
                    var5['type'] = var16;
                    var16 = var12;
                    var5['skuId'] = var16;
                    var5 = var8.bind(var10)(var5);
case 59: // try_start_0
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 6;
                    var5 = var10[var5];
                    var10 = var8.bind(var7)(var5);
                    var8 = var10.httpGetWithCountryCodeQuery;
                    var5 = {};
                    var18 = _closure1_slot8;
                    var17 = var18.STORE_SKU_PURCHASE;
                    var16 = var12;
                    var16 = var17.bind(var18)(var16);
                    var5['url'] = var16;
                    var5['query'] = var11;
                    var11 = true;
                    var5['oldFormErrors'] = var11;
                    var11 = false;
                    var5['rejectWithError'] = var11;
                    var5 = var8.bind(var10)(var5);
                    SaveGenerator(address=248);
case 60:
                    return var5;
case 61:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                    var3 = var5;
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var9];
                    var11 = var10.bind(var7)(var8);
                    var10 = var11.dispatch;
                    var8 = {};
                    var16 = 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS';
                    var8['type'] = var16;
                    var16 = var12;
                    var8['skuId'] = var16;
                    var8['paymentSourceId'] = var13;
                    var13 = var5.body;
                    var8['price'] = var13;
                    var13 = var14;
                    var15 = var15 == var13;
                    var13 = undefined;
                    if(var15) { _fun0004_ip = 64; continue _fun0004 }
case 2:
                    var13 = var14.loadId;
case 64:
                    var8['checkoutSessionId'] = var13;
                    var8 = var10.bind(var11)(var8);
case 65: // try_end0
                    _fun0004_ip = 66; continue _fun0004;
case 62:
                    return var5;
case 67: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var6 = var8;
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var9 = var5[var9];
                    var11 = var10.bind(var7)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var13 = 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE';
                    var9['type'] = var13;
                    var9['skuId'] = var12;
                    var9 = var10.bind(var11)(var9);
                    var10 = _closure1_slot0;
                    var9 = 9;
                    var5 = var5[var9];
                    var5 = var10.bind(var7)(var5);
                    var5 = var5.BillingError;
                    var5 = var8 instanceof var5;
                    if(var5) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var8.bind(var7)(var5);
                    var9 = var5.BillingError;
                    var19 = var6;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var20 = var8;
                    var5 = new var20[var9](var19, var18);
                    var5 = var5 instanceof Object ? var5 : var8;
                    _fun0004_ip = 70; continue _fun0004;
case 68:
                    var5 = var6;
case 70:
                    var2 = var5;
                    var6 = var5.code;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 10;
                    var5 = var5[var8];
                    var5 = var9.bind(var7)(var5);
                    var5 = var5.ErrorCodes;
                    var5 = var5.BILLING_BUNDLE_ALREADY_PURCHASED;
                    if(!(var6 !== var5)) { _fun0004_ip = 71; continue _fun0004 }
case 72:
                    var5 = var2;
                    var6 = var5.code;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var9.bind(var7)(var5);
                    var5 = var5.ErrorCodes;
                    var5 = var5.BILLING_BUNDLE_PARTIALLY_OWNED;
                    if(!(var6 !== var5)) { _fun0004_ip = 71; continue _fun0004 }
case 73:
                    var5 = var2;
                    var5 = var5.code;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.ErrorCodes;
                    var4 = var4.INVALID_BILLING_ADDRESS;
                    if(!(var5 !== var4)) { _fun0004_ip = 71; continue _fun0004 }
case 66:
                    return var3;
case 71:
                    throw var2;
case 51:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _grantChannelBranchEntitlement() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var12 = arg1;
                    var11 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 64; continue _fun0005 }
case 36:
                    var7 = var12;
                    var10 = arg2;
                    var6 = var11;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var8 = 5;
                    var2 = var2[var8];
                    var5 = undefined;
                    var9 = var3.bind(var5)(var2);
                    var3 = var9.dispatch;
                    var2 = {};
                    var13 = 'SKU_PURCHASE_START';
                    var2['type'] = var13;
                    var2['applicationId'] = var12;
                    var2['skuId'] = var11;
                    var2 = var3.bind(var9)(var2);
case 74: // try_start_0
                    var3 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 11;
                    var2 = var9[var2];
                    var2 = var3.bind(var5)(var2);
                    var9 = var2.HTTP;
                    var3 = var9.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var12 = _closure1_slot8;
                    var11 = var12.CHANNEL_ENTITLEMENT_GRANT;
                    var10 = var11.bind(var12)(var10);
                    var2['url'] = var10;
                    var2 = var3.bind(var9)(var2);
                    SaveGenerator(address=152);
case 16:
                    return var2;
case 75:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 76; continue _fun0005 }
case 77:
                    var9 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var10 = var9.bind(var5)(var3);
                    var9 = var10.dispatch;
                    var3 = {};
                    var11 = 'SKU_PURCHASE_SUCCESS';
                    var3['type'] = var11;
                    var11 = var6;
                    var3['skuId'] = var11;
                    var11 = var2.body;
                    var3['entitlements'] = var11;
                    var11 = new Array(0);
                    var3['libraryApplications'] = var11;
                    var3 = var9.bind(var10)(var3);
                    var3 = var2.body;
case 78: // try_end0
                    return var3;
case 76:
                    return var2;
case 79: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var9 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var2 = var3[var2];
                    var2 = var9.bind(var5)(var2);
                    var2 = var2.BillingError;
                    var9 = var2.prototype;
                    var9 = Object.create(var9, {constructor: {value: var2}});
                    var15 = var9;
                    var14 = var10;
                    var2 = new var15[var2](var14, var13);
                    var2 = var2 instanceof Object ? var2 : var9;
                    var4 = _closure1_slot1;
                    var3 = var3[var8];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'SKU_PURCHASE_FAIL';
                    var3['type'] = var8;
                    var3['applicationId'] = var7;
                    var3['skuId'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 64:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _orderSKU() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 80; continue _fun0006 }
case 81:
                    var7 = arg1;
                    var11 = arg2;
                    var10 = arg3;
                    var5 = arg4;
                    var9 = arg5;
                    var4 = undefined;
                    var8 = undefined;
                    var12 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var6 = var6[var3];
                    var13 = var12.bind(var4)(var6);
                    var12 = var13.dispatch;
                    var6 = {};
                    var14 = 'ORDER_CREATE_START';
                    var6['type'] = var14;
                    var6 = var12.bind(var13)(var6);
case 82: // try_start_0
                    var6 = {};
                    var12 = {'sku_id': null, 'quantity': 1, 'purchase_type': 1};
                    var12['sku_id'] = var7;
                    var7 = new Array(1);
                    var7[0] = var12;
                    var6['order_line_items'] = var7;
                    var7 = {};
                    var7['payment_source_id'] = var11;
                    var6['billing_facet'] = var7;
                    var7 = {};
                    var7['request_gateway_country_code'] = var10;
                    var6['location_facet'] = var7;
                    var8 = var6;
                    if(!var5) { _fun0006_ip = 83; continue _fun0006 }
case 84:
                    var6 = var8;
                    var5 = {};
                    var7 = true;
                    var5['is_gift'] = var7;
                    var7 = {};
                    var10 = var9.recipient_id;
                    var7['recipient_id'] = var10;
                    var10 = var9.gift_style;
                    var7['gift_style'] = var10;
                    var10 = var9.emoji_id;
                    var7['emoji_id'] = var10;
                    var10 = var9.emoji_name;
                    var7['emoji_name'] = var10;
                    var10 = var9.sound_id;
                    var7['sound_id'] = var10;
                    var10 = var9.reward_sku_ids;
                    var7['reward_sku_ids'] = var10;
                    var9 = var9.custom_message;
                    var7['custom_message_contents'] = var9;
                    var5['gift_customization'] = var7;
                    var6['gifting_facet'] = var5;
case 83:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 11;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.post;
                    var5 = {};
                    var9 = _closure1_slot8;
                    var9 = var9.ORDER_CREATE;
                    var5['url'] = var9;
                    var5['body'] = var8;
                    var8 = false;
                    var5['rejectWithError'] = var8;
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=311);
case 85:
                    return var5;
case 86:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 87; continue _fun0006 }
case 88:
                    var10 = var5.body;
                    var6 = var10.id;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var3];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'ORDER_CREATE_SUCCESS';
                    var7['type'] = var11;
                    var7['orderId'] = var6;
                    var7['order'] = var10;
                    var7 = var8.bind(var9)(var7);
case 89: // try_end0
                    return var6;
case 87:
                    return var5;
case 90: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var7.bind(var4)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'ORDER_CREATE_FAIL';
                    var3['type'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = _closure1_slot0;
                    var2 = 9;
                    var2 = var6[var2];
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.BillingError;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'Failed to create order: ';
                    var15 = var3.bind(var2)(var5);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var16 = var3;
                    var2 = new var16[var4](var15, var14);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 80:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _purchaseSKU() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var26 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=7);
                    if(var8) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                    var13 = var26;
                    var _closure4_slot0 = var26;
                    var7 = var6;
                    var _closure4_slot1 = var6;
                    var8 = undefined;
                    var3 = undefined;
                    var16 = undefined;
                    var11 = undefined;
                    var17 = undefined;
                    var14 = undefined;
                    var22 = undefined;
                    var5 = undefined;
                    var23 = undefined;
                    var20 = undefined;
                    var10 = undefined;
                    var18 = undefined;
                    var15 = undefined;
                    var21 = undefined;
                    var12 = undefined;
                    var2 = undefined;
                    var9 = {};
                    var31 = _closure1_slot9;
                    var32 = var9;
                    var24 = copyDataProperties(var32, var31);
                    var31 = arg3;
                    var32 = var9;
                    var24 = copyDataProperties(var32, var31);
                    var3 = var9.paymentSource;
                    var16 = var9.expectedAmount;
                    var11 = var9.expectedCurrency;
                    var17 = var9.analyticsLoadId;
                    var14 = var9.isGift;
                    var22 = var9.giftInfoOptions;
                    var5 = var9.subscriptionPlanId;
                    var23 = var9.loadId;
                    var20 = var9.countryCode;
                    var10 = var9.orderId;
                    var25 = _closure1_slot1;
                    var24 = _closure1_slot2;
                    var9 = 5;
                    var24 = var24[var9];
                    var25 = var25.bind(var8)(var24);
                    var24 = var25.wait;
                    var19 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'SKU_PURCHASE_START';
                        var2['type'] = var5;
                        var6 = _closure4_slot0;
                        var2['applicationId'] = var6;
                        var5 = _closure4_slot1;
                        var2['skuId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var19 = var24.bind(var25)(var19);
                    var25 = _closure1_slot6;
                    var24 = var25.inTestModeForApplication;
                    var24 = var24.bind(var25)(var26);
                    var19 = var24;
                    if(var24) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                    var26 = _closure1_slot4;
                    var25 = var26.inDevModeForApplication;
                    var24 = var13;
                    var19 = var25.bind(var26)(var24);
case 93:
                    var18 = var19;
case 95: // try_start_0
                    var19 = {};
                    var24 = var14;
                    var19['gift'] = var24;
                    var19['sku_subscription_plan_id'] = var5;
                    var24 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var5 = 12;
                    var5 = var25[var5];
                    var25 = var24.bind(var8)(var5);
                    var24 = var25.createGatewayCheckoutContext;
                    var5 = var3;
                    var5 = var24.bind(var25)(var5);
                    SaveGenerator(address=281);
case 96:
                    return var5;
case 97:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=23);
                    if(var24) { _fun0007_ip = 98; continue _fun0007 }
case 99:
                    var19['gateway_checkout_context'] = var5;
                    var19['load_id'] = var23;
                    var19['gift_info_options'] = var22;
                    var15 = var19;
                    if(var18) { _fun0007_ip = 100; continue _fun0007 }
case 101:
                    var18 = var3;
                    var22 = null;
                    if(!(var22 != var18)) { _fun0007_ip = 102; continue _fun0007 }
case 2:
                    var19 = var15;
                    var25 = var3;
                    var18 = var25.id;
                    var19['payment_source_id'] = var18;
                    var23 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var24 = 13;
                    var18 = var18[var24];
                    var23 = var23.bind(var8)(var18);
                    var18 = var23.createPaymentSourceToken;
                    var18 = var18.bind(var23)(var25);
                    SaveGenerator(address=378);
case 89:
                    return var18;
case 103:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=22);
                    if(var23) { _fun0007_ip = 104; continue _fun0007 }
case 105:
                    var19['payment_source_token'] = var18;
                    var25 = _closure1_slot7;
                    var23 = var25.has;
                    var19 = var3;
                    var19 = var19.type;
                    var19 = var23.bind(var25)(var19);
                    if(!var19) { _fun0007_ip = 102; continue _fun0007 }
case 106:
                    var23 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var19 = var19[var24];
                    var24 = var23.bind(var8)(var19);
                    var23 = var24.popupBridgeState;
                    var19 = var3;
                    var19 = var19.type;
                    var19 = var23.bind(var24)(var19);
                    SaveGenerator(address=461);
case 107:
                    return var19;
case 108:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=22);
                    if(var23) { _fun0007_ip = 109; continue _fun0007 }
case 110:
                    var21 = var19;
                    var23 = var15;
                    var25 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var24 = 11;
                    var24 = var26[var24];
                    var25 = var25.bind(var8)(var24);
                    var24 = var25.getAPIBaseURL;
                    var24 = var24.bind(var25)();
                    var28 = _closure1_slot8;
                    var27 = var28.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    var25 = var3;
                    var26 = var25.type;
                    var29 = var22 != var19;
                    var25 = '';
                    if(!var29) { _fun0007_ip = 111; continue _fun0007 }
case 112:
                    var25 = var21;
case 111:
                    var21 = 'success';
                    var21 = var27.bind(var28)(var26, var25, var21);
                    var21 = var24 + var21;
                    var23['return_url'] = var21;
case 102:
                    var21 = var20;
                    if(!(var22 != var21)) { _fun0007_ip = 113; continue _fun0007 }
case 114:
                    var21 = var15;
                    var21['country_code'] = var20;
                    _fun0007_ip = 113; continue _fun0007;
case 109: // try_end0
                    return var19;
case 104:
                    return var18;
case 100: // try_start_1
                    var19 = var15;
                    var18 = true;
                    var19['test_mode'] = var18;
case 113:
                    var18 = var16;
                    var19 = null;
                    if(!(var19 != var18)) { _fun0007_ip = 115; continue _fun0007 }
case 116:
                    var18 = var15;
                    var18['expected_amount'] = var16;
case 115:
                    var16 = var11;
                    if(!(var19 != var16)) { _fun0007_ip = 117; continue _fun0007 }
case 118:
                    var16 = var15;
                    var16['expected_currency'] = var11;
case 117:
                    var16 = var15;
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var11 = 14;
                    var11 = var20[var11];
                    var18 = var18.bind(var8)(var11);
                    var11 = var18.getPurchaseToken;
                    var11 = var11.bind(var18)();
                    var16['purchase_token'] = var11;
                    var11 = var10;
                    if(!(var19 != var11)) { _fun0007_ip = 119; continue _fun0007 }
case 120:
                    var11 = var15;
                    var11['order_id'] = var10;
case 119:
                    var11 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 11;
                    var10 = var16[var10];
                    var10 = var11.bind(var8)(var10);
                    var16 = var10.HTTP;
                    var11 = var16.post;
                    var10 = {};
                    var21 = _closure1_slot8;
                    var20 = var21.STORE_SKU_PURCHASE;
                    var18 = var7;
                    var18 = var20.bind(var21)(var18);
                    var10['url'] = var18;
                    var10['body'] = var15;
                    var15 = {};
                    var15['load_id'] = var17;
                    var10['context'] = var15;
                    var15 = true;
                    var10['oldFormErrors'] = var15;
                    var15 = false;
                    var10['rejectWithError'] = var15;
                    var10 = var11.bind(var16)(var10);
                    SaveGenerator(address=776);
case 121:
                    return var10;
case 122:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0007_ip = 123; continue _fun0007 }
case 124:
                    var12 = var10;
                    var16 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var9];
                    var17 = var16.bind(var8)(var11);
                    var16 = var17.dispatch;
                    var11 = {};
                    var18 = 'SKU_PURCHASE_SUCCESS';
                    var11['type'] = var18;
                    var18 = var7;
                    var11['skuId'] = var18;
                    var18 = var10.body;
                    var18 = var18.library_applications;
                    if(!(var19 == var18)) { _fun0007_ip = 125; continue _fun0007 }
case 126:
                    var18 = new Array(0);
                    _fun0007_ip = 127; continue _fun0007;
case 125:
                    var19 = var12;
                    var19 = var19.body;
                    var21 = var19.library_applications;
                    var20 = var21.filter;
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var19 = 15;
                    var19 = var23[var19];
                    var19 = var22.bind(var8)(var19);
                    var19 = var19.isNotNullish;
                    var18 = var20.bind(var21)(var19);
case 127:
                    var11['libraryApplications'] = var18;
                    var18 = var12.body;
                    var18 = var18.entitlements;
                    var11['entitlements'] = var18;
                    var18 = var12.body;
                    var18 = var18.applied_user_discounts;
                    var11['appliedUserDiscounts'] = var18;
                    var18 = var12.body;
                    var18 = var18.gift_code;
                    var11['giftCode'] = var18;
                    var11 = var16.bind(var17)(var11);
                    var11 = {};
                    var31 = var12.body;
                    var32 = var11;
                    var16 = copyDataProperties(var32, var31);
                    var12 = var12.body;
                    var16 = var12.applied_user_discounts;
                    var12 = 'appliedUserDiscounts';
                    var11[var12] = var16;
                    var12 = 'redirectConfirmation';
                    var11[var12] = var15;
case 128: // try_end1
                    return var11;
case 123:
                    return var10;
case 98:
                    return var5;
case 129: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    var4 = var10;
                    var12 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var11 = 9;
                    var5 = var5[var11];
                    var5 = var12.bind(var8)(var5);
                    var5 = var5.BillingError;
                    var5 = var10 instanceof var5;
                    if(var5) { _fun0007_ip = 130; continue _fun0007 }
case 131:
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var5 = var10.bind(var8)(var5);
                    var11 = var5.BillingError;
                    var32 = var4;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {constructor: {value: var11}});
                    var33 = var10;
                    var5 = new var33[var11](var32, var31);
                    var10 = var5 instanceof Object ? var5 : var10;
                    _fun0007_ip = 132; continue _fun0007;
case 130:
                    var10 = var4;
case 132:
                    var2 = var10;
                    var12 = var10.code;
                    var15 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var10 = 10;
                    var11 = var11[var10];
                    var11 = var15.bind(var8)(var11);
                    var11 = var11.ErrorCodes;
                    var11 = var11.CONFIRMATION_REQUIRED;
                    var11 = var12 !== var11;
                    var5 = var11;
                    if(!var11) { _fun0007_ip = 133; continue _fun0007 }
case 134:
                    var11 = var2;
                    var12 = var11.code;
                    var15 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var10];
                    var11 = var15.bind(var8)(var11);
                    var11 = var11.ErrorCodes;
                    var11 = var11.AUTHENTICATION_REQUIRED;
                    var5 = var12 !== var11;
case 133:
                    if(var5) { _fun0007_ip = 135; continue _fun0007 }
case 136:
                    var11 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var12 = var11.bind(var8)(var5);
                    var11 = var12.dispatch;
                    var5 = {};
                    var15 = 'SKU_PURCHASE_AWAIT_CONFIRMATION';
                    var5['type'] = var15;
                    var15 = var7;
                    var5['skuId'] = var15;
                    var5['isGift'] = var14;
                    var5 = var11.bind(var12)(var5);
case 135:
                    var11 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var9 = var5[var9];
                    var12 = var11.bind(var8)(var9);
                    var11 = var12.dispatch;
                    var9 = {};
                    var14 = 'SKU_PURCHASE_FAIL';
                    var9['type'] = var14;
                    var9['applicationId'] = var13;
                    var9['skuId'] = var7;
                    var7 = var2;
                    var9['error'] = var7;
                    var9 = var11.bind(var12)(var9);
                    var7 = var7.code;
                    var9 = _closure1_slot0;
                    var5 = var5[var10];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.ErrorCodes;
                    var5 = var5.CONFIRMATION_REQUIRED;
                    if(!(var7 === var5)) { _fun0007_ip = 137; continue _fun0007 }
case 138:
                    var5 = var4;
                    var5 = var5.body;
                    var5 = var5.payment_id;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 13;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    if(var5) { _fun0007_ip = 139; continue _fun0007 }
case 140:
                    var7 = var6.dispatchConfirmationError;
                    var5 = 'payment id cannot be null on redirected confirmations.';
                    var5 = var7.bind(var6)(var5);
                    throw var5;
case 139:
                    var5 = var6.handleConfirmation;
                    var4 = var4.body;
                    var3 = var5.bind(var6)(var4, var3);
                    return var3;
case 137:
                    throw var2;
case 91:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _resendPaymentVerificationEmail() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 141; continue _fun0008 }
case 81: // try_start_0
                    var7 = {};
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 14;
                    var2 = var9[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var2);
                    var2 = var4.getPurchaseToken;
                    var2 = var2.bind(var4)();
                    var7['purchase_token'] = var2;
                    var4 = {};
                    var2 = 11;
                    var2 = var9[var2];
                    var2 = var6.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.post;
                    var2 = {};
                    var8 = _closure1_slot8;
                    var8 = var8.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION;
                    var2['url'] = var8;
                    var2['body'] = var7;
                    var7 = true;
                    var2['oldFormErrors'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=119);
case 142:
                    return var2;
case 143:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 144; continue _fun0008 }
case 145:
                    var10 = var2.body;
                    var11 = var4;
                    var5 = copyDataProperties(var11, var10);
case 146: // try_end0
                    return var4;
case 144:
                    return var2;
case 84: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var3 = var7;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 9;
                    var4 = var4[var6];
                    var5 = undefined;
                    var4 = var8.bind(var5)(var4);
                    var4 = var4.BillingError;
                    var4 = var7 instanceof var4;
                    if(var4) { _fun0008_ip = 147; continue _fun0008 }
case 148:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var5 = var2.BillingError;
                    var11 = var3;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var12 = var4;
                    var2 = new var12[var5](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var4;
                    _fun0008_ip = 149; continue _fun0008;
case 147:
                    var2 = var3;
case 149:
                    throw var2;
case 141:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ADYEN_PAYMENT_SOURCES;
    var _closure1_slot7 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = false;
    var4['isGift'] = var7;
    var _closure1_slot9 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/SKUActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchSKU() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSKU'] = var4;
    var4 = function fetchPublishedSKU() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchPublishedSKU'] = var4;
    var4 = function fetchTestSKUsForApplication() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchTestSKUsForApplication'] = var4;
    var4 = function fetchPurchasePreview() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchPurchasePreview'] = var4;
    var4 = function grantChannelBranchEntitlement() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['grantChannelBranchEntitlement'] = var4;
    var4 = function orderSKU() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['orderSKU'] = var4;
    var4 = function purchaseSKU() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['purchaseSKU'] = var4;
    var4 = function resendPaymentVerificationEmail() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resendPaymentVerificationEmail'] = var4;
    var4 = function clearPurchaseError() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SKU_PURCHASE_CLEAR_ERROR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearPurchaseError'] = var4;
    var4 = function showPurchaseConfirmationStep() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'SKU_PURCHASE_SHOW_CONFIRMATION_STEP';
            var1['type'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['showPurchaseConfirmationStep'] = var4;
    var2 = function updateSKUPaymentIsGift(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SKU_PURCHASE_UPDATE_IS_GIFT';
        var2['type'] = var5;
        var5 = arg1;
        var2['isGift'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateSKUPaymentIsGift'] = var2;
    return var1;
})();