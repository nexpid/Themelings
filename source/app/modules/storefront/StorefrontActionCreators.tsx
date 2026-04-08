// app/modules/storefront/StorefrontActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
    var1 = function getStaleThreshold(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var4 = var2 == var1;
            var3 = undefined;
            var2 = undefined;
            if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var2 = var1.type;
case 21:
            var1 = 'error';
            if(!(var1 !== var2)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.getStorefrontPricingThresholdMs;
            var1 = {};
            var4 = arg2;
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            _fun0003_ip = 25; continue _fun0003;
case 23:
            var1 = _closure1_slot10;
case 25:
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
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var7 = var2.applicationId;
                    var6 = var2.location;
                    var4 = undefined;
                    SaveGenerator(address=26);
case 28:
                    return var4;
case 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var5 = _closure1_slot16;
                    var3 = {};
                    var8 = 'application';
                    var3['type'] = var8;
                    var3['applicationId'] = var7;
                    var3 = var5.bind(var4)(var3, var6);
                    SaveGenerator(address=63);
case 32:
                    return var3;
case 33:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 8; continue _fun0004 }
case 34:
                    return var4;
case 8:
                    return var3;
case 30:
                    return var2;
case 26:
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
    var1 = function _fetchStorefrontPricesForSkuIds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 35; continue _fun0005 }
case 27:
                    var7 = var2.skuIds;
                    var6 = var2.location;
                    var4 = undefined;
                    SaveGenerator(address=27);
case 36:
                    return var4;
case 3:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var5 = _closure1_slot16;
                    var3 = {};
                    var8 = 'skus';
                    var3['type'] = var8;
                    var3['skuIds'] = var7;
                    var3 = var5.bind(var4)(var3, var6);
                    SaveGenerator(address=65);
case 33:
                    return var3;
case 39:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 23; continue _fun0005 }
case 40:
                    return var4;
case 23:
                    return var3;
case 37:
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
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 27:
                    var2 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var6 = undefined;
                    var10 = undefined;
                    var8 = function shouldFetchStorefrontPrices(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = arg1;
                            var5 = arg2;
                            var _closure5_slot0 = var5;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 9;
                            var6 = var6[var4];
                            var4 = undefined;
                            var8 = var7.bind(var4)(var6);
                            var7 = var8.getStorefrontPricingEnabled;
                            var6 = {};
                            var6['location'] = var5;
                            var6 = var7.bind(var8)(var6);
                            if(var6) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                            var6 = {'shouldFetch': false, 'filteredSkuIds': null, 'applicationId': null};
                            var7 = new Array(0);
                            var6['filteredSkuIds'] = var7;
                            return var6;
case 42:
                            var7 = var3.type;
                            var6 = 'application';
                            if(!(var6 !== var7)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                            var8 = var3.skuIds;
                            var7 = var8.filter;
                            var6 = function(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    var4 = _closure1_slot5;
                                    var3 = var4.getFetchStateForSkuId;
                                    var2 = arg1;
                                    var2 = var3.bind(var4)(var2);
                                    var3 = null;
                                    if(!(var3 != var2)) { _fun0008_ip = 46; continue _fun0008 }
case 3:
                                    var4 = _closure1_slot13;
                                    var3 = _closure5_slot0;
                                    var1 = undefined;
                                    var4 = var4.bind(var1)(var2, var3);
                                    var3 = var2.type;
                                    var1 = 'loading';
                                    var1 = var1 !== var3;
                                    if(!var1) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                                    var3 = var2.fetchedAt;
                                    var2 = global;
                                    var5 = var2.Date;
                                    var2 = var5.now;
                                    var2 = var2.bind(var5)();
                                    var2 = var2 - var4;
                                    var1 = var3 < var2;
case 47:
                                    return var1;
case 46:
                                    var1 = true;
                                    return var1;
                                }
                            };
                            var7 = var7.bind(var8)(var6);
                            var6 = var7.sort;
                            var1 = function(arg1, arg2) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var4 = _closure1_slot5;
                                    var3 = var4.getFetchStateForSkuId;
                                    var2 = arg1;
                                    var2 = var3.bind(var4)(var2);
                                    var4 = _closure1_slot5;
                                    var3 = var4.getFetchStateForSkuId;
                                    var1 = arg2;
                                    var5 = var3.bind(var4)(var1);
                                    var3 = null;
                                    if(!(var3 == var2)) { _fun0009_ip = 7; continue _fun0009 }
case 49:
                                    var4 = var3 != var5;
                                    var1 = -1;
                                    if(var4) { _fun0009_ip = 50; continue _fun0009 }
case 7:
                                    var6 = var3 != var2;
                                    var2 = 0;
                                    if(!var6) { _fun0009_ip = 42; continue _fun0009 }
case 51:
                                    var3 = var3 == var5;
                                    var2 = 0;
                                    if(!var3) { _fun0009_ip = 42; continue _fun0009 }
case 10:
                                    var2 = 1;
case 42:
                                    var1 = var2;
case 50:
                                    return var1;
                                }
                            };
                            var9 = var6.bind(var7)(var1);
                            var1 = var9.length;
                            var8 = 0;
                            if(!(var8 !== var1)) { _fun0007_ip = 18; continue _fun0007 }
