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
            var3 = _closure1_slot7;
            var2 = var3.getFetchState;
            var4 = var2.bind(var3)(var5);
            var2 = undefined;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'loading';
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot7;
            var2 = var3.getFetchedAt;
            var3 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = 'error';
            if(!(var2 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot9;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var2 = _closure1_slot10;
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
                    var4 = _closure1_slot11;
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
                    var9 = _closure1_slot8;
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
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function getStaleThreshold(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var2 = var1.type;
case 21:
            var1 = 'error';
            if(!(var1 !== var2)) { _fun0003_ip = 23; continue _fun0003 }
case 3:
            var1 = _closure1_slot9;
            _fun0003_ip = 24; continue _fun0003;
case 23:
            var1 = _closure1_slot10;
case 24:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _fetchStorefrontPricesForApplicationId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var4 = _closure1_slot16;
                    var2 = {};
                    var3 = 'application';
                    var2['type'] = var3;
                    var3 = arg1;
                    var2['applicationId'] = var3;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    SaveGenerator(address=42);
case 27:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 14; continue _fun0004 }
case 29:
                    return var3;
case 14:
                    return var2;
case 25:
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
    var1 = function _fetchStorefrontPricesForSkuIds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 30; continue _fun0005 }
case 26:
                    var4 = _closure1_slot16;
                    var2 = {};
                    var3 = 'skus';
                    var2['type'] = var3;
                    var3 = arg1;
                    var2['skuIds'] = var3;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    SaveGenerator(address=43);
case 31:
                    return var2;
case 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    return var3;
case 32:
                    return var2;
case 30:
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
    var1 = function fetchStorefrontPrices() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _fetchStorefrontPrices() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var2 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var6 = undefined;
                    var10 = undefined;
                    var7 = function shouldFetchStorefrontPrices(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = arg1;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 9;
                            var1 = var4[var1];
                            var4 = undefined;
                            var7 = var6.bind(var4)(var1);
                            var6 = var7.getStorefrontPricingEnabled;
                            var1 = {};
                            var8 = 'shouldFetchStorefrontPrices';
                            var1['location'] = var8;
                            var1 = var6.bind(var7)(var1);
                            if(var1) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                            var1 = {'shouldFetch': false, 'filteredSkuIds': null, 'applicationId': null};
                            var6 = new Array(0);
                            var1['filteredSkuIds'] = var6;
                            return var1;
case 36:
                            var6 = var3.type;
                            var1 = 'application';
                            if(!(var1 !== var6)) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                            var7 = var3.skuIds;
                            var6 = var7.filter;
                            var1 = function(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    var4 = _closure1_slot5;
                                    var3 = var4.getFetchStateForSkuId;
                                    var2 = arg1;
                                    var2 = var3.bind(var4)(var2);
                                    var3 = null;
                                    if(!(var3 != var2)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                                    var3 = _closure1_slot13;
                                    var1 = undefined;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var2.type;
                                    var1 = 'loading';
                                    var1 = var1 !== var3;
                                    if(!var1) { _fun0008_ip = 42; continue _fun0008 }
case 37:
                                    var3 = var2.fetchedAt;
                                    var2 = global;
                                    var5 = var2.Date;
                                    var2 = var5.now;
                                    var2 = var2.bind(var5)();
                                    var2 = var2 - var4;
                                    var1 = var3 < var2;
case 42:
                                    return var1;
case 40:
                                    var1 = true;
                                    return var1;
                                }
                            };
                            var7 = var6.bind(var7)(var1);
                            var6 = var7.length;
                            var1 = 0;
                            if(!(var1 !== var6)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                            var1 = {'shouldFetch': true, 'filteredSkuIds': null, 'applicationId': null};
                            var6 = var7.map;
                            var5 = function(arg1) {
                                var1 = arg1;
                                return var1;
                            };
                            var5 = var6.bind(var7)(var5);
                            var1['filteredSkuIds'] = var5;
                            _fun0007_ip = 45; continue _fun0007;
case 43:
                            var5 = {'shouldFetch': false, 'filteredSkuIds': null, 'applicationId': null};
                            var6 = new Array(0);
                            var5['filteredSkuIds'] = var6;
                            var1 = var5;
case 45:
                            return var1;
case 38:
                            var6 = _closure1_slot5;
                            var5 = var6.getFetchStateForApplicationId;
                            var1 = var3.applicationId;
                            var1 = var5.bind(var6)(var1);
                            var2 = _closure1_slot13;
                            var4 = var2.bind(var4)(var1);
                            var2 = null;
                            if(!(var2 != var1)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                            var5 = var1.type;
                            var2 = 'loading';
                            if(!(var2 !== var5)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                            var2 = var1.fetchedAt;
                            var1 = global;
                            var5 = var1.Date;
                            var1 = var5.now;
                            var1 = var1.bind(var5)();
                            var1 = var1 - var4;
                            if(!(!(var2 > var1))) { _fun0007_ip = 48; continue _fun0007 }
case 46:
                            var1 = {};
                            var2 = true;
                            var1['shouldFetch'] = var2;
                            var2 = new Array(0);
                            var1['filteredSkuIds'] = var2;
                            var2 = var3.applicationId;
                            var1['applicationId'] = var2;
                            _fun0007_ip = 50; continue _fun0007;
case 48:
                            var2 = {};
                            var4 = false;
                            var2['shouldFetch'] = var4;
                            var4 = new Array(0);
                            var2['filteredSkuIds'] = var4;
                            var3 = var3.applicationId;
                            var2['applicationId'] = var3;
                            var1 = var2;
case 50:
                            return var1;
                        }
                    };
                    var4 = arg1;
                    var7 = var7.bind(var2)(var4);
                    var4 = var7.shouldFetch;
                    var3 = var7.filteredSkuIds;
                    var5 = var7.applicationId;
                    if(!var4) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var4 = var5;
                    var12 = null;
                    if(!(var12 == var4)) { _fun0006_ip = 40; continue _fun0006 }
case 53:
                    var4 = {};
                    var7 = 'skus';
                    var4['type'] = var7;
                    var7 = var3;
                    var4['skuIds'] = var7;
                    _fun0006_ip = 54; continue _fun0006;
case 40:
                    var7 = {};
                    var8 = 'application';
                    var7['type'] = var8;
                    var8 = var5;
                    var7['applicationId'] = var8;
                    var4 = var7;
case 54:
                    var6 = var4;
case 55: // try_start_0
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
                    if(!(var12 == var7)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var11 = {};
                    var11['sku_ids'] = var3;
                    _fun0006_ip = 58; continue _fun0006;
case 56:
                    var3 = {};
                    var3['application_id'] = var5;
                    var11 = var3;
case 58:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var3 = var5.bind(var2)(var3);
                    var7 = var3.HTTP;
                    var5 = var7.get;
                    var3 = {};
                    var9 = _closure1_slot8;
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
                    if(!var12) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var11 = var10;
case 59:
                    var10 = 'country_code';
                    var9[9] = var11;
                    var3['query'] = var9;
                    var9 = true;
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=303);
case 61:
                    return var3;
case 62:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 63; continue _fun0006 }
case 64:
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
case 65: // try_end0
                    _fun0006_ip = 51; continue _fun0006;
case 63:
                    return var3;
case 66: // catch_target0
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
case 51:
                    return var2;
case 34:
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
    var7 = 1;
    var4 = var6[var7];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot8 = var4;
    var4 = 6;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var10 = var9.HOUR;
    var9 = 12;
    var9 = var9 * var10;
    var _closure1_slot9 = var9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.HOUR;
    var4 = var7 * var4;
    var _closure1_slot10 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/storefront/StorefrontActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchStorefrontPromotions() {
        var1 = undefined;
        var4 = _closure1_slot12;
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
        var4 = _closure1_slot14;
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
        var4 = _closure1_slot15;
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