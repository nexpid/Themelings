// app/modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function useFetchPurchases() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arguments[0];
            var10 = undefined;
            if(!(var11 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = false;
case 2:
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var6 = var4.bind(var10)(var3);
            var5 = var6.useStateFromStoresArray;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
                var3 = var1.isFetching;
                var1 = new Array(6);
                var1[0] = var3;
                var3 = _closure1_slot6;
                var3 = var3.isClaiming;
                var1[1] = var3;
                var3 = _closure1_slot6;
                var3 = var3.fetchError;
                var1[2] = var3;
                var3 = _closure1_slot6;
                var3 = var3.claimError;
                var1[3] = var3;
                var3 = _closure1_slot6;
                var3 = var3.purchases;
                var1[4] = var3;
                var2 = _closure1_slot6;
                var2 = var2.hasPreviouslyFetched;
                var1[5] = var2;
                return var1;
            };
            var5 = var5.bind(var6)(var4, var3);
            var4 = _closure1_slot3;
            var3 = 6;
            var9 = var4.bind(var10)(var5, var3);
            var3 = 0;
            var4 = var9[var3];
            var3 = 1;
            var7 = var9[var3];
            var3 = 2;
            var6 = var9[var3];
            _closure2_slot1 = var6;
            var3 = 3;
            var5 = var9[var3];
            var3 = var9[var2];
            var2 = 5;
            var2 = var9[var2];
            _closure2_slot2 = var2;
            var12 = _closure1_slot5;
            var9 = _closure1_slot6;
            var9 = var9.hasPreviouslyFetched;
            var9 = var12.bind(var10)(var9);
            _closure2_slot3 = var9;
            var13 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var2;
            var9 = function() {
                var2 = _closure2_slot3;
                var1 = _closure2_slot2;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var9 = var13.bind(var10)(var9, var12);
            var12 = _closure1_slot5;
            var9 = _closure1_slot6;
            var9 = var9.fetchError;
            var9 = var12.bind(var10)(var9);
            _closure2_slot4 = var9;
            var13 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var6;
            var9 = function() {
                var2 = _closure2_slot4;
                var1 = _closure2_slot1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var9 = var13.bind(var10)(var9, var12);
            var9 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var11;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = true;
                    var1 = var1 === var3;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot3;
                    var1 = var3.current;
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = null;
                    var1 = var2 == var3;
case 6:
                    if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchCollectiblesPurchases;
                    var1 = {};
                    var4 = _closure1_slot7;
                    var1['variantsReturnStyle'] = var4;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var8);
            var1 = {};
            var1['isClaiming'] = var7;
            var1['fetchPurchasesError'] = var6;
            var1['claimError'] = var5;
            var1['isFetching'] = var4;
            var1['purchases'] = var3;
            var1['hasPreviouslyFetched'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var5 = function useFetchCollectiblesCategoriesAndPurchases(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 5:
            var3 = var5.paymentGateway;
case 10:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 6;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['paymentGateway'] = var3;
            var8 = var1 == var5;
            var3 = undefined;
            if(var8) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = var5.noOp;
case 11:
            var6['noOp'] = var3;
            var8 = var1 == var5;
            var3 = undefined;
            if(var8) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = var5.logPerf;
case 13:
            var6['logPerf'] = var3;
            var8 = var1 == var5;
            var3 = undefined;
            if(var8) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = var5.countryCode;
case 15:
            var6['countryCode'] = var3;
            var3 = arg2;
            var3 = var7.bind(var4)(var6, var3);
            var10 = var3.isFetching;
            var7 = var3.categories;
            var6 = var3.fetchCategoriesError;
            var3 = var3.refreshCategories;
            var2 = _closure1_slot8;
            var8 = var1 == var5;
            var1 = undefined;
            if(var8) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var1 = var5.stalePurchasesOK;
case 17:
            var2 = var2.bind(var4)(var1);
            var8 = var2.isClaiming;
            var5 = var2.fetchPurchasesError;
            var4 = var2.claimError;
            var9 = var2.isFetching;
            var1 = {};
            var11 = var10;
            if(var11) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var11 = var9;
case 19:
            var1['isFetching'] = var11;
            var1['isFetchingCategories'] = var10;
            var1['isFetchingPurchases'] = var9;
            var1['isClaiming'] = var8;
            var1['categories'] = var7;
            var7 = var2.purchases;
            var1['purchases'] = var7;
            var1['fetchCategoriesError'] = var6;
            var1['fetchPurchasesError'] = var5;
            var1['claimError'] = var4;
            var1['refreshCategories'] = var3;
            var2 = var2.hasPreviouslyFetched;
            var1['hasPreviouslyFetched'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.useEffect;
    var _closure1_slot4 = var10;
    var6 = var6.useRef;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ShopVariantsReturnStyle;
    var6 = var6.INDIVIDUAL_PRODUCTS;
    var _closure1_slot7 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useFetchPurchases'] = var4;
    var4 = function() {
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = true;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useGetOrFetchPurchases'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot9;
            var2 = {};
            var4 = null;
            if(!(var4 == var1)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var1 = {};
case 21:
            var6 = var2;
            var5 = var1;
            var1 = copyDataProperties(var6, var5);
            var4 = true;
            var1 = 'stalePurchasesOK';
            var2[var1] = var4;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['useGetOrFetchCollectiblesCategoriesAndPurchases'] = var2;
    return var1;
})();