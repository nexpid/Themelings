// app/modules/storefront/StorefrontProductStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var _closure1_slot5 = var2;
    var2 = {};
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function StorefrontProductStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getFetchState';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var4 = null;
                var3 = var4 != var5;
                var1 = undefined;
                if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = _closure1_slot5;
                var3 = var3[var5];
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var2 = var3.state;
case 11:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFetchStateForSku';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = arg1;
                var4 = null;
                var3 = var4 != var5;
                var1 = undefined;
                if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var3 = _closure1_slot6;
                var3 = var3[var5];
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var2 = var3.state;
case 11:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getFetchedAt';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var4 = null;
                var3 = var4 != var5;
                var1 = undefined;
                if(!var3) { _fun0005_ip = 13; continue _fun0005 }
case 10:
                var3 = _closure1_slot5;
                var3 = var3[var5];
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0005_ip = 14; continue _fun0005 }
case 12:
                var2 = var3.fetchedAt;
case 14:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getFetchedAtForSku';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var4 = null;
                var3 = var4 != var5;
                var1 = undefined;
                if(!var3) { _fun0006_ip = 13; continue _fun0006 }
case 10:
                var3 = _closure1_slot6;
                var3 = var3[var5];
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0006_ip = 14; continue _fun0006 }
case 12:
                var2 = var3.fetchedAt;
case 14:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getFetchError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var4 = null;
                var3 = var4 != var5;
                var1 = undefined;
                if(!var3) { _fun0007_ip = 13; continue _fun0007 }
case 10:
                var3 = _closure1_slot5;
                var3 = var3[var5];
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0007_ip = 14; continue _fun0007 }
case 12:
                var2 = var3.fetchError;
case 14:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getFetchErrorForSku';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var4 = null;
                var3 = var4 != var5;
                var1 = undefined;
                if(!var3) { _fun0008_ip = 13; continue _fun0008 }
case 10:
                var3 = _closure1_slot6;
                var3 = var3[var5];
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0008_ip = 14; continue _fun0008 }
case 12:
                var2 = var3.fetchError;
case 14:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var4 = null;
                var1 = var4 != var3;
                var2 = null;
                if(!var1) { _fun0009_ip = 15; continue _fun0009 }
case 10:
                var1 = _closure1_slot5;
                var2 = var1[var3];
case 15:
                var3 = var4 == var2;
                var1 = null;
                if(var3) { _fun0009_ip = 16; continue _fun0009 }
case 12:
                var3 = var4 == var2;
                var5 = undefined;
                if(var3) { _fun0009_ip = 17; continue _fun0009 }
case 13:
                var5 = var2.state;
case 17:
                var3 = 'error';
                var1 = null;
                if(!(var3 !== var5)) { _fun0009_ip = 16; continue _fun0009 }
case 18:
                var3 = var2.product;
                var3 = var4 == var3;
                var1 = null;
                if(var3) { _fun0009_ip = 16; continue _fun0009 }
case 19:
                var1 = var2.product;
case 16:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getProductsForSku';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var4 = null;
                var3 = var4 != var5;
                var1 = undefined;
                if(!var3) { _fun0010_ip = 13; continue _fun0010 }
case 10:
                var3 = _closure1_slot6;
                var3 = var3[var5];
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0010_ip = 14; continue _fun0010 }
case 12:
                var2 = var3.products;
case 14:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'StorefrontProductStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleProductsWithSkusFetch(arg1) {
        var1 = arg1;
        var3 = var1.productIds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot5;
                var2 = {};
                var5 = 'loading';
                var2['state'] = var5;
                var1 = _closure1_slot5;
                var6 = var1[var4];
                var1 = null;
                var7 = var1 == var6;
                var1 = undefined;
                var5 = undefined;
                if(var7) { _fun0011_ip = 20; continue _fun0011 }
case 21:
                var5 = var6.product;
