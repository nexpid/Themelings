// app/modules/storefront/StorefrontActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function shouldFetchStorefrontPromotions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot6;
            var2 = var3.getFetchState;
            var4 = var2.bind(var3)(var5);
            var2 = undefined;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'loading';
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot6;
            var2 = var3.getFetchedAt;
            var3 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = 'error';
            if(!(var2 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot10;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var2 = _closure1_slot9;
case 10:
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var1 = var1 - var3;
            var1 = var1 > var2;
            return var1;
case 6:
            var1 = true;
            return var1;
case 4:
            var1 = false;
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _maybeFetchStorefrontPromotions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var2 = undefined;
                    var6 = undefined;
                    var12 = undefined;
                    var5 = var7.filter;
                    var4 = _closure1_slot11;
                    var4 = var5.bind(var7)(var4);
                    var6 = var4;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14: // try_start_0
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var8 = 8;
                    var4 = var7[var8];
                    var9 = var5.bind(var2)(var4);
                    var5 = var9.dispatch;
                    var4 = {};
                    var10 = 'STOREFRONT_PROMOTIONS_FETCH_START';
                    var4['type'] = var10;
                    var10 = var6;
                    var4['applicationIds'] = var10;
                    var4 = var5.bind(var9)(var4);
                    var5 = _closure1_slot5;
                    var4 = var5.getPromotionIdOverride;
                    var11 = var4.bind(var5)();
                    var12 = var11;
                    var5 = _closure1_slot0;
                    var4 = 9;
                    var4 = var7[var4];
                    var4 = var5.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var5 = var7.get;
                    var4 = {};
                    var9 = _closure1_slot8;
                    var9 = var9.STOREFRONT_PROMOTIONS;
                    var4['url'] = var9;
                    var9 = {};
                    var9['application_ids'] = var10;
                    var10 = null;
                    if(!(var10 == var11)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var10 = {};
                    _fun0002_ip = 17; continue _fun0002;
case 15:
                    var11 = {};
                    var11['promotion_id_override'] = var12;
                    var10 = var11;
case 17:
                    var14 = var9;
                    var13 = var10;
                    var10 = copyDataProperties(var14, var13);
                    var4['query'] = var9;
                    var9 = true;
                    var4['rejectWithError'] = var9;
                    var4 = var5.bind(var7)(var4);
                    SaveGenerator(address=219);
case 18:
                    return var4;
case 19:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var5 = var4.body;
                    var9 = var5.promotions;
                    var7 = var9.map;
                    var5 = function(arg1) {
                        var3 = _closure1_slot7;
                        var2 = var3.createFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var7.bind(var9)(var5);
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var8 = var7.bind(var2)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var10 = 'STOREFRONT_PROMOTIONS_FETCH_SUCCESS';
                    var5['type'] = var10;
                    var10 = var6;
                    var5['applicationIds'] = var10;
                    var5['promotions'] = var9;
                    var5 = var7.bind(var8)(var5);
case 22: // try_end0
                    _fun0002_ip = 13; continue _fun0002;
case 20:
                    return var4;
case 23: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'STOREFRONT_PROMOTIONS_FETCH_FAIL';
                    var3['type'] = var7;
                    var3['applicationIds'] = var6;
                    var3 = var4.bind(var5)(var3);
case 13:
                    return var2;
case 11:
                    return var1;
                }
            };
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
    var1 = function _fetchStorefrontPricesForApplicationId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var2 = arg1;
                    var6 = var2.applicationId;
                    var4 = undefined;
                    SaveGenerator(address=21);
case 26:
                    return var4;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 28; continue _fun0003 }
case 3:
                    var5 = _closure1_slot15;
                    var3 = {};
                    var7 = 'application';
                    var3['type'] = var7;
                    var3['applicationId'] = var6;
                    var3 = var5.bind(var4)(var3);
                    SaveGenerator(address=57);
case 29:
                    return var3;
case 30:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    return var4;
case 31:
                    return var3;
case 28:
                    return var2;
case 24:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _fetchStorefrontPricesForSkuIds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 10; continue _fun0004 }
case 25:
                    var2 = arg1;
                    var6 = var2.skuIds;
                    var4 = undefined;
                    SaveGenerator(address=22);
case 33:
                    return var4;
case 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var5 = _closure1_slot15;
                    var3 = {};
                    var7 = 'skus';
                    var3['type'] = var7;
                    var3['skuIds'] = var6;
                    var3 = var5.bind(var4)(var3);
                    SaveGenerator(address=59);
case 30:
                    return var3;
case 37:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    return var4;
case 38:
                    return var3;
case 35:
                    return var2;
