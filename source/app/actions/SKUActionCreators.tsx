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
 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 326; continue _fun0001 }
 13:
                    var5 = var4;
                    var3 = _closure1_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)(var4);
                    var2 = null;
                    if(!(var2 == var3)) { _fun0001_ip = 214; continue _fun0001 }
 42:
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
 94: // try_start_0
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
 157:
                    return var3;
 159:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 219; continue _fun0001 }
 165:
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
 214: // try_end0
                    var7 = undefined;
                    return var7;
 219:
                    return var3;
 222: // catch_target0
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
 326:
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
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var12 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 534; continue _fun0002 }
 13:
                    var9 = arg1;
                    var5 = var12;
                    var11 = arg3;
                    var4 = undefined;
                    var7 = undefined;
                    var3 = undefined;
                    var10 = undefined;
                    var8 = _closure1_slot5;
                    var2 = var8.get;
                    var8 = var2.bind(var8)(var12);
                    var2 = null;
                    if(!(var2 == var8)) { _fun0002_ip = 424; continue _fun0002 }
 56:
                    var12 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 5;
                    var8 = var8[var2];
                    var13 = var12.bind(var4)(var8);
                    var12 = var13.dispatch;
                    var8 = {};
                    var14 = 'SKU_FETCH_START';
                    var8['type'] = var14;
                    var14 = var5;
                    var8['skuId'] = var14;
                    var8 = var12.bind(var13)(var8);
 106: // try_start_0
                    var14 = _closure1_slot6;
                    var13 = var14.inTestModeForApplication;
                    var12 = var9;
                    var12 = var13.bind(var14)(var12);
                    var8 = var12;
                    if(var12) { _fun0002_ip = 145; continue _fun0002 }
 130:
                    var13 = _closure1_slot4;
                    var12 = var13.inDevModeForApplication;
                    var8 = var12.bind(var13)(var9);
 145:
                    var9 = var8;
                    var7 = var9;
                    var8 = {};
                    var14 = _closure1_slot8;
                    if(var9) { _fun0002_ip = 176; continue _fun0002 }
 160:
                    var12 = var14.STORE_PUBLISHED_LISTINGS_SKU;
                    var9 = var5;
                    var9 = var12.bind(var14)(var9);
                    _fun0002_ip = 190; continue _fun0002;
 176:
                    var13 = var14.STORE_SKU;
                    var12 = var5;
                    var9 = var13.bind(var14)(var12);
 190:
                    var8['url'] = var9;
                    var9 = false;
                    var8['rejectWithError'] = var9;
                    var3 = var8;
                    var9 = var11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 8;
                    var8 = var13[var8];
                    var8 = var12.bind(var4)(var8);
                    var8 = var8.ShopVariantsReturnStyle;
                    var8 = var8.VARIANTS_GROUP;
                    if(!(var9 === var8)) { _fun0002_ip = 258; continue _fun0002 }
 242:
                    var9 = var3;
                    var8 = {};
                    var8['variants_return_style'] = var11;
                    var9['query'] = var8;
 258:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 6;
                    var8 = var11[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.httpGetWithCountryCodeQuery;
                    var3 = var8.bind(var9)(var3);
                    SaveGenerator(address=293);
 291:
                    return var3;
 293:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 427; continue _fun0002 }
 302:
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
                    if(var12) { _fun0002_ip = 361; continue _fun0002 }
 353:
                    var12 = var13.sku;
                    _fun0002_ip = 364; continue _fun0002;
 361:
                    var12 = var13;
 364:
                    var8['sku'] = var12;
                    var8 = var9.bind(var11)(var8);
                    if(var7) { _fun0002_ip = 424; continue _fun0002 }
 377:
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
 424: // try_end0
                    return var4;
 427:
                    return var3;
 430: // catch_target0
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
                    var15 = var3.bind(var2)(var5);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var16 = var3;
                    var2 = new var16[var4](var15, var14);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 534:
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
 0:
                    StartGenerator();
                    var10 = arg1;
                    var3 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 244; continue _fun0003 }
 16:
                    var7 = undefined;
                    if(!(var3 === var7)) { _fun0003_ip = 24; continue _fun0003 }
 22:
                    var3 = true;
 24:
                    SaveGenerator(address=28);
 26:
                    return var7;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 241; continue _fun0003 }
 37:
                    var6 = _closure1_slot6;
                    var4 = var6.inTestModeForApplication;
                    var4 = var4.bind(var6)(var10);
                    if(var4) { _fun0003_ip = 115; continue _fun0003 }
 58:
                    var6 = _closure1_slot4;
                    var4 = var6.inDevModeForApplication;
                    var4 = var4.bind(var6)(var10);
                    if(var4) { _fun0003_ip = 115; continue _fun0003 }
 76:
                    if(!var3) { _fun0003_ip = 115; continue _fun0003 }
 79:
                    var3 = global;
                    var6 = var3.Error;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {constructor: {value: var6}});
                    var11 = 'this should only be used in test mode';
                    var12 = var4;
                    var3 = new var12[var6](var11, var10);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 115:
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
 175:
                    return var3;
 177:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 238; continue _fun0003 }
 183:
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
 238:
                    return var3;
 241:
                    return var2;
 244:
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
 0:
                    StartGenerator();
                    var10 = arg1;
                    var5 = arg3;
                    var8 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 581; continue _fun0004 }
 19:
                    var12 = arg2;
                    var13 = var5;
                    var7 = undefined;
                    var3 = undefined;
                    var11 = undefined;
                    var2 = undefined;
                    var4 = {};
                    var4['payment_source_id'] = var5;
                    var5 = null;
                    var9 = var5 == var8;
                    var5 = undefined;
                    if(var9) { _fun0004_ip = 57; continue _fun0004 }
 51:
                    var5 = var8.isGift;
 57:
                    var4['gift'] = var5;
                    var11 = var4;
                    var8 = _closure1_slot6;
                    var5 = var8.inTestModeForApplication;
                    var5 = var5.bind(var8)(var10);
                    if(var5) { _fun0004_ip = 101; continue _fun0004 }
 86:
                    var9 = _closure1_slot4;
                    var8 = var9.inDevModeForApplication;
                    var5 = var8.bind(var9)(var10);
 101:
                    if(!var5) { _fun0004_ip = 115; continue _fun0004 }
 104:
                    var8 = var11;
                    var5 = true;
                    var8['test_mode'] = var5;
 115:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var9 = 5;
                    var5 = var5[var9];
                    var10 = var8.bind(var7)(var5);
                    var8 = var10.dispatch;
                    var5 = {};
                    var14 = 'SKU_PURCHASE_PREVIEW_FETCH';
                    var5['type'] = var14;
                    var14 = var12;
                    var5['skuId'] = var14;
                    var5 = var8.bind(var10)(var5);
 165: // try_start_0
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 6;
                    var5 = var10[var5];
                    var10 = var8.bind(var7)(var5);
                    var8 = var10.httpGetWithCountryCodeQuery;
                    var5 = {};
                    var16 = _closure1_slot8;
                    var15 = var16.STORE_SKU_PURCHASE;
                    var14 = var12;
                    var14 = var15.bind(var16)(var14);
                    var5['url'] = var14;
                    var5['query'] = var11;
                    var11 = true;
                    var5['oldFormErrors'] = var11;
                    var11 = false;
                    var5['rejectWithError'] = var11;
                    var5 = var8.bind(var10)(var5);
                    SaveGenerator(address=242);
 240:
                    return var5;
 242:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 318; continue _fun0004 }
 248:
                    var3 = var5;
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var9];
                    var11 = var10.bind(var7)(var8);
                    var10 = var11.dispatch;
                    var8 = {};
                    var14 = 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS';
                    var8['type'] = var14;
                    var14 = var12;
                    var8['skuId'] = var14;
                    var8['paymentSourceId'] = var13;
                    var13 = var5.body;
                    var8['price'] = var13;
                    var8 = var10.bind(var11)(var8);
 313: // try_end0
                    _fun0004_ip = 576; continue _fun0004;
 318:
                    return var5;
 321: // catch_target0
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
                    if(var5) { _fun0004_ip = 447; continue _fun0004 }
 399:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var8.bind(var7)(var5);
                    var9 = var5.BillingError;
                    var17 = var6;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var18 = var8;
                    var5 = new var18[var9](var17, var16);
                    var5 = var5 instanceof Object ? var5 : var8;
                    _fun0004_ip = 450; continue _fun0004;
 447:
                    var5 = var6;
 450:
                    var2 = var5;
                    var6 = var5.code;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 10;
                    var5 = var5[var8];
                    var5 = var9.bind(var7)(var5);
                    var5 = var5.ErrorCodes;
                    var5 = var5.BILLING_BUNDLE_ALREADY_PURCHASED;
                    if(!(var6 !== var5)) { _fun0004_ip = 579; continue _fun0004 }
 494:
                    var5 = var2;
                    var6 = var5.code;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var9.bind(var7)(var5);
                    var5 = var5.ErrorCodes;
                    var5 = var5.BILLING_BUNDLE_PARTIALLY_OWNED;
                    if(!(var6 !== var5)) { _fun0004_ip = 579; continue _fun0004 }
 535:
                    var5 = var2;
                    var5 = var5.code;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.ErrorCodes;
                    var4 = var4.INVALID_BILLING_ADDRESS;
                    if(!(var5 !== var4)) { _fun0004_ip = 579; continue _fun0004 }
 576:
                    return var3;
 579:
                    throw var2;
 581:
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
 0:
                    StartGenerator();
                    var12 = arg1;
                    var11 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 334; continue _fun0005 }
 16:
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
 81: // try_start_0
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
 150:
                    return var2;
 152:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 230; continue _fun0005 }
 158:
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
 227: // try_end0
                    return var3;
 230:
                    return var2;
 233: // catch_target0
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
 334:
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
    var1 = function _purchaseSKU() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var26 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 1417; continue _fun0006 }
 18:
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
                    var21 = undefined;
                    var5 = undefined;
                    var22 = undefined;
                    var20 = undefined;
                    var10 = undefined;
                    var18 = undefined;
                    var15 = undefined;
                    var23 = undefined;
                    var12 = undefined;
                    var2 = undefined;
                    var9 = {};
                    var32 = _closure1_slot9;
                    var33 = var9;
                    var24 = copyDataProperties(var33, var32);
                    var32 = arg3;
                    var33 = var9;
                    var24 = copyDataProperties(var33, var32);
                    var3 = var9.paymentSource;
                    var16 = var9.expectedAmount;
                    var11 = var9.expectedCurrency;
                    var17 = var9.analyticsLoadId;
                    var14 = var9.isGift;
                    var21 = var9.giftInfoOptions;
                    var5 = var9.subscriptionPlanId;
                    var22 = var9.loadId;
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
                    if(var24) { _fun0006_ip = 225; continue _fun0006 }
 207:
                    var26 = _closure1_slot4;
                    var25 = var26.inDevModeForApplication;
                    var24 = var13;
                    var19 = var25.bind(var26)(var24);
 225:
                    var18 = var19;
 228: // try_start_0
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
 279:
                    return var5;
 281:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=23);
                    if(var24) { _fun0006_ip = 1012; continue _fun0006 }
 290:
                    var19['gateway_checkout_context'] = var5;
                    var19['load_id'] = var22;
                    var15 = var19;
                    if(var18) { _fun0006_ip = 584; continue _fun0006 }
 309:
                    var18 = var3;
                    var22 = null;
                    if(!(var22 != var18)) { _fun0006_ip = 551; continue _fun0006 }
 321:
                    var19 = var15;
                    var26 = var3;
                    var18 = var26.id;
                    var19['payment_source_id'] = var18;
                    var24 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var25 = 13;
                    var18 = var18[var25];
                    var24 = var24.bind(var8)(var18);
                    var18 = var24.createPaymentSourceToken;
                    var18 = var18.bind(var24)(var26);
                    SaveGenerator(address=373);
 371:
                    return var18;
 373:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=23);
                    if(var24) { _fun0006_ip = 581; continue _fun0006 }
 382:
                    var19['payment_source_token'] = var18;
                    var26 = _closure1_slot7;
                    var24 = var26.has;
                    var19 = var3;
                    var19 = var19.type;
                    var19 = var24.bind(var26)(var19);
                    if(!var19) { _fun0006_ip = 551; continue _fun0006 }
 416:
                    var24 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var19 = var19[var25];
                    var25 = var24.bind(var8)(var19);
                    var24 = var25.popupBridgeState;
                    var19 = var3;
                    var19 = var19.type;
                    var19 = var24.bind(var25)(var19);
                    SaveGenerator(address=456);
 454:
                    return var19;
 456:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=23);
                    if(var24) { _fun0006_ip = 578; continue _fun0006 }
 462:
                    var23 = var19;
                    var24 = var15;
                    var26 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var25 = 11;
                    var25 = var27[var25];
                    var26 = var26.bind(var8)(var25);
                    var25 = var26.getAPIBaseURL;
                    var25 = var25.bind(var26)();
                    var29 = _closure1_slot8;
                    var28 = var29.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    var26 = var3;
                    var27 = var26.type;
                    var30 = var22 != var19;
                    var26 = '';
                    if(!var30) { _fun0006_ip = 530; continue _fun0006 }
 527:
                    var26 = var23;
 530:
                    var23 = 'success';
                    var23 = var28.bind(var29)(var27, var26, var23);
                    var23 = var25 + var23;
                    var24['return_url'] = var23;
 551:
                    var23 = var15;
                    var23['gift_info_options'] = var21;
                    var21 = var20;
                    if(!(var22 != var21)) { _fun0006_ip = 595; continue _fun0006 }
 567:
                    var21 = var15;
                    var21['country_code'] = var20;
                    _fun0006_ip = 595; continue _fun0006;
 578: // try_end0
                    return var19;
 581:
                    return var18;
 584: // try_start_1
                    var19 = var15;
                    var18 = true;
                    var19['test_mode'] = var18;
 595:
                    var18 = var16;
                    var19 = null;
                    if(!(var19 != var18)) { _fun0006_ip = 615; continue _fun0006 }
 604:
                    var18 = var15;
                    var18['expected_amount'] = var16;
 615:
                    var16 = var11;
                    if(!(var19 != var16)) { _fun0006_ip = 633; continue _fun0006 }
 622:
                    var16 = var15;
                    var16['expected_currency'] = var11;
 633:
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
                    if(!(var19 != var11)) { _fun0006_ip = 690; continue _fun0006 }
 679:
                    var11 = var15;
                    var11['order_id'] = var10;
 690:
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
                    SaveGenerator(address=782);
 780:
                    return var10;
 782:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0006_ip = 1009; continue _fun0006 }
 791:
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
                    if(!(var19 == var18)) { _fun0006_ip = 855; continue _fun0006 }
 849:
                    var18 = new Array(0);
                    _fun0006_ip = 905; continue _fun0006;
 855:
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
 905:
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
                    var32 = var12.body;
                    var33 = var11;
                    var16 = copyDataProperties(var33, var32);
                    var12 = var12.body;
                    var16 = var12.applied_user_discounts;
                    var12 = 'appliedUserDiscounts';
                    var11[var12] = var16;
                    var12 = 'redirectConfirmation';
                    var11[var12] = var15;
 1006: // try_end1
                    return var11;
 1009:
                    return var10;
 1012:
                    return var5;
 1015: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    var4 = var10;
                    var12 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var11 = 9;
                    var5 = var5[var11];
                    var5 = var12.bind(var8)(var5);
                    var5 = var5.BillingError;
                    var5 = var10 instanceof var5;
                    if(var5) { _fun0006_ip = 1101; continue _fun0006 }
 1053:
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var5 = var10.bind(var8)(var5);
                    var11 = var5.BillingError;
                    var33 = var4;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {constructor: {value: var11}});
                    var34 = var10;
                    var5 = new var34[var11](var33, var32);
                    var10 = var5 instanceof Object ? var5 : var10;
                    _fun0006_ip = 1104; continue _fun0006;
 1101:
                    var10 = var4;
 1104:
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
                    if(!var11) { _fun0006_ip = 1195; continue _fun0006 }
 1154:
                    var11 = var2;
                    var12 = var11.code;
                    var15 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var10];
                    var11 = var15.bind(var8)(var11);
                    var11 = var11.ErrorCodes;
                    var11 = var11.AUTHENTICATION_REQUIRED;
                    var5 = var12 !== var11;
 1195:
                    if(var5) { _fun0006_ip = 1250; continue _fun0006 }
 1198:
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
 1250:
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
                    if(!(var7 === var5)) { _fun0006_ip = 1415; continue _fun0006 }
 1339:
                    var5 = var4;
                    var5 = var5.body;
                    var5 = var5.payment_id;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 13;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    if(var5) { _fun0006_ip = 1395; continue _fun0006 }
 1376:
                    var7 = var6.dispatchConfirmationError;
                    var5 = 'payment id cannot be null on redirected confirmations.';
                    var5 = var7.bind(var6)(var5);
                    throw var5;
 1395:
                    var5 = var6.handleConfirmation;
                    var4 = var4.body;
                    var3 = var5.bind(var6)(var4, var3);
                    return var3;
 1415:
                    throw var2;
 1417:
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
    var1 = function _resendPaymentVerificationEmail() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 239; continue _fun0007 }
 10: // try_start_0
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
 117:
                    return var2;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 140; continue _fun0007 }
 125:
                    var10 = var2.body;
                    var11 = var4;
                    var5 = copyDataProperties(var11, var10);
 137: // try_end0
                    return var4;
 140:
                    return var2;
 143: // catch_target0
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
                    if(var4) { _fun0007_ip = 234; continue _fun0007 }
 186:
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
                    _fun0007_ip = 237; continue _fun0007;
 234:
                    var2 = var3;
 237:
                    throw var2;
 239:
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
    var4 = function purchaseSKU() {
        var1 = undefined;
        var4 = _closure1_slot15;
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
        var4 = _closure1_slot16;
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