// app/modules/storefront/StorefrontActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function shouldFetch(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot5;
            var2 = var3.getFetchState;
            var4 = var2.bind(var3)(var5);
            var2 = undefined;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'loading';
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot5;
            var2 = var3.getFetchedAt;
            var3 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = 'error';
            if(!(var2 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot8;
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
    var _closure1_slot10 = var1;
    var1 = function _fetchStorefrontPromotions() {
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
                    var5 = var7.filter;
                    var4 = _closure1_slot10;
                    var4 = var5.bind(var7)(var4);
                    var6 = var4;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14: // try_start_0
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var8 = 7;
                    var4 = var7[var8];
                    var9 = var5.bind(var2)(var4);
                    var5 = var9.dispatch;
                    var4 = {};
                    var10 = 'STOREFRONT_PROMOTIONS_FETCH_START';
                    var4['type'] = var10;
                    var10 = var6;
                    var4['applicationIds'] = var10;
                    var4 = var5.bind(var9)(var4);
                    var5 = _closure1_slot0;
                    var4 = 8;
                    var4 = var7[var4];
                    var4 = var5.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var5 = var7.get;
                    var4 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.STOREFRONT_PROMOTIONS;
                    var4['url'] = var9;
                    var9 = {};
                    var9['application_ids'] = var10;
                    var4['query'] = var9;
                    var9 = true;
                    var4['rejectWithError'] = var9;
                    var4 = var5.bind(var7)(var4);
                    SaveGenerator(address=170);
case 15:
                    return var4;
case 16:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var5 = var4.body;
                    var9 = var5.promotions;
                    var7 = var9.map;
                    var5 = function(arg1) {
                        var3 = _closure1_slot6;
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
case 19: // try_end0
                    _fun0002_ip = 13; continue _fun0002;
case 17:
                    return var4;
case 20: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 7;
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
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
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
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 21:
                    var2 = arg1;
                    var6 = var2.applicationId;
                    var4 = undefined;
                    SaveGenerator(address=21);
case 22:
                    return var4;
case 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 24; continue _fun0003 }
case 3:
                    var5 = _closure1_slot14;
                    var3 = {};
                    var7 = 'application';
                    var3['type'] = var7;
                    var3['applicationId'] = var6;
                    var3 = var5.bind(var4)(var3);
                    SaveGenerator(address=57);
case 25:
                    return var3;
case 26:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 27:
                    return var4;
case 9:
                    return var3;
case 24:
                    return var2;
case 8:
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
                    if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 21:
                    var2 = arg1;
                    var6 = var2.skuIds;
                    var4 = undefined;
                    SaveGenerator(address=22);
case 29:
                    return var4;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var5 = _closure1_slot14;
                    var3 = {};
                    var7 = 'skus';
                    var3['type'] = var7;
                    var3['skuIds'] = var6;
                    var3 = var5.bind(var4)(var3);
                    SaveGenerator(address=59);
case 26:
                    return var3;
case 33:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    return var4;
case 34:
                    return var3;
case 31:
                    return var2;
case 28:
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
    var1 = function fetchStorefrontPrices() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
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
                    if(var2) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var2 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var6 = undefined;
                    var10 = undefined;
                    var4 = {'shouldFetch': false, 'filteredSkuIds': null, 'applicationId': null};
                    var7 = new Array(0);
                    var4['filteredSkuIds'] = var7;
                    var12 = null;
                    var3 = var4.filteredSkuIds;
                    var5 = var4.applicationId;
                    var4 = var4.shouldFetch;
                    if(!var4) { _fun0005_ip = 38; continue _fun0005 }
case 35:
                    var4 = var5;
                    if(!(var12 == var4)) { _fun0005_ip = 39; continue _fun0005 }
case 8:
                    var4 = {};
                    var7 = 'skus';
                    var4['type'] = var7;
                    var7 = var3;
                    var4['skuIds'] = var7;
                    _fun0005_ip = 40; continue _fun0005;
case 39:
                    var7 = {};
                    var8 = 'application';
                    var7['type'] = var8;
                    var8 = var5;
                    var7['applicationId'] = var8;
                    var4 = var7;
case 40:
                    var6 = var4;
case 41: // try_start_0
                    var9 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 7;
                    var7 = var7[var4];
                    var11 = var9.bind(var2)(var7);
                    var9 = var11.dispatch;
                    var7 = {};
                    var13 = 'SKUS_PRICING_FETCH_START';
                    var7['type'] = var13;
                    var13 = var6;
                    var7['priceId'] = var13;
                    var7 = var9.bind(var11)(var7);
                    var7 = var5;
                    if(!(var12 == var7)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var11 = {};
                    var11['sku_ids'] = var3;
                    _fun0005_ip = 44; continue _fun0005;
case 42:
                    var3 = {};
                    var3['application_id'] = var5;
                    var11 = var3;
case 44:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var3 = var5.bind(var2)(var3);
                    var7 = var3.HTTP;
                    var5 = var7.get;
                    var3 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.STOREFRONT_PRICES;
                    var3['url'] = var9;
                    var9 = {};
                    var15 = var9;
                    var14 = var11;
                    var11 = copyDataProperties(var15, var14);
                    var11 = _closure1_slot4;
                    var11 = var11.ipCountryCode;
                    var10 = var11;
                    var12 = var12 != var11;
                    var11 = undefined;
                    if(!var12) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var11 = var10;
case 45:
                    var10 = 'country_code';
                    var9[9] = var11;
                    var3['query'] = var9;
                    var9 = true;
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=306);
case 47:
                    return var3;
case 48:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 49; continue _fun0005 }
case 13:
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
                    var8 = 9;
                    var8 = var11[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.transformStorefrontPricesServer;
                    var8 = var8.bind(var9)(var10);
                    var4['data'] = var8;
                    var4 = var5.bind(var7)(var4);
case 50: // try_end0
                    _fun0005_ip = 38; continue _fun0005;
case 49:
                    return var3;
case 51: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'SKUS_PRICING_FETCH_FAIL';
                    var3['type'] = var7;
                    var3['priceId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 38:
                    return var2;
case 36:
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
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var7 = 6;
    var4 = var6[var7];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var9 = var4.HOUR;
    var4 = 12;
    var4 = var4 * var9;
    var _closure1_slot8 = var4;
    var4 = var6[var7];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var9 = var4.MINUTE;
    var4 = 10;
    var9 = var4 * var9;
    var _closure1_slot9 = var9;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.Millis;
    var7 = var7.MINUTE;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/storefront/StorefrontActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchStorefrontPromotions() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchStorefrontPromotions'] = var4;
    var4 = function fetchStorefrontPricesForApplicationId() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchStorefrontPricesForApplicationId'] = var4;
    var2 = function fetchStorefrontPricesForSkuIds() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchStorefrontPricesForSkuIds'] = var2;
    return var1;
})();