case 52:
                            var1 = {'shouldFetch': true, 'filteredSkuIds': null, 'applicationId': null};
                            var7 = var9.slice;
                            var6 = 50;
                            var6 = var7.bind(var9)(var8, var6);
                            var1['filteredSkuIds'] = var6;
                            _fun0007_ip = 53; continue _fun0007;
case 18:
                            var6 = {'shouldFetch': false, 'filteredSkuIds': null, 'applicationId': null};
                            var7 = new Array(0);
                            var6['filteredSkuIds'] = var7;
                            var1 = var6;
case 53:
                            return var1;
case 44:
                            var7 = _closure1_slot5;
                            var6 = var7.getFetchStateForApplicationId;
                            var1 = var3.applicationId;
                            var1 = var6.bind(var7)(var1);
                            var2 = _closure1_slot13;
                            var4 = var2.bind(var4)(var1, var5);
                            var2 = null;
                            if(!(var2 != var1)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                            var5 = var1.type;
                            var2 = 'loading';
                            if(!(var2 !== var5)) { _fun0007_ip = 13; continue _fun0007 }
case 56:
                            var2 = var1.fetchedAt;
                            var1 = global;
                            var5 = var1.Date;
                            var1 = var5.now;
                            var1 = var1.bind(var5)();
                            var1 = var1 - var4;
                            if(!(!(var2 > var1))) { _fun0007_ip = 13; continue _fun0007 }
case 54:
                            var1 = {};
                            var2 = true;
                            var1['shouldFetch'] = var2;
                            var2 = new Array(0);
                            var1['filteredSkuIds'] = var2;
                            var2 = var3.applicationId;
                            var1['applicationId'] = var2;
                            _fun0007_ip = 57; continue _fun0007;
case 13:
                            var2 = {};
                            var4 = false;
                            var2['shouldFetch'] = var4;
                            var4 = new Array(0);
                            var2['filteredSkuIds'] = var4;
                            var3 = var3.applicationId;
                            var2['applicationId'] = var3;
                            var1 = var2;
case 57:
                            return var1;
                        }
                    };
                    var7 = arg1;
                    var4 = arg2;
                    var7 = var8.bind(var2)(var7, var4);
                    var4 = var7.shouldFetch;
                    var3 = var7.filteredSkuIds;
                    var5 = var7.applicationId;
                    if(!var4) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var4 = var5;
                    var12 = null;
                    if(!(var12 == var4)) { _fun0006_ip = 47; continue _fun0006 }
case 60:
                    var4 = {};
                    var7 = 'skus';
                    var4['type'] = var7;
                    var7 = var3;
                    var4['skuIds'] = var7;
                    _fun0006_ip = 61; continue _fun0006;
case 47:
                    var7 = {};
                    var8 = 'application';
                    var7['type'] = var8;
                    var8 = var5;
                    var7['applicationId'] = var8;
                    var4 = var7;
case 61:
                    var6 = var4;
case 62: // try_start_0
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
                    if(!(var12 == var7)) { _fun0006_ip = 63; continue _fun0006 }
case 18:
                    var11 = {};
                    var11['sku_ids'] = var3;
                    _fun0006_ip = 64; continue _fun0006;
case 63:
                    var3 = {};
                    var3['application_id'] = var5;
                    var11 = var3;
case 64:
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
                    if(!var12) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                    var11 = var10;
case 65:
                    var10 = 'country_code';
                    var9[9] = var11;
                    var3['query'] = var9;
                    var9 = true;
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=307);
case 67:
                    return var3;
case 68:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 69; continue _fun0006 }
case 70:
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
case 71: // try_end0
                    _fun0006_ip = 58; continue _fun0006;
case 69:
                    return var3;
case 72: // catch_target0
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
case 58:
                    return var2;
case 41:
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot8 = var4;
    var4 = 6;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var9 = var8.HOUR;
    var8 = 12;
    var8 = var8 * var9;
    var _closure1_slot9 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.MINUTE;
    var4 = 10;
    var4 = var4 * var7;
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