// app/modules/storefront/StorefrontProductActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _maybeFetchProductsWithSkus() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = var2.productIds;
                    var2 = var2.ignoreCache;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = false;
case 4:
                    var12 = var2;
                    var7 = undefined;
                    SaveGenerator(address=42);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var6 = arg1;
                            var1 = global;
                            var3 = var1.Boolean;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var6);
                            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var2 = false;
                            return var2;
case 10:
                            var3 = _closure1_slot5;
                            var2 = var3.getFetchState;
                            var5 = var2.bind(var3)(var6);
                            var2 = 'loading';
                            if(!(var2 !== var5)) { _fun0002_ip = 12; continue _fun0002 }
case 9:
                            var3 = _closure1_slot5;
                            var2 = var3.getFetchedAt;
                            var3 = var2.bind(var3)(var6);
                            var2 = null;
                            if(!(var2 == var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                            var2 = true;
                            return var2;
case 13:
                            var2 = 'error';
                            if(!(var2 !== var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                            var2 = _closure1_slot8;
                            _fun0002_ip = 17; continue _fun0002;
case 15:
                            var2 = _closure1_slot9;
case 17:
                            var4 = var1.Date;
                            var1 = var4.now;
                            var1 = var1.bind(var4)();
                            var1 = var1 - var3;
                            var1 = var1 > var2;
                            return var1;
case 12:
                            var1 = false;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var7 = var4;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0001_ip = 18; continue _fun0001 }
case 19: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var8 = 6;
                    var4 = var6[var8];
                    var11 = var5.bind(var3)(var4);
                    var5 = var11.dispatch;
                    var4 = {};
                    var10 = 'STOREFRONT_PRODUCTS_WITH_SKUS_FETCH';
                    var4['type'] = var10;
                    var10 = var7;
                    var4['productIds'] = var10;
                    var4 = var5.bind(var11)(var4);
                    var5 = _closure1_slot0;
                    var4 = 7;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.httpGetWithCountryCodeQuery;
                    var4 = {};
                    var11 = _closure1_slot7;
                    var11 = var11.STOREFRONT_PRODUCTS_WITH_SKUS;
                    var4['url'] = var11;
                    var11 = {};
                    var11['product_ids'] = var10;
                    var10 = _closure1_slot4;
                    var10 = var10.locale;
                    var11['locale'] = var10;
                    var10 = true;
                    var11['with_bundled_skus'] = var10;
                    var11['include_google_sku_ids'] = var10;
                    var11['ignore_cache'] = var12;
                    var4['query'] = var11;
                    var4['rejectWithError'] = var10;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=237);
case 20:
                    return var4;
case 21:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.dispatch;
                    var5 = {};
                    var10 = 'STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS';
                    var5['type'] = var10;
                    var10 = var7;
                    var5['productIds'] = var10;
                    var10 = var4.body;
                    var11 = var10.products;
                    var10 = var11.map;
                    var9 = _closure1_slot6;
                    var9 = var9.fromServer;
                    var9 = var10.bind(var11)(var9);
                    var5['products'] = var9;
                    var5 = var6.bind(var8)(var5);
case 24: // try_end0
                    _fun0001_ip = 18; continue _fun0001;
case 22:
                    return var4;
case 25: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 6;
                    var4 = var10[var4];
                    var6 = var8.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var11 = 'STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE';
                    var4['type'] = var11;
                    var4['productIds'] = var7;
                    var7 = 8;
                    var7 = var10[var7];
                    var7 = var8.bind(var3)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var15 = var8;
                    var14 = var9;
                    var7 = new var15[var7](var14, var13);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var4['apiError'] = var7;
                    var4 = var5.bind(var6)(var4);
case 18:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var4 = function shouldFetchProductBySku(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var1 = global;
            var3 = var1.Boolean;
            var2 = undefined;
            var2 = var3.bind(var2)(var6);
            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = false;
            return var2;
case 10:
            var3 = _closure1_slot5;
            var2 = var3.getFetchStateForSku;
            var5 = var2.bind(var3)(var6);
            var2 = 'loading';
            if(!(var2 !== var5)) { _fun0003_ip = 26; continue _fun0003 }
case 9:
            var3 = _closure1_slot5;
            var2 = var3.getFetchedAtForSku;
            var3 = var2.bind(var3)(var6);
            var2 = null;
            if(!(var2 == var3)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = true;
            return var2;
case 27:
            var2 = 'error';
            if(!(var2 !== var5)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var2 = _closure1_slot8;
            _fun0003_ip = 31; continue _fun0003;
case 29:
            var2 = _closure1_slot9;
case 31:
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var1 = var1 - var3;
            var1 = var1 > var2;
            return var1;
case 26:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = function _maybeFetchProductsBySkuIds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 32; continue _fun0004 }
case 3:
                    var8 = var2.skuIds;
                    var2 = var2.ignoreCache;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var2 = false;
case 4:
                    var12 = var2;
                    var7 = undefined;
                    SaveGenerator(address=42);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 33; continue _fun0004 }
case 9:
                    var6 = var8.filter;
                    var5 = _closure1_slot11;
                    var5 = var6.bind(var8)(var5);
                    var7 = var5;
                    var6 = var5.length;
                    var5 = 0;
                    if(!(var5 !== var6)) { _fun0004_ip = 34; continue _fun0004 }
case 35: // try_start_0
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var9 = 6;
                    var5 = var8[var9];
                    var11 = var6.bind(var3)(var5);
                    var6 = var11.dispatch;
                    var5 = {};
                    var10 = 'STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH';
                    var5['type'] = var10;
                    var10 = var7;
                    var5['skuIds'] = var10;
                    var5 = var6.bind(var11)(var5);
                    var6 = _closure1_slot0;
                    var5 = 7;
                    var5 = var8[var5];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.httpGetWithCountryCodeQuery;
                    var5 = {};
                    var11 = _closure1_slot7;
                    var11 = var11.STOREFRONT_PRODUCTS_BY_SKU_IDS;
                    var5['url'] = var11;
                    var11 = {};
                    var11['sku_ids'] = var10;
                    var10 = _closure1_slot4;
                    var10 = var10.locale;
                    var11['locale'] = var10;
                    var10 = true;
                    var11['with_bundled_skus'] = var10;
                    var11['include_google_sku_ids'] = var10;
                    var11['ignore_cache'] = var12;
                    var5['query'] = var11;
                    var5['rejectWithError'] = var10;
                    var5 = var6.bind(var8)(var5);
                    SaveGenerator(address=230);
case 36:
                    return var5;
case 37:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var9 = var8.bind(var3)(var6);
                    var8 = var9.dispatch;
                    var6 = {};
                    var10 = 'STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS';
                    var6['type'] = var10;
                    var10 = var7;
                    var6['skuIds'] = var10;
                    var10 = var5.body;
                    var12 = var10.products;
                    var11 = var12.map;
                    var10 = _closure1_slot6;
                    var10 = var10.fromServer;
                    var10 = var11.bind(var12)(var10);
                    var6['products'] = var10;
                    var6 = var8.bind(var9)(var6);
case 40: // try_end0
                    _fun0004_ip = 34; continue _fun0004;
case 38:
                    return var5;
case 41: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 6;
                    var4 = var10[var4];
                    var6 = var8.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var11 = 'STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE';
                    var4['type'] = var11;
                    var4['skuIds'] = var7;
                    var7 = 8;
                    var7 = var10[var7];
                    var7 = var8.bind(var3)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var15 = var8;
                    var14 = var9;
                    var7 = new var15[var7](var14, var13);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var4['apiError'] = var7;
                    var4 = var5.bind(var6)(var4);
case 34:
                    return var3;
case 33:
                    return var2;
case 32:
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
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
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
    var5 = var5.Endpoints;
    var _closure1_slot7 = var5;
    var5 = 5;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var10 = var9.HOUR;
    var9 = 12;
    var9 = var9 * var10;
    var _closure1_slot8 = var9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Millis;
    var8 = var5.MINUTE;
    var5 = 10;
    var5 = var5 * var8;
    var _closure1_slot9 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/storefront/StorefrontProductActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function maybeFetchProductsWithSkus() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybeFetchProductsWithSkus'] = var5;
    var3['shouldFetchProductBySku'] = var4;
    var2 = function maybeFetchProductsBySkuIds() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybeFetchProductsBySkuIds'] = var2;
    return var1;
})();