case 20:
                var2['product'] = var5;
                var3[var4] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['STOREFRONT_PRODUCTS_WITH_SKUS_FETCH'] = var8;
    var8 = function handleProductsWithSkusFetchSuccess(arg1) {
        var2 = arg1;
        var3 = var2.productIds;
        var5 = var2.products;
        var2 = global;
        var6 = var2.Date;
        var4 = var6.now;
        var4 = var4.bind(var6)();
        var _closure2_slot0 = var4;
        var2 = var2.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var8 = var4;
        var2 = new var8[var2](var7);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot1 = var2;
        var4 = var5.forEach;
        var2 = function(arg1) {
            var5 = arg1;
            var3 = _closure2_slot1;
            var2 = var3.add;
            var1 = var5.id;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot5;
            var2 = var5.id;
            var1 = {};
            var6 = 'success';
            var1['state'] = var6;
            var1['product'] = var5;
            var4 = _closure2_slot0;
            var1['fetchedAt'] = var4;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var5)(var2);
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot1;
                var1 = var3.has;
                var1 = var1.bind(var3)(var2);
                if(var1) { _fun0012_ip = 12; continue _fun0012 }
case 22:
                var1 = _closure1_slot5;
                var1 = delete var1[var2];
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS'] = var8;
    var8 = function handleProductsWithSkusFetchFailure(arg1) {
        var2 = arg1;
        var3 = var2.productIds;
        var2 = var2.apiError;
        var _closure2_slot0 = var2;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var _closure2_slot1 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot5;
            var2 = {};
            var1 = 'error';
            var2['state'] = var1;
            var4 = _closure2_slot1;
            var2['fetchedAt'] = var4;
            var1 = _closure2_slot0;
            var2['fetchError'] = var1;
            var1 = arg1;
            var3[var1] = var2;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE'] = var8;
    var8 = function handleProductsBySkuIdsFetch(arg1) {
        var1 = arg1;
        var3 = var1.skuIds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot6;
                var2 = {};
                var5 = 'loading';
                var2['state'] = var5;
                var1 = _closure1_slot6;
                var6 = var1[var4];
                var1 = null;
                var7 = var1 == var6;
                var1 = undefined;
                var5 = undefined;
                if(var7) { _fun0013_ip = 20; continue _fun0013 }
case 21:
                var5 = var6.products;
case 20:
                var2['products'] = var5;
                var3[var4] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH'] = var8;
    var8 = function handleProductsBySkuIdsFetchSuccess(arg1) {
        var2 = arg1;
        var5 = var2.skuIds;
        var3 = var2.products;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var _closure2_slot0 = var2;
        var6 = var3.reduce;
        var4 = function(arg1, arg2) {
            var1 = arg1;
            var3 = arg2;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var3;
            var4 = var3.skuIds;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure3_slot0;
                    var4 = var2[var3];
                    var2 = null;
                    if(!(var2 != var4)) { _fun0014_ip = 23; continue _fun0014 }
case 24:
                    var2 = _closure3_slot0;
                    var5 = var2[var3];
                    var4 = var5.push;
                    var2 = _closure3_slot1;
                    var2 = var4.bind(var5)(var2);
                    _fun0014_ip = 25; continue _fun0014;
case 23:
                    var2 = _closure3_slot0;
                    var4 = _closure3_slot1;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var2[var3] = var1;
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = {};
        var2 = var6.bind(var3)(var4, var2);
        var _closure2_slot1 = var2;
        var4 = var5.forEach;
        var2 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = arg1;
                var1 = _closure2_slot1;
                var2 = var1[var3];
                var1 = null;
                if(!(var1 == var2)) { _fun0015_ip = 26; continue _fun0015 }
case 24:
                var1 = _closure1_slot6;
                var1 = delete var1[var3];
                _fun0015_ip = 4; continue _fun0015;
case 26:
                var2 = _closure1_slot6;
                var1 = {};
                var5 = 'success';
                var1['state'] = var5;
                var5 = _closure2_slot1;
                var5 = var5[var3];
                var1['products'] = var5;
                var4 = _closure2_slot0;
                var1['fetchedAt'] = var4;
                var2[var3] = var1;
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2);
        var2 = var3.forEach;
        var1 = function(arg1) {
            var4 = arg1;
            var3 = _closure1_slot5;
            var2 = var4.id;
            var1 = {};
            var5 = 'success';
            var1['state'] = var5;
            var1['product'] = var4;
            var4 = _closure2_slot0;
            var1['fetchedAt'] = var4;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS'] = var8;
    var8 = function handleProductsBySkuIdsFetchFailure(arg1) {
        var2 = arg1;
        var3 = var2.skuIds;
        var2 = var2.apiError;
        var _closure2_slot0 = var2;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var _closure2_slot1 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot6;
            var2 = {};
            var1 = 'error';
            var2['state'] = var1;
            var4 = _closure2_slot1;
            var2['fetchedAt'] = var4;
            var1 = _closure2_slot0;
            var2['fetchError'] = var1;
            var1 = arg1;
            var3[var1] = var2;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE'] = var8;
    var8 = function handleCollectionsWithProductsFetchSuccess(arg1) {
        var2 = arg1;
        var3 = var2.collections;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.products;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot5;
                var2 = var4.id;
                var1 = {};
                var5 = 'success';
                var1['state'] = var5;
                var1['product'] = var4;
                var4 = _closure2_slot0;
                var1['fetchedAt'] = var4;
                var3[var2] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS'] = var8;
    var8 = function handleCollectionsForApplicationFetchSuccess(arg1) {
        var2 = arg1;
        var3 = var2.collections;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.products;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot5;
                var2 = var4.id;
                var1 = {};
                var5 = 'success';
                var1['state'] = var5;
                var1['product'] = var4;
                var4 = _closure2_slot0;
                var1['fetchedAt'] = var4;
                var3[var2] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS'] = var8;
    var4 = function handleLogout() {
        var1 = {};
        _closure1_slot5 = var1;
        var1 = {};
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/storefront/StorefrontProductStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();