case 10:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function fetchStorefrontPrices() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _fetchStorefrontPrices() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var2 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var6 = undefined;
                    var10 = undefined;
                    var12 = undefined;
                    var4 = {'shouldFetch': false, 'filteredSkuIds': null, 'applicationId': null};
                    var7 = new Array(0);
                    var4['filteredSkuIds'] = var7;
                    var11 = null;
                    var3 = var4.filteredSkuIds;
                    var5 = var4.applicationId;
                    var4 = var4.shouldFetch;
                    if(!var4) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var4 = var5;
                    if(!(var11 == var4)) { _fun0005_ip = 44; continue _fun0005 }
case 10:
                    var4 = {};
                    var7 = 'skus';
                    var4['type'] = var7;
                    var7 = var3;
                    var4['skuIds'] = var7;
                    _fun0005_ip = 45; continue _fun0005;
case 44:
                    var7 = {};
                    var8 = 'application';
                    var7['type'] = var8;
                    var8 = var5;
                    var7['applicationId'] = var8;
                    var4 = var7;
case 45:
                    var6 = var4;
case 46: // try_start_0
                    var9 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var7 = var7[var4];
                    var13 = var9.bind(var2)(var7);
                    var9 = var13.dispatch;
                    var7 = {};
                    var14 = 'SKUS_PRICING_FETCH_START';
                    var7['type'] = var14;
                    var14 = var6;
                    var7['priceId'] = var14;
                    var7 = var9.bind(var13)(var7);
                    var7 = var5;
                    if(!(var11 == var7)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var13 = {};
                    var13['sku_ids'] = var3;
                    _fun0005_ip = 49; continue _fun0005;
case 47:
                    var3 = {};
                    var3['application_id'] = var5;
                    var13 = var3;
case 49:
                    var5 = _closure1_slot5;
                    var3 = var5.getPromotionIdOverride;
                    var12 = var3.bind(var5)();
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var3 = var5.bind(var2)(var3);
                    var7 = var3.HTTP;
                    var5 = var7.get;
                    var3 = {};
                    var9 = _closure1_slot8;
                    var9 = var9.STOREFRONT_PRICES;
                    var3['url'] = var9;
                    var9 = {};
                    var16 = var9;
                    var15 = var13;
                    var13 = copyDataProperties(var16, var15);
                    var13 = _closure1_slot4;
                    var13 = var13.ipCountryCode;
                    var10 = var13;
                    var14 = var11 != var13;
                    var13 = undefined;
                    if(!var14) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var13 = var10;
case 50:
                    var10 = 'country_code';
                    var9[9] = var13;
                    var10 = var12;
                    if(!(var11 == var10)) { _fun0005_ip = 52; continue _fun0005 }
case 20:
                    var10 = {};
                    _fun0005_ip = 53; continue _fun0005;
case 52:
                    var11 = {};
                    var11['promotion_id_override'] = var12;
                    var10 = var11;
case 53:
                    var16 = var9;
                    var15 = var10;
                    var10 = copyDataProperties(var16, var15);
                    var3['query'] = var9;
                    var9 = true;
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=353);
case 54:
                    return var3;
case 55:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                    var10 = var3.body;
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var4 = var11[var4];
                    var7 = var5.bind(var2)(var4);
                    var5 = var7.dispatch;
                    var4 = {};
                    var9 = 'SKUS_PRICING_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var9 = var6;
                    var4['priceId'] = var9;
                    var9 = _closure1_slot0;
                    var8 = 10;
                    var8 = var11[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.transformStorefrontPricesServer;
                    var8 = var8.bind(var9)(var10);
                    var4['data'] = var8;
                    var4 = var5.bind(var7)(var4);
case 58: // try_end0
                    _fun0005_ip = 42; continue _fun0005;
case 56:
                    return var3;
case 59: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'SKUS_PRICING_FETCH_FAIL';
                    var3['type'] = var7;
                    var3['priceId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 42:
                    return var2;
case 40:
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
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot8 = var4;
    var4 = 7;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var9 = var8.MINUTE;
    var8 = 10;
    var8 = var8 * var9;
    var _closure1_slot9 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.MINUTE;
    var _closure1_slot10 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/storefront/StorefrontActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function maybeFetchStorefrontPromotions() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybeFetchStorefrontPromotions'] = var4;
    var4 = function fetchStorefrontPricesForApplicationId() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchStorefrontPricesForApplicationId'] = var4;
    var4 = function fetchStorefrontPricesForSkuIds() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchStorefrontPricesForSkuIds'] = var4;
    var2 = function setStorefrontPromotionIdOverride(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'STOREFRONT_PROMOTION_ID_OVERRIDE_SET';
        var2['type'] = var5;
        var5 = arg1;
        var2['promotionIdOverride'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setStorefrontPromotionIdOverride'] = var2;
    return var1;
})();